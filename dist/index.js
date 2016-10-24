'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.modalReducer = exports.hide_modal = exports.show_modal = exports.MODAL_CONSTANTS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MODAL_CONSTANTS = exports.MODAL_CONSTANTS = {
	SHOW: 'SHOW_MODAL',
	HIDE: 'HIDE_MODAL'
};

var show_modal = exports.show_modal = function show_modal(modal_type, modal_props, on_overlay_click) {
	return {
		type: MODAL_CONSTANTS.SHOW,
		payload: {
			modal_type: modal_type,
			modal_props: modal_props,
			on_overlay_click: on_overlay_click
		}
	};
};

var hide_modal = exports.hide_modal = function hide_modal() {
	return {
		type: MODAL_CONSTANTS.HIDE
	};
};

var initialModalState = {
	modal_type: null,
	modal_props: {},
	on_overlay_click: null
};
var modalReducer = exports.modalReducer = function modalReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, initialModalState);
	var action = arguments[1];

	switch (action.type) {
		case MODAL_CONSTANTS.SHOW:
			return _extends({}, action.payload);
		case MODAL_CONSTANTS.HIDE:
			return _extends({}, initialModalState);
		default:
			return state;
	}
};

var styles = {
	overlay: {
		position: "fixed",
		background: "rgba(0,0,0,0.5)",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		zIndex: "2"
	},
	overlay_hidden: {
		display: "none"
	},
	modal: {
		position: "fixed",
		top: "30px",
		background: "white",
		left: "30px",
		right: "30px",
		overflowY: "auto",
		zIndex: "2"
	}
};

var Modal = function (_Component) {
	_inherits(Modal, _Component);

	function Modal() {
		_classCallCheck(this, Modal);

		return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	}

	_createClass(Modal, [{
		key: '_onOverlayClick',
		value: function _onOverlayClick() {
			var on_overlay_click = this.props.on_overlay_click;

			if (typeof on_overlay_click === 'function') {
				on_overlay_click();
			}
		}
	}, {
		key: '_modalClick',
		value: function _modalClick(e) {
			e.stopPropagation();
			e.nativeEvent.stopImmediatePropagation();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var modal_type = _props.modal_type;
			var modal_props = _props.modal_props;
			var modal_components = _props.modal_components;

			var COMPONENT = modal_components[modal_type];
			if (COMPONENT) {
				return _react2.default.createElement(
					'div',
					{ style: styles.overlay, onClick: function onClick(e) {
							return _this2._onOverlayClick(e);
						} },
					_react2.default.createElement(
						'div',
						{ style: styles.modal, onClick: function onClick(e) {
								return _this2._modalClick(e);
							} },
						_react2.default.createElement(COMPONENT, modal_props)
					)
				);
			} else {
				return _react2.default.createElement('div', { style: _extends({}, styles.overlay, styles.overlay_hidden) });
			}
		}
	}]);

	return Modal;
}(_react.Component);

Modal.propTypes = {
	on_overlay_click: _react.PropTypes.function,
	modal_type: _react.PropTypes.any,
	modal_props: _react.PropTypes.any,
	modal_components: _react.PropTypes.object.isRequired
};
;

exports.default = Modal;