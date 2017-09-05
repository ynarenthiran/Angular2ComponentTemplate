"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var content_component_1 = require("./WorkSpace/Content/dashboard/content.component");
var content_component_2 = require("./WorkSpace/Content/user/content.component");
var content_component_3 = require("./WorkSpace/Content/table/content.component");
var content_component_4 = require("./WorkSpace/Content/typography/content.component");
var content_component_5 = require("./WorkSpace/Content/maps/content.component");
var content_component_6 = require("./WorkSpace/Content/icons/content.component");
var content_component_7 = require("./WorkSpace/Content/notifications/content.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: content_component_1.ContentComponent },
    { path: 'user', component: content_component_2.UserComponent },
    { path: 'table', component: content_component_3.TableComponent },
    { path: 'typography', component: content_component_4.TypographyComponent },
    { path: 'maps', component: content_component_5.MapComponent },
    { path: 'icons', component: content_component_6.IconComponent },
    { path: 'notifications', component: content_component_7.NotificationComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map