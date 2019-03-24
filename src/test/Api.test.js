import React from 'react';
import ReactDOM from 'react-dom';
import WikiApi from '../WikiApi';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow , mount} from 'enzyme';
import '../setupTest';

describe("Wiki Api component", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WikiApi />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    test('fetch wiki data successful', async () => {
        const wrapper  = shallow(<WikiApi />);
        const comp = wrapper.instance();
        const expected = ["Nigeria", "Nigerian Civil War", "Nigeria national"];
        // This sets the mock adapter on the default instance
        let mock = new MockAdapter(axios);
        mock.onGet('https://en.wikipedia.org/w/api.php?action=opensearch&search=Nigeria&format=json&origin=*')
            .reply(200, expected);

        await comp.fetchWikiData();
        const actual =  comp.state.wikiData;

        expect(actual).toEqual(expected);
        mock.reset();
    });

    test('fetch wiki data fails', async () => {
        const wrapper  = shallow(<WikiApi />);
        const comp = wrapper.instance();
        const expected = [];
        // This sets the mock adapter on the default instance
        let mock = new MockAdapter(axios);
        mock.onGet('https://en.wikipedia.org/w/api.php?action=opensearch&search=Nigeria&format=json&origin=*')
            .reply(500, expected);

        await comp.fetchWikiData();
        const actual =  comp.state.wikiData;

        expect(actual).toEqual(expected);
        mock.reset();
    });

    test('wiki data gets rendered to ui as list items', async () => {
        const wrapper  = shallow(<WikiApi />);
        const comp = wrapper.instance();
        const expected = ["Nigeria", "Nigerian Civil War", "Nigeria national"];
        // This sets the mock adapter on the default instance
        let mock = new MockAdapter(axios);
        mock.onGet('https://en.wikipedia.org/w/api.php?action=opensearch&search=Nigeria&format=json&origin=*')
            .reply(200, expected);

        await comp.fetchWikiData();

        const firstListItem = wrapper.find('li').first().text();
        const allListItems = wrapper.find('li');
        allListItems.forEach((node,index) => {
            console.log('expected: ' + expected[index], 'actual: ' + node.text());
            expect(node.text()).toEqual(expected[index]);
        });
        expect(firstListItem).toEqual("Nigeria");

        mock.reset();
    });


});



