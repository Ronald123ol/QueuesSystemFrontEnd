import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/app/shared/models/person/person.model';
import { PersonService } from 'src/app/shared/services/person/person.service';
import * as alertify from 'alertifyjs';
import { PersonAddDto } from 'src/app/shared/models/dtos/personadddto.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  fileReader: FileReader;
  public form: FormGroup = new FormGroup({});
  selectedFile: File = null;
  constructor(
    private personService: PersonService,
    private dialogRef: MatDialogRef<PersonFormComponent, Person>,
    
    @Inject(MAT_DIALOG_DATA) public data: Person
    
  ) { this.fileReader = new FileReader();}

  ngOnInit(): void {
    this.initializaForm();
    this.setData();
  }


  public onSubmit(){

    const personDto: PersonAddDto = {
      ...this.form.value,
      DocumentFile: this.selectedFile
    } as PersonAddDto;
    const person: Person= {
      ...this.form.value,
    } as Person;
    //console.log(this.form.value);
 
  const formData = new FormData();
  formData.forEach((value, key) => {
    console.log(key, value);
  });
  
    formData.append('DocumentFile', this.form.get('DocumentFile').value);
  
  formData.append('pregnant', this.form.get('pregnant').value);
  formData.append('healthIssues', this.form.get('healthIssues').value);
  formData.append('height', this.form.get('height').value);
  formData.append('weight', this.form.get('weight').value);
  //console.log(this.form.value);
  formData.forEach((value, key) => {
    console.log(key, value);
  });
   this.personService.postUser(formData).subscribe(
     () => {
       alertify.success('Se creó la persona correctamente');
       this.dialogRef.close();
     },
     () => {
       alertify.error('Error al crear la persona');
     }
   );
   
     //this.createPerson(person);
    



    
  }

  public addfilehandler(event: any) {
    console.log(event.target.files)
    this.selectedFile = <File>event.target.files[0]
    
  }
  

  private setData() {
    if (this.data) {
      this.form.patchValue({
        ...this.data,
      });
    }
  }
  
  private initializaForm(): void {
    this.form = new FormGroup({
      pregnant: new FormControl(false, [Validators.required]),
      healthIssues: new FormControl(false, [Validators.required]),
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
    });
  }
  public createPerson(): void {
    const formData = new FormData()
    console.log(this.form.value)
      formData.append('DocumentFile', this.selectedFile, this.selectedFile.name)
      formData.append('pregnant', this.form.get('pregnant').value);
      formData.append('healthIssues', this.form.get('healthIssues').value);
      formData.append('height', this.form.get('height').value);
      formData.append('weight', this.form.get('weight').value);
      console.log(formData)
      this.personService.insert(formData as any).subscribe(
     () => {
       alertify.success('Se creó la persona correctamente');
       this.dialogRef.close();
     },
     () => {
       alertify.error('Error al crear la persona');
     }
   );
    

}

}