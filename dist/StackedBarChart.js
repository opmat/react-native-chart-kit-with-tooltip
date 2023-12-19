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
import React from "react";
import { View } from "react-native";
import { G, Rect, Svg, Text } from "react-native-svg";
import AbstractChart, {
  DEFAULT_X_LABELS_HEIGHT_PERCENTAGE
} from "./AbstractChart";
var StackedBarChart = /** @class */ (function(_super) {
  __extends(StackedBarChart, _super);
  function StackedBarChart() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.getBarPercentage = function() {
      var _a = _this.props.chartConfig.barPercentage,
        barPercentage = _a === void 0 ? 1 : _a;
      return barPercentage;
    };
    _this.getBarRadius = function(ret, x) {
      return _this.props.chartConfig.barRadius && ret.length === x.length - 1
        ? _this.props.chartConfig.barRadius
        : 0;
    };
    _this.renderBars = function(_a) {
      var data = _a.data,
        width = _a.width,
        height = _a.height,
        paddingTop = _a.paddingTop,
        paddingRight = _a.paddingRight,
        border = _a.border,
        colors = _a.colors,
        _b = _a.stackedBar,
        stackedBar = _b === void 0 ? false : _b,
        verticalLabelsHeightPercentage = _a.verticalLabelsHeightPercentage;
      return data.map(function(x, i) {
        var barWidth = 32 * _this.getBarPercentage();
        var ret = [];
        var h = 0;
        var st = paddingTop;
        var fac = 1;
        if (stackedBar) {
          fac = 0.7;
        }
        var sum = _this.props.percentile
          ? x.reduce(function(a, b) {
              return a + b;
            }, 0)
          : border;
        var barsAreaHeight = height * verticalLabelsHeightPercentage;
        for (var z = 0; z < x.length; z++) {
          h = barsAreaHeight * (x[z] / sum);
          var y = barsAreaHeight - h + st;
          var xC =
            (paddingRight +
              (i * (width - paddingRight)) / data.length +
              barWidth / 2) *
            fac;
          ret.push(
            <Rect
              key={Math.random()}
              x={xC}
              y={y}
              rx={_this.getBarRadius(ret, x)}
              ry={_this.getBarRadius(ret, x)}
              width={barWidth}
              height={h}
              fill={colors[z]}
            />
          );
          if (!_this.props.hideLegend) {
            ret.push(
              <Text
                key={Math.random()}
                x={xC + 7 + barWidth / 2}
                textAnchor="end"
                y={h > 15 ? y + 15 : y + 7}
                {..._this.getPropsForLabels()}
              >
                {x[z]}
              </Text>
            );
          }
          st -= h;
        }
        return ret;
      });
    };
    _this.renderLegend = function(_a) {
      var legend = _a.legend,
        colors = _a.colors,
        width = _a.width,
        height = _a.height;
      return legend.map(function(x, i) {
        return (
          <G key={Math.random()}>
            <Rect
              width="16px"
              height="16px"
              fill={colors[i]}
              rx={8}
              ry={8}
              x={width * 0.71}
              y={height * 0.7 - i * 50}
            />
            <Text
              x={width * 0.78}
              y={height * 0.76 - i * 50}
              {..._this.getPropsForLabels()}
            >
              {x}
            </Text>
          </G>
        );
      });
    };
    return _this;
  }
  StackedBarChart.prototype.render = function() {
    var paddingTop = 15;
    var paddingRight = 50;
    var barWidth = 32 * this.getBarPercentage();
    var _a = this.props,
      width = _a.width,
      height = _a.height,
      _b = _a.style,
      style = _b === void 0 ? {} : _b,
      data = _a.data,
      _c = _a.withHorizontalLabels,
      withHorizontalLabels = _c === void 0 ? true : _c,
      _d = _a.withVerticalLabels,
      withVerticalLabels = _d === void 0 ? true : _d,
      _e = _a.segments,
      segments = _e === void 0 ? 4 : _e,
      decimalPlaces = _a.decimalPlaces,
      _f = _a.percentile,
      percentile = _f === void 0 ? false : _f,
      _g = _a.verticalLabelsHeightPercentage,
      verticalLabelsHeightPercentage =
        _g === void 0 ? DEFAULT_X_LABELS_HEIGHT_PERCENTAGE : _g,
      _h = _a.formatYLabel,
      formatYLabel =
        _h === void 0
          ? function(yLabel) {
              return yLabel;
            }
          : _h,
      _j = _a.hideLegend,
      hideLegend = _j === void 0 ? false : _j;
    var _k = style.borderRadius,
      borderRadius = _k === void 0 ? 0 : _k;
    var config = {
      width: width,
      height: height
    };
    var border = 0;
    var max = 0;
    for (var i = 0; i < data.data.length; i++) {
      var actual = data.data[i].reduce(function(pv, cv) {
        return pv + cv;
      }, 0);
      if (actual > max) {
        max = actual;
      }
    }
    if (percentile) {
      border = 100;
    } else {
      border = max;
    }
    var showLegend = !hideLegend && data.legend && data.legend.length != 0;
    var stackedBar = showLegend;
    return (
      <View style={style}>
        <Svg height={height} width={width}>
          {this.renderDefs(
            __assign(__assign({}, config), this.props.chartConfig)
          )}
          <Rect
            width="100%"
            height={height}
            rx={borderRadius}
            ry={borderRadius}
            fill="url(#backgroundGradient)"
          />
          <G>
            {this.renderHorizontalLines(
              __assign(__assign({}, config), {
                count: segments,
                paddingTop: paddingTop,
                verticalLabelsHeightPercentage: verticalLabelsHeightPercentage
              })
            )}
          </G>
          <G>
            {withHorizontalLabels
              ? this.renderHorizontalLabels(
                  __assign(__assign({}, config), {
                    count: segments,
                    data: [0, border],
                    paddingTop: paddingTop,
                    paddingRight: paddingRight,
                    decimalPlaces: decimalPlaces,
                    verticalLabelsHeightPercentage: verticalLabelsHeightPercentage,
                    formatYLabel: formatYLabel
                  })
                )
              : null}
          </G>
          <G>
            {withVerticalLabels
              ? this.renderVerticalLabels(
                  __assign(__assign({}, config), {
                    labels: data.labels,
                    paddingRight: paddingRight + 28,
                    stackedBar: stackedBar,
                    paddingTop: paddingTop,
                    horizontalOffset: barWidth,
                    verticalLabelsHeightPercentage: verticalLabelsHeightPercentage
                  })
                )
              : null}
          </G>
          <G>
            {this.renderBars(
              __assign(__assign({}, config), {
                data: data.data,
                border: border,
                colors: this.props.data.barColors,
                paddingTop: paddingTop,
                paddingRight: paddingRight + 20,
                stackedBar: stackedBar,
                verticalLabelsHeightPercentage: verticalLabelsHeightPercentage
              })
            )}
          </G>
          {showLegend &&
            this.renderLegend(
              __assign(__assign({}, config), {
                legend: data.legend,
                colors: this.props.data.barColors
              })
            )}
        </Svg>
      </View>
    );
  };
  return StackedBarChart;
})(AbstractChart);
export default StackedBarChart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhY2tlZEJhckNoYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1N0YWNrZWRCYXJDaGFydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLElBQUksRUFBYSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdEQsT0FBTyxhQUFhLEVBQUUsRUFHcEIsa0NBQWtDLEVBQ25DLE1BQU0saUJBQWlCLENBQUM7QUF1RHpCO0lBQThCLG1DQUc3QjtJQUhEO1FBQUEscUVBa1BDO1FBOU9DLHNCQUFnQixHQUFHO1lBQ1QsSUFBQSxLQUFzQixLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsY0FBM0IsRUFBakIsYUFBYSxtQkFBRyxDQUFDLEtBQUEsQ0FBNEI7WUFDckQsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBRUYsa0JBQVksR0FBRyxVQUFDLEdBQW1CLEVBQUUsQ0FBaUI7WUFDcEQsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3BFLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTO2dCQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDO1FBRUYsZ0JBQVUsR0FBRyxVQUFDLEVBc0JiO2dCQXJCQyxJQUFJLFVBQUEsRUFDSixLQUFLLFdBQUEsRUFDTCxNQUFNLFlBQUEsRUFDTixVQUFVLGdCQUFBLEVBQ1YsWUFBWSxrQkFBQSxFQUNaLE1BQU0sWUFBQSxFQUNOLE1BQU0sWUFBQSxFQUNOLGtCQUFrQixFQUFs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R0FrUDFDO0FBRUQsZUFBZSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3LCBWaWV3U3R5bGUgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XG5pbXBvcnQgeyBHLCBSZWN0LCBTdmcsIFRleHQgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXN2Z1wiO1xuXG5pbXBvcnQgQWJzdHJhY3RDaGFydCwge1xuICBBYnN0cmFjdENoYXJ0Q29uZmlnLFxuICBBYnN0cmFjdENoYXJ0UHJvcHMsXG4gIERFRkFVTFRfWF9MQUJFTFNfSEVJR0hUX1BFUkNFTlRBR0Vcbn0gZnJvbSBcIi4vQWJzdHJhY3RDaGFydFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWNrZWRCYXJDaGFydERhdGEge1xuICBsYWJlbHM6IHN0cmluZ1tdO1xuICBsZWdlbmQ6IHN0cmluZ1tdO1xuICBkYXRhOiBudW1iZXJbXVtdO1xuICBiYXJDb2xvcnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWNrZWRCYXJDaGFydFByb3BzIGV4dGVuZHMgQWJzdHJhY3RDaGFydFByb3BzIHtcbiAgLyoqXG4gICAqIEUuZy5cbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBkYXRhID0ge1xuICAgKiAgIGxhYmVsczogW1wiVGVzdDFcIiwgXCJUZXN0MlwiXSxcbiAgICogICBsZWdlbmQ6IFtcIkwxXCIsIFwiTDJcIiwgXCJMM1wiXSxcbiAgICogICBkYXRhOiBbWzYwLCA2MCwgNjBdLCBbMzAsIDMwLCA2MF1dLFxuICAgKiAgIGJhckNvbG9yczogW1wiI2RmZTRlYVwiLCBcIiNjZWQ2ZTBcIiwgXCIjYTRiMGJlXCJdXG4gICAqIH07XG4gICAqIGBgYFxuICAgKi9cbiAgZGF0YTogU3RhY2tlZEJhckNoYXJ0RGF0YTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGNoYXJ0Q29uZmlnOiBBYnN0cmFjdENoYXJ0Q29uZmlnO1xuICBoaWRlTGVnZW5kOiBib29sZWFuO1xuICBzdHlsZT86IFBhcnRpYWw8Vmlld1N0eWxlPjtcbiAgYmFyUGVyY2VudGFnZT86IG51bWJlcjtcbiAgZGVjaW1hbFBsYWNlcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNob3cgdmVydGljYWwgbGFiZWxzIC0gZGVmYXVsdDogVHJ1ZS5cbiAgICovXG4gIHdpdGhWZXJ0aWNhbExhYmVscz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG93IGhvcml6b250YWwgbGFiZWxzIC0gZGVmYXVsdDogVHJ1ZS5cbiAgICovXG4gIHdpdGhIb3Jpem9udGFsTGFiZWxzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaG9yaXpvbnRhbCBsaW5lc1xuICAgKi9cbiAgc2VnbWVudHM/OiBudW1iZXI7XG5cbiAgcGVyY2VudGlsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBlcmNlbnRhZ2Ugb2YgdGhlIGNoYXJ0IGhlaWdodCwgZGVkaWNhdGVkIHRvIHZlcnRpY2FsIGxhYmVsc1xuICAgKiAoc3BhY2UgYmVsb3cgY2hhcnQpXG4gICAqL1xuICB2ZXJ0aWNhbExhYmVsc0hlaWdodFBlcmNlbnRhZ2U/OiBudW1iZXI7XG5cbiAgZm9ybWF0WUxhYmVsPzogKHlMYWJlbDogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbnR5cGUgU3RhY2tlZEJhckNoYXJ0U3RhdGUgPSB7fTtcblxuY2xhc3MgU3RhY2tlZEJhckNoYXJ0IGV4dGVuZHMgQWJzdHJhY3RDaGFydDxcbiAgU3RhY2tlZEJhckNoYXJ0UHJvcHMsXG4gIFN0YWNrZWRCYXJDaGFydFN0YXRlXG4+IHtcbiAgZ2V0QmFyUGVyY2VudGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGJhclBlcmNlbnRhZ2UgPSAxIH0gPSB0aGlzLnByb3BzLmNoYXJ0Q29uZmlnO1xuICAgIHJldHVybiBiYXJQZXJjZW50YWdlO1xuICB9O1xuXG4gIGdldEJhclJhZGl1cyA9IChyZXQ6IHN0cmluZyB8IGFueVtdLCB4OiBzdHJpbmcgfCBhbnlbXSkgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoYXJ0Q29uZmlnLmJhclJhZGl1cyAmJiByZXQubGVuZ3RoID09PSB4Lmxlbmd0aCAtIDFcbiAgICAgID8gdGhpcy5wcm9wcy5jaGFydENvbmZpZy5iYXJSYWRpdXNcbiAgICAgIDogMDtcbiAgfTtcblxuICByZW5kZXJCYXJzID0gKHtcbiAgICBkYXRhLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBwYWRkaW5nVG9wLFxuICAgIHBhZGRpbmdSaWdodCxcbiAgICBib3JkZXIsXG4gICAgY29sb3JzLFxuICAgIHN0YWNrZWRCYXIgPSBmYWxzZSxcbiAgICB2ZXJ0aWNhbExhYmVsc0hlaWdodFBlcmNlbnRhZ2VcbiAgfTogUGljazxcbiAgICBPbWl0PEFic3RyYWN0Q2hhcnRDb25maWcsIFwiZGF0YVwiPixcbiAgICB8IFwid2lkdGhcIlxuICAgIHwgXCJoZWlnaHRcIlxuICAgIHwgXCJwYWRkaW5nUmlnaHRcIlxuICAgIHwgXCJwYWRkaW5nVG9wXCJcbiAgICB8IFwic3RhY2tlZEJhclwiXG4gICAgfCBcInZlcnRpY2FsTGFiZWxzSGVpZ2h0UGVyY2VudGFnZVwiXG4gID4gJiB7XG4gICAgYm9yZGVyOiBudW1iZXI7XG4gICAgY29sb3JzOiBzdHJpbmdbXTtcbiAgICBkYXRhOiBudW1iZXJbXVtdO1xuICB9KSA9PlxuICAgIGRhdGEubWFwKCh4LCBpKSA9PiB7XG4gICAgICBjb25zdCBiYXJXaWR0aCA9IDMyICogdGhpcy5nZXRCYXJQZXJjZW50YWdlKCk7XG4gICAgICBjb25zdCByZXQgPSBbXTtcbiAgICAgIGxldCBoID0gMDtcbiAgICAgIGxldCBzdCA9IHBhZGRpbmdUb3A7XG5cbiAgICAgIGxldCBmYWMgPSAxO1xuICAgICAgaWYgKHN0YWNrZWRCYXIpIHtcbiAgICAgICAgZmFjID0gMC43O1xuICAgICAgfVxuICAgICAgY29uc3Qgc3VtID0gdGhpcy5wcm9wcy5wZXJjZW50aWxlID8geC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSA6IGJvcmRlcjtcbiAgICAgIGNvbnN0IGJhcnNBcmVhSGVpZ2h0ID0gaGVpZ2h0ICogdmVydGljYWxMYWJlbHNIZWlnaHRQZXJjZW50YWdlO1xuICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCB4Lmxlbmd0aDsgeisrKSB7XG4gICAgICAgIGggPSBiYXJzQXJlYUhlaWdodCAqICh4W3pdIC8gc3VtKTtcbiAgICAgICAgY29uc3QgeSA9IGJhcnNBcmVhSGVpZ2h0IC0gaCArIHN0O1xuICAgICAgICBjb25zdCB4QyA9XG4gICAgICAgICAgKHBhZGRpbmdSaWdodCArXG4gICAgICAgICAgICAoaSAqICh3aWR0aCAtIHBhZGRpbmdSaWdodCkpIC8gZGF0YS5sZW5ndGggK1xuICAgICAgICAgICAgYmFyV2lkdGggLyAyKSAqXG4gICAgICAgICAgZmFjO1xuXG4gICAgICAgIHJldC5wdXNoKFxuICAgICAgICAgIDxSZWN0XG4gICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XG4gICAgICAgICAgICB4PXt4Q31cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICByeD17dGhpcy5nZXRCYXJSYWRpdXMocmV0LCB4KX1cbiAgICAgICAgICAgIHJ5PXt0aGlzLmdldEJhclJhZGl1cyhyZXQsIHgpfVxuICAgICAgICAgICAgd2lkdGg9e2JhcldpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtofVxuICAgICAgICAgICAgZmlsbD17Y29sb3JzW3pdfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhpZGVMZWdlbmQpIHtcbiAgICAgICAgICByZXQucHVzaChcbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgeD17eEMgKyA3ICsgYmFyV2lkdGggLyAyfVxuICAgICAgICAgICAgICB0ZXh0QW5jaG9yPVwiZW5kXCJcbiAgICAgICAgICAgICAgeT17aCA+IDE1ID8geSArIDE1IDogeSArIDd9XG4gICAgICAgICAgICAgIHsuLi50aGlzLmdldFByb3BzRm9yTGFiZWxzKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt4W3pdfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBzdCAtPSBoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gIHJlbmRlckxlZ2VuZCA9ICh7XG4gICAgbGVnZW5kLFxuICAgIGNvbG9ycyxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfTogUGljazxBYnN0cmFjdENoYXJ0Q29uZmlnLCBcIndpZHRoXCIgfCBcImhlaWdodFwiPiAmIHtcbiAgICBsZWdlbmQ6IHN0cmluZ1tdO1xuICAgIGNvbG9yczogc3RyaW5nW107XG4gIH0pID0+XG4gICAgbGVnZW5kLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEcga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICA8UmVjdFxuICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE2cHhcIlxuICAgICAgICAgICAgZmlsbD17Y29sb3JzW2ldfVxuICAgICAgICAgICAgcng9ezh9XG4gICAgICAgICAgICByeT17OH1cbiAgICAgICAgICAgIHg9e3dpZHRoICogMC43MX1cbiAgICAgICAgICAgIHk9e2hlaWdodCAqIDAuNyAtIGkgKiA1MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICB4PXt3aWR0aCAqIDAuNzh9XG4gICAgICAgICAgICB5PXtoZWlnaHQgKiAwLjc2IC0gaSAqIDUwfVxuICAgICAgICAgICAgey4uLnRoaXMuZ2V0UHJvcHNGb3JMYWJlbHMoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvRz5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSAxNTtcbiAgICBjb25zdCBwYWRkaW5nUmlnaHQgPSA1MDtcbiAgICBjb25zdCBiYXJXaWR0aCA9IDMyICogdGhpcy5nZXRCYXJQZXJjZW50YWdlKCk7XG5cbiAgICBjb25zdCB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHN0eWxlID0ge30sXG4gICAgICBkYXRhLFxuICAgICAgd2l0aEhvcml6b250YWxMYWJlbHMgPSB0cnVlLFxuICAgICAgd2l0aFZlcnRpY2FsTGFiZWxzID0gdHJ1ZSxcbiAgICAgIHNlZ21lbnRzID0gNCxcbiAgICAgIGRlY2ltYWxQbGFjZXMsXG4gICAgICBwZXJjZW50aWxlID0gZmFsc2UsXG4gICAgICB2ZXJ0aWNhbExhYmVsc0hlaWdodFBlcmNlbnRhZ2UgPSBERUZBVUxUX1hfTEFCRUxTX0hFSUdIVF9QRVJDRU5UQUdFLFxuICAgICAgZm9ybWF0WUxhYmVsID0gKHlMYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB5TGFiZWw7XG4gICAgICB9LFxuICAgICAgaGlkZUxlZ2VuZCA9IGZhbHNlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGJvcmRlclJhZGl1cyA9IDAgfSA9IHN0eWxlO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgfTtcblxuICAgIGxldCBib3JkZXIgPSAwO1xuXG4gICAgbGV0IG1heCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFjdHVhbCA9IGRhdGEuZGF0YVtpXS5yZWR1Y2UoKHB2LCBjdikgPT4gcHYgKyBjdiwgMCk7XG4gICAgICBpZiAoYWN0dWFsID4gbWF4KSB7XG4gICAgICAgIG1heCA9IGFjdHVhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGVyY2VudGlsZSkge1xuICAgICAgYm9yZGVyID0gMTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3JkZXIgPSBtYXg7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0xlZ2VuZCA9ICFoaWRlTGVnZW5kICYmIGRhdGEubGVnZW5kICYmIGRhdGEubGVnZW5kLmxlbmd0aCAhPSAwO1xuICAgIGNvbnN0IHN0YWNrZWRCYXIgPSBzaG93TGVnZW5kO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxTdmcgaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgICAge3RoaXMucmVuZGVyRGVmcyh7XG4gICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLmNoYXJ0Q29uZmlnXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPFJlY3RcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIHJ4PXtib3JkZXJSYWRpdXN9XG4gICAgICAgICAgICByeT17Ym9yZGVyUmFkaXVzfVxuICAgICAgICAgICAgZmlsbD1cInVybCgjYmFja2dyb3VuZEdyYWRpZW50KVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckhvcml6b250YWxMaW5lcyh7XG4gICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgY291bnQ6IHNlZ21lbnRzLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbExhYmVsc0hlaWdodFBlcmNlbnRhZ2VcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvRz5cbiAgICAgICAgICA8Rz5cbiAgICAgICAgICAgIHt3aXRoSG9yaXpvbnRhbExhYmVsc1xuICAgICAgICAgICAgICA/IHRoaXMucmVuZGVySG9yaXpvbnRhbExhYmVscyh7XG4gICAgICAgICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAgICAgICBjb3VudDogc2VnbWVudHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBbMCwgYm9yZGVyXSxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3AsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQsXG4gICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxMYWJlbHNIZWlnaHRQZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0WUxhYmVsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvRz5cbiAgICAgICAgICA8Rz5cbiAgICAgICAgICAgIHt3aXRoVmVydGljYWxMYWJlbHNcbiAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlclZlcnRpY2FsTGFiZWxzKHtcbiAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgIGxhYmVsczogZGF0YS5sYWJlbHMsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdSaWdodCArIDI4LFxuICAgICAgICAgICAgICAgICAgc3RhY2tlZEJhcixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3AsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsT2Zmc2V0OiBiYXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsTGFiZWxzSGVpZ2h0UGVyY2VudGFnZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0c+XG4gICAgICAgICAgPEc+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJCYXJzKHtcbiAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICAgICAgICAgIGJvcmRlcixcbiAgICAgICAgICAgICAgY29sb3JzOiB0aGlzLnByb3BzLmRhdGEuYmFyQ29sb3JzLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wLFxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdSaWdodCArIDIwLFxuICAgICAgICAgICAgICBzdGFja2VkQmFyLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbExhYmVsc0hlaWdodFBlcmNlbnRhZ2VcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvRz5cbiAgICAgICAgICB7c2hvd0xlZ2VuZCAmJlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJMZWdlbmQoe1xuICAgICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAgIGxlZ2VuZDogZGF0YS5sZWdlbmQsXG4gICAgICAgICAgICAgIGNvbG9yczogdGhpcy5wcm9wcy5kYXRhLmJhckNvbG9yc1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvU3ZnPlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhY2tlZEJhckNoYXJ0O1xuIl19
