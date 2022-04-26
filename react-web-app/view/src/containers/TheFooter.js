import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="http://dma.com.bd:8000" target="_self" rel="noopener noreferrer">Virtual Office v1.2.0</a>
        <span className="ml-1">&copy; 2022 DMA</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://dma.com.bd" target="_blank" rel="noopener noreferrer">DMA</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
