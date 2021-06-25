import { search } from './../model/search';
import { PunkApiService } from './../services/punk-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
search:search
beers:any=[]
  constructor(private PunkApiService:PunkApiService) {
    this.search=new search()
  }
searchs(search){
  this.PunkApiService.search(search).subscribe((data=>{
    console.log(data)
    this.beers=data
  }))
}
  ngOnInit() {
  }

}
