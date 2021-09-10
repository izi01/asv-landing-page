import {theme} from '@config/theme';
import * as React from 'react';
import {Col, Container, NavItem, Row} from 'shards-react';
import styled from 'styled-components';
import {Navs} from './styles';

const Containe = styled(Container)`
    // max-width: 1360px;
    margin-bottom: 5rem;
    @media ${theme.media.phone} {
        max-width: 370px !important;
    }
`;

interface IProps {
}

const Navigations: React.FC<IProps> = ({children}) => {
    return (
        <Containe>
            <Row>
                <Col>
                    <React.Fragment>
                        <Navs>
                            {/*<NavItem>*/}
                            {/*    <a href={'/index2'}>*/}
                            {/*    <Button*/}
                            {/*        title=' '*/}
                            {/*        // onClick={() => window.open('/index2')}*/}
                            {/*    />*/}
                            {/*    </a>*/}
                            {/*</NavItem>*/}
                        </Navs>
                        {children}
                    </React.Fragment>
                </Col>
            </Row>
        </Containe>
    )
}

export default Navigations
