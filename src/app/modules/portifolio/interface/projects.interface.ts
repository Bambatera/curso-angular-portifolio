import { ILink } from './link.interface';

export interface IProjects {
  image: string;
  name: string;
  title: string;
  width: string;
  height: string;
  description: string;
  links: ILink[];
}
