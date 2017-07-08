import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LessonsComponent } from "./lessons/lessons.component";
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: '**', redirectTo: "/home"}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
