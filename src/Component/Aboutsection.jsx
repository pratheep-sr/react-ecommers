import about from '../assets/image/about-dryfurits.jpg'

import {Paper,Typography,Container,Grid}  from '@mui/material'
function Aboutsection(){
    let area={
     width:"30%"
    }

    let aboutsection = [

        {
            id:1,
            title:"About Dry Furits",
            paragraph:"We are dedicated to providing premium-quality dry fruits that are fresh, nutritious, and carefully selected from trusted sources. Our products are hygienically processed and packed to preserve natural taste and health benefits. With a strong focus on quality, purity, and customer satisfaction, we ensure every pack meets the highest standards. Our mission is to deliver healthy, natural goodness you can trust every day.",
            
             heading:"Fresh & Hygienic Processing",
             heading1:"Premium Quality Products",
              heading2:"100% Natural & Pure",
               heading3:"Rich in Nutrition",
                heading4:"Quality You Can Trust",
        }
        
    ]
    return(


        <section >
           
            <Paper elevation={0} >
                
                <Grid container spacing={2}  >
                    
                    <Grid size={6}>
                      {
                        aboutsection.map((about)=>{
                          return(
                   <div key={about.id} >
                             <Typography variant="h2" >{about.title}</Typography>
                        <p>
                        {about.paragraph}
                    </p>
                    <ul>
                        <li>{about.heading}</li>
                        <li>{about.heading1}</li>
                        <li>{about.heading2}</li>
                        <li>{about.heading3}</li>
                        <li>{about.heading4}</li>
                    </ul>
                   </div>
                          )
                        })
                      }

                    </Grid>
                     <Grid size={6}>
                        <img src={about} />

                    </Grid>
                </Grid>

            </Paper>
   
        </section>

    )
}

export default Aboutsection;