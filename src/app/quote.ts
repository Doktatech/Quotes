export class Quote {
    public showDescription;
  
    constructor( public name:string,public description:string, public author:string, public like:number,public dislike:number, public publishDate:Date){
        this.showDescription=false
    }
}
