import type { Preview } from "@storybook/react";
import React from 'react';


import {getMDX, Wrapper} from '../src/stories/utils/useMdxSerializer'

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
      (Story, context) => (
        <Wrapper context={context}>
          <Story />
        </Wrapper>
      ),
  ],
};


export default preview;
