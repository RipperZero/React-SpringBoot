import React, { Component } from 'react';
import SideBar from '../components/sidebar.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from '../containers/main';
import '../styles/style.css';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import { fetchMovieRecent } from '../actions/actions';

class SideBarContainer extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchMovieRecent.request())
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <SideBar>
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <h2 className={'toolbar-title'}>{'上映电影'}</h2>
              </ToolbarGroup>
            </Toolbar>
            <Main
              data={data}
            />
          </SideBar>
        </MuiThemeProvider>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    data: state.info.movieRecentList.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);