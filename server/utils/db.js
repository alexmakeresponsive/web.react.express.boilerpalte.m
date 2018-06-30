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

