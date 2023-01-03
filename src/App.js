import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from './Actions/Data'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const dispatch = useDispatch()
  const { error, data} = useSelector((state) => state.data)

  useEffect(()=>{
    dispatch(loadData())

    if(error){
      toast.error(error);
      dispatch({
        type:"clearError"
      })
    }
  },[dispatch, error])

  console.log(data)
  // console.log(loading)

  return (
    <div className='text-7xl'>
      App
      <ToastContainer />
    </div>
  )
}

export default App
