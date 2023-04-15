"use client";
import React from 'react';
import { Banner} from './Banner';
import MDXProvider, { mdComponents } from './MDXProvider';
import { serialize } from 'next-mdx-remote/serialize';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { StoryObj, Meta, Story } from '@storybook/react';
import { useState, useEffect } from 'react';

import remarkGfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images';

type BannerProps = React.ComponentProps<typeof Banner>;

const meta: Meta<BannerProps> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: {
    children: `
      ### 1st Statement

      cloud

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
    color: 'secondary',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary','tertiary', 'quaternary', 'highlight','accent', 'muted', 'paper'],
      control: { type: 'select' },
    }
  },
  parameters: {
    docs: {
      source: {
        // code: `<Banner>{children}</Banner>`,
        // code: 'not supported',
        language: 'mdx',
        type: 'code'
      }
    }
  },
  decorators: [
    (Story: StoryObj<BannerProps>, context) => {
      const [mdxContent, setMdxContent] = useState(null);

      console.log('context:', context)
      const { args } = context;
      const { children } = args;

      const mdx = `
        <Banner>
          ${children}
        </Banner>
      `;

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

    

      
  if (!mdxContent) {
    return <MDXProvider><h1>....loading</h1></MDXProvider>;
  } else {

    // return <MDXProvider ><HeaderCard {...args}><MDXRemote {...mdxContent} components={mdComponents} /></HeaderCard></MDXProvider>;
    return <MDXProvider><MDXRemote compiledSource={mdxContent.compiledSource} components={mdComponents} /></MDXProvider>;
    // return  <MDXProvider><h1>test</h1></MDXProvider>
  }
    },
  ],
};
export default meta;


// export const Default: StoryObj<BannerProps> = (args) => <Banner {...args} />;
export const Default = (args: BannerProps) => <Banner {...args} />;

// export const Another: Story = {
//   args: {  children: (
// `### 1st Statement

// cloud

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
// `
//   ),
//   color: 'secondary',
// }
// };
