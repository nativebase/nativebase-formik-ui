import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../Wrapper';
import Login from './login';
import Basic from './basic';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Login Form Custom Form Control', () => <Basic />)
  .add('Login Form FormControl Wrapped Input', () => <Login />);
