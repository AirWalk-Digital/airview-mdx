import { useState, useEffect } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

export default function useSerializeMdx(mdx) {
  const [mdxContent, setMdxContent] = useState(null);

  useEffect(() => {
    const serializeMdx = async () => {
      const MDXoptions = {
        remarkPlugins: [remarkGfm, remarkUnwrapImages],
        format: 'mdx',
        development: true,
      };
      try {
        const mdxSource = await serialize(mdx, { scope: {}, mdxOptions: { ...MDXoptions }, parseFrontmatter: true });
        setMdxContent(mdxSource);
      } catch (error) {
        // console.log('Error in serialize : ', error);
      }
    };
    serializeMdx();
  }, [mdx]);

  return mdxContent;
}
