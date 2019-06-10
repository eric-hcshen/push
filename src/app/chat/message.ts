export class Message {
  name: string;
  msg: string;
  date: Date;
  constructor(name: string, msg: string) {
    this.name = name;
    this.msg = msg;
    this.date = new Date();
  }
}
