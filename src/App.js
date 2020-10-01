import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import logo from './macka.png';
import './App.css';
import MenuPage from './MenuPage.js'
import MenuPageNoAnimation from './MenuPageNoAnimation.js'
import Page from './Template.js'

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
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.</p>
      <p>
        Duis nec augue viverra, volutpat mi ac, tristique tellus.Duis a cursus orci.Nulla vel velit consequat, maximus diam ac, iaculis nunc.Integer eu pulvinar lorem.Maecenas blandit sed mauris iaculis mattis.Aenean est augue, ultrices ut metus nec, euismod porta risus.Morbi quis lacinia turpis, eu lobortis orci.Etiam sollicitudin est tristique, viverra lectus in, pellentesque est.Etiam maximus congue nibh, nec ullamcorper libero elementum in.Etiam facilisis convallis metus, et semper lorem finibus non.Fusce ut blandit augue.In sit amet malesuada arcu, ut suscipit tellus.Sed auctor eget justo non mattis.Curabitur a mi at mi tempus porttitor.Suspendisse at urna in dolor varius posuere sed quis lacus.
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
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.</p>
      <p>
        Duis nec augue viverra, volutpat mi ac, tristique tellus.Duis a cursus orci.Nulla vel velit consequat, maximus diam ac, iaculis nunc.Integer eu pulvinar lorem.Maecenas blandit sed mauris iaculis mattis.Aenean est augue, ultrices ut metus nec, euismod porta risus.Morbi quis lacinia turpis, eu lobortis orci.Etiam sollicitudin est tristique, viverra lectus in, pellentesque est.Etiam maximus congue nibh, nec ullamcorper libero elementum in.Etiam facilisis convallis metus, et semper lorem finibus non.Fusce ut blandit augue.In sit amet malesuada arcu, ut suscipit tellus.Sed auctor eget justo non mattis.Curabitur a mi at mi tempus porttitor.Suspendisse at urna in dolor varius posuere sed quis lacus.
      </p>
    </div>
  )
}

const makingimages = {
  title: "makingimages",
  photos: [],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.</p>
      <p>
        Duis nec augue viverra, volutpat mi ac, tristique tellus.Duis a cursus orci.Nulla vel velit consequat, maximus diam ac, iaculis nunc.Integer eu pulvinar lorem.Maecenas blandit sed mauris iaculis mattis.Aenean est augue, ultrices ut metus nec, euismod porta risus.Morbi quis lacinia turpis, eu lobortis orci.Etiam sollicitudin est tristique, viverra lectus in, pellentesque est.Etiam maximus congue nibh, nec ullamcorper libero elementum in.Etiam facilisis convallis metus, et semper lorem finibus non.Fusce ut blandit augue.In sit amet malesuada arcu, ut suscipit tellus.Sed auctor eget justo non mattis.Curabitur a mi at mi tempus porttitor.Suspendisse at urna in dolor varius posuere sed quis lacus.
      </p>
    </div>
  )
}

const reflectivepractice = {
  title: "reflectivepractice",
  photos: [],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.</p>
      <p>
        Duis nec augue viverra, volutpat mi ac, tristique tellus.Duis a cursus orci.Nulla vel velit consequat, maximus diam ac, iaculis nunc.Integer eu pulvinar lorem.Maecenas blandit sed mauris iaculis mattis.Aenean est augue, ultrices ut metus nec, euismod porta risus.Morbi quis lacinia turpis, eu lobortis orci.Etiam sollicitudin est tristique, viverra lectus in, pellentesque est.Etiam maximus congue nibh, nec ullamcorper libero elementum in.Etiam facilisis convallis metus, et semper lorem finibus non.Fusce ut blandit augue.In sit amet malesuada arcu, ut suscipit tellus.Sed auctor eget justo non mattis.Curabitur a mi at mi tempus porttitor.Suspendisse at urna in dolor varius posuere sed quis lacus.
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
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.</p>
      <p>
        Duis nec augue viverra, volutpat mi ac, tristique tellus.Duis a cursus orci.Nulla vel velit consequat, maximus diam ac, iaculis nunc.Integer eu pulvinar lorem.Maecenas blandit sed mauris iaculis mattis.Aenean est augue, ultrices ut metus nec, euismod porta risus.Morbi quis lacinia turpis, eu lobortis orci.Etiam sollicitudin est tristique, viverra lectus in, pellentesque est.Etiam maximus congue nibh, nec ullamcorper libero elementum in.Etiam facilisis convallis metus, et semper lorem finibus non.Fusce ut blandit augue.In sit amet malesuada arcu, ut suscipit tellus.Sed auctor eget justo non mattis.Curabitur a mi at mi tempus porttitor.Suspendisse at urna in dolor varius posuere sed quis lacus.
      </p>
    </div>
  )
}

