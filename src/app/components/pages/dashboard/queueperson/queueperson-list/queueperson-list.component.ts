import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonQueue } from 'src/app/shared/models/personqueue/personqueue.model';
import { PersonqueueService } from 'src/app/shared/services/personqueue/personqueue.service';
import { QueuepersonFormComponent } from '../queueperson-form/queueperson-form.component';

@Component({
  selector: 'app-queueperson-list',
  templateUrl: './queueperson-list.component.html',
  styleUrls: ['./queueperson-list.component.scss']
})
export class QueuepersonListComponent implements OnInit {
  public personqueue: PersonQueue[] = [];
  public personqueuee!: PersonQueue;
  constructor(private personqueueService: PersonqueueService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPersonQueue();
  }

  getPersonQueue(){
    this.personqueueService.getAll().subscribe(({ data}: any)=> { this.personqueue = data})
  }

  public openDialogCreate(){
    this.dialog.open(QueuepersonFormComponent)

    this.dialog.afterAllClosed.subscribe(()=>{
      this.getPersonQueue();
    })
  }

  public openDialogUpdate(personqueue: PersonQueue) {
    this.dialog.open(QueuepersonFormComponent, { data: personqueue });
  
    this.dialog.afterAllClosed.subscribe(() => {
      this.getPersonQueue();
    });
  }
  
  

}
