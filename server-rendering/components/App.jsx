var React = require('react');
var Router = require('react-router');

var { RouteHandler } = Router;

var App = React.createClass({
    getDefaultProps: function () {
        return {
            author: ''
        };
    },

    render: function () {
        return (
            <div>
                <h1>App</h1>
                <p>Author: {this.props.author}</p>
                <RouteHandler/>
                <ul>
                    <li><a href="/?url=/&props=%7B%22author%22%3A%22Allan%22%7D">Home</a></li>
                    <li><a href="/?url=/about&props=%7B%22author%22%3A%22Allan%22%7D">About</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = App;
