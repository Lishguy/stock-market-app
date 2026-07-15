'use client'

import { memo } from 'react'
import useTradingViewWidget from '@/hooks/useTradingViewWidget'

interface TradingViewWidgetProps {
  title?: string
  scriptUrl: string
  config?: Record<string, unknown>
  height?: number
  className?: string
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config = {},
  height = 600,
  className,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height)



  return (
    <div className='w-full'>
        {title && <h3 className='font-semibold text-2xl text-gray-100 mb-5'>{title}</h3>}
        <div
        className={['w-full overflow-hidden rounded-lg border border-border bg-background', className]
            .filter(Boolean)
            .join(' ')}
        style={{ minHeight: height }}
        >
            <div
                ref={containerRef}
                className="tradingview-widget-container h-full w-full"
                aria-label={title ?? 'TradingView chart'}
                style={{ height: '100%', width: '100%' }}
            />
        </div>
    </div>
  )
}

export default memo(TradingViewWidget)
