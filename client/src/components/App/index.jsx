import React from 'react';
import './index.styl';

import NoteEditor from '../NoteEditor/index.jsx';
import NotesGrid from '../NotesGrid/index.jsx';

import NotesStore from '../../../flux/stores/NotesStore.js';
import NotesActions from '../../../flux/actions/NotesActions';


//Вызывается когда происходит emitChange
function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}


class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {notes: []};
        this.state = getStateFromFlux();
    }

    _onChange() {
        // console.log('_onChange init');
        this.setState(getStateFromFlux());
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange.bind(this));
    }




    handleNoteAdd(noteData) {
        // console.log('handleNoteAdd init', noteData);
        NotesActions.createNote(noteData);
    }

    handleNoteDelete(note) {
        console.log('handleNoteDelete init, note.id = ', note.id);
        NotesActions.deleteNote(note.id);
    }



    render() {
        // console.log('App/index.js notes = ', this.state.notes);
        // console.log('App/index.js getStateFromFlux = ', getStateFromFlux());
        return (
            <div className="App">
                <h2 className="title">Flux Note App</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete.bind(this)} />
            </div>
        );
    }


}

export default App;
