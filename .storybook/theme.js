import { create } from '@storybook/theming/create';
import logo from './airwalk-logo.png';

export default create({
  base: 'light',
  brandTitle: 'Airview MDX Deck Storybook',
  brandUrl: 'https://airwalkreply.com',
  brandImage: logo,
  brandTarget: '_self',
});