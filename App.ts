import Server from './src/Server';
import AppConstant from './src/utils/constant/AppConstants';

let server = new Server(AppConstant.PORT);

console.log('====================================');
console.log(`server started ${JSON.stringify(server)}`);
console.log('====================================');
