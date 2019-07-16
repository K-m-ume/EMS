import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from 'src/interface/employee';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  
 private path:string= "http://localhost:8080";
  constructor(private http:HttpClient){}

 getEmployees(): Observable<IEmployee[]>{
  let employeepath: string=this.path.concat("/employee");
   return this.http.get<IEmployee[]>(employeepath)
   .pipe(catchError(this.errorHandler));
 }

 errorHandler(error: HttpErrorResponse){
  return throwError(error);
}
  }