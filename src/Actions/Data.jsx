import axios from "axios"

export const loadData =(startDate, endDate)=> async (dispatch) => {

    try {

        dispatch({
            type:"dataRequest",
        })

        // const {data} = await axios.get(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`)
        const {data} = await axios.get(`http://go-dev.greedygame.com/v3/dummy/report?startDate=2022-12-01&endDate=2022-12-30`)
        // console.log(data.data);

        dispatch({
            type:"dataSuccess",
            payload: data.data,
        })
        
    } catch (error) {
        dispatch({
            type:"dataFailure",
            payload: error.response.data.message,
        })
    }

} 