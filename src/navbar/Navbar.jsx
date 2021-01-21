import styled from 'styled-components'
import React from 'react'
import { Container } from '../flex/Flex'

const NavitemsStyled = styled.a`
    margin-right: ${props => props.marginRight ? props.marginRight : null};
    padding: ${props => props.padding ? props.padding : props.button ?
        "10px" : null};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.button ?
        "black" : null};
    text-decoration: none;
    color: ${props => props.color ? props.color : "black"};
    &:hover{
        background-color: ${props => props.button && props.color ?
            props.color : null};
        color: ${props => props.button && props.backgroundColor ?
            props.backgroundColor+"!important" : null};
        transition: ${props => props.button ? "0.2s" : null};
        color: ${props => props.color ? props.color : "black"};
        border: none;
    }
`;

const NavitemsContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;


const NavItems = ({arrayLink, spaceElement}) => {
    return(<NavitemsContainer>
        {arrayLink.map((elt, i)=>{
            if (elt.button === true) {
                return(
                    <NavitemsStyled 
                        marginRight={spaceElement ?? spaceElement}
                        href={elt.link} 
                        key={i}
                        color={elt.color ?? elt.color}
                        button={true}
                        backgroundColor={elt.backgroundColor}
                        padding={elt.padding ? elt.padding : false}
                    >
                        {elt.content}
                    </NavitemsStyled>
                )
            } else{
                return(
                    <NavitemsStyled 
                        marginRight={spaceElement ?? spaceElement}
                        href={elt.link} 
                        key={i}
                        color={elt.color ?? elt.color}
                    >
                        {elt.content}
                    </NavitemsStyled>
                )
            }
        })}
    </NavitemsContainer>)
}

const NavContentStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-height: ${props => props.minHeight ? props.minHeight: console.error('You have to pute attributes minHeight')};
`;

const NavContainer = styled.nav`
    width: 100%;
    background-color: ${props => props.backgroundColor ? props.backgroundColor: null};
`;

const LinkTitleNav = styled.a`
    text-decoration: none;
    color: ${props => props.color ? props.color : "black"};
    &:hover{
        border: none;
        color: ${props => props.color ? props.color : "black"};
    }
`;

export const Navbar = ({title , arrayNavItems}) => {
    return(
        <NavContainer backgroundColor={title.backgroundColor}>
            <Container >
                <NavContentStyled minHeight={title.minHeight}>
                    <h1 style={{display: "flex", alignItems: "center", maxWidth: "50%"}}>
                        <LinkTitleNav 
                            color={title.color ? title.color : false}
                            href={title.href}
                        >{title.content}</LinkTitleNav>
                    </h1>
                    {arrayNavItems.map((elt, i) => (
                        <NavItems
                            key={i}
                            arrayLink={elt.arrayLink}
                            spaceElement={title.spaceElement}
                        />
                    ))}
                </NavContentStyled>
            </Container>
        </NavContainer>
    )
}