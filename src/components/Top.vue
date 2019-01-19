<template>
  <div id="top">
    top
    <button @click="updateShow">
      Toggle render
    </button>
    <div id="menu-box" v-bind:class="{back: !icon_show}">
      <transition name="rotate">
        <img v-if="icon_show" src="../assets/goma_icon.png">
      </transition>
      <transition name="fade">
        <div v-if="!icon_show" id="menu">
          <ul>
            <li>menu</li>
            <li><router-link to="/career">Career</router-link></li>
            <li><router-link to="/career">Career</router-link></li>
            <li><router-link to="/career">Career</router-link></li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  el: '#top',
  methods: {
    updateShow (event) {
      this.icon_show = !this.icon_show
    }
  },
  data: () => {
    return {
      icon_show: true
    }
  }

}
</script>

<style>
  #menu-box {
    display: block;
    height: 300px;
    width: 300px;
  }

  .back {
    background: url(../assets/goma_null_icon.png) no-repeat center center;
  }

  #menu {
    text-align: center;
  }

  #menu > ul {
    list-style: none;
  }
</style>
