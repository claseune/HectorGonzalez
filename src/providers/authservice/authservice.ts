import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthserviceProvider Provider');
  }

}
