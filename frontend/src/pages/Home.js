import React from 'react'
import Hero from '../Components/Home/Hero'
import Feature from '../Components/Home/Feature'
import DevTeam from '../Components/Home/DevTeam'
import CTA from '../Components/Home/CTA'



const Home = () => {
  
  // const apiUrl = 'https://api.render.com/deploy/srv-cdggc982i3mnksh17sd0?key=6-FB3elZoNk'
  // console.log("API "+apiUrl);
  
  // useEffect(() => {
  //   fetch(`${apiUrl}`).then((data) => {
  //     // console.log(data);
  //   })
  // }, [])

  return (
    <>

      <Hero />
      <Feature />
      <DevTeam />
      {/* <Contact/> */}
      <CTA />
    </>
  )
}

export default Home