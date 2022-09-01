<template>
  <div class="wrap">
    <GoTOP />
    <MobileMenu :menudata="menuData" />
    <FixMenu />
    <Header :menudata="menuData" />
    <Visual />
    <Item />
    <Bevarage />
    <Franchiser />
    <SNS />
    <Footer />
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
  import {
    ref
  } from 'vue'


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
      //메뉴데이터
      const menuData = ref([]);
      //ref로 생성했다면, value로 받아줘야함
    
        // menuData.value =   ㅁㅁㅁ이것도 생략가능
      /* 이건 store.js로 옮겨버림  ㅁㅁㅁㅁ
      [{
          mainstr: '마시그래이',
          mainlink: '#',
          sub:[
            {substr:'회사소개',sublink:'#'},
            {substr:'연혁',sublink:'#'},
            {substr:'CEO인사말',sublink:'#'},
            {substr:'BI / 비전',sublink:'#'},
            {substr:'오시는길',sublink:'#'},
            ]
        },
        {
          mainstr: '메뉴',
          mainlink: '#',
          sub:[
            {substr:'신메뉴',sublink:'#'},
            {substr:'커피',sublink:'#'},
            {substr:'음료',sublink:'#'},
            {substr:'디저트',sublink:'#'},
            {substr:'MD상품',sublink:'#'}
            ]
        },
        {
          mainstr: '프랜차이즈',
          mainlink: '#',
          sub:[
            {substr:'가맹안내',sublink:'#'},
            {substr:'가맹절차',sublink:'#'},
            {substr:'매장인테리어',sublink:'#'},
            {substr:'커피 아카데미',sublink:'#'},
            {substr:'가맹상담신청',sublink:'#'}
            ]
        },
        {
          mainstr: '매장안내',
          mainlink: '#',
          sub:[
            {substr:'매장안내',sublink:'#'}
            ]
        },
        {
          mainstr: '공지사항',
          mainlink: '#',
          sub:[
            {substr:'공지사항',sublink:'#'},
            {substr:'이벤트',sublink:'#'}
            ]
        },
        {
          mainstr: '고객의소리',
          mainlink: '#',
          sub:[
            {substr:'FAQ',sublink:'#'},
            {substr:'Q&amp;A',sublink:'#'},
            {substr:'케이터링',sublink:'#'}
            ]
        }
      ];
      */

      return {
        menuData
      }
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