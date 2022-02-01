import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
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
          <NextLink href="/" passHref>
            <Link>
              <Typography className={styles.brand}>Eric's market</Typography>
            </Link>
          </NextLink>
          <div className={styles.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/cart" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
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
