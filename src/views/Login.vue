<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录信息门户</span>
      </div>
      <el-input placeholder="请输入学号" type="number" v-model="inputId" clearable></el-input>
      <el-input placeholder="请输入密码" type="password" v-model="inputPsw" clearable></el-input>
      <div class="loginBt">
        <el-button v-if="inputId && inputPsw" type="primary" @click="toLogin">登录</el-button>
        <el-button v-else type="primary" disabled>登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputId: '',
      inputPsw: ''
    }
  },
  methods: {
    toLogin () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
        this.$message({
          showClose: true,
          message: '密码错误哦！',
          type: 'error'
        })
      }, 2000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.box-card {
  background: #fff;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  .clearfix {
    text-align: center;
  }

  .clearfix:before, .clearfix:after {
    display: table;
    content: '';
  }

  .clearfix:after {
    clear: both;
  }

  .el-input {
    margin-bottom: 10px;
  }

  .loginBt {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
