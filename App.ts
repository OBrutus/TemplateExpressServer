import Server from './src/Server';
import AppConstant from './src/Utils/Constant/AppConstants';

let server = new Server(AppConstant.PORT);

console.log('=================================================');
console.log(`server started ${JSON.stringify(server, null, 2)}`);
console.log('=================================================');
