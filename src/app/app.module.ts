import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdProgressBarModule} from '@angular/material';

import { IpfsService } from './ipfs.service'

import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { InputComponent } from './input/input.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    InputComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    [FormsModule, ReactiveFormsModule],
    [MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdProgressBarModule],

  ],
  providers: [
    IpfsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
