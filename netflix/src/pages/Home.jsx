import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
   <Main/>
   <Row title='Up Coming' fetchURL={requests.requestUpcoming} rowID='1'></Row>
   <Row title='Popular' fetchURL={requests.requestPopular} rowID='2'></Row>
   <Row title='Trending' fetchURL={requests.requestTrending} rowID='3'></Row>
   <Row title='Top Rated' fetchURL={requests.requestTopRated} rowID='4'></Row>
    </>
  )
}

export default Home