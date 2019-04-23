<template>
  <div class="Header">
    <div class="agileits-banner about-w3banner">
      <div class="bnr-agileinfo">
        <div class="banner-top w3layouts">
          <div class="container">
            <ul class="agile_top_section">
              <li>
                <p> Pets Care Website !</p>
              </li>
              <li>
                <p><span class="glyphicon glyphicon-earphone"></span><i class="el-icon-phone-outline" aria-hidden="true"></i> +11 999 8888 7777 </p>
              </li>
              <li>
                <a class="sign" v-if="logined == 'login in'" href="#" data-toggle="modal" @click="dialogVisible = true" data-target="#myModal2">
                  <i class="el-icon-d-arrow-right" aria-hidden="true"></i> {{logined}}
                </a>		
                <div class="sign" @click="Logout" v-else>
                  <i class="el-icon-d-arrow-right"  aria-hidden="true"></i> {{logined}}
                </div>
              </li>
                        <el-dialog
                            title="登录"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                        <form action="submit">
                            <span class="emg">Email：</span>
                            <input  class="inner" type="text" name="email" v-model="user.userEmail" placeholder="请输入邮箱">
                            <span class="emg">Password：</span>
                            <input class="inner" type="password" name="password" v-model="user.password" @keyup.enter="login()" placeholder="请输入密码">
                            <div class="link" @click="noneStyle(dialogVisible = false)">No account? To register</div>
                        </form>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogVisible = false">Cancel</el-button>
                          <el-button type="primary" @click="login(dialogVisible = false)">Login</el-button>
                        </span>
                      </el-dialog>
            </ul>
          </div>
        </div>
        <div class="banner-w3text w3layouts">
          <span>INSPIRED</span>
          <span>BY</span>
          <span>W3LAYOUTS</span>
        </div>
        <!-- navigation -->
        <div class="top-nav w3-agiletop">
          <div class="agile_inner_nav_w3ls">
            <div class="navbar-header w3llogo">
              <h3>
                <span>Dog</span>
                <span>Cat</span>
                <span>Pet</span>
                <span>Care</span>
              </h3>
              <h1><router-link class="font" to="/home">Pets Care</router-link></h1>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div class="w3menu navbar-left">
                <h1>Pets Care</h1>
                <ul class="nav navbar">
                  <li 
                    class="bar a"
                    v-for="(item,index) in items"
                    :key="index"
                    :class="{active:istrue==index}"
                    @click="istrue=index"
                  ><router-link :to="{name:item.routerName}">{{item.name}}</router-link></li>
                </ul>
              </div>
              <div class="w3ls-bnr-icons social-icon navbar-right">
                <a href="#" class="social-button twitter"><i class="el el-icon-star-off"></i></a>
                <a href="#" class="social-button facebook"><i class="el el-icon-circle-check"></i></a>
                <a href="#" class="social-button google"><i class="el el-icon-news"></i></a>
                <a href="#" class="social-button dribbble"><i class="el el-icon-rank"></i></a>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { setCookie,getCookie,clearCookie } from '@/config/cookieUtil'

export default {
  name: 'Header',
  data() {
    return {
      dialogVisible: false,
      istrue: 0,
      items: [
        {
          routerName: 'Home',
          name: "Home"
        },
        {
          routerName: 'About',
          name: "About"
        },
        {
          routerName: 'Show',
          name: "Show"
        },
        {
          routerName: "Careful",
          name: "Careful"
        },
        {
          routerName: "Contact",
          name: "Contact"
        }
      ],
      logined:'',
      user: {
        userEmail:'',
        password: ''
      }
    };
  },
  methods: {
    // 提示框方法
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 跳转到注册
    noneStyle() {
      this.$router.push( '/register' )
      dialogVisible: false
    },
    //判断是否登录
    inspectLogin() {
      var token = getCookie('token');
      if(token == null || token == '' || token == undefined ) {
        this.logined = 'Login in';
      } else {
        this.logined = 'Logout'
      }
      
    },
    // 登录
    login() {
      // console.log(this.user);
      var params = {
        user_email: this.user.userEmail,
        password: this.user.password
      }
      var url = 'user/login';
      this.$http.post(url,params) 
                .then( res => {
                    // console.log('loginde',res.data)
                    if(res.data.code == "0000" ) {
                        this.$alert('Login Successfully', {
                            dangerouslyUseHTMLString: true,
                            showCancelButton:false
                        });
                        this.logined = 'Logout';
                        setCookie('token',res.data.result.user_email);
                        this.user = '';
                    } else {
                        this.$alert('Is the login information correct?', {
                            dangerouslyUseHTMLString: true,
                            showCancelButton:false
                        });
                    }
                })

    },
    //退出登录
    Logout() {
      clearCookie('token');
      this.$alert('Logout Successfully', {
          dangerouslyUseHTMLString: true,
          showCancelButton:false
      });
      this.logined = 'login in'
    }
  },
  created() {
    this.inspectLogin();
  }
}
</script>


