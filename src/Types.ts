export enum LangType {
    PLANT_UML = "PlantUML"
}

/**
 * https://stackoverflow.com/questions/17380845/how-do-i-convert-a-string-to-enum-in-typescript
 */
export function strToLangType(langStr: string): LangType {
    return langStr as LangType
    // return LangType[langStr as keyof typeof LangType]
}

export interface LangConfig {
    lang: LangType,
    /**
     * 已经注册到 vue 中的组件名称
     */
    rightTopBar_CompontentName: string,
    rightEditArea_CompontentName: string,
    helpArea_CompontentName?: string,
}