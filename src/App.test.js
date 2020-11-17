import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
    shallow(<App />);
  //const { getByText } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
