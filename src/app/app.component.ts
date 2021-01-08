import { Component } from '@angular/core';
import { ApiService,USERS } from './core/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-crud';
  constructor(private apiService : ApiService){

  }
}
