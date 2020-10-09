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
  title: "about",
  photos: [],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.
      </p>
      
    </div>
  )
}

const letterwork = {
  title: "Letterwork",
  photos: [],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.
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
  title: "reflectivepractice",
  photos: [],
  description: (
    <div>
      <p className="body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p className="body-text">
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.
      </p>
      
    </div>
  )
}

const elementsofdesign = {
  title: "elementsofdesign",
  photos: [],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.
      </p>
      
    </div>
  )
}

const makemytype = {
  title: "MAKE MY TYPE",
  photos: [
    [make_my_type_1, 'Poster quoting Paul Klee - "Colour is the place where the brain and the universe meet"'],
  ],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.
      </p>
      
    </div>
  )
}

const chanceandchoice = {
  title: "chanceandchoice",
  photos: [],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.
      </p>
      
    </div>
  )
}


export default App;
