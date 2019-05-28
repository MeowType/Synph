<template>
  <CheckNeedLoop>
      <div></div>
  </CheckNeedLoop>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Group } from '../syntax'
import { CheckNeedLoop } from './CheckNeedLoop'

@Component({
  components: {
    CheckNeedLoop
  },
  props: {
    //syn: Group
  }
})
export default class SynphGroup extends Vue {

}
</script>

<style>

</style>
