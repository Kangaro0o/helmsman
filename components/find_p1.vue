<template>
  <div class='page'>

    <div class="login-panel">
        <div class="login-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
                class="demo-ruleForm login-container" status-icon>
            <h3 class="title">密码找回</h3>
            <h4 class="input_message">请输入注册的手机号码：</h4>
            <el-form-item prop="phone">
            <el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="手机号"
                        id="loginEmail"></el-input>
            </el-form-item>
            <el-form-item prop="chkCode">
              <label>
                <el-input
                  v-model="ruleForm.chkCode"
                  auto-complete="off"
                  placeholder="验证码"
                  id="checkCode"
                  style="width:70%;"
                ></el-input>
              </label>
              <img alt="图片验证码" src="/pass/getCode?icodeType=resetPwd&amp;1580705877288" title="看不清换一张" class="chkcode_img icode_image code-image">
            </el-form-item>
            <el-form-item style="width:100%;margin-top:30px;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">
                下一步
            </el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
  </div>
</template>

<script>
import {register} from '@/api/login'

export default {
  name: 'app-login',
  data () {
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
      ruleForm: {
        phone: '',
        chkCode: ''       
      },
      rules: {
        phone: [
          {required: true, validator: checkPhone, trigger: 'blur'}
        ],
        chkCode: [
          {required: true, message:"请输入验证码", trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    
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

.input_message {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.chkcode_img {
  margin-left: 3px;
}
</style>