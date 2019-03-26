import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Home from '../Home';
import Table from '../Table';
import { shallow , mount} from 'enzyme';
import '../setupTest';
import { MemoryRouter } from "react-router-dom";


describe('App component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test('initial characters get loaded', () => {
    const wrapper = withRouter(mount, <Home />);
    console.log(wrapper.debug());
    console.log( wrapper.find(Home));
    const comp =  wrapper.find('Home');
    console.log( comp.state());

    const actual = comp.state().characters;
    const expected  = [
      {name: 'Jane', job: 'Software Engineer'}
    ];
    expect(actual).toEqual(expected);
    wrapper.unmount();
  });


  const withRouter = (func, elem, entries = ["/"], index = 0) =>
      func(
          <MemoryRouter initialEntries={entries} initialIndex={index}>
            {elem}
          </MemoryRouter>
      );

  test('item gets deleted', () => {
  const wrapper = withRouter(mount, <Home />);
    // console.log(wrapper.debug());
    const homeComp = wrapper.find(('Home'));

    const tableComp = wrapper.find(('Table'));
    const deleteButton = tableComp.find('#button');
    // console.log(tableComp);

    expect(homeComp.state().characters.length).toEqual(1);
    deleteButton.simulate('click');
    expect(homeComp.state().characters.length).toEqual(0);
  });
});
