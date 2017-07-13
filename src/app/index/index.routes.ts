import {RouterModule} from '@angular/router';
import {MyVisualScreenComponent} from "./my-visual-screen/my-visual-screen.component";
import {AllVisualScreenComponent} from "./all-visual-screen/all-visual-screen.component";
import {HeaderNavComponent} from "./header-nav/header-nav.component";


export const indexRoutes = [
  // {
  //   path: '',
  //   redirectTo: 'posts',
  //   pathMatch: 'full'
  // },
  // {
  //   path: "echart",
  //   component: ChartComponent
  // },
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomeModule'
  // },
  // {
  //   path:'index',
  //   component:HeaderNavComponent,
  // },
  {
    path: '',
    redirectTo: 'my',
    pathMatch: 'full'
  },
  // {
  //   path:'/index/my',
  //   component:MyVisualScreenComponent,
  // },
  {
    path:'my',
    component:MyVisualScreenComponent,
  },
  {
    path:'share',
    component:AllVisualScreenComponent,
  }
];
