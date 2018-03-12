import React from 'react'
import './style.css'

class Button extends React.PureComponent {
    render(){
        return <div
            className={ 'react-minimal-ui-button ' + ( this.props.type && (this.props.type.indexOf("primary") >= 0 || this.props.type.indexOf("secondary") >= 0 || this.props.type.indexOf("fab") >= 0) ? this.props.type : (this.props.type ? this.props.type : '') + ' primary') + ' ' + (this.props.className ? this.props.className : '' )}
            onClick = {this.props.onPress}
        >
            { this.props.children }
        </div>
    }
}

export default Button;