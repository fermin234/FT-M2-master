var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let resultados = traverseDomAndCollectElements(matchFunc, startEl.children[i]);    
    resultSet = resultSet.concat(resultados);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  return selector[0] === '#' ? 'id' : selector[0] === '.' ? 'class' : selector.includes('.') ? 'tag.class' : 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = e => `#${e.id}` === selector ? true : false;
  } else if (selectorType === "class") {
    matchFunction = e => {
      for (let i = 0; i < e.classList.length; i++) {
        if(`.${e.classList[i]}` === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = e => {
      let [tag, clase] = selector.split('.');
      return matchFunctionMaker(tag)(e) && matchFunctionMaker(`.${clase}`)(e);
    }
  } else if (selectorType === "tag") {
    matchFunction = e => e.tagName.toLowerCase() === selector;
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
