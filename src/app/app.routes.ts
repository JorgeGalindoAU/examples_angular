import { Routes } from '@angular/router';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { SignalsComponent } from './screens/child-screen/signals/signals.component';
import { PipesComponent } from './screens/child-screen/pipes/pipes.component';

const title: string = 'Mi app de prueba';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MainScreenComponent, title: title },
    { path: 'signals', component: SignalsComponent, title: title },
    { path: 'pipes', component: PipesComponent, title: title },
];
