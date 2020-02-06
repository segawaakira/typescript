"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createCORSRequest = (function () {
    function createCORSRequest(method, url) {
        this.method = method;
        this.url = url;
    }
    createCORSRequest.prototype.stdOutWrite = function (msg) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(this.method, this.url, true);
        }
        else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(this.method, this.url);
        }
        else {
            xhr = null;
        }
        return xhr;
    };
    return createCORSRequest;
}());
exports.default = createCORSRequest;
//# sourceMappingURL=createCORSRequest.js.map