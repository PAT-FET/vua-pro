<template>
<div :class="[$style.container]">
    <span class="text-primary ft-24 ml-4">Vua Pro</span>
</div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AppHeader extends Vue {

}
</script>

<style lang="scss" module>
.container {
    height: 100%;
    background-color: #354052;
    display: flex;
    align-items: center;
}
</style>
