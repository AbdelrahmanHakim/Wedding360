import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
width: 65%;
margin-left: 15%;
@media (max-width: 768px) {
width:100%;
margin-left: 0%;
  }

`
const Headline = styled.h2`
text-align:center;
font-family: arial;
padding-bottom: 5%;
`
const Container= styled.div`
display:grid;
grid-template-columns: auto auto auto;
padding-right: 0%;
margin-left: 4%;
@media (max-width: 768px) {
    display:inline-block;
    padding-bottom:0%;
  }
`
const TestmonialHeading = styled.h4 `
text-align:center;
padding-right:20%;
@media (max-width: 768px) {
    text-align:left;
    padding-left: 40%;
  }
`
const Paragraph = styled.p `
padding-left:30%;
@media (max-width: 768px) {
    padding: 5% 5% 5% 40%;
  }
`

const Image = styled.img`
padding-top:20%;
float:left;
padding-left: 3%;
@media (max-width: 768px) {
    margin-left:5%;
    padding-top:10%;
  }
`


const Testmonials = () => {
    return (
        <Wrapper>
            <Headline>
            WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.
            </Headline>
        
            <Container>
     
            <div>
            <Image  src="https://img.icons8.com/dotty/80/000000/dating-website.png"/>

            <TestmonialHeading>
             WEDDING WEBSITE
            </TestmonialHeading>
               <Paragraph>  
                 Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you.
               </Paragraph>
            </div>
            <div>
            <Image src="https://img.icons8.com/carbon-copy/100/000000/money-bag.png" style={{marginLeft: '-2%'}}/>
            <TestmonialHeading>
             BUDGETER
            </TestmonialHeading>
            <Paragraph>
                Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of. 
            </Paragraph>   
            </div>
           
            <div>
            <Image src="https://img.icons8.com/wired/64/000000/checklist.png"/>
            <TestmonialHeading>
             CHECK LIST
            </TestmonialHeading>
            <Paragraph>
                Set your tasks, create your priority list and never forget any wedding detail. 
            </Paragraph>
            </div>
            </Container>
                    
            <Container>
     
            <div>
            <Image  src="https://img.icons8.com/ios-filled/50/000000/send-hot-list.png"/>

            <TestmonialHeading>
            GUEST LIST
            </TestmonialHeading>
               <Paragraph>  
               Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.               
               </Paragraph>
            </div>
            <div>
            <Image  src="https://img.icons8.com/nolan/64/wedding-rings.png"/>
            <TestmonialHeading>
            VENDORS
            </TestmonialHeading>
            <Paragraph>
            Meet your service providers, view their profiles and make all the perfect choice for your wedding night            
            </Paragraph>   
            </div>
           
            <div>
            <Image src="https://img.icons8.com/ios/50/000000/gift.png"/>
            <TestmonialHeading>
            REGISTRY LIST
            </TestmonialHeading>
            <Paragraph>
            Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.            
            </Paragraph>
            </div>
            </Container>

        </Wrapper>
    )
}

export default Testmonials;