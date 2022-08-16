import { getService } from "@aptero/axolotis-player";
/**
 * Should only import type to stay lightweight
 */
import type { CookieStore } from "@aptero/axolotis-module-template-async";

//NOTE the ids are duplicated from the async src index.js
export const COOKIE_STORE_SERVICE = "@aptero/axolotis-module-storage/CookieStore";

export async function cookiesStore(): Promise<CookieStore> {
  return getService<CookieStore>(COOKIE_STORE_SERVICE);
}
