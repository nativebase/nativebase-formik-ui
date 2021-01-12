import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../Wrapper';
import Basic from './basic';
import Custom from './custom';

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Slider Example', () => <Basic />)
  .add('Custom FormControl Slider Example', () => <Custom />);
