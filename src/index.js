
import {
  Dummy as AirwalkIntro, 
  Dummy as AirwalkSideLayout, 
  Dummy as AirwalkLayout,
  Dummy as AirwalkColLayout,
  // Dummy as Card,
  Dummy as Popup,
  Dummy as Footer,
  Dummy as Header,
  Dummy as SlideInSlide,
  Dummy as Banner,
  // Dummy as StatementBanner,
  // Dummy as FaIcon,
  // Dummy as ProgressTable,
  Dummy as TitleSlide
} from './dummy.js'; 

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";

// MUI Components

import { Card, CardContent, CardHeader, Alert, Typography } from '@mui/material';


// Custom components

import { InsightTable, Insight, ChevronProcess, ChevronProcessTable, StatementBanner, Roadmap } from './Playback.jsx';
import {FaIcon, Icon, Team} from './Images.jsx';
import { ProgressTable } from './Tables.jsx';
import { HeaderCard, Nest } from './Cards.jsx';
import { Font } from './Styling.jsx';
import { MermaidDiagram } from './Diagrams.jsx';
// Layouts 
import {Layout, Column, Item } from './Layouts.jsx';


const CustomList = (props) => {
  const listStyles = {
    breakInside: "avoid-column",
    listStyleType: "circle",
    px: '0px',
    li: {
      listStylePosition: "inside",
      "::marker": {
        color: "tertiary",
      },
      ul: {
        listStyleType: "disc",
        marginLeft: "30px",
        li: {
          "::marker": {
            color: "tertiary",
          },
        },
        "& ul": {
          listStyleType: "disc",
          // marginLeft: "1em", // adjust the margin as needed
        },
      },
    },
    "& > li > ul": {
      listStyleType: "disc",
      // marginLeft: "1em",
    },
  };

  return (
    <Typography component="ul" sx={listStyles}>
      {props.children}
    </Typography>
  );
};


// Export
export default {
  h1: (props) => <Typography variant="h1">{props.children}</Typography>,
  h2: (props) => <Typography variant="h2">{props.children}</Typography>,
  h3: (props) => <Typography variant="h3">{props.children}</Typography>,
  h4: (props) => <Typography variant="h4">{props.children}</Typography>,
  h5: (props) => <Typography variant="h5">{props.children}</Typography>,
  hr: (props) => <></>, //remove the hr slide designation 
  p: (props) => <Typography variant="p">{props.children}</Typography>,
  // img: (props) => (<div style={{position: "relative", objectFit: 'contain', height: '100%'}}><Image {...props} fill loading="lazy" /></div>),
  strong: (props) => <Typography variant="strong">{props.children}</Typography>,
  // ul: (props) => <Typography variant="ul">{props.children}</Typography>,
  ul: CustomList,
  table: (props) => <Typography variant="table">{props.children}</Typography>,
  pre: (props) => props.children,
  code: (props) => {
    const { className } = props;
    const language = className?.replace("language-", "");
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={okaidia}
        customStyle={{overflow:'clip', fontSize: '0.75rem'}}
        {...props}
      />
    );
  },
  AirwalkIntro: (props) => null,
  AirwalkSideLayout,
  AirwalkLayout,
  AirwalkColLayout,
  Card,
  Popup,
  SlideInSlide,
  Footer,
  Header,
  Banner,
  StatementBanner,
  MermaidDiagram,
  Team,
  // MUI Components
  CardHeader,
  CardContent,
  Card,
  Alert,
  // custom component
  Header,
  Banner,
  Footer,
  InsightTable, Insight, ChevronProcess, ChevronProcessTable, StatementBanner, Roadmap,
  FaIcon, Icon,
  ProgressTable,
  HeaderCard, Nest,
  Font,
  // layouts
  TitleSlide,
  Layout, Column, Item
};
