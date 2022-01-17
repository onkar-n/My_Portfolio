import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css'],
})
export class FrontendComponent implements OnInit {
  lang = [
    { name: 'Html', status: '80%' },
    { name: 'Css', status: '60%' },
    { name: 'JavaScript', status: '90%' },
    { name: 'Angular', status: '90%' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
