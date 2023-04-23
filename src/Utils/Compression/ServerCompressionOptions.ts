import { Request, Response } from 'express';
import compression, { CompressionOptions } from 'compression';
import AppConstant from '../Constant/AppConstants';

export class ServerCompressionOptions implements CompressionOptions {
    [property: string]: any;
    chunkSize?: number | undefined;
    filter?: compression.CompressionFilter | undefined;
    level?: number | undefined;
    memLevel?: number | undefined;
    strategy?: number | undefined;
    threshold?: string | number | undefined;
    windowBits?: number | undefined;

    public static getDefaultOptions() : CompressionOptions {
        return ({
            level: 6,
            filter: (req: Request, res: Response): boolean => {
                if (req.headers[AppConstant.NO_COMPRESSION_HEADER]) {
                    return false;
                }
                return compression.filter(req, res);
            }        
        } as CompressionOptions);
    }
}
