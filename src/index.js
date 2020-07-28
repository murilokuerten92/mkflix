import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cadastroVideos from './pages/cadastro/Videos';
import Home from './pages/Home';
import cadastroCategoria from './pages/cadastro/Categoria';


const pagina404 = () => (<div>Erro Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cadastro/video' component={cadastroVideos} />
      <Route path='/cadastro/categoria' component={cadastroCategoria} />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


