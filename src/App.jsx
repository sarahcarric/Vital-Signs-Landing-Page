import { Outlet, useRouteError, useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'

export function MainBox(){
    return (
        <div css={ProblemBoxStyle}>
                       <div css={Title}>Vital Signs En Route<AboutUsButton/></div> 
                <div css={ProblemBox}>
                <div css={ProblemHeader}><h2>The Problem</h2></div>
                <div css={Problem}>
                    <p>Currently, the communication between ER doctors and the EMTs in the ambulance is severely limited, with doctors only knowing about a patient five minutes before their arrival to the hospital.  Due to limited communication, ER doctors lack the ability to monitor how a patient is doing en route to the hospital.  Thus, ER doctors are often blindsided by the dire states of their patients, which can delay the patient getting the care they need by a matter of life saving seconds or minutes.</p>
                </div>
                <div css={PurposeHeader}><h2>Our Solution and Purpose</h2></div>
                <div css={Purpose}>
                    <p>During patient transport, ambulances are unable to efficiently communicate patient’s vital signs to hospitals, leading to poorer patient outcomes. Hospitals are typically only notified of a patient’s vital signs 5 minutes before arrival; as a result, they are unable to properly prepare medications, blood, and other materials they may need before the patient arrives.</p>
                    <p>There is currently no competition with this product, as it is the first of its kind!</p>
                </div>
                </div>
            <div css= {DocStyle}>
                <div css={ContactHeader}>
                    <h3> Contact Information</h3>
            </div>
            <div css={ContactInfo}>
                <p>This technology is only accessible by request, we have no publicly accessible software. If you would like to utilize this technology or just learn more, contact Mike Kolenikov at mike.kolesnikov@gmail.com</p>
            </div>
         </div> 
      </div>
    )
}

export function AboutBox(){
    return(
        <div css={AboutBoxStyle}>
              
            <div css={Title}>Vital Signs En Route   <HomeButton /></div>
            <div css={AboutStyle}>
             <div css={AboutHeader}>
                    <h2>About Us!</h2></div>
                <div css={TeamInfo}>
                    <p>Our team is made up of four 4th year Applied Computer Science Students!</p>
                    <p>Sarah Carricaburu is in the Accelerated Masters Program, focusing on User Interface Design and Psychology.</p>
                    <p>Rylie Chen is graduating with a focus in Artificial Intelligence.</p>
                    <p>Lauren Twist is graduating with a focus in Web and Mobile Application Development.</p>
                    <p>Kierra Young is graduating with a focus in Human Computer Interaction with a minor in Psychology.</p>
                   
                </div>
                <div css={ProjectPartnerHeader}>
                     <h2>Our Project Partners</h2></div>
                </div>
                <div css={ProjectPartner}>
                    <p>The teams project partners and creators of the project are Mike Kolesnikov and Jerry Young.  Mike Kolesnikov is currently getting his PhD in OHSU’s Biomedical Informatics program looking for ways to optimize trauma patient care and this project was in part inspired by his work on the dissertation.</p>
                    <p>Jerry Young currently serves as the Chief Operating Officer of Strategic Business Solutions, Inc., where he oversees all day-to-day operations and provides hands-on support for strategic efforts, recruiting, and account management..</p>
             </div>
             
                    </div>
    

    )
}
export function AboutUsButton() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/About'); // Replace '/about' with your actual about us route
    };
  
    return (
      <button onClick={handleClick} css={AboutButtonStyler}>
        About Us
      </button>
    );
  }
  export function HomeButton() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/'); // Replace '/about' with your actual about us route
    };
  
    return (
      <button onClick={handleClick}css={HomeButtonStyler}>
        Home
      </button>
    );
  }
export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <p>Error: {error.statusText || error.message}</p>
        </>
    )
}


const Title=css`
    color: white;
    font-size: 50px;
    text-align: center;
    background-color: #4b7ed6; 
    padding: 10px; 
    margin: 10px;
    margin-bottom: 30px;
    border-radius: 5px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
`

const AboutBoxStyle =css`
    height:100%;
    font-size:20px; 
   
`
const AboutStyle=css`

color:white;
padding-bottom:10px;
`
const AboutHeader=css`
    text-align:center;
    background-color:#4B9CD3;
    width:20%;
    float:center;
    color:#F0F8FF;
    margin:0 auto;
    border-color:white;
    border-radius: 10px; 
    h2 {
        margin:3px;
    }
`
const TeamInfo=css`
    text-align:center;
    background-color: #7CB9E8;
    color:white;
    padding:5px;
    margin:10px;
    border-color:white;
    border-radius: 10px; 
    margin-bottom:10px;
`

const ProjectPartnerHeader=css`
text-align:center;
background-color:#4B9CD3;
width:20%;
float:center;
color:#F0F8FF;
margin:0 auto;
border-color:white;
border-radius: 10px; 
h2 {
    margin:3px;
}
`
const ProjectPartner=css`
    text-align:center;
    background-color: #7CB9E8;
    color:white;
    padding:5px;
    border-color:white;
    border-radius: 10px; 
    margin-bottom:10px;
`
const ProblemBoxStyle=css`
    font-size:20px; 
    color:#808080;

  
`

const ProblemBox=css`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color:white;
    padding-bottom:10px;

`
const ProblemHeader=css`
    text-align:center;
    background-color:#4B9CD3;
    width:20%;
    float:center;
    color:#F0F8FF;
    margin:0 auto;
    border-color:white;
    border-radius: 10px; 
    h2 {
        margin:3px;
    }
`

const Problem=css`
    text-align:center;
    background-color: #7CB9E8;
    color:white;
    padding:5px;
    border-color:white;
    border-radius: 10px; 
    margin-bottom:10px;
`


const PurposeHeader=css`
    text-align:center;
    margin-top:10px;
    margin-bottom:-5px;
    background-color:#4B9CD3;
    justify-content:center;
    width:20%;
    float:center;
    color:white;
    margin:0 auto;
    border-radius: 10px;
    h2 {
        margin:2px;
    }
    
    


`


const Purpose=css`
    text-align:center;

    font-family:Georgia, 'Times New Roman', Times, serif;
    background-color: #7CB9E8;
    color:white;
    padding:2px;
    border-radius: 10px;
`

const DocStyle=css`
    text-color: white;
    text-align:center;
    padding:20px;
`
const ContactHeader=css`
    text-align:center;
`
const ContactInfo=css`
    text-color: white;

    
`
const AboutButtonStyler=css`
    padding-left: 5px;
    margin: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color:white;
    color:#4B9CD3;
    padding:10px;
    float:left;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size:20px;
`
const HomeButtonStyler=css`
    padding-left: 5px;
    margin: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color:white;
    color:#4B9CD3;
    padding:10px;
    float:left;

    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size:20px;
`