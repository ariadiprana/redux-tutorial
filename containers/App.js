import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItem from '../components/ListItem'
import * as AppActions from '../actions'

class App extends Component{
  render(){
      const {data,actions} = this.props
      return(
        <div>
          <ListItem data={data} actions={actions} />
        </div>
      )
  }
}


App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {data: state.data}
}

function mapDispatchToProps(dispath){
  return {
    actions:bindActionCreators(AppActions, dispath)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
