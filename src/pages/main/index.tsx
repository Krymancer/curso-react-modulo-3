import React, { useEffect, useState } from "react";

import "./index.scss";

import Card from "../../components/card";
import { book } from "../../api/interfaces";
import { connect } from "react-redux";

import { getBooks } from "../../redux/actionCreator";

const Main: React.FC = (props: any) => {
  const title = process.env.REACT_APP_TITLE || "Title not found in env file";
  const [q, sq] = useState<string>("");
  const [books, sb] = useState<book[]>([]);

  useEffect(() => {
    sb(props.books?.books ?? []);
  }, [props]); // eslint-disable-line

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="content">
        <div className="searchContainer">
          <input
            className="search"
            placeholder="Type your search here..."
            onChange={(e) => sq(e.target.value)}
          />
          <button
            onClick={() => {
              props.getBooks(q);
            }}
          >
            SEARCH
          </button>
        </div>
        <div className="results">
          {books.map((book) => (
            <Card
              key={book.title}
              author={book.author}
              title={book.title}
              url={book.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ books: state.books });

export default connect(mapStateToProps, { getBooks })(Main);
