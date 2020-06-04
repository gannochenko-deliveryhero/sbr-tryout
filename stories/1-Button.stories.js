import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, MaterialIcon } from '@deliveryhero/armor';
import { withInfo } from '@storybook/addon-info';
import { BrowserRouter, Link } from 'react-router-dom';

export default {
  title: 'Button',
  component: Button,
  decorators: [withInfo],
  parameters: {
    info: {},
  },
};

export const Appearance = () => (
    <>
      <Button marginRight={2}>Primary</Button>
      <Button secondary marginRight={2}>Secondary</Button>
      <Button tertiary marginRight={2}>Tertiary</Button>
      <Button danger marginRight={2}>Danger</Button>
    </>
);

export const Size = () => (
    <>
        <Button marginRight={2}>Regular</Button>
        <Button small>Small</Button>
    </>
);

export const Wide = () => (
    <Button wide>I occupy the entire parent width</Button>
);

export const AsLink = () => (
    <BrowserRouter>
        <Button tag="a" href="https://google.com" target="_blank" marginRight={2}>
            Regular link
        </Button>
        <Button tag={Link} to="/homepage">
            React router link
        </Button>
    </BrowserRouter>
);

export const WithMaterialIcon = () => (
    <>
        <Button marginRight={2}>
            Edit
            <MaterialIcon marginLeft={2}>edit</MaterialIcon>
        </Button>
        <Button marginRight={2}>
            Edit
            <MaterialIcon marginLeft={2} fontSize={22}>edit</MaterialIcon>
        </Button>
        <Button secondary marginRight={2}>
            Save
            <MaterialIcon marginLeft={2}>save</MaterialIcon>
        </Button>
        <Button tertiary marginRight={2}>
            Add
            <MaterialIcon marginLeft={2}>add</MaterialIcon>
        </Button>
        <Button tertiary marginRight={2}>
            Add
            <MaterialIcon marginLeft={2} fontSize={22} icon="add" />
        </Button>
        <Button primary marginRight={2}>
            <MaterialIcon marginRight={2}>save</MaterialIcon>
            Save
        </Button>
        <Button primary marginRight={2}>
            <MaterialIcon marginRight={2} fontSize={22} icon="save" />
            Save
        </Button>
    </>
);
