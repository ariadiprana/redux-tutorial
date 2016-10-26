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
    const {data, deleteData} = this.props
    const liStyle = {
      'color' : '#ffffff',
      'backgroundColor' : '#000000'
    }
    return(
      <li style={liStyle}>{data.name} - {data.phone} <button type="button" onClick={()=>deleteData(data.id)}>delete</button> </li>
    )
  }
}


DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired
}

export default DataItem
