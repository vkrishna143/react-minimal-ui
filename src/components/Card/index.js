import React from 'react'
import './style.css'

class Card extends React.PureComponent{
    render(){
        return <div
        className={'react-minimal-ui-card'}
        >
            { this.props.image ? <img src={this.props.image}></img> : null }
            <div className={"cardBody"}>
                { this.props.title ? <h1> {this.props.title} </h1> : null }
            </div>

            {/*{ this.props.image ? <img src={this.props.image}></img> : null }*/}

        </div>;
    }

}

export default Card;