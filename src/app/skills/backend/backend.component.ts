import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  lang = [
    { name: 'Html', status: '80%' },
    { name: 'Css', status: '60%' },
    { name: 'JavaScript', status: '90%' },
    { name: 'Angular', status: '90%' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
