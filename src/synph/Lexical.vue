<template>
  <CheckNeedLoop :syn="syn">
      <article class="synph-lexical">
          <code>{{syn.value}}</code>
        </article>
  </CheckNeedLoop>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Lexical } from '../syntax'
import { SynValidator } from './utils'
import { CheckNeedLoop } from './CheckNeedLoop'

@Component({
  components: {
    CheckNeedLoop
  },
  props: {
    syn: SynValidator(Lexical)
  }
})
export default class SynphLexical extends Vue {}
</script>

<style>

</style>
