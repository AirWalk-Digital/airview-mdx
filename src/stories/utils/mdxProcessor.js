import React from 'react';

export function getListFromContent(content) {

    if (typeof(content) == 'object') { content = React.Children.toArray(content); }

    
    content = content.filter(item => item !== "\n") //strip all the empty entries (\n)
    // console.log(content);

    

    let icon = "";
    let heading = "";
    let body = "";
    // let key = i;
  
    if (content.hasOwnProperty('props') && content.props.hasOwnProperty('children')) {
      if (content.props['type'] === "ul") {
        //passed at a higher level
        content = React.Children.toArray(content.props.children);
  
        if (Array.isArray(content)) {
          content = content[0];
        }
  
        if (content.hasOwnProperty('props') && content.props.hasOwnProperty('children')) {
  
          if (content.props['type'] === "li") {
            content = React.Children.toArray(content.props.children);
          }
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
  
      if (children.length > 1) {
        // there is a header and body
        if (children[0].hasOwnProperty('props') && children[0].props.hasOwnProperty('children')) {
          heading = children[0].props.children;
        }
        if (children[1].hasOwnProperty('props') && children[1].props.hasOwnProperty('children')) {
          body = children[1].props.children;
        }
      } else {
        // only body
      }
  
  
    }
  
    return ({ icon, heading, body });
  
  }