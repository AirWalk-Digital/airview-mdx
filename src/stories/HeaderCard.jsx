import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { getContrastYIQ } from './utils/colors.js';


const HeaderCard = ({ children, color = 'secondary', sx }) => {
    const theme = useTheme();
    let heading = '';
    let subheading = '';
    console.log('HeaderCard : ', children)
    if (children && Object.keys(children).length === 0 && children.constructor === Object) { children = '' } else {
        if (Array.isArray(children)) { // multiple lines
            if (children[0].type.name === 'h1') {
                heading = children[0].props.children;
                children = children.filter(function(obj, index) {
                    return index !== 0; // return false for index 1
                  });
                if (children[0].type.name === 'h2') {
                    subheading = children[0].props.children;
                    children = children.filter(function(obj, index) {
                        return index !== 0; // return false for index 1
                      });
                };
            };
        } 
    };
    // console.log('HeaderCard:children : ', children)
    return (
        <Grid item xs={3} sx={{ paddingLeft: '10px', paddingRight: '10px', overFlow: 'hidden', maxHeight: '100%' }}>
            <Card variant="outlined" sx={{ 
               borderRadius: '10px',
               transition: '0.3s',
               width: '100%',
               height: '100%',
               overflow: 'hidden',
               background: '#ffffff',
              ...sx }}>
                {heading && <CardHeader
                    title={heading}
                    titleTypographyProps={{ color: getContrastYIQ(theme.palette.background[color], theme), fontSize: '1.8rem' }}
                    subheader={subheading}
                    subheaderTypographyProps={{ color: getContrastYIQ(theme.palette.background[color], theme), fontSize: '1.6rem' }}
                    sx={{ fontSize: '2rem', backgroundColor: 'background.' + color, color: getContrastYIQ(theme.palette.background[color], theme) }} />}
                <CardContent sx={{
                  paddingTop: '1%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  textAlign: 'left',
                  overflowX: 'auto',
                  '& table': {
                      marginBottom: 0,
                  },
                  '& h1': {
                    fontSize: '1.8rem',
                }
                }}>
                    {children && children}
                </CardContent>
            </Card>
        </Grid>
    );
};


export { HeaderCard }