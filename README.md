# MongoDB Aggregation: Handling Empty Arrays in `$unwind`

This example demonstrates a common issue when using the `$unwind` operator in MongoDB aggregation pipelines.  If the array field being unwound is empty, `$unwind` will cause the entire document to be dropped, leading to unexpected results or errors.

The provided code shows a pipeline that uses `$lookup` to join two collections and then `$unwind` to process the joined data.  The bug arises when there are no matching documents in the second collection resulting in an empty array for `joinedData`.