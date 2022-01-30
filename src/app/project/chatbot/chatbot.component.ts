import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit, AfterViewInit {
  @ViewChild('amit') box: ElementRef;

  constructor(private chat: ChatService, private renderer: Renderer2) {}

  a: any[] = [];
  query(query: any) {
    /*
    User input
    */
    let div = this.renderer.createElement('div');
    let span = this.renderer.createElement('span');
    this.renderer.addClass(span, 'inbox');
    span.innerText = query.value;
    this.renderer.appendChild(div, span);
    this.renderer.addClass(div, 'in');
    this.renderer.appendChild(this.box.nativeElement, div);

    /*
    Response from server
    */
    this.chat.postData(query.value).subscribe((d) => {
      let div1 = this.renderer.createElement('div');
      let span1 = this.renderer.createElement('span');
      this.renderer.addClass(span1, 'outbox');
      span1.innerText = d.Reply;
      this.renderer.appendChild(div1, span1);
      this.renderer.addClass(div1, 'out');
      this.renderer.appendChild(this.box.nativeElement, div1);
    });
    query.value = null;
  }

  loginFlag: boolean = false;
  toggle() {
    if (this.loginFlag == false) {
      this.loginFlag = true;
    } else {
      this.loginFlag = false;
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
