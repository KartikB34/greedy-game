import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appData, loadData } from './Actions/Data'
import { ToastContainer, toast } from 'react-toastify';
import Table from './Components/Table';

const App = () => {

  const dispatch = useDispatch()
  const { loading, error, data} = useSelector((state) => state.data)
  const { error:errorapps, apps} = useSelector((state) => state.apps)

  console.log(data)

  useEffect(()=>async()=>{
    await dispatch(loadData())
    await dispatch(appData)

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

  return (
    <div className='text-7xl md:px-12'>
      App
      {data && apps &&<Table data ={data} apps={apps}/>}
      <ToastContainer />
    </div>
  )
}

export default App
