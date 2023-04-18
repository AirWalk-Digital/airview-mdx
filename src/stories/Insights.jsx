import React from 'react';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid'; 

import { useTheme } from '@mui/material/styles';
import { Icon } from './Images.jsx'
import {getListContent, getMDXparts, faTypes} from './utils/mdxContent.js'

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
