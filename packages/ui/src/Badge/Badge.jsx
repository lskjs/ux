import React from 'react';
import { BadgeStyled, Wrapper } from './Badge.styles';

export default class Badge extends React.Component {
    render () {
        const { color, backgroundColor, dontShowZero, standalone, position, count } = this.props;
        const badgeComponent = (
            <BadgeStyled 
                color={color} 
                backgroundColor={backgroundColor} 
                dontShowZero={dontShowZero} 
                standalone={standalone} 
                position={position}
            >
                {count}
            </BadgeStyled>
        );
        if (!standalone) {
            return (
                <Wrapper>
                    {this.props.children}
                    {badgeComponent}
                </Wrapper>
                
            );
        }
        return badgeComponent;
    }
}