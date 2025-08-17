import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  projects = [];
  // projects = [
  //   {
  //     title: "Telecom Churn Analysis",
  //     description: "Predicted customer churn using ML models, improving retention strategies.",
  //     image: "assets/projects/churn.png",
  //     link: "https://github.com/anuruthsree213/churn-analysis"
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
