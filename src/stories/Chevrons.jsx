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
import {getListContent, getMDXparts, faTypes} from './utils/mdxContent.js'

// fal -> light
// fas -> solid
// fab -> brands
// fad -> duotone (pro only)
// fass -> sharp




const ChevronProcess = ({ children, minWidth, maxWidth }, key = 0) => {

    let content = getListContent(children, key);
    // console.log(content.icon.toString());
    const theme = useTheme();

    let type = "fal";
    let icon = content.icon

    if (faTypes.indexOf(content.icon.slice(0, 3)) > -1) {
        type = content.icon.slice(0, 3)
        icon = content.icon.slice(4)
    } else if (content.icon.slice(0, 3) === "fak") {
        type = "fak"
        icon = content.icon.slice(4)
    }

    // let iconimage = fas(icon);
    return (
        <Box key={key} sx={{ display: "flex", py: "1%", fontSize: 'xsmall', minHeight: "5em" }}>
            <Box id='0' sx={{
                py: '0.5%', pl: "2%", display: "flex", alignItems: "center", backgroundColor: 'background.tertiary', borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", color: getContrastYIQ(theme.palette.background.tertiary, theme)
            }}>

                <Icon type={type} sx={{ px: "2%" }} style={{ width: "50px", height: "50px" }} >{icon}</Icon>

            </Box>

            <Box id='1' sx={{
                variant: "styles.p", px: "1%", backgroundColor: 'background.tertiary',
                pr: '80px',
                py: '0.5%', 
                minWidth: minWidth,
                maxWidth: maxWidth,
                // padding: '15px 0',
                display: 'flex',
                alignItems: 'center',
                my: '0',
                marginRight: '-30px',
                color: getContrastYIQ(theme.palette.background.tertiary, theme),
                clipPath: 'polygon(0 0, calc(100% - 70px) 0, 100% 50%, calc(100% - 70px) 100%, 0 100%)',

            }}>
                {content.heading}
            </Box>
            <Box id='2' sx={{
                variant: "styles.p", px: "1%", backgroundColor: 'background.muted',
                pr: '80px',
                pl: '90px',
                py: '0.5%', 
                minWidth: '150px',
                width: '100%',
                // padding: '15px 0',
                my: '0',
                // marginRight: '-30px',
                // display: 'inline', verticleAlign : 'middle',
                display: 'flex',
                alignItems: 'center',
                color: getContrastYIQ(theme.palette.background.secondary, theme),
                background: 'background.secondary',
                clipPath: 'polygon(0 0, calc(100% - 70px) 0, 100% 50%, calc(100% - 70px) 100%, 0 100%, 70px 50%);',

            }}>
                {content.body}
            </Box>
        </Box >

    )
}




const Chevrons = ({ children, minWidth = '20%', maxWidth = '30em', sx = {}, ...props }) => {
    let renderlist = "";

    if (children.hasOwnProperty('props')) {
        let list = React.Children.toArray(children.props.children);
        list = list.filter(item => item !== "\n") //strip all the empty entries (\n)

        // console.log('ChevronProcessTable : ', list);
        
        return (

            list.map(function (item, i) {
                if (item.hasOwnProperty('props') && item.hasOwnProperty('type')) {
                    if (item.type == "li") {
                        let li = React.Children.toArray(item.props.children); // list item
                        return (
                            <>
                                <ChevronProcess key={i} minWidth={minWidth} maxWidth={maxWidth}>{li}</ChevronProcess>
                                {/* <Box sx={{display: "flex",backgroundColor: "primary" ,width: "100%", height: "1px",}} /> */}
                            </>
                        );
                    }
                }

            })
        )

    } else {
        return (
            <p>no content</p>
        )
    }

};






export { Chevrons };
