import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AppareilService {
  private appareils = [];
constructor(private httpClient: HttpClient) {}
appareilsSubject = new Subject<any[]>();
emitAppareilsSubject() {
  this.appareilsSubject.next(this.appareils.slice());
}
switchOnAll() {
  for (let appareil of this.appareils) {
       appareil.status = 'allumé';
  }
  this.emitAppareilsSubject();
}
switchOfAll() {
  for (let appareil of this.appareils) {
    appareil.status = 'éteint';
  }
  this.emitAppareilsSubject();
}
getAppareilById(id: number) {
   const appareil = this.appareils.find((appareilObject) =>  appareilObject.id === id);
   return appareil;
}
switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilsSubject();
}
switchOffOne(index: number) {
  this.appareils[index].status = 'éteint';
  this.emitAppareilsSubject();
}
addAppareil(name: string, status: string) {
 const appareilObject = {
   id: 0,
   name: '',
   status: ''
 };
 appareilObject.name = name;
 appareilObject.status = status;
 appareilObject.id = this.appareils[(this.appareils.length) - 1].id + 1;

 this.appareils.push(appareilObject);
 this.emitAppareilsSubject();
}
saveAppareilsToServer() {
  this.httpClient.put('https://http-client-demo-bdfd7.firebaseio.com/appareils.json', this.appareils)
                 .subscribe(
                   () => {
                     console.log('Enregistrement terminé');
                   },
                   (error) => {
                     console.log('Erreur ! ' + error);
                   }
                 )
  ;
}

getAppareilsFromServer() {
  this.httpClient.get<any[]>('https://http-client-demo-bdfd7.firebaseio.com/appareils.json')
                 .subscribe(
                   (response) => {
                       this.appareils = response;
                       this.emitAppareilsSubject();
                   },
                   (error) => {
                     console.log('Erreur de chargement !'+ error);
                   }
                 );


}


}
