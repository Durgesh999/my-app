import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { CartComponent } from './cart/cart.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { VehicleService } from './vehicle.service';
import { VihicleComponent } from './vihicle/vihicle.component';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemeComponent } from './meme/meme.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateStudentsDetailsComponent } from './create-students-details/create-students-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { UserComponent } from './user/user.component';
import { NotifyGuard } from './notify.guard';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCompanyComponent } from './about-company/about-company.component';



const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'dashboard', canActivate:[AuthenticationGuard], component: DashboardComponent, children:[
  {path:'welcome', component: WelcomeComponent},
  {path:'home', component:HomeComponent},
  {path:'data-binding', component: DataBindingComponent},
  {path:'calculator',component: CalculatorComponent},
  {path:'rectangle', component: RectangleComponent},
  {path:'circle', component: CircleComponent},
  {path:'Bmi',component: BMIComponent},
  {path:'my-apps', component: MyAppsComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'pipes', component:PipesComponent},
  {path: 'employees', component:EmployeesComponent},
  {path: 'Event-Registration',component:EventRegistrationComponent},
  {path: 'cart', component:CartComponent},
  {path: 'flipkart', component:FlipkartComponent},
  {path:'employee-data', component:EmployeeDataComponent},
  {path: 'vehicle', component:VihicleComponent},
  {path:'account',component:AccountComponent},
  {path:'amazon', component:AmazonComponent},
  {path:'mail',component:MailComponent},
  {path:'activity', component:ActivityComponent},
  {path:'meme',component:MemeComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'student',component:StudentComponent},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  {path:'create-student-details',component:CreateStudentsDetailsComponent},
  {path:'user',canDeactivate:[NotifyGuard], component:UserComponent},
  {path:'create-company', component:CreateCompanyComponent},
  {path:'parent', component:ParentComponent},
  {path:'calculator2', component:Calculator2Component},
  {path: 'rating', component:RatingComponent},
  {path:'about-company', component: AboutCompanyComponent},
  
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  }
  

]},
{path:'',component:LoginComponent},
{path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
