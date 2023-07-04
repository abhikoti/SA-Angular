import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  form!: FormGroup;
    loading = false;
    submitted = false;
  constructor( 
     private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service:UserService
    ) {
     
  
    
  }
  ngOnInit(): void {
    // this.service.IsUserCheck().subscribe(
    //   d=> d,
    //   err => console.log('error'),
    //   ()=> console.log('complete..!')   
    // )

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
 // convenience getter for easy access to form fields
 get f() { return this.form.controls; }
  
 onSubmit() {
  this.submitted = true;

 

  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.loading = true;
  this.service.IsUserCheck()
      .pipe(first())
      .subscribe({
          next: () => {
              // get return url from query parameters or default to home page
            
          },
          error: error => {
              console.log(error);
              
              this.loading = false;
          }
      });
}
}
