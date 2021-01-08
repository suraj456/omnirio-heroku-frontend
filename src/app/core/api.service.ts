import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {BehaviorSubject, Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

export const USERS = 'users'

@Injectable()
export class ApiService {
  public users = new BehaviorSubject<User[]>(UserConst)
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://omnirio-heroku.herokuapp.com/users/';

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  updateUser(users: User[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'update', {users : users});
  }
}


const UserConst : User[] = [{
    firstName : 'No Data',
    lastName : 'No Data',
    age : 0,
    designation : 'No Data',
    createdDate : 0
}]