import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, of } from 'rxjs';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.css']
})
export class ExportExcelComponent  implements OnInit {
  ngOnInit(): void {
    this.test();
  }
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  } 
  test(){
    const source=of('david') ;
    source.pipe(map(name=>name.toUpperCase())).subscribe(
    data=> console.log(data))

  }


   
 

  team: any = [{  
    Sno: 1,  
    Team: 'India',  
    Match: 8,  
    Win: 7,  
    Loss: 0,  
    Cancel: 1,  
    Point: 15  
  
  }, {  
    Sno: 2,  
    Team: 'NewZeland',  
    Match: 8,  
    Win: 6,  
    Loss: 1,  
    Cancel: 1,  
    Point: 13  
  
  },  
  {  
    Sno: '3',  
    Team: 'Aus',  
    Match: 8,  
    Win: 6,  
    Loss: 1,  
    Cancel: 1,  
    Point: 13  
  
  },  
  {  
    Sno: '4',  
    Team: 'England',  
    Match: 8,  
    Win: 5,  
    Loss: 2,  
    Cancel: 1,  
    Point: 11  
  },  
  {  
    Sno: '5',  
    Team: 'S.Africa',  
    Match: 8,  
    Win: 4,  
    Loss: 3,  
    Cancel: 1,  
    Point: 9  
  },  
  {  
    Sno: '6',  
    Team: 'Pak',  
    Match: 8,  
    Win: 4,  
    Loss: 4,  
    Cancel: 1,  
    Point: 9  
  
  },  
  {  
    Sno: '7',  
    Team: 'SriLanka',  
    Match: 8,  
    Win: 3,  
    Loss: 3,  
    Cancel: 2,  
    Point: 8  
  
  },  
  {  
    Sno: '8',  
    Team: 'Bdesh',  
    Match: 8,  
    Win: 2,  
    Loss: 4,  
    Cancel: 2,  
    Point: 6  
  
  }  
  ]; 
}