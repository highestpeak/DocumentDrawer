<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import { LangType, strToLangType } from "./Types";
import { getLangConfigs } from "./globalProperties";
import { computed } from "vue";

const langConfigs = getLangConfigs(getCurrentInstance())
const langNames: string[] | undefined = langConfigs == null ? undefined : Array.from(langConfigs.keys()).map((key) => String(key));

const activeLangName = ref<string>(LangType.PLANT_UML)
const activeRightTopBarComponent = computed<string | undefined>(() => {
  return langConfigs?.get(strToLangType(activeLangName.value))?.rightTopBar_CompontentName
})
const activeRightEditAreaComponent = computed<string | undefined>(() => {
  return langConfigs?.get(strToLangType(activeLangName.value))?.rightEditArea_CompontentName
})
const activeHelpAreaComponent = computed<string | undefined>(() => {
  return langConfigs?.get(strToLangType(activeLangName.value))?.helpArea_CompontentName
})

</script>

<template>
  <v-container class="ma-1 pa-0" fluid>

    <!-- 导航区 -->
    <v-row>
      <!-- 语言选择 -->
      <v-col class="d-flex align-center">
        <v-menu open-on-hover style="max-width: 300px; max-height: 30px;">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="text">
              {{ activeLangName }}
            </v-btn>
          </template>

          <v-list density="compact">
            <v-list-item v-for="(item, index) in langNames" :key="index" :value="index">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <!-- 语言导航 -->
      <v-col class="d-flex align-center justify-end">
        <component :is="activeRightTopBarComponent"></component>
      </v-col>
    </v-row>

    <!-- 编辑区 -->
    <v-row>
      <!-- 语言编辑区域 -->
      <v-col>
        语言编辑区域
      </v-col>

      <!-- 语言预览区 -->
      <v-col>
        <component :is="activeRightEditAreaComponent"></component>
      </v-col>
    </v-row>

    <!-- 帮助区 lang 组件回调帮助显示帮助 -->
    <v-row>
      <component :is="activeHelpAreaComponent"></component>
    </v-row>

  </v-container>
</template>

<style scoped></style>
