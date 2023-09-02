function generateHashtag(str) {
  const words = str.trim().split(/\s+/);
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const hashtag = '#' + capitalizedWords.join('');
  if (hashtag.length > 140 || hashtag.length === 1) {
    return false;
  }
  return hashtag;
}
