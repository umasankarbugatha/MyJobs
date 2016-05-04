
import { PipeTransform, Pipe } from 'angular2/core';
import { IJob } from './job';

@Pipe({
    name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform{
   transform( value: IJob[], args : string[]): IJob[] {
    let filter: string = args[0]? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((job:IJob) =>job.jobName.toLocaleLowerCase().indexOf(filter) !=-1):value;   
   }
}