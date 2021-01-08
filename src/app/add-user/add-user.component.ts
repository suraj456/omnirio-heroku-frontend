import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Subscription } from 'rxjs';
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }
  private subcription : Subscription
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      createdDate : [Date.now()],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      designation: ['', Validators.required]
    });

  }

  onSubmit() {   
    this.addForm.patchValue({'createdDate' : Date.now()})
    let users = [...this.apiService.users.getValue().filter((user)=> user.createdDate), this.addForm.value]
    this.subcription = this.apiService.updateUser(users).subscribe(()=> this.router.navigate(['/users']))
  }

  // ngOnDestroy(){
  //   this.subcription.unsubscribe()
  // }

}
