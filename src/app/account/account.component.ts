import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: string = 'eddyfredyreding@gmail.com';
  files: object = ['https://ipfs.io/ipfs/Qmd1UhG3GaAo1apjm6dHXzsMkwsAMjHqYfoViyrPuQeJSq', 'https://ipfs.io/ipfs/QmUPsPmpf96fNyoTB5mfQxRN6eS9tXn12VtxdQBs1QuYGx'];
  contact: object;

  filePage: boolean = true;
  contactsPage: boolean = false;


  onFiles () {
    this.filePage = true;
    this.contactsPage = false;
  }

  onContacts () {
    this.filePage = false;
    this.contactsPage = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
