<template>
    <div class="link">
        <div class="w3-agilesale welcome">
            <div class="container">
                <h3 class="agileits-title two">Pet Adoption. Be Part of Something <span>Beautiful!</span></h3>
                <router-link to="/contact" class="button button-isi"><span>Contact Us </span><i class="icon glyphicon el-icon-d-arrow-right
"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Link'
}
</script>

<style scoped>
.w3-agilesale.welcome {
    text-align: center;
    background: url('../assets/images/bg1.jpg')no-repeat center 0px;
    background-size: cover;
    height: 320px;
}
.container {
    width: 92%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
h3.agileits-title.two {
    color: #fff;
}
h3.agileits-title {
    font-size: 3em;
    color: #333;
    text-align: center;
    letter-spacing: 4px;
    line-height: 1.6em;
    padding-top: 80px;
}
h3 {
    margin: 0;
    font-family: 'Limelight', cursive;
}
span {
    color: #FF5722;
}
.button {
    display: inline-block;
    text-decoration: none;
    margin-top: 1.5em;
    padding: 0.6em 1.5em;
    background: none;
    color: #FF5722;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    border: 1px solid #FF5722;
    overflow: hidden;
    font-size: 1em;
    transition: .6s all;
    transition-delay: .3s;
    border-radius: 3px;
}
.button-isi::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 100%;
    margin: -15px 0 0 1px;
    width: 30px;
    height: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #FF5722;
    -webkit-transform-origin: 100% 50%;
    -moz-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scale3d(1, 2, 1);
    -moz-transform: scale3d(1, 2, 1);
    -o-transform: scale3d(1, 2, 1);
    -ms-transform: scale3d(1, 2, 1);
    transform: scale3d(1, 2, 1);
    -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
    -moz-transition: transform 0.5s, opacity 0.5s;
    transition: transform 0.5s, opacity 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
    -moz-transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
    transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
}
</style>


