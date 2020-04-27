import styled ,{css} from 'styled-components';


export const IvertedButton= css`
&.inverted{
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
      background-color: black;
  color: white;
  border: none;

    }
  }


`;

const buttonStyles=css`
background-color: black;
color: white;
border:none;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

`
export const GoogleSignstyles=css`
    background-color: #4285f4;
    color:white;
    &:hover{
      background-color: #357ae8;
      border: none;
    }
  
`
export const GetButtonStyles=props=>{
    if(props.GoogleSignin){
      return GoogleSignstyles;
    }
    return props.inverted?IvertedButton:buttonStyles
}

export const CustomButton =styled.button`

min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
// padding: 0 35px 0 35px;
font-size: 15px;

text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
${GetButtonStyles}


`