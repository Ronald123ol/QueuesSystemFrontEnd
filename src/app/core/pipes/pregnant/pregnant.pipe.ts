import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pregnantPipe'
})
export class PregnantPipe implements PipeTransform {

  transform(value: boolean): string {
    return value? 'Yes' : 'No';
  }

}
