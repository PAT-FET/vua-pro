<template>
    <v-layout>
        <v-sider></v-sider>
        <v-layout>
            <v-header></v-header>
            <v-content>
                <router-view/>
            </v-content>
        </v-layout>
    </v-layout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {

}
</script>
