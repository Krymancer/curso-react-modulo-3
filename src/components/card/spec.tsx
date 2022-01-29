import * as React from "react";
import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import Card from "./index";

describe("Card", function () {
  it("Deve renderizar os cards como Redux ou React", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <Card author="author" title="title" url="url" />,
        container
      );
    });
    const item = container.querySelector("div");
    const textContents = Array.from(item?.childNodes ?? []).map((node) =>
      node.textContent?.trim()
    );

    expect(
      textContents.every(
        (text) => text === "author" || text === "title" || text === "url"
      )
    ).toBeTruthy();
  });
});
