import { Component } from '@angular/core';
import {TestFormComponent} from './test-form/test-form.component'
import { ShowUsersComponent} from './show-users/show-users.component'
import { LoginformComponent} from './loginform/loginform.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome to the Angular2 App';
}
