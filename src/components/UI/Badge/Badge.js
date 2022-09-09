import React from 'react'
import { TopSellerBadge } from './TopSellerBadge'

const Badge = ({ type, title }) => {
  return (
    <>
      {type === "Top Seller" && <TopSellerBadge title={title} />}
    </>
  )
}

export default Badge