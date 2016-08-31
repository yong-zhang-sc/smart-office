import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule }   from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LoginComponent, HomeComponent]
})
export class AppComponent {
  title = 'app works!';
}
