import AppDispatcher from '../dispatchers/AppDispatcher.js';
// import { Dispatcher } from 'flux';
import Constants from '../constants/AppConstants.js';

import api from '../api/main.js';

const NoteActions = {
    loadNotes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        // console.log('api.listNotes() = ', api.listNotes());

        api.listNotes()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_SUCCESS,
                    notes: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_NOTES_FAIL,
                    error: err
                })
            );
    },

    createNote(note) {
        api.createNote(note)
            .then(() =>
                this.loadNotes()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteNote(noteId) {
        api.deleteNote(noteId)
            .then(() =>
                this.loadNotes()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default NoteActions;
