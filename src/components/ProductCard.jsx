function ProductCard({product}) {
  
  function onFavoriteClick() {
    alert("no anda")
  }

  return <div className="product-card">
    <div className="product-image">
      <img src={product.url} alt={product.title} />
      <div className="product-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          ♥
        </button>
      </div>
    </div>
    <div className="product-info">
      <h3>{product.title}</h3>
      <p>{product.release_date}</p>
    </div>
  </div>
}

export default ProductCard