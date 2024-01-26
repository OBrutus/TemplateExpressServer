import process from 'process';
import CpuUsage from './CpuUsage';
import MetricRecorder from './MetricRecorder';

export default class MetricUnit {
    private _startTime: Date;
    private _endTime: Date | undefined;
    private _cpuUsage: CpuUsage;

    public get cpuUsage() : CpuUsage {
        return this._cpuUsage;
    }

    public get startTime() {
        return this._startTime;
    }
    
    public get endTime() : Date | undefined {
        // we might send undefined if the record is not yet marked ended
        return this._endTime;
    }

    public constructor() {
        this._startTime = new Date();
        if (!MetricRecorder.lastCheckCpuUsage) {
            // last check is undefined, need to assign it
        }
        const lastRecordedTime = MetricRecorder.lastCheckCpuUsageTime?.getTime();
        const timeout = MetricRecorder.METRIC_RECORD_PERSISTENT_TIMEOUT;
        if (this.startTime.getTime() - (lastRecordedTime??0) < timeout) {
            // let's not call the cpu usage method, and use earlier value
            // @ts-ignore as lastRecordTime would also be undefined
            // when lastCheckCpuUsage is undefined, and in such case
            // startTime.getTime - 0 < timeout :: is false
            // but if it is true it is idiotic number for timeout
            // or the lastCheckCpuUsage and lastRecordedTime 
            // are not aligned, either one is non truthy
            this._cpuUsage = MetricRecorder.lastCheckCpuUsage; 
        } else {
            this._cpuUsage = process.cpuUsage();
            MetricRecorder.lastCheckCpuUsage = this.cpuUsage;
            MetricRecorder.lastCheckCpuUsageTime = this.startTime;
        }
    }

    public markEnd() {
        this._endTime = new Date();
    }

    public toString() : string {
        // Of the form ::
        // if process ends
        // [start -> end] (duration) cpuUsage
        // else 
        // [start] (NaN) cpuUsage
        
        const appendString = !!this.endTime? ` -> ${this.endTime}` : '';
        const duration = (this.endTime??this.startTime).getTime() - this.startTime.getTime();

        return `[${this.startTime}${appendString}] (${duration}) ${JSON.stringify(this.cpuUsage)}`;
    }
}