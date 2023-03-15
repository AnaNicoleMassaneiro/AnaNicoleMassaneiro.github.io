import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      id: 1,
      heading: "Universidade Federal do Paraná",
      duration: "2023",
      subtitle: "Mestrado em Ciencia da Computação",
      content: "Em andamento, finalização prevista para dezembro de 2024.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left",
    },
    {
      id: 2,
      heading: "Universidade Federal do Paraná",
      duration: "2022",
      subtitle: "Especialização em Desenvolvimento Ágil",
      content: "Em andamento finalização prevista para dezembro de 2023.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right",
    },
    {
      id: 3,
      heading: "Universidade Federal do Paraná",
      duration: "2017",
      subtitle: "Análise e Desenvolvimento de Sistemas ",
      content: "Formada em 2021.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public details(index: any, content: any) {
    console.log("----------------");
    console.log(index)

    //this.modal.open();


  }
}
