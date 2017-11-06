import {config} from "./config";
import jQuery from "./jquery-3.2.1.min.js";
import io from "socket.io-client";
import Point from './Point.js';

window.$ = window.jQuery = jQuery;
let socket = io(config.domain);
var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23);



