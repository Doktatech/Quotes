import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote("Rewel",'"Think Inside the box"',"Author:Rewel",0,0, new Date (2019,3,14)),
    new Quote("Rewel",'"A stitch in time saves nine"','Author:Adan Hamad',0,0,new Date (1957,3,14)),
    new Quote("Rewel",'"Concentration is the root to all human abilities"','Author:Bruce Lee',0,0,new Date (1983,6,20)),
    new Quote("Rewel",'"Religion is the opium of the masses"','Author:Kipkorir',0,0,new Date (2017,11,27))
    
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;  
    quote.publishDate = new Date(quote.publishDate);
    this.quotes.push(quote)
  }
  deleteQuote(removeQuote, index){
    if (removeQuote){
      let toDelete = confirm(`You sure you want to delete ${this.quotes[index].name} ?`);
          if(toDelete){
            this.quotes.splice(index,1);
          }     
    }
  }
  quoteLike(likeQuote,index){
    if (likeQuote){
      this.quotes[index].like += 1;
    }
  }
  quoteDislike(dislikeQuote, index){
    if(dislikeQuote){
      this.quotes[index].dislike -= 1;
    }
  }
  quoteDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
