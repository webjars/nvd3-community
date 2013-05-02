/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        nvd3: [ 'webjars!d3.js' ]
    }
});
