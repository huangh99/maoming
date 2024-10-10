/**
 * 基于maptalks的经纬网叠加
 */
import * as maptalks from 'maptalks'
import { LineStringLayer, PointLayer } from '@maptalks/gl-layers'

export default class GridLineInMap {
  constructor(map) {
    this.map = map
    // 经纬线
    this.line = new LineStringLayer('grid_line').addTo(this.map)
    // 经纬度文字
    this.text = new PointLayer('grid_point').addTo(this.map)

    this._watchMap()
  }

  /**
   * 初始化经纬网格
   * @private
   */
  _initGridLine() {
    const zoom = this.map.getZoom()
    this.line.clear()
    this.text.clear()

    if (this.line.isVisible() && zoom > 2) {
      const extent = this.map.getExtent()
      let xstart = zoom < 8 ? Math.ceil(extent.xmin) : extent.xmin
      let ystart = zoom < 8 ? Math.ceil(extent.ymin) : extent.ymin

      while (xstart < extent.xmax) {
        const longitude = new maptalks.LineString(
          [
            [ xstart, extent.ymin ],
            [ xstart, extent.ymax ]
          ],
          {
            symbol: {
              lineColor: 'grey',
              lineWidth: 1,
              lineOpacity: 1
            }
          }
        )
        const longitudeText = new maptalks.Marker([ xstart, extent.ymin ], {
          symbol: {
            textName: `${xstart}°`,
            textSize: 12,
            textFill: 'grey',
            textOpacity: 1,
            textDx: -20,
            textDy: -50
          }
        })
        this.line.addGeometry(longitude)
        this.text.addGeometry(longitudeText)
        xstart += 1
      }

      while (ystart < extent.ymax) {
        const latitude = new maptalks.LineString(
          [
            [ extent.xmin, ystart ],
            [ extent.xmax, ystart ]
          ],
          {
            symbol: {
              lineColor: 'grey',
              lineWidth: 1,
              lineOpacity: 1
            }
          }
        )
        const latitudeText = new maptalks.Marker([ extent.xmax, ystart ], {
          symbol: {
            textName: `${ystart}°`,
            textSize: 12,
            textFill: 'grey',
            textOpacity: 1,
            textDx: 200,
            textDy: 20
          }
        })
        this.line.addGeometry(latitude)
        this.text.addGeometry(latitudeText)
        ystart += 1
      }
    }
  }

  /**
   * 地图事件监听
   * @private
   */
  _watchMap() {
    this._initGridLine()

    this.map.on('viewchange', () => {
      this._initGridLine()
    })
  }

  /**
   * 经纬网显隐控制
   * @param visible
   */
  toggleVisible(visible) {
    if (visible) {
      this.text.show()
      this.line.show()
    } else {
      this.text.hide()
      this.line.hide()
    }
  }
}
