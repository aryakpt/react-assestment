import React from 'react'
import "./badge.css";
import "../../../App.css"

export const TopSellerBadge = ({ title }) => {
  return (
    <div className='top-seller-container'>
      <img src="/icons/ic_top-badge.svg" alt="top badge" width={20} />
      <p style={{fontWeight: "600", fontSize: "12px", color: "white"}}>{title}</p>
    </div>
  )
}
