import React, { Component } from "react";

class DogImage extends Component {
  constructor(props){
    super(props);

    this.state = {
      dogImage: undefined,
      loading: true
    }

    this.fetchDog = this.fetchDog.bind(this);
  }

  async fetchDog() {
    this.setState ({
      loading: true,
    }, 
    async () => {
      const URL = 'https://dog.ceo/api/breeds/image/random';

      const response = await fetch(URL);
      const result = await response.json();

      this.setState({
        dogImage: result.message,
        loading:false,
      });
    });
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { dogImage, loading } = this.state;

    return (
      <div>
        {!loading ? <img src={dogImage} alt="" /> : <p>loading...</p>}
        <button onClick={this.fetchDog}>Próximo</button>
      </div>
    )
  }
}

export default DogImage;