import React from 'react'

function condense(text, length) {
  if (text.length > length - 3) {
    // If the string is too long, trim it and add ellipses at the end
    return text.substring(0, length) + '...';
  } else if (text.length < length) {
    // HACKY: If the length of the text is too short, we pad it with invisible non-breaking spaces
    // These spaces ensure that the card is padded vertically to the correct size
    // Chances are descriptions are long enough but this is a fallback measure to keep card heights identical 
    let nbsp = "\xa0".repeat(4);
    let nbsp_scale = 1.7;
    return text + ` ${nbsp}`.repeat((length - text.length) / nbsp.length * nbsp_scale);
  } else {
    return text;
  }
}

function gridify(elements, num_columns) {
  let rows = [];
  for (let i = 0; i < elements.length; i += num_columns) {
    rows.push(
      <div className="row">
        {elements.slice(i, i + num_columns)}
      </div>
    );
  }
  return rows;
}

export {
  condense,
  gridify
};
