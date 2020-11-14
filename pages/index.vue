<template>
  <div class="home_bg">
    <!-- top -->
    <div class="top_ninja">
      <!-- top -->
      <!-- top End -->
      <div class="top_bar">
        <h1 class="logo">
          <a href="#"><span>Pockie Ninja</span></a>
        </h1>
        <!-- nav -->
        <ul class="nav" id="main"></ul>
        <div class="fixed"></div>
        <!-- nav End -->
        <!-- start -->
        <h2 class="start">
          <a @click="start"></a>
        </h2>
        <!-- start End -->
      </div>
    </div>
    <!-- top End -->
    <!-- content -->
    <div class="content">
      <!-- left_content -->
      <div class="left_content">
        <div>
          <h3 class="register">
            <!-- <a href="register.html" target="_blank"><span>Register</span></a> -->
            <nuxt-link to="/register"></nuxt-link>
          </h3>
          <h3 class="charge">
            <a href="#" target="_blank"><span>Charge</span></a>
          </h3>
          <h3 class="card">
            <a href="#"><span>Newbie Card</span></a>
          </h3>
          <h3 class="anime_show">
            <a href="#" target="_blank"><span>Anime Show</span></a>
          </h3>
        </div>
        <!-- Ranking -->
        <div class="ranking none">
          <h3>Ranking</h3>
          <div class="selectbox">
            <select id="select">
              <option selected="selected">Region 1: New Content Update</option>
            </select>
            <div id="data">
              <div class="tab"></div>
            </div>
          </div>
        </div>
        <!-- Ranking End -->
      </div>
      <!-- left_content End -->
      <!-- right_content -->
      <div class="right_content">
        <!-- A -->
        <div class="a">
          <!-- a_left -->
          <div class="a_left">
            <!-- banner -->
            <div id="banner">
              <div id="banner_box">
                <span class="tl"></span>
                <span class="tr"></span>
                <span class="bl"></span>
                <span class="br"></span>
                <ul class="banner_content">
                  <li>
                    <a href="#"><img width="404" height="164"/></a>
                    <a href="#" class="test">Hello boys and girls!</a>
                  </li>
                </ul>
              </div>
              <ul class="banner_nav">
                <li class="on">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
            <!-- banner End -->
            <!-- news -->
            <div class="news">
              <ul class="show_trigger">
                <li class="current"><a href="information.html">All</a></li>
                <!-- <li class=""><a href="information/news.html">News</a></li>
                            <li class=""><a href="information/notices.html">Notice</a></li>
                            <li class=""><a href="information/activities.html">Activities</a></li> -->
              </ul>
              <div class="fixed"></div>
            </div>
            <!-- news End -->
          </div>
          <!-- a_left End -->
          <!-- a_right -->
          <div class="a_right">
            <div class="a_tip">
              <h3>
                <a
                  href="gameguides/gamestart/940.html"
                  arget="_blank"
                  class="a_1"
                  ><span>Newbie Guide</span></a
                >
              </h3>
              <h3>
                <a href="gameguides.html" target="_blank" class="a_2"
                  ><span>Game Info</span></a
                >
              </h3>
              <h3>
                <a
                  href="javascript:popUp('http://support.game321.com/visitor/index.php?_m=livesupport&amp;_a=emailchat&amp;departmentid=0')"
                  title="live support"
                  arget="_blank"
                  class="a_3"
                  ><span>Live Support</span></a
                >
              </h3>
            </div>
            <!-- calendar -->
            <!-- calendar End -->
          </div>
          <div class="fixed"></div>
          <!-- a_right End -->
        </div>
        <!-- A End -->
      </div>
      <!-- right_content End -->
      <div class="fixed"></div>
    </div>
    <!-- contentEnd -->
    <!-- footer -->

    <!-- footer End-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { user } from "~/store";

@Component
export default class Index extends Vue {
  start(){
    if (!user.userInfo.username) {
      alert("Please log in");
      this.$router.push("/login");
      return
    }
    window.location.href = "http://spnproject.uksouth.cloudapp.azure.com/game.html";
  }
}
</script>

<style>
</style>
