import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/app/shared/models/person/person.model';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Person['birthdate'], ...args: any[]): any {
    const date = new Date(value);
    return date.toLocaleDateString();
  }

}
