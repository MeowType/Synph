(function (React, reactDom) {
    'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    function synph() {
        return React.createElement("div", null);
    }

    document.addEventListener('DOMContentLoaded', () => {
        reactDom.render(synph(), document.querySelector('#app'));
    });

}(React, ReactDOM));
