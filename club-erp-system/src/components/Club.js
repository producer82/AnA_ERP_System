import React from 'react';

class Club extends React.Component {
    render() {
        return(
            <div>
                <ClubProfile id={this.props.id} logo={this.props.logo} name={this.props.name}/>
                <ClubInfo department={this.props.department} nop={this.props.nop}/>
            </div>
        )
    }
}

class ClubProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.logo} alt="logo"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class ClubInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.department}</p>
                <p>{this.props.nop}명</p>
            </div>
        )
    }
}

export default Club;