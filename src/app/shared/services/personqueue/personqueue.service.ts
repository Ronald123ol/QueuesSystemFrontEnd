import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonQueue } from '../../models/personqueue/personqueue.model';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonqueueService extends BaseService<PersonQueue>{

  public constructor(
    _http:HttpClient
  ){
    super(_http, 'PersonQueue');
  }
}
