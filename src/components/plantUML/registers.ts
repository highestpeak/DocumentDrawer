import { LangType } from './../../Types';
import { App } from "vue"
import { registerLangConfigs } from "../../globalProperties"
import RightTopBar from "./RightTopBar.vue";
import RightEditArea from "./RightEditArea.vue";
import HelpArea from "./HelpArea.vue";

const langType = LangType.PLANT_UML;

export function registComponents(app: App) {
    let rightTopBar_CompontentName = langType + '-RightTopBar';
    console.log(rightTopBar_CompontentName);
    app.component(rightTopBar_CompontentName, RightTopBar)

    let rightEditArea_CompontentName = langType + '-RightEditArea';
    app.component(rightEditArea_CompontentName, RightEditArea)

    let helpArea_CompontentName = langType + '-HelpArea';
    app.component(helpArea_CompontentName, HelpArea)

    registerLangConfigs(app, {
        lang: langType,
        rightTopBar_CompontentName: rightTopBar_CompontentName,
        rightEditArea_CompontentName: rightEditArea_CompontentName,
        helpArea_CompontentName: helpArea_CompontentName,
    })
}