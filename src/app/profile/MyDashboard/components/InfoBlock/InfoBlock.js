import React,{ Component } from "react";
import styled from "styled-components";

const InfoWrapper = styled.div `
    text-align:center;
    margin: 0 15px;
`
const InfoImgBox = styled.div `
    position:relative;
    margin:auto;
    background: #F3D250;
    border-radius:50%;
`
const Img = styled.img `
    position : absolute;
`

const InfoText = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    margin-top:15px;
`

class InfoBlock extends Component{
    render(){
        const boxWidth = this.props.boxWidth;
        const width = this.props.width;
        const height = this.props.height;
        const left = this.props.left;
        const top = this.props.top;
        const imgSrc = this.props.imgSrc;
        const infoText = this.props.infoText;
        const bold = this.props.bold;

        return(
            <InfoWrapper style={{width : boxWidth}}>
               <InfoImgBox style={{width:width,height:height}}>
                   <Img src={imgSrc} style={{top : top,left : left}}></Img>
               </InfoImgBox>
               <InfoText style={{fontWeight : bold ? 'bold' : 'normal'}}>{infoText}</InfoText>
            </InfoWrapper>
        );
    }
}

export default InfoBlock;