import { Component, OnInit } from "@angular/core";
import * as Aos from "aos";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit{
  skillsSection = {
    title: "Veja quais as minhas qualificações 💁‍♂️",
    subTitle:
      "DESENVOLVEDORA FULL STACK",
    skills: [
      "⚡ Desenvolvo front-end/interfaces de usuário altamente interativas para seus aplicativos web e móveis",
      "⚡ Criando back-end de aplicativo em Node, Express & JAVA com Spring Boot",
      "⚡ Integração de serviços de terceiros como Firebase/ Heroku/ AWS",
    ],
  };

  ngOnInit() {
    Aos.init({disable: 'mobile'});//AOS - 2
    Aos.refresh()
  }
}
