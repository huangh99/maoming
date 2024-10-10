/**
 * 基于maptalks的绘制操作
 * 目前支持polygon\circle\rectangle
 */
import * as maptalks from 'maptalks'

export default class DrawToolInMap {
  constructor(map) {
    this.map = map // 地图
    this.tool = null // 定义绘制工具
    this.geometry = null // 绘制的图形信息
    this._initLayer()
  }

  /**
   * 初始化绘制图层
   * @param symbol
   */
  _initLayer() {
    if (this.map.getLayer('draw_tool')) {
      this.layer = this.map.getLayer('draw_tool')
    } else {
      this.layer = new maptalks.VectorLayer('draw_tool', {
        zIndex: 2
      }).addTo(this.map)
    }
  }

  /**
   * 复现图形
   * @param className
   * @param params
   */
  initGeometry(className, params) {
    this.geometry = new maptalks[className](...params)
    this.layer.clear().addGeometry(this.geometry)
    return this.geometry
  }

  /**
   * 更新样式
   * @param symbol
   */
  setSymbol(symbol) {
    if (this.geometry) {
      this.geometry.setSymbol(symbol)
    }
  }

  /**
   * 销毁绘制工具和绘制图层
   */
  destroy() {
    this.geometry = null
    if (this.layer) {
      this.layer.clear().remove()
      this.layer = null
    }
    if (this.tool) {
      this.tool.remove()
      this.tool = null
    }
  }

  /**
   * 移除绘制工具并清空绘制图层
   */
  remove() {
    this.geometry = null
    if (this.layer) {
      this.layer.clear()
    }
    if (this.tool) {
      this.tool.remove()
      this.tool = null
    }
  }

  /**
   * 移除绘制工具
   */
  removeDraw() {
    if (this.tool) {
      this.tool.remove()
      this.tool = null
    }
  }

  /**
   * 清空绘制图层
   */
  clear() {
    if (this.layer) {
      this.layer.clear()
    }
  }

  /**
   * 绘制操作
   * @param config 配置信息
   */
  toggleDraw(config) {
    this.remove()
    // 关闭绘制工具
    const { drawend, drawstart, mousemove, mode, once, symbol } = config

    this.tool = new maptalks.DrawTool({
      mode: mode || 'Polygon',
      symbol,
      once // 默认false
    }).addTo(this.map)

    this.tool.on('drawend', (param) => {
      this.geometry = param.geometry
      this.layer.addGeometry(param.geometry)

      if (drawend) {
        drawend(param)
      }

      const geometries = this.layer.getGeometries()
      // 当绘制Point时，此逻辑会有问题。由于目前没有点位绘制，所以暂时先这么保留
      // 多次绘制的时候，只保留最后一次
      if (geometries.length > 1) {
        this.layer.removeGeometry(geometries[0])
      }
    })

    this.tool.on('drawstart', (param) => {
      if (drawstart) {
        drawstart(param)
      }
      // 置空
      this.geometry = null
    })

    if (mousemove) {
      this.tool.on('mousemove', (param) => {
        mousemove(param)
      })
    }

    return this.tool
  }
}
