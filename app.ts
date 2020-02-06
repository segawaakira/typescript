import createCORSRequest from './createCORSRequest';

const submitZipCode = document.getElementById("js-submit");

submitZipCode.onclick = function() {
  const inputZipCode:HTMLInputElement = <HTMLInputElement>document.getElementById("js-zipcode");
  const inputPref:HTMLInputElement = <HTMLInputElement>document.getElementById("js-pref");
  const inputAddress:HTMLInputElement = <HTMLInputElement>document.getElementById("js-address");
  const xhr = new createCORSRequest('GET', 'https://api.zipaddress.net/?zipcode=' + inputZipCode.value);
  if (!xhr) {
      throw new Error('CORS not supported');
  }
  console.log("xhrは");
  console.log(xhr);
  // xhr.onload = function(){
  //   const responseArr = JSON.parse(xhr.response);
  //   inputPref.value = responseArr.data.pref;
  //   inputAddress.value = responseArr.data.address;
  // };
  // xhr.onerror = function(error){
  //   console.log(error);
  // };
  // xhr.send();
};
