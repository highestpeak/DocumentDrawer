import { App, ComponentInternalInstance } from 'vue';
import { LangConfig, LangType } from './Types';

export function registerLangConfigs(app: App, langConfig: LangConfig) {
    let globalLangConfigs: Map<LangType, LangConfig> | null = app.config.globalProperties.langConfigs
    if (globalLangConfigs == null || globalLangConfigs == undefined) {
        // console.log("in");
        
        app.config.globalProperties.langConfigs = new Map<LangType, LangConfig>()
        globalLangConfigs = app.config.globalProperties.langConfigs
    }
    // console.log(app.config.globalProperties);
    // console.log("end");

    globalLangConfigs?.set(langConfig.lang, langConfig);
}

export function getLangConfigs(app: ComponentInternalInstance | null) : Map<LangType, LangConfig> | undefined {
    return app?.appContext.config.globalProperties.langConfigs;
}