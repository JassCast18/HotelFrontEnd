import{RouterModule, Routes} from '@angular/router';
import {
    AboutComponent,
    PrincipalComponent,
    ItemComponent,
    SesionComponent
}from "./components/index.paginas"
const app_routes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', component: ItemComponent},
    {path: 'sesion', component: SesionComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''},
];

export const app_routing = RouterModule.forRoot(app_routes);