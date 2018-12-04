<template>
  <div class="head">
    <img class="logo hidden-sm-and-down" alt="ccnu-logo" src="../assets/logo.png">
    <img class="hd_logo hidden-md-and-up" alt="ccnu-logo" src="../assets/hd_logo.png">
    <div class="title hidden-sm-and-down">第五届“我心目中的好导师”评选</div>
    <div class="title hidden-md-and-up small">第五届“我心目中的好导师”评选</div>
    <div class="login">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <Login/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="login">登录</el-dropdown-item>
          <el-dropdown-item command="main">主页</el-dropdown-item>
          <!-- <el-dropdown-item>登出</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
import Login from "../assets/login.svg";
export default {
  name: "Header",
  components: {
    Login
  },
  methods: {
    handleCommand(command) {
        if (command === 'login') {
          this.$router.push({ path: '/login' })
        } else if (command === 'main') {
          this.$router.push({ path: '/' })
        }
      }
  }
};
</script>

<style lang="stylus">
@import '../common/stylus/variable';

.head {
  width: 100%;
  min-height: 100%;
  background: $color-theme;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  .title {
    position: absolute;
    font-size: 16px;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .small {
    font-size: 13px;
  }

  .logo {
    height: 56px;
    width: auto;
    // margin-left: 5%
  }

  .hd_logo {
    height: 60px;
    width: auto;
    margin-left: 20px;
  }

  .login {
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
