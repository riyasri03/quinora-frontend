<template>
  <div id="app">
    <child-component @childClicked="childClickedEvent" name="Child one"/>
  </div>
</template>

<script>
import childComponent from './childComponent.vue'
export default {
  components: {
    childComponent: childComponent
  },
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    childClickedEvent () {
      alert('child clicked event')
    }
  }
}
</script>

<style lang="scss">
</style>
