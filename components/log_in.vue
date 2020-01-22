<template>
  <div class='page'>
    <div class="login-bg">
      <a href="/" target="_parent" id="J_link" 
            data-log_code="pc#bid=3576645.1&amp;page=promotion" data-stat-repeat="true" data-stat-id="621ba5d6a42e822d" 
            onclick="_msq.push(['trackEvent', 'ba30dc918f1e51a9-621ba5d6a42e822d', 'https://www.mi.com/redmik30', 'pcpid', 'pc#bid=3576645.1&amp;page=promotion']);">
        舵手网
      </a>
    </div>
    <div class="login-panel">
      <div class="login-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
              class="demo-ruleForm login-container" status-icon>
          <h3 class="title">账号登录</h3>
          <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"
                      id="loginEmail"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"
                      id="loginPassword"></el-input>
          <label id="showPasswordToggle">
              <el-checkbox v-model="checked" id="showPasswordCheck">显示密码</el-checkbox>
          </label>
          <router-link to="/" style="float: right; color: #bbbbbb">忘记密码？</router-link>
          </el-form-item>
          <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">
              登录
          </el-button>
          </el-form-item>
          <el-form-item style="width:100%;">
          <router-link to="/login/register">
              <el-button style="width:100%;">
              注册
              </el-button>
          </router-link>
          </el-form-item>
      </el-form>
      </div>
    </div>
  </div>

</template>

<script>
import sha256 from 'crypto-js/sha256'
import { login } from '@/api/login'
export default {
  name: 'app-login',
  data () {
    return {
      logining: false,
      fromUrl: '/',
      ruleForm: {
        account: 'admin',
        checkPass: '123456'
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: false
    }
  },
  methods: {
    handleSubmit (ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          const loginParams = { username: this.ruleForm.account, password: sha256(this.ruleForm.checkPass) }
          login(loginParams).then(data => {
            this.logining = false
            this.$message({
              message: '登录成功！',
              type: 'success',
              duration: 1000
            })
            setTimeout(() => {
              this.$router.push(this.fromUrl)
            }, 1000);
          }).catch(err => {
            this.logining = false
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.fullPath !== '/register' && !from.meta.errorPage) {
        vm.fromUrl = from.fullPath
      }
    })
  }
}
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
</script>



<style  scoped>


.title {
  text-align: center;
  margin-bottom: 15px;
}

.page {
  position: relative;
  width: 100%;
  min-height: 588px;
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

.login-bg {
  background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e3028877530620f50043efb01575e3d.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  position: absolute;
  width: 100%;
  height: 588px;
}

.login-bg a {
    display: block;
    height: 588px;
    text-indent: -9999em;
}

.login-panel {
  margin: 0 auto;
  width: 1130px;
  padding-top: 78px;
}

.login-box {
  position: relative;
  top: 20%;
  left: 0;
  display: block;
  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  margin: 0;
  margin-left: 830px;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #DDD;
  border-radius: .5em;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>

