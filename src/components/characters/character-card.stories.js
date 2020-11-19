import React from 'react';
import { ironMan, wolverine, wonderMan } from '../../characters';
import CharacterCard from './character-card';


export default {
  title: 'characters/CharacterCard',
  component: CharacterCard,
}

const Template = (args) => <CharacterCard {...args} />;

export const Wolverine = Template.bind({});
Wolverine.args = {
  character: wolverine,
};

export const IronMan = Template.bind({});
IronMan.args = {
  character: ironMan,
};

export const WonderMan = Template.bind({});
WonderMan.args = {
  character: wonderMan,
};