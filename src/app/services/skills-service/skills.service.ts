import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skills } from '../../models/skills/skills.module';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  accesoSkills = 'Skills Services are Runnig';

  private dbPath = '/skill';

  skillRef : AngularFirestoreCollection<Skills>;

  constructor(private db:AngularFirestore ) {
    this.skillRef = db.collection(this.dbPath);
   }

   getSkill() : AngularFirestoreCollection<Skills>{
     return this.skillRef;
   }
}
