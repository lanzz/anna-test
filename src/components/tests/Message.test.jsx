import React from 'react';
import { render } from 'enzyme';
import Message from '../Message';

it('renders correctly', () => {
    const wrapper = render(
        <Message />
    );
    expect(wrapper).toMatchSnapshot();
});
