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
      if (item.id === idList) {import { Injectable } from '@angular/core';

import { ICard } from '../models/card.model';
import { ITaskList } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private readonly taskList: ITaskList[] = [];
  private readonly cards: ICard[] = [];
  private readonly STORAGE_KEY = 'task-list';
  constructor() {
    const taskList = this.getStoreTaskList();
    if (taskList.length === 0) {
      this.taskList.push({ id: 1, name: 'TO-DO', cards: [] },
        { id: 2, name: 'In Progress', cards: [] },
        { id: 3, name: 'Done', cards: [] });
      this.storeTaskList(this.taskList);
    }

  }

  public getTaskList(): ITaskList[] {
    return this.getStoreTaskList();
  }

  public getTaskListById(id: number): ITaskList[] {
    const taskList = this.getStoreTaskList();
    if (taskList.length > 0) {
      return taskList.filter((item) => item.id === id);
    } else if (this.taskList.length > 0) {
      this.taskList.filter((item) => item.id === id);
    }
    return [{ id: 1, name: 'TO-DO', cards: [] },
    { id: 2, name: 'In Progress', cards: [] },
    { id: 3, name: 'Done', cards: [] }].filter((item) => item.id === id);
  }

  public addTaskList(taskName: string): void {
    this.taskList.push({ id: this.taskList.length + 1, name: taskName, cards: [] });
    this.storeTaskList(this.taskList);
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
    this.storeTaskList(this.taskList);
  }
  public removeCards(idList: number, cardId: number): void {
    this.taskList.filter((item) => {
      if (item.id === idList) {
        item.cards = item.cards.filter(card => card.id !== cardId);
      }
    });
    this.storeTaskList(this.taskList);
  }
  private storeTaskList(taskList: ITaskList[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(taskList));
  }

  public getStoreTaskList(): ITaskList[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || this.taskList;
  }
}


        item.cards.push({ id: item.cards.length + 1, name: cardDetail, listId: idList });
      }
    });

  }
}
