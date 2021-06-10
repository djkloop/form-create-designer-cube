/*
 * @Author: your name
 * @Date: 2021-05-02 23:43:09
 * @LastEditTime: 2021-06-09 15:08:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-plugins/packages/form-create-designer-cube/src/DkCube.tsx
 */
import { defineComponent, onMounted, reactive } from "vue-demi";
import classes from "./dkcube.module.scss";

let i = 1;
const uniqueId = () => `uni${i++}`;

export default defineComponent({
  name: "cube-wrapper",
  setup(_, { refs }) {
    const cube = reactive({
      title: "业务组件",
      name: "business-components",
      list: [
        {
          icon: "icon-menu",
          name: "dk-cube",
          label: "魔方",
        },
      ],
    });

    const cubeOptions = reactive({
      cubeDensity: 4,
      cubeWidth: 400,
      // cubeHeight: 360,
    });

    /// 魔方右侧默认参数
    const cubeDefaultOptions = reactive({
      cubeDensity: 4,
      cubeWidth: 400,
    });

    onMounted(() => {
      /// ref bug
      /// 只能从ctx上取到
      const designerRefs = refs.designer as any;
      /// 自定义左侧组件
      designerRefs.addComponent({
        name: "dk-cube",
        rule() {
          return {
            type: "dk-cube",
            field: `_dk-cube_id_${uniqueId()}`,
            title: "魔方组件",
            props: {
              cubeOptions: cubeOptions,
            },
          };
        },
        props() {
          return [
            /// 自定义右侧组件
            {
              type: "dk-cube-options",
              field: "cubeOptions",
              title: "魔方相关属性",
              props: cubeOptions,
            },
          ];
        },
      });
      designerRefs.addMenu(cube);

      /// 添加一个自定义cube组件
      designerRefs.setRule([
        {
          type: "dk-cube",
          field: `_dk-cube_id_${uniqueId()}`,
          title: "魔方组件",
          props: {
            cubeOptions: cubeOptions,
          },
        },
      ]);
    });

    return () => (
      <div class={classes["dk-cube-container"]}>
        <fc-designer ref="designer" />
      </div>
    );
  },
});
