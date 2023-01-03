import React from 'react'

const Table = ({data, apps}) => {
    // console.log(data)
    console.log(apps)
  return (
    <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Clicks
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Requests
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Ad response
                </th>
                <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">
                  Revenue
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Impression
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Fill Rate
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  CTR
                </th>
              </tr>
            </thead>

            

            {data.map((item, i) => (
              <tbody id={i} className="divide-y border-b divide-gray-100 ">
                <tr className="bg-white justify-center">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.clicks}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.requests}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.responses}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.revenue.toFixed(2)}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.impression}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {((item.requests/item.responses)*100).toFixed(2)}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {(item.clicks/item.impression)*100}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
  )
}

export default Table
