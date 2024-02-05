<script setup lang="ts">
import { ref } from 'vue';

const selectedBtn = ref<string|null>(null)

</script>

<template>
    <v-btn-toggle v-model="selectedBtn" borderless style="max-height: 30px;">
        <v-btn value="left" :active="false" size="small">
            <span class="hidden-sm-and-down">模版</span>

            <v-icon end>
                mdi-puzzle-outline
            </v-icon>
        </v-btn>

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