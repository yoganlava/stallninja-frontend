<template>
  <div class="top_link_otherlogin">
    <nuxt-link to="/user/settings">Welcome {{ $store.state.user.userInfo.username }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { user } from "~/store";
export default class Profile extends Vue {

}
</script>
