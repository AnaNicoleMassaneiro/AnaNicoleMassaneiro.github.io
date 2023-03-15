import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  greeting = {
    username: 'Ana Nicole',
    title: 'Better Call Ana',
    subTitle:
      'Formada em Analise e Desenvolvimento de Sistema pela UFPR, especialista em desenvolvimento ágil de software e atualmente estudante de mestrado em ciência da computação na UFPR. Trabalho como desenvolvedora Fullstack Sênior na IBM, atuando em um cliente internacional e em um time de alta performance.',
    resumeLink:
      'https://drive.google.com/file/d/1xSSNMXI6hVBcyYBXcTDAwFdw1gl0S9ss/view?usp=sharing',
  };
  constructor() {}

  ngOnInit(): void {}
}
