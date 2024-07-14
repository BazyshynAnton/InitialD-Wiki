'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [loadingPercent, setLoadingPercent] = useState(0)

  useEffect(() => {
    const simulateLoading = () => {
      let percent = 0
      const interval = setInterval(() => {
        percent += 1
        setLoadingPercent(percent)
        if (percent >= 100) {
          clearInterval(interval)
        }
      }, 50) // Simulate loading increment every 50ms
    }

    simulateLoading()
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'black',
        position: 'relative',
        zIndex: '99999',
      }}
    >
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: `${loadingPercent}%` }}
        transition={{ duration: 0.05 }}
        style={{
          width: '1px',
          height: '2px',
          backgroundColor: 'blue',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}
