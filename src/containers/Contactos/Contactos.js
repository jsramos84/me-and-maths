import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import styles from './Contactos.module.css';

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Message from '../../components/UI/Message/Message';

class Contactos extends Component {
    state = {
        form: {
            name: {
                type: 'input',
                config: {
                    type: 'text',
                    required: true,
                    placeholder: 'Primeiro e último nome'
                },
                value: ''
            },
            email: {
                type: 'input',
                config: {
                    required: true,
                    placeholder: 'O teu e-mail',
                    type: 'email',
                },
                value: ''
            },
            message: {
                type: 'textarea',
                config: {
                    required: true,
                    placeholder: 'A tua mensagem',
                    type: 'email'
                },
                value: ''
            }
        },
        loading: false,
        message: false,
        messageError: false
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.setState((prevState, props) => ({
            ...prevState,
            loading: !prevState.loading
        }))
        const data = {
            name: this.state.form.name.value,
            email: this.state.form.email.value,
            message: this.state.form.message.value,
            dest: 'inespalmasantos@gmail.com'
        }
        axios.post('https://us-central1-meandmaths-1bde4.cloudfunctions.net/sendFormEmail', data)
        .then(res => {
            this.setState((prevState, props) => ({
                ...prevState,
                loading: !prevState.loading,
                message: !prevState.message
            }))
            let stateCopy = {
                ...this.state
            }
            let formCopy = {
                ...stateCopy.form
            }
            for(let key in formCopy) {
                formCopy[key].value = ''
            } 
            stateCopy.form = formCopy;

            this.setState(stateCopy);
        })
        .catch(error => {
            this.setState((prevState, props) => ({
                ...prevState,
                loading: !prevState.loading,
                messageError: !prevState.messageError
            }))
        })

    }

    onCloseMessage = () => {
        this.setState((prevState, props) => ({
            ...prevState,
            message: !prevState.message,
        }))
    }

    onCloseMessageError = () => {
        this.setState((prevState, props) => ({
            ...prevState,
            messageError: !prevState.messageError,
        }))
    }
    
    onChangeInput = (event, id) => {
        let stateCopy = {
            ...this.state
        }

        let itemCopy = {
            ...stateCopy.form[id],
            value: event.target.value
        }

        stateCopy.form[id] = itemCopy

        this.setState(stateCopy);

    }

    render () {
        let formArray = [];

        for(let key in this.state.form) {
            formArray.push({
                ...this.state.form[key],
                id: key
            })
        };

        let form = formArray.map(cur => {
            return(
                <Input 
                    key={cur.id}
                    type={cur.type}
                    config={cur.config}
                    value={cur.value}
                    change={(event) => this.onChangeInput(event, cur.id)}/>
            )
        })

        return(
            <Auxiliar>
                <Spinner in={this.state.loading}/>
                <Message
                    in={this.state.message}
                    close={this.onCloseMessage}
                    title={'Mensagem Enviada'}
                    body={'Entraremos em contacto logo que possível'} />
                <Message
                    in={this.state.messageError}
                    close={this.onCloseMessageError}
                    title={'Erro'}
                    body={'Algo correu mal. Tente outra vez ou utilize outra forma de contacto'} />
                <div className={styles.ImageContainer}>
                    <img src={this.props.content.image} alt='contactos' />
                </div>
                <div className={styles.SectionContent}>
                    <h3>{this.props.content.content.title}</h3>
                    <p>{this.props.content.content.text}</p>
                    <form onSubmit={this.onSubmitForm}>
                        {form}
                        <div className={styles.ButtonContainer}>
                            <Button
                                to='/contactos'
                                styleInfo={{
                                    backgroundColor: '#CC0000',
                                    color: 'white',
                                    marginRight: '0px',
                                    padding: '5px 10px'
                                }}
                                click={this.onSubmitForm}>
                                Enviar
                            </Button>
                        </div>
                    </form>
                    <div className={styles.IconContainer}>
                        <div className={styles.Icon}>
                            <FontAwesomeIcon icon={['far', "envelope"]} />
                            <p>info@meandmaths.pt</p>
                        </div>
                        {/*<div className={styles.Icon}>
                            <FontAwesomeIcon icon='phone' />
                            <p>96 424 52 34</p>
                            </div>*/}
                        <div className={styles.Icon}>
                            <FontAwesomeIcon icon='map-marker-alt' style={{alignSelf: 'flex-start', marginTop: '5px'}}/>
                            <p style={{alignSelf: 'flex-start'}}>Parque das Nações - Zona Norte, Lisboa (próximo do Campus da Justiça)</p>
                        </div>
                    </div>
                </div>
            </Auxiliar>
        )
    }
};

export default Contactos;