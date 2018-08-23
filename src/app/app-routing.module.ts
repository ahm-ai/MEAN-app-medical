// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.path/landing.component';
import { DashboardComponent } from './dashboard.path/dashboard.component';
import { LoginComponent } from './reusable.components/login/login.component';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'dashboard' } },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },
  // { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes);



// const routes: Routes = [
//   {
//     path: "",
//     component: LandingComponent,
//     pathMatch: 'full',
//   },
//   {
//     path: "dashboard",
//     component: DashboardComponent,
//     pathMatch: 'full',

//     // This will load the pages module with all the child routes
//     // This is what is called Lazy loading
//     // loadChildren: './dashboard/dashboard.module#DashboardModule'
//   },
//   {
//     path: "dashboard/home",
//     component: HomeComponent,
//     pathMatch: 'full',

//     // This will load the pages module with all the child routes
//     // This is what is called Lazy loading
//     // loadChildren: './dashboard/dashboard.module#DashboardModule'
//   },
//   // { path: '**', component: LandingComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
