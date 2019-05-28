<template>
  <div id="app">
    <SynphGroup/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SynphItem, SynphGroup }  from '../synph'

@Component({
  components: {
    SynphGroup,
  },
})
export default class App extends Vue {}
</script>

<style>
    body {
        display: flex;
        justify-content: center;
    }
    #app>:nth-child(n){
        margin: 2em;
    }
</style>
