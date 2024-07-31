import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactFormGroup!: FormGroup;
  templateParams!:any;
  isSend: boolean=false;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.contactFormGroup = this.fb.group({
      firstName: this.fb.control(""),
      lastName: this.fb.control(""),
      subject: this.fb.control(""),
      country: this.fb.control("",Validators.required),
      phone: this.fb.control(""),
      email: this.fb.control("",Validators.required),
      message: this.fb.control("",Validators.required),
    });

  }
  isValid(){
    return this.contactFormGroup.valid;
  }
  sendEmail(e: Event) {
    this.templateParams = {
      from_name: this.contactFormGroup.value.firstName,
      from_email: this.contactFormGroup.value.email,
      to_name: this.contactFormGroup.value.lastName,
      subject: this.contactFormGroup.value.subject,
      message: this.contactFormGroup.value.message
    };
    emailjs.send('service_taxhhwp', 'template_47aafjg', this.templateParams, "GP_r02lDCYQS2h2D6")
      .then((result: EmailJSResponseStatus) => {
        this.isSend=true;
      }, (error) => {
        console.log(error.text);
      });
  }

}
