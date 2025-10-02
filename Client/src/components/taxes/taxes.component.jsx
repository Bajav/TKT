import './taxes.styles.scss';


function TaxesComponent() {
  return (
    <section className='taxes-container'>
        <div className="taxes-header">
            <h3>fare breakdown</h3>
            <h3>taxes breakdown </h3>
        </div>
        <div className="taxes-content">
            <div className="traveler-pricings">
                <h4>base : $230</h4>
                <h4>taxes : $330</h4>
                <h4>total : $560</h4>
            </div>
            <div className="taxes-breakdown">
                <h3>F6 YQ Carrier-Imposed Surcharge : $10</h3>
                <h3>UL Passenger Service Charges : $10</h3>
                <h3>AE UAE Passenger Service Charge : $10</h3>
                <h3>F6 UAE Passenger Facility Charge : $10</h3>
                <h3>UG Security Charge : $10</h3>
                <h3>TP UAE Passenger Security and Safety Fee : $10</h3>
            </div>
        </div>
        <div className="passengers">
            <h2>Travelers 4</h2>
            <h3>ADULT (S) :</h3>
            <h6>||</h6>
            <h3>children : 1 </h3>
            <h6>||</h6>
            <h3>infant (S): 1</h3>
        </div>
    </section>
  )
}

export default TaxesComponent