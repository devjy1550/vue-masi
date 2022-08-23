<template>
  <div>
    <!-- 모바일 메뉴 -->
    <a href="#" class="mb-bt">
      <span></span>
    </a>
    <!-- 모바일 가림막 -->
    <div class="mb-dim"></div>
    <!-- 모바일 메뉴내용 -->
    <div class="mb-wrap">

      <a href="#" class="mb-close"></a>

      <div class="mb-sns">
        <ul class="mb-sns-list clearfix">src
          <li><a href="#"><img v-bind:src="require('@/assets/images/sns_blog.png')" alt="blog"></a></li>
          <li><a href="#"><img v-bind:src="require('@/assets/images/sns_insta.png')" alt="instagram"></a></li>
          <li><a href="#"><img v-bind:src="require('@/assets/images/sns_facebook.png')" alt="facebook"></a></li>
        </ul>
      </div>

      <ul class="mb-menu">
        <li>
          <a href="#">마시그래이</a>
          <ul class="mb-submenu">
            <li><a href="#">회사소개</a></li>
            <li><a href="#">연혁</a></li>
            <li><a href="#">CEO인사말</a></li>
            <li><a href="#">BI / 비전</a></li>
            <li><a href="#">오시는길</a></li>
          </ul>
        </li>
        <li>
          <a href="#">메뉴</a>
          <ul class="mb-submenu">
            <li><a href="#">신메뉴</a></li>
            <li><a href="#">커피</a></li>
            <li><a href="#">음료</a></li>
            <li><a href="#">디저트</a></li>
            <li><a href="#">MD상품</a></li>
          </ul>
        </li>
        <li>
          <a href="#">프랜차이즈</a>
          <ul class="mb-submenu">
            <li><a href="#">가맹안내</a></li>
            <li><a href="#">가맹절차</a></li>
            <li><a href="#">매장인테리어</a></li>
            <li><a href="#">커피 아카데미</a></li>
            <li><a href="#">가맹상담신청</a></li>
          </ul>
        </li>

        <li>
          <a href="#">매장안내</a>
          <ul class="mb-submenu">
            <li><a href="#">매장안내</a></li>
          </ul>
        </li>

        <li>
          <a href="#">공지사항</a>
          <ul class="mb-submenu">
            <li><a href="#">공지사항</a></li>
            <li><a href="#">이벤트</a></li>
          </ul>
        </li>

        <li>
          <a href="#">고객의소리</a>
          <ul class="mb-submenu">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Q&amp;A</a></li>
            <li><a href="#">케이터링</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import $ from 'jquery';
  import {
    onMounted
  } from 'vue';

  export default {
    setup (){
            onMounted(() => {
              
            });
      return {}
    }

  }
</script>

<style scoped>
  /* 모바일 메뉴 */
  .mb-bt {
    position: fixed;
    left: 20px;
    top: 30px;
    display: none;
    width: 22px;
    height: 21px;
    z-index: 99997;
  }

  .mb-bt::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  .mb-bt span {
    position: absolute;
    left: 0;
    top: 9px;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  .mb-bt::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  /* 모바일 가림막 */
  .mb-dim {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    z-index: 9998;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }

  /* 모바일 메뉴내용 */
  .mb-wrap {
    position: fixed;
    left: -320px;
    top: 0;
    display: block;
    z-index: 99999;
    width: 320px;
    height: 100vh;
    background-color: #fff;
    transition: left 0.5s;
  }

  .mb-wrap-open {
    left: 0;
  }

  .mb-close {
    position: absolute;
    right: 20px;
    top: 20px;
    display: block;
    width: 22px;
    height: 21px;
    background: url('@/assets/images/btn_close2.png') no-repeat center;
    z-index: 9;
  }

  .mb-sns {
    position: relative;
    display: block;
    padding: 20px 20px;
  }

  .mb-sns-list {
    position: relative;
    display: block;
  }

  .mb-sns-list li {
    position: relative;
    display: blocyk;
    float: left;
    margin-right: 5px;
  }

  .mb-sns-list li a {
    position: relative;
    display: block;
  }

  .mb-menu {
    position: relative;
    display: block;
  }

  .mb-menu>li {
    position: relative;
    display: block;

    border-bottom: 1px solid #eee;
  }

  .mb-menu>li>a {
    position: relative;
    display: block;
    line-height: 50px;
    color: #222;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 500;
  }

  .mb-menu>li>a::after {
    content: '';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 13px;
    height: 9px;
    background: url('@/assets/images/lnb_bl.png') no-repeat center;
    transition: transform 0.5s;
  }

  .mb-icon-rot::after {
    transform: translateY(-50%) rotate(180deg) !important;
  }

  /* 포커스 유지 */
  .mb-menu-focus {
    color: #4abbc3 !important;
  }

  /* .mb-menu > li:hover > a {
  color: #4abbc3;
}
.mb-menu > li:hover .mb-submenu {
  display: block;
} */

  .mb-submenu {
    position: relative;
    display: none;
    background-color: #f2f2f2;
  }

  .mb-submenu li {
    position: relative;
    display: block;
  }

  .mb-submenu li a {
    position: relative;
    display: block;
    font-size: 13px;
    color: #888;
    line-height: 40px;
    padding-left: 30px;
  }

  @media all and (max-width: 700px) {
    .mb-bt {
      display: block;
    }
  }
</style>