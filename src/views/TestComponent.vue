<template>
  <div class="container">
    <ul>
      <li v-for='(item, index) in info' :key="index">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  computed: mapGetters('test', ['info']),
  mounted () {
    this.$store.dispatch('test/load')
  },
  beforeDestroy () {
    // 親ルートを移動するときデータを破棄
    this.$store.dispatch('test/destroy')
  }
}
</script>
