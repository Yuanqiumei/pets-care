<template>
    <div class="show">
        <div class="container">
            <h3 class="agileits-title">File download</h3>
            <div class="showDownFile">
              <div class="showFile"  v-for="(item,index) in file" :key="index">
                <img class="file" :src="item.img" alt="">
                <button class="download" @click="Download(item.file)">Download</button>
              </div>
            </div>
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
      ],
      file: [
        {
          img: require('../../assets/images/file.png'),
          file: 'file.png'
        },
        {
          img: require('../../assets/images/file2.png'),
          file: 'file2.png'
        }
      ]
    };
  },
  methods: {
    Download(file) {
      var url = 'http://localhost:8080/SpringmvcMybatis/download?fileName=' + file;
      window.location.href = url
    //   this.$http
    //       .get(url)
    //       .then( res => {
    //         // window.location.href = url
    //           // let blob = new Blob([res], { type: 'application/vnd.*' })//定义文件后缀名
    //           // let downloadElement = document.createElement('a')//插入一个a标签
    //           // let href = URL.createObjectURL(blob)//创建a标签的url
    //           // downloadElement.href = href //赋值
    //           // downloadElement.download = file //自定义文件名，此处默认文件名
    //           // document.body.appendChild(downloadElement)
    //           // downloadElement.click()//下载
    //           // document.body.removeChild(downloadElement)
    //           // window.URL.revokeObjectURL(href)
    //       })
    }
  },
  created() {

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
.showDownFile {
  display: flex;
}
.showFile {
  width: 50%;
  text-align: center;
  margin: 25px;
  clear: both;
}
.file {
  width: 90%;
  height: 230px;
  vertical-align: middle;
  border: 0;
}
.download {
  background-color: aquamarine;
  padding: 12px;
  outline: none;
  border: oldlace;
  font-size: 16px;
  letter-spacing: 0.78px;
  font-weight: 600;
  width: 100px;
  margin: 0 auto;
  border-radius: 12px;
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


