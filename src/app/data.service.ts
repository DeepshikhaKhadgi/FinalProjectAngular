import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class DataService {

  constructor(public http:Http) { }

getMyData(){
  return this.http.get('http://localhost:3000/api/getZipCodes');
}
}
