import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftNavComponent } from './LeftNav/leftnav.component';
import { WorkSpaceComponent } from './WorkSpace/workspace.component';
import { NavComponent } from './WorkSpace/NavBar/nav.component';
import { ContentComponent } from './WorkSpace/Content/dashboard/content.component';
import { UserComponent } from './WorkSpace/Content/user/content.component';
import { TableComponent } from './WorkSpace/Content/table/content.component';
import { TypographyComponent } from './WorkSpace/Content/typography/content.component';
import { MapComponent } from './WorkSpace/Content/maps/content.component';
import { IconComponent } from './WorkSpace/Content/icons/content.component';
import { NotificationComponent } from './WorkSpace/Content/notifications/content.component';
import { FooterComponent } from './WorkSpace/Footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    LeftNavComponent,
    WorkSpaceComponent,
    NavComponent,
    ContentComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    MapComponent,
    IconComponent,
    NotificationComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
