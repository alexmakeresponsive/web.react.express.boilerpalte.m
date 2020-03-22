import axios from 'axios';

import Config from '../../../etc/config.json';

// console.log('Config = ', Config.config.app.prefix );

let prefix = Config.config.app.prefix;

export default {
    listNotes() {
        let notesFromAxios =  axios.get(`${prefix}/notes`);

        // console.log('notesFromAxios = ', notesFromAxios);
        return notesFromAxios;
    },

    createNote(data) {
        return axios.post(`${prefix}/notes`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${prefix}/notes/${noteId}`);
    }
}