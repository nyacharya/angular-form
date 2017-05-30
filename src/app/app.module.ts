import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { SuccessComponent } from './success/success.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ShowUsersComponent } from './show-users/show-users.component';

const appRoutes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: '', component: ShowUsersComponent },
  { path: 'registration', component: TestFormComponent},
  { path: 'login', component: LoginformComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    SuccessComponent,
    LoginformComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
