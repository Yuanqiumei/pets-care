<template>
    <div class="register">
        <div class="w3-agilesale welcome">
            <div class="regist">
                <h3>Register</h3>
            </div>
            <div class="container">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm login-container">
                    <el-form-item label="email" prop="name">
                        <el-input class="input" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="password" prop="pass">
                        <el-input  class="input" type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="text" @click="cancel">cancel</el-button>
                        <el-button type="submit" @click="submitForm">register</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            ruleForm: {
                name: '',
                pass: ''
            },
            rules: {
                name: [
                { required: true, message: 'Please write email', trigger: 'blur' }
                ],
                pass: [
                { required: true, message: 'Please write password', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        cancel() {
            this.$router.go(-1)
        },
        submitForm() {
            alert('success');
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.w3-agilesale.welcome {
    text-align: center;
    background: url('../assets/images/g6.jpg')no-repeat center 0px;
    background-size: cover;
}
.container {
    width: 92%;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 300px;
}
.regist {
    padding-top: 200px;
    color: brown;
    font-size: 32px;
    letter-spacing: 4px;
}
.input {
    width: 50%;
}
.el-button--text {
    color: #409EFF;
    background: white;
    padding-left: 0;
    padding-right: 0;
    width: 80px;
}
.el-button+.el-button {
    margin-left: 10px;
    width: 80px;
    color: #fff;
    background-color: darkorange;
    border: 1px solid darkorange;
}
.el-form-item__label {
    text-align: right;
    font-size: 18px;
    color: currentColor;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}

</style>


