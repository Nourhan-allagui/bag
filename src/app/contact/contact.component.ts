import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    email: '',
    message: ''
  };

  sendEmail(): void {
    const templateParams = {
      email: this.contactForm.email,
      message: this.contactForm.message
    };

    emailjs.send(
      'service_o8ihqzi',
      'template_kfwetz9',
      templateParams,
      'fjJDxdCXP_lFjctFL'
    ).then(
      (result) => {
        console.log('Email sent!', result.text);
        alert('Message sent successfully!');
        this.contactForm = { email: '', message: '' };
      },
      (error) => {
        console.error('Email failed...', error.text);
        alert('Failed to send message.');
      }
    );
  }
}
