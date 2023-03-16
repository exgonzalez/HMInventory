import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataComponent } from './components/data/data.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { initializeApp } from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// firebase Config Project
const firebaseConfig = {
  apiKey: "AIzaSyBgdpkJR-tZpiQA-r-JH5S-zYD5oC9DXM4",
  authDomain: "hmiti-6aa2a.firebaseapp.com",
  databaseURL: "https://hmiti-6aa2a-default-rtdb.firebaseio.com",
  projectId: "hmiti-6aa2a",
  storageBucket: "hmiti-6aa2a.appspot.com",
  messagingSenderId: "331019910260",
  appId: "1:331019910260:web:3bb42f7c9a6c69ecc3a521",
  measurementId: "G-D0KH19GGKL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
