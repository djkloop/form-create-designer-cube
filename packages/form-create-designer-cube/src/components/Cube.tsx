/*
 * @Author: 魔方组件
 * @Date: 2021-06-02 15:23:17
 * @LastEditTime: 2021-06-08 16:55:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-plugins/packages/form-create-designer-cube/src/components/Timer.tsx
 */
import { onMounted, defineComponent, computed } from "vue-demi";
import VueTypes from "vue-types";
import classes from "./cube.module.scss";

let i = Math.random() + Date.now();
const uniqueId = () => `uni${i++}`;

interface IDKCubeListProps {
  image?: string;
  id: number | string;
}

interface IDKCubeProps {
  list?: Array<IDKCubeListProps>;
  cubeHeight: number;
  cubeWidth: number;
  cubePadding: number;
}

const DKCubeProps = {
  list: VueTypes.array.def([{ id: uniqueId() }]), /// 魔方个数
  cubeHeight: VueTypes.number.def(undefined), /// 魔方高度
  cubeWidth: VueTypes.number.def(400), /// 魔方宽度
  cubePadding: VueTypes.number.def(0), /// 魔方间距
};

export default defineComponent<IDKCubeProps>({
  name: "dk-cube",
  props: DKCubeProps,
  setup(props) {
    onMounted(() => {
      console.log("魔方组件", props);
    });

    /// 魔方size
    const _cubeSize = computed(() => {
      return props.cubeWidth - 2 * props.cubePadding;
    });

    /// 魔方动态样式
    const mainCubeStyle = computed(() => {
      /// 如果没有高度 自动计算高度
      /// 如果有高度，则使用设置的高度
      return {
        height: `${props.cubeHeight ?? _cubeSize.value}px`,
      };
    });

    /// 如果为空
    const _renderDKCubeEmptyWidget = () => (
      <div class={classes["dk-cube-container__emptry"]}>
        <el-image
          src="assets/empty.png"
          fit="contain"
          style="width:50%;height:50%;"
        ></el-image>
      </div>
    );

    /// 魔方item样式动态计算
    /// ????

    /// 魔方item
    const _renderDKCubeWidgetItem = (item: IDKCubeListProps, idx: number) => {
      return (
        <div
          class={classes["dk-cube-container-items__wrapper__item"]}
          data-id={`idx_${idx}_${item.id}`}
          key={item.id}
          data-key={item.id}
        >
          {item.image ? (
            <el-image
              src={item.image}
              fit="cover"
              style="width:100%;height:100%;"
            ></el-image>
          ) : (
            <el-image
              src="assets/empty.png"
              fit="contain"
              style="width:50%;height:50%;"
            ></el-image>
          )}
        </div>
      );
    };

    return () => (
      <div class={classes["dk-cube-container"]} style={mainCubeStyle.value}>
        {!props.list?.length ? (
          _renderDKCubeEmptyWidget()
        ) : (
          <div class={classes["dk-cube-container-items__wrapper"]}>
            {props.list.map((item, index) =>
              _renderDKCubeWidgetItem(item, index)
            )}
          </div>
        )}
      </div>
    );
  },
});
