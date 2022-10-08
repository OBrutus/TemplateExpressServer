import UninitializedException from '../Exception/UninitializedException';

/**
 * The validation class for validating various aspects
 */
export default class Validator {
    // Making class unable to instantiate
    private constructor() {}

    public static validateTruthy(item :object, message :string) :boolean {
        if (item == undefined || item == null)
            throw new UninitializedException(message);
        return !!item;
    }
}
