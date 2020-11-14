<template>
  <div>
    <div class="top_link">
      <div class="top_link_list">
        <h1 style="float: left">
          <nuxt-link to="/">Home</nuxt-link>
        </h1>
        <div class="top_link_right">
          <div
            class="top_link_otherlogin"
            v-if="!$store.state.user.userInfo.username"
          >
            <p class="top_link_login">
              <nuxt-link to="/login">LOG IN</nuxt-link>
            </p>
            <p class="top_link_regis"></p>
          </div>
          <div v-else>
            <profile></profile>
            <div class="top_link_otherlogin">
              <p class="top_link_regis">
                <a @click="logout">LOG OUT</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { user } from "~/store";
import Cookie from "js-cookie";
@Component({
  components: {
    profile: () => import("~/components/profile.vue")
  }
})
export default class NavBar extends Vue {
  async logout() {
    await this.$axios.post("/user/logout", {
      token: Cookie.get("token")
    });
    await user.fetchUser();
    this.$forceUpdate();
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  padding-top: 10px;
}
</style>
