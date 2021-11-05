import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    //"Access-Control-Allow-Origin": "http://localhost:4200",
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent',
        })
    };

    constructor(private http: HttpClient) { }

    getPosts(URL) {
        return this.http.get(URL);
    }


    getURL(URL) {
        //this.http.get<any>(URL, this.httpOptions);  
        return this.http.get<any>(URL, this.httpOptions);
    }

}