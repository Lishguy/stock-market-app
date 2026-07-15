'use client'

import { useEffect, useRef } from 'react'

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown> = {},
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !scriptUrl) return

    container.innerHTML = ''
    container.dataset.loaded = 'false'
    container.dataset.config = JSON.stringify(config)

    const widgetContainer = document.createElement('div')
    widgetContainer.className = 'tradingview-widget-container__widget'
    widgetContainer.style.width = '100%'
    widgetContainer.style.height = `${height}px`
    container.appendChild(widgetContainer)

    const script = document.createElement('script')
    script.src = scriptUrl
    script.async = true
    script.type = 'text/javascript'
    script.text = JSON.stringify(config)

    script.addEventListener('load', () => {
      container.dataset.loaded = 'true'
    })

    container.appendChild(script)

    return () => {
      container.innerHTML = ''
      delete container.dataset.loaded
      delete container.dataset.config
      script.remove()
    }
  }, [scriptUrl, config, height])

  return containerRef
}

export default useTradingViewWidget
