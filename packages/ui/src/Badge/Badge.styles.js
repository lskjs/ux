import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Wrapper = styled.div 
    `
    position: relative;
    background: lightgrey; 
    width: 35px; 
    height: 35px;
    `;

const WithParent = props => {
    if (!props.standalone) {
        return css`
            position: absolute;
            transform: translate(40%,-40%);
            top: 0;
            right: 0;
            
        `;
    }
}

const Position = props => {
    if (props.position !== undefined) {
        if ((props.position[0] == 'bottom') && (props.position[1] == 'left')){
            return css`
            top: auto;
            right: auto;
            bottom: 0;
            left: 0;
            transform: translate(-40%,40%);
            `;
        } else if ((props.position[0] == 'top') && (props.position[1] == 'left')){
            return css`
            right: auto;
            left: 0;
            transform: translate(-40%,-40%);
            `;
        }
        else if ((props.position[0] == 'bottom') && (props.position[1] == 'right')){
            return css`
            top: auto;
            bottom: 0;
            transform: translate(40%,40%);
            `;
        }
    }
}

const BadgeStyled = styled.span
    `
    font-size: 12px;
    border-radius: 10px;
    padding: 1px 5px;
    white-space: nowrap;
    text-align: center;
    ${WithParent}
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
    display: ${(props) => (props.dontShowZero) ? 'none' : 'initial'};
    ${Position}
    `;

export {BadgeStyled, Wrapper};