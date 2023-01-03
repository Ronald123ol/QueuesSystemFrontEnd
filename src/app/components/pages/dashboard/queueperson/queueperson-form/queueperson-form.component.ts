import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Queue } from 'src/app/shared/models/queue/queue.model';
import { PersonqueueService } from 'src/app/shared/services/personqueue/personqueue.service';
import { QueueFormComponent } from '../../queue/queue-form/queue-form.component';
import * as alertify from 'alertifyjs';
import { PersonQueue } from 'src/app/shared/models/personqueue/personqueue.model';
@Component({
  selector: 'app-queueperson-form',
  templateUrl: './queueperson-form.component.html',
  styleUrls: ['./queueperson-form.component.scss']
})
export class QueuepersonFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public personqueue: PersonQueue[] = [];
  public personqueuee!: PersonQueue;
  constructor(
    private personqueueService: PersonqueueService,
    private dialogRef: MatDialogRef<QueuepersonFormComponent, PersonQueue>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: PersonQueue
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.setData();
  }

  RedirectList(){
    this.router.navigate(['dashboard/queueperson/list'])

  }
  public onSubmit(){
    
    console.log(this.form.value);
    

    const personqueue: PersonQueue = {
      ...this.form.value,
    } as PersonQueue;


      this.createQueue(personqueue);
    



    
  }


  public createQueue(personqueue: PersonQueue): void {
    this.personqueueService.insert(personqueue).subscribe(
      () => {
        alertify.success('Se ha agregado la persona a la cola correctamente');

        this.dialogRef.close();
      },
      () => {
        alertify.error('Error al agregar la persona...');
      }
    );


    

}

private setData() {
  if (this.data) {
    this.form.patchValue({
      ...this.data,
    });
  }
}

  private initializeForm() {
    this.form = new FormGroup({
      queueId: new FormControl(0, [Validators.required]),
      personId: new FormControl(0, [Validators.required])

    });
}


}
