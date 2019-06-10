import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
/*
class Chat {
  name: string;
  msg: string;
}
*/
export class ChatComponent {
  name: string;
  msg: string;
  msgs = [];

  constructor() { }
  onPush() {
    console.log('push');
    let m = new Message(this.name, this.msg);
    this.msgs.push(m);
    console.log(this.msgs);
    this.name = '';
    this.msg = '';
  }
}
