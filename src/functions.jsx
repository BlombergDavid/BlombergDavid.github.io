export function returnListOfStrings(list) {
  if (list.length > 1) {
    return list.join(", ");
  } else {
    return list[0];
  }
}

export function renderDescription(text) {
  const regex = /'([^']+)'/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // Odd indices are the parts inside single quotes
      return <i key={index}>{part}</i>;
    } else {
      // Even indices are the regular text
      return part;
    }
  });
}