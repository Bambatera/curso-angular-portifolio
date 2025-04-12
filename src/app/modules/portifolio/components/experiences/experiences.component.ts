import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/experience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public experiences = signal<IExperience[]>([
    {
      summary: {
        title: 'Analista de Tecnologia da Informação',
        location: 'Universidade de Brasília - UnB | Desde Fev/2015',
      },
      description:
        '<p>Desenvolvedor Full Stack.</p><p>Desenvolvimento de aplicações web com Angular 14 e Java Spring Boot.</p><p>Análise e manutenção de aplicações Web desenvolvidas em Java EE com JSF e Primefaces, usando JBoss Developer Studio, banco de dados SQL Server 2008 R2 e servidor de Aplicações JBoss AS 7.</p><p>Suporte e manutenção de aplicativos desenvolvidos em Visual Basic 6.</p>',
    },
    {
      summary: {
        title: 'Analista / Programador Java Web',
        location: 'Infosolo Informática LTDA | Dez/2013 à Jan/2015 ',
      },
      description:
        '<p>Análise, manutenção e desenvolvimento de aplicações Web desenvolvidas em Java com uso da IDE Eclipse e diversos frameworks como JBoss Seam, JBoss AS, Richfaces, Primefaces e Apache Tomcat e banco de dados PostgreSQL 9 e/ou MS SQL Server 2008.</p>',
    },
    {
      summary: {
        title: 'Programador Java.',
        location: 'CAU Hospital Urológico de Brasília | Dez/2012 à Jul/2013',
      },
      description:
        '<p>Levantamento de requisitos, modelagem de dados, desenvolvimento de software de Gestão Hospitalar utilizando a IDE NetBeans e Banco de Dados PostgreSQL 9.2.</p>',
    },
    {
      summary: {
        title: 'Analista/Desenvolvedor.',
        location: 'VF Tecnologia LTDA | Jan/2008 à Jun/2011',
      },
      description:
        'Análise, desenvolvimento e manutenção de soluções informatizadas para Gestão Hospitalar, desenvolvidas em Visual Basic 6 e Java para desktops, utilizando a IDE NetBeans e Banco de Dados MS SQL Server 2000/2005 e MySQL 5.5.',
    },
    {
      summary: {
        title: 'Operador de microcomputador.',
        location: 'Supermercados Tatico | Mai/2007 à Jun/2007',
      },
      description:
        '<p>Elaboração de documentos e relatórios administrativos utilizando-se do pacote MS Office 2003, suporte técnico aos caixas do supermercado.</p>',
    },
    {
      summary: {
        title: 'Técnico em Suporte Nível IV.',
        location: 'Poliedro Informática | Jul/2006 à Dez/2006',
      },
      description:
        '<p>Suporte técnico de hardware e software in-loco, análise de problemas de software desenvolvido em Delphi e manutenção de problemas em banco de dados Interbase.</p>',
    },
    {
      summary: {
        title: 'Analista de Suporte Júnior.',
        location: 'Linknet Tecnologia | Jun/2005 à Jul/2006',
      },
      description:
        '<p>Suporte técnico de hardware e software in-loco, análise de problemas de software desenvolvido em Delphi e manutenção de problemas em banco de dados Interbase.</p>',
    },
    {
      summary: {
        title: 'Atendente Nível II.',
        location: 'CTIS Informática | Fev/2003 à Jun/2005',
      },
      description:
        '<p>Suporte técnico de hardware e software in-loco, análise de problemas de software desenvolvido em Delphi e manutenção de problemas em banco de dados Interbase.</p>',
    },
    {
      summary: {
        title: 'Atendente bancário.',
        location: 'Caixa Econômica Federal | Mar/2002 à Set/2002',
      },
      description:
        '<p>Atendimento ao público de Fundo de Garantia por Tempo de Serviço (FGTS), principalmente, dos Planos Econômicos de 1988 a 1990.</p>',
    },
    {
      summary: {
        title: 'Instrutor do Curso Básico de Informática.',
        location:
          'TI Informática - Cursos de Informática | Out/2000 à Dez/2001',
      },
      description:
        '<p>Ministração de aulas de informática básica para o público em geral.</p><p>Ministração de aulas do curso básico de Desenvolvimento de aplicações em Delphi 5.</p>',
    },
    {
      summary: {
        title: 'Estagiário.',
        location:
          'Sarmento Computadores - Escola de Informática | Set/1996 à Jan/1997',
      },
      description:
        'Auxiliar de instrutor em laboratório de informática, auxiliar de reposição de aulas.',
    },
  ]);
}
