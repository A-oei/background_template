<template>
    <div class="aoei-dropdown">
      <div class="dropdown-header">
          <slot></slot>
      </div>
       <div class="aoei-dropdown-menu">
           <slot name="dropdown"></slot>
       </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';


    @Component
    export default class Dropdown extends Vue{

    }
</script>
<style lang="scss">

</style>
