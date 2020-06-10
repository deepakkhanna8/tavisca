import { Pipe, PipeTransform } from '@angular/core';

import { ITaskList } from '../models/task.model';

@Pipe({
  name: 'cardPipe'
})
export class CardPipe implements PipeTransform {

  public transform(value: any, task: ITaskList): any {
    console.log('log');

    return null;
  }

}
