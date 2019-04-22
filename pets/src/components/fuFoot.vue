<template>
    <div class="fuFoot">
        <div class="subscribe wthree-sub">
		<div class="container">
			<h4>Submit your views in a documented manner</h4>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://localhost:8080/SpringmvcMybatis/uploadFile"
        :on-success="handleSuccess"
        :on-error="handleFail"
        :show-file-list="false"
        :auto-upload="true">
        <el-button slot="trigger" size="small" type="primary">Choose your File...</el-button>
      </el-upload>
			<div class="w3lsfoter-icons social-icon">
				<a href="#" class="social-button twitter"><i class="el el-icon-star-off"></i></a>
                <a href="#" class="social-button facebook"><i class="el el-icon-circle-check"></i></a>
                <a href="#" class="social-button google"><i class="el el-icon-news"></i></a>
                <a href="#" class="social-button dribbble"><i class="el el-icon-rank"></i></a>
			</div>
		</div>
	</div>
    </div>
</template>

<script>


export default {
    name: 'fuFoot',
    data() {
      return {
        file:''
      }
    },
    methods: {
      handleSuccess(file, fileList) {
        this.$confirm('Upload Successfully', {
            dangerouslyUseHTMLString: true,
            showCancelButton:false,
            showClose:false
        })
      },
      handleFail(err, file, fileList) {
        this.$confirm('Upload Failly', {
            dangerouslyUseHTMLString: true,
            showCancelButton:false,
            showClose:false
        })
      }
    }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.subscribe {
    text-align: center;
    background: #292929;
    padding-bottom: 2em;
}
.container {
    width: 92%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.subscribe h4 {
    font-size: 2.8em;
    color: #fff;
    font-weight: 300;
}
h4 {
    margin: 0;
    font-family: 'Limelight', cursive;
    padding-top: 90px;
}
h4, .h4 {
    font-size: 18px;
}
.upload-demo {
    margin: 25px;
}
button.el-button.el-button--primary.el-button--small {
    background-color: #FF5722;
    width: 200px;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: 1px solid white;
    letter-spacing: 1px;
}

.subscribe form {
    width: 50%;
    margin: 3em auto 2em;
    display: flex;
}
.subscribe form:hover input[type="file"] {
    border-color: #FF5722;
}
.subscribe input[type="file"] {
    width: 75%;
    padding: .8em 1em;
    font-size: 1em;
    /* opacity: 0; */
    float: left;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    border-right: none;
    background: none;
    -webkit-appearance: none;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    transition: 0.5s all;
    letter-spacing: 1px;
}
.subscribe form:hover input[type="submit"] {
    background-color: #FF5722;
    border-color: #FF5722;
    color: #fff;
}
.subscribe input[type="submit"] {
    float: left;
    color: #FF5722;
    font-size: 1em;
    outline: none;
    padding: .8em 2em;
    border: 1px solid #fff;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    transition: 0.5s all;
    -webkit-appearance: none;
    background: #fff;
    font-weight: 600;
    letter-spacing: 1px;
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
</style>


