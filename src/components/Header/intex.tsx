import { Bag, CaretDown, MagnifyingGlass, MapPin } from 'phosphor-react';
import { 
    HeaderConteiner, 
    HeaderContent, 
    Text,
    DivLinks,
    InputSearch,
    DivInput,
    TextLink,
    Image,
    DivTextConta,
    DivConta,
    Text2,
    TextLine,
    DivConta2,
    DivTextConta2,
    DivConta3,
    TextNumber,
    Text3
 } from './styles';

export default function Header() {
    return(
        <HeaderConteiner>
            <Text> Produtos com até 70% off! </Text>
            <HeaderContent>
                <Image src='./src/assets/Logo Horizontal.png' />
                <DivInput>
                    <InputSearch placeholder='Pesquisar...'/>
                    <MagnifyingGlass size={22} color="#fff"/>
                </DivInput>
                <DivTextConta>
                    <Text2>
                        Entrar / Criar conta
                    </Text2>
                    <DivConta>
                        <Text2>Minha conta</Text2>
                        <CaretDown size={20} color="#fff"/>
                    </DivConta>
                </DivTextConta>
                <TextLine>
                    |
                </TextLine>
                <DivTextConta2>
                    <MapPin size={35} color="#ffffff" />
                    <DivConta2>
                        <Text2>Onde está meu produto?</Text2>
                        <Text2>Rastrear Pedido</Text2>
                    </DivConta2>
                </DivTextConta2>
                <TextLine>
                    |
                </TextLine>
                <DivTextConta2>
                    <DivConta3>
                        <Text3>Sacola</Text3>
                    </DivConta3>
                    <Bag size={24} color="#ffffff" />
                    <TextNumber>0</TextNumber>
                </DivTextConta2>
            </HeaderContent>
            <DivLinks>
                <TextLink> Todas as coleções </TextLink>
            </DivLinks>
        </HeaderConteiner>
    );
}