import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

import {Button,Tabs,TabPane} from 'element-ui';


Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);

new Vue({
    el: "#app",
    render: createElement => {
        return createElement(AppComponent);
    }
});
