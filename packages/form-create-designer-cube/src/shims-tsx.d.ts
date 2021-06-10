/*
 * @Author: your name
 * @Date: 2021-05-02 23:43:09
 * @LastEditTime: 2021-06-02 16:29:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-plugins/packages/form-create-designer-cube/src/shims-tsx.d.ts
 */
import Vue, { VNode } from "vue";
import { ComponentRenderProxy } from "@vue/composition-api";
declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface ImportMeta {
    env: Record<any, string>;
  }
}
