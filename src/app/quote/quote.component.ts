import { Component, OnInit, ElementRef} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote("Rewel","Leave one wolf alive and the sheep are never safe","Arya Stark",0,0, new Date (2017,7,14)),
    new Quote("Rewel","Every man gotta right to decide his own destiny",'Bob Marley',0,0,new Date (1979,3,14)),
    new Quote("Rewel","Concentration is the root to all human abilities",'Bruce Lee',0,0,new Date (1983,6,20)),
    new Quote("Rewel","Religion is the opium of the masses",'Karl Max',0,0,new Date (2017,11,27))
    
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
      this.quotes[index].dislike += 1;
    }
  }
  quoteDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  constructor() { }
  

  ngOnInit() {
  }

}
