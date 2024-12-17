import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./+Components/banner/banner.component";
import { MenuComponent } from "./+Components/menu/menu.component";
import { SubbannerComponent } from "./+Components/subbanner/subbanner.component";
import { ContentComponent } from "./+Components/content/content.component";
import { Content1Component } from "./+Components/content1/content1.component";
import { Content2Component } from "./+Components/content2/content2.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BannerComponent,
    MenuComponent,
    SubbannerComponent,
    ContentComponent,
    Content1Component,
    Content2Component
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ikea';
}
