<template>
  <div class="page">
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
          <h3 class="title">密码找回</h3>
          <h4 class="input-message">请输入注册的手机号码：</h4>
          <el-form-item prop="phone">
            <el-input
              type="text"
              v-model="ruleForm.phone"
              auto-complete="off"
              placeholder="手机号"
              id="loginEmail"
            ></el-input>
          </el-form-item>
          <el-form-item prop="chkCode">
            <label>
              <el-input
                v-model="ruleForm.chkCode"
                auto-complete="off"
                placeholder="验证码"
                id="checkCode"
                style="width:60%;"
              ></el-input>
            </label>
            <label class="send-message">
              <el-button style="width:112px" @click="getCodeFun" :disabled="disabled">
                <template v-if="sending">发送验证码</template>
                <template v-else>重新发送({{second}})</template>
              </el-button>
            </label>
          </el-form-item>
          <el-form-item style="width:100%;margin-top:30px;">
            <el-button
              type="primary"
              style="width:100%;"
              @click.native.prevent="submitNext"
              :loading="logining"
            >下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getchkCode } from '@/api/user'
import { verify } from '@/api/user'

export default {
  name: 'app-find_p1',
  data() {
    var checkPhone = (rule, value, callback) => {  // 检查账号格式
      if (!value) {
        return callback(new Error('手机号不能为空'));
      } else if (!this.checkMobile(value)) {
        return callback(new Error('请输入正确的手机号'));
      } else {
        callback();
      }
    }

    return {
      logining: false,
      ruleForm: {
        phone: '',
        chkCode: ''
      },
      rules: {
        phone: [
          { required: true, validator: checkPhone, trigger: 'blur' }
        ],
        chkCode: [
          { required: true, message: "请输入验证码", trigger: 'blur' }
        ]
      },
      sending: true,
      disabled: false,
      second: 60
    }
  },
  methods: {
    getCodeFun() {
      if (!this.sending)
        return;
      let tel = this.ruleForm.phone
      if (this.checkMobile(tel)) {
        getchkCode(this.ruleForm.phone).then(data => {
          let status = this.$resultCode.getStatus(data.code)
          this.$message({
            message: data.message,
            type: status.type
          })
          this.sending = false;
          this.disabled = true;
          this.timeDown();
        }).catch(err => {
          this.logining = false
          console.log(err)
        })
      }
    },
    timeDown() {
      let result = setInterval(() => {
        --this.second;
        if (this.second < 0) {
          clearInterval(result);
          this.sending = true;
          this.disabled = false;
          this.second = 60;
        }
      }, 1000);
    },
    submitNext(ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          var verifyInfo = {
            phone: this.ruleForm.phone,
            chkCode: this.ruleForm.chkCode
          }
          verify(verifyInfo).then(data => {
            this.logining = false
            let status = this.$resultCode.getStatus(data.code)
            let success = this.$resultCode.getSuccessStatus()
            if (status !== success) {
              this.$message({
                message: data.message,
                type: status.type
              })
              return
            }
            this.$message({
              message: '验证成功！',
              type: 'success',
              duration: 1000
            })
            setTimeout(() => {
              this.$router.push({ name: 'findpwd-next', params: { phone: this.ruleForm.phone } })
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
    },
    checkMobile(str) {
      const reg = /^[1](([3|5|8][\d])|([4][4,5,6,7,8,9])|([6][2,5,6,7])|([7][^9])|([9][1,8,9]))[\d]{8}$/
      // console.log(reg.test(value));
      if (reg.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 30px;
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
  margin: 0 auto;

  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: "Source Sans Pro", sans-serif;
}

.login-box .svgContainer {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 1em;
  border-radius: 50%;
  pointer-events: none;
}

.input-message {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.send-message {
  margin-left: 13px;
}
</style>