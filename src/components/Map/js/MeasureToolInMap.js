/**
 * 基于maptalks测量工具（测距、测面积、电子方位线）
 */
import * as maptalks from 'maptalks'
import DrawToolInMap from '@/components/Map/js/DrawToolInMap'

export default class MeasureToolInMap {
  constructor(map) {
    this.map = map
    this.layer = {
      area: null,
      distance: null,
      bearingLine: null
    }

    this.drawTool = new DrawToolInMap(map) // 绘制工具（用于电子方位线）
  }

  /**
   * 初始化电子方位线图层
   */
  _initLayer() {
    const layer = this.map.getLayer('bearing_line')
    if (layer) {
      this.layer.bearingLine = layer
    } else {
      this.layer.bearingLine = new maptalks.VectorLayer('bearing_line').addTo(this.map)
    }
  }

  /**
   * 绘制样式匹配
   * @param type
   * @return {{clearButtonSymbol: [{markerLineColor: string, markerLineWidth: number, markerHeight: number, markerDx: number, markerFill: string, markerWidth: number, markerType: string}, {markerLineColor: string, markerHeight: number, markerDx: number, markerWidth: number, markerType: string}], symbol: {polygonFill: string, lineColor: string, polygonOpacity: number, lineWidth: number}, vertexSymbol: {markerLineColor: string, markerLineWidth: number, markerHeight: number, markerFill: string, markerWidth: number, markerType: string}, language: string, labelOptions: {textSymbol: {textLineSpacing: number, textFill: string, textHorizontalAlignment: string, textDx: number, textFaceName: string}, boxStyle: {padding: number[], symbol: {markerLineColor: string, markerFill: string, markerFillOpacity: number, markerType: string}}}}|{clearButtonSymbol: [{markerLineColor: string, markerLineWidth: number, markerHeight: number, markerDx: number, markerFill: string, markerWidth: number, markerType: string}, {markerLineColor: string, markerHeight: number, markerDx: number, markerWidth: number, markerType: string}], symbol: {lineColor: string, lineWidth: number}, vertexSymbol: {markerLineColor: string, markerLineWidth: number, markerHeight: number, markerFill: string, markerWidth: number, markerType: string}, language: string, labelOptions: {textSymbol: {markerLineColor: string, textLineSpacing: number, textFill: string, textHorizontalAlignment: string, textDx: number, markerFill: string, textFaceName: string}, boxStyle: {padding: number[], symbol: {markerLineColor: string, markerFill: string, markerFillOpacity: number, markerType: string}}}}}
   * @private
   */
  _formatSymbol(type) {
    // 测面积样式
    const AreaToolConf = {
      symbol: {
        lineColor: '#1bbc9b',
        lineWidth: 2,
        polygonFill: '#fff',
        polygonOpacity: 0.3
      },
      vertexSymbol: {
        markerType: 'ellipse',
        markerFill: '#34495e',
        markerLineColor: '#1bbc9b',
        markerLineWidth: 3,
        markerWidth: 10,
        markerHeight: 10
      },
      labelOptions: {
        textSymbol: {
          textFaceName: 'monospace',
          textFill: '#fff',
          textLineSpacing: 1,
          textHorizontalAlignment: 'right',
          textDx: 15
        },
        boxStyle: {
          padding: [ 6, 2 ],
          symbol: {
            markerType: 'square',
            markerFill: '#000',
            markerFillOpacity: 0.9,
            markerLineColor: '#b4b3b3'
          }
        }
      },
      clearButtonSymbol: [
        {
          markerType: 'square',
          markerFill: '#000',
          markerLineColor: '#b4b3b3',
          markerLineWidth: 2,
          markerWidth: 15,
          markerHeight: 15,
          markerDx: 22
        },
        {
          markerType: 'x',
          markerWidth: 10,
          markerHeight: 10,
          markerLineColor: '#fff',
          markerDx: 22
        }
      ],
      language: 'zh-CN'
    }

    // 测距样式
    const DistanceToolConf = {
      symbol: {
        lineColor: '#34495e',
        lineWidth: 2
      },
      vertexSymbol: {
        markerType: 'ellipse',
        markerFill: '#1bbc9b',
        markerLineColor: '#000',
        markerLineWidth: 3,
        markerWidth: 10,
        markerHeight: 10
      },
      labelOptions: {
        textSymbol: {
          textFaceName: 'monospace',
          textFill: '#fff',
          textLineSpacing: 1,
          textHorizontalAlignment: 'right',
          textDx: 15,
          markerLineColor: '#b4b3b3',
          markerFill: '#000'
        },
        boxStyle: {
          padding: [ 6, 2 ],
          symbol: {
            markerType: 'square',
            markerFill: '#000',
            markerFillOpacity: 0.9,
            markerLineColor: '#b4b3b3'
          }
        }
      },
      clearButtonSymbol: [
        {
          markerType: 'square',
          markerFill: '#000',
          markerLineColor: '#b4b3b3',
          markerLineWidth: 2,
          markerWidth: 15,
          markerHeight: 15,
          markerDx: 20
        },
        {
          markerType: 'x',
          markerWidth: 10,
          markerHeight: 10,
          markerLineColor: '#fff',
          markerDx: 20
        }
      ],
      language: 'zh-CN'
    }

    return type === 'area' ? AreaToolConf : DistanceToolConf
  }

