import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { openModalNew, closeModalNew } from '../redux/modalSliceNew'

function UserIconComponentNew() {
  const dispatch=useDispatch()
  const isModalOpenNow=useSelector(state=>state.modalNew.isModalOpen)

  const handleIconClick=()=>{
    dispatch(openModalNew())
  }

  const handleCloseIcon=()=>{
    dispatch(closeModalNew())
  }
  return (
    <>
      <button onClick={handleIconClick}>New Modal</button>
      {isModalOpenNow && (
        <div className="modal-new">
          <div className='modal-content-new'>
          <span className='close' onClick={handleCloseIcon}>&times;</span>
          <p>Modal Text</p>
          <input></input>
        </div>
        </div>
      )}
    </>
  )
}

export default UserIconComponentNew
