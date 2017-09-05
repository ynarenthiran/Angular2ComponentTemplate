import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './WorkSpace/Content/dashboard/content.component';
import { UserComponent } from './WorkSpace/Content/user/content.component';
import { TableComponent } from './WorkSpace/Content/table/content.component';
import { TypographyComponent } from './WorkSpace/Content/typography/content.component';
import { MapComponent } from './WorkSpace/Content/maps/content.component';
import { IconComponent } from './WorkSpace/Content/icons/content.component';
import { NotificationComponent } from './WorkSpace/Content/notifications/content.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: ContentComponent },
  { path: 'user',  component: UserComponent },
  { path: 'table',  component: TableComponent },
  { path: 'typography',  component: TypographyComponent },
  { path: 'maps',  component: MapComponent },
  { path: 'icons',  component: IconComponent },
  { path: 'notifications',  component: NotificationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
