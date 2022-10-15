import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.signupForm = this.formbuilder.group({
      name: [''],
      email: [''],
      pass: [''],
      repass: ['']
    })

  }
  signup() {
    this.http.post<any>("http://localhost:3000/users", this.signupForm.value).subscribe(res => {
      alert("Successfully Added")
      this.signupForm.reset
      this.router.navigate(['signin'])
    })
  }

  ngOnInit(): void {

  }

}
