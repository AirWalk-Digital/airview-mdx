import React from 'react';
import { Insight, InsightTable } from './Playback';
import MDXProvider, { mdComponents } from './MDXProvider';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { useState, useEffect } from 'react';

import remarkGfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images';

export default {
  title: 'Components/InsightTable',
  component: InsightTable,
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
<InsightTable>
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
Default.parameters = {
  docs: {
    source: {
      code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
    }
  }
}

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
MultiRow.parameters = {
  docs: {
    source: {
      code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
    }
  }
}