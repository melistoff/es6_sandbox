import {config} from "./config";
import jQuery from "./jquery-3.2.1.min.js";
// import io from "socket.io-client";
import Game from './Game';

window.$ = window.jQuery = jQuery;
// let socket = io(config.domain);

$(document).ready(function () {
    // requestAnimationFrame(mainLoop);
    new Game("screen")
});



