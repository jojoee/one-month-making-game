// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  ggj2016: require("../assets/ggj2016.jpg"),
  realpc: require("../assets/realpc.jpg"),
  live1: require("../assets/live1.jpg"),
  live2: require("../assets/live2.jpg"),
  ourteam: require("../assets/ourteam.jpg"),
  ourgame: require("../assets/ourgame.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              One month<br />
              Making game
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              This is my experience
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold caps>not the proper way</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold caps>not the best way</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
            notes="Yea, we making game, we need a TOOL.
              When you search, you will found something likes,
              It's depend on
              - Game platform
              - Language you familiar with
              - 2D / 3D
              - Your dev OS
              - Etc.">
            <Heading size={2} fit caps lineHeight={1} textColor="primary">
              Definitely
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" textColor="white" bold caps>we have to pick a TOOL</Text>
            <List>
              <ListItem textColor="white">Cross platform</ListItem>
              <ListItem textColor="white">Community</ListItem>
              <List>
                <ListItem margin="0 0 0 60px" textColor="white">more tuts / examples</ListItem>
                <ListItem margin="0 0 0 60px" textColor="white">more plugins</ListItem>
                <ListItem margin="0 0 0 60px" textColor="white">more help / support</ListItem>
              </List>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Text textSize="3em" margin="20px 0px 0px" textColor="white" bold caps>Unity</Text>
            <Text textSize="3em" margin="20px 0px 0px" textColor="primary" bold caps>Phaser</Text>
            <Appear>
              <List>
                <ListItem textColor="primary">I know the workflow (by gulp.js)</ListItem>
                <ListItem textColor="primary">I am familiar with</ListItem>
                <ListItem textColor="primary">I know a lot of js plugins</ListItem>
              </List>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white"
            notes="In my opinion,
              writing your own game spent a lot of time
              Finally, you will see a lot of patterns">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              How I learn
            </Heading>
            <List>
              <ListItem textColor="black">See a lot of tuts / examples</ListItem>
              <ListItem textColor="black">Try to debug / implement / fix</ListItem>
              <ListItem textColor="black">Not write your own game</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Text textSize="2em" textColor="primary" bold>
              Last day before GGJ2016
            </Text>
            <Text textSize="3em" margin="20px 0px 0px" textColor="primary" bold>
              I got ~40 kind of games
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.ggj2016.replace("/", "")} bgDarken={0.75}>
            <Text textSize="3em" textColor="white" bold caps>
              Global Game Jam
            </Text>

            <Text textSize="2em" margin="20px 0px 0px" textColor="white" bold caps>
              (GGJ2016)
            </Text>

            <Text textSize="1em" margin="40px 0px 0px" textColor="white" bold>
              TLTR; Making game within 2 days
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="white"
            notes="When I decide to participate this event,
              I not found anythings about Thailand's site
              - How they live / code / eat / sleep
              
              So, all next slides will be something that I found on this event.
              Maybe, it can help you to decide to joining this event or not.">
            <Heading size={2} caps fit textColor="primary">
              Why attend ?
            </Heading>

            <Text textSize="2em" margin="20px 0px 0px" textColor="primary" bold>
              - It force me to make it
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
            notes="Before the last point.
              So, you need to prepare your team.
              At least 1 coder, 1 designer">
            <List>
              <ListItem textColor="primary">You have to had some experience</ListItem>
              <ListItem textColor="primary">Laptop is not enough</ListItem>
              <ListItem textColor="primary">1 monitor is not enough</ListItem>
              <ListItem textColor="primary">3% foreigner</ListItem>
              <ListItem textColor="primary">90% use Unity</ListItem>
              <ListItem textColor="primary">90% already have a team</ListItem>
              <ListItem textColor="primary">Thailands site has popular vote award</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.realpc.replace("/", "")} margin="0px auto" height="600px"/>
            <Text textSize="2em" margin="20px 0px 0px" textColor="primary" bold>
              40% use PC
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black"
            notes="So, you should arrive ~14.00 to pick a good area
              cause you will sleep / eat / code at your area">
            <Layout>
              <Fill>
                <Image src={images.live1.replace("/", "")} margin="0px auto 40px" height="400px"/>
              </Fill>
              <Fill>
                <Image src={images.live2.replace("/", "")} margin="0px auto 40px" height="400px"/>
              </Fill>
            </Layout>
            <Text textSize="2em" margin="20px 0px 0px" textColor="primary" bold>
              How they 
            </Text>
            <Text textSize="2em" margin="20px 0px 0px" textColor="primary" bold>
              live / code / eat / sleep
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.ourteam.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Text textSize="2em" margin="20px 0px 0px" textColor="white" bold>
              Our Team
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary"
            notes="This is all my experiences, thank you">
            <Image src={images.ourgame.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Text textSize="2em" margin="20px 0px 0px" textColor="white" bold>
              Our Game
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
