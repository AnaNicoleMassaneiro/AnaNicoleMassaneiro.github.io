import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-software-skill",
  templateUrl: "./software-skill.component.html",
  styleUrls: ["./software-skill.component.scss"],
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "bi bi-filetype-html",
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "bi bi-filetype-css",
      },
      {
        skillName: "JS e TS",
        fontAwesomeClassname: "bi bi-filetype-js",
      },
      {
        skillName: "Angular",
        fontAwesomeClassname: "bi bi-code",
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "bi bi-code-slash",
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "bi bi-file-code",
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "bi bi-database",
      },
      {
        skillName: "Java",
        fontAwesomeClassname: "bi bi-filetype-java",
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
