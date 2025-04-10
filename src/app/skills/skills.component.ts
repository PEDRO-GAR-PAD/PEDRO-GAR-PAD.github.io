import { Component } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { Skills } from '../models/skills/skills.module';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

    skills : Skills [] = [];

    constructor(public skillsService : SkillsService)
    {
      console.log(this.skillsService);
      this.skillsService.getSkill().snapshotChanges().pipe(
        map(changes => 
          changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
       ).subscribe(data => {
        this.skills = data;
        console.log(this.skills);
       })
    }
}
