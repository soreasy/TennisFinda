class MotherApp extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            lat: null,
            lng: null,
            bla: 1
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${$('#zip').val()}&key=AIzaSyCGh4qceX9J_w0ZjqFG2WfScGlQ_7p7Uek`
        fetch(url)
            .then((response) => response.json())
            .then((json_response) => {
                let lat = json_response.results[0].geometry.location.lat
                let lng = json_response.results[0].geometry.location.lng
                this.setState({lat: lat, lng: lng})
            }.bind(this))
    }

    componentWillUpdate(nextProps, nextState) {
        // debugger;
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger;
    }


    render() {
        var lng = this.state.lng

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
                      <label htmlFor="last_name">Max Radius</label>
                    </div>
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
                <div onClick={this.bla}>Click Me!</div>
                <p>Lng is {lng}</p>
            </div>
        )
    }
}
