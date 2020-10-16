import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import logo from './logobg.svg';
import './App.css';
import MenuPage from './MenuPage.js'
import MenuPageNoAnimation from './MenuPageNoAnimation.js'
import Page from './Template.js'

import making_images_1 from "./photos/making_images/tiger.jpg"
import making_images_2 from "./photos/making_images/rooster.jpg"
import making_images_3 from "./photos/making_images/dragon.jpg"
import making_images_4 from "./photos/making_images/ox.jpg"
import making_images_5 from "./photos/making_images/snake.jpg"
import making_images_6 from "./photos/making_images/horse.jpg"
import making_images_7 from "./photos/making_images/goat.jpg"
import making_images_8 from "./photos/making_images/pig.jpg"
import making_images_9 from "./photos/making_images/rat.jpg"
import making_images_10 from "./photos/making_images/monkey.jpg"
import making_images_11 from "./photos/making_images/dog.jpg"
import making_images_12 from "./photos/making_images/rabbit.jpg"

import make_my_type_1 from "./photos/make_my_type/poster.jpg"
import make_my_type_2 from "./photos/make_my_type/mockup1.png"
import make_my_type_3 from "./photos/make_my_type/mockup2.png"
import make_my_type_4 from "./photos/make_my_type/photo.jpg"

import letterwork_1 from "./photos/letterwork/gill2.jpg"
import letterwork_2 from "./photos/letterwork/centaur2.jpg"
import letterwork_3 from "./photos/letterwork/gill3.jpg"
import letterwork_4 from "./photos/letterwork/centaur3.jpg"
import letterwork_5 from "./photos/letterwork/gill1.jpg"
import letterwork_6 from "./photos/letterwork/centaur1.jpg"

const Intro = () => (
  <div className="intro-container">
    <img src={logo} className="intro-macka-logo" alt="macka logo" />
  </div>
)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Intro/>
          <MenuPage/>
        </Route>
        <Route exact path="/home">
          <MenuPageNoAnimation />
        </Route>
        <Route path="/about">
          <Page content={about}/>
        </Route>
        <Route path="/letterwork">
          <Page content={letterwork}/>
        </Route>
        <Route path="/makingimages">
          <Page content={makingimages} />
        </Route>
        <Route path="/reflectivepractice">
          <Page content={reflectivepractice} />
        </Route>
        <Route path="/elementsofdesign">
          <Page content={elementsofdesign} />
        </Route>
        <Route path="/makemytype">
          <Page content={makemytype} />
        </Route>
        <Route path="/chanceandchoice">
          <Page content={chanceandchoice} />
        </Route>
      </Switch>
  </Router>

    
  );
}

const about = {
  title: "ABOUT",
  photos: [],
  description: (
    <div>
      <p className="body-text">
        What's up. I'm Macka, a first year visual communications student at UTS. I actually have a computer
        science background, but after a year in that line of work I decided it wasn't for me. I felt a strong
        need to switch to a field with more creative focus and having done graphic design as a hobby for years
        the choice to pursue it was easy.
      </p>
      <p className="body-text">
        This website documents some of my favorite work from my first year of study. Take a look around, there's 
        some stuff I'm really proud of!
      </p>
      
    </div>
  )
}

const letterwork = {
  title: "LETTERWORK",
  photos: [
    [letterwork_1, "Gill Sans character - lower case 'g'"],
    [letterwork_2, "Centaur character - Upper case 'Q'"],
    [letterwork_3, "Gill Sans characterisation"],
    [letterwork_4, "Centaur characterisation"],
    [letterwork_5, "Gill Sans characteristics"],
    [letterwork_6, "Centaur characteristics"],
  ],
  description: (
    <div>
      <p className="body-text">
        This is the very first project completed for my visual communications course. It is an intersection 
        of two interests of mine: typography and paper craft. The brief tasked us with analysing two fonts,
        in my case Gill Sans and Centaur, by generating three outcomes for each representing character, 
        characterisaton and characteristics.
      </p>
      <p className="body-text">
        The project also served as our first formal introduction to anatomies and taxonomies of typefaces. 
        We studied broad categorisations of serifs and sans serifs, but also more subtle classifications 
        such as geometric, grotesque, neo-grotesque and humanist fonts. 
      </p>
    </div>
  )
}

