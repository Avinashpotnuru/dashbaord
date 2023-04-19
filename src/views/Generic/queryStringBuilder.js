function queryStringBuilder(data) {
  const objToArray = Object.entries(data);

  const removedNullValues = objToArray.filter((o) => o[1] !== undefined);

  const removedEmptyValues = removedNullValues.filter((o) => o[1] !== "");

  const partialParams = removedEmptyValues.map((a) => a.join("="));

  return `?${partialParams.join("&")}`;
}

export default queryStringBuilder;
