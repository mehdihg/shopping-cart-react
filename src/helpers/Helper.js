export const shorten = (title) => {
  const shortTitle = `${title.split(" ")[0]} ${title.split(" ")[1]}`;
  return shortTitle;
};
export const shortenParagraph = (desc) => {
  if (desc != null) {
    let newParagraph = [];
    let shortP;
    shortP = desc.split(" ");
    for (let i = 0; i < 35; i++) {
      newParagraph.push(shortP[i]);
    }
    newParagraph = newParagraph.join(" ");
    return newParagraph;
  }
};
export const shortClass = (title) => {
  const shortTitles = title.split(" ")[0];
  return shortTitles;
};
export const isInCart = (data, id) => {
  const findProduct = !!data.selectedItems.find((item) => item.id === id);
  return findProduct;
};
export const itemsQuantity = (data, id) => {
  const findIndexProduct = data.selectedItems.findIndex(
    (item) => item.id === id
  );
  if (findIndexProduct === -1) {
    return false;
  } else {
    return data.selectedItems[findIndexProduct].quantity;
  }
};
