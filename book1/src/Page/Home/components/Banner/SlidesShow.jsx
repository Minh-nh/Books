import React from 'react';
import './BannerStyle.css';
import SlideshowGallery from './slideshow-gallery';
import Banner1 from './assets/slideshow_1.jpg'
import Banner3 from './assets/slideshow_2.jpg'
import Banner4 from './assets/slideshow_3.jpg'

const collection = [
  { src: Banner1},
  { src: Banner3},
  { src: Banner4, },
];

export default class App extends React.Component {
  render() {
    return (
      <div className="Banner">
        <SlideshowGallery
          input={collection}
          mode={`automatic`}
          timeout={`3000`}
        />
      </div>
    );
  }
}