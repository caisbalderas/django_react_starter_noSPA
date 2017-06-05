var React = require('react');
var ReactDOM  = require('react-dom');
var App = require('./app');
import '../scss/main.scss';



//ReactDOM.render(<App/>, document.getElementById('react-app'));

ReactDOM.render(
    React.createElement(App, window.props),    // gets the props that are passed in the template
    window.react_mount,                        // a reference to the #react div that we render to
);