import type { Preview } from "@storybook/react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../src/theme';
import React, { useEffect, useState } from 'react';
import { StoryObj, Args } from '@storybook/react';
import MDXProvider, { mdComponents } from '../src/stories/MDXProvider';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images';

const preview: Preview = {
  
    
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        // code: `<Banner>{children}</Banner>`,
        // code: 'not supported',
        // language: 'md',
        type: 'code',
        transform: (code,args) => {
          
          return (
            getMDX(args)
            ) 
        }
      }
    }
  },
  
  decorators: [
    (Story: StoryObj, context) => {
      const [mdxContent, setMdxContent] = useState(null);

      console.log('context:', context)
      const { args } = context;
      const { children } = args;
      let NotMDX = null;
      let mdx = null;

      if (context && context.component.render) {
        NotMDX = context.component.render
      } else {
      mdx = getMDX(context);
      }

      useEffect(() => {
        const serializeMdx = async () => {
          const MDXoptions = {
            remarkPlugins: [remarkGfm, remarkUnwrapImages],
            format: 'mdx',
            development: true
          };
          try {
            const mdxSource = await serialize(mdx, { scope: {}, mdxOptions: { ...MDXoptions }, parseFrontmatter: true });
            setMdxContent(mdxSource);

          } catch (error) {
            console.log('Error in serialize : ', error);
          }
        };
        serializeMdx();
      }, [mdx]);

      if (NotMDX) {
        return  <ThemeProvider theme={theme}>
        <CssBaseline />
          <MDXProvider>
            <Story/>
          </MDXProvider>
        </ThemeProvider>;
      }

      if (!mdxContent) {
        return <MDXProvider><h1>....loading</h1></MDXProvider>;
      } else {

        // return <MDXProvider ><HeaderCard {...args}><MDXRemote {...mdxContent} components={mdComponents} /></HeaderCard></MDXProvider>;
        return  <ThemeProvider theme={theme}>
        <CssBaseline />
          <MDXProvider>
            <MDXRemote compiledSource={mdxContent.compiledSource} components={mdComponents} />
          </MDXProvider>
        </ThemeProvider>;
      }
    },
  ],
};

function getMDX(args: Args): string {
  return (
  '<' + args.component.name + getAttributes(args.args) +'>\n'+
  args.args.children
  + '\n</' + args.component.name + '>'
  )
}

function getAttributes(args: Args): string {
  let result = '';
  for (const [key, value] of Object.entries(args)) {
    if (value !== undefined && value !== null && key !== 'children') {
      result += ` ${key}="${value}"`;
    }
  }
  console.log('getAttributes :', result)
  return result;
}

export default preview;
