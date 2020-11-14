<template>
  <div>
    <navbar></navbar>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({
  components:{
    "navbar": () => import("./navbar.vue")
  }
})

export default class DefaultLayout extends Vue {

}
</script>

<style>
</style>
