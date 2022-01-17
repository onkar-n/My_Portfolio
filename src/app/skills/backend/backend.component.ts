import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css'],
})
export class BackendComponent implements OnInit {
  lang = [
    { name: 'Python', status: '80%' },
    { name: 'Flask', status: '60%' },
    { name: 'Django', status: '90%' },
    { name: 'Java', status: '90%' },
    { name: 'Spring boot', status: '90%' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
