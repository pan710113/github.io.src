// Convert string to TitleCase.
export function convertTitleCase(str) {
  
  if(!str) {
    return ""
  }

  str = str.replace('_', ' ')
  return str.toLowerCase().split(' ').map((word, i) => {
    return ['of', 'the', 'and'].includes(word) && i != 0 ? word : word.charAt(0).toUpperCase().concat(word.substr(1));
  }).join(' ');
}

// Return an integer number between min and max.
export function random_number(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
