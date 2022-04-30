import React from 'react';
import {
    FormControl,
    InputGroup,
    Button,
  } from "react-bootstrap";
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import IconSearch from '../assets/icon-search';
import IconBellNew from '../assets/icon-bell-new';

const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    search: {
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    name: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12,
            display: 'none'
        }
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            paddingLeft: 32,
            textAlign: 'center',
            width: '100%',
            margin: '0 auto',
            color: '#1B2C98'
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    spacer: {
        marginTop: '1rem',
        '@media (min-width: 769px)': {
            display: 'none'
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;

    return (
        <>
        <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <div className={css(styles.title)}>
            <span>{title}</span></div>
            <Row vertical="center">
                <div className={css(styles.cursorPointer, styles.search)}>
                    <IconSearch />
                </div>
                <div style={{ marginLeft: 25 }} className={css(styles.cursorPointer)}>
                    <IconBellNew />
                </div>
                <div className={css(styles.separator)}></div>
                <Row vertical="center">
                    <span className={css(styles.name, styles.cursorPointer)}>Dr. S.K. Adebayo</span>
                    <img src="images/manAtDesk.jpg" alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
                </Row>
            </Row>
        </Row>
        <div className={css(styles.spacer)}>
                    <Row className={css(styles.container)} vertical="center" {...otherProps}>
                    <InputGroup className="pt-2">
                        <FormControl
                          type="search"
                          placeholder="Search task, video, resource..."
                          style={{ width: "30vw", border: "none" }}
                        />
                        <Button
                          variant="outline-light"
                          style={{ backgroundColor: "#FFFFFF", border: "none" }}
                          href="/lecSearch"
                        >
                          <IconSearch style={{ color: "#35353580" }} />
                        </Button>
                      </InputGroup>
                    </Row>
                    </div>
                    </>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;