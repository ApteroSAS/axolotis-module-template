import { ModulePromise } from "@aptero/axolotis-player";
import { Item } from "@aptero/axolotis-player";
import { COOKIE_STORE_SERVICE } from "@root/ImportHelper";

export class AxItem implements Item {
  constructor() {
    console.log("@aptero/axolotis-module-basic installed");
  }

  modules(): { [id: string]: ModulePromise } {
    let ret: { [id: string]: ModulePromise } = {};
    ret[COOKIE_STORE_SERVICE] = async () => {
      let module = await import("@aptero/axolotis-module-template-async");
      return {
        module,
        classname: module.CookieStore.name,
      };
    };
    return ret;
  }
}
