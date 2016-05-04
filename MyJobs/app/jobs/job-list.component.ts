import { Component, OnInit } from 'angular2/core';
import { IJob } from './Job';
import { JobFilterPipe } from './job-filter.pipe';
import { StarComponent } from '../shared/star.component';
@Component({
    selector:'my-jobs',
    templateUrl:'app/jobs/job-list.component.html',
    styleUrls: ['app/jobs/job-list.component.css'],
    pipes: [JobFilterPipe],
    directives: [StarComponent]
})

export class JobListComponent implements OnInit{
    pageTitle : string = 'Job List';
    imageWidth: number = 50;
    imageMargin: number=2;
    showImage:boolean = false;
    listFilter : string = '';
    jobs : IJob[] = [
        {
            "jobId": 1,
            "jobName": "cart asp.net",
            "jobCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
         {
            "jobId": 2,
            "jobName": "MVC",
            "jobCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 1.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }
    ];
    
    toggleImage():void{
        this.showImage = !this.showImage;
    }
    
    ngOnInit():void{
        console.log('In OnInit');
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Job List: ' + message;
    }
}