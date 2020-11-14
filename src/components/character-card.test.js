import { createMount } from '@material-ui/core/test-utils';
import { shallow } from 'enzyme';
import { ironMan } from '../characters';
import CharacterCard from './character-card';
import { CardMedia } from '@material-ui/core';



describe('<CharacterCard />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('renders without crashing', () => {
    shallow(<CharacterCard />);
  });

  it('should have properties ', () => {
    const wrapper = mount(<CharacterCard character={ironMan} />);

    expect(wrapper.find(CardMedia)).toHaveLength(1);
    const cardMedia = wrapper.find(CardMedia);
    expect(cardMedia.last().prop("title")).toEqual(ironMan.name);
  });
});