<template>
  <div class="page">
    <div class="login-bg">
      <a href="/" id="J_link">舵手网</a>
    </div>
    <div class="login-panel">
      <div class="login-box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          label-width="0px"
          class="demo-ruleForm login-container"
          status-icon
        >
          <h3 class="title">账号登录</h3>
          <el-form-item prop="phone">
            <el-input
              type="text"
              v-model="ruleForm.phone"
              auto-complete="off"
              placeholder="手机号"
              id="loginEmail"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :type="pwdType"
              v-model="ruleForm.password"
              auto-complete="off"
              placeholder="密码"
              id="loginPassword"
            ></el-input>
            <label id="showPasswordToggle">
              <el-checkbox v-model="checked" id="showPasswordCheck" @change="changed">显示密码</el-checkbox>
            </label>
            <router-link to="/findpwd" style="float: right; color: #bbbbbb">忘记密码？</router-link>
          </el-form-item>
          <el-form-item style="width:100%;">
            <el-button
              type="primary"
              style="width:100%;"
              @click.native.prevent="handleSubmit"
              :loading="logining"
            >登录</el-button>
          </el-form-item>
          <el-form-item style="width:100%;">
            <router-link to="/register">
              <el-button style="width:100%;">注册</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'app-login',
  data() {
    var checkPhone = (rule, value, callback) => {  // 检查账号格式
      if (!value) {
        return callback(new Error('手机号不能为空'));
      } else {
        const reg = /^[1](([3|5|8][\d])|([4][4,5,6,7,8,9])|([6][2,5,6,7])|([7][^9])|([9][1,8,9]))[\d]{8}$/
        // console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('请输入正确的手机号'));
        }
      }
    }
    return {
      logining: false,
      fromUrl: '/',
      ruleForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, validator: checkPhone, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: false,
      pwdType: "password"
    }
  },
  methods: {
    changed() {  // 密码显示切换
      if (this.checked) {
        this.pwdType = ""
      } else {
        this.pwdType = "password"
      }
    },
    handleSubmit(ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // this.logining = true
          let params = { phone: this.ruleForm.phone, password: this.ruleForm.password }
          // this.$store.dispatch('Login', params)
          this.$store.dispatch('user/Login', params).then(res => {
            let status = this.$resultCode.getStatus(res.code)
            let success = this.$resultCode.getSuccessStatus()
            if (status !== success) {
              this.$message({
                message: res.message,
                type: status.type
              })
              return
            }
            // this.logining = false
            this.$message({
              message: '登录成功！',
              type: 'success',
              duration: 1000
            })
            setTimeout(() => {
              this.$router.push(this.fromUrl)
            }, 1000);
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

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
  font-family: "Source Sans Pro", sans-serif;
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
  background-color: #fff;
  margin: 0;
  margin-left: 830px;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: "Source Sans Pro", sans-serif;
}
</style>