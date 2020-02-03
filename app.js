function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    }
    else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    }
    else {
        xhr = null;
    }
    return xhr;
}
var submitZipCode = document.getElementById("js-submit");
submitZipCode.onclick = function () {
    var inputZipCode = document.getElementById("js-zipcode");
    var inputPref = document.getElementById("js-pref");
    var inputAddress = document.getElementById("js-address");
    var xhr = createCORSRequest('GET', 'https://api.zipaddress.net/?zipcode=' + inputZipCode.value);
    if (!xhr) {
        throw new Error('CORS not supported');
    }
    xhr.onload = function () {
        var responseArr = JSON.parse(xhr.response);
        inputPref.value = responseArr.data.pref;
        inputAddress.value = responseArr.data.address;
    };
    xhr.onerror = function (error) {
        console.log(error);
    };
    xhr.send();
};
//# sourceMappingURL=app.js.map