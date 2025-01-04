```javascript
const pipeline = [
  {
    $lookup:
      {
        from: "collectionB",
        localField: "_id",
        foreignField: "foreignKey",
        as: "joinedData",
      }
  },
  {
    $unwind: "$joinedData" //Error prone if collectionB can be empty
  }
];
```