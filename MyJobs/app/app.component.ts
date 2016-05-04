import {Component} from 'angular2/core';
import {JobListComponent} from './jobs/job-list.component';

@Component({
    selector: 'job-app',
    template: '<div><h1>{{pageTitle}}</h1><my-jobs></my-jobs></div>',
    directives:[JobListComponent]
})
export class AppComponent{
    pageTitle : string = 'My job search';
}  