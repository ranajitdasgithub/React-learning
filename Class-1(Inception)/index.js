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
//React.createElemnt('tag',{attribute in obj},children) //for multiple children pass it as an array of children

let root = ReactDOM.createRoot(document.getElementById("root"));

//If there is someting in the root element parent will be replaced not will append
//After render this h1 tag will be no more in the root element
{
  /* <root>
    <h1>First I'm present here</h1>
</root> */
}

root.render(parent);
