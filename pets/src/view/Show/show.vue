<template>
    <div class="show">
        <div class="container">
            <h3 class="agileits-title">Our Show</h3>
            <div class="gallery-agileinfo" v-for="(item,index) in list" :key="index">
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <div class="figure">
                        <div class="img">
                            <img :src="item.img1" alt="" title="Pets Care Image"/> 
                        </div>
                        <div class="agile-figcaption">
                            <h4>{{item.title}}</h4>
                            <p>{{item.detail}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <div href="#" class="figure">
                         <div class="img">
                            <img :src="item.img2" alt="" title="Pets Care Image"/> 
                        </div> 
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail1}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <div href="#" class="figure">
                         <div class="img">
                            <img :src="item.img3" alt="" title="Pets Care Image"/> 
                        </div> 
                        <div class="agile-figcaption">
                            <h4>{{item.title}}</h4>
                            <p>{{item.detail2}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <div href="#" class="figure">
                         <div class="img">
                            <img :src="item.img4" alt="" title="Pets Care Image"/> 
                        </div>
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail3}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <div href="#" class="figure">
                         <div class="img">
                            <img :src="item.img5" alt="" title="Pets Care Image"/> 
                        </div> 
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail4}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-6 w3gallery-grids">
                    <div href="#" class="figure">
                         <div class="img">
                            <img :src="item.img1" alt="" title="Pets Care Image"/> 
                        </div>
                        <div class="agile-figcaption">
                        <h4>{{item.title}}</h4>
                        <p>{{item.detail5}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      list: [
        {
          img1: require("../../assets/images/g1.jpg"),
          img2: require("../../assets/images/g2.jpg"),
          img3: require("../../assets/images/g3.jpg"),
          img4: require("../../assets/images/g4.jpg"),
          img5: require("../../assets/images/g5.jpg"),
          img6: require("../../assets/images/img1.jpg"),
          title: "Pet Care",
          detail:
            "Foster care is to find a professional foster care center, foster environment is good for the physical and mental health of pets, rofessional care, so that you can travel carefree.",
          detail1:"If dog food is different from foster care and you don't want to change it, you can bring your dog's favorite dog food (and health care products) and ask for the food you provide.",
          detail2:"Regular places to provide foster care services should be clean, well ventilated, adequate lighting in the room, heating equipment, carding and bathing services.",
          detail3:"To confirm the health status of pets on standby, and to divide responsibilities for infections, illnesses and accidental deaths caused by concealment of health status.",
          detail4:"Recognize the responsibilities and obligations of caregivers, such as regular feeding, regular walking, bathing according to agreement, emergency treatment, etc.",
          detail5:"Professional care, so that you can travel carefree, encounter special conditions, professional personnel and equipment will also be dangerous."
        }
      ]
    };
  }
};
</script>

<style scoped>
@media (min-width: width 1120px) {
}
@media (min-width: width 970px) {
}
@media (min-width: width 750px) {
}
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
  font-family: "Limelight", cursive;
}
.w3gallery-grids {
  padding: 1em;
  transition: o.6s;
  transform-style: preserve-3d;
}
.col-sm-4,
.col-xs-6 {
  width: 30.333%;
  float: left;
  height: 230px;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
img {
  width: 100%;
  height: 230px;
  vertical-align: middle;
  border: 0;
}
.gallery-agileinfo {
  width: 100%;
  padding: 15px;
}
.figure {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}
.img {
  z-index: 2;
  position: absolute;
  display: inline-block;
  margin: 0px;
  max-width: 100%;
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
  overflow: hidden;
  height: 230px;
  width: 100%;
  background-color: #ff5722;
}
h4,p {
    margin: 25px;
    text-align: center;
}
/* .agile-figcaption:hover {
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: 0.6s;
} */
</style>


