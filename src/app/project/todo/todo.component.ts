import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  names: string[] = [];
  getname(val: any) {
    this.names.push(val.value);
    val.value = null;
  }

  removeAll() {
    this.names.splice(this.names.length - 1);
  }

  remove(item: any) {
    console.log(item);
    this.names.splice(item, 1);
  }

  ngOnInit(): void {}
}
