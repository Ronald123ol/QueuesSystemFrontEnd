import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/shared/models/person/person.model';
import { Queue } from 'src/app/shared/models/queue/queue.model';
import { QueueService } from 'src/app/shared/services/queue/queue.service';
import { QueueFormComponent } from '../queue-form/queue-form.component';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss']
})
export class QueueListComponent implements OnInit {
  public queue: Queue[] = [];
  public queuee!: Queue;
  constructor(
    private queueService: QueueService,
    private dialog: MatDialog,
    
  ) { }

  ngOnInit(): void {
    this.getQueue();
  }

  private getQueue(): void {
    this.queueService.getAll().subscribe(({ data }: any) => {
      this.queue = data;
    });
  }
  public openDialogCreate() {
    this.dialog.open(QueueFormComponent);

    this.dialog.afterAllClosed.subscribe(() => {
      this.getQueue();
    });

}

public openDialogUpdate(queue: Queue) {
  this.dialog.open(QueueFormComponent, { data: queue });

  this.dialog.afterAllClosed.subscribe(() => {
    this.getQueue();
  });
}
public deleteQueue(id: string) {
   
  alertify.confirm('¿Estas seguro de eliminar esta cola?',()=>{
    this.queueService.delete(id).subscribe(() => {
      alertify.success('Cola eliminada');
      this.getQueue();
     
  })
  
}, function(){})}
}