const makemytype = {
  title: "makemytype",
  photos: [],
  description: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc ut tellus neque.Mauris consequat mauris orci, varius tempor massa egestas nec.Praesent aliquam viverra quam.Integer nec volutpat nisl, fermentum dapibus tortor.Nam malesuada nunc ultrices imperdiet dignissim.Aenean interdum at tortor nec laoreet.Maecenas lorem odio, aliquet vel semper in, semper in libero.
      </p>
      <p>
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.</p>
      <p>
        Duis nec augue viverra, volutpat mi ac, tristique tellus.Duis a cursus orci.Nulla vel velit consequat, maximus diam ac, iaculis nunc.Integer eu pulvinar lorem.Maecenas blandit sed mauris iaculis mattis.Aenean est augue, ultrices ut metus nec, euismod porta risus.Morbi quis lacinia turpis, eu lobortis orci.Etiam sollicitudin est tristique, viverra lectus in, pellentesque est.Etiam maximus congue nibh, nec ullamcorper libero elementum in.Etiam facilisis convallis metus, et semper lorem finibus non.Fusce ut blandit augue.In sit amet malesuada arcu, ut suscipit tellus.Sed auctor eget justo non mattis.Curabitur a mi at mi tempus porttitor.Suspendisse at urna in dolor varius posuere sed quis lacus.
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
        Donec ultrices luctus tristique.Mauris at porta turpis.Vestibulum non pretium diam.Aenean ut maximus dolor.Morbi quis hendrerit neque, sed tristique nisl.Fusce dignissim nec nisi id vulputate.Nulla et varius augue, a consequat libero.Proin mi nisi, viverra ac lectus sit amet, bibendum tempor ipsum.Etiam vestibulum elit eget pulvinar efficitur.Proin at ligula convallis, posuere neque vitae, suscipit risus.Suspendisse hendrerit interdum nisl, vel porttitor lectus molestie quis.Nam et eros leo.Etiam pharetra sollicitudin porttitor.Nam porta condimentum nisi at convallis.In luctus imperdiet nisl, eget hendrerit nunc gravida non.</p>
      <p>
        Duis nec augue viverra, volutpat mi ac, tristique tellus.Duis a cursus orci.Nulla vel velit consequat, maximus diam ac, iaculis nunc.Integer eu pulvinar lorem.Maecenas blandit sed mauris iaculis mattis.Aenean est augue, ultrices ut metus nec, euismod porta risus.Morbi quis lacinia turpis, eu lobortis orci.Etiam sollicitudin est tristique, viverra lectus in, pellentesque est.Etiam maximus congue nibh, nec ullamcorper libero elementum in.Etiam facilisis convallis metus, et semper lorem finibus non.Fusce ut blandit augue.In sit amet malesuada arcu, ut suscipit tellus.Sed auctor eget justo non mattis.Curabitur a mi at mi tempus porttitor.Suspendisse at urna in dolor varius posuere sed quis lacus.
      </p>
    </div>
  )
}


export default App;
