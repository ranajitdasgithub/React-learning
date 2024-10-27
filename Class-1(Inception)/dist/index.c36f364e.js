let parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "children"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {
        id: "children2"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ])
]);
let heading = React.createElement("h1", {
    class: "heading",
    id: "header"
}, "Hello World from React");
// console.log(heading) // It will be a react element object, not a html element
//React.createElemnt('tag',{attribute in obj},children) //for multiple children pass it as an array of children
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.c36f364e.js.map
