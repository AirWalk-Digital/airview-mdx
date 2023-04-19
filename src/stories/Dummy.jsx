import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useMemo } from 'react';

import { useTheme } from '@mui/material/styles';
import { Icon } from './Images.jsx'

import { getMDXparts, faTypes } from './utils/mdxContent.js'
import { useMdxSerializer } from './utils/useMdxSerializer.js'

// class Banner extends Component {
//     render() {

const Dummy = ({ children, sx = {}, ...props }) => {
    const theme = useTheme();

    const { compiledSource, loading, format } = useMemo(() => {
        return useMdxSerializer('Dummy', { children, sx, ...props})
     })

    // const { compiledSource, loading, format } = useMdxSerializer('Dummy', { children, sx, ...props})
    const statementTheme = {
        width: '100%',
        backgroundColor: theme.palette.background.secondary,
        px: '2.5%',
        py: '1%',
    }

    console.log('Dummy:compiledSource: ', compiledSource)

    if (loading) {
        return (
            <Box sx={{ my: "0.5%" }}>
                <Box sx={{ ...statementTheme, pt: '1%', pb: '1%', borderRadius: '8px' }}>...loading</Box>
                <Box sx={{ display: "flex", alignItems: "center", breakInside: 'avoid-column' }}>
                    <Box sx={{ py: '0', pl: '0px', minHeight: "50px", m: '0.5%', display: "flex", flexDirection: 'column', alignItems: "left" }}>
                    </Box>
                </Box>
            </Box>

        )
    } else if (format == 'compiled') {
        const Component = compiledSource
        return Component
    } else {
        children = compiledSource
    }

    // const Dummy = ({ children, sx = {}, ...props }) => {

    // console.log('Dummy:props: ', props, ' | name: ', componentName);

}


Dummy.propTypes = {
    /** MDX content passed into the component */
    children: PropTypes.string.isRequired,
    /** MaterialUI sx prop for styling */
    sx: PropTypes.string,
};

export { Dummy };
