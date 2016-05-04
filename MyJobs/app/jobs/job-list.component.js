System.register(['angular2/core', './job-filter.pipe', '../shared/star.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, job_filter_pipe_1, star_component_1;
    var JobListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (job_filter_pipe_1_1) {
                job_filter_pipe_1 = job_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            JobListComponent = (function () {
                function JobListComponent() {
                    this.pageTitle = 'Job List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = '';
                    this.jobs = [
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
                }
                JobListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                JobListComponent.prototype.ngOnInit = function () {
                    console.log('In OnInit');
                };
                JobListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Job List: ' + message;
                };
                JobListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-jobs',
                        templateUrl: 'app/jobs/job-list.component.html',
                        styleUrls: ['app/jobs/job-list.component.css'],
                        pipes: [job_filter_pipe_1.JobFilterPipe],
                        directives: [star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], JobListComponent);
                return JobListComponent;
            }());
            exports_1("JobListComponent", JobListComponent);
        }
    }
});
//# sourceMappingURL=job-list.component.js.map