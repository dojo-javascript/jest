const bucket = []

exports.fill = function(item) {
  return bucket.push(item)
}

exports.getBucket = function() {
  return bucket
}