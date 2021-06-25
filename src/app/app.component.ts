import { PunkApiService } from './services/punk-api.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  beers:any=[]
  constructor(private PunkApiService:PunkApiService,private toastr:ToastrService) { }

  random(){
    this.beers=[]
    this.PunkApiService.getBeersRandom().subscribe(data=>{
      this.beers=data;
    })
  }
  nonAlcholic(){
this.PunkApiService.nonalcholicBeer().subscribe(data=>{
  console.log(data)
  if(data.length===0){
    this.toastr.error('sorry no data available')
  }
  else{
    this.beers=data;

  }
})
  }
  ngOnInit() {

  this.random();
  }

}
