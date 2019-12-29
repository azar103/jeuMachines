import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.sass']
})
export class EditAppareilComponent implements OnInit {
  defaultOff = 'éteint';
  constructor(private appareilService: AppareilService, private route: Router) { }

  ngOnInit() {
  }

  onSumbit(form: NgForm) {
       this.appareilService.addAppareil(form.value.name, form.value.status);
       this.appareilService.emitAppareilsSubject();
       this.route.navigate(['/appareils']);
  }

}
