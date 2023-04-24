import React, { useEffect, useState } from 'react';
import { serialize } from 'next-mdx-remote/serialize';

import remarkGfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images';
import { MDXRemote } from 'next-mdx-remote';
import MDXProvider, { mdComponents } from '../MDXProvider';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '../../theme';


function getMDX(args) {

    let componentName = null;
    if (args.component.render) {
        componentName = args.component.render.name
    } else {
        componentName = args.component.name
    }

    console.log('getMDX:args: ', args);
    if (args.args.children) {
        return (
            '<' + componentName + getAttributes(args.args) + '>\n' +
            args.args.children
            + '\n</' + componentName + '>'
        )
    } else {
        return (
            '<' + componentName + getAttributes(args.args) + '/>'
        )
    }
}

function getAttributes(args) {
    let result = '';
    for (const [key, value] of Object.entries(args)) {
        if (value !== undefined && value !== null && key !== 'children') {
            result += ` ${key}="${value}"`;
        }
    }
    return result;
}

function useMdxSerializer(componentName, componentArgs) {

    const [mdxContent, setMdxContent] = useState(null);

    let mdx = null;

    console.log('useMdxSerializer:componentName: ', componentName)

    console.log('useMdxSerializer:componentArgs: ', componentArgs)
    // const { args } = mdx;
    // const { children } = args;
    let compiledSource = null;

    if (componentArgs.children && componentArgs.children.component) {
        compiledSource = componentArgs.children.component.render
    } else {
        mdx = getMDX(componentName, componentArgs);
    }

    useEffect(() => {

        const serializeMdx = async () => {

            const MDXoptions = {
                remarkPlugins: [remarkGfm, remarkUnwrapImages],
                format: 'mdx',
                development: process.env.NODE_ENV === 'development',
            };
            try {
                console.log('useMdxSerializer:serializeMdx');
                const mdxSource = await serialize(mdx, { scope: {}, mdxOptions: { ...MDXoptions }, parseFrontmatter: true });
                console.log('useMdxSerializer:serializeMdx', mdxSource);

                setMdxContent(mdxSource);

            } catch (error) {
                console.log('useMdxSerializer:serializeMdx:Error ', error);
            }
        };
        console.log('useMdxSerializer:useEffect');
        // renderMDX();
        serializeMdx();
    }, [mdx]);


    if (compiledSource) { // the content is already processed
        console.log('useMdxSerializer:return:pre_compiled', compiledSource);
        return { compiledSource: compiledSource, loading: false, format: 'mdx' };
    } else if (!mdxContent) {
        console.log('useMdxSerializer:return: waiting....');
        return { compiledSource: null, loading: true, format: 'compiled' };
    } else {
        const mdxRemote = <MDXRemote compiledSource={mdxContent.compiledSource} components={mdComponents} />
        console.log('useMdxSerializer:return:compiled', mdxRemote);
        return { compiledSource: mdxRemote, loading: false, format: 'compiled' };
    }

}



function Wrapper({ context, children }) {

    const [mdxContent, setMdxContent] = useState(null);
    console.log('Wrapper:children: ', children);
    console.log('Wrapper:context: ', context);

    let mdx = null;

    if (context && context.component && context.component.render) {
        const Story = children
        // return <Story/>
        return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MDXProvider>{children}</MDXProvider>
        </ThemeProvider>
        )
    } else {
        mdx = getMDX(context);
    }
    // let compiledSource = null;

    // if (componentArgs.children && componentArgs.children.component) {
    //     compiledSource = componentArgs.children.component.render
    // } else {
    //     mdx = getMDX(componentName,componentArgs);
    // }

    useEffect(() => {

        const serializeMdx = async () => {

            const MDXoptions = {
                remarkPlugins: [remarkGfm, remarkUnwrapImages],
                format: 'mdx',
                development: process.env.NODE_ENV === 'development',
            };
            try {
                const mdxSource = await serialize(mdx, { scope: {}, mdxOptions: { ...MDXoptions }, parseFrontmatter: true });
                setMdxContent(mdxSource);

            } catch (error) {
                console.log('Wrapper:serializeMdx:Error ', error);
            }
        };
        serializeMdx();
    }, [mdx]);

    if (!mdxContent) {
        console.log('Wrapper:return: waiting....');
        return <h2>....loading</h2>;
    } else {
        console.log('Wrapper:complete');
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MDXProvider>
                    <MDXRemote compiledSource={mdxContent.compiledSource} components={mdComponents} />
                </MDXProvider>
            </ThemeProvider>
        )
    }

}


export { useMdxSerializer, getMDX, Wrapper }