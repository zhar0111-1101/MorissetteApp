import React from 'react'
import axios from 'axios';

class BrowseInventory extends Component {
    state = {
        query: '',
    }

    componentDidMount = () => {
        this.getCarInfo();
    }

    getCarInfo = () => {
        axios.get('/api')
        .then((response) => {
            const data = response.data;
            this.setState({query: this.search.value});
            console.log('Cars recevied');
        })
        .catch(() => {
            alert('Error retrieving cars');
        });

    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render () {
        return (
        <form>
            <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
        </form>
        )
    }
}
/*
const BrowseInventory = () => {
    return ( 
        <div>   
            <p> Here is the current inventory</p>
        </div>
    )
}
*/
export default BrowseInventory;
