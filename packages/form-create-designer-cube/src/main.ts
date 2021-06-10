/*
 * @Author: your name
 * @Date: 2021-05-02 23:43:09
 * @LastEditTime: 2021-06-08 17:05:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-plugins/packages/form-create-designer-cube/src/main.ts
 */
import Vue from "vue";
import { createApp, h } from "vue-demi";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import formCreate from "@form-create/element-ui";
import FcDesigner from "@form-create/designer";
/// register plugins
import Cube from "./components/Cube";
import CubeRightOptions from "./components/CubeRightOptions";

Vue.use(ElementUI);
Vue.use(formCreate);
Vue.use(FcDesigner);
/// register plugins
Vue.component(Cube.name, Cube);
Vue.component(CubeRightOptions.name, CubeRightOptions);
const app = createApp({
  render: () => h(App),
});
import App from "@/DkCube";

app.mount("#app");
