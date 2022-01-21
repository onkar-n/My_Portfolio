import {
  AfterViewInit,
  Component,
  ElementRef,
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

  isactive = 1;

  toggle() {
    if (this.isactive == 0) {
      this.isactive = 1;
    } else {
      this.isactive = 0;
    }
  }

  ngOnInit(): void {
    console.log(this.box);
  }

  ngAfterViewInit(): void {
    // let div = this.renderer.createElement('div');
    // let span = this.renderer.createElement('span');
    // span.innerText = 'Hello bro';
    // div.appendChild(span);
    // this.renderer.appendChild(this.box.nativeElement, div);
  }
}