  /**
   * 销毁
   */
  destroy() {
    const layers = this.layer
    const { area, distance, bearingLine } = layers

    // 移除测面工具
    if (area) {
      area.clear().remove()
      layers.area = null
    }

    // 移除测距工具
    if (distance) {
      distance.clear().remove()
      layers.distance = null
    }

    // 清空电子方位线并销毁绘制工具
    if (bearingLine) {
      bearingLine.clear().remove()
      layers.bearingLine = null
      this.drawTool.destroy()
    }
  }

  /**
   * 切换工具
   * @param {'area'|'bearingLine'|'distance'} type 类型
   */
  toggleTool(type) {
    const layers = this.layer
    let area = layers.area
    let distance = layers.distance
    const bearingLine = layers.bearingLine

    switch (type) {
      case 'area': {
        // 测面
        // 关闭测距
        if (distance) {
          distance.clear().remove()
          layers.distance = null
        }
        // 关闭电子方位线
        if (bearingLine) {
          bearingLine.clear().remove()
          layers.bearingLine = null
          this.drawTool.remove()
        }

        if (area) {
          area.clear().remove()
          layers.area = null
        } else {
          area = new maptalks.AreaTool(this._formatSymbol(type)).addTo(this.map)
          layers.area = area
        }
        break
      }
      case 'bearingLine': {
        // 电子方位线
        if (area) {
          area.clear().remove()
          layers.area = null
        }
        if (distance) {
          // 关闭测距
          distance.clear().remove()
          layers.distance = null
        }

        if (bearingLine) {
          bearingLine.clear().remove()
          layers.bearingLine = null
          this.drawTool.remove()
        } else {
          this._initLayer()
          let center = null
          const start = (e) => {
            center = e.viewPoint
          }
          const callback = (e) => {
            this.drawTool.clear()

            const coordinate = e.geometry.getCoordinates()
            const _radius = e.geometry.getRadius()
            const radius = (_radius / 1852).toFixed(3)
            const current = e.viewPoint
            const _angle = Math.atan2(
              current.y - center.y,
              current.x - center.x
            )
            const angle = ((_angle * 360 / 2 / Math.PI + 450) % 360).toFixed(
              1
            )
            const symbol = [
              {
                lineColor: 'red',
                lineWidth: 2,
                polygonFill: 'white',
                polygonOpacity: 0.3
              },
              {
                textName: `方位${angle}°，距离${radius}海里`,
                textSize: 18
              }
            ]
            const circle = new maptalks.Circle(coordinate, _radius, {
              symbol
            })
            const point = this.map.viewPointToCoord(current)
            const line = new maptalks.LineString([ coordinate, point ], {
              symbol: {
                lineColor: 'red',
                lineWidth: 2
              }
            })
            this.geometry = new maptalks.GeometryCollection([ line, circle ])
            bearingLine.clear().addGeometry(this.geometry)
          }
          this.drawTool.toggleDraw({
            drawend: callback,
            drawstart: start,
            mode: 'Circle',
            mousemove: callback,
            once: false,
            symbol: [
              {
                lineColor: 'red',
                lineWidth: 2,
                polygonFill: 'white',
                polygonOpacity: 0.1
              },
              {
                textName: '',
                textSize: 18
              }
            ]
          })
        }
        break
      }
      case 'distance': {
        // 测距
        // 关闭测面积
        if (area) {
          area.clear().remove()
          layers.area = null
        }
        // 关闭电子方位线
        if (bearingLine) {
          bearingLine.clear().remove()
          layers.bearingLine = null
          this.drawTool.remove()
        }

        if (distance) {
          distance.clear().remove()
          layers.distance = null
        } else {
          distance = new maptalks.DistanceTool(this._formatSymbol(type)).addTo(this.map)
          layers.distance = distance
        }
        break
      }
      default: {
        break
      }
    }
  }
}
