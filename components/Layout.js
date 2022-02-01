import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

const Layout = ({ children }) => {
  const styles = useStyles();
  return (
    <div>
      <Head>
        <title>Eric's Market</title>
      </Head>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <Typography>Eric's market</Typography>
        </Toolbar>
      </AppBar>
      <Container className={styles.main}>{children}</Container>
      <footer className={styles.footer}>
        <Typography>
          &#169; {new Date().getFullYear()} {` `}All right reserved. Eric's
          Market
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
