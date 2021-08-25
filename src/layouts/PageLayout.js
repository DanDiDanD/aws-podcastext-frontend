import React from 'react'
import {Switch, Route,  Redirect, Link} from 'react-router-dom'
import PublicRoute from '../components/PublicRoute'
import {Layout, Button, Breadcrumb, Menu } from 'antd'
import { RUTAS } from "../config/constantes";

import './PageLayout.scss'

export const PageLayout = (props) => {
    const { routes } = props;
    const {Header, Content, Footer} = Layout;
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
            <Menu theme="dark" mode="horizontal" className="menu-content"> 
                <Menu.Item key={RUTAS.home}>
                    <Link to={RUTAS.home}>Inicio</Link>
                </Menu.Item>

            </Menu>
        </Header>
        <Content style={{ padding: '0 80px' }}>
            <br/><br/>
          <div className="site-layout-content">
            <LoadRoutes routes={routes}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>PodcasText ©2021 Universidad Nacional Mayor de San Marcos</Footer>
      </Layout>
    )
}

function LoadRoutes({routes}) {
    return (
        <Switch>
          {routes.map((route, index) => (
            <PublicRoute
              // className="content-master"
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      );
}