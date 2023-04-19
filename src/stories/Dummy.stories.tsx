"use client";
import React from 'react';
import { Dummy } from './Dummy';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Dummy> = {
  title: 'Components/Dummy',
  component: Dummy,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'highlight', 'accent', 'muted', 'paper'],
      control: { type: 'select' },
    }
  },
  
};
export default meta;

type Story = StoryObj<typeof Dummy>;

export const Primary: Story = {
  args: {
    children: (
`### Header

cloud

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
`
    ),
    color: 'secondary',
    }
  };

export const NoHeader: Story = {
  args: {
    children: (
`cloud

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
`
    ),
    color: 'secondary',
  }
};

export const NoIcon: Story = {
  args: {
    children: (
      `### Header, no icon

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
`
    ),
    color: 'secondary',
  }
};