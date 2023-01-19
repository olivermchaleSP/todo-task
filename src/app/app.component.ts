import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // TODO: Add types!
  todos: any[] = [
    { task: 'Make bed', completed: false },
    { task: 'Brush teeth', completed: false },
    { task: 'Get dressed', completed: false },
  ];
}
