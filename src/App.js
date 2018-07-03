import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  displayArticles(collection) {
    return collection.articles.map((article, i) => {
      return (
        <li key={i}>
          <h4>{article.title}</h4>
          <h5>by {article.author}</h5>
          <p>{article.body}</p>
        </li>
      );
    });
  }

  render() {
    const collections = this.state.collections.map((collection, i) => {
      return (
        <section key={i}>
          <h3>{collection.collectionName}</h3>
          <ul>{this.displayArticles(collection)}</ul>
        </section>
      );
    });

    return (
      <main className="App">
        <h1>Knowledge Center</h1>
        {collections}
      </main>
    );
  }
}

export default App;
