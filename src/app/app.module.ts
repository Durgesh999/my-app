import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { VihicleComponent } from './vihicle/vihicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemeComponent } from './meme/meme.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentComponent } from './student/student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateStudentsDetailsComponent } from './create-students-details/create-students-details.component';
import { UserComponent } from './user/user.component';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { OperationsComponent } from './operations/operations.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutUsModule } from './about-us/about-us.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    MyAppsComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeesComponent,
    EventRegistrationComponent,
    CartComponent,
    FlipkartComponent,
    EmployeeDataComponent,
    VihicleComponent,
    AccountComponent,
    AmazonComponent,
    MailComponent,
    ActivityComponent,
    MemeComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentComponent,
    VehicleDetailsComponent,
    CreateStudentsDetailsComponent,
    UserComponent,
    CapitalDirective,
    PricePipe,
    CreateCompanyComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    Calculator2Component,
    OperationsComponent,
    RatingComponent,
    AboutCompanyComponent,
    AboutCeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
