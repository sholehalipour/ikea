import { Component } from '@angular/core';
import { BannerComponent } from '../../+Components/banner/banner.component';
import { SubbannerComponent } from '../../+Components/subbanner/subbanner.component';

@Component({
  selector: 'app-ikeafamily',
  imports: [BannerComponent
    ,SubbannerComponent
  ],
  templateUrl: './ikeafamily.component.html',
  styleUrl: './ikeafamily.component.css'
})
export class IkeafamilyComponent {

}
