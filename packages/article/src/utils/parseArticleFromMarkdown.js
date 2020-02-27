export default (md = '') => {
  const lines = md.trim().split('\n');
  const headerDelimiter = lines.indexOf('- - - -');
  if (headerDelimiter < 0 || headerDelimiter > 4) return { content: md };
  const headerLines = lines.slice(0, headerDelimiter);
  const res = { content: lines.slice(headerDelimiter + 1).join('\n') };
  headerLines
    .map(line => line.trim())
    .forEach(line => {
      if (line.indexOf('# ') === 0) {
        res.title = line.substr(1).trim();
      } else if (line.indexOf('`') !== -1 || line.indexOf('#') !== -1) {
        const tags = line.split(' ');
        tags
          .map(tag => tag.trim())
          .forEach(tag => {
            if (tag[0] === '`') {
              res.url = tag.substr(1, tag.length - 2);
            } else if (tag[0] === '#') {
              if (!res.tags) res.tags = [];
              res.tags.push(tag.substr(1));
            } else {
              // eslint-disable-next-line no-lonely-if
              if (__DEV__) console.error('parseArticleFromMd unknown tag', tag); // eslint-disable-line no-console
            }
          });
      } else {
        // eslint-disable-next-line no-lonely-if
        if (__DEV__) console.error('parseArticleFromMd unknown header line', line); // eslint-disable-line no-console
      }
    });
  return res;
};
