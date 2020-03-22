import React from 'react';
import './index.styl';

class NotesGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    renderNotes(onNoteDelete) {
        // console.log(this.props.notes);

        let result = this.props.notes.map(function(note, index) {
            return (
                <div key={index} className={'Note'}>
                    <div className="NoteBody">
                        <div>
                            <b className="title">{note.title}</b>
                            <span>{note.dateCreatedAt}</span>
                            <p>{note.text}</p>
                        </div>
                        <button className="button" onClick={onNoteDelete.bind(null, note)}>Remove</button>
                    </div>
                </div>
            );
        });

        return result;
    }

    render() {
        return (
            <div className="NotesGrid">
                <h2 className="title">Notes</h2>
                <div className="NotesGridBody">
                    {this.renderNotes(this.props.onNoteDelete)}
                </div>
            </div>
        );
    }
}

export default NotesGrid;
