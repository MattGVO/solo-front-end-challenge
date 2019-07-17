import axios from 'axios'

export function getReps(repOrSen,state,useState,setError){
    axios.get(`/${repOrSen}/${state}`).then( res =>{
        if(res.data.results){
            setError(false)
            useState(res.data.results)
        } else{
            setError(true)
        }
    })
}
