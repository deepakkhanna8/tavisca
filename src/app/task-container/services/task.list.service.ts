import { Injectable } from '@angular/core';

import { ICard } from '../models/card.model';
import { ITaskList } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private readonly taskList: ITaskList[] = [];
  private readonly cards: ICard[] = [];
  constructor() {
    this.taskList.push({ id: 1, name: 'TO-DO', cards: [] },
      { id: 2, name: 'In Progress', cards: [] },
      { id: 3, name: 'Done', cards: [] });
  }

  public getTaskList(): ITaskList[] {
    return this.taskList;
  }

  public getTaskListById(id: number): ITaskList[] {
    return this.taskList.filter((item) => item.id === id);
  }

  public addTaskList(taskName: string): void {
    this.taskList.push({ id: this.taskList.length + 1, name: taskName, cards: [] });
  }

  public getCards(): ICard[] {
    return this.cards;
  }
  public getCardsByListId(listId: number): ICard[] {
    return this.cards.filter((item) => item.listId === listId);
  }
  public addCards(idList: number, cardDetail: string): void {
    this.taskList.filter((item) => {
      if (item.id === idList) {
        item.cards.push({ id: item.cards.length + 1, name: cardDetail, listId: idList });
      }
    });

  }
}
