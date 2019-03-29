<template>
    <div class="show">
        <div class="container">
            <h3 class="agileits-title">Our Show</h3>
            <div class="gallery-agileinfo" v-for="(item,index) in list" :key="index">
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <a href="#" class="figure">
                        <img :src="item.img1" alt="" title="Pets Care Image"/> 
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail}}</p>
                        </div>
                    </a>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <a href="#" class="figure">
                        <img :src="item.img2" alt="" title="Pets Care Image"/> 
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail}}</p>
                        </div>
                    </a>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <a href="#" class="figure">
                        <img :src="item.img3" alt="" title="Pets Care Image"/> 
                        <div class="agile-figcaption">
                            <h4>{{item.title}}</h4>
                            <p>{{item.detail}}</p>
                        </div>
                    </a>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <a href="#" class="figure">
                        <img :src="item.img4" alt="" title="Pets Care Image"/> 
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail}}</p>
                        </div>
                    </a>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <a href="#" class="figure">
                        <img :src="item.img5" alt="" title="Pets Care Image"/> 
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail}}</p>
                        </div>
                    </a>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <a href="#" class="figure">
                        <img :src="item.img6" alt="" title="Pets Care Image"/> 
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail}}</p>
                        </div>
                    </a>
                </div>
                <div class="clearfix"> </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Show',
    data() {
        return {
            list: [
                {
                    img1: require('../../assets/images/g1.jpg'),
                    img2: require('../../assets/images/g2.jpg'),
                    img3: require('../../assets/images/g3.jpg'),
                    img4: require('../../assets/images/g4.jpg'),
                    img5: require('../../assets/images/g5.jpg'),
                    img6: require('../../assets/images/img1.jpg'),
                    title: 'Pet Care',
                    detail:'Foster care is to find a professional foster care center, foster environment is good for the physical and mental health of pets, rofessional care, so that you can travel carefree.'
                }
            ]
        }
    }
}
</script>

<style scoped>
@media (min-width: width 1120px) {}
@media (min-width: width 970px) {}
@media (min-width: width 750px) {}
a {
    text-decoration: none;
     transition: 0.5s all;
}
.show {
    padding: 5em 0;
}
.container {
    width: 100%;
    margin: 0 auto;
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
.w3gallery-grids {
    padding: 1em;
}
.col-sm-4, .col-xs-6 {
    width: 30.333%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    transition: o.6s;
    transform-style: preserve-3d;
}
img {
    width: 100%;
    vertical-align: middle;
    border: 0;
}
.gallery-agileinfo {
    width: 100%;
    padding: 15px;
}
.figure {
    z-index: 1;
    position: relative;
    display: inline-block;
    margin: 0px;
    max-width: 100%;
    background-color: #FF5722;
    color: #212121;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    cursor: pointer;
}
.figure img:hover {
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: 0.6s;
}
.agile-figcaption {
    z-index: -1;
    overflow: hidden;
    position: absolute;
}

</style>


