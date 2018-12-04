<template>
  <div>
    <div @click="back">
      tutor detail
    </div>
  </div>
</template>

<script>
export default {
  name: 'tutor',
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
