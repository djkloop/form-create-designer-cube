/*
 * @Author: your name
 * @Date: 2021-05-02 23:43:09
 * @LastEditTime: 2021-06-08 12:02:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-plugins/packages/form-create-designer-cube/src/shims-vue.d.ts
 */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "@form-create/designer";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
