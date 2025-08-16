import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },   // default route → Home
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/home' }  // fallback → redirect to home
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
