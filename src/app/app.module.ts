import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { TwitterComponent } from './project/twitter/twitter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TestComponent } from './project/test/test.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { FrontendComponent } from './skills/frontend/frontend.component';
import { BackendComponent } from './skills/backend/backend.component';
import { DesignComponent } from './skills/design/design.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
@NgModule({
  declarations: [AppComponent, TwitterComponent, HomeComponent, ProjectComponent, TestComponent, AboutComponent, SkillsComponent, FrontendComponent, BackendComponent, DesignComponent, NavbarComponent, ChatbotComponent],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
