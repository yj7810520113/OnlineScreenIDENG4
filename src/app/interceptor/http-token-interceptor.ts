import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpTokenInterceptor {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    // headers.append('token','maomao');
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).map((res) => {
      let result = res.json();
      // console.log(result);
      return result;
    }).catch((error: any) =>{return Observable.throw(error || 'Server error')})
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    }).map(res=>res.json());
  }
}
