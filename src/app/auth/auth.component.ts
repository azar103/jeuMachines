import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  onSingIn() {
    this.authService.signIn().then(() => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
    });
  }
  onSingOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
