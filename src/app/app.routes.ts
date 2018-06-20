import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'download/:id', component: DownloadComponent },
  // {path: 'about', loadChildren: './about/about.module#AboutModule'}
];
