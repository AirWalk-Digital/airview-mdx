import React from 'react';


const getComponentType = Component => {
  if (Component.hasOwnProperty('props') && Component.props.hasOwnProperty('originalType')) {
    return Component.props.originalType;
  }

  if (Component.hasOwnProperty('type')) {
    return Component.type;
  }
};

function getContent(type, body) {
  // if type is "headings" will match any heading
  const headers = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

  let children = React.Children.toArray(body);
  let element = "";
  let header;
  if (children.length >= 1) {
    if (type == "headings") {
      const headerType = getComponentType(children[0]);
      if (headers.has(headerType)) {
        element = children[0]
        children = children.slice(1);
      }
    } else {
      if (children[0].hasOwnProperty('type') && typeof children[0].type !== 'function') {
        if (children[0].type == type) {
          element = children[0]
          children = children.slice(1);
        }
      } else if (typeof children[0].type === 'function' && children[0].type.name === type) {
        element = children[0]
        children = children.slice(1);
      }
    }
  }
  return { element, children };
}


function getListContent(content, i) {

  content = content.filter(item => item !== "\n") //strip all the empty entries (\n)

  let icon = "";
  let heading = "";
  let body = "";
  let key = i;

  if ((content.hasOwnProperty('type') && content.type == "ul") || (typeof content.type === 'function' && content.type.name === 'ul')) {
    //passed at a higher level
    // console.log("((content.hasOwnProperty('type') && content.type == 'ul')|| (typeof content.type === 'function' && content.type.name ==='ul'))");
    // console.log(content);
    content = React.Children.toArray(content.props.children);

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (content.hasOwnProperty('type') && typeof content.type !== 'function') {

      if (content.type == "li") {
        content = React.Children.toArray(content.props.children);
      }
    }
  }



  if (content[0].hasOwnProperty('props') && content[0].props.hasOwnProperty('children')) {
    icon = content[0].props.children; // icon or primary list item

  } else if (typeof content[0] == "string") {
    icon = content[0]
  }
  if (content[1].hasOwnProperty('props') && content[1].props.hasOwnProperty('children')) {
    let children = content[1].props.children.filter(item => item !== "\n") //strip all the empty entries (\n)
    // console.log(children)

    if (children.length > 1) {
      // there is a header and body
      if (children[0].hasOwnProperty('props') && children[0].props.hasOwnProperty('children')) {
        heading = children[0].props.children;
      }
      if (children[1].hasOwnProperty('props') && children[1].props.hasOwnProperty('children')) {
        body = children[1].props.children;
      }
    } else { // only body // remap to heading
      heading = children[0].props.children;
    }


  }

  return ({ key, icon, heading, body });

}


function getMDXparts(element) {
  if (element.hasOwnProperty('props') && element.props.hasOwnProperty('children') && element.hasOwnProperty('type')) {
    return ({ type: element.type, text: element.props['children'] })
  } else {
    return ({ type: '', text: '' });
  }
}

// fal -> light
// fas -> solid
// fab -> brands
// fad -> duotone (pro only)
// fass -> sharp

const faTypes = ["fal", "fas", "fab", "fad"];


export { getContent, getComponentType, getListContent, getMDXparts, faTypes }