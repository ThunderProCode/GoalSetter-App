import React from 'react';
import { 
    Header,
    Logo,
    Ul,
    StyledLink,
    SignInIcon,
    UserIcon,
} from './PageHeaderStyles';

const PageHeader = () => {
    return (
        <Header>
            <Logo>
                <StyledLink to='/'>
                    GoalSetter
                </StyledLink>
            </Logo>
            <Ul>
                <li>
                    <StyledLink to='/login'>
                        <SignInIcon/> Login
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='/register'>
                       <UserIcon/> Register
                    </StyledLink>
                </li>
            </Ul>
        </Header>
    );
};

export default PageHeader;