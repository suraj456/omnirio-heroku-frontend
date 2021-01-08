import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {ApiService, USERS} from "../core/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data)=>{
      if(data.results)
      this.apiService.users.next(data.results.users)
      sessionStorage.setItem(USERS, JSON.stringify(data.results.users))
    })
  }


  editUser(user: User): void {
    this.router.navigate(['edit-user', {id : user.createdDate}]);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
    
  };

  deleteUser(user: User, i): void {
    let storage = JSON.parse(sessionStorage.getItem(USERS))
    storage.splice(i, 1)
    this.apiService.updateUser(storage).subscribe(()=> {
      this.apiService.users.next(storage)
      sessionStorage.setItem(USERS, JSON.stringify(storage))
    })
  };

}
