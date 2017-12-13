import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {


  pagecontacts:any
  constructor( public servicesService :ServicesService) { }

  ngOnInit() {
    this.servicesService.getAll().subscribe(
      data => {this.pagecontacts=data},error =>{
        console.log(error)
      }
    )
  }
  }



  

   


