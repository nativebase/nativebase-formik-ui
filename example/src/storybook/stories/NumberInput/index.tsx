import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../Wrapper';
import Custom from './custom';
import Basic from './basic';

storiesOf('NumberInput', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic NumberInputControl', () => <Basic />)
  .add('Custom NumberInput with FormControl', () => <Custom />);
