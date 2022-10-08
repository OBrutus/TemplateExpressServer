/**
 * An Derived Exception denoting the respective Exception is occurred
 * because validation or reference was performed upon undefined or null
 */
export default class UninitializedException extends Error {
    public constructor(message: string) {
        super(message);
    }
}
