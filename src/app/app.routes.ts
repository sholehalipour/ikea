import { Routes } from '@angular/router';
import { ProductsComponent } from './+pages/products/products.component';
import { OffersComponent } from './+pages/offers/offers.component';
import { RoomsComponent } from './+pages/rooms/rooms.component';
import { IkeafamilyComponent } from './+pages/ikeafamily/ikeafamily.component';
import { CustomerserviceComponent } from './+pages/customerservice/customerservice.component';

export const routes: Routes = [
    {path:"products",component:ProductsComponent},
    {path:"offers",component:OffersComponent},
    {path:"rooms",component:RoomsComponent},
    {path:"ikeafamily",component:IkeafamilyComponent},
    {path:"customerservice",component:CustomerserviceComponent}
];
