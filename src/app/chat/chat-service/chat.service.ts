import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


let taskList = [
  [1, "Estimate", 1, 8, 8, true],
  [2, "Create", 2, 8, 4, false],
  [3, "Deploy", 3, 8, 0, false]
];

let taskListPromise = Promise.resolve(taskList);

@Injectable()
export class ChatService {

  getTasks() {
    return taskListPromise;
  }

}