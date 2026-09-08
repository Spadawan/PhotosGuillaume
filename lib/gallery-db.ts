import {env} from 'cloudflare:workers';
export function galleryDb(){if(!env.DB)throw Error('Database unavailable');return env.DB}
export function galleryBucket(){if(!env.BUCKET)throw Error('Storage unavailable');return env.BUCKET}
export function config(){return env as unknown as {ADMIN_CODE?:string;ALLOWED_ORIGIN?:string;PUBLIC_ORIGIN?:string}}
