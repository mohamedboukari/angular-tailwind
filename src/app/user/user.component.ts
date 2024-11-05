import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  user = [
    { id: 1, name: 'joe1', age: 10 },
    { id: 2, name: 'joe2', age: 11 },
    { id: 3, name: 'joe3', age: 12 },
    { id: 4, name: 'joe4', age: 12 },
  ];
}
