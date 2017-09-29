import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatProgressBarModule} from '@angular/material';

import { IpfsService } from './ipfs.service'

import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    [FormsModule, ReactiveFormsModule],
    [MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatProgressBarModule],

  ],
  providers: [
    IpfsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
