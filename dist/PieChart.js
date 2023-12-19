var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import Pie from "paths-js/pie";
import React from "react";
import { View } from "react-native";
import { G, Path, Rect, Svg, Text } from "react-native-svg";
import AbstractChart from "./AbstractChart";
var PieChart = /** @class */ (function(_super) {
  __extends(PieChart, _super);
  function PieChart() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  PieChart.prototype.render = function() {
    var _this = this;
    var _a = this.props,
      _b = _a.style,
      style = _b === void 0 ? {} : _b,
      backgroundColor = _a.backgroundColor,
      _c = _a.absolute,
      absolute = _c === void 0 ? false : _c,
      _d = _a.hasLegend,
      hasLegend = _d === void 0 ? true : _d,
      _e = _a.avoidFalseZero,
      avoidFalseZero = _e === void 0 ? false : _e;
    var _f = style.borderRadius,
      borderRadius = _f === void 0 ? 0 : _f;
    var chart = Pie({
      center: this.props.center || [0, 0],
      r: 0,
      R: this.props.height / 2.5,
      data: this.props.data,
      accessor: function(x) {
        return x[_this.props.accessor];
      }
    });
    var total = this.props.data.reduce(function(sum, item) {
      return sum + item[_this.props.accessor];
    }, 0);
    var slices = chart.curves.map(function(c, i) {
      var value;
      if (absolute) {
        value = c.item[_this.props.accessor];
      } else {
        if (total === 0) {
          value = 0 + "%";
        } else {
          var percentage = Math.round(
            (100 / total) * c.item[_this.props.accessor]
          );
          value =
            Math.round((100 / total) * c.item[_this.props.accessor]) + "%";
          if (avoidFalseZero && percentage === 0) {
            value = "<1%";
          } else {
            value = percentage + "%";
          }
        }
      }
      return (
        <G key={Math.random()}>
          <Path d={c.sector.path.print()} fill={c.item.color} />
          {hasLegend ? (
            <Rect
              width="16px"
              height="16px"
              fill={c.item.color}
              rx={8}
              ry={8}
              x={_this.props.width / 2.5 - 24}
              y={
                -(_this.props.height / 2.5) +
                ((_this.props.height * 0.8) / _this.props.data.length) * i +
                12
              }
            />
          ) : null}
          {hasLegend ? (
            <Text
              fill={c.item.legendFontColor}
              fontSize={c.item.legendFontSize}
              fontFamily={c.item.legendFontFamily}
              x={_this.props.width / 2.5}
              y={
                -(_this.props.height / 2.5) +
                ((_this.props.height * 0.8) / _this.props.data.length) * i +
                12 * 2
              }
            >
              {value + " " + c.item.name}
            </Text>
          ) : null}
        </G>
      );
    });
    return (
      <View
        style={__assign(
          { width: this.props.width, height: this.props.height, padding: 0 },
          style
        )}
      >
        <Svg width={this.props.width} height={this.props.height}>
          <G>
            {this.renderDefs(
              __assign(
                { width: this.props.height, height: this.props.height },
                this.props.chartConfig
              )
            )}
          </G>
          <Rect
            width="100%"
            height={this.props.height}
            rx={borderRadius}
            ry={borderRadius}
            fill={backgroundColor}
          />
          <G
            x={
              this.props.width / 2 / 2 +
              Number(this.props.paddingLeft ? this.props.paddingLeft : 0)
            }
            y={this.props.height / 2}
          >
            {slices}
          </G>
        </Svg>
      </View>
    );
  };
  return PieChart;
})(AbstractChart);
export default PieChart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGllQ2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUGllQ2hhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO0FBQy9CLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFhLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUQsT0FBTyxhQUFxQyxNQUFNLGlCQUFpQixDQUFDO0FBa0JwRTtJQUF1Qiw0QkFBMkM7SUFBbEU7O0lBeUhBLENBQUM7SUF4SEMseUJBQU0sR0FBTjtRQUFBLGlCQXVIQztRQXRITyxJQUFBLEtBTUYsSUFBSSxDQUFDLEtBQUssRUFMWixhQUFVLEVBQVYsS0FBSyxtQkFBRyxFQUFFLEtBQUEsRUFDVixlQUFlLHFCQUFBLEVBQ2YsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBLEVBQ2hCLGlCQUFnQixFQUFoQixTQUFTLG1CQUFHLElBQUksS0FBQSxFQUNoQixzQkFBc0IsRUFBdEIsY0FBYyxtQkFBRyxLQUFLLEtBQ1YsQ0FBQztRQUVQLElBQUEsS0FBcUIsS0FBSyxhQUFWLEVBQWhCLFlBQVksbUJBQUcsQ0FBQyxLQUFBLENBQVc7UUFFbkMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRztZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lB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Q0FBQyxNQUFNLElBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUN6QixDQUNKO1VBQUEsRUFBRSxDQUFDLENBQ0g7VUFBQSxDQUFDLElBQUksQ0FDSCxLQUFLLENBQUMsTUFBTSxDQUNaLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQzFCLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNqQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDakIsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBRXhCO1VBQUEsQ0FBQyxDQUFDLENBQ0EsQ0FBQyxDQUFDLENBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1RCxDQUNELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUV6QjtZQUFBLENBQUMsTUFBTSxDQUNUO1VBQUEsRUFBRSxDQUFDLENBQ0w7UUFBQSxFQUFFLEdBQUcsQ0FDUDtNQUFBLEVBQUUsSUFBSSxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXpIRCxDQUF1QixhQUFhLEdBeUhuQztBQUVELGVBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBpZSBmcm9tIFwicGF0aHMtanMvcGllXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3LCBWaWV3U3R5bGUgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XG5pbXBvcnQgeyBHLCBQYXRoLCBSZWN0LCBTdmcsIFRleHQgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXN2Z1wiO1xuXG5pbXBvcnQgQWJzdHJhY3RDaGFydCwgeyBBYnN0cmFjdENoYXJ0UHJvcHMgfSBmcm9tIFwiLi9BYnN0cmFjdENoYXJ0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGllQ2hhcnRQcm9wcyBleHRlbmRzIEFic3RyYWN0Q2hhcnRQcm9wcyB7XG4gIGRhdGE6IEFycmF5PGFueT47XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBhY2Nlc3Nvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgcGFkZGluZ0xlZnQ6IHN0cmluZztcbiAgY2VudGVyPzogQXJyYXk8bnVtYmVyPjtcbiAgYWJzb2x1dGU/OiBib29sZWFuO1xuICBoYXNMZWdlbmQ/OiBib29sZWFuO1xuICBzdHlsZT86IFBhcnRpYWw8Vmlld1N0eWxlPjtcbiAgYXZvaWRGYWxzZVplcm8/OiBib29sZWFuO1xufVxuXG50eXBlIFBpZUNoYXJ0U3RhdGUgPSB7fTtcblxuY2xhc3MgUGllQ2hhcnQgZXh0ZW5kcyBBYnN0cmFjdENoYXJ0PFBpZUNoYXJ0UHJvcHMsIFBpZUNoYXJ0U3RhdGU+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlID0ge30sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBhYnNvbHV0ZSA9IGZhbHNlLFxuICAgICAgaGFzTGVnZW5kID0gdHJ1ZSxcbiAgICAgIGF2b2lkRmFsc2VaZXJvID0gZmFsc2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgYm9yZGVyUmFkaXVzID0gMCB9ID0gc3R5bGU7XG5cbiAgICBjb25zdCBjaGFydCA9IFBpZSh7XG4gICAgICBjZW50ZXI6IHRoaXMucHJvcHMuY2VudGVyIHx8IFswLCAwXSxcbiAgICAgIHI6IDAsXG4gICAgICBSOiB0aGlzLnByb3BzLmhlaWdodCAvIDIuNSxcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcbiAgICAgIGFjY2Vzc29yOiB4ID0+IHtcbiAgICAgICAgcmV0dXJuIHhbdGhpcy5wcm9wcy5hY2Nlc3Nvcl07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b3RhbCA9IHRoaXMucHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIGl0ZW1bdGhpcy5wcm9wcy5hY2Nlc3Nvcl07XG4gICAgfSwgMCk7XG5cbiAgICBjb25zdCBzbGljZXMgPSBjaGFydC5jdXJ2ZXMubWFwKChjLCBpKSA9PiB7XG4gICAgICBsZXQgdmFsdWU6IHN0cmluZztcblxuICAgICAgaWYgKGFic29sdXRlKSB7XG4gICAgICAgIHZhbHVlID0gYy5pdGVtW3RoaXMucHJvcHMuYWNjZXNzb3JdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICAgICAgdmFsdWUgPSAwICsgXCIlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICAoMTAwIC8gdG90YWwpICogYy5pdGVtW3RoaXMucHJvcHMuYWNjZXNzb3JdXG4gICAgICAgICAgKTtcbiAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQoKDEwMCAvIHRvdGFsKSAqIGMuaXRlbVt0aGlzLnByb3BzLmFjY2Vzc29yXSkgKyBcIiVcIjtcbiAgICAgICAgICBpZiAoYXZvaWRGYWxzZVplcm8gJiYgcGVyY2VudGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSBcIjwxJVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBlcmNlbnRhZ2UgKyBcIiVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEcga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICA8UGF0aCBkPXtjLnNlY3Rvci5wYXRoLnByaW50KCl9IGZpbGw9e2MuaXRlbS5jb2xvcn0gLz5cbiAgICAgICAgICB7aGFzTGVnZW5kID8gKFxuICAgICAgICAgICAgPFJlY3RcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZweFwiXG4gICAgICAgICAgICAgIGZpbGw9e2MuaXRlbS5jb2xvcn1cbiAgICAgICAgICAgICAgcng9ezh9XG4gICAgICAgICAgICAgIHJ5PXs4fVxuICAgICAgICAgICAgICB4PXt0aGlzLnByb3BzLndpZHRoIC8gMi41IC0gMjR9XG4gICAgICAgICAgICAgIHk9e1xuICAgICAgICAgICAgICAgIC0odGhpcy5wcm9wcy5oZWlnaHQgLyAyLjUpICtcbiAgICAgICAgICAgICAgICAoKHRoaXMucHJvcHMuaGVpZ2h0ICogMC44KSAvIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpICogaSArXG4gICAgICAgICAgICAgICAgMTJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7aGFzTGVnZW5kID8gKFxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgZmlsbD17Yy5pdGVtLmxlZ2VuZEZvbnRDb2xvcn1cbiAgICAgICAgICAgICAgZm9udFNpemU9e2MuaXRlbS5sZWdlbmRGb250U2l6ZX1cbiAgICAgICAgICAgICAgZm9udEZhbWlseT17Yy5pdGVtLmxlZ2VuZEZvbnRGYW1pbHl9XG4gICAgICAgICAgICAgIHg9e3RoaXMucHJvcHMud2lkdGggLyAyLjV9XG4gICAgICAgICAgICAgIHk9e1xuICAgICAgICAgICAgICAgIC0odGhpcy5wcm9wcy5oZWlnaHQgLyAyLjUpICtcbiAgICAgICAgICAgICAgICAoKHRoaXMucHJvcHMuaGVpZ2h0ICogMC44KSAvIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpICogaSArXG4gICAgICAgICAgICAgICAgMTIgKiAyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Ake3ZhbHVlfSAke2MuaXRlbS5uYW1lfWB9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRz5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXdcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgLi4uc3R5bGVcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFN2ZyB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0+XG4gICAgICAgICAgPEc+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZzKHtcbiAgICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmNoYXJ0Q29uZmlnXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0c+XG4gICAgICAgICAgPFJlY3RcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxuICAgICAgICAgICAgcng9e2JvcmRlclJhZGl1c31cbiAgICAgICAgICAgIHJ5PXtib3JkZXJSYWRpdXN9XG4gICAgICAgICAgICBmaWxsPXtiYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R1xuICAgICAgICAgICAgeD17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMud2lkdGggLyAyIC8gMiArXG4gICAgICAgICAgICAgIE51bWJlcih0aGlzLnByb3BzLnBhZGRpbmdMZWZ0ID8gdGhpcy5wcm9wcy5wYWRkaW5nTGVmdCA6IDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5PXt0aGlzLnByb3BzLmhlaWdodCAvIDJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NsaWNlc31cbiAgICAgICAgICA8L0c+XG4gICAgICAgIDwvU3ZnPlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGllQ2hhcnQ7XG4iXX0=
