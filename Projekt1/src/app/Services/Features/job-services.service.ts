import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServicesService{
  constructor(private httpClient:HttpClient){}
  fetchPost():Observable<any>{
    return this.httpClient.get('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=2a4284dc&app_key=43bc20b8f37f56bff22cf460de07fafb&results_per_page=20&what=javascript%20developer&content-type=application/json');

  }
}
