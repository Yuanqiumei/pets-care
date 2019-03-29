<template>
  <div class="Footer">
    <div class="copy-w3right">
      <div class="container">
        <div class="top-nav bottom-w3lnav">
          <ul>
            <li 
                    class="linkTo"
                    v-for="(item,index) in items"
                    :key="index"
                    :class="{active:istrue==index}"
                    @click="istrue=index"
                  ><router-link :to="{name:item.routerName}">{{item.name}}</router-link></li>
          </ul>
        </div>
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
      items: [
        {
          routerName: 'Home',
          name: "Home"
        },
        {
          routerName: 'About',
          name: "About"
        },
        {
          routerName: 'Show',
          name: "Show"
        },
        {
          routerName: "Careful",
          name: "Careful"
        },
        {
          routerName: "Contact",
          name: "Contact"
        }
      ]
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.top-nav.bottom-w3lnav {
  background: none;
  border-bottom: 1px solid #404040;
  margin-bottom: 2em;
  padding-bottom: 2em;
}
.top-nav {
  z-index: 999;
  background: rgba(6, 6, 6, 0.47);
  padding: 1em 0;
}
ul {
  margin: 0;
  padding: 0;
}
.top-nav ul li:nth-child(1) {
  margin: 0;
}
.top-nav ul li {
  margin: 0 0 0 1em;
  display: inline-block;
}
.top-nav ul li a {
  text-decoration: none;
  letter-spacing: 4px;
  font-size: 1.1em;
  color: #fff;
  position: relative;
  font-weight: 400;
  padding: 0.5em 1.1em;
  display: inline-block;
  border-radius: 2px;
}
.top-nav ul li a:hover {
  color: #ff5722;
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
