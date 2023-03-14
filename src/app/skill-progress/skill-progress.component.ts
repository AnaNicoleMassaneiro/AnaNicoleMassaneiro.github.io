import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skill-progress",
  templateUrl: "./skill-progress.component.html",
  styleUrls: ["./skill-progress.component.scss"],
})
export class SkillProgressComponent implements OnInit {
  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend",
        progressPercentage: "75%",
      },
      {
        Stack: "Backend",
        progressPercentage: "80%",
      },
      {
        Stack: "Programming",
        progressPercentage: "90%",
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%",
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  progressStyle(percentage: string) {
    return { width: percentage };
  }
}
