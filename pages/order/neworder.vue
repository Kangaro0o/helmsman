<template>
  <div class="body">
    <div class="header">
      <div class="header-logo">
        <a class="logo" href="//www.mi.com/index.html" title="小米官网"></a>
      </div>
      <div class="header-title" id="J_miniHeaderTitle">
        <h2>支付订单</h2>
      </div>
      <div class="topbar-info" id="J_userInfo">
        <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/user">{{this.$store.state.user.name}}</router-link>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/user">个人中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/order">我的订单</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/fav">我的喜欢</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <a rel="nonfollow" href="#">退出登录</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="sep">|</span>
        <div class="el-dropdown">
          <span class="el-dropdown-link">
            <router-link to="/order">我的订单</router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="neworderclass">
      <div class="order-body">
        <div class="check-box">
          <div class="address-box">
            <div class="address-header">
              <h3 class="title">收货地址</h3>
            </div>
            <div class="address-list">
              <div
                v-for="(item,index) in list"
                :key="index"
                class="addresitem"
                @click="selected(index)"
                v-bind:class="{active:i===index}"
                ref="addresstiem"
              >
                <div class="name">{{item.receiver_name}}</div>
                <div class="tel">{{item.receiver_phone}}</div>
                <div class="address">{{item.address}}</div>
                <div class>{{item.postcode}}</div>
              </div>
              <div class="addresitem" @click="dialogFormVisible=true">
                <i class="el-icon-circle-plus icon"></i>
                <span style="font-size:20px;color:#b0b0b0;padding-left:32%;display:block">添加地址</span>
              </div>
            </div>
          </div>

          <div class="goods-count">
            <div class="money-box">
              <ul style="float:left">
                <li class="clearfix">
                  <label>商品件数:</label>
                  <span class="val">{{this.count}}件</span>
                </li>
                <li class="clearfix">
                  <label>商品总价:</label>
                  <span class="val">{{this.price}}元</span>
                </li>
                <!-- <li class="clearfix"><label>活动优惠:</label><span class="val">-0元</span></li>    
                <li class="clearfix"><label>运费:</label><span class="val">0元</span></li>-->
                <li class="clearfix total-price">
                  <label>应付总额:</label>
                  <span class="val">
                    <em>{{this.price}}</em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="section-bar">
            <div v-show="addressdivvisible">{{this.address}}</div>
            <span class="btn-primary" @click="createorder()">
              <router-link v-if="isselected" :to="{path:'/payment',query:{price: this.price,address: this.address,}}" style="color:#fff;padding-top:5px;" class="pay"> 
              立即下单
              </router-link> 
            </span>
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
    <el-dialog  title="提示"  :visible.sync="dialog2visible"  show-word-limit>
        <div class="tishi">请先选择收货地址！</div>
        <div style="text-align:center;">
            <el-button @click="dialog2visible = false">确定</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import { getaddressItems, addaddress } from "@/api/address.js";
