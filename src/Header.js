import React from 'react';
import gmail from './img/gmailIcon.jpeg';
import twitter from './img/twitterIcon.jpeg';

class Header extends React.Component{
    render(){
        var headerStyle = {
            width : "100%",
            height : 100,
            backgroundColor : "#CBB5A1",
            position : "absolute"
        };

        var collegeNameStyle = {
            fontFamily : "Lucida Grande, American TypeWriter, Times",
            fontWeight : "normal",
            fontSize : 40,
            color : "black",
            float : "left",
            padding : 10,
            margin : "10px 0px 10px 20px"
        };

        var IconStyle = {
            height : 60,
            width : 60,
            backgroundColor : "black",
            float : "left",
            margin : 20
        };

        var socIconStyle = {
            height : 40,
            width : 40,
            float : "right",
            margin : "30px 20px"
        };

        var helpStyle = {
            fontFamily : "American Typewriter, Times New Roman",
            fontSize : 24,
            margin : "30px 20px",
            float : "right",
            backgrounColor : "#CBB5A1",
            color : "black"
        };

        return(
            <div style={headerStyle}>

                <div style = {IconStyle}>
                    <svg>
                        <circle cx="30" cy="30" r="20" stroke="white" stroke-width="5" fill="black" />
                    </svg>
                </div>

                <div>

                    <a href = "" style = {helpStyle}>Help</a>
                    <a href = "https://gmail.com"><img style = {socIconStyle} src = {gmail} alt = "gmailIcon"/></a>
                    <a href = "https://twitter.com"><img style = {socIconStyle} src = {twitter} alt = "twitterIcon"/></a>

                </div>

                <h1 style = {collegeNameStyle}>College Name</h1>

            </div>
        );
    }
}

export default Header;