import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModule } from 'src/app/components/pages/dashboard/person/person.module';
import { Person } from '../../models/person/person.model';
import { BaseService } from '../base/base.service';
import { HttpHeaders } from '@angular/common/http';
import { PersonAddDto } from '../../models/dtos/personadddto.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService<Person> {
  public constructor(
    _http:HttpClient
  ){
    super(_http, 'Person');
  }
  public postUser(formData: FormData): Observable<void> {
    //const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this._http.post<void>(
      `${this.baseUrl}/Person`,
      formData,
      //{ headers }
    );
  }
}
