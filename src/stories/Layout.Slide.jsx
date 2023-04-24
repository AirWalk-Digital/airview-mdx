import React, { useState, useLayoutEffect, useRef } from 'react'
import { TitleSlide } from './Layout.TitleSlide'
import { getContent } from './utils/mdxContent';
import { Header, SubHeader, Footer } from './Layout.HeaderFooter';
import Box from '@mui/material/Box';
import Image from 'next/image';

const DefaultLayout = ({ children, sx = {} }) => {
  let banner = '';
  let background = 'image1.jpeg'
  let header = getContent('h1', children); //just match h1 for the heading
  children = header.children;
  if (header.element) { // there must be a header to have a banner
    banner = getContent('h2', header.children)
    children = banner.children;
  }; // h2 text after the heading
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  let divHeight = 1024 - 80 + 15 - 60 + 20;
  
  if (!header.element) {divHeight = divHeight + 80 + 15;}
  
  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  });
  
  return (
    <>
      {/* <Image alt='background' src={'/backgrounds/' + background} fill style={{zIndex: '-1'}}/> */}

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", py: "0", height: '100%', ...sx }} >

        {header.element && <Header heading={header.element} sx={{ backgroundColor: 'white' }} />}
        <div ref={ref}>
        {banner.element && <SubHeader text={banner.element} />}
        </div>
        {/* <Box sx={{ display: "flex", flexDirection: "column", py: '20px', overflow: 'hidden'}} > */}

        <Box sx={{ display: "flex", flexDirection: "column", px: "25px", pt: '20px', overflow: 'hidden', height: divHeight - height }} >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

const DefaultLayoutType = (<DefaultLayout />).type;
const TitleSlideType = (<TitleSlide />).type;

let slideType = 'DefaultLayout';
let slideProps = '';

function Slide({ children, id, className }) {

  console.log('Slide:children: ', children)

  if (children && Array.isArray(children)) {
  children.forEach(child => {
    if (child.type === TitleSlide) {
      slideType = 'TitleSlideType';
      slideProps = child.props;
      children = child.props.children;
    } else if (children && children.type == TitleSlide) {
      slideType = 'TitleSlideType';
      slideProps = children.props;
      children = children.props.children;
    }
    else {
      slideType = 'DefaultLayout';
    }
  });
};
  // console.log(children)
  if (slideType === 'DefaultLayout') {
    return (
      <DefaultLayout sx={{ backgroundColor: 'background.paper' }}>
        {children}
      </DefaultLayout>
    )
  } else if (slideType === 'TitleSlideType') {
    return (
      <TitleSlide {...slideProps}>
        {children}
      </TitleSlide>
    )
  }
}

export { Slide }