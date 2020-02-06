/*
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
*/

class Address {
  // 変数定義
  private zip: string;
  private addresses: any;

  // コンストラクタで初期化
  public constructor(zip: string) {
    this.addresses = {
      '079-1100': {
        'prefecture': '北海道',
        'city': '赤平市'
      },
      '038-0000': {
        'prefecture': '青森県',
        'city': '青森市'
      },
    };
    this.zip = zip;
  }

  // ゲッター（class内の外からアクセスできないものを、getするメソッド）
  public getZip(): string {
    return this.zip;
  }
  public getAddress(): string {
    let here = this.addresses[this.zip];
    // フォーマット文字列
    return `${here.prefecture} ${here.city}`;
  }

}


let myAddress = new Address('079-1100');

console.log(myAddress.getAddress());