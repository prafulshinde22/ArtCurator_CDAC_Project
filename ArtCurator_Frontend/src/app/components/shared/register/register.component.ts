import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { UserRegistration } from '../../../models/user-registration.model';

function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }
  return null
}

/**
 * If the data is valid return null else return an object
 */
function symbolValidator(control) { //control = registerForm.get('password')
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;
  if (control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registrationSuccess:boolean=null;
  registerForm: FormGroup;
  message: String = '';
  constructor(private router: Router, private builder: FormBuilder, private userService: UserService) { }
  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: '',
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      dob: ['', [Validators.required]],
      role: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      apartment: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      country: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      pin: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    }, {
      validators: passwordsMatchValidator
    })
  }
  register() {
    this.userService.addUser(new UserRegistration(this.registerForm.get('name').value, this.registerForm.get('email').value, this.registerForm.get('password').value,
      this.registerForm.get('phone').value, this.registerForm.get('dob').value, this.registerForm.get('role').value,
      this.registerForm.get('apartment').value, this.registerForm.get('street').value, this.registerForm.get('city').value,
      this.registerForm.get('state').value, this.registerForm.get('country').value, this.registerForm.get('pin').value)).subscribe(
        response=> {},
        error => {}
      );
        this.registrationSuccess=true;
        setTimeout(()=>{
          this.router.navigateByUrl('/login');
        },3000);

  }
}
 