import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showPopup = false; 
  showContactForm = false; 

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: [''],
      mensaje: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      
      setTimeout(() => {
        this.isSubmitting = false;
        this.showPopup = true; 
        this.contactForm.reset();
      }, 3000);
    }
  }

  closePopup() {
    this.showPopup = false; 
  }
}