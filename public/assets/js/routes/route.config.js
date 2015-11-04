var runes_component_1 = require('../components/runes/runes.component');
var home_component_1 = require('../components/home/home.component');
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
    }
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (prop) { return exports.Routes[prop]; });
