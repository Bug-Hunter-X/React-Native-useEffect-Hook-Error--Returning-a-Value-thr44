The solution is to either return `undefined` or a cleanup function.  The cleanup function will be executed when the component unmounts or when the effect is re-run. Example:

```javascript
useEffect(() => {
  const subscription = someStream.subscribe(data => {});
  return () => {
    subscription.unsubscribe(); // Cleanup function
  };
}, []);
```
If no cleanup is needed, return `undefined`:

```javascript
useEffect(() => {
  //Do something without cleanup
  return undefined;
}, []);
```