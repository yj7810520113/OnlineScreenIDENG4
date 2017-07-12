import { InjectionToken } from "@angular/core";
import { IAppConfig } from "./app-config.interface";

export const APP_DI_CONFIG: IAppConfig = {

  SERVICE_BASE_URL: 'http://192.168.1.14:8180/hescharts_server'

};

export let APP_CONFIG = new InjectionToken< IAppConfig >( 'app.config' );