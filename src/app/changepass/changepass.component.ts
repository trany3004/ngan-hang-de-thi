import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from '../services/base.service';
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private baseService: BaseService,
    private toastr: ToastrService,
    private router: Router
  )  {
    this.formGroup = this.fb.group({

      password: ['', Validators.required],
      repassword: ['', Validators.required],

    }, {
      validators: this.validatePassword()
    });
  }
  validatePassword() {
    return (formGroup: FormGroup) => {
      const password = formGroup.get('password').value;
      const rePassword = formGroup.get('repassword').value;
      if (password && rePassword && password !== rePassword) {

        return {
          notMatch: true
        }
      }
      return null;
    }
  }


  ngOnInit(): void {
  }

  dangKy() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      const payLoad  = this.formGroup.value;
      delete payLoad.repassword;
      this.baseService.createUser(payLoad).subscribe((v) => {
        this.showSuccess()
        this.router.navigate(['/dang-nhap'])
      }, () => {
        // this.toastr.error('Tạo tài khoản thất bại', '');
      })
    }
  }
  showSuccess() {
     this.toastr.success('Đổi mật khẩu thành công', '');
  }

}
