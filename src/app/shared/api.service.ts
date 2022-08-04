import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  //Now  here i will define the Post,Get,Put,Delete 0 
  // Create Restaurent Using Post Methods
  postRestaurent(data: any) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res
    }))
  }

  // Get Restaurent Data Using Get Methods 
  getRestaurent() {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }

  // Update Restaurent Using Put Methods
  updateRestaurent(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  // Delete Restaurent Using Delete Methods
  deleteRestaurent(id: number) {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
