console.log("salut marion");
var i = 48;
console.log(i)
    /*
     * Welcome to your app's main JavaScript file!
     *
     * We recommend including the built version of this JavaScript file
     * (and its CSS file) in your base layout (base.html.twig).
     */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// loads the jquery package from node_modules
import jquery from 'jquery';


// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
import greet from './greet';


// start the Stimulus application
import './bootstrap';


import Vue from "vue";

new Vue({
    el: '#app',
    data: {
        message: "salut marion"
    }
})