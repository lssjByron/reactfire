import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  social: {
    marginTop: theme.spacing(4),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const {description, social, title } = props;

  return (
    <Grid item xs={12}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" align='center' className={classes.social}>
        Social
      </Typography>
      <Grid container justify="center" >
      {social.map((network) => (
        <Link display="block" variant="body1" href={network.url} key={network.name}>
          <Grid container direction="row" justify="center">
            <network.icon />
            <Grid item md={12}>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
      </Grid>
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
