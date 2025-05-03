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
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia ipsum non erat rutrum, in lacinia nisl lacinia. Integer massa nibh, elementum sed vestibulum vel, tempus faucibus sapien. Phasellus euismod malesuada massa a laoreet. Phasellus volutpat vel ante quis aliquam. Praesent imperdiet nibh dolor, eu convallis nunc condimentum in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vestibulum mollis neque, ac lacinia nibh consequat in. Sed sit amet maximus quam. Vestibulum vulputate elit id libero tempus, et scelerisque urna vestibulum. Nunc et eros ultricies, vulputate ante nec, posuere diam. In vitae turpis urna. Nullam efficitur, leo et tempor convallis, quam mauris egestas eros, sed pretium lacus nisi a diam. Curabitur pulvinar luctus nulla vehicula dignissim.',
			links: [{
				name: 'Conheça o Blog',
				url: 'https://vidafullstack.com.br',
			}],
		},
	]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
