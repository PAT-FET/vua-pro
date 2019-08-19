<template>
<div :class="[$style.container]">
    <v-dropdown placement="bottom-end" :class="[$style.dropdown]" trigger="click">
        <div :class="[$style.reference]">
            <div style="height: auto;" class="px-2">
                <v-icon type="global" class="ft-lg"></v-icon>
            </div>
        </div>
        <v-dropdown-menu slot="dropdown">
            <v-dropdown-item >
                <v-switch v-model="dark" size="sm" @click.native.stop=""></v-switch> <span class="ml-2">明/暗模式</span>
            </v-dropdown-item>
            <v-dropdown-item divider></v-dropdown-item>
            <v-dropdown-item class="w-8">
                <input type="color" @click.stop="" v-model="primary"> <span class="text-primary ml-2"> 主题色 </span>
            </v-dropdown-item>
        </v-dropdown-menu>
    </v-dropdown>
</div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ThemeChooser extends Vue {
  get dark () {
    return !!this.$vua.dark
  }

  set dark (dark: boolean) {
    this.$vua.dark = dark
  }

  get primary () {
    return this.$vua.theme.primary || ''
  }

  set primary (value: string) {
    this.$vua.theme.primary = value
  }
}
</script>

<style lang="scss" module>
.container {
    height: 100%;
    display: flex;
    align-items: center;
    transition: background-color .35s ease;
    &:hover {
        background: var(--bg-color-1);
        cursor: pointer;
    }
}

.dropdown {
    display: block;
    height: 100%;

    & * {
        height: 100%;
    }
}

.reference {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>
