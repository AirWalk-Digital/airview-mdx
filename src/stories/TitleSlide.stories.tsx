import { TitleSlide } from './TitleSlide';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof TitleSlide> = {
  title: 'Layouts/TitleSlide',
  component: TitleSlide,
  tags: ['autodocs'],
  argTypes: { format: { control: 'select', options: ['ppt', 'a4', 'storybook'] } },
};
export default meta;

type Story = StoryObj<typeof TitleSlide>;

export const Dark: Story = {
  args: {
    children: (
`# Title

subtitle
`
    ),
    background: 'image1.jpeg',
    format: 'storybook'
    }
  };

  export const Light: Story = {
    args: {
      children: (
  `# Title
  
  subtitle
  `
      ),
      background: 'image11.jpeg',
      format: 'storybook'
      }
    };
  