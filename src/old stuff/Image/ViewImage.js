import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class TextFields extends React.Component {
  state = {
    description: '', //fill out function
    imageid: '',
    propertyid:'',


  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-description"
          label="description"
          className={classes.textField}
          value={this.state.description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <TextField
          id="standard-imageid"
          label="imageid"
          className={classes.textField}
          value={this.state.imageid}
          onChange={this.handleChange('imageid')}
          margin="normal"
        />

        <TextField
          id="standard-propertyid"
          label="propertyid"
          className={classes.textField}
          value={this.state.propertyid}
          onChange={this.handleChange('propertyid')}
          margin="normal"
        />

        <TextField
          id="standard-title"
          label="title"
          className={classes.textField}
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />


      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Images
      </Button>

      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Delete //deletes image
      </Button>

      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
