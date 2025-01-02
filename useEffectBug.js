This error occurs when using the `useEffect` hook in React Native with a function that returns a value. The `useEffect` hook only accepts a function as its first argument, and if you return a value, it will throw an error.  Example:

```javascript
useEffect(() => {
  const subscription = someStream.subscribe(data => {});
  return subscription; // This will cause an error!
}, []);
```