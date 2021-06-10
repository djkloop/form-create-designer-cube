/*
 * @Author: your name
 * @Date: 2021-06-02 17:59:55
 * @LastEditTime: 2021-06-02 18:47:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /form-create-designer-plugins/packages/form-create-designer-cube/src/common.utils.type.ts
 */
import { VNode, RenderContext } from "vue";
type Maybe<T> = T | undefined | null;

export type TsxComponent<Props> = (
  args: Partial<RenderContext<Props>> &
    {
      [k in keyof Props]: Maybe<Props[k]>;
    }
) => VNode;
