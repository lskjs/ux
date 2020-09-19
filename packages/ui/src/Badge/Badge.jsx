import React from 'react';
import {BadgeStyled, Wrapper} from './Badge.styles';

export default class Badge extends React.Component {
    render () {
        let component;
        if (!this.props.standalone) {
        component = 
        <Wrapper>
            <BadgeStyled color={this.props.color} backgroundColor={this.props.backgroundColor} dontShowZero={this.props.dontShowZero} standalone={this.props.standalone} position={this.props.position}>
                {this.props.count}
            </BadgeStyled>
        </Wrapper>;
        } else {
            component = 
        <BadgeStyled color={this.props.color} backgroundColor={this.props.backgroundColor} dontShowZero={this.props.dontShowZero} standalone={this.props.standalone} position={this.props.position}>
            {this.props.count}
        </BadgeStyled>;
        }
        return (
            <>
            {component}
            </>
        );
    }
}