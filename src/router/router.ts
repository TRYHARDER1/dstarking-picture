import HomePage from '@/pages/HomePage.vue'
import { h } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import UserLoginPage from '@/pages/user/UserLoginPage.vue'
import ACCESS_ENUM from '@/access/accessEnum.ts'
import UserRegisterPage from '@/pages/user/UserRegisterPage.vue'
import UserManagerPage from '@/pages/admin/UserManagerPage.vue'
import PictureManagerPage from '@/pages/admin/PictureManagerPage.vue'
import AddPicturePage from '@/pages/AddPicturePage.vue'
import PictureDetailPage from '@/pages/PictureDetailPage.vue'
import AddPictureBatchPage from '@/pages/admin/addPictureBatchPage.vue'
import SpaceManagerPage from '@/pages/admin/SpaceManagerPage.vue'
import AddSpacePage from '@/pages/AddSpacePage.vue'
import MySpacePage from '@/pages/MySpacePage.vue'
import SpaceDetailPage from "@/pages/SpaceDetailPage.vue";
import SearchPicturePage from "@/pages/SearchPicturePage.vue";
import SpaceAnalyzePage from "@/pages/SpaceAnalyzePage.vue";
import SpaceUserManagerPage from "@/pages/admin/SpaceUserManagerPage.vue";

const routes = [
  {
    path: '/',
    name: '主页',
    component: HomePage,
    meta: {
      icon: () => h(HomeOutlined),
    },
  },
  {
    path: '/add_picture',
    name: '创建图片',
    component: AddPicturePage,
  },
  {
    path: '/add_space',
    name: '创建空间',
    component: AddSpacePage,
  },
  {
    path: '/my_space',
    name: '我的空间',
    component: MySpacePage,
    meta: {
      show: false
    },
  },
  {
    path: '/user/login',
    name: '用户登录',
    component: UserLoginPage,
    meta: {
      show: false,
    },
  },
  {
    path: '/user/register',
    name: '用户注册',
    component: UserRegisterPage,
    meta: {
      show: false,
    },
  },
  {
    path: '/admin/manager',
    name: '用户管理',
    component: UserManagerPage,
    meta: {
      authCheck: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: '/admin/spaceManager',
    name: '空间管理',
    component: SpaceManagerPage,
    meta: {
      authCheck: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: '/admin/pictureManager',
    name: '图片管理',
    component: PictureManagerPage,
    meta: {
      authCheck: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: '/add_picture/batch',
    name: '批量创建图片',
    component: AddPictureBatchPage,
    meta: {
      authCheck: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: '/picture/:id',
    name: '图片详情页',
    component: PictureDetailPage,
    props: true,
    meta: {
      show: false,
    },
  },
  {
    path: '/space/:id',
    name: '空间详情',
    component: SpaceDetailPage,
    props: true,
    meta: {
      show: false,
    },
  },
  {
    path: '/space_analyze',
    name: '空间分析',
    component: SpaceAnalyzePage,
  },
  {
    path: '/spaceUserManage/:id',
    name: '空间成员管理',
    component: SpaceUserManagerPage,
    props: true,
  },
  {
    path: '/search_picture',
    name: '图片搜索',
    component: SearchPicturePage,
    meta: {
      show: false,
    }
  }
]

export { routes }
