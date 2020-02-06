// export class createCORSRequest{
//   const method: string;
//   const url: string;
//   constructor(method: string, url:string) {
//     this.method = method;
//     this.url = url;
//   }
//   greet() {
//     let xhr = new XMLHttpRequest();
//       if ("withCredentials" in xhr) {
//           xhr.open(this.method, this.url, true);
//       //@ts-ignore
//       } else if (typeof XDomainRequest != "undefined") {
//         //@ts-ignore
//           xhr = new XDomainRequest();
//           xhr.open(this.method, this.url);
//       } else {
//           xhr = null;
//       }
//       return xhr;
//   }


// }


//　こっちにかく

// インターフェース
export interface _IMethodUrl {
  method: string;
  url: string;
}

// class
export default class createCORSRequest implements _IMethodUrl {
  method: string;
  url: string;
  constructor(method: string,url: string) {
    this.method = method;
    this.url = url;
  }
  stdOutWrite(msg: string) {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(this.method, this.url, true);
    //@ts-ignore
    } else if (typeof XDomainRequest != "undefined") {
      //@ts-ignore
        xhr = new XDomainRequest();
        xhr.open(this.method, this.url);
    } else {
        xhr = null;
    }
    return xhr;
  }
}