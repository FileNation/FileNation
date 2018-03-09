import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {MaterialModule} from '@angular/material';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { IpfsService } from './ipfs.service'

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

// get use with routes and modular
import { RouterModule, PreloadAllModules } from '@angular/router';

// import your router file
import {ROUTES} from './app.routes';


import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HomeComponent } from './home/home.component'
import { DragZoneComponent } from './dragzone/dragzone.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    DragZoneComponent,
    TransferComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    [FormsModule, ReactiveFormsModule],
    [MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule],
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])


  ],
  providers: [
    IpfsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
