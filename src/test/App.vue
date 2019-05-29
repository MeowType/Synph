<template>
  <div id="app">
    <SynphLexical :syn="syn"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SynphItem, SynphGroup, SynphLexical }  from '../synph'
import { Group, Lexical } from '../syntax';

@Component({
  components: {
    SynphGroup, SynphLexical
  },
})
export default class App extends Vue {
  syn = new Lexical(null as any, 'test', 'test')
}
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
