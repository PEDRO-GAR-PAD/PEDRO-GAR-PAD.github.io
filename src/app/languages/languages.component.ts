import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Languages } from '../models/languages/languages.modul';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})

export class LanguagesComponent {

  languages : Languages [] = [];

   constructor(public languagesService : LanguagesService)
   {
     console.log(this.languagesService);
     this.languagesService.getLanguage().snapshotChanges().pipe(
      map(changes => 
        changes.map(c =>
        ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
     ).subscribe(data => {
      this.languages = data;
      console.log(this.languages);
     })
   }
}