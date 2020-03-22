import mongoose from 'mongoose';
import '../models/note.js';
import { config } from '../../etc/config.json';

const Note = mongoose.model('Note');


export function initConnection() {
    mongoose.connect(config.db.stringConnection)
}
export function getNotes() {
    return Note.find();
}
export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        dateCreatedAt: new Date(),
    });

    return note.save();
}
export function removeNote(id) {
    return Note.findById(id).remove();
}



let notesSample = [
    { title: 'Note 1 title', text:  'Note 1 text', color: '#525252', dateCreatedAt: new Date() },
    { title: 'Note 2 title', text:  'Note 2 text', color: '#545454', dateCreatedAt: new Date() },
    { title: 'Note 3 title', text:  'Note 3 text', color: '#575757', dateCreatedAt: new Date() },
];

//db.notes.insertOne();
//db name - notes
//collection name - notes
