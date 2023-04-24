import { Footer } from './Layout.HeaderFooter';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Layouts/Footer',
  component: Footer,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    tagline: 'Technology, done right',
    company: 'airwalkreply.com'
    }
  };

  