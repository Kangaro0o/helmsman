<template>
  <div class="body">
    <div class="breadcrumbs">
      <div class="micontainer">
        <a href="/">首页</a>
        <span class="sep">/</span>
        <span>收货地址</span>
      </div>
    </div>
    <div class="mi-user">
      <div class="micontainer">
        <div class="row">
          <div class="span4">
            <div id="J-userMenu" class="uc-box uc-sub-box">
              <div class="uc-nav-box">
                <div class="box-hd">
                  <h3 class="title">个人中心</h3>
                </div>
                <div class="box-bd">
                  <ul id="J_orderNavList" class="uc-nav-list">
                    <li class="ulclass">
                      <a href="#" class="active">收货地址</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="uc-nav-box">
                <div class="box-hd">
                  <h3 class="title">账户管理</h3>
                </div>
                <div class="box-bd">
                  <ul class="uc-nav-list">
                    <li class="ulclass">
                      <a href="/tabinfo/">个人信息</a>
                    </li>
                    <li class="ulclass">
                      <a href="#">修改密码</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="mi-address-box span16">
            <div class="box">
              <h1>收货地址</h1>
              <div class="address-box">
                <div class="address-list">
                  <div class="address-item" @click="dialogFormVisible=true">
                    <div class="add-desc">
                      <i>
                        <span class="temp2"></span>
                      </i>
                      <span class="temp">添加新地址</span>
                    </div>
                  </div>
                  <div class="address-item" v-for="(item,index) in list" :key="index">
                    <div class="name">{{item.receiver_name}}</div>
                    <div class="tel">{{item.receiver_phone}}</div>
                    <div class="address">{{item.address}}</div>
                    <!-- <div class="postcode">{{item.postcode}}</div> -->
                    <div class="address-action">
                      <!-- <span class="operate">修改</span>
                      <span class="operate">删除</span>-->
                      <span class="operate" @click="setuserdefaultaddress(index)">设置为默认地址</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible" show-word-limit>
      <div>
        <el-form :model="form" status-icon :rules="rules" ref="form" class="input-text">
          <div>
            <el-form-item prop="receiver_name" style="float:left;width:40%;">
              <el-input type="text" placeholder="姓名" v-model="form.receiver_name" maxlength="10"></el-input>
            </el-form-item>
            <el-form-item prop="receiver_phone" style="float:right;width:50%">
              <el-input placeholder="手机号" v-model="form.receiver_phone" autocomplete="off"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-cascader
              placeholder="选择/省/市/区"
              v-model="value"
              :options="options"
              @change="handleChange"
              style="width:100%"
            ></el-cascader>
          </div>
          <div>
            <el-form-item prop="receiver_address" style="padding-top:10px;height:60px;">
              <el-input placeholder="详细地址" v-model="form.receiver_address" type="textarea" :row="2"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item prop="receiver_postcode">
              <el-input placeholder="邮编" v-model="form.receiver_postcode" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            type="danger"
            @click="adddiv"
            style="margin-left:20%;width:200px;"
            autofocus
          >确 定</el-button>
          <el-button
            type="info"
            @click="dialogFormVisible = false"
            style="margin-right:10%;width:200px;"
            autofocus
          >取 消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import { getaddressItems, addaddress, deleteaddress, setdefaultaddress } from "@/api/address";
