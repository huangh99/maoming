export default class WebSocketClient {
  url = '' // socket链接地址
  socket = null // socket实例
  reconnectCount = 0 // 重连次数
  maxReconnectCount = 5 // 最大重连次数
  reconnectInterval = 1000 * 10 // 重连时间间隔
  heartbeatInterval = 1000 * 30 // 重连时间间隔
  heartbeatTimer = null // 定时器

  constructor(url) {
    this.url = url
  }

  onopen(callback) {}
  onmessage(callback) {}
  onclose(callback) {}
  onerror(callback) {}

  /**
   * 消息发送
   * @param {*} message
   */
  send(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message)
    } else {
      console.error('[WebSocket] 未连接')
    }
  }

  /**
   * 初始化连接
   */
  connect() {
    if (this.reconnectCount === 0) {
      console.log('websocket', `初始化连接中...${this.url}`)
    }

    if(this.socket && this.socket.readyState === WebSocket.OPEN) {
      return
    }

    this.socket = new WebSocket(this.url)

    // 连接成功
    this.socket.onopen = (event) => {
      this.reconnectCount = 0 // 重置重连次数
      console.log(event)

    }

    this.socket.onmessage = (event) => {
      console.log(event)
    }

    this.socket.onclose = (event) => {
      if(this.reconnectCount === 0) {
        console.log('websocket', `连接断开[onclose]...${this.url}`)
      }
    }

    this.socket.onerror = (event) => {
      if(this.reconnectCount === 0) {
        console.log('websocket', `连接异常[onclose]...${this.url}`)
      }
    }
  }

  /**
   * 重新连接
   */
  reconnect() {
    if(this.reconnectCount < this.maxReconnectCount) {
      this.reconnectCount++
      console.log('WebSocket', `尝试重连(${this.reconnectAttempts}/${this.maxReconnectAttempts})...${this.url}`)
    }else{
      console.log('WebSocket', `最大重连失败，终止重连: ${this.url}`)

    }
  }

  /**
   * 关闭连接
   */
  close() {
    if(this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  /**
   * 开始心跳检测
   */
  startHeartbeat() {
    this.closeHeartbeat()
    this.heartbeatTimer = setInterval(() => {
      if(this.socket) {
        this.socket.send({ type: 'heartbeat', data: {} })
        console.log('WebSocket', '送心跳数据...')
      }else{
        console.log('WebSocket', '未连接')
      }
    }, this.heartbeatInterval)
  }

  /**
   * 关闭心跳检测
   */
  closeHeartbeat() {
    if(this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }
}
