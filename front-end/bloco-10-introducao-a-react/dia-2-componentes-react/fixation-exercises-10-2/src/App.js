import React from 'react';
import Image from './Image';
import staringCat from './cat-2083492_1280.jpg'

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source={ staringCat } alternativeText="Cute cat staring" />
      </main>
    );
  }
}

export default App;
