# redux-awesome-modal

A redux Modal component which allows you to pass props to the modal child. 

## Usage 


    import React, {Component} from 'react';
    import reducers from '../../reducers';
    import {connect} from 'react-redux';
    import Modal, {show_modal,hide_modal} from 'redux-awesome-modal';


## Create A Modal Component


    class MyModalComponent extends Component{
      render(){
        const {count} = this.props;
        return <div style={{padding: "16px 24px"}}>{count}</div>
      }
    }
    
## Add it to your reducers

    import {modalReducer} from 'redux-awesome-modal';
    
    combineReducers({
       ...,
       modal : modalReducer
    });



## Add the modal from the library to your Root App

    const mapAppStateToProps = function(state){
      const {modal} = state;
      return {
        modal
      };
    };
    
    const App = connect(mapAppStateToProps,{
      show_modal,
      hide_modal
    })(class App extends React.Component{
      render(){
        const {modal} = this.props;
        console.log(modal);
          return 	<div>
              <button onClick={()=>this.props.show_modal('modal_one',{
                 count : 1
              },()=>this.props.hide_modal())}> Show Modal </button>
              
              
              {this.props.children}
              
              <Modal {...modal} modal_components={{
                "modal_one" : C
              }} />
              
          </div>;
        }
      }
    );

## API

    modal_components -- Define an object which maps a String to a Modal . This will define which modal to show when show_modal action is fired.
    show_modal - Takes 3 arguments, modal_type (String), modal_props (Props for the component which the Modal Renders), on_overlay_click (Function. Function that is fired when the overlay is clicked on)
    
    
 
