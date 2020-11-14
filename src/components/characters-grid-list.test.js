import { GridListTile } from '@material-ui/core';
import { createMount } from '@material-ui/core/test-utils';
import { shallow } from 'enzyme';
import { ironMan, wolverine, wonderMan } from '../characters';
import CharactersGridList from './characters-grid-list';

describe('<CharactersGridList />', () => {

    let mount;

    beforeAll(() => {
        mount = createMount();
    });

    afterAll(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        shallow(<CharactersGridList characters={[ironMan, wolverine, wonderMan]} />);
    });

    it('should have properties ', () => {
        const characters = [ironMan, wolverine, wonderMan];
        const wrapper = mount(<CharactersGridList characters={characters} />);

        expect(wrapper.find(GridListTile)).toHaveLength(3);
    });
});