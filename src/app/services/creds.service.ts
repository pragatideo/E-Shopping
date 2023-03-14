import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CredsService {
  private url='https://api-staging.startdate.co/api/users/login'
  constructor(private client:HttpClient) { }
  postvalues(data:any){
    return this.client.post(this.url,data);
  }
}
