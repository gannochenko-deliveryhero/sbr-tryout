import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Button as AButton } from '@deliveryhero/armor';
import { withInfo } from '@storybook/addon-info';

export default {
  title: 'Button',
  component: Button,
  decorators: [withInfo],
  parameters: {
    info: {},
  },
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
    <AButton>Hello!</AButton>
);
