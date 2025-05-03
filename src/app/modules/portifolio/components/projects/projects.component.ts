import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/projects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/e-dialog-panel-class';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [MatDialogModule],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
