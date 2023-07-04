import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit  {

data! : any[];
constructor(private Service: TestService) { }
  ngOnInit(): void {
   this.GetAllQuotes();

  }

  


private getEmployees(){
  this.Service.getAllList().subscribe(data => {
    this.data = data;
    console.log(data);
    
  });
}

GetAllQuotes(){
  this.Service.getQuotes().subscribe(data => {
    this.data = data;
    console.log(data);
    
  });
}
}
