import React from 'react';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid'; 

import { useTheme } from '@mui/material/styles';


import { Icon } from './Images.jsx'
import { getContrastYIQ } from './utils/colors.js';


// fal -> light
// fas -> solid
// fab -> brands
// fad -> duotone (pro only)
// fass -> sharp

const faTypes = ["fal", "fas", "fab", "fad"];


function getListContent(content, i) {

    content = content.filter(item => item !== "\n") //strip all the empty entries (\n)

    let icon = "";
    let heading = "";
    let body = "";
    let key = i;

    if ((content.hasOwnProperty('type') && content.type == "ul") || (typeof content.type === 'function' && content.type.name === 'ul')) {
        //passed at a higher level
        // console.log("((content.hasOwnProperty('type') && content.type == 'ul')|| (typeof content.type === 'function' && content.type.name ==='ul'))");
        // console.log(content);
        content = React.Children.toArray(content.props.children);

        if (Array.isArray(content)) {
            content = content[0];
        }

        if (content.hasOwnProperty('type') && typeof content.type !== 'function') {

            if (content.type == "li") {
                content = React.Children.toArray(content.props.children);
            }
        }
    }



    if (content[0].hasOwnProperty('props') && content[0].props.hasOwnProperty('children')) {
        icon = content[0].props.children; // icon or primary list item

    } else if (typeof content[0] == "string") {
        icon = content[0]
    }
    if (content[1].hasOwnProperty('props') && content[1].props.hasOwnProperty('children')) {
        let children = content[1].props.children.filter(item => item !== "\n") //strip all the empty entries (\n)
        // console.log(children)

        if (children.length > 1) {
            // there is a header and body
            if (children[0].hasOwnProperty('props') && children[0].props.hasOwnProperty('children')) {
                heading = children[0].props.children;
            }
            if (children[1].hasOwnProperty('props') && children[1].props.hasOwnProperty('children')) {
                body = children[1].props.children;
            }
        } else { // only body // remap to heading
            heading = children[0].props.children;
        }


    }

    return ({ key, icon, heading, body });

}


function getMDXparts(element) {
    if (element.hasOwnProperty('props') && element.props.hasOwnProperty('children') && element.hasOwnProperty('type')) {
        return ({ type: element.type, text: element.props['children'] })
    } else {
        return ({ type: '', text: '' });
    }
}

const Insight = ({ children, table = false, row = 0, maxRows = 0, splitter = true, sx = {} }) => {
    const theme = useTheme();

    let content = getListContent(children);

    let type = "fal";
    let icon = content.icon

    if (faTypes.indexOf(content.icon.slice(0, 3)) > -1) {
        type = content.icon.slice(0, 3)
        icon = content.icon.slice(4)
    } else if (content.icon.slice(0, 3) === "fak") {
        type = "fak"
        icon = content.icon.slice(4)
    }
    let block2 = 'flex'
    if (!content.body) { block2 = 'none' } // if there is no body, only show the header


    const Splitter = ({ row = 0, maxRows = 0, splitter = true }) => {


        if (row < maxRows - 1 && splitter) {
            return (
                <Box sx={{ display: "flex", backgroundColor: theme.palette.background.tertiary, width: "100%", height: "2px", }} />
            )
        }
        else {
            return (<></>)
        }
    }

    if (!table) {
    return (
        <>
            <Box sx={{ display: "flex", py: "0", minHeight: "4em", ...sx }}>
                <Box sx={{ px: "2%", display: "flex", alignItems: "center" }}>
                    {/* <FontAwesomeIcon icon={fas("cloud")} sx={{ px: "2%" }} style={{ width: "50px", height: "50px" }} /> */}
                    <Icon type={type} sx={{ px: "2%" }} style={{ width: "50px", height: "50px" }} >{icon}</Icon>
                </Box>
                <Box sx={{ px: "1%", py: '5px', display: 'flex', alignItems: 'center', fontSize: '2rem', minWidth: '30%', ...sx }}>
                    {content.heading}
                </Box>
                <Box sx={{ px: "1%", py: '5px', display: block2, alignItems: 'center', fontSize: '2rem', minWidth: '50%', ...sx }}>
                    {content.body}
                </Box>
            </Box>
            <Splitter row={row} maxRows={maxRows} splitter={splitter} />
        </>

    )} else {
        return (
            <TableRow key={row.name} sx={{ color: 'text.main', '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left" sx={{ color: 'text.main', borderBottomWidth: '2px', borderBottomColor: 'background.tertiary'}}><Icon type={type} sx={{ px: "2%" }} style={{ width: "50px", height: "50px" }} >{icon}</Icon></TableCell>
              <TableCell align="left" sx={{ color: 'text.main', borderBottomWidth: '2px', borderBottomColor: 'background.tertiary', fontSize: '2rem' }}>{content.heading}</TableCell>
              <TableCell align="left" sx={{ color: 'text.main', borderBottomWidth: '2px', borderBottomColor: 'background.tertiary', fontSize: '2rem'}}>{content.body}</TableCell>
            </TableRow>
            
        )
    }
};



const Insights = ({ children, sx = {}, splitter = true, ...props }) => {

    // console.log('InsightTable:children: ', children)

    if (children.hasOwnProperty('props')) {
        let list = React.Children.toArray(children.props.children);
        list = list.filter(item => item !== "\n") //strip all the empty entries (\n)
        // console.log(list)

        const insights = list.map((item, i) => (
            item.type === "li" ? (
                <Insight row={i} maxRows={list.length} splitter={splitter} key={i} sx={sx}>{React.Children.toArray(item.props.children).filter(item => item !== "\n")}</Insight>
            ) : (<p>error</p>)

        )
        )
        return (
            <Table sx={{ minWidth: 650, background: "unset", border: "unset" }}>
                <TableBody>
                    {list.map((item, i) => (
                <Insight table={true} row={i} maxRows={list.length} splitter={splitter} key={i} sx={sx}>{React.Children.toArray(item.props.children).filter(item => item !== "\n")}</Insight>
                ))}

                </TableBody>
            </Table>
        )
    } else {
        return (
            <p>no content</p>
        )
    }

};




export { Insights };
