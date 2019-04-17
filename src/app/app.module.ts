import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { HighlightDirective } from '../directive/highlight.directive';
import { PaneDirective } from "../directive/pane.directive";
import { MessageService } from "../providers/message.service";
import { HeroService } from "../providers/hero.service";
import { InMemoryDataService } from "../providers/in-memory-data.service";
import { ChildComponent } from './component-relation/child.component'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ViewChildComponent,
    HeroSearchComponent,
    ChildComponent,
    PaneDirective,
    HighlightDirective
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
