import React from 'react';
import { ironMan, wolverine, wonderMan } from '../characters';
import CharactersGridList from './characters-grid-list';

export default {
    title: 'Components/CharactersGridList',
    component: CharactersGridList,
}

const Template = (args) => <CharactersGridList {...args} />;

export const CharactersGridList1 = Template.bind({});
CharactersGridList1.args = {
    characters: [ironMan, wolverine, wonderMan, wonderMan, ironMan, wolverine, ironMan, wolverine, wonderMan,wolverine, ironMan, wolverine],
};