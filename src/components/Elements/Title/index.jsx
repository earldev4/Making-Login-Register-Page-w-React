function Title (props){
    const {variant, children} = props
    return (
      <h1 className={`text-3xl font-bold mb-2 ${variant}`}
      >{children}</h1>
    )
  }

export default Title