import React,{ Component } from "react";
import styled from "styled-components";

const TitleBlock = styled.div `
    height:34px;
    line-height:34px;
    margin-left:63px;
`
const Img = styled.img `
    height:30px;
    float:left;
    margin-right : 20px;
`
const TextTitle = styled.h2 `
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
`


class TitleWrapper extends Component{
    render(){
        const imgWidth = this.props.imgWidth;
        const imgSrc = this.props.imgSrc;
        const infoText = this.props.infoText;
        const marginTop = this.props.marginTop;

        return(
            <TitleBlock style={{marginTop : marginTop}}>
                { imgSrc != '' ? 
                    <Img style={{width : imgWidth}} src={imgSrc}></Img>
                  : ''
                }
               <TextTitle>{infoText}</TextTitle>
            </TitleBlock>
        );
    }
}

export default TitleWrapper;