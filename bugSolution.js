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
    $unwind: {
      path: "$joinedData",
      preserveNullAndEmptyArrays: true
    }
  }
];
```