import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Machine Name'};
    }

    handleClick() {
        this.setState({
            name: 'Alex'
        });
    }

    render() {
        console.log('name = ', this.state.name);
        return (
            <div className="content">
            <h1 className="titleH1 text-center">MERN 1 app</h1>
            <b className="titleB text-center" onClick={this.handleClick.bind(this)}>
                Hello {this.state.name} !
            </b>
        </div>
    );
    }
}



ReactDOM.render(
<HelloWorld name="Alex" />, document.getElementById('root')
);

