export const Comanda = ({contador}) => {
  return (
    <>
        <div className="card">
              <h5 className="card-header" id="cardHeader">#</h5>
              <p>{contador}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" id="items">
                    producto
                </li>
              </ul>
              <div className="card-footer" id="cardHeader">
                <div id="text-left">
                <p> TOTAL </p>
                
                <span>SUMA</span>
                </div>
                <div className="text-end">
                  <button href="#" className="btn" id="finishedOrder">Entregar</button>
                </div>
              </div>
            </div>
    </>
  )
}
