import { Component, OnInit } from '@angular/core';
import { WpService } from '../../wp.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  entry: any;
  content: any;

  constructor(private route: ActivatedRoute, public wp: WpService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const _slug = this.route.snapshot.paramMap.get('slug');
      if (_slug != null) {
        this.wp.getSinglePost(_slug)
          .subscribe(entries => {
            this.entry = entries[0];
            this.content = this.sanitizer.bypassSecurityTrustHtml(this.entry.content.rendered);
          });
      }
    });
  }

  copyText() {
    let url = location.href;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}



