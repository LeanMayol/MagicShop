const products = [
  {
    id: "camp",
    name: "campera",
    category: "Hombre",
    price: 3000,
    img: "https://www.ameshop.com.mx/medias/chamarra-nike-club-america-track-CW0439-454-1.png?context=bWFzdGVyfGltYWdlc3wxMTY5ODB8aW1hZ2UvcG5nfGltYWdlcy9oNjEvaDg3LzEwMjkzNDA3MzE4MDQ2LnBuZ3wzZGRhY2UyNzY0ZmRhOTQ5MDdjYmI5ZGZkOWMzODliZGY0YTE3Yzk5ZjBmZjBiYjgwYWZiZDE2YjIxYzdiMTM5",
    stock: 10,
  },
  {
    id: "chal",
    name: "Chaleco",
    category: "Mujer",
    price: 1500,
    img: "https://cdn.shopify.com/s/files/1/0576/7885/6345/products/071709-R01.jpg?v=1669855217",
    stock: 7,
  },
  {
    id: "sue",
    name: "Sueter",
    category: "Hombre",
    price: 2000,
    img: "https://www.ameshop.com.mx/medias/-CZ2322-060-1.png?context=bWFzdGVyfGltYWdlc3wyODM4ODN8aW1hZ2UvcG5nfGltYWdlcy9oZGEvaDVmLzEwMDE2MjMxMTI5MTE4LnBuZ3wzNzE5NDgwNWU3NzVhZGM0MzNjOWU2ZjAyYzhjZmRlNzZkM2E1MTc5ZTMyMGNjMjhhMDBlYjkyMGNlNTc3ZjI2",
    stock: 10,
  },
  {
    id: "pan",
    name: "Pants",
    category: "Hombre",
    price: 900,
    img: "https://www.innovasport.com/medias/IS-CD5442-456-1.png?context=bWFzdGVyfGltYWdlc3wxNTQyNjJ8aW1hZ2UvcG5nfGltYWdlcy9oMjMvaDUzLzEwMDE1NzA3NjYwMzE4LnBuZ3xlYzljZjVlYTJhYTQ0MzUzMWU0NDQ4YzU4MTRiNGMzMTRjYTU4ZTMwYzJmODk1NDdmZTAyYTgxNWRkZDc1NWMy",
    stock: 5,
  },
  {
    id: "pla",
    name: "Playera",
    category: "Mujer",
    price: 600,
    img: "https://www.innovasport.com/medias/playera-nike-america-19-20-polo-is-AT4457-706-1.jpeg?context=bWFzdGVyfGltYWdlc3w1NjUzMXxpbWFnZS9qcGVnfGltYWdlcy9oNzkvaDc1LzEwOTAxMjgxODY1NzU4LmpwZ3w1MTQ5YzY2NjZmOGQ1OGRjOTdmOWU2Y2MyNjk5OWIwMGY0MjdiMGQyYTA2YzIxZmFmYTQyODEwNzI3ODkxMTA1",
    stock: 10,
  },
  {
    id: "uni",
    name: "Uniforme",
    category: "Niño",
    price: 1000,
    img: "https://www.ameshop.com.mx/medias/AS-DJ7673-707-2.jpg?context=bWFzdGVyfGltYWdlc3wyNDQzNjd8aW1hZ2UvanBlZ3xpbWFnZXMvaGNlL2hhYi8xMTAxMzA5MDkwMjA0Ni5qcGd8MWE2MzQ5ZmVlZTA0NDNiMDk0MjhjYWRjYTI5NTE0MGVhNmMwYmE1MzYxNDgwOGY2YjVhNTk4Y2E4MTIyZGRlYg",
    stock: 20,
  },
  {
    id: "bal",
    name: "Balón",
    category: "Accesorio",
    price: 300,
    img: "https://www.innovasport.com/medias/balon-de-futbol-nike-club-america-is-SC3780-706-1.jpg?context=bWFzdGVyfGltYWdlc3w5ODc0OXxpbWFnZS9qcGVnfGltYWdlcy9oOTIvaDNjLzk5NTk0NTk3NDk5MTguanBnfDBlYzZhMmMwNTk0NjgwMWRiM2RjNjgxYmI4NzgzY2RlNzhhZDgxNTA4ZTk5NjJiMzhlMGYyMmUyNTQ5ODI3OWY",
    stock: 5,
  },
  {
    id: "rel",
    name: "Reloj",
    category: "Accesorio",
    price: 5000,
    img: "https://cdn.shopify.com/s/files/1/0250/1433/7599/products/886678461004_206.jpg?v=1663623491",
    stock: 2,
  },
  {
    id: "ter",
    name: "Termo",
    category: "Accesorio",
    price: 200,
    img: "https://www.ameshop.com.mx/medias/-BG16BL-1.png?context=bWFzdGVyfGltYWdlc3wxNjc0Njd8aW1hZ2UvcG5nfGltYWdlcy9oN2IvaDRjLzEwMzgxODkwNzgxMjE0LnBuZ3w0NWQxZTliNTM2Mjg4NWJlZGI2ZDUzZDA0NGJhMzgyNGI4MWNhMjUxZDZkMzRjNzllNzk5MzJjZDY1YWYzNTVm",
    stock: 5,
  },
  {
    id: "moc",
    name: "Mochila",
    category: "Accesorio",
    price: 2000,
    img: "https://www.ameshop.com.mx/medias/-DC3101-010-1.png?context=bWFzdGVyfGltYWdlc3w2Mjg3NzV8aW1hZ2UvcG5nfGltYWdlcy9oMDUvaGRmLzEwMzA4MzA4Nzk1NDIyLnBuZ3wxMTdhMGY4NGI1M2IwYzQyYWZmOTkyYWY1MjJlNmNhNTM0MzEwNzBlOWQ1MWNkMTViNDg0ODRjNjkzOWYyZDk1",
    stock: 2,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
