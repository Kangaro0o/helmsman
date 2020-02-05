<template>
  <div class="page">
    <div class="tabin-bg">
        <div class = "tab-layout">
        <h3>个人信息</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
                    class="demo-ruleForm login-container" status-icon>
            <div class="tabcon account-form" id="tmpl_setting">
                <div class="account-form-raw">
                <label class="account-form-label">昵称：</label>
                <div class="account-form-field">
                    <el-form-item prop="name">
                        <el-input type="text" v-model="ruleForm.name" auto-complete="off" placeholder="昵称"
                            id="loginEmail" maxlength="16" tabindex="1" class="account-form-input"></el-input>
                    </el-form-item>
                    <span class="account-form-field-tip">道上的，报上名来！</span>
                </div>
                </div>
                <div class="account-form-raw">
                <label class="account-form-label">密码：</label>
                <div class="account-form-field">
                    <a href="/tabinfo/resetpwd">修改密码</a>
                </div>
                </div>
                <div class="account-form-raw">
                <label class="account-form-label">手机号：</label>
                <div class="account-form-field">
                    {{phone}}
                </div>
                <div class="account-form-field-phone">
                    <a href="/tabinfo/resetphone">更改绑定</a>
                </div>
                </div>
                <div class="account-form-raw">
                <label class="account-form-label">邮箱：</label>
                <div class="account-form-field">
                    <el-form-item prop="mail">
                        <el-input type="text" v-model="ruleForm.mail" auto-complete="off" placeholder="邮箱"
                            id="loginEmail" maxlength="16" tabindex="1" class="account-form-input"></el-input>
                    </el-form-item>
                </div>
                </div>
                
            <div class="account-form-field-submit mrg0">
                <div class="account-form-error"><span></span></div>
                <el-form-item class="btn btn-active">
                    <el-button
                    type="primary"
                    @click.native.prevent="handleSubmit"
                    :loading="logining"
                    >更新设置</el-button>
                </el-form-item>
                
            </div>

            </div>
        </el-form>
        </div>
    </div>
  </div>
</template>

<script>
import {tabupdate} from '@/api/user'
export default {
    data() {
        return {
            ruleForm: {
                name: "bevecrly",
                mail: "",
            },
            phone: "137****90",
           
            rules: {
                name: [
                { required: true, message: '请输入昵称', trigger: 'blur' }
                ],
                mail: [
                { required: true, message: '请输入邮箱', trigger: 'blur' }
                ]
            }
        }
    },

    methods: {
        handleSubmit(ev) {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                this.logining = true
                var tabupdateInfo = {
                    name: this.ruleForm.name,
                    mail: this.ruleForm.mail
                }
                tabupdate(tabupdateInfo).then(data => {
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
                    this.$message({
                    message: '修改成功！',
                    type: 'success',
                    duration: 1000
                    })
                    setTimeout(() => {
                    this.$router.push({path: '/'})
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
    }
}
</script>

<style scoped>
div {
    margin: 0;
    padding: 0;
}

.tab-layout {
    margin-left:300px;
    font: normal 13px/1.618 Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    min-height: 100%;
    color: #333;
}

.tabin-bg {
  background-image: url("../assets/tabinfobg.png");
  background-size:cover; 
  background-repeat: no-repeat;
  background-position: top left;
  width: 100%;
  height: 470px;
  padding-top: 120px;
}

h3 {
    font-size: 12pt;
    margin-bottom: 20px;
}

.account-form {
    padding: 20px 0;
}

.account-form-raw {
    margin-bottom: 20px;
    position: relative;
}

.account-form-label {
    float: left;
    display: block;
    line-height: 40px;
    height: 40px;
    width: 60px;
    font-size: 13px;
}

.account-form-field {
    position: relative;
    margin-bottom: 10px;
    margin: 0;
    width: 200px;
    display: inline-block;
    line-height: 40px;
}

.account-form-input {
    width: 280px;
    font-size: 13px;
    padding: 0px;
    border-radius: 3px;
    box-sizing: border-box;
    outline: 0;
}

.account-form-field-phone {
    display: bolck;
    margin-left: 60px;
}

.account-form-field-tip {
    display: block;
    color: #9b9b9b;
    margin-top: 10px;
}

.account-form-field a {
    color: #3577a9;
}

.account-form-field-phone a {
    color: #3577a9;
}

a {
    text-decoration: none;
    border: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    cursor: pointer;
}

.account-form-field-submit {
    width: auto;
}

.account-form-field-submit.mrg0 {
    margin: 0;
    margin-top: 30px;
}

.account-form-error {
    position: absolute;
    top: -10px;
    left: 0;
}

.account-form .btn {
    display: inline-block;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    width: 100px;
    text-align: center;
    outline: 0;
    margin-top: 30px;
}
</style>
