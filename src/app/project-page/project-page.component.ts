import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  projects = [
    {
      title: "Telecom Churn Analysis",
      description: "Predicted customer churn using ML models, improving retention strategies.",
      image: "assets/projects/churn.png",
      link: "https://github.com/anuruthsree213/churn-analysis"
    },
    {
      title: "Banking Fraud Detection",
      description: "Built a fraud detection pipeline using Python + SQL + Power BI dashboards.",
      image: "assets/projects/fraud.png",
      link: "https://github.com/anuruthsree213/fraud-detection"
    },
    {
      title: "AI Resume Evaluator",
      description: "Developed an AI-based resume screening app using open-source LLMs.",
      image: "assets/projects/resume.png",
      link: "https://github.com/anuruthsree213/resume-evaluator"
    },
    {
      title: "Banking Fraud Detection",
      description: "Built a fraud detection pipeline using Python + SQL + Power BI dashboards.",
      image: "assets/projects/fraud.png",
      link: "https://github.com/anuruthsree213/fraud-detection"
    },
    {
      title: "AI Resume Evaluator",
      description: "Developed an AI-based resume screening app using open-source LLMs.",
      image: "assets/projects/resume.png",
      link: "https://github.com/anuruthsree213/resume-evaluator"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
