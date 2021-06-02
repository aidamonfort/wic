import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WpService {

  // URL del blog que vamos a trabajar con su REST API
  public URL = 'https://public-api.wordpress.com/wp/v2/sites/womenincopernicus.wordpress.com';
  public API = `${this.URL}/posts`;

  // declaramos como any nuestra variable feed
  feed: any;
  news: any[];
  events: any[];
  private: any[];

  constructor(private http: HttpClient) {
    console.log("wp service constructor");
    this.news = [];
    this.events = [];
    this.private = [];
    this.getAll(100)
      .subscribe(data => {
        this.feed = data;
        this.feed.forEach(entry => {
          entry.excerpt.rendered = entry.excerpt.rendered.split('<a class="more-link"')[0] + '[...]';
          if (entry.tags.includes(924)) {
            this.events.push(entry);
          } else if (entry.tags.includes(103)) {
            this.news.push(entry);
          } else if (entry.tags.includes(19)) {
            this.private.push(entry);
          }
        });
        console.log(this.feed);
      });
  }

  /**
   * Numero de post que quieres mostrar
   * @param id
   */
  getAll(id: number) {
    return this.http.get(`${this.API}?_embed&per_page=${id}`);
  }

  /**
   * Slug del post que vamos a mostrar
   * @param id
   */
  getSinglePost(id: string) {
    return this.http.get(`${this.API}?_embed&slug=${id}`);
  }

  /**
   * Slug del post que vamos a mostrar
   * @param id
   */
  getSinglePostFromFeed(id: string) {
    let found = null;
    this.feed.forEach(entry => {
      if (entry.slug === id) {
        found = entry;
      }
    });
    return found;
  }
}