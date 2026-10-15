import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ContactForm } from './contact-form/contact-form';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Accueil | InformatServie' },
    {path: 'contact', component: ContactForm, title: 'Contact | InformatService'},
    { path: '**', redirectTo: '' }
];
