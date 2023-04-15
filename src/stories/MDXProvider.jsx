import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
// import SlidePage from "../layouts/SlidePage";
// import PrintSlide from "../layouts/PrintSlide";
// import MDXViewer from "../layouts/MDXViewer";
import Image from "next/image";


// import Cover from "./Cover";
// import SpeakerNotes from "./SpeakerNotes";
// import Step from "./Step";
// import Steps from "./Steps";
// import { motion } from "framer-motion";

// MUI Components

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

// Custom components

// import { Header, Banner, Footer } from './HeaderFooter';
// import { InsightTable, Insight, ChevronProcess, ChevronProcessTable, StatementBanner, Roadmap } from './Playback';
import { Insights } from './Insights';
import { Chevrons } from './Chevrons';
import { Roadmap } from './Roadmap';
import { Banner } from './Banner';

// import {FaIcon, Icon} from './Images.jsx';
// import { ProgressTable } from './Tables.jsx';
// import { HeaderCard, Nest } from './Cards';
// import { Font } from './Styling';
// import { MermaidDiagram } from "./Diagrams";

// Layouts 
// import {Layout, Column, Item } from './Layouts';
// import { TitleSlide } from "../layouts/TitleLayout";

export const mdComponents = {
  h1: (props) => <Typography variant="h1">{props.children}</Typography>,
  h2: (props) => <Typography variant="h2">{props.children}</Typography>,
  h3: (props) => <Typography variant="h3">{props.children}</Typography>,
  h4: (props) => <Typography variant="h4">{props.children}</Typography>,
  h5: (props) => <Typography variant="h5">{props.children}</Typography>,
  p: (props) => <Typography variant="p">{props.children}</Typography>,
  img: (props) => (<div style={{position: "relative", objectFit: 'contain', height: '100%'}}><Image {...props} fill loading="lazy" /></div>),
  strong: (props) => <Typography variant="strong">{props.children}</Typography>,
  ul: (props) => <Typography variant="ul">{props.children}</Typography>,
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
  // layouts
  // SlidePage,
  // PrintSlide,
  // MDXViewer,
  // SpeakerNotes,
  // Step,
  // Steps,
  // Cover,
  // motion,
  // MUI Components
  CardHeader,
  CardContent,
  Card,
  Alert,
  // custom component
  // Header,
  // Banner,
  // Footer,
  Insights, Chevrons, Roadmap,
  Banner, 
  // FaIcon, Icon,
  // ProgressTable,
  // HeaderCard, Nest,
  // Font,
  // MermaidDiagram,
  // layouts
  // TitleSlide,
  // Layout, Column, Item
};

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);
