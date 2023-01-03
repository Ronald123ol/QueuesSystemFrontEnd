import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';
import { Person } from 'src/app/shared/models/person/person.model';
import { PersonService } from 'src/app/shared/services/person/person.service';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  public person: Person[] = [];
  public peerson!: Person;
  constructor(private personService: PersonService, private dialog: MatDialog, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getPerson();
  }

   fechaFormateada = this.datePipe.transform(this.peerson.birthdate, 'dd/MM/yyyy');

  getPerson(){
    this.personService.getAll().subscribe(({ data}: any)=> { this.person = data})
  }

  public openDialog(){
    this.dialog.open(PersonFormComponent)

    this.dialog.afterAllClosed.subscribe(()=>{
      this.getPerson();
    })
  }

  

  public editPerson(person: Person) {
    this.dialog.open(PersonFormComponent, {
      data: person,
    });
  }

  public deletePerson(id: string) {
   
    alertify.confirm('¿Estas seguro de eliminar este empleado?',()=>{
      this.personService.delete(id).subscribe(() => {
        alertify.success('Empleado eliminado');
        this.getPerson();
       
    })
    
}, function(){})}

}
