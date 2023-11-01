function customRender(reactEle, mainContainer) {
  // version 0.1

  // const domElement = document.createElement(reactEle.type)
  // domElement.innerHTML = reactEle.children
  // domElement.setAttribute('href',reactEle.props.href)
  // domElement.setAttribute('target',reactEle.props.target)
  // mainContainer.appendChild(domElement)

  // version 0.2
  //Modren
  const domElement = document.createElement(reactEle.type);
  domElement.innerHTML = reactEle.children;
   for (const key in reactEle.props) {
    domElement.setAttribute(key,reactEle.props)[key]
   }

  mainContainer.appendChild(domElement);
}

const reactEle = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactEle, mainContainer);
