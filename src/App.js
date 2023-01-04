import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appData, loadData } from './Actions/Data'
import { ToastContainer, toast } from 'react-toastify';
import Table from './Components/Table';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {

  const dispatch = useDispatch()
  const { loading, error, data} = useSelector((state) => state.data)
  const { appsloading, error:errorapps, apps} = useSelector((state) => state.apps)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  // console.log(data)

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
      <div className='flex text-2xl mb-16'>
        <p>From: </p><DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
        <p>To: </p><DatePicker selected={endDate} onChange={(date:Date) =>{ setEndDate(date)}} />
      </div>
      {loading || appsloading? <div>Loading...</div>: data && apps &&<Table data ={data} apps={apps}/>}
      <ToastContainer />
    </div>
  )
}

export default App