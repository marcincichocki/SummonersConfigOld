import {RunesComponent} from './runes.component';
import {HomeComponent} from './home.component';


export var Routes = {
    home: {
        path: '/',
        as: 'Home',
        component: HomeComponent
    },
    runes: {
        path: '/runes',
        as: 'Runes',
        component: RunesComponent
    }
}

export const APP_ROUTES = Object.keys(Routes).map(prop => Routes[prop]);