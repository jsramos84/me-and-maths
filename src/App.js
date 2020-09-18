import React, { Component, Suspense } from 'react';
import logo from './assets/logo/logo.jpg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faCoffee, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
 
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import SlideOne from './assets/homepage-slide/carousel2.jpg';
import SlideTwo from './assets/homepage-slide/carousel3.jpg';
import Sections from './components/Sections/Sections';
import SectionOneImage from './assets/section/section2.bmp';
import SectionTwoImage from './assets/section/section3.bmp';
import SectionFourImage from './assets/section/carousel1.jpg';
import imageSectionExplicacoes from './assets/section/perfilines.bmp';
import imageSectionExplicacoesTwo from './assets/section/perfiljoao.bmp';
import * as actions from './store/actions';

library.add(fab, far, faCheckSquare, faCoffee, faPhone, faMapMarkerAlt)

const Explicacoes = React.lazy(() => import('./components/Sections/Explicacoes/Explicacoes'));
const Precario = React.lazy(() => import('./containers/Precario/Precario'));
const QuemSomos = React.lazy(() => import('./components/Sections/QuemSomos/QuemSomos'));
const Contactos = React.lazy(() => import('./containers/Contactos/Contactos'));

class App extends Component {
  state = {
    header: {
      inicio: '/',
      explicacoes: '/asNossasExplicações',
      precario: '/precario',
      quemSomos: '/quemSomos',
      contactos: '/contactos'
    },
    homePage: {
      slides: {
        slideOne: {
          title: 'Explicações de matemática no Parque das Nações.',
          image: SlideOne
        },
        slideTwo: {
          title: 'Do 5º ao 12º ano, com apoio online complementar.',
          image: SlideTwo
        },
      },
      buttons: {
        buttonOne: {
          title: 'As nossas explicações',
          to: '/asNossasExplicações',
          styleInfo: {
            backgroundColor: '#CC0000',
            color: 'rgb(200, 200, 200)'
          }
        },
        buttonTwo: {
          title: 'Contacta-nos',
          to: '/contactos',
          styleInfo: {
            backgroundColor: 'transparent',
            color: 'rgb(200, 200, 200)'
          }
        }
      }
    },
    explicacoes: {
      image: SectionOneImage,
      content: {
        one: {
          title: 'Para quem?',
          text: 'Alunos de matemática do 5º ano ao 12º ano.'
        },
        two: {
          title: 'Como?',
          text: 'Explicações personalizadas e adaptadas aos teus objetivos e ao teu ritmo. Mais do que preparar-te para os testes e exames escolares, ajudamos-te a construir bases sólidas de matemática, essenciais ao teu sucesso.'
        },
        three: {
          title: 'Onde?',
          text: 'No Parque das Nações - Zona Norte, em Lisboa (próximo do Campus da Justiça). Disponibilizamos também explicações ao domicílio.'
        },
        four: {
          title: 'Apoio online',
          text: 'Estás a estudar e tens uma dúvida? Tens ao teu dispor apoio online. Este serviço destina-se também àquelas dúvidas de última hora que surgem em véspera de teste.'
        }
      }
    },
    precario: {
      image: SectionTwoImage,
      content: {
        one: {
          title: 'Os nossos preços',
          text: 'Os nossos preços estão ajustados à necessidade de cada um. Temos preços diferenciados para grupos e descontos se adquiridos packs de 5 ou 10 horas.'
        }
      }
    },
    quemSomos: {
      image: imageSectionExplicacoes,
      imageTwo: imageSectionExplicacoesTwo,
      content: {
        one: {
          title: 'Inês Santos',
          text: 'A Inês tem 10 anos de experiência em explicações de matemática. Tem a seguinte formação académica e experiência profissional:',
          items: {
            1: 'Engenharia Civil no Instituto Superior Técnico (2007)',
            2: 'The Lisbon MBA Part-Time - Católica|Nova (2013)',
            3: 'Programadora (Backend Developer) na LovelyStay',
            4: 'Assistente de Investigação na Universidade Técnica da Dinamarca (2007-2008)',
            5: 'Consultora na Luís Palma Santos Lda'
          },
          finalText: 'If you can dream it, you can do it.", Walt Disney'
        },
        two: {
          title: 'João Ramos',
          text: 'O João tem 6 anos de experiência em explicações de matemática. Tem a seguinte formação académica e experiência profissional:',
          items: {
            1: 'Engenharia Civil no Instituto Superior Técnico (2007)',
            2: 'The Lisbon MBA International - Católica|Nova (2012)',
            3: 'Investment Manager na Portugal Ventures',
            4: 'Direção de obra na Teixeira Duarte S.A.',
            5: 'Profissional em investimentos de capital de risco'
          },
          finalText: 'A caminhada de mil léguas começa sempre com o primeiro passo'
        }
      }
    },
    contactos: {
      image: SectionFourImage,
      content: {
        title: 'Contacta-nos',
        text: 'Contacta-nos caso tenhas alguma dúvida ou questão ou queiras marcar a tua primeira explicação.'
      }
    }
  }

  componentDidMount() {
    this.props.onInitPrices();
  }

  render() {
    return (
      <Layout logo={logo} content={this.state.header}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" render={() => <HomePage content={this.state.homePage} />}/>
              <Sections>
                <Route exact path={this.state.header.explicacoes} render={() => <Explicacoes content={this.state.explicacoes}/>}/>
                <Route exact path={this.state.header.precario} render={() => <Precario content={this.state.precario}/>}/>
                <Route exact path={this.state.header.quemSomos} render={() => <QuemSomos content={this.state.quemSomos}/>}/>
                <Route exact path={this.state.header.contactos} render={() => <Contactos content={this.state.contactos}/>}/>
              </Sections>
            </Switch>
          </Suspense>
      </Layout>
    );
  }
}

const dispatchStateToProps = dispatch => {
  return {
    onInitPrices: () => dispatch(actions.fetchPrices())
  }
}

export default connect(null, dispatchStateToProps)(App);
