import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Club from './components/Club';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    marginTop: theme.spacing.unit * 2
  }
})

class App extends React.Component {
  state = {
    clubs: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({clubs: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/clubs');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper classNmae={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>로고</TableCell>
              <TableCell>동아리 명</TableCell>
              <TableCell>소속 학과</TableCell>
              <TableCell>인원 수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.clubs ? this.state.clubs.map(c => { return( <Club key={c.id} id={c.id}logo={c.logo} name={c.name} department={c.department} nop={c.nop}/>) 
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>  
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
