<template>
    <div>
        <h3>Child Component - {{name}}</h3>
        <button @click="clicked">Child Click</button>
    </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  methods: {
    clicked () {
      this.$emit('childClicked')
    }
  },
  name: 'childComp'
}
</script>

<style scoped>
</style>
