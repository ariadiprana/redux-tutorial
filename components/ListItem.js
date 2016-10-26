import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class ListItem extends Component{
  constructor(props, context){
    super(props,context)
  }


render(){
  const {data} = this.props
  let nodeData = data.map(function(data){
    <DataItem key={data.id} data={data} />
  })
  return(
    <ul>
      {nodeData}
    </ul>
    )
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ListItem
