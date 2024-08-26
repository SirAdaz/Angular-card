import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AffichageComponent } from "./affichage/affichage.component";
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AffichageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_projet';
}

