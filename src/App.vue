<template>
  <div class="ibody">
    <vHeader :seller="seller"></vHeader>
    <div class="tab">
      <div class="tab-item">
          <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
          <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vHeader from "./components/header/header.vue";
import {urlParse} from '../public/js/util';
export default {
  data () {
    return {
      seller: {
        id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.data;
        if (response.errno === 0) {
            this.seller = Object.assign({}, this.seller, response.data);
        }
    })
  },
  components: {
    vHeader
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ibody 
  .tab 
    display flex
    width 100%
    height 40px
    line-height 40px
    border-bottom 1px solid rgba(7, 17, 27 .1)
    .tab-item 
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.active
          color rgb(240, 20, 20)
</style>
