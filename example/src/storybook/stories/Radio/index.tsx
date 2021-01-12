import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../Wrapper';
import Basic from './basic';
import Custom from './custom';

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Basic Radio Example', () => <Basic />)
  .add('Custom FormControl Radio Example', () => <Custom />);
