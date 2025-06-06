import { Routes } from '@angular/router';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { SignalsComponent } from './screens/elements-screens/signals/signals.component';
import { SignalsAdvancedComponent } from './screens/elements-screens/signals-advanced/signals-advanced.component';
import { ObservableComponent } from './screens/elements-screens/observable/observable.component';
import { ObservableAdvancedComponent } from './screens/elements-screens/observable-advanced/observable-advanced.component';
import { NgModelComponent } from './screens/elements-screens/ng-model/ng-model.component';
import { PipesComponent } from './screens/elements-screens/pipes/pipes.component';
import { SimpleComponentComponent } from './screens/elements-screens/simple-component/simple-component.component';
import { NgClassComponent } from './screens/elements-screens/ng-class/ng-class.component';
import { InputOutputComponent } from './screens/elements-screens/input-output/input-output.component';

const title: string = 'Mi app de prueba';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MainScreenComponent, title: title },
    { path: 'simple_component', component: SimpleComponentComponent, title: title },
    { path: 'signals', component: SignalsComponent, title: title },
    { path: 'advanced_signals', component: SignalsAdvancedComponent, title: title },
    { path: 'observables', component: ObservableComponent, title: title },
    { path: 'advanced_observables', component: ObservableAdvancedComponent, title: title },
    { path: 'input_output', component: InputOutputComponent, title: title },
    { path: 'ng_class', component: NgClassComponent, title: title },
    { path: 'ng_model', component: NgModelComponent, title: title },
    { path: 'pipes', component: PipesComponent, title: title },
];
