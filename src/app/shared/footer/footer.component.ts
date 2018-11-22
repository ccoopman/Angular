import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

    base_url = window.location.origin + '#/';

    constructor() { }

    ngOnInit() {
  }

}
