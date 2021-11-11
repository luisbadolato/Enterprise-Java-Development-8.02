import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact: {
    name: string,
    occupation: string,
    email: string,
    subject: string,
    content: string
  }

  isDisabled: boolean;

  constructor() {
    this.contact = {
      name: '',
      occupation: '',
      email: '',
      subject: '',
      content: ''
    }

    this.isDisabled = false;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isDisabled = true;
  }

}
