import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {
  date = new Date().getFullYear();
/*   twttr: any; */
  constructor() {}

  ngOnInit(): void {
/*     this.twttr.widgets.load(); */
  }
}
