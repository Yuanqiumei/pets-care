<template>
    <div class="tip">
        <div class="welcome agileits">
            <div class="container">
                <div class="welcome-w3lsrow">
                    <div class="col-md-5 col-sm-5 w3welcome-left">
                        <div class="w3welcome-text">
                            <h5 class="w3l-subtitle">Who We Are</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at placerat ante. Praesent nulla nunc, pretium dapibus
                                efficitur in, auctor eget elit. Lorem ipsum dolor sit amet</p>
                            <a href="single.html" class="button button-isi"><span>Read More</span><i class="icon glyphicon el-icon-arrow-right"></i></a>
                        </div>
                    </div>
                    <img class="col-md-7 col-sm-7 w3welcome-img" src="@/assets/images/img1.jpg" alt="img1">
                    
                </div>
                <div class="welcome-w3lsrow2">
                    <div class="col-sm-3 team-grid">
                        <div class="flip-container">
                            <div class="flipper">
                                <div class="front">
                                    <img src="@/assets/images/img2.jpg" alt="" />
                                </div>
                                <div class="back">
                                    <h4>JION</h4>
                                    <p>US</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 team-grid">
                        <div class="flip-container">
                            <div class="flipper">
                                <div class="front">
                                    <img src="@/assets/images/img3.jpg" alt="" />
                                </div>
                                <div class="back">
                                    <h4>JION</h4>
                                    <p>US</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 team-grid">
                        <div class="flip-container">
                            <div class="flipper">
                                <div class="front">
                                    <img src="@/assets/images/img4.jpg" alt="" />
                                </div>
                                <div class="back">
                                    <h4>JION</h4>
                                    <p>US</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 team-grid">
                        <div class="flip-container">
                            <div class="flipper">
                                <div class="front">
                                    <img src="@/assets/images/img5.jpg" alt="" />
                                </div>
                                <div class="back">
                                    <h4>JION</h4>
                                    <p>US</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Tip',
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.tip {
    height: 970px;
}
.welcome {
    padding: 5em 0;
}
.container {
    width: 92%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.welcome-w3lsrow {
    padding: 0em;
    display: flex;
    flex-direction: row;
}
.col-md-5 {
    width: 41.66666667%;
    background: #151414;
    float: left;
    position: relative;
    min-height: 1px;
    text-align: initial;
    padding-right: 15px;
    padding-left: 15px;
}
.w3welcome-text {
    padding: 8em 2em 2em 2em;
}
h5.w3l-subtitle {
    font-size: 3em;
    color: #fff;
    margin-bottom: 0.3em;
}
p {
    font-size: 1em;
    color: #555;
    line-height: 1.9em;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 0;
}
.button {
    display: inline-block;
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
    border-radius: 50%;
    background: #FF5722;
}
.button-isi>span {
    padding-right: 0.8em;
}
.button-isi .icon {
    vertical-align: middle;
    top: -1px;
    font-size: .8em;
}
.col-md-7 {
    width: 58.33333333%;
    float: left;
}
.w3welcome-left {
    padding: 0;
    width: 100%;
}
.w3welcome-text {
    padding: 4em 2em 2em 2em;
}
h5.w3l-subtitle {
    font-size: 2.5em;
}
.w3welcome-img {
    min-height: 23em;
    width: 100%;
}
.welcome-w3lsrow2 {
    margin-top: 3em;
}
.col-sm-3 {
    width: 22%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 20px;
    padding-left: 15px;
}
.flip-container, .back {
    width: 100%;
    height: 383px;
}
.flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
}
.front {
    z-index: 2;
    background: #000;
}
.front, .back {
    /* backface-visibility: hidden; */
    /* transition: 0.6s; */
    /* transform-style: preserve-3d; */
    position: absolute;
    top: 0;
    left: 0;
}
.front img {
    width: 100%;
}
img {
    vertical-align: middle;
    border: 0;
}
.back {
    background: #ff5722;
    text-align: center;
    height: 313px;
    padding-top: 90px;
}
.front:hover {
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: 0.6s;
}
.back:hover {
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: 0.6s;
}

</style>


