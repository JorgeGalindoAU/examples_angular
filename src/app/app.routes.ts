import { Routes } from '@angular/router';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { PipesComponent } from './screens/pipes/pipes.component';
import { SignalsComponent } from './screens/signals/signals.component';

const title: string = 'Mi app de prueba';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MainScreenComponent, title: title },
    { path: 'signals', component: SignalsComponent, title: title },
    { path: 'pipes', component: PipesComponent, title: title },
];
