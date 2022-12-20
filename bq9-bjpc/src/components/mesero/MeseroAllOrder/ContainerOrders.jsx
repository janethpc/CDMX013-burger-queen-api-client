

export const ContainerOrders = ({ userid, order, dateEntry, status}) => {
  return (
    <>
    
        <div className="card" id="bgc">
  <div className="card-body" >
    <h5 className="card-title"> Order Num {order} </h5>
    <div className="card-text">
    <p>{dateEntry}</p>
    <p>{status}</p>
    <p>{userid}</p>
    </div>
    <div className="text-end">
    <button className="btn" id="finishedOrder">FINALIZAR</button>
    </div>
  </div>
</div>

    </>
  )
}
