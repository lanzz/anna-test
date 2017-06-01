import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addChat } from '../actions';

function Header({ addChat }) {
    return (
        <div className="header">
            <button className="add-chat-button" onClick={addChat}>
                Add chat
            </button>
            <h1>An awesome chat app</h1>
        </div>
    );
}

Header.propTypes = {
    addChat: PropTypes.func.isRequired
};

const mapDispatchToProps = { addChat };

export default connect(undefined, mapDispatchToProps)(Header);
