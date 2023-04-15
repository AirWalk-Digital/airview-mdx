import React from 'react';
import { Insights } from './Insights';
import MDXProvider, { mdComponents } from './MDXProvider';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { StoryFn, Meta } from '@storybook/react';
import { useState, useEffect } from 'react';

import remarkGfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images';

export default {
  title: 'Components/Insights',
  component: Insights,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary','tertiary', 'quaternary', 'highlight','accent', 'muted', 'paper'],
      control: { type: 'select' },
    },
    splitter :{ type: 'boolean'}
  },
  parameters: {
    docs: {
      source: {
        code: `<Insights></Insights>`,
        language: 'mdx',
        type: 'code'
      }
  
    }
  }
} as Meta;;

interface TemplateProps extends Args {
  children: React.ReactNode;
}

const Template: StoryFn<TemplateProps> = ({ children, ...args }) => {
// function Template({ children, ...args }) {
  const [mdxContent, setMdxContent] = useState(null);

  const mdx = `
<InsightTable ${getAttributes(args)}>
${children}
</InsightTable>
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


export const Default = Template.bind({});
Default.args = {
  children: (
`- star
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
`
  ),
  color: 'secondary',
};


export const MultiRow = Template.bind({});
MultiRow.args = {
  children: (
`- star
  - star Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.

- user-secret
  - user-secret Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.

- chart-pie
  - chart-pie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
`
  ),
  color: 'secondary',
};

export const NoSplitter = Template.bind({});
NoSplitter.args = {
  children: (
`- star
  - star Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.

- user-secret
  - user-secret Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.

- chart-pie
  - chart-pie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
`
  ),
  splitter: 'false',
};