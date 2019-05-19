import React from 'react';
import renderer from 'react-test-renderer';

import {Icon, SIZE_SMALL} from "./icon";

jest.mock('./svg/fastfood/pizza.svg', () => ({
    url: '/path/#pizza',
    viewBox: '0 0 30 30',
}));


describe('Icon component', () => {
    it('should render the "pizza" icon', () => {
        const tree = renderer.create(<Icon name="pizza" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render the "pizza" in small size icon', () => {
        const tree = renderer.create(<Icon name="pizza" size={SIZE_SMALL} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders NULL if the `icon` does not exist', () => {
        global.console.error = jest.fn();
        const tree = renderer
            .create(<Icon name="this-name-doesn-not-exist" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(global.console.error).toBeCalled();
    });
});