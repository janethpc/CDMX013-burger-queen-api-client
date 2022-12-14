

export const CardProducts = ({ image, name, price }) => {

    return (
        <>
            <p/>
            <div className="card">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                   
                    <a href="#" className="btn btn-primary">{price}</a>
                </div>
            </div>
            
      
        </>
    )
}
