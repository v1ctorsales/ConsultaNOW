import React from "react";
import Footer from '../components/Footer';

var logo="https://cdn-icons-png.flaticon.com/512/88/88096.png"

function FormularioDeConsulta(){
    return (
        <div>
            <div className="cardConsulta">
                <div className="cardConteudo">
                    <div className="cardHeader"></div>
                    <div className="cardBody">
                    <div className="campoFormulario"><label htmlFor="text"><i class="fa-solid fa-user"></i> Seu Nome</label> <input type="text" name="" id="nome" /></div>
                    <div className="campoFormulario campoFormularioFlex">
                      <div className="campoFormulario campoSmall"><label htmlFor="text"><i class="fa-solid fa-cake-candles"></i> Nascimento</label> <input type="date" name="" id="datanascimento" /></div>
                      <div className="campoFormulario campoSmall"><label htmlFor="text"><i class="fa-solid fa-phone"></i> Telefone</label> <input type="text" name="" id="telefone" /></div>
                    </div>
                   
                    <div className="campoFormulario"><label htmlFor="text"><i className="fa-solid fa-at"></i> Email</label> <input type="email" name="" id="email" /></div>
                    <div className="campoFormulario"><label htmlFor="text"><i class="fa-solid fa-stethoscope"></i> Especialidade</label> 
                      <select name="especialidade" id="especialidade">
                        <option>Cardiologista</option>
                        <option>Dermatologista</option>
                        <option>Neurologiusta</option>
                        <option>Ortopedista</option>
                        </select>
                    </div>
                    <div className="campoFormulario"><label htmlFor="text"><i class="fa-solid fa-user-doctor"></i> Médico</label> 
                      <select name="medicos" id="medicos">
                        <option>José</option>
                        <option>Thiago</option>
                        <option>João</option>
                        <option>Tadeu</option>
                        </select>
                    </div>
                    <button className="greenbutton" id=""><i class="fa-solid fa-calendar-plus"></i> Marcar Consulta</button>
                    </div>
                </div>
            </div> 
        </div>
      );
}

export default FormularioDeConsulta