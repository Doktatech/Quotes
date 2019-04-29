export class Quote {
    public showDescription;
  
    constructor(public id:number, public name:string,public description:string,public like:number,public dislike:number, public publishDate:Date){
        this.showDescription=false
    }
}
