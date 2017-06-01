import React from 'react';
import { render } from 'enzyme';
import ChatList from '../ChatList';

it('renders correctly', () => {
    const wrapper = render(
        <ChatList />
    );
    expect(wrapper).toMatchSnapshot();
});
