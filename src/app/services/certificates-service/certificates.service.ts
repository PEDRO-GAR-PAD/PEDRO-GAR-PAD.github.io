import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificates } from '../../models/certificates/certificates.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  
  accesoCertificates = "certificates running...";

  private dbPath = '/certificate';

  certificateRef: AngularFirestoreCollection<Certificates>;

  constructor(private db: AngularFirestore) {
    this.certificateRef = db.collection(this.dbPath);
  }

  getCertificates(): AngularFirestoreCollection<Certificates> {
    return this.certificateRef;
  }

}
