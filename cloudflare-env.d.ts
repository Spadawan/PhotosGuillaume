// Minimal runtime interfaces used by this application. No generated secrets.
interface D1Result<T=Record<string,unknown>> {results:T[];success:boolean;meta:{changes:number;[key:string]:unknown}}
interface D1PreparedStatement {bind(...values:unknown[]):D1PreparedStatement;first<T=Record<string,unknown>>(column?:string):Promise<T|null>;all<T=Record<string,unknown>>():Promise<D1Result<T>>;run<T=Record<string,unknown>>():Promise<D1Result<T>>;raw<T=unknown[]>():Promise<T[]>}
interface D1Database {prepare(query:string):D1PreparedStatement;batch<T=Record<string,unknown>>(statements:D1PreparedStatement[]):Promise<D1Result<T>[]>;exec(query:string):Promise<unknown>}
interface Fetcher {fetch(request:Request):Promise<Response>}
interface GalleryBucket {put(key:string,body:ReadableStream,options?:{httpMetadata:{contentType:string}}):Promise<unknown>;get(key:string):Promise<{size:number;body:ReadableStream}|null>;delete(key:string):Promise<void>}
declare module 'cloudflare:workers' {const env:{DB:D1Database;BUCKET:GalleryBucket;ADMIN_CODE?:string;PUBLIC_ORIGIN?:string;ALLOWED_ORIGIN?:string};export {env}}
