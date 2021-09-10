import Button from '@components/Button';
import {Colors, Text, Title} from '@components/global.styles';
import * as React from 'react';
import {Fragment} from 'react';
import {Row} from 'shards-react';
import {Containe, Content} from './styles';
import {Col} from 'shards-react'

interface IntroductionProps {
    name: string;
}

const Introduction: React.FC<IntroductionProps> = ({name}) => {
    return (
        <Fragment>
            <Containe>
                <Row>
                    <Content>
                        <Text style={{fontSize: '20px'}} colors={Colors.pink}>
                            Hey! My name is
                        </Text>
                        <Title className='op1 big-text' style={{marginTop: '2rem',}} colors={Colors.gray}>
                            {name}.
                        </Title>
                        <Title className='big-text' style={{marginTop: '3rem', marginBottom: '3rem', opacity: 0.7}}
                               colors={Colors.light_gray}>
                            I build things for the web.
                        </Title>
                        <Text
                            className='small-text' colors={Colors.gray}>
                            Full stack Software developer based in Munich, Germany
                        </Text>
                        <br/>
                        {/*<div className="content-button01">*/}
                        {/*    <Button*/}
                        {/*        title="Check out my Github"*/}
                        {/*        classes='btn01'*/}
                        {/*        size='lg'*/}
                        {/*        onClick={() => window.open('https://github.com/izi01')}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="content-button01">
                            <Button
                                title="Send me a message"
                                classes='btn01'
                                size='lg'
                                onClick={() => window.open('mailto:andreas.voit@asv.solutions')}
                            />
                        </div>
                    </Content>
                </Row>
            </Containe>
        </Fragment>
    )
}

export default Introduction
