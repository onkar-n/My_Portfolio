import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { TwitterComponent } from './project/twitter/twitter.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },

  {
    path: 'projects',
    children: [
      { path: '', component: ProjectComponent },
      {
        path: 'twitter',
        component: TwitterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
