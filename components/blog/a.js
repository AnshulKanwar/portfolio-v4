const A = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" >{children}</a>
  )
}

export default A