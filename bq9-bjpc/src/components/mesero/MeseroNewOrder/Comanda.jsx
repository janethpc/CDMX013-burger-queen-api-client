export const Comanda = () => {
  return (
    <>
        <div className="card">
              <h5 className="card-header" id="cardHeader">#</h5>
              <p></p>
              <p>{counter}</p>
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
