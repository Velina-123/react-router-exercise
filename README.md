# Exercise: Dynamic Routing & Tailwind

## Links to Product Details

We already configured React Router for dynamic routing by adding this route definition:

```tsx
  // src/utils/routes.tsx
  {
      path: "products/:productId",
      element: <ProductDetails />,
  },
```

This tells React Router to always render the `<ProductDetails/>` component when the URL looks like /products/ANYTHING

So regardless if you call `/products/5` or `/products/abcde`, we will ALWAYS see the `ProductDetails` component.

The `ProductDetails` component can use the [`useParams`](https://reactrouter.com/api/hooks/useParams) hook provided by React Router to get the current value of the `productId` param (for the examples above, the value would be either `"5"` or `"abcde"`).

Your task is to create individual product links in the `ProductList` page that link to the the appropriate `ProductDetail` page.

For example:

The product

```ts
{
  id:1,
  name:"Kartoffeln",
  price:2.5
}
```

should link to `/products/1`

whereas this product

```ts
{
  id:2,
  name:"iPhone",
  price:800
}
```

should link to `/products/2`

On the `ProductDetails` page, you need to examine the `productId` param (by using `useParams` as described above) and search the matching product record in our `products` array.

For example:

If you call `/products/2`, the value of the param `productId` will be `"2"` (attention: this is always a string!). You should then find the iPhone record in the product list.

Finally, find a nice way to render the product information (id, name and price).

🚨 Your customers might call links for products that do not exist, e.g. `/products/145`. You don't want your app to crash in this case. What could you do?

## Bonus: Make it nicer!

If you have time left, do a little bit of Tailwind practice: Create an appealing style for the `ProductCard` component!