<style scoped>
.el-dialog__body {
    padding: 0;
    color: #606266;
    font-size: 14px;
    margin: 0;
}

.active {
  background-color: #FF5722;
  border-radius: 12px;
  padding: 8px;
  height: 30px;
  color: #fff;
  line-height: 1.3;
}
.a:link,
.a:visited {
  color: #ffffff;
  text-decoration: none;
  display: block;
  background-color: transparent;
}
.a:hover {
  background-color: #FF5722;
  border-radius: 12px;
  padding: 8px;
  height: 30px;
  color: #fff;
  line-height: 1.3;
}
a {
  text-decoration: none;
}
.Header {
  background: url('../assets/images/a.jpg') no-repeat center;
  background-size: cover;
}
.container {
    height: 40px;
}
ul.agile_top_section {
    list-style: none;
    display: flex;
    line-height: 1;
    align-items: center;
    color: white;
    text-align: center;
}
li {
    width: 33.3%;
    margin-top: 24px;
}
ul.agile_top_section a.sign {
    background: #ff5722;
    color: #fff;
    font-size: 0.9em;
    padding: 8px 1em;
    text-decoration: none;
    width: 200px;
    letter-spacing: 2px;
    border-radius: 2px;
}
.sign {
    background: #ff5722;
    color: #fff;
    font-size: 0.9em;
    padding: 8px 1em;
    width: 200px;
    letter-spacing: 2px;
    border-radius: 2px;
}
.banner-w3text.w3layouts {
    margin-top: 200px;
    letter-spacing: 12px;
    color: coral;
    text-align: center;
}
.navbar-header.w3llogo {
    text-align: center;
}
h3 {
    color: white;
    letter-spacing: 24px;
    line-height: 3;
    font-size: 26px;
}
.font {
    color: white;
    text-decoration: none;
    letter-spacing: 32px;
    font-weight: 700;
    font-size: 48px;
}
.w3menu.navbar-left {
    height: 100px;    
    display: flex;
    flex-direction: row;
    width: 82%;
    margin: 0 auto;
}
ul.nav.navbar {
    display: flex;
    list-style: none;
    text-decoration: none;
    margin-left: 65px;
}
h1 {
    margin-top: 34px;
    color: coral;
}
.bar {
    width: 33.3%;
    font-size: 22px;
    margin: 25px;
}
.bar a {
    text-decoration: none;
    color: white;
}
.bar a:hover {
    color: coral;
}
.social-icon a {
    font-size: 0.9em;
    color: #fff;
    margin: 0 .5em;
    border: 1px solid transparent;
    width: 30px;
    height: 28px;
    display: inline-block;
    text-align: center;
    line-height: 2.2em;
    position: relative;
    z-index: 999;
    padding: 12px;
}
a {
    background-color: transparent;
}
.el {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.el :before {
  color: #FF5722;
}
.social-icon a:hover:before {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border-color: #FF5722;
}
.social-icon a:before {
    content: '';
    display: block;
    height: 28px;
    width: 28px;
    border: 1px solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    position: absolute;
    z-index: -1;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
}
div#bs-example-navbar-collapse-1 {
    background-color: rgba(6, 6, 6, 0.47);
}

.w3ls-bnr-icons.social-icon.navbar-right {
    margin-left: 60%;
    padding-bottom: 20px;
}

/* dialog */
form {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
}
.inner {
    width: 50%;
    margin: 0 auto;
    padding: 8px 8px;
    border: 1px solid gainsboro;
    border-radius: 8px;
}
.link {
    text-decoration: none;
    color: burlywood;
    margin: 8px;
    text-align: right;
}
.emg {
  margin: 6px;
}
</style>

<style>

.el-dialog__title {
    line-height: 24px;
    font-size: 22px;
    color: dodgerblue;
    letter-spacing: 20px;
}
</style>

