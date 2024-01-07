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

const Roadmap = ({ children, minWidth = '20%', maxWidth = '30em', color='secondary', sx = {}, ...props }) => {
    let renderlist = "";

    let roadmap = [];

    if (Array.isArray(children)) {
        children.map(function (item, i) {
            if (item.type === 'ol') {
                if (Array.isArray(item.props.children)) { roadmap[roadmap.length] = {title: item.props.children.filter(item => item !== "\n") }} else {roadmap[roadmap.length] = {title: item.props.children}}
            } else if (item.type.name && item.type.name === 'ul') {
                if (Array.isArray(item.props.children)) { roadmap[roadmap.length - 1].content =  item.props.children.filter(item => item !== "\n") } else {roadmap[roadmap.length - 1].content = item.props.children}
            } else if (item.type === 'p') {
                if (Array.isArray(item.props.children)) { roadmap[roadmap.length - 1].subtitle =  item.props.children.filter(item => item !== "\n") } else {roadmap[roadmap.length - 1].subtitle = item.props.children}
        }});
    } else {
        return (
            <p>no content</p>
        )
    }
    const roadmapitems = roadmap.map((item, i) => (
        <Grid item xs={3} sx={{ overflow:'hidden', ...sx}}>
            <RoadmapItem title={item.title[0].props.children} content={item.content[0].props.children} color={color}/>
        </Grid>
    ));


    return (
        <Grid container justifyContent="center" spacing={2} sx={{px:'1%', height:'100%', h1: {backgroundColor: 'unset'}, overflow:'hidden', ...sx}}>
            {roadmapitems}
        </Grid>

    );



};

const RoadmapItem = ({ title, content, minWidth, maxWidth, color='tertiary' }, key = 0) => {

    // console.log(content.toString());
    const theme = useTheme();
    // let iconimage = fas(icon);
    return (
        <Box key={key} sx={{ display: "flex", flexDirection: 'column', py: "1%", fontSize: 'xsmall', minHeight: "5em", maxHeight: '10em' }}>
            
            <Box id='1' sx={{
                backgroundColor: theme.palette.background[color], borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px",
                pr: '60px',
                pl: '2%', 
                py: '0.5%', 
                minWidth: '200px',
                maxWidth: maxWidth,
                minHeight: '100px',
                // padding: '15px 0',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                my: '0',
                // marginRight: '-30px',
                color: getContrastYIQ(theme.palette.background[color], theme),
                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)',
                em: {'&:before': {content: '"\\a "',whiteSpace: 'pre'}}

            }}>
                <Box width={'100%'} sx={{fontWeight: '400', em: {fontWeight: '200'}}}>{title}</Box>
            </Box>
            <Box sx={{
                pt: '10px',
                pl: '30px',
                pr: '50px', fontSize: '1rem'
            }}>{content}</Box>
        </Box >

    )
}
export { Roadmap };
