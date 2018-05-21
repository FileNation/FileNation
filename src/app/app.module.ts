import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule,
  MatProgressBarModule, MatProgressSpinnerModule
} from '@angular/material';

// get use with routes and modular
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

// import your router file
import { ROUTES } from './app.routes';

import { IpfsService } from './ipfs.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
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
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    IpfsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
