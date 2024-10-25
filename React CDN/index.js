{
  /* <div id='parent'>
      <div id='children'>
          <h1>I'm h1 tag</h1>
          <h2>I'm h2 tag</h2>
      </div>
      <div id='children2'>
          <h1>I'm h1 tag</h1>
          <h2>I'm h2 tag</h2>
      </div>
  </div> */
}

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

let heading = React.createElement(
  "h1",
  { class: "heading", id: "header" },
  "Hello World from React"
);
// console.log(heading) // It will be a react element object, not a html element

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
