function allOperationsRepeatingElements(arrayProducts) {
  addClassIdenticalElements(arrayProducts)
  addCountRepeatingElement(arrayProducts)

  let newArray
  newArray = deleteRepeatingElement(arrayProducts)

  return newArray
}

//Функция которая дает одинаковые классы повторяющимся элементам
function addClassIdenticalElements(data) {
  data.forEach(function (product) {
    let repeatingElementClass = `${excludeUndefined(
      product.idParent
    )} ${excludeUndefined(product.productSystem)} 
	   		${excludeUndefined(product.productColor)} ${excludeUndefined(
      product.colorSystem
    )} 
	   		${excludeUndefined(product.width)} ${excludeUndefined(product.height)} 
	   		${excludeUndefined(product.controlType)} ${excludeUndefined(
      product.fixationSystem
    )}
	   		${excludeUndefined(product.sizeSystem)} ${excludeUndefined(
      product.chainLoad
    )} 
	   		${excludeUndefined(product.chainFixing)} ${excludeUndefined(
      product.chainFixingUniversal
    )}
	   		${excludeUndefined(product.controlMethod)} ${excludeUndefined(
      product.plasticRetainer
    )} 
	   		${excludeUndefined(product.guideString)} ${excludeUndefined(
      product.additionalScotchTape
    )}
	   		${excludeUndefined(product.fasteningSelected)} ${excludeUndefined(
      product.brakeMechanism
    )} 
	   		${excludeUndefined(product.glazingBeadDepth)} ${excludeUndefined(
      product.mosquitoSize
    )} 
	   		${excludeUndefined(product.bottomCorner)} ${excludeUndefined(
      product.porductColorNumber
    )}`
    product.arrayElementClass = repeatingElementClass
  })
}

// добавление количества к повторяющимся элементам
function addCountRepeatingElement(allProduct) {
  var arr = allProduct

  var result = {}
  for (var i = 0; i < allProduct.length; ++i) {
    var a = arr[i].arrayElementClass
    if (result[a] != undefined) ++result[a]
    else result[a] = 1
  }

  // вторая часть уравнения
  arr.forEach(function (product) {
    for (repetProduct in result) {
      if (product.arrayElementClass == repetProduct) {
        product.numberRepetitons = result[repetProduct]
      }
    }
  })

  deleteRepeatingElement(arr)
}

// удаление повторяющихся элементов
function deleteRepeatingElement(allProducts) {
  allProducts = allProducts.filter(
    (thing, index, self) =>
      index ===
      self.findIndex((t) => t.arrayElementClass === thing.arrayElementClass)
  )

  return allProducts
}

// дополнительная функция
function excludeUndefined(text) {
  if (text != undefined) {
    return text
  } else {
    return ' '
  }
}
