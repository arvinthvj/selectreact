import React from 'react';

import axios from 'axios';
import { SelectDropDown } from './SelectDropDown';
import SelectHooks from './SelectHooks';

/* 
export interface Root {
  totalPassengers: number
  totalPages: number
  data: Daum[]
}

export interface Daum {
  _id: string
  name: string
  trips: number
  airline: Airline[]
}

export interface Airline {
  id: number
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
} */
export default class SelectSample extends React.Component<any>{
 
/*   constructor(props: any) {
    super(props); */

  state = {
    datas: []
  /* }; */

  /* this.handleClick = this.handleClick.bind(this); */
  }


  componentDidMount() {
    axios.get(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
      .then(res => {
        const datas1 = res.data.data;
        this.setState({ datas:datas1 });
      })
  }

  /*  handleClick(getData: any)  {
    
  }
 */
   

  render() {
   
    return (
        <div>
        <SelectHooks />
        <SelectDropDown data={this.state.datas}/>
      <ul>
        { this.state.datas.map((person:any) => <li>{person.name}</li>)}
      </ul>
      </div>
    )
  }
}