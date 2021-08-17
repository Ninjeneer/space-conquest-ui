import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {

  @Input() name = '';
  @Input() quantity = 0;
  @Input() miners = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
