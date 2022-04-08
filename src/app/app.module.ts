import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OverlayModule } from "@angular/cdk/overlay";
import { CdkTreeModule } from "@angular/cdk/tree";
import { PortalModule } from "@angular/cdk/portal";
import { MatNativeDateModule } from "@angular/material/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatStepperModule } from "@angular/material/stepper";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTreeModule } from "@angular/material/tree";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSliderModule } from "@angular/material/slider"; 
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicMenuComponent } from './public/menu/public-menu/public-menu.component';
import { PublicFooterComponent } from './public/menu/public-footer/public-footer.component';
import { HomeComponent } from './public/home/home.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { IndustryComponent } from './public/industry/industry.component';
import { SolutionsComponent } from './public/solutions/solutions.component';
import { CareerComponent } from './public/career/career.component';
import { ResourcesComponent } from './public/resources/resources.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntegrationPageComponent } from './public/integration-page/integration-page.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';


const materialModules = [
  CdkTreeModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  MatGridListModule,
  MatDialogModule,
  MatSliderModule, 
  MatProgressBarModule,
  MatSlideToggleModule,
  MatBottomSheetModule,
  DragDropModule
];

@NgModule({
  declarations: [
    AppComponent,
    PublicMenuComponent,
    PublicFooterComponent,
    HomeComponent,
    AboutUsComponent,
    IndustryComponent,
    SolutionsComponent,
    CareerComponent,
    ResourcesComponent,
    IntegrationPageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
