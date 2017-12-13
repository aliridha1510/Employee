import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deploye',
  templateUrl: './deploye.component.html',
  styleUrls: ['./deploye.component.css']
})
export class DeployeComponent implements OnInit {
 // Persons: { name: string; lname: string; age: string; };
  list :String [];

  persons :Persons 
  person :Persons[]
     age = new Date(1990,10,10);

  myClass:boolean=true;
  famile ="Herr Haoouari is the Boss"
  f:boolean =false;
  pepole =['Ali','Med','OUHE'];
  job =['DevOps','Frontned dev','Backend dev', 'TESTER','WEBDEGINER','PROJECRTMANGER'];
myimage="https://cdn.scotch.io/15255/Zg1zn40hQYm7DmqOMuef_keep-calm-and-embrace-angular-3.png"

  plang=[
    {languagename:'JAVA',
         city:'GABES',
          }, 
       {languagename:'Angular',
       city:'GABES',
          },
       { languagename:'AWS',
         city:'GABES',
         },
         { languagename:'AWS',
         city:'GABES',
         }];


  constructor() { 


 
  }



  ngOnInit() {
  }

  click(){

    console.log("MouseUp");
  }
 
 
}

    