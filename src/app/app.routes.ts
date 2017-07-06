  import {RouterModule} from '@angular/router';

  import {AppComponent} from './app.component';

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
      loadChildren:'./index/index.module#IndexModule'
    }
  ];
