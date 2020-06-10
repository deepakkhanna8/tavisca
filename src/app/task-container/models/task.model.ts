import { ICard } from './card.model';

export interface ITaskList {
    id: number;
    name: string;
    cards?: ICard [];
}
