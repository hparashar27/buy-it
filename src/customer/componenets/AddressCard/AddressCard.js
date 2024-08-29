import React from 'react'

const AddressCard = ({address}) => {
  // console.log(address)
  return (
    <div className='space-y-3'>
      <p className='font-semibold'>{address?.firstName}  {address?.lastName}</p>
      <p> {address?.streetAddress}</p>
      <p> {address?.city} , {address?.state}, {address?.pinCode}</p>
      <div className='space-y-1'>
       <p>Phone Number</p>
       <p>{address?.mobile}</p>
      </div>
    </div>
  )
}

export default AddressCard