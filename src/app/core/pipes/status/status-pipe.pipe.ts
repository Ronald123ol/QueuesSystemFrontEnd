import { Pipe, PipeTransform } from '@angular/core';
import { State } from 'src/app/shared/models/enums/state.model';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: State): string {
    switch(value){
      case 1:
        return 'InQueue';
      case 2:
        return 'Inactive';
      case 3:
        return 'Attended';
      default:
        return 'Not found';
    }
  }

}
