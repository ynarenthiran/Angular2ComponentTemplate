"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var leftnav_component_1 = require("./LeftNav/leftnav.component");
var workspace_component_1 = require("./WorkSpace/workspace.component");
var nav_component_1 = require("./WorkSpace/NavBar/nav.component");
var content_component_1 = require("./WorkSpace/Content/dashboard/content.component");
var content_component_2 = require("./WorkSpace/Content/user/content.component");
var content_component_3 = require("./WorkSpace/Content/table/content.component");
var content_component_4 = require("./WorkSpace/Content/typography/content.component");
var content_component_5 = require("./WorkSpace/Content/maps/content.component");
var content_component_6 = require("./WorkSpace/Content/icons/content.component");
var content_component_7 = require("./WorkSpace/Content/notifications/content.component");
var footer_component_1 = require("./WorkSpace/Footer/footer.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            leftnav_component_1.LeftNavComponent,
            workspace_component_1.WorkSpaceComponent,
            nav_component_1.NavComponent,
            content_component_1.ContentComponent,
            content_component_2.UserComponent,
            content_component_3.TableComponent,
            content_component_4.TypographyComponent,
            content_component_5.MapComponent,
            content_component_6.IconComponent,
            content_component_7.NotificationComponent,
            footer_component_1.FooterComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map