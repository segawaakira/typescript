"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createCORSRequest_1 = require("./createCORSRequest");
var submitZipCode = document.getElementById("js-submit");
submitZipCode.onclick = function () {
    var inputZipCode = document.getElementById("js-zipcode");
    var inputPref = document.getElementById("js-pref");
    var inputAddress = document.getElementById("js-address");
    var xhr = new createCORSRequest_1.default('GET', 'https://api.zipaddress.net/?zipcode=' + inputZipCode.value);
    if (!xhr) {
        throw new Error('CORS not supported');
    }
    console.log("xhrは");
    console.log(xhr);
};
//# sourceMappingURL=app.js.map