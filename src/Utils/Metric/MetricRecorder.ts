import CpuUsage from "./CpuUsage";
import MetricUnit from "./MetricUnit";

/**
 * Usage:
 *      Programs, within node work within an async env.
 *      so it should be used wisely, in order to make
 *      extract apt metric data
 * 
 * The template is made such that it supports multiple servers
 * But when multiple servers are to be recorded with metric recorder
 * it may have a usage context of other server but it is unaware of
 * the fact wether earlier usage belongs to which server in such case
 */
export default class MetricRecorder {
    static lastCheckCpuUsage: CpuUsage | undefined;
    static lastCheckCpuUsageTime: Date | undefined;
    // This time is in milli-sec
    static readonly METRIC_RECORD_PERSISTENT_TIMEOUT = 500;

    public static start() : MetricUnit {
        return new MetricUnit();
    }
}