<template>
    <div class="aboutContext">
        <div class="about agileinfo">
            <div class="container">
                <h3 class="agileits-title">About Us</h3>
                <div class="markets-grids">
                    <div class="col-md-6 about-w3left">
                        <h4>Sed tincidunt <br> velit fermentum eget</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem sed velit fermentum lobortis, eget placerat
                            mauris sed lectus tellus. Fusce eu semper lacus, sodales id elit a, feugiat porttitor nulla. Sed porta magna vitae
                            nisl vulputate lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem sed velit fermentum
                            lobortis, eget placerat mauris sed lectus tellus. Fusce eu semper lacus, sodales id elit a feugiat porttitor nulla.</p>

                        <a href="single.html" class="button button-isi"><span>Read More</span><i class="icon glyphicon glyphicon-arrow-right"></i></a>
                    </div>
                    <div class="col-md-6 about-w3right">
                        <img src="@/assets/images/g4.jpg" alt="" />
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AboutContext'
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.aboutContext {
    padding: 5em 0;
}
.container {
    width: 92%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
h3.agileits-title {
    font-size: 3em;
    color: #333;
    text-align: center;
    letter-spacing: 4px;
    line-height: 1.6em;
    margin: 0;
    font-family: 'Limelight', cursive;
}
.markets-grids {
    margin-top: 3em;
    display: flex;
    flex-direction: row;
}
.col-md-6 {
    width: 50%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.about h4 {
    font-size: 2em;
    color: #FF5722;
    margin: 0;
    margin-bottom: 26px;
    line-height: 1.5em;
    letter-spacing: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
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
.button-isi>span {
    padding-right: 0.8em;
}
.button-isi .icon {
    vertical-align: middle;
    top: -1px;
    font-size: .8em;
}
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
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
    transform-origin: 100% 50%;
    transform: scale3d(1, 2, 1);
    transition: transform 0.5s, opacity 0.5s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
}
.about-w3right img {
    width: 100%;
}
</style>


