import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  createMuiTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from '../utils/styles';

const Layout = ({ title, children, description }) => {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette:{
      type: 'light',
      primary:{
        main: '#f0c000',
      },
      secondary:{
        main: '#208080',
      }
    }
  });
  const styles = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - eric's market` : "Eric's Market"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </div>
  );
};

export default Layout;
