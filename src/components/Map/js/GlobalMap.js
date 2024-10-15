import * as maptalks from 'maptalks'

// 底图配置
const baseLayerConfig = {
  baseConfig: {
    satellite: [ 'satellite' ],
    sea: [ 'sea' ],
    light: [ 'light' ],
    dark: [ 'tdt_ter', 'tdt_tbo', 'tdt_cta' ]
  },
  layerConfig: {
    light: {
      max: 18,
      urlTemplate: 'http://115.29.203.175:17586/vec-cva/{z}/{x}/{y}.png'
    },
    sea: {
      max: 18,
      urlTemplate: 'http://192.168.2.201:1996/gisAssistant/wmts/combineTile/{z}/{y}/{x}?satellite=grid_tile/mapbox/satellite/<z>/<y>/<x>!mode=land&ocean=grid_tile/local/seaMap/01_temp_1-18/<z>/<y>/<x>!mode=ocean'
    },
    satellite: {
      max: 18,
      urlTemplate: 'http://115.29.203.175:17586/img-cia/{z}/{x}/{y}.png'
    },
    basemaps_dark: {
      max: 18,
      subdomains: [ 'a', 'b', 'c', 'd' ],
      urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
    },
    tdt_cia: {
      max: 18,
      subdomains: [ '0', '1', '2', '3', '4', '5', '6', '7' ],
      urlTemplate: 'http://inner.qdlimap.cn:9999/gisAssistant/wmts/grid_tile/tianditu/cia_w/{z}/{y}/{x}'
    },
    mapbox_cva: {
      max: 18,
      subdomains: [ '0', '1', '2', '3', '4', '5', '6', '7' ],
      urlTemplate: 'http://service.qdlimap.cn:9999/gisAssistant/wmts/grid_tile/mapbox/compartment/{z}/{y}/{x}'
    },
    tdt_tbo: {
      max: 18,
      subdomains: [ '0', '1', '2', '3', '4', '5', '6', '7' ],
      urlTemplate: 'http://inner.qdlimap.cn:9999/gisAssistant/wmts/grid_tile/tianditu/tbo_w/{z}/{y}/{x}'
    },
    tdt_ter: {
      max: 18,
      subdomains: [ '0', '1', '2', '3', '4', '5', '6', '7' ],
      urlTemplate: 'http://inner.qdlimap.cn:9999/gisAssistant/wmts/grid_tile/tianditu/ter_w/{z}/{y}/{x}'
    },
    tdt_cta: {
      max: 18,
      subdomains: [ '0', '1', '2', '3', '4', '5', '6', '7' ],
      urlTemplate: 'http://inner.qdlimap.cn:9999/gisAssistant/wmts/grid_tile/tianditu/cta_w/{z}/{y}/{x}'
    }
  }
}

const baseConfig = {
  center: [ 115.671719, 26.706489 ],
  zoom: 6,
  maxZoom: 18,
  minZoom: 1,
  attribution: '',
  enableInfoWindow: false,
  baseLayerName: 'light',
  pitch: 0,
  bearing: 0,
  dragRotate: false,
  dragPitch: false,
  scaleControl: true, // add scale control
  hideScale: true // 隐藏比例尺
}

export default class GlobalMap {
  static instance

  constructor(container, option) {
    if(!GlobalMap.instance) {
      this.baseConfig = { ...baseConfig, ...option }
      this._initMap(container, this.baseConfig)
      GlobalMap.instance = this
    }
    return GlobalMap.instance
  }

  _initMap(dom, option) {
    this.map = new maptalks.Map(dom, option)
    if (!Object.prototype.hasOwnProperty.call(option, 'baseLayer')) {
      this.toggleBaseLayer(option.baseLayerName)
    }
  }

  /**
   * 底图切换功能
   * @principles 以GroupTileLayer为载体，提供有限个底图用于组合，保证图层复用，尽可能减少缓存和实例化
   * @param opt  底图图层名称  与baseLayerConfig.baseConfig.name匹配
   */
  toggleBaseLayer(key) {
    let groupTileLayer = this.map.getLayer('base_group_tiles')
    if (!groupTileLayer) {
      groupTileLayer = new maptalks.GroupTileLayer('base_group_tiles')
      this.map.setBaseLayer(groupTileLayer)
    }
    // 获取底图名称
    const names = baseLayerConfig.baseConfig[key] || []
    const oldLayers = groupTileLayer.getLayers()
    // 添加或更新
    names.forEach((item, index) => {
      const config = baseLayerConfig.layerConfig[item]
      if (oldLayers.length > index) {
        oldLayers[index].show()
        oldLayers[index].setOptions(config)
        oldLayers[index].forceReload()
      } else {
        const layerName = `base_layer_${index}` // 索引做基础图层id
        config.Zindex = index
        new maptalks.TileLayer(layerName, config).addTo(groupTileLayer)
      }
    })
    // 如果存在的图层数量比较大，就清空隐藏
    if (names.length < oldLayers.length) {
      for (let i = names.length; i < oldLayers.length; i++) {
        oldLayers[i].clear()
        oldLayers[i].hide()
      }
    }
  }

  /**
   * 重置地图视角
   * @param {*} option 配置项
   */
  resetView(option = {}) {
    const { center, zoom, pitch, bearing, duration } = option
    this.map.animateTo({
        center: center || this.baseConfig.center,
        zoom: zoom || this.baseConfig.zoom,
        pitch: pitch || 0,
        bearing: bearing || 0
    }, {
        duration: duration || 500
    })
  }
}