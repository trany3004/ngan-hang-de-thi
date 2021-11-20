import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from '../services/base.service';

declare var FB: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private baseService: BaseService,
    private toastr: ToastrService,
    private router: Router
  ){
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    }); }



  ngOnInit(): void {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '956478778621559',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
      });

  }

  dangNhap() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      const payLoad  = this.formGroup.value;
      this.baseService.login(payLoad).subscribe((v) => {
        localStorage.setItem('token', v.token);
        localStorage.setItem('user', JSON.stringify(v.user));
        this.showSuccess();
        this.router.navigate(['/welcome'])
      }, () => {
        this.toastr.error('Đăng nhập thất bại', '');
      })
    }
  }


  showSuccess() {
    this.toastr.success('Đăng nhập thành công', '');
  }
}
