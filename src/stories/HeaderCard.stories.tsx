import { HeaderCard } from './HeaderCard';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof HeaderCard> = {
  title: 'Components/HeaderCard',
  component: HeaderCard,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'highlight', 'accent', 'muted', 'paper'],
      control: { type: 'select' },
    }
  },  
};
export default meta;

type Story = StoryObj<typeof HeaderCard>;

export const SingleCard: Story = {
  args: {
    children: (
`# Header H1
## Subheading H2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm

`
    ),
    color: 'secondary',
    }
  };

  export const NestedCards: Story = {
    args: {
      children: (
  `# Infrastructure
  ## Infrastructure components
  <HeaderCard>Compute</HeaderCard>
  <HeaderCard>
  # Storage
  <HeaderCard>Object</HeaderCard>
  <HeaderCard>Standard Block</HeaderCard>
  <HeaderCard>High Performance Block</HeaderCard>
  <HeaderCard>File</HeaderCard>
  </HeaderCard>
  <HeaderCard>
  # Network
  ## Network Services
  <HeaderCard>Load Balancer</HeaderCard>
  <HeaderCard>Application Delivery Controller</HeaderCard>
  <HeaderCard>Firewall</HeaderCard>
  </HeaderCard>
  `
      ),
      color: 'secondary',
      }
    };