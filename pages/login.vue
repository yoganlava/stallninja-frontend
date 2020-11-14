<template>
  <div>
    <div class="register-form">
      <h1>Login</h1>
      <div>
        <p>Username/Email</p>
        <input type="text" name="username" v-model="username" />
      </div>
      <div>
        <p>Password</p>
        <input type="password" name="password" v-model="password" />
      </div>
      <button @click="submit">
        Submit
      </button>
      <div>
        <nuxt-link to="/forgot">Forgot password?</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/register">Don't have an account?</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/verify">No verification email yet?</nuxt-link>
      </div>
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { user } from "~/store";
import Cookie from "js-cookie";

@Component
export default class Login extends Vue {
  error = "";
  username: string = "";
  password: string = "";

  created() {
    if (user.userInfo.username) {
      this.$router.push("/");
    }
  }

  async submit() {
    let res = await user.submitLogin({
      username: this.username,
      password: this.password
    });

    if (res.error) this.error = res.error;
    else {
      Cookie.set("token", res.token);
      this.$router.push("/user/settings");
    }
  }
}
</script>

<style scoped>
.register-form {
  /* align-self: center; */
  justify-self: center;
  text-align: center;
  background-color: #c7eef6;
  /* margin-top: 10%; */
  margin: 10% auto;
  border-radius: 10px;
  border: 2px solid #8bc9da;
  height: 400px;
  width: 400px;
}

body {
  text-align: center;
  justify-items: center;
}

input,
button {
  margin-top: 10px;
}

h1 {
  font-size: 24px;
  padding-top: 10px;
}

p {
  padding-top: 10px;
}
</style>
