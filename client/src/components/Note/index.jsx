import React from 'react';
import './index.styl';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Note">
                <h2 className="title">Note component</h2>
            </div>
        );
    }
}

export default Note;
