
import { Component, OnInit } from '@angular/core';
import { ArticleService } from './service/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'client';

  articleList=[];
 
  constructor(private articleService:ArticleService){}

  ngOnInit(): void {
    this.onLoad();
  }
  onLoad(){
    this.articleService.findAll().subscribe(
      data =>{
        console.log(data);
        this.articleList=data;
      },
      error=>{console.log("Error =>"+error);})
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
  onDelete(objectID:string){
    this.articleService.delete(objectID).subscribe(data =>{
      this.onLoad();
    },
    error=>{console.log("Error =>"+error);})
  }
}
