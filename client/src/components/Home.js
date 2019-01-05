import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header, Image, Card, Button, Icon } from 'semantic-ui-react';

class Home extends React.Component {
  state = { videos: []}

  componentDidMount() {
    axios.get(`/api/videos`)
      .then( res => this.setState({ videos: res.data }))
  }

  sample = () => {
    const {videos} = this.state;
    if (videos.length) {
      const index = Math.floor(Math.random() * videos.length);
      return videos[index];
    } else {
      return null;
    }
  }

  render() {
    const video = this.sample();
    if (video) {
      return (
        <div>
          <br />
          <Header as='h1'>U-TOOB</Header>
          <br />
          <Card key={video.id}>
            <Card.Content>
              <Card.Header>
                Video Name
              </Card.Header>
              <Card.Description>
                Video Description
              </Card.Description>
              <Card.Meta>
                Registry
              </Card.Meta>
            </Card.Content>
            <Link to='/my_videos'>
              My Videos
            </Link>
          </Card>
        </div>
      )
    } else {
      return <h2> No Videos To Display </h2>
    }
  }
}

export default Home;