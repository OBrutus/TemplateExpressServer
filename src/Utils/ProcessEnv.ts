export default abstract class ProcessEnv {
    static [key: string]: string | undefined;
    public static MONGO_DB_URI: string = process.env['MONGO_DB_URI'] ?? '';
}