const makingimages = {
  title: "MAKING IMAGES",
  photos: [
    [making_images_1, "Tiger collage"],
    [making_images_2, "Rooster collage"],
    [making_images_3, "Dragon collage"],
    [making_images_4, "Ox collage"],
    [making_images_5, "Snake collage"],
    [making_images_6, "Horse collage"],
    [making_images_7, "Goat collage"],
    [making_images_8, "Pig collage"],
    [making_images_9, "Rat collage"],
    [making_images_10, "Monkey collage"],
    [making_images_11, "Dog collage"],
    [making_images_12, "Rabbit collage"],
  ],
  description: (
    <div>
      <p className="body-text">
        This brief called for the synthesis of imagery and elements of graphic language to create twelve 
        images corresponding to the animals of the Chinese zodiac. All images have been hand cut and 
        physically constructed out of coloured paper and found images from magazines.
      </p>
      <p className="body-text">
        My approach emphasized a distinct graphic style, incorporating abstract geometry and simplified 
        geometrical representations of each animal.
      </p>
      
    </div>
  )
}

const reflectivepractice = {
  title: "REFLECTIVE PRACTICE",
  photos: [],
  description: (
    <div>
      <p className="body-text">
        This assignment called on us to continuously reflect upon our own practice, as
        well as the practice of other designers. The outcomes seen here include a series of insight
        cards, serving to capture and communicate some key learnings from my second semester. 
      </p>
      <p className="body-text">
        Also included an outcome from the "Image That Can Change" component of the assignment. This takes
        the form of a graphic rendered through the library p5.js. My graphic is an indication of what is
        liable to happen if you do not manage your time well (metaphorically, of course). Click the image
        to find out.
      </p>
      
    </div>
  )
}

const elementsofdesign = {
  title: "ELEMENTS OF DESIGN",
  photos: [],
  description: (
    <div>
      <p className="body-text">
        This project required us to photographically capture 20 elements of design whilst maintaining
        a sense of visual consistency across the set. The project emphasized both taking and 
        curating photos. At the end of this process I came away with this series tied together by a
        visual theme framing imagery against a vast blue sky.
      </p>
      <p className="body-text">
        At the outset photography was a foreign medium to me, however I relished the opportunity to 
        experiment, learn, and engage with the world through the camera’s lens.
      </p>
    </div>
  )
}

const makemytype = {
  title: "MAKE MY TYPE",
  photos: [
    [make_my_type_1, 'Poster quoting Paul Klee - "Colour is the place where the brain and the universe meet"'],
    [make_my_type_2, 'First pass mockup of poster'],
    [make_my_type_3, 'Second pass mockup of poster'],
    [make_my_type_4, 'Photo for poster without any digitally added text'],
  ],
  description: (
    <div>
      <p className="body-text">
        This poster is the outcome of an investigation into 3D type. The brief asked for us to embody the 
        essence of the quote and the historical context of the author to whom the quote was attributed to
        through use of handmade elements. In my work I aimed to communicate this through a playfulness for
        which Paul Klee was known, and a colour scheme reminiscent of his work on colour theory.
      </p>
      <p className="body-text">
        The choice of the use of paper craft is a continuation of a developing affinity with the medium
        which is apparent from my first year body of work. I have included photos of some Illustrator 
        mockups to give and idea of my process.
      </p>
    </div>
  )
}

const chanceandchoice = {
  title: "CHANCE AND CHOICE",
  photos: [],
  description: (
    <div>
      <p className="body-text">
        This assignment introduced us to the possibilities associated with incorporating elements of
        chance into the design process. Using a series of prompts and randomness we generated a concept
        for a world, which served as a basis for both a small zine and virtual experience.
      </p>
      <p className="body-text">
        The virtual experience was made on the Mozilla hubs platform. It was an interesting opportunity
        to think about interactivity and user experience which I hope to explore more in my work in the
        future. 
      </p>
    </div>
  )
}


export default App;
