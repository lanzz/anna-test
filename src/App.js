import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

import Header from './components/Header';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import Input from './components/Input';

import './App.css';

let store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Header />
                    <Chat />
                    <Input />
                    <ChatList />
                </div>
            </Provider>
        );
    }
}

export default App;
