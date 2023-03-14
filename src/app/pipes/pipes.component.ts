import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name="pragati deovanshi"
  public name1="PRAGTI DEOVANSHI"
  public person={
    name:"deovanshi",
    city:"varanasi",
    country:"india"
  }
  public mydate=new Date();
}
