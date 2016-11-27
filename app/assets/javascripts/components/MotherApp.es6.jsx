class MotherApp extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            lat: null,
            lng: null,
            courts: null
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let zip_to_latlng_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${$('#zip').val()}&key=AIzaSyCGh4qceX9J_w0ZjqFG2WfScGlQ_7p7Uek`
        fetch(zip_to_latlng_url)
            .then((response) => response.json())
            .then((json_response) => {
                let lat = json_response.results[0].geometry.location.lat
                let lng = json_response.results[0].geometry.location.lng
                this.setState({lat: lat, lng: lng})
                let meter_rad = Math.floor((+$('#radius').val() * 1609.34))
                // debugger;
                let courts_url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat},${this.state.lng}&radius=${meter_rad}&keyword=tennis&key=AIzaSyCGh4qceX9J_w0ZjqFG2WfScGlQ_7p7Uek`
                fetch(courts_url, {mode: 'cors'})
                    .then((response) => response.json())
                    .then((json_response) => {
                        debugger;
                    }.bind(this))
            }.bind(this))


    }

    componentWillUpdate(nextProps, nextState) {
        // debugger;
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger;
    }


    render() {
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="zip" type="text" className="validate" />
                      <label htmlFor="first_name">Zip Code</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="radius" type="text" className="validate" />
                      <label htmlFor="last_name">Max Radius (in miles)</label>
                    </div>
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
            </div>
        )
    }
}
