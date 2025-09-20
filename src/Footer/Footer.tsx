import styled from 'styled-components'

const FooterS = styled.footer`
    display: flex;
    justify-content: space-between;
    background-color: #071424;
    align-items: center;
    padding: 1.5rem 2rem;
    color: #fff;
    
    @media (max-width: 768px) {
        padding: 1rem 1.5rem;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        padding: 0.8rem 1rem;
        gap: 0.8rem;
    }
`

const DeveloperInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
        align-items: center;
    }
`

const ContactTitle = styled.h3`
    color: #fff;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    opacity: 0.9;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 0.6rem;
    }
`

const ContactLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: center;
    
    @media (max-width: 768px) {
        justify-content: center;
        gap: 1rem;
    }
    
    @media (max-width: 480px) {
        gap: 0.8rem;
        flex-direction: column;
    }
`

const ContactLink = styled.a`
    color: #fff;
    text-decoration: none;
    opacity: 0.7;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        padding: 0.4rem 0.7rem;
        font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.3rem 0.6rem;
        font-size: 0.8rem;
        width: 100%;
        justify-content: center;
    }
`

const Copyright = styled.div`
    opacity: 0.6;
    font-size: 0.9rem;
    
    @media (max-width: 768px) {
        order: -1;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`

// Опционально: можно добавить иконки
const IconWrapper = styled.span`
    font-size: 1rem;
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`

const Footer = () => {
    return (
        <FooterS>
            <DeveloperInfo>
                <ContactTitle>Связь с разработчиком:</ContactTitle>
                <ContactLinks>
                    <ContactLink href="tg://resolve?domain=mylitlezummer" target="_blank">
                        <IconWrapper>📱</IconWrapper>
                        Telegram
                    </ContactLink>
                    <ContactLink href="https://vk.com/vlados.fedorov" target="_blank">
                        <IconWrapper>👥</IconWrapper>
                        VK
                    </ContactLink>
                    <ContactLink href="mailto:vladfedevg@gmail.com">
                        <IconWrapper>📧</IconWrapper>
                        Gmail
                    </ContactLink>
                    <ContactLink href="tel:+79956517257">
                        <IconWrapper>📞</IconWrapper>
                        +7 (995) 651-72-57
                    </ContactLink>
                </ContactLinks>
            </DeveloperInfo>
            
            <Copyright>
                © {new Date().getFullYear()} Weather App. Все права защищены.
            </Copyright>
        </FooterS>
    )
}

export default Footer