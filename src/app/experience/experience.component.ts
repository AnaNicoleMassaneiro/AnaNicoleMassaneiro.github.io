import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Engineer",
        company: "IBM",
        color: "#3781c2",
        companylogo: "../../../assets/images/IBM-Simbolo.png",
        date: "out de 2021 - Atualmente",
        desc: "",
        descBullets: [
          "Back-end developer: Java 8 and 11, Spring Boot.",
          "Front-end developer: Angular 13 (HTML, Typescript, Sass, NGRx).",
          "Frontend test development: JestJs and Jasmine",
          "Backend test development: JUnit",
          "Database: MongoDB, SQL, PostgreSQL, Oracle.",
          "Agile scrum methodology: product backlog, sprint backlog, sprint planning, daily scrum meet, sprint review meeting, sprint retrospective meet.",
          "Experience using the following tools: Jira, Confluence, Jenkins.",
          "DevOps: Git, Jenkins, Docker, Kubernetes, Sonar, Fortify, Openshift, PaaS, ArgoCd.",
        ],
      },
      {
        role: "Full Stack Engineer",
        company: "Wipro",
        color: "#23238E",
        companylogo: "../../../assets/images/wipro.jpeg",
        date: "Nov de 2020 - Out de 2021 ",
        desc: "",
        descBullets: [
          "Desenvolvimento de APIS backend com NodeJs, Typescript e Express",
          "Desenvolvimento FrontEnd utilizando Angular, IONIC, RXJS, NGRX e SQLite",
          "Desenvolvimento de testes de integração e unitários com JestJs",
          "Publicação dos aplicativos do cliente Bradesco nas lojas da Apple e Google.",
        ],
      },
      {
        role: "Full Stack Engineer",
        company: "Grupo Barigui",
        color: "#0000FF",
        companylogo: "../../../assets/images/grupo.jpeg",
        date: "Abr de 2020 - Nov de 2020",
        desc: "",
        descBullets: [
          "Desenvolvimento em projetos CRM, ERP, controle de estoque, ETL, contas a pagar e manutenção dos mesmos",
          "Participando desde a entrevistas com o cliente até a implementação de softwares nas lojas",
          "Desenvolvimento backend utilizando C#, .Net, .Net Core, PostGresql, Mysql e SqlServer",
          "Desenvolvimento frontend utilizando Angular 8, Ionic 3 e 4",
          "Desenvolvimento de testes unitários no front e no backEnd utilizando JUnit e Jasmine.",
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
