import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey='ccd16b6b699f4a4592d8d4c06d57c93f';
  apiUrl='https://newsapi.org/v2/';
  constructor(private client:HttpClient) { }

  initSources(){
    return this.client.get(this.apiUrl+ 'sources?language=en&apiKey=' +this.apiKey);
  }
  initArticles(){
    return this.client.get(this.apiUrl + 'top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
  }
  getArticlesById(source: string)
  {
    return this.client.get(this.apiUrl + 'top-headlines?sources=' + source + '&apiKey' +this.apiKey);
  }
}
