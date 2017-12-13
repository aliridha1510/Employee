import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { userInfo } from 'os';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {

  mode=1;
   users:any[]=[]
   Currentid:number
  user={
    
    name:'',username:'',email:''
  }
  constructor(public activitedRouter:ActivatedRoute , public servicesService :ServicesService) { 

    this.Currentid=activitedRouter.snapshot.params['login'] 
  }
  ngOnInit() {
    this.servicesService.getUser().subscribe(users =>{this.users = users
    })
    console.log(this.users)
  }
  mysubmit(){
    this.servicesService.addPerson(this.user).subscribe(user =>{
      this.users.unshift(user) 
    })
    console.log("---------------")
  }
 // this.pagecontacts.content.splice(this.pagecontacts.content.indexOf(c),1)
  delete(u){
    this.servicesService.adddelete(u.id).subscribe(resp =>
      {this.users.splice(u.id,1)
    })
  }

  Edite(user){
    this.mode=0
    this.user=user;
     this.servicesService.editePerson(user.id).subscribe(users =>{ this.users})
    console.log("-----eddit----------")
    
  }
}
