import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FirebaseApp } from 'firebase/app';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  constructor(){
    let typeDevicesObj: string
  }

  typeDevicesObj = [
    'Computadora',
    'Tablet',
    'Escaner',
    'Teléfono',
    'Otro Dispositivo'
  ]

  uploadData(){
    console.log("Entra a función");

  }









}
