import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/56046074?s=460&u=e93b47748987aee9f64542c374a946c4eb216556&v=4" alt="Raphael Cardoso Petrére"></img>
                <div>
                    <strong>Raphael Cardoso Petrére</strong>
                    <span>Frontend</span>
                </div>
            </header>

            <p>
                O melhor programador que você vai encontrar na sua vida.
                <br /> <br />
                Depois de tantos cursos e uma faculdade, finalmente estou apto para te ensinar o que você precisa para poder ser o melhor programador no seu bairro.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;