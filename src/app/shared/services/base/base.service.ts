import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../../models/base/base.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseModel> {
  baseUrl: string = environment.baseUrl;

  constructor(
    public _http: HttpClient,
    @Inject(String) private _apiController: string
  ) { }
  getAll():Observable<T[]>{
    return this._http.get<T[]>(`${this.baseUrl}/${this._apiController}`);
  }
  public getbyId(id: any):Observable<T>{
    return this._http.get<T>(`${this.baseUrl}/${this._apiController}/${id}`);
  }
  public insertbyId(item: T, id: any):Observable<T>{
    return this._http.post<T>(`${this.baseUrl}/${this._apiController}/${id}`, item);
  }

  insert(item: T):Observable<T>{
    console.log(item)
    return this._http.post<T>(`${this.baseUrl}/${this._apiController}`, item);
  }
  update(item: T):Observable<T>{
    return this._http.put<T>(`${this.baseUrl}/${this._apiController}/${item.id}`, item);
  }
  delete(id: any):Observable<T>{
    return this._http.delete<T>(`${this.baseUrl}/${this._apiController}/${id}`);
  }
}
