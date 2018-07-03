import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      collection: null,
      article: null
    };
  }

  display(e, type) {
    if (this.state[type] !== null) {
      this.setState({
        [type]: null
      });
    } else {
      this.setState({
        [type]: Number(e.currentTarget.getAttribute("idx"))
      });
    }
    debugger;
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
    const collections = this.state.data.collections.map((collection, i) => {
      return (
        <section key={i}>
          <h3 onClick={e => this.display(e, "collection")} idx={i}>
            {collection.collectionName}
          </h3>
          {this.state.collection === i ? (
            <ul>{this.displayArticles(collection)}</ul>
          ) : (
            ""
          )}
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
