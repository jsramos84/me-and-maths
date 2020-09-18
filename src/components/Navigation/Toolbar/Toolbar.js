import React, { Component } from 'react';

import styles from './Toolbar.module.css'

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import SideDrawer from '../SideDrawer/SideDrawer';
import Modal from '../../UI/Modal/Modal';

class Toolbar extends Component {
    state = {
        showNav: true,
        showToggle: false,
        showDrawer: false
    }

    componentDidMount() {
        let stateCopy = {
            ...this.state
        }
        if(window.innerWidth < 900) {
            stateCopy.showNav = false;
            stateCopy.showToggle = true;
            this.setState(stateCopy);
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth < 900) {
                stateCopy.showNav = false;
                stateCopy.showToggle = true;
                this.setState(stateCopy);  
            } else {
                stateCopy.showNav = true
                stateCopy.showToggle = false;
                this.setState(stateCopy);
            }
        })
    }

    drawerToggle = () => {
        let stateCopy = {
            ...this.state
        }
        this.setState((prevState) => {
            return {
                ...stateCopy,
                showDrawer: !prevState.showDrawer
            }
        })
    }

    render() {
        return (
            <div className={styles.Toolbar}>
                <div className={styles.LogoContainer}>
                    <img src={this.props.logo} alt='logo' />
                </div>
                {this.state.showNav ? <NavigationItems content={this.props.content}/> : null}
                {this.state.showToggle ? <DrawerToggle toggleStatus={this.state.showDrawer} toggle={this.drawerToggle} /> : null}
                <SideDrawer showDrawer={this.state.showDrawer}>
                    <NavigationItems closeDrawer={this.drawerToggle} content={this.props.content}/>
                </SideDrawer>
                {this.state.showDrawer ? <Modal closeModal={this.drawerToggle} /> : null}
            </div>
        )    
    }
}

export default Toolbar;