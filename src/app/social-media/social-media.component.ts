import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {
    github: "https://github.com/AnaNicoleMassaneiro",
    linkedin: "https://www.linkedin.com/in/ana-nicole-massaneiro/",
    gmail: "ana.nicole02@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
