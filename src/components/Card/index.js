import React from 'react'
import './style.css'

class Card extends React.PureComponent{
    render(){
        return <div
        className={'react-minimal-ui-card'}
        >
            { this.props.image ? <img src={this.props.image}></img> : null }
            <div className={"cardBody"}>
                { this.props.title ? <h2 className={'cardTitle'}> {this.props.title} </h2> : null }
                { this.props.subTitle ? <h4 className={'cardSubTitle'}> {this.props.subTitle} </h4> : null }
                { this.props.content ? <p className={'cardContent'}> {this.props.content} </p> : null }


                { this.props.cardActions != null && (this.props.cardActions.primary || this.props.cardActions.secondary)  ?
                    <div className={"cardActions"}>
                        { this.props.cardActions.primary ?
                            <div className={'cardAction'}>{this.props.cardActions.primary}</div>
                            :
                            null
                        }
                        { this.props.cardActions.secondary ?
                            <div className={'cardAction'}>{this.props.cardActions.secondary}</div>
                            :
                            null
                        }
                    </div>
                :
                    null
                }
            </div>

        </div>;
    }

}

export default Card;