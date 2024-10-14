import styled from "styled-components";

export const HeaderConteiner = styled.header`
    background: ${props => props.theme["primaria"]};
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const HeaderContent = styled.div`    
    background: ${props => props.theme['secundaria']};
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 35px;
`

export const Text = styled.text`
    color: ${props => props.theme['white']};
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
`

export const TextLink = styled.text`
    color: ${props => props.theme['white']};
    text-align: center;
`

export const TextLine = styled.text`
    color: ${props => props.theme['white']};
    font-size: 30px;
    margin-left: 28px;
`

export const DivLinks = styled.div`
    margin-top: 90px;
    margin-left: 373px;
`

export const Text2 = styled.text`
    color: ${props => props.theme['white']};
`

export const Text3 = styled.text`
    color: ${props => props.theme['white']};
`

export const TextNumber = styled.text`
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['primaria']};
    padding: 5px;
    margin-left: 5px;
    border-radius: 90px;
`

export const DivConta = styled.div`
    display: flex;
    align-items: center;
`

export const DivConta2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

export const DivTextConta = styled.div`
    margin-left: 28px;
`

export const DivTextConta2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 28px;
`

export const DivConta3 = styled.div`
    align-items: center;
    margin-right: 10px;
`

export const InputSearch = styled.input`
    background-color: transparent;
    padding: 4px;
    width: 570px;
    border: 0px;
    margin-left: 5px;
    outline: none;

    &::placeholder {
        color: ${props => props.theme['white']};
    }
`

export const Image = styled.img`
    width: 100px;
    margin-right: 40px;
`


export const DivInput = styled.div`
    width: 617px;
    padding: 8px;
    border-radius: 10px;
    background-color: ${props => props.theme['primaria']};
    display: flex;
    align-items: center;
`
