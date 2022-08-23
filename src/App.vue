<template>
  <div class="wrap">
    <GoTOP />
    <MobileMenu />
    <FixMenu/>
    <Header/>
    <Visual/>
    <Item/>
    <Bevarage/>
    <Franchiser/>
    <SNS/>
    <Footer/>
  </div>
</template>

<script>
  import GoTOP from '@/components/GoTop.vue'
  import MobileMenu from '@/components/MobileMenu.vue'
  import FixMenu from '@/components/FixMenu.vue'
  import Header from '@/components/HeaderView.vue'
  import Visual from '@/components/VisualView.vue'
  import Item from '@/components/ItemView.vue'
  import Bevarage from '@/components/BevarageView.vue'
  import Franchiser from '@/components/FranchiserView.vue'
  import SNS from '@/components/SNSView.vue'
  import Footer from '@/components/FooterView.vue'
  

  export default {
    components: {
      GoTOP,
      MobileMenu,
      FixMenu,
      Header,
      Visual,
      Item,
      Bevarage,
      Franchiser,
      SNS,
      Footer
    },

    setup() {
      return {}
    }
  }
</script>

<style>
@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  vertical-align: top;
  border: 0;
}

html {
  font-size: 16px;
  overflow-x: hidden;
}


body {
  font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 1.6;
  color: #888;
  overflow-x: hidden;
}

/* 공통(재사용) */
.inner {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* float를 해제 */
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}

/* layout */
.wrap {
  position: relative;
  display: block;
}
</style>