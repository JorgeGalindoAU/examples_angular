import { Routes } from '@angular/router';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { SignalsComponent } from './screens/child-screen/signals/signals.component';
import { PipesComponent } from './screens/child-screen/pipes/pipes.component';
import { SignalsAdvancedComponent } from './screens/child-screen/signals-advanced/signals-advanced.component';
import { NgModelComponent } from './screens/child-screen/ng-model/ng-model.component';
import { ObservableAdvancedComponent } from './screens/child-screen/observable-advanced/observable-advanced.component';
import { ObservableComponent } from './screens/child-screen/observable/observable.component';

const title: string = 'Mi app de prueba';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MainScreenComponent, title: title },
    { path: 'signals', component: SignalsComponent, title: title },
    { path: 'advanced_signals', component: SignalsAdvancedComponent, title: title },
    { path: 'observables', component: ObservableComponent, title: title },
    { path: 'advanced_observables', component: ObservableAdvancedComponent, title: title },
    { path: 'ng_model', component: NgModelComponent, title: title },
    { path: 'pipes', component: PipesComponent, title: title },
];
