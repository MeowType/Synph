<template>
  <CheckNeedLoop :syn="syn">
      <section v-for="i in syn.items" :key="i.id" class="synph-group-item-box">
        <SynphSyn :syn="i"></SynphSyn>
      </section>
      <template #body="{ items }">
        <article class="synph-group">
          <section class="synph-group-box synph-group-items-box">
            <div class="synph-group-items">
              <ValNode :items="items"></ValNode>
            </div>
          </section>
        </article>
      </template>
  </CheckNeedLoop>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Group } from '../syntax'
import { SynValidator, ValNode } from './utils'
import { CheckNeedLoop } from './CheckNeedLoop'
import { SynphSyn } from './SynphSyn'

@Component({
  components: {
    CheckNeedLoop, ValNode, SynphSyn
  },
  props: {
    syn: SynValidator(Group)
  }
})
export default class SynphGroup extends Vue {}
</script>

<style>

</style>
