import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, name, description} = blogItemDetails

  return (
    <li className="blog-item">
      <div className="blog-item-container">
        <img className="blog-item-image" src={imageUrl} alt={`item${id}`} />
        <div className="blog-item-info">
          <h1 className="blog-item-title">{name}</h1>
          <p className="blog-item-topic">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default BlogItem
