import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  siteKey: string ;
  contactForm: FormGroup;
  constructor(
    private userService: UserService, private fb: FormBuilder,
    private httpClient: HttpClient, private toastr: ToastrService) {
    this.siteKey = '6LemOxUcAAAAAGJ8gvv5wQ15DoRW2TpDMHAsGC0S';
    this.contactForm = this.fb.group({
      email: ['', [Validators.required]],
      noiDung: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.httpClient.post('/api/v1/contact/sendMail', this.contactForm.value).subscribe(() => {
      this.toastr.success('Thông tin liên hệ đã gửi thành công', '');
      console.log('EEE')
    }, (error) => {
      console.log('ERROR >>', error)
      this.toastr.error('Thông tin liên hệ không gửi được');
    })
  }

}
