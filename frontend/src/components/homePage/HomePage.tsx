import React from 'react'
import Header from './Header'
import AllProductSection from './AllProductSection'


class HomePage extends React.Component {
  constructor(props:String){
    super(props)
  }


  render(){
    return (
      <>
      <Header />
      <AllProductSection />
      </>
    )
  }
}

export default HomePage