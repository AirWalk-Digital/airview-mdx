import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid'; 

import { useTheme } from '@mui/material/styles';


import { Icon } from './Images.jsx'

import { getContrastYIQ } from './utils/colors.js';
import { getMDXparts, faTypes} from './utils/mdxContent.js'


const Banner = ({ children, sx = {}, ...props }) => {
    children = React.Children.toArray(children);
    children = children.filter(item => item !== "\n") //strip all the empty entries (\n)
    const theme = useTheme();

    console.log('StatementBanner:children: ', children);
    // let header = getContent('h3', children); // match any headings
    // let icon = getContent('p', header.children); // match any headings
    let faIcon = "";

    let header = '';
    // let icon = '';
    let text = '';

    // let {t1, = getMDXparts(children[0])
    // let content = getListContent(children, key);
    // console.log(children);
    // console.log(header.element);
    if (children.length == 3) {
        let p0 = getMDXparts(children[0]);
        let p1 = getMDXparts(children[1]);
        let p2 = getMDXparts(children[2]);
        if (p0.type == "h3" || (typeof p0.type === 'function' && p0.type.name === 'h3')) {
            header = p0.text;
        }
        if (p1.type == "p" || (typeof p1.type === 'function' && p1.type.name === 'p')) {
            faIcon = p1.text;
        }
        if (p2.type == "p" || (typeof p2.type === 'function' && p2.type.name === 'p')) {
            text = p2.text;
        }
    } else if (children.length == 2) {
        let p0 = getMDXparts(children[0]);
        let p1 = getMDXparts(children[1]);
        if (p0.type == "h3" || (typeof p0.type === 'function' && p0.type.name === 'h3')) {
            header = p0.text;
        } else {
            const textArray = p0.text.split(" ");
            if (textArray.length == 1) { //this is just an icon
                faIcon = p0.text;
            } else { //this is some normal text
                text = p0.text;
            }
        }
        const textArray = p1.text.split(" ");
        if (textArray.length == 1) { //this is just an icon
            faIcon = p1.text;
        } else { //this is some normal text
            text = p1.text;
        }

    } else if (children.length == 1) { // can only be text
        let p0 = getMDXparts(children[0]);
        text = p0.text
    } 

    // new handler

    if (children[0] && children[0].type === 'h3' && children[0].props.children || children[0] && typeof children[0].type === 'function' && children[0].type.name === 'h3' ) { // first part is a header
        header = children[0].props.children
        children = children.filter(function(obj, index) { // remove the header
            return index !== 0;
          });
    }
    if (children[0] && children[0].props.children && typeof children[0].props.children === 'string' && children[0].props.children.split(" ").length == 1) // the next element is an icon
    {
        faIcon = children[0].props.children
        children = children.filter(function(obj, index) { // remove the icon
            return index !== 0;
          });
    }
    text = children



    let type = "fal";
    let icon = faIcon;
    if (faTypes.indexOf(faIcon.slice(0, 3)) > -1) {
        type = faIcon.slice(0, 3)
        icon = faIcon.slice(4)
    } else if (faIcon.slice(0, 3) === "fak") {
        type = "fak"
        icon = faIcon.slice(4)
    }
    const statementTheme = {
        width: '100%',
        backgroundColor: theme.palette.background.secondary,
        px: '2.5%',
        py: '1%',
    }

      console.log(icon, header,text)
    let padding = '0px';
    if (icon) {
        padding = '7px'
    }
    console.log('StatementBanner:icon:type: ', type, ' :icon: ', icon);
    console.log('StatementBanner:text: ', text);
    return (
        <Box sx={{ my: "0.5%" }}>
            {header && <Box sx={{ ...statementTheme, pt: '1%', pb: '1%', borderRadius: '8px' }}>{header}</Box>}
            <Box sx={{ display: "flex", alignItems: "center", breakInside: 'avoid-column' }}>
                {/* <Box sx={{ display: "flex", alignItems: "left", paddingLeft: "2.5%" }}> */}
                {/* {faIcon && <FontAwesomeIcon icon={['fal', faIcon]} sx={{ pl: "2%", pr: '10px' }} style={{ width: "50px", height: "50px", paddingTop: '1%', paddingBottom: '1%', paddingLeft: '2%', paddingRight: '2%' }} />} */}
                {icon && <Icon type={type} sx={{  pl: '5px', pr: '1%', pt: '1%' }} >{icon}</Icon>}

                {/* <Box sx={{ variant: "styles.p", paddingLeft: "2.5%", minHeight: "100px", m: '1%' }}> */}
                <Box sx={{ py: '0', pl: padding, minHeight: "50px", m: '0.5%', display: "flex", flexDirection: 'column', alignItems: "left" }}>
                    {text}
                </Box>
            </Box>
        </Box>

    )
}

Banner.propTypes = {
    /** MDX content passed into the component */
    children: PropTypes.string.isRequired,
    /** MaterialUI sx prop for styling */
    sx: PropTypes.string,
};
export { Banner };
