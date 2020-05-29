import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Button as AButton } from '@deliveryhero/armor';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
    <>
        <AButton>Hello!</AButton>
        ???
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
              😀 😎 👍 💯
            </span>
        </Button>
    </>
);
