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
    const idx = Number(e.currentTarget.getAttribute("idx"));
    if (this.state[type] === idx) {
      this.setState({
        [type]: null
      });
    } else {
      this.setState({
        [type]: idx
      });
    }
  }

  displayArticles(collection) {
    return collection.articles.map((article, i) => {
      return (
        <li key={i}>
          <h4 onClick={e => this.display(e, "article")} idx={i}>
            {article.title}
          </h4>
          {this.state.article === i ? (
            <article>
              <h5>by {article.author}</h5>
              <p>{article.body}</p>
            </article>
          ) : (
            ""
          )}
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
