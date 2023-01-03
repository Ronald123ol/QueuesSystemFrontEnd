import { BaseModel } from "../base/base.model";
import { Person } from "../person/person.model";
import { Queue } from "../queue/queue.model";

export interface PersonQueue extends BaseModel {
    personId: number;
    queueId: number;
    state: number;
    preferenceLevel: number;
    arrivedTime: string;
    person: Person;
    queue: Queue;
}
