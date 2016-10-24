import React, {PropTypes,Component} from 'react';

export const MODAL_CONSTANTS = {
	SHOW : 'SHOW_MODAL',
	HIDE : 'HIDE_MODAL'
};


export const show_modal = function show_modal(modal_type,modal_props,on_overlay_click){
	return {
		type : MODAL_CONSTANTS.SHOW,
		payload : {
			modal_type,
			modal_props,
			on_overlay_click
		}
	};
};

export const hide_modal = function hide_modal(){
	return {
		type : MODAL_CONSTANTS.HIDE,
	};
};



const initialModalState = {
	modal_type : null,
	modal_props : {},
	on_overlay_click : null
};
export const modalReducer = function(state={...initialModalState},action){
	switch(action.type){
		case MODAL_CONSTANTS.SHOW:
			return {
				...action.payload,
			};
		case MODAL_CONSTANTS.HIDE:
			return {
				...initialModalState
			};
		default :
			return state;
	}
};

const styles = {
  overlay : {
    position : "fixed",
    background : "rgba(0,0,0,0.5)",
    top : "0",
    left: "0",
    width : "100%",
    height : "100%",
    zIndex : "2",
  },
  overlay_hidden : {
    display : "none"
  },
  modal : {
    position : "fixed",
    top :"30px",
    background : "white",
    left : "30px",
    right : "30px",
    overflowY : "auto",
    zIndex : "2",
  }
};



class Modal extends Component{

  static propTypes = {
    on_overlay_click: PropTypes.function,
    modal_type : PropTypes.any,
    modal_props :PropTypes.any,
    modal_components : PropTypes.object.isRequired
  }

	_onOverlayClick(){
		const {on_overlay_click} = this.props;
		if(typeof on_overlay_click === 'function'){
			on_overlay_click();
		}
	}
	_modalClick(e){
		e.stopPropagation();
   	e.nativeEvent.stopImmediatePropagation();
	}

	render(){
		const {modal_type,modal_props, modal_components} = this.props;
		const COMPONENT = modal_components[modal_type];
		if(COMPONENT){
			return <div style={styles.overlay} onClick={(e)=>this._onOverlayClick(e)}>
				<div style={styles.modal} onClick={e=>this._modalClick(e)}>
					<COMPONENT {...modal_props} />
				</div>
			</div>;
		}else{
			return <div style={{
        ...styles.overlay,
        ...styles.overlay_hidden
      }} />;
		}

	}
};

export default Modal;
