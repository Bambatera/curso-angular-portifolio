import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/projects.interface';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
	public projects = signal<IProjects[]>([
		{
			image: '/assets/img/projects/vfull.png',
			name: 'Projeto Vida FullStack',
			title: 'Vida FullStack',
			width: '100px',
			height: '51px',
			description: '',
			link: {
				name: 'Conheça o Blog',
				url: 'https://vidafullstack.com.br',
			},
		},
	]);
}
