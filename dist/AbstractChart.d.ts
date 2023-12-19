import { Component } from "react";
import { ChartConfig, Dataset, PartialBy } from "./HelperTypes";
export interface AbstractChartProps {
  fromZero?: boolean;
  fromNumber?: number;
  chartConfig?: AbstractChartConfig;
  yAxisLabel?: string;
  yAxisSuffix?: string;
  yLabelsOffset?: number;
  yAxisInterval?: number;
  xAxisLabel?: string;
  xLabelsOffset?: number;
  hidePointsAtIndex?: number[];
}
export interface AbstractChartConfig extends ChartConfig {
  count?: number;
  data?: Dataset[];
  width?: number;
  height?: number;
  paddingTop?: number;
  paddingRight?: number;
  horizontalLabelRotation?: number;
  formatYLabel?: (yLabel: string) => string;
  labels?: string[];
  horizontalOffset?: number;
  stackedBar?: boolean;
  verticalLabelRotation?: number;
  formatXLabel?: (xLabel: string) => string;
  verticalLabelsHeightPercentage?: number;
  formatTopBarValue?: (topBarValue: number) => string | number;
}
export declare type AbstractChartState = {};
export declare const DEFAULT_X_LABELS_HEIGHT_PERCENTAGE = 0.75;
declare class AbstractChart<
  IProps extends AbstractChartProps,
  IState extends AbstractChartState
