import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:  './test.component.html',
  styleUrls:  ['./test.component.css'],
})
export class TestComponent implements OnInit {
  title="Weather App";
  description="Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.";
  constructor() { }

  ngOnInit() {
  }

}
