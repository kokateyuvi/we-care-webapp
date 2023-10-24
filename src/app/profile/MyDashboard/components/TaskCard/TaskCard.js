import React,{ Component } from "react";
import styled from "styled-components";

const CardItem = styled.li `
    width:300px;
    height:300px;
    border: 3px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 15px;
    margin-right:30px;
    cursor:pointer;
`
const Img = styled.img `
    width:294px;
    height:178px;
    border-top-left-radius : 15px;
    border-top-right-radius : 15px;
`
const InfoItem = styled.div `
    display:flex;
    flex-direction : row;
    width:100%;
    height: 27px;
    line-height: 27px;
    margin-top:8px;
`
const InfoImg = styled.img `
    width: auto;
    height:27px;
    margin-left:28px;
    margin-right:18px;
`
const InfoText = styled.span `
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`

class TaskCard extends Component{
    render(){
        const type = this.props.type;
        const imgSrc = this.props.imgSrc;
        const cardContents = this.props.cardContents;
        const elements = [];
        cardContents.forEach((item, index) => {
            elements.push(
                <InfoItem key={index} index={index}>
                    <InfoImg src={item.imgIcon} style={{marginLeft : index == 0 ? '35px' : '28px'}}></InfoImg>
                    <InfoText style={{color : index == 2 && type == 'normal' ? '#5EDEFC' : '#000', marginLeft : item.imgIcon == '' ? '30px' : ''}}>{item.text}</InfoText>
                </InfoItem>
            )
        });
        
        return(
            <CardItem>
                <Img src={imgSrc}></Img>
                {elements}
            </CardItem>
        );
    }
}

export default TaskCard;