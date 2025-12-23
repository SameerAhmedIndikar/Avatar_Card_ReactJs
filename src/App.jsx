import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <h1 style={{ color: "red" }}>Avatar Franchise 🚀</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card
          date="2009"
          name="Avatar 1"
          img="https://lumiere-a.akamaihd.net/v1/images/avatar_coverart_1600x686_36ea5484.jpeg"
          desc="Avatar is a 2009 epic science fiction film written and directed by James Cameron. It features an ensemble cast including Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver.[5] Distributed by 20th Century Fox,"
          anchor="https://en.wikipedia.org/wiki/Avatar_(2009_film)"
          budget="$237 M"
          rating="7.9/10"
          collection="$2.92 B"
        />

        <Card
          date="2022"
          name="Avatar 2"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYPdiw7YPBphCnufQItGRvSqw680c45eNww&s"
          desc="Avatar: The Way of Water is a 2022 American epic science fiction film directed by James Cameron, who co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno."
          anchor="https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water"
          budget="$460 M"
          rating="7.5/10"
          collection="$2.32 B"
        />

        <Card
          date="2025"
          name="Avatar 3"
          img="https://images.thedirect.com/media/article_full/avatar-3-fire-and-ash-gets-unsurprising-rating-ahead-of-2025-release_.jpg"
          desc="Avatar: Fire and Ash is a 2025 American epic science fiction film directed by James Cameron, who co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno."
          anchor="https://en.wikipedia.org/wiki/Avatar:_Fire_and_Ash"
          budget="$400 M"
          rating="7.5/10"
          collection="$2.32 B"
        />
      </div>
    </>
  );
}

export default App;
