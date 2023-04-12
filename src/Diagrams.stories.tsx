import React from 'react';
import { MermaidDiagram } from './Diagrams';
import MDXProvider, { mdComponents } from './MDXProvider';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { useState, useEffect } from 'react';

import remarkGfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images';

export default {
  title: 'Components/MermaidDiagram',
  component: MermaidDiagram,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary','tertiary', 'quaternary', 'highlight','accent', 'muted', 'paper'],
      control: { type: 'select' },
    },
  },
};

const Template = ({ children, ...args }) => {
  const [mdxContent, setMdxContent] = useState(null);

  const mdx = `
  <MermaidDiagram>
  ${children}
  </MermaidDiagram>
`;

  useEffect(() => {
    const serializeMdx = async () => {

          
      const MDXoptions = {
        remarkPlugins: [remarkGfm, remarkUnwrapImages],
        format: 'mdx',
        development: true

      };
      try {
        const mdxSource = await serialize(mdx, { scope: {}, mdxOptions: { ...MDXoptions }, parseFrontmatter: true })
        setMdxContent(mdxSource);

      } catch (error) {
        console.log('Error in serialize : ', error);
      }
    };
    serializeMdx();
  }, [mdx]);



  if (!mdxContent) {
    return <MDXProvider ><h1>....loading</h1></MDXProvider>;
  } else {
    
    // return <MDXProvider ><HeaderCard {...args}><MDXRemote {...mdxContent} components={mdComponents} /></HeaderCard></MDXProvider>;
    return <MDXProvider><MDXRemote compiledSource={mdxContent.compiledSource} components={mdComponents}/></MDXProvider>;
    // return  <MDXProvider><h1>test</h1></MDXProvider>
  }
};


// const Template = args => <FlowChart {...args} />;


export const FlowChart = Template.bind({});
FlowChart.args = {
  children: (
    `
    flowchart LR
        A[Hard edge] -->|Link text| B(Round edge)
        B --> C{Decision}
        C -->|One| D[Result one]
        C -->|Two| E[Result two]
    `
      ),
  color: 'secondary',
};
FlowChart.parameters = {
  docs: {
    source: {
      code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
    }
  }
}