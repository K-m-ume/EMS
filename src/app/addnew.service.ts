import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddnewComponent } from './addnew/addnew.component';
import { getElementDepthCount } from '@angular/core/src/render3/state';
@Injectable({
  providedIn: 'root'
})
export class AddnewService {
  constructor() { }
}
