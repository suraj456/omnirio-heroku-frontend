import { Component, OnInit , Inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService,USERS} from "../core/api.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  private subcription : Subscription
  editForm: FormGroup;
  storage
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService, private route:ActivatedRoute) { 
    this.storage = { data : [], index : -1}
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.storage.data = JSON.parse(sessionStorage.getItem(USERS))
    for (let i = 0; i < this.storage.data.length; i++) {
      const element = this.storage.data[i];
      if(element.createdDate == id){
        this.storage.index = i
        break
      }
    }
    let arr = this.storage.data
    let i = this.storage.index
    this.editForm = this.formBuilder.group({
      createdDate : [arr[i].createdDate],
      firstName: [arr[i].firstName, Validators.required],
      lastName: [arr[i].lastName, Validators.required],
      age: [arr[i].age, Validators.required],
      designation: [arr[i].designation, Validators.required]
    });
  }

  onSubmit() {    
    this.storage.data[this.storage.index] = this.editForm.value
   this.apiService.updateUser(this.storage.data).subscribe(()=> this.router.navigate(['/users']))
  }

  ngOnDestroy(){
    
  }

}
