import React from 'react';
import './index.styl';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text:  '',
            color: '#ffffff'
        };
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text:  this.state.text,
            color: this.state.color
        };

        this.setState({
            title: '',
            text:  '',
            color: '#ffffff'
        });

        this.props.onNoteAdd(newNote);
    }

    render() {
        return (
            <div className="NoteEditor">
                <h2 className="NoteEditorTitle">Editor</h2>

                <input
                    type='text'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <div className='footer'>
                    {/*<ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />*/}
                    <button
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd.bind(this)}
                    >
                        Add
                    </button>
                </div>

            </div>
        );
    }
}

export default NoteEditor;
