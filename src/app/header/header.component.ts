import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("fadein", [
      state(
        "in",
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateX(-100px)",
        }),
        animate(5000),
      ]),
      transition("* => void", [
        animate(
          5000,
          style({
            transform: "translateX(100px)",
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  greeting = {
    username: "Ana Nicole",
    title: "Better Call Ana",
    subTitle:
      "Formada em Analise e Desenvolvimento de Sistema pela UFPR, especialista em desenvolvimento ágil de software e atualmente estudante de mestrado em ciência da computação na UFPR. Trabalho como desenvolvedora Fullstack Sênior na IBM, atuando em um cliente internacional e em um time de alta performance.",
    resumeLink:
      "https://drive.google.com/file/d/1xSSNMXI6hVBcyYBXcTDAwFdw1gl0S9ss/view?usp=sharing",
  };

  ngOnInit(): void {}
}
