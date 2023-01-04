import React,{useState} from 'react'

const Table = ({data, apps}) => {
    
    const [view0, setView0] = useState(true)
    // const [viewapp, setViewApp] = useState(true)
    const [view1, setView1] = useState(true)
    const [view2, setView2] = useState(true)
    const [view3, setView3] = useState(true)
    const [view4, setView4] = useState(true)
    const [view5, setView5] = useState(true)
    const [view6, setView6] = useState(true)
    const [view7, setView7] = useState(true)
    // const [view8, setView8] = useState(true)
    // console.log(apps)
    // console.log(data)

    // const getApp = (appId) => {

    //     for (const item in apps){
    //         if(item.app_id == appId){
    //             return item.app_name
    //         }
    //     }

    // }

    function getAppName (appId){
        for(const app in apps){
            if(app.app_id===appId){
                return app.app_name
            }
        }
    }

    console.log(getAppName('123456'))

  return (
    <div>

        <div className='border rounded-md mb-8 py-8'>
        <div className='flex flex-wrap ' >


            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view0?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView0(!view0)}>
                Dates
            </div>
            {/* <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${viewapp?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setViewApp(!viewapp)}>
                appname
            </div> */}
            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view1?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView1(!view1)}>
                Clicks
            </div>
            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view2?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView2(!view2)}>
                Requests
            </div>
            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view3?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView3(!view3)}>
                Ad Response
            </div>
            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view4?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView4(!view4)}>
                Revenue
            </div>
            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view5?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView5(!view5)}>
                Impression
            </div>
            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view6?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView6(!view6)}>
                Fill Rate
            </div>
            <div className={`border-l-4 mx-4 text-2xl border px-3 py-1 rounded-md border-gray-400 my-2 ${view7?"border-l-blue-400": "border-l-gray-400" } hover:cursor-pointer`} onClick={()=>setView7(!view7)}>
                CTR
            </div>

        </div>

        <div className='flex justify-between items-end mt-8 w-full'>
            <div></div>
            <div>
            <button className='outline-none hover:bg-blue-500 border-blue-500 border mr-3 text-lg py-1 px-3 text-blue-500 hover:text-white'>Close</button>
            <button className='outline-none mr-4 bg-blue-500 border-blue-500 border hover:bg-white text-lg py-1 px-3 text-white hover:text-blue-500'>Apply Changes</button>
            </div>
        </div>
        </div>


        <table className="w-full">
            <thead className="bg-gray-50 border-b-2 w-full border-gray-200">
              <tr>
                <th className={`${view0? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  Date
                </th>
                <th className={`${view1? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  Clicks
                </th>
                <th className={`${view2? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  Requests
                </th>
                <th className={`${view3? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  Ad response
                </th>
                <th className={`${view4? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  Revenue
                </th>
                <th className={`${view5? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  Impression
                </th>
                <th className={`${view6? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  Fill Rate
                </th>
                <th className={`${view7? "w-20" : "hidden w-0"} p-3 text-sm font-semibold tracking-wide text-left`}>
                  CTR
                </th>
              </tr>
            </thead>

            

            {data.map((item, i) => (
              <tbody key={i} className="divide-y border-b w-full divide-gray-100 ">
                <tr className="bg-white justify-center">
                  <td className={`${view0? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {item.date.substring(0,10)}
                  </td>
                  <td className={`${view1? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {item.clicks}
                  </td>
                  <td className={`${view2? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {item.requests}
                  </td>
                  <td className={`${view3? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {item.responses}
                  </td>
                  <td className={`${view4? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {item.revenue.toFixed(2)}
                  </td>
                  <td className={`${view5? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {item.impressions}
                  </td>
                  <td className={`${view6? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {((item.requests/item.responses)*100).toFixed(2)}
                  </td>
                  <td className={`${view7? "" : "hidden w-0"}p-3 text-sm text-gray-700 whitespace-nowrap`}>
                    {((item.clicks/item.impressions)*100).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
    </div>
  )
}

export default Table