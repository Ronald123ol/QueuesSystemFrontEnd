import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Queue } from '../../models/queue/queue.model';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService extends BaseService<Queue> {

  public constructor(
    _http:HttpClient
  ){
    super(_http, 'Queue');
  }
}
