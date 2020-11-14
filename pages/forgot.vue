<template>
  <div>
    <div class="top_ninja">
      <div>
        <div class="top_link"></div>
      </div>
    </div>

    <div class="register-form">
      <h1>Forgot your password?</h1>
      <div>
        <p>
          We will send a password reset link to your email if an account is
          found under its name
        </p>
        <input type="text" v-model="email" />
        <button @click="sendRequest">
          Submit
        </button>
        <p >{{message}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { user } from "~/store";

@Component
export default class Request extends Vue {
  message = ""
  email = "";

  created(){
    if (user.userInfo.username) {
      this.$router.push("/");
    }
  }

  async sendRequest() {
    let res = await user.requestPassword({
      email: this.email
    });
    this.message = "Password reset requested"
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
