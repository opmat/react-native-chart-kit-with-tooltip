/// <reference types="react" />
import { ViewStyle } from "react-native";
import AbstractChart, {
  AbstractChartConfig,
  AbstractChartProps
} from "./AbstractChart";
import { ChartData } from "./HelperTypes";
export interface BarChartProps extends AbstractChartProps {
  data: ChartData;
  width: number;
  height: number;
  fromZero?: boolean;
  withInnerLines?: boolean;
  yAxisLabel: string;
  yAxisSuffix: string;
  chartConfig: AbstractChartConfig;
  style?: Partial<ViewStyle>;
  horizontalLabelRotation?: number;
  verticalLabelRotation?: number;
  /**
   * Show vertical labels - default: True.
   */
  withVerticalLabels?: boolean;
  /**
   * Show horizontal labels - default: True.
   */
  withHorizontalLabels?: boolean;
  /**
   * This function takes a [whole bunch](https://github.com/indiespirit/react-native-chart-kit/blob/master/src/line-chart.js#L266)
   * of stuff and can render extra elements,
   * such as data point info or additional markup.   */
  decorator?: Function;
  /** Callback that is called when a data point is clicked.
   */
  onDataPointClick?: (data: {
    index: number;
    value: number;
    dataset: ChartData;
    x: number;
    y: number;
  }) => void;
  /**
   * The number of horizontal lines
   */
  segments?: number;
  showBarTops?: boolean;
  showValuesOnTopOfBars?: boolean;
  withCustomBarColorFromData?: boolean;
  flatColor?: boolean;
}
declare type BarChartState = {};
declare class BarChart extends AbstractChart<BarChartProps, BarChartState> {
  getBarPercentage: () => number;
  renderBars: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight,
    barRadius,
    withCustomBarColorFromData,
    onDataPointClick
  }: Pick<
    Omit<AbstractChartConfig, "data">,
    "height" | "paddingRight" | "paddingTop" | "width" | "barRadius"
  > & {
    data: number[];
    withCustomBarColorFromData: boolean;
    onDataPointClick: BarChartProps["onDataPointClick"];
  }) => JSX.Element[];
  renderBarTops: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight
  }: Pick<
    Omit<AbstractChartConfig, "data">,
    "height" | "paddingRight" | "paddingTop" | "width"
  > & {
    data: number[];
  }) => JSX.Element[];
  renderColors: ({
    data,
    flatColor
  }: Pick<AbstractChartConfig, "data"> & {
    flatColor: boolean;
  }) => JSX.Element[];
  renderValuesOnTopOfBars: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight
  }: Pick<
    Omit<AbstractChartConfig, "data">,
    "height" | "paddingRight" | "paddingTop" | "width"
  > & {
    data: number[];
  }) => JSX.Element[];
  render(): JSX.Element;
}
export default BarChart;
//# sourceMappingURL=BarChart.d.ts.map
