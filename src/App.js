import React from 'react';
import './assets/css/App.css';
import SearchForm from './components/SearchForm';
import ImageResults from './components/ImageResult';
import unsplash from '../src/api/unsplash';

class App extends React.Component {
  state = { images: [], bgImage: []}

  userSubmit = async (value) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: value },
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  }

  componentDidMount = async(value) =>{
    this.userSubmit('random')

    const randomImage = await unsplash.get('/photos/random',{
      params: { query: value },
    });

    this.setState({bgImage: randomImage.data.urls.regular})
    console.log(this.state.bgImage);
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{background: `url(${this.state.bgImage}) center center no-repeat / cover`}}>
          <div className="container">
            <SearchForm onUserSubmit={this.userSubmit} />
          </div>
        </div>
        <div className="container grid">
          <ImageResults images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;
