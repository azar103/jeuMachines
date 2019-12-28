import { Subject } from 'rxjs';

export class AppareilService {
  private appareils = [
  {
    id: 1,
    name: 'Machine à laver',
    status: 'allumé'
  },
  {
    id: 2,
    name: 'Frigo',
    status: 'allumé'
  },
  {
    id: 3,
    name: 'Ordinateur',
    status: 'éteint'
  }
];

appareilsSubject = new Subject<any[]>();
emitAppareilsSubject(){
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

}
