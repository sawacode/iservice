import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Nav } from './nav/nav';

@Component({
  imports: [RouterOutlet, AutoCompleteModule, Nav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('informatService');


}
