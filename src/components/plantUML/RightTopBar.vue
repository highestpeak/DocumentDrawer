<script setup lang="ts">
import { ref } from 'vue';
import { LangTemplate } from '../../Types';

const selectedBtn = ref<string | null>(null)
const templates: Array<LangTemplate> = [
    { templateName: '序列图', templateCode: '@startuml Alice -> Bob: Authentication Request Bob --> Alice: Authentication Response Alice -> Bob: Another authentication Request Alice <-- Bob: Another authentication Response @enduml', templateImgUrlOrBase64: 'https://www.plantuml.com/plantuml/png/SoWkIImgAStDuNBCoKnELT2rKt3AJx9IS2mjoKZDAybCJYp9pCzJ24ejB4qjBk42oYde0jM05MDHLLoGdrUSoeLkM5u-K5sHGY9MGw6ARNHryQb66EwGcfS2SZ00' },
    { templateName: '序列图', templateCode: '@startuml Alice -> Bob: Authentication Request Bob --> Alice: Authentication Response Alice -> Bob: Another authentication Request Alice <-- Bob: Another authentication Response @enduml', templateImgUrlOrBase64: 'https://www.plantuml.com/plantuml/png/SoWkIImgAStDuNBCoKnELT2rKt3AJx9IS2mjoKZDAybCJYp9pCzJ24ejB4qjBk42oYde0jM05MDHLLoGdrUSoeLkM5u-K5sHGY9MGw6ARNHryQb66EwGcfS2SZ00' },
    { templateName: '序列图', templateCode: '@startuml Alice -> Bob: Authentication Request Bob --> Alice: Authentication Response Alice -> Bob: Another authentication Request Alice <-- Bob: Another authentication Response @enduml', templateImgUrlOrBase64: 'https://www.plantuml.com/plantuml/png/SoWkIImgAStDuNBCoKnELT2rKt3AJx9IS2mjoKZDAybCJYp9pCzJ24ejB4qjBk42oYde0jM05MDHLLoGdrUSoeLkM5u-K5sHGY9MGw6ARNHryQb66EwGcfS2SZ00' },
    { templateName: '序列图', templateCode: '@startuml Alice -> Bob: Authentication Request Bob --> Alice: Authentication Response Alice -> Bob: Another authentication Request Alice <-- Bob: Another authentication Response @enduml', templateImgUrlOrBase64: 'https://www.plantuml.com/plantuml/png/SoWkIImgAStDuNBCoKnELT2rKt3AJx9IS2mjoKZDAybCJYp9pCzJ24ejB4qjBk42oYde0jM05MDHLLoGdrUSoeLkM5u-K5sHGY9MGw6ARNHryQb66EwGcfS2SZ00' },
]

</script>

<template>
    <v-btn-toggle v-model="selectedBtn" borderless style="max-height: 30px;">
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" value="left" :active="false" size="small">
                    <span class="hidden-sm-and-down">模版</span>

                    <v-icon end>
                        mdi-puzzle-outline
                    </v-icon>
                </v-btn>
            </template>

            <!-- todo follow the instruction to config sass line height variable https://stackoverflow.com/questions/63887936/override-scss-variables-in-vuetify https://vuetifyjs.com/en/features/sass-variables/#usage-in-templates -->
            <v-list :density="'compact'" class="rounded-lg">
                <v-list-item v-for="(item, index) in templates" :key="index" :value="index">
                    <v-list-item-title>{{ item.templateName }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>



        <v-btn value="center" :active="false" size="small">
            <span class="hidden-sm-and-down">视图</span>

            <v-icon end>
                mdi-view-column-outline
            </v-icon>
        </v-btn>

        <v-btn value="right" :active="false" size="small">
            <span class="hidden-sm-and-down">主题</span>

            <v-icon end>
                mdi-palette-outline
            </v-icon>
        </v-btn>

        <v-btn value="justify" :active="false" size="small">
            <span class="hidden-sm-and-down">帮助</span>

            <v-icon end>
                mdi-help-circle-outline
            </v-icon>
        </v-btn>
    </v-btn-toggle>
</template>

<style></style>