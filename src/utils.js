import axios from 'axios'

export function getReps(repOrSen,state,useState){
    axios.get(`/${repOrSen}/${state}`).then( res =>(
        useState(res.data.results)
    ))
}
