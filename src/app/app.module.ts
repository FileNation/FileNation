import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {MaterialModule} from '@angular/material';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatProgressBarModule} from '@angular/material';

import { IpfsService } from './ipfs.service'

import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { InputComponent } from './input/input.component';
import { TestComponent } from './test/test.component';
import { LogInComponent } from './log-in/log-in.component';
import { AccountComponent } from './account/account.component';


// get use with routes and modular
import { RouterModule, PreloadAllModules } from '@angular/router';

// import your router file
import {ROUTES} from './app.routes';


import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    InputComponent,
    TestComponent,
    LogInComponent,
    AccountComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    [FormsModule, ReactiveFormsModule],
    [MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatProgressBarModule],
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})

  ],
  providers: [
    IpfsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
