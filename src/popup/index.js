import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

import {Button,Tabs,TabPane,Col,Row,Input,Divider,Select,Option} from 'element-ui';


Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Col);
Vue.use(Row);
Vue.use(Input);
Vue.use(Divider);
Vue.use(Select);
Vue.use(Option);

new Vue({
    el: "#app",
    render: createElement => {
        return createElement(AppComponent);
    }
});

document.getElementById("sps-wiki").addEventListener("click",function () {
    chrome.tabs.create({url: 'https://www.baidu.com/'});
});
