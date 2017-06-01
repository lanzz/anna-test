import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { post } from '../actions';
import { participant } from '../const';

function Input({selectedChat, post}) {
    if (!selectedChat) {
        return null;
    }
    const handleInput = (ev) => {
        if (ev.keyCode !== 13) {
            return;
        }
        ev.preventDefault();
        post(participant.USER, ev.target.value);
        ev.target.value = '';
    };
    return (
        <div className="input">
            <textarea onKeyDown={handleInput} />
        </div>
    );
}

Input.propTypes = {
    selectedChat: PropTypes.object,
    post: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        selectedChat: state.selectedChat
    }
};

const mapDispatchToProps = { post };

export default connect(mapStateToProps, mapDispatchToProps)(Input);
