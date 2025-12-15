import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  // projects = [];
  projects = [
    {
      title: "AI PDF Summarizer",
      description: "An AI-powered PDF summarization tool that extracts key insights from large PDF documents. The project uses an Angular frontend for a simple and responsive UI, and a Python FastAPI backend integrated with Gemini to generate summaries.",
      link: "https://anuruthsree213.github.io/pdfSummarizer"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
