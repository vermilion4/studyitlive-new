import React from 'react';
import { bool, func, string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    activeBar: {
        height: 56,
        width: 3,
        backgroundColor: '#DDE2FF',
        position: 'absolute',
        left: 0
    },
    activeContainer: {
        backgroundColor: '#1BDAD4'
    },
    activeTitle: {
        color: '#FFF'
    },
    container: {
        display: 'flex',
        height: 56,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#1BDAD4'
        },
        paddingLeft: 32,
        transition: 'all 0.2s ease-in-out'
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#8692A6',
        marginLeft: 24
    }
});

function MenuItemComponent(props) {
    const { active, icon, title, ...otherProps } = props;
    const Icon = icon;
    
    return (
       <Row className={css(styles.container, active && styles.activeContainer)} vertical="center" {...otherProps}>
            {active && <div className={css(styles.activeBar)}></div>}
            <Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} />
            <span className={css(styles.title, active && styles.activeTitle)}>{title}</span>
        </Row>
    );
}

MenuItemComponent.propTypes = {
    active: bool,
    icon: func,
    title: string
};

export default MenuItemComponent;