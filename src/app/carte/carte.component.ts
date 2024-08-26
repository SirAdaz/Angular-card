import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent {
  @Input() employe: any; // On déclare une propriété 'employe' qui recevra des données depuis un autre composant.
}
