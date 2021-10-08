<template>
  <div id="swiper" :ref="swiperRef">
    <div class="swiper" draggable="false">
      <slot></slot>
    </div>
    <ol>
      <li></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      swiper: null,
      swiperItemLength: null,
      swiperItemWidth: null,
      swiperItemHeight: null,
      itemIndex: 1,
      itemGoIndex: 2,
      timer: null,
      timesleep: 2000,
      dotColor_b: "white",
      dotColor: "red",
    };
  },
  props: {
    swiperRef: {
      type: String,
      default: "swiper",
    },
  },
  methods: {
    //元素移动函数
    animate(obj, target, callback) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function () {
        let step = (target - obj.offsetLeft) / 2;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + "px";
        // console.log(111, obj.offsetLeft, target);
        if (obj.offsetLeft == target) {
          clearInterval(obj.timer);
          callback && callback();
        }
      }, 30);
    },
    //创建指示点
    creatDot() {
      const win = this.$refs[this.swiperRef];
      this.swiper = win.querySelector('.swiper')
      let ol = win.querySelector("ol");
      let li = win.querySelector("li");
      for (let i = 0; i < this.swiper.children.length - 1; i++) {
        ol.appendChild(li.cloneNode(true));
      }
    },
    //初始化Swiper
    swiperInit(callback) {
      const win = this.$refs[this.swiperRef];
      this.swiper = win.querySelector('.swiper')
      const swiperitem = this.swiper.querySelectorAll(".swiperitem");
      const first = swiperitem[0].cloneNode(true);
      const last = swiperitem[swiperitem.length - 1].cloneNode(true);
      this.creatDot();
      const ol = this.swiper.parentElement.querySelector("ol");
      for (let item of ol.children) {
        item.style.backgroundColor = this.dotColor_b;
      }
      ol.children[0].style.backgroundColor = this.dotColor;

      this.swiper.insertBefore(last, swiperitem[0]);
      this.swiper.appendChild(first);
      this.swiper.style.width = swiperitem[0].offsetWidth * (swiperitem.length + 2) + "px";
      this.swiper.style.left = -swiperitem[0].offsetWidth + "px";
      this.swiperItemWidth = swiperitem[0].offsetWidth;
      this.swiperItemHeight = swiperitem[0].offsetHeight;
      this.swiperItemLength = swiperitem.length + 2;

      callback && callback();
    },
    //获取移动距离
    getMoveValue(goIndex) {
      let count = goIndex * this.swiperItemWidth;
      return -count;
    },
    //移动
    goIndexItem(index) {
      this.itemGoIndex = index;
      //是否处于移动状态
      if (this.itemIndex == this.itemGoIndex) {
        return;
      }
      if (!this.swiper) return;
      const ol = this.swiper.parentElement.querySelector("ol");
      this.animate(this.swiper, this.getMoveValue(index), () => {
        this.itemIndex = this.itemGoIndex;
        for (let item of ol.children) {
          item.style.backgroundColor = this.dotColor_b;
        }
        if (this.itemIndex >= this.swiperItemLength - 1) {
          this.swiper.style.left =
            this.getMoveValue(1) + "px";
          ol.children[0].style.backgroundColor = this.dotColor;
          this.itemIndex = 1;
        } else if (this.itemIndex == 0) {
          ol.children[ol.children.length - 1].style.backgroundColor =
            this.dotColor;
          this.swiper.style.left =
            this.getMoveValue(this.swiperItemLength - 2) + "px";
          this.itemIndex = this.swiperItemLength - 2;
        } else {
          ol.children[this.itemIndex - 1].style.backgroundColor = this.dotColor;
        }
      });
    },
    next() {
      this.goIndexItem(this.itemIndex + 1);
    },
    back() {
      this.goIndexItem(this.itemIndex - 1);
    },
    //监听拖拽事件
    EventListener() {
      let page_x;
      let page_m_x;
      this.timer = setInterval(() => {
        this.next();
      }, this.timesleep);

      this.swiper.addEventListener("mouseover", (even) => {
        clearInterval(this.timer);
      });
      this.swiper.addEventListener("mouseleave", (even) => {
        this.timer = setInterval(() => {
          this.next();
        }, this.timesleep);
      });
      this.swiper.addEventListener("touchstart", (even) => {
        clearInterval(this.timer);
        page_x = even.changedTouches[0].clientX;
      });
      this.swiper.addEventListener("touchend", (even) => {
        if (page_x - even.changedTouches[0].clientX > 10) {
          this.goIndexItem(this.itemIndex + 1);
        }
        if (page_x - even.changedTouches[0].clientX < 10) {
          this.goIndexItem(this.itemIndex - 1);
        }
        this.timer = setInterval(() => {
          this.next();
        }, this.timesleep);
      });
      this.swiper.addEventListener("touchmove", (even) => {
        page_m_x = even.changedTouches[0].clientX;
        this.animate(this.swiper, this.swiper.offsetLeft - page_x + page_m_x);
      });
    },
  },
  mounted() {
    this.swiperInit(this.EventListener);
  },
};
</script>

<style scoped>
#swiper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper {
  position: relative;
}
ol {
  position: absolute;
  display: flex;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
li {
  list-style: none;
  width: 8px;
  height: 8px;
  margin: 0 8px;
  border-radius: 50%;
}
</style>