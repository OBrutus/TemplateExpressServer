/**
 * This is an Endpoints constant file, which will contains all the endpoints.
 * This file is maintained because, to avoid duplicate endpoint
 */
export default abstract class EndpointConstant {
    public static readonly DEFAULT_ENDPOINT = '/';
    public static readonly HOME_ENDPOINT = '/home';
    public static readonly DUMMY_ENDPOINT = '/dummy';
    public static readonly GENERIC_ERROR_MESSAGE = 
        'Hmm..., This should not occur, rest be assured we are working on it';
}
