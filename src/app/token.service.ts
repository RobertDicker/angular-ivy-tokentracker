import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor(private http: HttpClient) { }

 tokens = this.http.get('https://poloniex.com/public?command=returnTicker')
   
}