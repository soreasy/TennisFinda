class MotherApp extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="first_name" type="text" className="validate" />
                      <label htmlFor="first_name">Zip Code</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last_name" type="text" className="validate" />
                      <label htmlFor="last_name">Max Radius</label>
                    </div>
                  </div>
                </form>
            </div>
        )
    }
}
