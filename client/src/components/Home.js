import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import { Header, Image, Card, Button, Icon } from 'semantic-ui-react';

class Home extends React.Component {
  state = { videos: []}

  componentDidMount() {
    axios.get(`/api/videos`)
      .then( res => this.setState({ videos: res.data }))
  }

  renderVideos = () => {
    return this.state.videos.map( v =>(
      <div>
        <p>{v.title}</p>
        <p>{v.duration}</p>
        <p>{v.genre}</p>
        <p>{v.description}</p>
        <p>{v.url}</p>
        <Iframe 
        url={v.url}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
        />
      </div>
    ))
  }

  render() {
      return (
        <div>
          {this.renderVideos()}
        </div>
    )
  }
}

export default Home;