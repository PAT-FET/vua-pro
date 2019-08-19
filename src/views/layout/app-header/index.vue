<template>
<div :class="[$style.container]">
    <span class="text-primary ft-24 ml-4">Vua Pro</span>

    <span class="d-flex">
        <global-search></global-search>
        <global-message></global-message>
        <global-action></global-action>
    </span>
</div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import GlobalSearch from './global-search/index.vue'
import GlobalMessage from './global-message/index.vue'
import GlobalAction from './global-action/index.vue'

@Component({
  components: { GlobalSearch, GlobalMessage, GlobalAction }
})
export default class AppHeader extends Vue {

}
</script>

<style lang="scss" module>
.container {
    height: 100%;
    background-color: #354052;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
