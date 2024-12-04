import { Component } from '@angular/core';
import { FilterArrService } from '../services/filter-arr.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private filtredser: FilterArrService) {}
  user = [
    { id: 1, name: 'joe1', age: 25 },
    { id: 2, name: 'joe2', age: 25 },
    { id: 3, name: 'joe3', age: 37 },
    { id: 4, name: 'joe4', age: 22 },
  ];

  user25Age = this.filtredser.filtredArr(this.user, 'age', 25);
}
