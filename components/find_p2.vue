<template>
  <div class='page'>

    <div class="login-panel">
        <div class="login-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
                class="demo-ruleForm login-container" status-icon>
            <h3 class="title">重置密码</h3>
            <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"
                        id="loginPassword"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="重复密码"
                        id="loginCheckPass"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="sendpwdFun" :loading="logining">
                确认修改
            </el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
  </div>
</template>

<script>
import {sendpwd} from '@/api/user'

export default {
  name: 'app-login',
  data () {
     
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      logining: false,
      ruleForm: {
        password: '',
        checkPass: ''       
      },
      rules: {
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    sendpwdFun (ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          let password = this.ruleForm.password
          sendpwd(password).then(data => {
            this.logining = false
            let status=this.$resultCode.getStatus(data.code)
            let success=this.$resultCode.getSuccessStatus()
            if(status!==success){
              this.$message({
                message:data.message,
                type:status.type
              })
              return
            }
            this.$router.push({path: '/login'})
            
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
  }
}

</script>

<style scoped>

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
  margin: 0 auto;
  
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #DDD;
  border-radius: .5em;
  font-family: 'Source Sans Pro', sans-serif;
}

.login-box .svgContainer {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 1em;
  border-radius: 50%;
  pointer-events: none;
}
</style>