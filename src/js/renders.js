// funcoes basicas de renderização

export function renderA(element, classe,href, text,target) {
  var a = document.createElement("a");
  // configuracoes do span Categoria
  a.setAttribute("class", classe);
	a.setAttribute("href", href);
  a.setAttribute("target", target);
  a.textContent = text;
  element.appendChild(a);
}

export function renderButton(element, classe, text) {
  var button = document.createElement("button");
  // configuracoes do span Categoria
  button.setAttribute("class", classe);
  button.textContent = text;
  element.appendChild(button);
}

export function renderSpan(element, classe, text) {
  var span = document.createElement("span");
  // configuracoes do span Categoria
  span.setAttribute("class", classe);
  span.textContent = text;
  element.appendChild(span);
}

export function renderH2(element, classe, nome) {
  var h2 = document.createElement("h2");
  // configuracoes do titulo h2
  h2.setAttribute("class", classe);
  h2.textContent = nome;
  element.appendChild(h2);
  return h2;
}

export function renderIMG(picture, src, alt) {
  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  picture.appendChild(img);
  return img;
}

export function renderSource(picture, srcSet, minWidth) {
  // configuracoes de source
  var source = document.createElement("source");
  source.setAttribute("srcset", srcSet);
  source.setAttribute("media", `(min-width: ${minWidth}px)`);
  picture.appendChild(source);
  return source;
}

export function renderPicture(element, srcSet, nome) {
  var picture = document.createElement("picture");
  renderSource(picture, srcSet, 768);
  renderIMG(picture, srcSet, nome);
  element.appendChild(picture);
  return picture;
}

export function renderAWa(element, classe,number,textWA, text) {
	const href = `https://wa.me/${number}?text=${textWA}`;
	const classeWA = `fa-whatsapp whatsapp ${classe}`
  renderA(element, classeWA,href, text,"_blank");
}