import {
  Action,
  Module,
  MutationAction,
  VuexModule
} from "vuex-module-decorators";
import { $axios } from "~/utils/api";
import Cookie from "js-cookie";

interface UserInfo {
  username: string;
  email: string;
}

@Module({
  name: "user",
  stateFactory: true,
  namespaced: true
})
export default class User extends VuexModule {
  public userInfo: UserInfo = {
    username: "",
    email: ""
  };

  get getUser(): UserInfo {
    return this.userInfo;
  }

  @MutationAction({ mutate: ["userInfo"] })
  async fetchUser() {
    const userData = await $axios.$post(`/user/getuser`, {
      token: Cookie.get("token")
    });
    if (userData == undefined || userData.error)
      return {
        userInfo: {
          username: "",
          email: ""
        }
      };
    return { userInfo: userData };
  }

  @Action
  async getRole(){
    const res = await $axios.$post(`/user/getrole`, {
      token: Cookie.get("token")
    });
    return res;
  }

  @Action
  async createRole(form) {
    const res = await $axios.$post(`/user/createrole`, {
      token: Cookie.get("token"),
      ...form
    });
    return res;
  }

  @Action
  async submitLogin(form): Promise<any> {
    return await $axios.$post("/user/login", form);
  }

  @Action
  async changeCurrent(form): Promise<any> {
      return await $axios.$post("/user/changecurrent", form);
  }

  @Action
  async requestPassword(form): Promise<any> {
    return await $axios.$post("/user/request", form);
  }

  @Action
  async requestVerify(form): Promise<any> {
    return await $axios.$post("/user/reqver", form);
  }

  @Action
  async verify(form): Promise<any> {
    return await $axios.$post("/user/verify", form);
  }

  @Action
  async changePassword(form): Promise<any> {
    return await $axios.$post("/user/change", form);
  }

  @Action
  async registerUser(form): Promise<any> {
    return await $axios.$post("/user/register", form);
  }
}
