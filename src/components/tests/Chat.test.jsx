import React from 'react';
import { render } from 'enzyme';
import Chat from '../Chat';

it('renders correctly', () => {
    const wrapper = render(
        <Chat />
    );
    expect(wrapper).toMatchSnapshot();
});
