import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.scss'],
})
export class HeaderSecondaryComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit() {}

}
