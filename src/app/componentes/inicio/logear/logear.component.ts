import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-logear',
  templateUrl: './logear.component.html',
  styleUrls: ['./logear.component.css']
})
export class LogearComponent implements OnInit {

  loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}
}
