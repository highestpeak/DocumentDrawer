import { App } from "vue"
import * as plantUML from "./plantUML/registers";

export function registComponents(app: App) {
    plantUML.registComponents(app)
}