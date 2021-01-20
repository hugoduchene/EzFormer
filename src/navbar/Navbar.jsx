import styled from 'styled-components'

const NavitemsStyled = styled.a`
    padding: ${props => props.padding ? props.padding : props.button ?
        "10px" : null};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.button ?
        "black" : console.error('You have to put a backgoundColor to do a button')};
    text-decoration: none;
    color: ${props => props.color ? props.color : "black"};
    &:hover{
        background-color: ${props => props.button && props.color ?
            props.color : console.error('you have to put a color')};
        color: ${props => props.button && props.backgroundColor ?
            props.backgroundColor : console.error('you have to put a backgroundColor')};
        transition: ${props => props.button ? "0.2s" : null};
        color: ${props => props.color ? props.color : "black"};
        border: none;
    }
`;

const NavitemsContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;


const NavItems = ({arrayLink}) => {
    return(<NavitemsContainer>
        {arrayLink.map((elt, i)=>{
            if (elt.button === true) {
                return(
                    <NavitemsStyled 
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

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-around;
    min-height: ${props => props.minHeight ? props.minHeight: console.error('You have to pute attributes minHeight')};
`;

const LinkTitleNav = styled.a`
    text-decoration: none;
    color: ${props => props.color ? props.color : "black"};
    &:hover{
        border: none;
        color: ${props => props.color ? props.color : "black"};
    }
`;

export const Navbar = ({title ,arrayNavItems}) => {
    return(
        <NavStyled>
            <h1>
                <LinkTitleNav href={title.href}>{title.content}</LinkTitleNav>
            </h1>
            {arrayNavItems.map((elt, i) => (
                <NavItems
                    key={i}
                    arrayLink={elt.arrayLink}
                />
            ))}
        </NavStyled>
    )
}