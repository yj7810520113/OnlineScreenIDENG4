import {RouterModule} from '@angular/router';
import {MyVisualScreenComponent} from "./my-visual-screen/my-visual-screen.component";
import {AllVisualScreenComponent} from "./all-visual-screen/all-visual-screen.component";


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
  {
    path:'',
    redirectTo:'my',
    pathMatch:'full',
  },
  {
    path:'my',
    component:MyVisualScreenComponent,
  },
  {
    path:'share',
    component:AllVisualScreenComponent,
  }
];
