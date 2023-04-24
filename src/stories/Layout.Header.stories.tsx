import { Header } from './Layout.HeaderFooter';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    heading: (
`Title`
    ),
    }
  };

  