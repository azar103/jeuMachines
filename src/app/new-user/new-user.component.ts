import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreferences: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
   const formValue = this.userForm.value;
   const newUser = new User(formValue['firsName'],
                             formValue['lastName'],
                             formValue['email'],
                             formValue['drinkPreferences'],
                             formValue['hobbies'] ? formValue['hobbies'] : []);
   this.userService.addUser(newUser);
   this.router.navigate(['users']);

  }

  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
     const newHobbyControl = this.formBuilder.control(null, Validators.required);
     this.getHobbies().push(newHobbyControl);
  }

}