export default {
  created() {
    this.getaddressItems();
  },
  components: {
    userfooter: Footer
  },
  data() {
    var checkphone = (rule, value, callback) => {
      //验证手机号

      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^[1](([3|5|8][\d])|([4][4,5,6,7,8,9])|([6][2,5,6,7])|([7][^9])|([9][1,8,9]))[\d]{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };

    var checkname = (rule, value, callback) => {
      //验证姓名

      if (!value) {
        return callback(new Error("收件人姓名不能为空"));
      } else {
        const reg = /^.{1,10}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("收件人字符不能超过10个"));
        }
      }
    };

    var checkaddress = (rule, value, callback) => {
      //验证地址

      if (!value) {
        return callback(new Error("地收件址不能为空"));
      } else {
        const reg = /^((?!list|news|index).)*$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的街道地址"));
        }
      }
    };

    var checkpostcode = (rule, value, callback) => {
      //验证邮编

      if (!value) {
        return callback(new Error("邮编不能为空"));
      } else {
        const reg = /^[0-9]{6}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的地区邮编"));
        }
      }
    };
    return {
      list: [],
      defaultaddressid: 0,//默认地址id
      text: "",
      value: [],
      updateaddressid: 0,
      options: [
        {
          value: "江苏省",
          label: "江苏省",
          children: [
            {
              value: "南京市",
              label: "南京市",
              children: [
                {
                  value: "鼓楼区",
                  label: "鼓楼区"
                },
                {
                  value: "江宁区",
                  label: "江宁区"
                },
                {
                  value: "玄武区",
                  label: "玄武区"
                },
                {
                  value: "雨花台",

                  label: "雨花台"
                },
                {
                  value: "溧水区",
                  label: "溧水区"
                }
              ]
            },
            {
              value: "泰州市",
              label: "泰州市",
              children: [
                {
                  value: "兴化市",
                  label: "兴化市"
                },
                {
                  vaule: "靖江市",
                  label: "靖江市"
                },
                {
                  value: "姜堰市",
                  label: "姜堰市"
                },
                {
                  value: "泰兴市",
                  label: "泰兴市"
                }
              ]
            },
            {
              value: "扬州市",
              label: "扬州市"
            },
            {
              value: "徐州市",
              label: "徐州市"
            },
            {
              value: "宿迁市",
              label: "宿迁市"
            },
            {
              value: "镇江市",
              label: "镇江市"
            }
          ]
        },
        {
          value: "北京市",
          label: "北京市",
          children: [
            { value: "东城区", label: "东城区" },
            { value: "房山区", label: "房山区" },
            { value: "朝阳区", label: "朝阳区" }
          ]
        },
        {
          value: "上海市",
          label: "上海市",
          children: [
            { value: "闵行区", label: "闵行区" },
            { value: "嘉定区", label: "嘉定区" },
            { value: "宝山区", label: "宝山区" },
            { value: "松江区", label: "松江区" }
          ]
        },
        {
          value: "深圳市",
          label: "深圳市"
        },
        {
          value: "广东省",
          label: "广东省"
        }
      ],
      dialogFormVisible: false,

      rules: {
        receiver_name: [{ validator: checkname, trigger: "blur" }],
        receiver_phone: [
          { required: true, validator: checkphone, trigger: "blur" }
        ],
        receiver_address: [{ validator: checkaddress, trigger: "blur" }],
        receiver_postcode: [{ validator: checkpostcode, trigger: "blur" }]
      },
      form2: {
        aid: 0
      },
      form: {
        receiver_name: "", //收件人姓名
        receiver_postcode: "", //收件地址邮编
        receiver_phone: "", //收件人电话
        receiver_address: "", //收件地址

      }
    };
  },
  methods: {
    getaddressItems() {
      getaddressItems().then(res => {
        console.log(this.$store.state.user.name)
        console.log(this.$store.state.user.email)
        console.log(this.$store.state.user.addressId)
        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          this.$message({
            message: res.message,
            type: status.type
          });
          return;
          console.log(res.data);
        }
        this.list = res.data;
      });
    },
    handleChange(value) {
      console.log(value);
    },
    setuserdefaultaddress(index) {
      // this.defaultaddressid = index
      this.form2.aid = this.list[index].aid
      //  let aiddata =new FoemData();
      //  aiddata.append('aid',this.updateaddressid)
      // var aid=this.updateaddressid
      console.log(typeof (this.list[index].aid))
      let aid = this.form2.aid
      console.log("test")
      console.log(aid)
      setdefaultaddress(JSON.parse(aid)).then(res => {

        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          Message({
            message: res.message,
            type: status.type
          });
          return;
        }
      });//设置aid为id的地址为默认地址
    },

    //   setdefaultaddress(aid).then(res => {

    //     let status = this.$resultCode.getStatus(res.code);
    //     let success = this.$resultCode.getSuccessStatus();
    //     if (status !== success) {
    //       Message({
    //         message: res.message,
    //         type: status.type
    //       });
    //       return;
    //     }
    //   })
    // ,
    adddiv(ev) {
      //向后台添加地址
      this.$refs.form.validate(valid => {
        var prefix = this.value.join("");//加上地址-省市区前缀
        this.dialogFormVisible = false;
        this.list.push({
          receiver_name: this.form.receiver_name,
          receiver_phone: this.form.receiver_phone,
          address: prefix + this.form.receiver_address,
          postcode: this.form.postcode
        });
        var addressinfo = {
          receiver_phone: this.form.receiver_phone,
          receiver_name: this.form.receiver_name,
          address: prefix + this.form.receiver_address,
          postcode: this.form.receiver_postcode
        };
        // const reg=/^[1](([3|5|8][\d])|([4][4,5,6,7,8,9])|([6][2,5,6,7])|([7][^9])|([9][1,8,9]))[\d]{8}$/;
        // if(!reg.test(this.receiver_phone))
        // this.$Message.error("请输入正确的手机号")
        addaddress(addressinfo).then(res => {
          let status = this.$resultCode.getStatus(res.code);
          let success = this.$resultCode.getSuccessStatus();
          if (status !== success) {
            Message({
              message: res.message,
              type: status.type
            });
            return;
          }
        });
      });
    }
  },
  layout: "user"
};
</script>
<style scoped>
.operate {
  margin-left: 15px;
}
.name {
  font-size: 18px;
  color: #333;
  line-height: 30px;
  margin-bottom: 10px;
}
.tel {
  line-height: 22px;
  color: #757575;
}
.temp {
  margin-top: 1px;
  margin-left: -11px;
}
.active {
  color: #ff9650;
}
.address {
  line-height: 30px;
}
.address-action {
  display: none;
}
.address-item {
  display: inline-block;
  width: 268px;
  height: 178px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
  vertical-align: top;
  transition: all 0.4s ease;
  margin-left: 5px;
}
.address-item:hover .address-action {
  display: block;
  margin-left: 10px;
  /* text-align:right;
    right:24px;
    bottom:10px;
    opacity:0; */
  color: #ff9650;
}
.temp2 {
  display: block;
  width: 51px;
  height: 51px;
  /* margin:0 auto 8px;
       font-size:30px;
       line-height:30px;
       background-color:#e0e0e0;
       border-radius:17px;
       text-align:center;
       transition:all .4s ease;
       color:#fff; */
  background: url(/img/add-address.jpg) no-repeat;
}
.add-desc {
  position: absolute;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%, 0);
  color: #b0b0b0;
}
.address-box {
  margin-top: 15px;
}
.box {
  margin: 0 48px;
  font-size: 15px;
  font-weight: 400;
  line-height: 68px;
  color: #757575;
}
.mi-address-box {
  background: #fff;
  padding: 20px 0;
  display: inline;
}
.span16 {
  width: 978px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}
.ulclass {
  line-height: 27px;
  font-size: 14px;
  padding-left: 20px;
}
.title {
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  color: #333;
  padding-left: 20px;
}
.box-hd {
  height: 40px;
}
.uc-nav-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.uc-nav-box {
  margin-bottom: 12px;
}
.uc-sub-box {
  padding: 36px 0;
}
.uc-box {
  background: #fff;
}
.mi-user {
  display: block;
  padding: 0px;
}
.mi-address {
  padding-bottom: 40px;
  background: #f5f5f5;
}
.span4 {
  width: 234px;
  float: left;
  margin-left: 14px;
  min-height: 1px;
}
.row {
  margin-left: -14px;
  display: block;
}
.sep {
  margin: 0 0.5em;
  color: #b0b0b0;
}
.breadcrumbs {
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5;
  color: #616161;
}
.micontainer {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}
.body {
  background-color: #f5f5f5;
  display: block;
  height: 984px;
}
</style> 