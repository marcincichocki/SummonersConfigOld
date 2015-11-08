var home_component_1 = require('../components/home/home.component');
var runes_component_1 = require('../components/runes/runes.component');
var masteries_component_1 = require('../components/masteries/masteries.component');
exports.Routes = {
    home: {
        path: '/',
        as: 'Home',
        component: home_component_1.HomeComponent
    },
    runes: {
        path: '/runes',
        as: 'Runes',
        component: runes_component_1.RunesComponent
    },
    masteries: {
        path: '/masteries',
        as: 'Masteries',
        component: masteries_component_1.MasteriesComponent
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (prop) { return exports.Routes[prop]; });
