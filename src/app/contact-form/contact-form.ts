import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Whatsapp } from '../whatsapp/whatsapp';

@Component({
  
  imports: [Whatsapp],
  selector: 'app-contact-form',
  styleUrl: './contact-form.css',
  templateUrl: './contact-form.html',
})
export class ContactForm {}
