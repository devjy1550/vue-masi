import {createRouter, createWebHistory} from 'vue-router'
//router는 링크기능
// 모든 vue에서 사용하기위해 export진행할예정
//router라는 객체에다 기능을 담음
const router = createRouter({
  // 웹주소의 주소창내용을 깔끔하게(#없이보이도록)
  history : createWebHistory(),
  // {path: '/home', name: 'Home', component : HomeView}
  // {path: '/good', name: 'Gome', component : GoodView}
  routes : [
    {}
  ]

});

// 기능을 담아 export진행
export default router;