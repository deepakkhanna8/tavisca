import { TestBed } from '@angular/core/testing';

import { TaskListService } from './task.list.service';

describe('TaskListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    expect(service).toBeTruthy();
  });
  it('should be get predefined task list', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    const result = service.getTaskList();
    expect(result).toEqual([{ id: 1, name: 'TO-DO', cards: [] },
    { id: 2, name: 'In Progress', cards: [] },
    { id: 3, name: 'Done', cards: [] }]);
  });
  it('should be get task list by id', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    const result = service.getTaskListById(1);
    expect(result).toEqual([{ id: 1, name: 'TO-DO', cards: [] }]);
  });
  it('should be add new lsit', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    service.addTaskList('TestTask');
    const result = service.getTaskList();
    expect(result).toEqual([{ id: 1, name: 'TO-DO', cards: [] },
    { id: 2, name: 'In Progress', cards: [] },
    { id: 3, name: 'Done', cards: [] }, { id: 4, name: 'TestTask', cards: [] }]);
  });
  it('should be get all cards', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    const result = service.getCards();
    expect(result.length).toEqual(0);
  });
  it('should be get cards by Id', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    const result = service.getCardsByListId(1);
    expect(result.length).toEqual(0);
  });
  it('should be add new card', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    service.addCards(1, 'card deatail');
    const result = service.getTaskList();
    expect(result[0].cards).toEqual([{id: 1, listId: 1, name: 'card deatail'}]);
  });
});
