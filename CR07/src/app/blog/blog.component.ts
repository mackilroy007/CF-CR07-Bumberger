import { Component, OnInit } from '@angular/core';

// import blog content from destination.ts
import { blog } from '../destination';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog = blog;
  constructor() { }

  ngOnInit(): void {
  }

}
