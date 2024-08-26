import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service'; // Importation du service
import { CarteComponent } from "../carte/carte.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage',
  imports: 
  [
    CarteComponent,
    CommonModule
  ],
  standalone: true,
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css'],
})
export class AffichageComponent implements OnInit {
  afficherCartes: boolean = true;
  employes: any[] = []; // Liste des employés

  constructor(private employeService: EmployeService) { }

  ngOnInit() {
    this.employeService.getEmployes().subscribe(data => {
      this.employes = data; // Récupération des employés depuis l'API
    });
  }

  toggleAffichage() {
    this.afficherCartes = !this.afficherCartes;
  }
}

