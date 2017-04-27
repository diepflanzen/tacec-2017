export function toAbsPath (lang, path) {
  return lang ? (path ? ["", lang, path].join("/") : ["", lang].join("/")) : ["", path].join("/");
}

export function getRelPath (props) {
  var relPath = props.location.pathname.slice(props.route.path.length)
  return (relPath.charAt(0) === '/') ? relPath.slice(1) : relPath
}
