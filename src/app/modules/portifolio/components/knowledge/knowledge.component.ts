import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/knowledge.interface';
@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  knowledges = signal<IKnowledge[]>([
    { alt: 'Ícone de conhecimento de HTML5', src: 'assets/icons/knowledge/html5.svg' },
    { alt: 'Ícone de conhecimento de CSS3', src: 'assets/icons/knowledge/css3.svg' },
    { alt: 'Ícone de conhecimento de Angular', src: 'assets/icons/knowledge/angular.svg' },
    { alt: 'Ícone de conhecimento de Java', src: 'assets/icons/knowledge/java.svg' },
  ]);
}
