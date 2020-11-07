import ACDiscover from 'pages/discover'
import ACFriend from 'pages/friend'
import ACMine from 'pages/mine'
import ACDownLoad from 'pages/download'



const router = [
  {
    path: '/',
    exact: true,
    component: ACDiscover
  },
  {
    path: '/discover',
    exact: true,
    component: ACDiscover
  },
  {
    path: '/friend',
    component: ACFriend
  },
  {
    path: '/mine',
    component: ACMine
  },
  {
    path: '/download',
    component: ACDownLoad
  }
];


export default router;