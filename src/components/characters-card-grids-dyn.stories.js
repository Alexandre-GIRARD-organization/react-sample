import React from 'react';
import CharactersCardGridsDyn from './characters-card-grids-dyn';

export default {
    title: 'Components/CharactersCardGridsDyn',
    component: CharactersCardGridsDyn,
}

const Template = (args) => <CharactersCardGridsDyn {...args} />;

export const CharactersCardGridsDyn1 = Template.bind({});
CharactersCardGridsDyn1.args = {
    //cols: 4
};