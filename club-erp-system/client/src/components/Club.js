import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Club extends React.Component {
    render() {
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.logo} alt="logo"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.department}</TableCell>
                <TableCell>{this.props.nop}</TableCell>
            </TableRow>
        )
    }
}

export default Club;