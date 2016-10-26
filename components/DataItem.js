import React, {Component, PropTypes} from 'react'

class DataItem extends Component{
  constructor(props,context){
    super(props, context) //super harus dijalanin kalau extend class lain
    this.state = {
      name: this.props.data.name || '',
      phone: this.props.data.phone || ''
    }
  }

  render(){
    const {data} = this.props
    return(
      <li>{data.name} - {data.phone} </li>
    )
  }
}


DataItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DataItem
