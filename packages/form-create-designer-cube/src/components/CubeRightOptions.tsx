/*
 * @Author: your name
 * @Date: 2021-06-08 16:58:09
 * @LastEditTime: 2021-06-10 12:49:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-cube/src/components/CubeOptions.tsx
 */
import { defineComponent, reactive } from "vue-demi";
import { shape } from "vue-types";
import classes from "./cube-right.module.scss";

interface IOptions {
  cubeDensity: number;
  cubeWidth: number;
  cubeHeight: number;
}

interface IDKCubeOptionsProps {
  cubeOptions: IOptions;
}

/**
 * 魔方options参数
 *
 * @param cubeDensity   number 魔方密度
 * @param cubeWidth     number 魔方宽度
 * @param cubeHeight    number 魔方高度
 *
 */
const DKCubeOptionsProps = {
  cubeOptions: shape<IOptions>({
    cubeDensity: Number,
    cubeWidth: Number,
    cubeHeight: Number,
  }).def({
    cubeDensity: 4,
    cubeWidth: 400,
    cubeHeight: 400,
  }),
};

export default defineComponent<IDKCubeOptionsProps>({
  name: "dk-cube-options",
  props: DKCubeOptionsProps,
  setup(props, { emit }) {
    console.log(props);

    const useEmitInput = (e: InputEvent) => {
      console.log("e");
    };

    const oProps = reactive({
      cubeDensity: 4,
      cubeWidth: 400,
      cubeHeight: 400,
    });

    /// error2: vModel 不能用?直接报错...
    /// error3: vOn:change 只能触发一次?
    return () => (
      <div class={classes["dk-cube-right-container-area"]}>
        {/* <el-input-number vModel={props.cubeOptions.cubeDensity} />
        <el-input-number vModel={props.cubeOptions.cubeWidth} />
        <el-input-number vModel={props.cubeOptions.cubeHeight} /> */}
        <el-input-number
          value={props.cubeOptions.cubeDensity}
          vOn:change={useEmitInput}
        />
        <el-input-number
          value={props.cubeOptions.cubeWidth}
          vOn:change={useEmitInput}
        />
        <el-input-number
          value={props.cubeOptions.cubeHeight}
          vOn:change={useEmitInput}
        />
      </div>
    );
  },
});