> extends Component<AbstractChartProps & IProps, AbstractChartState & IState> {
  calcScaler: (data: number[]) => number;
  calcBaseHeight: (data: number[], height: number) => number;
  calcHeight: (val: number, data: number[], height: number) => number;
  getPropsForBackgroundLines(): {
    stroke: string;
    strokeDasharray: string;
    strokeWidth: number;
  };
  getPropsForLabels(): {
    x?: import("react-native-svg").NumberArray;
    y?: import("react-native-svg").NumberArray;
    dx?: import("react-native-svg").NumberArray;
    dy?: import("react-native-svg").NumberArray;
    rotate?: import("react-native-svg").NumberArray;
    opacity?: import("react-native-svg").NumberProp;
    inlineSize?: import("react-native-svg").NumberProp;
    alignmentBaseline?: import("react-native-svg").AlignmentBaseline;
    baselineShift?: import("react-native-svg").BaselineShift;
    verticalAlign?: import("react-native-svg").NumberProp;
    lengthAdjust?: import("react-native-svg").LengthAdjust;
    textLength?: import("react-native-svg").NumberProp;
    fontData?: {
      [name: string]: unknown;
    };
    fontFeatureSettings?: string;
    fill: import("react-native-svg").Color;
    fillOpacity?: import("react-native-svg").NumberProp;
    fillRule?: import("react-native-svg").FillRule;
    stroke?: import("react-native-svg").Color;
    strokeWidth?: import("react-native-svg").NumberProp;
    strokeOpacity?: import("react-native-svg").NumberProp;
    strokeDasharray?:
      | import("react-native-svg").NumberProp
      | readonly import("react-native-svg").NumberProp[];
    strokeDashoffset?: import("react-native-svg").NumberProp;
    strokeLinecap?: import("react-native-svg").Linecap;
    strokeLinejoin?: import("react-native-svg").Linejoin;
    strokeMiterlimit?: import("react-native-svg").NumberProp;
    clipRule?: import("react-native-svg").FillRule;
    clipPath?: string;
    transform?:
      | string
      | import("react-native-svg").TransformObject
      | import("react-native-svg").ColumnMajorTransformMatrix;
    translate?: import("react-native-svg").NumberArray;
    translateX?: import("react-native-svg").NumberProp;
    translateY?: import("react-native-svg").NumberProp;
    origin?: import("react-native-svg").NumberArray;
    originX?: import("react-native-svg").NumberProp;
    originY?: import("react-native-svg").NumberProp;
    scale?: import("react-native-svg").NumberArray;
    scaleX?: import("react-native-svg").NumberProp;
    scaleY?: import("react-native-svg").NumberProp;
    skew?: import("react-native-svg").NumberArray;
    skewX?: import("react-native-svg").NumberProp;
    skewY?: import("react-native-svg").NumberProp;
    rotation?: import("react-native-svg").NumberProp;
    vectorEffect?:
      | "default"
      | "inherit"
      | "none"
      | "non-scaling-stroke"
      | "nonScalingStroke"
      | "uri";
    pointerEvents?: "auto" | "none" | "box-none" | "box-only";
    onStartShouldSetResponder?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onMoveShouldSetResponder?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onResponderEnd?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderGrant?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderReject?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderMove?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderRelease?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderStart?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderTerminationRequest?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onResponderTerminate?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onStartShouldSetResponderCapture?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onMoveShouldSetResponderCapture?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    disabled?: boolean;
    onPress?: (event: import("react-native").GestureResponderEvent) => void;
    onPressIn?: (event: import("react-native").GestureResponderEvent) => void;
    onPressOut?: (event: import("react-native").GestureResponderEvent) => void;
    onLongPress?: (event: import("react-native").GestureResponderEvent) => void;
    delayPressIn?: number;
    delayPressOut?: number;
    delayLongPress?: number;
    id?: string;
    marker?: string;
    markerStart?: string;
    markerMid?: string;
    markerEnd?: string;
    mask?: string;
    font?: import("react-native-svg").FontObject;
    fontStyle?: import("react-native-svg").FontStyle;
    fontVariant?: import("react-native-svg").FontVariant;
    fontWeight?: import("react-native-svg").FontWeight;
    fontStretch?: import("react-native-svg").FontStretch;
    fontSize: import("react-native-svg").NumberProp;
    fontFamily?: string;
    textAnchor?: import("react-native-svg").TextAnchor;
    textDecoration?: import("react-native-svg").TextDecoration;
    letterSpacing?: import("react-native-svg").NumberProp;
    wordSpacing?: import("react-native-svg").NumberProp;
    kerning?: import("react-native-svg").NumberProp;
    fontVariantLigatures?: import("react-native-svg").FontVariantLigatures;
    fontVariationSettings?: string;
  };
  getPropsForVerticalLabels(): {
    x?: import("react-native-svg").NumberArray;
    y?: import("react-native-svg").NumberArray;
    dx?: import("react-native-svg").NumberArray;
    dy?: import("react-native-svg").NumberArray;
    rotate?: import("react-native-svg").NumberArray;
    opacity?: import("react-native-svg").NumberProp;
    inlineSize?: import("react-native-svg").NumberProp;
    alignmentBaseline?: import("react-native-svg").AlignmentBaseline;
    baselineShift?: import("react-native-svg").BaselineShift;
    verticalAlign?: import("react-native-svg").NumberProp;
    lengthAdjust?: import("react-native-svg").LengthAdjust;
    textLength?: import("react-native-svg").NumberProp;
    fontData?: {
      [name: string]: unknown;
    };
    fontFeatureSettings?: string;
    fill: import("react-native-svg").Color;
    fillOpacity?: import("react-native-svg").NumberProp;
    fillRule?: import("react-native-svg").FillRule;
    stroke?: import("react-native-svg").Color;
    strokeWidth?: import("react-native-svg").NumberProp;
    strokeOpacity?: import("react-native-svg").NumberProp;
    strokeDasharray?:
      | import("react-native-svg").NumberProp
      | readonly import("react-native-svg").NumberProp[];
    strokeDashoffset?: import("react-native-svg").NumberProp;
    strokeLinecap?: import("react-native-svg").Linecap;
    strokeLinejoin?: import("react-native-svg").Linejoin;
    strokeMiterlimit?: import("react-native-svg").NumberProp;
    clipRule?: import("react-native-svg").FillRule;
    clipPath?: string;
    transform?:
      | string
      | import("react-native-svg").TransformObject
      | import("react-native-svg").ColumnMajorTransformMatrix;
    translate?: import("react-native-svg").NumberArray;
    translateX?: import("react-native-svg").NumberProp;
    translateY?: import("react-native-svg").NumberProp;
    origin?: import("react-native-svg").NumberArray;
    originX?: import("react-native-svg").NumberProp;
    originY?: import("react-native-svg").NumberProp;
    scale?: import("react-native-svg").NumberArray;
    scaleX?: import("react-native-svg").NumberProp;
    scaleY?: import("react-native-svg").NumberProp;
    skew?: import("react-native-svg").NumberArray;
    skewX?: import("react-native-svg").NumberProp;
    skewY?: import("react-native-svg").NumberProp;
    rotation?: import("react-native-svg").NumberProp;
    vectorEffect?:
      | "default"
      | "inherit"
      | "none"
      | "non-scaling-stroke"
      | "nonScalingStroke"
      | "uri";
    pointerEvents?: "auto" | "none" | "box-none" | "box-only";
    onStartShouldSetResponder?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onMoveShouldSetResponder?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onResponderEnd?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderGrant?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderReject?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderMove?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderRelease?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderStart?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderTerminationRequest?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onResponderTerminate?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onStartShouldSetResponderCapture?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onMoveShouldSetResponderCapture?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    disabled?: boolean;
    onPress?: (event: import("react-native").GestureResponderEvent) => void;
    onPressIn?: (event: import("react-native").GestureResponderEvent) => void;
    onPressOut?: (event: import("react-native").GestureResponderEvent) => void;
    onLongPress?: (event: import("react-native").GestureResponderEvent) => void;
    delayPressIn?: number;
    delayPressOut?: number;
    delayLongPress?: number;
    id?: string;
    marker?: string;
    markerStart?: string;
    markerMid?: string;
    markerEnd?: string;
    mask?: string;
    font?: import("react-native-svg").FontObject;
    fontStyle?: import("react-native-svg").FontStyle;
    fontVariant?: import("react-native-svg").FontVariant;
    fontWeight?: import("react-native-svg").FontWeight;
    fontStretch?: import("react-native-svg").FontStretch;
    fontSize?: import("react-native-svg").NumberProp;
    fontFamily?: string;
    textAnchor?: import("react-native-svg").TextAnchor;
    textDecoration?: import("react-native-svg").TextDecoration;
    letterSpacing?: import("react-native-svg").NumberProp;
    wordSpacing?: import("react-native-svg").NumberProp;
    kerning?: import("react-native-svg").NumberProp;
    fontVariantLigatures?: import("react-native-svg").FontVariantLigatures;
    fontVariationSettings?: string;
  };
  getPropsForHorizontalLabels(): {
    x?: import("react-native-svg").NumberArray;
    y?: import("react-native-svg").NumberArray;
    dx?: import("react-native-svg").NumberArray;
    dy?: import("react-native-svg").NumberArray;
    rotate?: import("react-native-svg").NumberArray;
    opacity?: import("react-native-svg").NumberProp;
    inlineSize?: import("react-native-svg").NumberProp;
    alignmentBaseline?: import("react-native-svg").AlignmentBaseline;
    baselineShift?: import("react-native-svg").BaselineShift;
    verticalAlign?: import("react-native-svg").NumberProp;
    lengthAdjust?: import("react-native-svg").LengthAdjust;
    textLength?: import("react-native-svg").NumberProp;
    fontData?: {
      [name: string]: unknown;
    };
    fontFeatureSettings?: string;
    fill: import("react-native-svg").Color;
    fillOpacity?: import("react-native-svg").NumberProp;
    fillRule?: import("react-native-svg").FillRule;
    stroke?: import("react-native-svg").Color;
    strokeWidth?: import("react-native-svg").NumberProp;
    strokeOpacity?: import("react-native-svg").NumberProp;
    strokeDasharray?:
      | import("react-native-svg").NumberProp
      | readonly import("react-native-svg").NumberProp[];
    strokeDashoffset?: import("react-native-svg").NumberProp;
    strokeLinecap?: import("react-native-svg").Linecap;
    strokeLinejoin?: import("react-native-svg").Linejoin;
    strokeMiterlimit?: import("react-native-svg").NumberProp;
    clipRule?: import("react-native-svg").FillRule;
    clipPath?: string;
    transform?:
      | string
      | import("react-native-svg").TransformObject
      | import("react-native-svg").ColumnMajorTransformMatrix;
    translate?: import("react-native-svg").NumberArray;
    translateX?: import("react-native-svg").NumberProp;
    translateY?: import("react-native-svg").NumberProp;
    origin?: import("react-native-svg").NumberArray;
    originX?: import("react-native-svg").NumberProp;
    originY?: import("react-native-svg").NumberProp;
    scale?: import("react-native-svg").NumberArray;
    scaleX?: import("react-native-svg").NumberProp;
    scaleY?: import("react-native-svg").NumberProp;
    skew?: import("react-native-svg").NumberArray;
    skewX?: import("react-native-svg").NumberProp;
    skewY?: import("react-native-svg").NumberProp;
    rotation?: import("react-native-svg").NumberProp;
    vectorEffect?:
      | "default"
      | "inherit"
      | "none"
      | "non-scaling-stroke"
      | "nonScalingStroke"
      | "uri";
    pointerEvents?: "auto" | "none" | "box-none" | "box-only";
    onStartShouldSetResponder?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onMoveShouldSetResponder?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onResponderEnd?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderGrant?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderReject?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderMove?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderRelease?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderStart?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onResponderTerminationRequest?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onResponderTerminate?: (
      event: import("react-native").GestureResponderEvent
    ) => void;
    onStartShouldSetResponderCapture?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    onMoveShouldSetResponderCapture?: (
      event: import("react-native").GestureResponderEvent
    ) => boolean;
    disabled?: boolean;
    onPress?: (event: import("react-native").GestureResponderEvent) => void;
    onPressIn?: (event: import("react-native").GestureResponderEvent) => void;
    onPressOut?: (event: import("react-native").GestureResponderEvent) => void;
    onLongPress?: (event: import("react-native").GestureResponderEvent) => void;
    delayPressIn?: number;
    delayPressOut?: number;
    delayLongPress?: number;
    id?: string;
    marker?: string;
    markerStart?: string;
    markerMid?: string;
    markerEnd?: string;
    mask?: string;
    font?: import("react-native-svg").FontObject;
    fontStyle?: import("react-native-svg").FontStyle;
    fontVariant?: import("react-native-svg").FontVariant;
    fontWeight?: import("react-native-svg").FontWeight;
    fontStretch?: import("react-native-svg").FontStretch;
    fontSize?: import("react-native-svg").NumberProp;
    fontFamily?: string;
    textAnchor?: import("react-native-svg").TextAnchor;
    textDecoration?: import("react-native-svg").TextDecoration;
    letterSpacing?: import("react-native-svg").NumberProp;
    wordSpacing?: import("react-native-svg").NumberProp;
    kerning?: import("react-native-svg").NumberProp;
    fontVariantLigatures?: import("react-native-svg").FontVariantLigatures;
    fontVariationSettings?: string;
  };
  renderHorizontalLines: (config: any) => JSX.Element[];
  renderHorizontalLine: (config: any) => JSX.Element;
  renderHorizontalLabels: (
    config: Omit<AbstractChartConfig, "data"> & {
      data: number[];
    }
  ) => JSX.Element[];
  renderVerticalLabels: ({
    labels,
    width,
    height,
    paddingRight,
    paddingTop,
    horizontalOffset,
    stackedBar,
    verticalLabelRotation,
    formatXLabel,
    verticalLabelsHeightPercentage
  }: Pick<
    AbstractChartConfig,
    | "labels"
    | "width"
    | "height"
    | "paddingRight"
    | "paddingTop"
    | "horizontalOffset"
    | "stackedBar"
    | "verticalLabelRotation"
    | "formatXLabel"
    | "verticalLabelsHeightPercentage"
  >) => JSX.Element[];
  renderVerticalLines: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight,
    verticalLabelsHeightPercentage
  }: Omit<
    Pick<
      AbstractChartConfig,
      | "height"
      | "paddingRight"
      | "paddingTop"
      | "width"
      | "data"
      | "verticalLabelsHeightPercentage"
    >,
    "data"
  > & {
    data: number[];
  }) => JSX.Element[];
  renderVerticalLine: ({
    height,
    paddingTop,
    paddingRight,
    verticalLabelsHeightPercentage
  }: Pick<
    AbstractChartConfig,
    "height" | "paddingRight" | "paddingTop" | "verticalLabelsHeightPercentage"
  >) => JSX.Element;
  renderDefs: (
    config: Pick<
      PartialBy<
        AbstractChartConfig,
        | "backgroundGradientFromOpacity"
        | "backgroundGradientToOpacity"
        | "fillShadowGradient"
        | "fillShadowGradientOpacity"
        | "fillShadowGradientFrom"
        | "fillShadowGradientFromOpacity"
        | "fillShadowGradientFromOffset"
        | "fillShadowGradientTo"
        | "fillShadowGradientToOpacity"
        | "fillShadowGradientToOffset"
      >,
      | "width"
      | "height"
      | "backgroundGradientFrom"
      | "backgroundGradientTo"
      | "useShadowColorFromDataset"
      | "data"
      | "backgroundGradientFromOpacity"
      | "backgroundGradientToOpacity"
      | "fillShadowGradient"
      | "fillShadowGradientOpacity"
      | "fillShadowGradientFrom"
      | "fillShadowGradientFromOpacity"
      | "fillShadowGradientFromOffset"
      | "fillShadowGradientTo"
      | "fillShadowGradientToOpacity"
      | "fillShadowGradientToOffset"
    >
  ) => JSX.Element;
}
export default AbstractChart;
//# sourceMappingURL=AbstractChart.d.ts.map
