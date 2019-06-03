<template>
    <div class="contact">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">

            <i class="el-icon-d-arrow-right icon"></i><i class="el-icon-d-arrow-right icon"></i>
            <i class="el-icon-d-arrow-right icon"></i><i class="el-icon-d-arrow-right icon"></i>
            <el-form-item label="Phone:">
                <el-input v-model="formLabelAlign.Phone"></el-input>
            </el-form-item>
            <el-form-item label="Email:">
                <el-input v-model="formLabelAlign.Email"></el-input>
            </el-form-item>
            <el-form-item label="Address:">
                <el-input v-model="formLabelAlign.Address"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Submit</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import { setCookie,getCookie,clearCookie } from '@/config/cookieUtil'

export default {
    name: 'Contact',
    data() {
      return {
        labelPosition: 'top',
        formLabelAlign: {
          Phone: '',
          Email: '',
          Address: ''
        }
      };
    },
    methods: {
      onSubmit() {
        const params = {
          phone: this.formLabelAlign.Phone,
          email: this.formLabelAlign.Email,
          address: this.formLabelAlign.Address
        }
        let config = {
            headers: {
              token: params
          }
        }
        var token = getCookie('token');
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;//邮箱正则表达式
        var num = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;//手机正则表达式
        if (token == null || token == '' || token == undefined ) {
          this.$confirm('Please login first', {
              dangerouslyUseHTMLString: true,
              showCancelButton:false,
              showClose: false
          })
         .then(()=>{
           this.formLabelAlign = {}
         })

        } else if (!num.test(this.formLabelAlign.Phone)) {
            this.$alert('The phone format is incorrect', {
                  dangerouslyUseHTMLString: true,
                  showCancelButton:false,
                  showClose: false
            });
        } else if (!reg.test(this.formLabelAlign.Email)) {
            this.$alert('The mailbox format is incorrect', {
                  dangerouslyUseHTMLString: true,
                  showCancelButton:false,
                  showClose: false
            });
        } else if (this.formLabelAlign.Address == '') {
            this.$alert('The address is null', {
                  dangerouslyUseHTMLString: true,
                  showCancelButton:false,
                  showClose: false
            });
        } else {
          var url = 'contact';
          this.$http
              .post(url,params,config)
              .then(res=>{
                console.log(res)
                this.$alert('Submit successfully', {
                      dangerouslyUseHTMLString: true,
                      showCancelButton:false,
                      showClose: false
                })
                .then(()=>{
                  this.formLabelAlign = {}
                })
              })

        }
      }
    }
}
</script>

<style scoped>
form.el-form.el-form--label-top {
    width: 40%;
    margin: 0 auto;
    margin-top: 80px;
}
.el-button--primary {
    color: #FFF;
    background-color: coral;
    border-color: coral;
    width: 200px;
}
i.el-icon-d-arrow-right.icon {
    color: coral;
    font-size: 28px;
}
</style>


