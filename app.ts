
   function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
          xhr.open(method, url, true);
      //@ts-ignore
      } else if (typeof XDomainRequest != "undefined") {
        //@ts-ignore
          xhr = new XDomainRequest();
          xhr.open(method, url);
      } else {
          xhr = null;
      }
      return xhr;
  }

   const submitZipCode = document.getElementById("js-submit");
 
   submitZipCode.onclick = function() {
    const inputZipCode:HTMLInputElement = <HTMLInputElement>document.getElementById("js-zipcode");
    const inputPref:HTMLInputElement = <HTMLInputElement>document.getElementById("js-pref");
    const inputAddress:HTMLInputElement = <HTMLInputElement>document.getElementById("js-address");
     const xhr = createCORSRequest('GET', 'https://api.zipaddress.net/?zipcode=' + inputZipCode.value);
     if (!xhr) {
         throw new Error('CORS not supported');
     }
     xhr.onload = function(){
       const responseArr = JSON.parse(xhr.response);
       inputPref.value = responseArr.data.pref;
       inputAddress.value = responseArr.data.address;
     };
     xhr.onerror = function(error){
       console.log(error);
     };
     xhr.send();
   };
