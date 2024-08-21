import {Component, OnInit} from '@angular/core';
import {Piece} from "../piece";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {StocksService} from "../stocks.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponentt implements OnInit {
  stocksList:Piece[]=[];
  searchForm!:FormGroup;
  constructor( private stocks:StocksService,private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.searchForm=this.fb.group(
      {
        keyWord:this.fb.control("")
      }
    );
    for (let i=0;i<15;i++)
      this.stocksList.push(this.stocks.stockList[i]);
  }

  search() {
    this.stocksList=[];
    this.stocks.stockList.forEach((c: Piece)=>{
      if (c.PN.includes(this.searchForm.value.keyWord.trim())){
        this.stocksList.push(c);
        this.stocksList=this.stocksList.splice(0,15);
      }
    })
  }
}
