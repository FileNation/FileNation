import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormControl, ReactiveFormsModule, FormArray } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {MaterialModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdProgressBarModule} from '@angular/material';

import { IpfsService } from './ipfs.service'

import { AppComponent } from './app.component';
import { TransferComponent } from './transfer/transfer.component';
import { InputComponent } from './input/input.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    InputComponent,
    TestComponent,
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
