import React from "react";

export function returnListOfStrings(list) {
  if (list && list.length > 1) {
    return list.join(", ");
  } else if(list) {
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
      // Replace '\n' with <br /> for new lines
      const lines = part.split("\n");
      return (
        <React.Fragment key={index}>
          {lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {lineIndex > 0 && <br />} {/* Add <br /> for each new line */}
              {line}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    }
  });
}

export function truncateString(str, maxLength) {
  if (str && str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

export function generateUniqueId() {
  // Alphanumeric characters used for the ID
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Length of the ID
  const idLength = 20;

  let uniqueId = "";

  // Generate a random ID using the characters
  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters.charAt(randomIndex);
  }

  return uniqueId;
}

export function isTopCategoryUrl() {
  const topCategories = ["top-albums", "top-movies", "top-games", "top-shows"];
  const currentUrl = window.location.href;

  return topCategories.some((category) => currentUrl.endsWith(category));
}

export function currentTopCategory() {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const lastUrlSegment = urlParts[urlParts.length - 1];

  switch (true) {
    case lastUrlSegment.endsWith("top-albums"):
      return "album";
    case lastUrlSegment.endsWith("top-movies"):
      return "movie";
    case lastUrlSegment.endsWith("top-games"):
      return "game";
    case lastUrlSegment.endsWith("top-shows"):
      return "show";
    default:
      return "Unknown Category";
  }
}
