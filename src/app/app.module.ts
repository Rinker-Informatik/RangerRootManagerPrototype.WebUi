import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { ContentModule } from './components/content/content-app.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatSliderModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
