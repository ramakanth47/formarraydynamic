import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

  export class AppComponent {
    studentApplicationForm:FormGroup= new FormGroup({
      name:new FormControl('default',[Validators.required,Validators.maxLength(4),Validators.maxLength(2)]),
      age:new FormControl(10,[Validators.required,Validators.max(20),Validators.max(30)])
    });
    constructor(public helloService:HelloService)
    {
        this
    }
  Submit(){
    console.log('Form Submitted!')
    this.helloService.getTodoData().subscribe(response=>{

    })
  }
  }