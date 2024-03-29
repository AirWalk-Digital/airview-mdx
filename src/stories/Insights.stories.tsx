"use client";
import React from 'react';
import { Insights } from './Insights';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Insights> = {
  title: 'Components/Insights',
  component: Insights,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'highlight', 'accent', 'muted', 'paper'],
      control: { type: 'select' },
    }
  },
  
};
export default meta;

type Story = StoryObj<typeof Insights>;

export const Primary: Story = {
  args : {
  children: (
`- star
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum enim.
`
  ),
  color: 'secondary',
}
};


export const MultiRow: Story = {
args : {
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
}
};

export const NoSplitter: Story = {
args: {
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
  splitter: false,
}};