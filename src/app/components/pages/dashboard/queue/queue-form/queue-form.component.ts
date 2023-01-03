import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/shared/models/person/person.model';
import { Queue } from 'src/app/shared/models/queue/queue.model';
import { QueueService } from 'src/app/shared/services/queue/queue.service';

import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-queue-form',
  templateUrl: './queue-form.component.html',
  styleUrls: ['./queue-form.component.scss']
})
export class QueueFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  constructor(
    private queueService: QueueService,
    private dialogRef: MatDialogRef<QueueFormComponent, Queue>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: Queue
  ) { }

  ngOnInit(): void {
    this.initializaForm();
    this.setData();
  }
  RedirectList(){
    this.router.navigate(['dashboard/queue/list'])

  }

  public onSubmit(){
    
    console.log(this.form.value);
    

    const queue: Queue = {
      ...this.form.value,
    } as Queue;

    if (this.data) {
      this.editQueue(queue);
    } else {
      this.createQueue(queue);
    }



    
  }
  private setData() {
    if (this.data) {
      this.form.patchValue({
        ...this.data,
      });
    }
  }

  public editQueue(queue: Queue): void {
    this.queueService.update(queue).subscribe(
      () => {
        alertify.success('Queue has been edited');
        this.dialogRef.close();
        this.resetForm();
 
        
      },
      () => {
        alertify.error('Error editing queue');
        
      }
    );
  }


  private initializaForm() {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])

    });
  }



  public createQueue(queue: Queue): void {
    this.queueService.insert(queue).subscribe(
      () => {
        alertify.success('Se creó la persona correctamente');

        this.dialogRef.close();
      },
      () => {
        alertify.error('Error al crear la persona');
      }
    );

}

public deleteQueue(id: string) {
   
      alertify.confirm('¿Estas seguro de eliminar este empleado?',()=>{
        this.queueService.delete(id).subscribe(() => {
          alertify.success('Empleado eliminado');
         
      })
      
  }, function(){})}

  private resetForm(): void {
    this.form.reset();
  }


}
