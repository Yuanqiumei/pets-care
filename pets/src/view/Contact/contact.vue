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
        console.log('submit!');
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


