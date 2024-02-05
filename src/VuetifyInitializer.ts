/**
 * 使用 vuetify 不只是简单使用他的组件样式. 而是使用他的组件逻辑. 他的组件包含了很多规范的 slot function css 等设置. 这才是主要的.
 */

import 'vuetify/styles' // 覆盖方法 https://vuetifyjs.com/zh-Hans/features/sass-variables/#section-57fa672c75286cd5
import * as components from 'vuetify/components'
import { createVuetify } from "vuetify";
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export const vuetify = createVuetify({
    // 这将包括所有组件和指令，不管您是否在使用它们。 如果你只想包含使用过的组件，https://vuetifyjs.com/zh-Hans/getting-started/installation/#section-73b06709987976ee
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
            myCustomTheme: {
                dark: false,
                colors: {
                },
            },
        },
    },
})