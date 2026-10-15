import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Whatsapp } from '../whatsapp/whatsapp';

@Component({
  imports: [RouterLink, Whatsapp],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  readonly infos = [
    {
      id: 1,
      title: 'Formation en programmation',
      level: 'Formation',
      tag: 'formation',
      image: 'infos/info_codage.jpeg',
      description: "Maîtrisez l'architecture moderne d'un logiciel et les performances.",
    },
    {
      id: 2,
      title: 'Formation des élèves et étudiants',
      level: 'Formation',
      tag: 'formation',
      image: 'infos/etabl_ifn.jpeg',
      description: "Nous intervenons dans les établissements scolaires et universitaires.",
    },
    {
      id: 3,
      title: 'Conception de site web',
      level: 'Conception',
      tag: 'service',
      image: 'infos/info_web.jpeg',
      description: "Nous créons des sites web modernes, rapides et adaptés à tous les écrans.",
    },
    {
      id: 4,
      title: 'Conception d\'application mobile',
      level: 'Conception',
      tag: 'service',
      image: 'infos/info_cmobile.jpeg',
      description: "Nous créons des applications mobile modernes et adaptés.",
    },
  ]

  readonly formations = [
    {
      id: 1,
      title: 'Flutter',
      level: 'Conception mobile',
      color: '#13017C',
      image: 'formation/flutter.jpeg',
      description: 'Maîtrisez l\'architecture moderne Flutter et les performances.',
      modules: [
        'Architecture modulaire & widgets réutilisables',
        'State local, StatefulWidget et gestion réactive',
        'State management avancé ( BLoC / GetX)',
        'Navigation avancée',
        'Intégration d\'API externes (REST, WebSocket)',
        'Tests unitaires, widget tests & E2E (integration_test)',
        'Optimisation des performances mobiles',
      ]
    },
    {
      id: 2,
      title: 'Laravel',
      level: 'Conception site web',
      color: '#876AFF',
      image: 'formation/laravel.jpeg',
      description: '',
      modules: [
        'Bases de PHP moderne & environnement de travail',
        'Découverte de Laravel & premier projet',
        'Routage, contrôleurs et vues',
        'Bases de données & Eloquent (CRUD simple)',
        'Validation, formulaires et authentification',
        'Consommer et exposer une API simple',
        'Tests simples & bonnes pratiques',
        'Mise en ligne d\'un premier projet',
      ]
    },
    {
      id: 3,
      title: 'Programmation orientée objet (POO) en Java / php',
      level: 'Programmation',
      color: '#876AFF',
      image: 'formation/poo_java_php.jpeg',
      description: 'Orchestrez vos conteneurs à grande échelle avec confiance.',
      modules: [
        "Introduction à la POO & concepts clés",
        "Classes, objets et attributs",
        "Méthodes et constructeurs",
        "Encapsulation",
        "Héritage, Polymorphisme",
        "Classes abstraites et interfaces",
        "Relations entre objets (association, composition, agrégation)",
        "Classes spéciales (records, enums, classes internes)",
        "Bonnes pratiques POO & design patterns de base"
      ]
    },


  ];

  readonly projects = [
    {
      id:1,
      title: 'Plateforme e-commerce AgroPlus', client: 'Groupe AgroPlus', year: '2024', category: 'web',
      image: '',
      description: 'Boutique en ligne complète avec gestion des stocks, paiement mobile money et tableau de bord administrateur.',
      tags: ['Angular', 'Node.js', 'Stripe', 'MongoDB']
    },
    {
      id:2,
      title: 'Application mobile Santé+', client: 'Cabinet Médical Espoir', year: '2024', category: 'mobile',
      image: '',
      description: 'Application de prise de rendez-vous, dossier patient numérique et rappels automatiques par SMS.',
      tags: ['Flutter', 'Firebase', 'API REST']
    },
    
  ];

  readonly services = [
      {
        icon: '<svg class="icon" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', title: 'Développement Web & Mobile',
        description: 'Applications sur mesure en Angular, React, Node.js, Flutter. Sites vitrines, e-commerce, plateformes métier.'
      },
      {
        icon: 'shield', title: 'Cybersécurité',
        description: 'Audit de sécurité, protection des données, mise en conformité, tests d\'intrusion et sensibilisation.'
      },
      {
        icon: 'cloud', title: 'Cloud & Hébergement',
        description: 'Migration cloud (AWS, Azure, GCP), hébergement, sauvegarde, haute disponibilité et scalabilité.'
      },
      {
        icon: 'wrench', title: 'Infogérance & Maintenance',
        description: 'Support technique, maintenance préventive, supervision 24/7 de votre parc informatique.'
      },
      {
        icon: 'network', title: 'Réseaux & Infrastructure',
        description: 'Installation et configuration de réseaux, serveurs, VPN, Wi-Fi professionnel.'
      },
      {
        icon: 'graduation', title: 'Formation & Conseil',
        description: 'Formations sur mesure pour vos équipes et accompagnement stratégique dans vos projets IT.'
      },
    ];

}
