import React from 'react';
import Alert from '@mui/material/Alert';
import MDXProvider, { mdComponents } from './MDXProvider';
import type { Meta, StoryObj } from '@storybook/react';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { useState, useEffect } from 'react';

import remarkGfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images';

const meta: Meta<typeof Alert> = {
  title: 'Material-ui/Alert',
  component: Alert,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {

    severity: { description: 'the type of icon and background color', type: { name: 'string', required: true }, defaultValue: 'info', options: ['error','info','success','warning'], control: { type: 'select' },}	
    // color: {
    //   options: ['primary', 'secondary','tertiary', 'quaternary', 'highlight','accent', 'muted', 'paper'],
    //   control: { type: 'select' },
    // },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    children: 'some text here',
  },
};



// export default {
//   title: 'Material-ui/Alert',
//   component: Alert,
//   //👇 Enables auto-generated documentation for the component story
//   tags: ['autodocs'],
// };

// const Template = ({ children, ...args }) => {
//   const [mdxContent, setMdxContent] = useState(null);

//   const mdx = `
//   <HeaderCard color='${args.color}'>
//   ${children}
//   </HeaderCard>
// `;

//   useEffect(() => {
//     const serializeMdx = async () => {

          
//       const MDXoptions = {
//         remarkPlugins: [remarkGfm, remarkUnwrapImages],
//         format: 'mdx',
//         development: true

//       };
//       try {
//         const mdxSource = await serialize(mdx, { scope: {}, mdxOptions: { ...MDXoptions }, parseFrontmatter: true })
//         setMdxContent(mdxSource);

//       } catch (error) {
//         console.log('Error in serialize : ', error);
//       }
//     };
//     serializeMdx();
//   }, [mdx]);



//   if (!mdxContent) {
//     return <MDXProvider ><h1>....loading</h1></MDXProvider>;
//   } else {
    
//     // return <MDXProvider ><HeaderCard {...args}><MDXRemote {...mdxContent} components={mdComponents} /></HeaderCard></MDXProvider>;
//     return <MDXProvider><MDXRemote compiledSource={mdxContent.compiledSource} components={mdComponents}/></MDXProvider>;
//     // return  <MDXProvider><h1>test</h1></MDXProvider>
//   }
// };


// export const Default = Template.bind({});
// Default.args = {
//   children: (
//     `
//       # Header 1
//       ## Header 2
//       Some more text here
//     `
//   ),
//   mdx: (
// `<HeaderCard>
// # Header 1
// ## Header 2
// Some more text here
// </HeaderCard>
// `
//   ),
//   color: 'secondary',
// };
// Default.parameters = {
//   docs: {
//     source: {
//       code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
//     }
//   }
// }