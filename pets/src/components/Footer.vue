<template>
  <div class="Footer">
    <div class="copy-w3right">
      <div class="container">
      </div>
      <div>@YOU  Pet empowerment, pet love.</div>
    </div>
    <div class="goTop" v-show="goTopShow" @click="goTop">
        <i class="el-icon-upload2 goTopIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      scrollTop: "",
      goTopShow: false,
      istrue: 0,
    };
  },
  watch: {
    scrollTop(val) {
      if (this.scrollTop > 200) {
        this.goTopShow = true;
      } else {
        this.goTopShow = false;
      }
    }
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop > 100) {
        this.goTopShow = true;
      }
    },
    goTop() {
      let timer = null,
        _that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 100;
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
          _that.goTopShow = false;
        }
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>


<style scoped>
.linkTo:link,
.linkTo:visited {
  color: #ffffff;
  text-decoration: none;
  display: block;
  background-color: transparent;
}
.copy-w3right {
  background: #191919;
  padding: 1.5em 0;
  text-align: center;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.goTop {
    position: fixed;
    right: 40px;
    bottom: 100px;
    line-height: 3;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: bisque;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.goTop:hover .goTopIcon {
    color: #ff7900;
}
.goTopIcon {
    font-size: 30px;
    color: red;
}
</style>
