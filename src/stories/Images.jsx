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
const faTypes = ["fal", "fas", "fab", "fad", "fa-solid"];


const FaIcon = ({ children, text = "", sx = {}, ...props }) => {
  let icon = ""
  if (!text) {
    icon = <FontAwesomeIcon icon={['fal', children]} sx={{ pl: "2%", pr: '10px' }} style={{ width: "50px", height: "50px", paddingTop: '3%', paddingBottom: '3%', paddingLeft: '2%', paddingRight: '2%' }} />
  } else {
    icon = <Box sx={{ maxWidth: '60px', ...sx }}><FontAwesomeIcon icon={['fal', children]} sx={{ pl: "2%", pr: '10px' }} style={{ width: "50px", height: "50px", paddingTop: '3%', paddingBottom: '3%', paddingLeft: '2%', paddingRight: '2%' }} /><Box sx={{ textAlign: 'center', textSize: 'xxxsmall' }}>{text}</Box></Box>
  }
  return (icon)

};

const Icon = ({ children, type = 'fas', size = '75px', sx = {}, ...props }) => {
  useScript('https://kit.fontawesome.com/ff3b5aaa16.js');

  // https://kit.fontawesome.com/ff3b5aaa16.js" crossOrigin="anonymous"
  let icon = ""
  if (children.props) {
    children = children.props.children
  }
  

  if (children.slice(0, 3) === "fak") {
    type = "fak"
    children = children.slice(4)
  }
  let kiticon = "fa-kit fa-" + children
  // console.log('Icon:children: ', children)
  // console.log('Icon:kiticon: ', kiticon)

  if (children) {
    if (type === 'fak') {
      icon = <Box sx={{ ...sx }}><i className={kiticon} style={{ width: size, height: size }}></i></Box>;
      // console.log(icon)
    } else if (faTypes.indexOf(type) > -1) {
      if (type = 'fas') {
        icon = <Box sx={{ ...sx }}><FontAwesomeIcon icon={['fas', 'fa-' + children]} style={{ width: size, height: size }} /></Box>;
      } else if (type = 'fal') {
        icon = <Box sx={{ ...sx }}><FontAwesomeIcon icon={['fal', 'fa-' + children]} style={{ width: size, height: size }} /></Box>;
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
    <IconItem name={'fak-' + el}>
        <Icon size='30px' type='fak' sx={{ p: '5px', m: 'auto' , px: '0.5%' }}>{el}</Icon>
    </IconItem>
  ));

  return (
    <IconGallery>
      {iconkitmap}
    </IconGallery>
  )

}; 

export { FaIcon, Icon, Team, FaIcons, CustomIcons }

