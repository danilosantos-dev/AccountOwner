import { Owner } from './../../_interfaces/owner.model';
import { EnvironmentUrlService } from './environment-url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ownerForCreation } from 'src/app/_interfaces/ownerForCreation.model';
import { OwnerForUpdate } from 'src/app/_interfaces/ownerForUpdate.model';


@Injectable({
  providedIn: 'root'
})

export class OwnerRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }
  
  public getOwner = (route: string) => {
    return this.http.get<Owner>(this.createCompleteRoute(route, this.envUrl.urlAddress));
    }

  public getOwners = (route: string) => {
    return this.http.get<Owner[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
  
  public createOwner = (route: string, owner: ownerForCreation) => {
    return this.http.post<Owner>(this.createCompleteRoute(route, this.envUrl.urlAddress),
      owner, this.generateHeaders());
  }
  
  public updateOwner = (route: string, owner: OwnerForUpdate) => {
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), owner,
      this.generateHeaders());
  }
  
  public deleteOwner = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
  
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
}
