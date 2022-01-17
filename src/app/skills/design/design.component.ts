import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  dt = [
    { name: 'Figma', status: '80%' },
    { name: 'Photoshop', status: '60%' },
    { name: 'AI', status: '90%' },
    { name: 'Inkscape', status: '90%' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
