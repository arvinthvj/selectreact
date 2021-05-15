import axios from 'axios';
import React, { Component } from 'react'
import SelectHooks from './SelectHooks'

import PropTypes from "prop-types";
import Select from "react-select"
import { SelectDropDown } from './SelectDropDown';

interface Props {
  message: string;
}
interface State {

  dadas: any;
  changeable: any;

}
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
}

export class SelectClass extends React.Component<Root, State, Props> {

  static defaultProps = { message: "hello" };
  static displayName = "yangq";
  static propTypes = {
    message: PropTypes.number
  };

  constructor(props: Root | Readonly<Root>) {
    super(props);
    this.state = {
      dadas: [],
      changeable:[]
    };
  }
   gettingFn(fetchedData: any): void {
    this.setState({ changeable: [...fetchedData] });
  
  }

  componentDidMount() {
    axios.get(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
      .then(res => {
        const dat = res.data;
        this.setState({ dadas: [...dat] });
      })
  }

      

render() {
  return (
    <div>
      <SelectDropDown />
      <h1>Hello React Class</h1>
      <SelectHooks />
    </div>
  )
}
}

export default SelectClass
