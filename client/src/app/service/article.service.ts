import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private API_URL= environment.API_URL; 

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':'*',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'*'
    })
  };

  findAll(): Observable<any> {
    console.log("Ejecutando mEtodo [@findAll]")
    return this.http.get<any>(`${this.API_URL}/article`);
  }

  delete(objectID:string): Observable<any> {
    console.log("Ejecutando mEtodo [@delete]")
    return this.http.post<any>(`${this.API_URL}/article/${objectID}`,{});
  }


  
}


