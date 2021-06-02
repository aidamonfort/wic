import { Component, OnInit } from '@angular/core';
import { WpService } from '../../wp.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  entry: any;
  content: any;

  constructor(private route: ActivatedRoute, public wp: WpService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.wp.getSinglePost('upcoming-past-events')
      .subscribe(entries => {
        this.entry = entries[0];
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.entry.content.rendered);
      });
  }

}
