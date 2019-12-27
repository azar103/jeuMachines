export class AppareilService {
  appareils = [
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

switchOnAll() {
  for (let appareil of this.appareils) {
       appareil.status = 'allumé';
  }
}
switchOfAll() {
  for (let appareil of this.appareils) {
    appareil.status = 'éteint';
}
}
getAppareilById(id: number) {
   const appareil = this.appareils.find((appareilObject) =>  appareilObject.id === id);
   return appareil;
}
switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
}
switchOffOne(index: number) {
  this.appareils[index].status = 'éteint';
}

}
