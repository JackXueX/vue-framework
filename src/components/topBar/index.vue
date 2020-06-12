<template>
  <div>
    <div class="top-bar">
      <img src="./icon/back.png" alt="" @click="goBack">
      <span>{{title}}</span>
      <slot></slot>
    </div>
    <div class="blank"></div>
  </div>
</template>
<script>
export default {
  name: 'topbar',
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  props: ["title"]
}
</script>
<style lang="scss" scoped>
.blank {
  width: 100vw;
  min-height: 44px;
  background-color: #fff;
}

.top-bar {
  position: fixed;
  background-color: #fff;
  width: 100vw;
  min-height: 44px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 9999;

  img {
    width: 20px;
    min-height: 17px;
    position: relative;
    left: 12px;
    z-index: 10;
  }

  span {
    position: absolute;
    width: 100%;
    min-height: 44px;
    line-height: 44px;
    font-family: 'PingFangSC';
    font-weight: 600;
    font-size: 16px;
    color: #333333;
    text-align: center;
  }
}
</style>
