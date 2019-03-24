import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Home from '../Home';
import Table from '../Table';
import { shallow , mount} from 'enzyme';
import '../setupTest';

describe('App component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('initial characters get loaded', () => {
    const wrapper  = shallow(<Home />);
    const actual = wrapper.state().characters;
    const expected  = [
      {name: 'Jane', job: 'Software Engineer'}
    ];
    expect(actual).toEqual(expected);
  });

  test('item gets deleted', () => {
    const wrapper  = mount(<Home />);

    const table = wrapper.find((Table));
    console.log(table);
    const deleteButton = table.find('#button');
    console.log(deleteButton);

    expect(wrapper.state().characters.length).toEqual(1);
    deleteButton.simulate('click');
    expect(wrapper.state().characters.length).toEqual(0);
  });

});