import { addorder } from "@/api/order.js";
export default {
  created() {
    this.getaddressItems();
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
          //   return callback(new Error("请输入正确的街道地址"));
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
      i: 0,
      list: [],
      addressdivvisible: false,
      addresslist: null,
      dialogFormVisible: false,
      gid: this.$route.query["gid"], //商品id
      count: this.$route.query["count"], //商品数量
      price: this.$route.query["price"], //商品购买总价
      receiver_name: "",
      receiver_phone: "",
      receiver_address: "",//收件地址
      receiver_postcode: "",
      address: {},//收件信息
      value: [],
      dialog2visible :false,
      isselected:false,
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
      rules: {
        receiver_name: [{ validator: checkname, trigger: "blur" }],
        receiver_phone: [
          { required: true, validator: checkphone, trigger: "blur" }
        ],
        receiver_address: [{ validator: checkaddress, trigger: "blur" }],
        receiver_postcode: [{ validator: checkpostcode, trigger: "blur" }]
      },
      form: {
        receiver_name: "",
        receiver_postcode: "",
        receiver_phone: "",
        receiver_address: ""
      }
    };
  },
  methods: {
    selected(index) {
      this.addressdivvisible = true;
      this.isselected=true;
      this.i = index;
      let address = this.$refs.addresstiem[index].innerText;
      this.address = address;
      var addressbox = address.split(/[\n]/);
      this.receiver_address = addressbox[2];
      this.receiver_name = addressbox[0];
      this.receiver_phone = addressbox[1];
      this.receiver_postcode = addressbox[3];
      //   this.addresstemp=address;
      // console.log(address);
      // console.log(addressbox);
    },
    
    adddiv(ev) {
      this.$refs.form.validate(valid => {
        var prefix = this.value.join(""); //加上地址-省市区前缀
        this.dialogFormVisible = false;
        this.list.push({
          receiver_name: this.form.receiver_name,
          receiver_phone: this.form.receiver_phone,
          address: prefix+ this.form.receiver_address,
          postcode: this.form.postcode
        });
        

        var addressinfo = {
          receiver_phone: this.form.receiver_phone,
          receiver_name: this.form.receiver_name,
          receiver_address: prefix + this.form.receiver_address,
          receiver_postcode: this.form.receiver_postcode
        };
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
    },
    getaddressItems() {
      getaddressItems().then(res => {
        console.log(this.gid);
        console.log(this.count);
        console.log(this.price);
        let status = this.$resultCode.getStatus(res.code);
        let success = this.$resultCode.getSuccessStatus();
        if (status !== success) {
          Message({
            message: res.message,
            type: status.type
          });
          return;
        }
        this.list = res.data
        console.log(this.list.length)
      });
    },

    createorder() {
        if(this.isselected === false)
                  { this.dialog2visible=!this.dialog2visible;
                  
                  }
      else
      {   console.log('eee');
          var orderinfo = {
        gid: this.gid, //商品id
        count: this.count, //购买数量
        price: this.price, //购买价格
        postcode: this.receiver_postcode, //收件地址邮编
        receiverPhone: this.receiver_phone, //收件人电话,
        receiverName: this.receiver_name, //收件人姓名
        address: this.receiver_address //收件地址
      };
      addorder(orderinfo).then(res => {
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
    }}
  },
  layout: "neworder"
};
</script>
<style scoped>
.tishi{
    font-size:20px;
    text-align:center;
}
.active {
  border: 1px solid #ff6700;
  color: #ff6700;
}
.header-logo {
  width: 93px;
  margin-top: 26px;
  float: left;
}
.sep {
  color: #e0e0e0;
}
.el-dropdown-link {
  cursor: pointer;
}
.topbar-info {
  margin-top: 40px;
  line-height: 40px;
  position: relative;
  float: right;
  height: 40px;
}
.header-title {
  margin-top: 41px;
  float: left;
  font-size: 20px;
}
.pay {
  padding-top: 10px;
}
.logo {
  position: relative;
  display: block;
  background-color: #ff6700;
  width: 55px;
  height: 55px;
  background: url(/img/logo-mi.png) no-repeat;
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
.address {
  line-height: 30px;
}
.icon {
  padding-left: 40%;
  padding-top: 30%;
  font-size: 40px;
  color: #b0b0b0;
}
.btn-primary {
  background: #ff6700;
  margin-left: 30px;
  float: right;
  border-color: #ff6700;
  color: #fff;
  width: 158px;
  height: 38px;
  padding: 0;
  margin: 0;
  text-align: center;
  margin-right: -42px;
  margin-top: -20px;
  cursor: pointer;
}
.section-bar {
  border-top: 2px solid #f5f5f5;
  padding: 20px 48px;
}
.val {
  color: #ff6700;
  zoom: 1;
  float: right;
}
.clearfix {
  display: block;
  padding-left: 126px;
  line-height: 2;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
.money-box {
  position: absolute;
  right: 0;
  text-align: right;
}
.goods-count {
  min-height: 100px;
  padding: 20px 0;
  position: relative;
}
.addresitem {
  cursor: pointer;
  margin-left: 2px;
  margin-bottom: 24px;
  border: 1px solid #e0e0e0;
  width: 268px;
  height: 178px;
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.title {
  float: left;
  color: #333;
  font-size: 18px;
  line-height: 20px;
  font-weight: normal;
}
.address-list {
  margin: 0;
  padding-left: 0px;
  /* min-height:210px; */
}
.address-header {
  padding-bottom: 40px;
}
.address-box {
  margin-left: 48px;
  margin-right: 48px;
}
.check-box {
  padding: 48px 0 0;
  background-color: #fff;
  display: block;
}
.body {
}
.header {
  height: 100px;
}
.neworderclass {
  background: #f5f5f5;
  /* height:1000px; */
  padding-top: 40px;
  padding-bottom: 60px;
}
.order-body {
  /* background:#fff; */
  /* height:600px; */
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
}
</style>