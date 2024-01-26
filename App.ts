import Server from './src/Server';
import AppConstant from './src/Utils/Constant/AppConstants';
import MetricRecorder from './src/Utils/Metric/MetricRecorder';

const serverStartMetric = MetricRecorder.start();
let server = new Server(AppConstant.PORT);

console.log('=================================================');
console.log(`server started ${JSON.stringify(server, null, 2)}`);
console.log('=================================================');

process.on('SIGINT', () => {
    serverStartMetric.markEnd();
    server.stopServer();
    console.log(serverStartMetric.toString());
    console.log('Process interupted by used by `ctrl-C` !');
});
