import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor() {}

  // active = false;

  click = () => {
    // if (this.active == false) {
    //   this.active = true;
    // } else {
    //   this.active = false;
    // }
  };

  ngOnInit(): void {}
}
