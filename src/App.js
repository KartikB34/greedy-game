import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appData, loadData } from './Actions/Data'
import { ToastContainer, toast } from 'react-toastify';
import Table from './Components/Table';

const App = () => {

  const dispatch = useDispatch()
  const { error, data} = useSelector((state) => state.data)
  const { error:errorapps, apps} = useSelector((state) => state.apps)

  useEffect(()=>{
    dispatch(loadData())
    dispatch(appData)

    if(error){
      toast.error(error);
      dispatch({
        type:"clearError"
      })

      if(errorapps){
        toast.error(errorapps);
        dispatch({
          type:"clearError"
        })
      }
    }
  },[dispatch, error, errorapps])

  // console.log(data)

  return (
    <div className='text-7xl'>
      App
      <Table data ={data} apps={apps}/>
      <ToastContainer />
    </div>
  )
}

export default App
