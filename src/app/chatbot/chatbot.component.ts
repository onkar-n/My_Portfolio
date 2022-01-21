import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  Users: any = [];

  constructor(private chat: ChatService) {}

  a: any[] = [];
  query(query: any) {
    this.chat.postData(query.value).subscribe((d) => {
      this.a.push(d);
      this.a.reverse();
    });
  }

  isactive = 1;

  toggle() {
    if (this.isactive == 0) {
      this.isactive = 1;
    } else {
      this.isactive = 0;
    }
  }

  ngOnInit(): void {}
}
