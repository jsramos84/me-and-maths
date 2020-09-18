import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Precario.module.css';

import Input from '../../components/UI/Input/Input';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Button from '../../components/UI/Button/Button';

class Precario extends Component {
    state = {
        form: {
            ano: {
                type: 'select',
                label: 'Ano',
                options: [
                    {value: '5e6', label: '5º e 6º ano'},
                    {value: '7e8e9', label: '7º ao 9º ano'},
                    {value: '10e11', label:'10º e 11º ano'},
                    {value: '12', label: '12º ano'}
                ],
                config: {
                    required: true
                },
                value: '-',
                filled: false
            },
            tipo: {
                type: 'select',
                label: 'Tipo',
                options: [
                    {value: 'individual', label: 'Individual'},
                    {value: 'grupo2alunos', label: 'Em grupo - 2 alunos'},
                    {value: 'grupo3alunos', label: 'Em grupo - 3 alunos'}
                ],
                config: {
                    required: true
                },
                value: '-',
                filled: false
            },
            pack: {
                type: 'select',
                label: 'Pack',
                options: [
                    {value: 'avulso', label: 'Aula avulso'},
                    {value: 'pack5', label: 'Pack de 5 horas'},
                    {value: 'pack10', label: 'Pack de 10 horas'}
                ],
                config: {
                    required: true
                },
                value: '-',
                filled: false
            }
        },
        allFilled: false
    }

    onChangeInputValue = (event, id) => {
        let stateCopy = {
            ...this.state
        }

        let itemCopy = {
            ...this.state.form[id],
            value: event.target.value
        }

        if(itemCopy.value !== '-') {
            itemCopy.filled = true
        } else if(itemCopy.value === '-') {
            itemCopy.filled = false
        }

        stateCopy.form[id] = itemCopy;

        let test = false;

        for(let key in this.state.form) {
            if(this.state.form[key].filled || test === true) {
                test = true
            }
            if(!this.state.form[key].filled) {
                test = false
                break;
            }
        }
        stateCopy.allFilled = test;

        this.setState(stateCopy);
    }

    render() {
        let formArray = [];
        for(let key in this.state.form) {
            formArray.push({
                ...this.state.form[key],
                id: key
            });
        }

        let form = formArray.map(cur => {
            return(
                <Input
                    key={cur.label}
                    type={cur.type}
                    label={cur.label}
                    config={cur.config}
                    options={cur.options}
                    value={cur.value}
                    valueChange={(event) => this.onChangeInputValue(event, cur.id)}/>
            )
        })
        let price = null;

        if(this.state.allFilled) {
            let priceValue = (this.props.price[this.state.form.tipo.value][this.state.form.ano.value] * (1 - this.props.price.descontos[this.state.form.pack.value]));
            let pack = null;
            if(this.state.form.pack.value === 'pack5') {
                pack = 'pack 5 horas = ' + (priceValue.toFixed(2) * 5).toFixed(2) + ' €';
            } else if(this.state.form.pack.value === 'pack10') {
                pack = 'pack 10 horas = ' + (priceValue.toFixed(2) * 10).toFixed(2) + ' €';
            }
            price = (
                <div className={styles.Price}>
                    <h2>{priceValue.toFixed(2)} €<span> / hora </span></h2>
                    <p>{pack}</p>
                    <Button 
                        to='/contactos'
                        styleInfo={{
                            backgroundColor: 'transparent',
                            color: '#CC0000',
                            padding: '5px 10px',
                            marginTop: '15px'
                        }}>
                        Marque já
                    </Button>
                </div>
            )
        }        

        return(
            <Auxiliar>
                <div className={styles.ImageContainer}>
                    <img src={this.props.content.image} alt='explicaões' />
                </div>
                <div className={styles.FormContainer}>
                    <h3>{this.props.content.content.one.title}</h3>
                    <p>
                        {this.props.content.content.one.text}
                    </p>
                    <p style={{marginTop: '0px'}}>
                        A primeira explicação é <strong>gratuíta</strong>.
                    </p>
                    <div className={styles.Form}>
                        <form>
                            {form}
                        </form>
                        {price}
                    </div>
                </div>
            </Auxiliar>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        price: state.priceDatabase
    }
}

export default connect(mapStateToProps)(Precario);