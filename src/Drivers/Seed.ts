import { IUser, UserModel } from "../Models/User";
import DataEntryFailure from "../Utils/Exception/DataEntryFailure";

export class UserSeed {
    private constructor() {}

    public static addRandomUsers(count: number) {
        let fakeCount = 0;
        while (count-- > 0) {
            // we add user
            const user: IUser = {
                _id: 'userId' + fakeCount,
                name: 'userName' + fakeCount
            } as unknown as IUser;

            fakeCount++;

            try {
                UserSeed.addUser(user);
            } catch (err: unknown) {
                // retry by increasing count
                // as on next iter, fake count 
                // can keep track of number of retires
                count++;
            }
        }
        console.log(`Data seeded last entry for ${fakeCount}`);
    }    

    public static async addUser(newUser: IUser) {
        UserModel.create(newUser)
            .then(UserSeed.successHandler)
            .catch(UserSeed.failureHandler)
    }
    
    public static successHandler(user: IUser) : boolean {
        if (!user) {
            // unable to get task,
            // verdict:: user creation failed
            throw new DataEntryFailure('Post user creation data retrival failed');
        }
        console.log(`Created user with _id = ${user._id}`);
        
        return true;
    }

    public static failureHandler(failureError: Error) {
        throw new DataEntryFailure(failureError?.message)
    }
}
