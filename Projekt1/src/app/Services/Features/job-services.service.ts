import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTransferService } from './data-transfer/data-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class JobServicesService{
    constructor(private httpClient:HttpClient, private transferService: DataTransferService){}

    currentPage:any;
    app_id = '2a4284dc';
    app_key = '43bc20b8f37f56bff22cf460de07fafb'
    
    getCurrentPage(){
      this.transferService.getPage().subscribe((currentPg:number) => {
      this.currentPage=currentPg;
    })
    }

    fetchPost(perPage: number, query: any = {}):Observable<any>{
      this.getCurrentPage();
      query.app_id = this.app_id;
      query.app_key = this.app_key;
      query.results_per_page = perPage;
      query['content-type'] = 'application/json';
      return this.httpClient.get('https://api.adzuna.com/v1/api/jobs/gb/search/' + this.currentPage, {params: query});
    }

    fetchCategories():Observable<any>{
      return this.httpClient.get('https://api.adzuna.com/v1/api/jobs/gb/categories?app_id=2a4284dc&app_key=43bc20b8f37f56bff22cf460de07fafb');
    }

  }
