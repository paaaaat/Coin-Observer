import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BallotIcon from '@material-ui/icons/Ballot';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CodeIcon from '@material-ui/icons/Code';

const classes = {
  links : {
    color: 'inherit',
    textDecoration : 'none'
  }
}

export const listItems = (
  <div>
    <Link to='/' style={classes.links}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to='/assets' style={classes.links}>
      <ListItem button>
        <ListItemIcon>
          <BallotIcon />
        </ListItemIcon>
        <ListItemText primary="Tutti gli assets" />
      </ListItem>
    </Link>

    <Link to='/converter' style={classes.links}>
      <ListItem button>
        <ListItemIcon>
          <LocalAtmIcon />
        </ListItemIcon>
        <ListItemText primary="Convertitore" />
      </ListItem>
    </Link>

    <Link to='/progetto' style={classes.links}>
      <ListItem button>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Progetto" />
      </ListItem>
    </Link>
  </div>
);
