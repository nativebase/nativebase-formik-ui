import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../Wrapper';
import Basic from './basic';
import Custom from './custom';

storiesOf('PintInput', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic PintInput', () => <Basic />)
  .add('Custom FormControl PintInput', () => <Custom />);
