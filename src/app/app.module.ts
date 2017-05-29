import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { SuccessComponent } from './success/success.component';

const appRoutes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: '', component: TestFormComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    SuccessComponent
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
