  import {RouterModule} from '@angular/router';

  import {AppComponent} from './app.component';
  import {LoginComponent} from "./user/login/login.component";
  import {HeaderNavComponent} from "./index/header-nav/header-nav.component";
  import {MyVisualScreenComponent} from "./index/my-visual-screen/my-visual-screen.component";
  import {AllVisualScreenComponent} from "./index/all-visual-screen/all-visual-screen.component";

  export const appRoutes = [
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
      path:'index',
      component:HeaderNavComponent,
      children:[
      //  {
      //   path:'',
      //   redirectTo:'my',
      //   pathMatch:'full',
      // },{
      //   path:'my',
      //   component:MyVisualScreenComponent,
      // },{
      //   path:'share',
      //   component:AllVisualScreenComponent,
      // }
        {
          path:'',
          loadChildren:'./index/index.module#IndexModule',
        }
      ],
    },
    // {
    //   path:'index',
    //   component:HeaderNavComponent,
    // },
    // {
    //   path:'',
    //   redirectTo:'login',
    //   pathMatch:'full',
    // },
    {
      path:'login',
      component:LoginComponent,
    },
  ];
