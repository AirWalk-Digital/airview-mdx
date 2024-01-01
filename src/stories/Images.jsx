import React from 'react';
import Box from '@mui/material/Box';
import { getListFromContent } from './utils/mdxProcessor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScript } from './utils/useScript';
import {IconGallery, IconItem } from '@storybook/blocks';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons'

import { fal } from '@fortawesome/pro-light-svg-icons';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { useTheme } from '@mui/material/styles';


// fal -> light
// fas -> solid
// fab -> brands
// fad -> duotone (pro only)
// fass -> sharp
library.add(fab, fas, fal, fass);
// library.add(fas);


// fal -> light
// fas -> solid
// fab -> brands
// fad -> duotone (pro only)
// const faTypes = ["fal", "fas", "fab", "fad", "fa-solid"];
const faTypes = ["light", "solid", "brands", "thin", "custom"];

const FaIcon = ({ children, text = "", sx = {}, ...props }) => {
  let icon = ""
  if (!text) {
    icon = <FontAwesomeIcon icon={['fal', children]} sx={{ pl: "2%", pr: '10px' }} style={{ width: "50px", height: "50px", paddingTop: '3%', paddingBottom: '3%', paddingLeft: '2%', paddingRight: '2%' }} />
  } else {
    icon = <Box sx={{ maxWidth: '60px', ...sx }}><FontAwesomeIcon icon={['fal', children]} sx={{ pl: "2%", pr: '10px' }} style={{ width: "50px", height: "50px", paddingTop: '3%', paddingBottom: '3%', paddingLeft: '2%', paddingRight: '2%' }} /><Box sx={{ textAlign: 'center', textSize: 'xxxsmall' }}>{text}</Box></Box>
  }
  return (icon)

};

const Icon = ({ children, type = 'light', size = '75px', color = 'primary', sx = {}, ...props }) => {
  useScript('https://kit.fontawesome.com/ff3b5aaa16.js');
  const theme = useTheme();
  const themeColor = theme.palette.background[color];
  // https://kit.fontawesome.com/ff3b5aaa16.js" crossOrigin="anonymous"
  let icon = ""
  if (children.props) {
    children = children.props.children
  }
  

  if (children.slice(0, 3) === "fak") {
    type = "custom"
    children = children.slice(4)
  }
  let kiticon = "fa-kit fa-" + children
  // console.log('Icon:children: ', children)
  // console.log('Icon:kiticon: ', kiticon)

  if (children) {
    if (type === 'custom') {
      icon = <Box sx={{ ...sx, color:themeColor }}><i className={kiticon} style={{ width: size, height: size }}></i></Box>;
      // console.log(icon)
    } else if (faTypes.indexOf(type) > -1) {
      if (type === 'solid') {
        icon = <Box sx={{ ...sx, color:themeColor }}><FontAwesomeIcon icon={['fa-solid', 'fa-' + children]} style={{ width: size, height: size }}  /></Box>;
      } else if (type === 'light') {
        icon = <Box sx={{ ...sx , color:themeColor }}><FontAwesomeIcon icon={['fa-light', 'fa-' + children]} style={{ width: size, height: size }} /></Box>;
      } else if (type === 'thin') {
        icon = <Box sx={{ ...sx, color:themeColor  }}><FontAwesomeIcon icon={['fa-thin', 'fa-' + children]} style={{ width: size, height: size }} /></Box>;
      }
    }
  };
  return (icon);
};

const Team = ({ children }) => {
  let content = getListFromContent(children);

  return (<></>)

}

const FaIcons = () => {
  const icons = [
    "cloud",
    "shield-halved",
    "people-arrows",
    "server",
    "building",
    "desktop",
    "notebook",
    "arrows-maximize",
    "arrows-minimize",
    "panorama",
    "dial-max",
    "tower-control"
  ];

  const iconmap = icons.map((el, i) => (
    <IconItem name={el}>
        <Icon  size='30px' sx={{ p: '5px', m: 'auto' , px: '0.5%' }}>{el}</Icon>
    </IconItem>
  ));

  return (
    <IconGallery>
      {iconmap}
    </IconGallery>
  )

};


const CustomIcons = () => {
  
  const customIcons = [
    "terraform",
     "automation",
     "benefits-tracking",
     "calculation",
     "checklist",
     "cloud-framework",
     "cloud-hosting",
     "cloud-network",
     "cloud-network-sharing",
     "cloud-security",
     "cloud-technology-selection",
     "cloud-upload",
     "cloud-upload-download",
     "clouds",
     "computer-reporting",
     "contract-negotiation",
     "data-computer",
     "delivery",
     "development",
     "devices",
     "devops-engineering",
     "doc",
     "doc-checklist",
     "doc-plan",
     "doc-search",
     "financial-warning",
     "framework",
     "lightbulb",
     "money",
     "people-network",
     "people-sharing",
     "process",
     "programme",
     "progress",
     "reliability",
     "reporting",
     "rocket-launch",
     "rotation",
     "search",
     "security",
     "services",
     "shapes",
     "software",
     "target",
     "target-design",
     "vision",
     "warning",
     "winning"
  ]


  const iconkitmap = customIcons.map((el, i) => (
    <IconItem name={el}>
        <Icon size='30px' type='custom' sx={{ p: '5px', m: 'auto' , px: '0.5%' }}>{el}</Icon>
    </IconItem>
  ));

  return (
    <IconGallery>
      {iconkitmap}
    </IconGallery>
  )

}; 

export { FaIcon, Icon, Team, FaIcons, CustomIcons }

