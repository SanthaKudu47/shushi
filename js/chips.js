function chip(src='', title='All') {
  const div = document.createElement("div");
  div.setAttribute("class", "section-two__chips--unit");
  if(src !==''){
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "icon");
    div.append(img);
  }

  
  const textNode = document.createTextNode(title);
  div.append(textNode);
  //div.innerText+=title;
  return div;
}

export { chip };
