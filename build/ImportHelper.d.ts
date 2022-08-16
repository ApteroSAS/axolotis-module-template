/**
 * Should only import type to stay lightweight
 */
import type { CookieStore } from "@aptero/axolotis-module-template-async";
export declare const COOKIE_STORE_SERVICE = "@aptero/axolotis-module-storage/CookieStore";
export declare function cookiesStore(): Promise<CookieStore>;
