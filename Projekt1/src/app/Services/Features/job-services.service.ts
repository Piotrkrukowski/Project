import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobServicesService implements OnInit {
  http = inject(HttpClient);
  post: any=[];
  ngOnInit(): void {
    this.fetchPost();
  }
  fetchPost(){
    this.http.get('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=2a4284dc&app_key=43bc20b8f37f56bff22cf460de07fafb&results_per_page=20&what=javascript%20developer&content-type=application/json')
    .subscribe((posts: any)=>{console.log(posts)})
  }
  constructor() { }
}
