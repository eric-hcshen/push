import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-newpush',
  templateUrl: './newpush.component.html',
  styleUrls: ['./newpush.component.css']
})
export class NewpushComponent {
  form: FormGroup;
  chat = '';
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      msg: ['', Validators.required],
      text: []
    });
   }
   onPush() {
      console.log(this.form.get('msg').value);
      let n = this.form.get('name').value;
      let m = this.form.get('msg').value;
      this.chat += m;
      this.chat += ' ';
      this.chat += n;
      //this.form.get('text').setValue(this.chat);
      this.form.get('text').setValue(`${this.chat}  XXX`);
      /*
      this.chat += "${this.form.get('name').value}" +  " ${this.form.get('msg').value}";
      this.form.get('text').value(this.chat);*/
   }
}
