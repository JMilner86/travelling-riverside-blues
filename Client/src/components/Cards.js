import React from "react";


const API_KEY = process.env.REACT_APP_API_KEY;

class Cards extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          items: [],
          DataIsLoaded: false
        };
    };

    componentDidMount() {
    fetch(`https://project.trumedianetworks.com/api/token`,{
    headers: { apiKey: `${API_KEY}`}
            })
          .then(res => res.json())
          .then(json => {
            this.setState({
              items: json,
              DataIsLoaded: true
            });
        })
        .then(data => {
            let token = data.token
            fetch(`https://project.trumedianetworks.com/api/nfl/players`, {
                headers: {tempToken: `${token}`}
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        });
    };

    render() {
        const { items } = this.state;
        
        return (
            <div>
                {`${items.base}`}
            </div>
        );
    };
};

export default Cards