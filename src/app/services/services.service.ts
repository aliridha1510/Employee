import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TagContentType } from '@angular/compiler';
import { hits } from '../interface.person/photo-interface';



@Injectable()
export class ServicesService {

  constructor(public http :Http) { }


pagecontacs:any
  getAll():Observable<hits>{
    return this.http.get("https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=casablanca&per_page=10&page=1")
    .map(resp => resp.json())
  }


  getUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").map(resp => resp.json())
  }

  addPerson(user){

    return this.http.post("https://jsonplaceholder.typicode.com/users",user)
    .map(res => res.json())
  }
  adddelete(id:number){
    
        return this.http.delete("https://jsonplaceholder.typicode.com/users/"+id)
        .map(res => res.json())
      }

      editePerson(user){
        return this.http.put("https://jsonplaceholder.typicode.com/users/"+user.id,user)
        .map(res =>res.json())
      }


      modifiePerson(userId){
        
                return this.http.patch("https://app.faucon.ovh/api/v1/users/d9c64480-0b10-4297-a4ea-04060c4e3c6a",userId)
                .map(res => res.json())
              }
}
