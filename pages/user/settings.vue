<template>
  <div>
    <div class="register-form">
      <h1>Settings</h1>
      <div>
        <div>
          <p>Username: {{ username }}</p>
        </div>
        <div>
          <p>Email: {{ email }}</p>
        </div>
        <div>
          <h1>Change password</h1>
          <input
            type="password"
            placeholder="Current Password"
            v-model="currPassword"
          />
          <input
            type="password"
            placeholder="New Password"
            v-model="newPassword"
          />
        </div>
        <button @click="changeCurrent">
          Change Password
        </button>
        <p id="message">{{ message }}</p>
      </div>
      <div>
        <h1>Role</h1>
        <div v-if="roleName">
          <p>Role Name: {{ roleName }}</p>
        </div>
        <div v-else>
          <p>Create A Character</p>
          <input type="text" placeholder="Create a name" v-model="createName" />
          <div>
            <p>Starting Outfit</p>
            <select v-model="clothing">
              <option value="39" selected>Shizune</option>
              <option value="65">Kurotsuchi Nemu</option>
              <option value="32">Nanao Ise</option>
              <option value="3">Ggio Vega</option>
              <option value="17">Kiba Inuzuka</option>
              <option value="63">Tenten</option>
              <option value="9">Love Aikawa</option>
              <option value="14">Abarai Renj</option>
              <option value="34">Rangiku Matsumoto</option>
              <option value="16">Choji Akimichi</option>
            </select>
          </div>
          <div>
            <p>Starting Village</p>
            <select v-model="nation">
              <option value="0" selected>Fire Village</option>
              <option value="3">Wind Village</option>
              <option value="1">Water Village</option>
              <option value="4">Lightning Village</option>
              <option value="2">Earth Village</option>
            </select>
          </div>
          <button @click="createRole">
            Create
          </button>
          <p style="color: red">{{ roleMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { user } from "~/store";
import Cookie from "js-cookie";

@Component
export default class Settings extends Vue {
  username = "";
  email = "";
  currPassword = "";
  newPassword = "";
  roleName = "";
  createName = "";
  clothing = "";
  nation = "";
  roleMessage = "";
  async created() {
    if (!user.userInfo.username) {
      this.$router.push("/");
    }
    this.username = user.userInfo.username;
    this.email = user.userInfo.email;
    let res = await user.getRole();
    this.roleName = res.name ? res.name : "";
  }

  async createRole() {
    let res = await user.createRole({
      name: this.createName,
      clothing: this.clothing,
      nation: this.nation
    });
    if (res.error)
      this.roleMessage = res.error
    else
      this.$nuxt.refresh();
  }

  async changeCurrent() {
    let res = await user.changeCurrent({
      token: Cookie.get("token"),
      currPassword: this.currPassword,
      newPassword: this.newPassword
    });

    if (res.error) {
      document.getElementById("message").style.color = "red";
      this.message = res.error;
    } else {
      console.log(res);
      document.getElementById("message").style.color = "black";
      this.message = res.message;
    }
    this.currPassword = "";
    this.newPassword = "";
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
  margin-top: 5px;
}

h1 {
  font-size: 24px;
  padding-top: 10px;
}

p {
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
