import React from "react";
import { ReactDOM } from "react";
//import logo from "https://thumbs.dreamstime.com/b/stethoscope-icon-design-doctor-symbol-line-art-medical-healthcare-illustration-stethoscope-icon-design-doctor-symbol-line-155495703.jpg"

var logo="https://cdn-icons-png.flaticon.com/512/88/88096.png"

function FormularioDeLogin(){
    return(
        <div>
        <div className="cardLogin">
            <div className="imgHolder"><img src={logo} alt="" srcset="" /><h1>KEEP Medicina</h1></div>
            <h3>Acesse sua conta</h3>
            <div className="campoFormulario"><label htmlFor="email"><i class="fa-solid fa-at"></i> Email</label> <input type="email" name="" id="" /></div>
            <div className="campoFormulario"><label htmlFor="senha"><i class="fa-solid fa-key"></i> Senha</label> <input type="password" name="" id="" /></div>
            <div className="campoFormularioFlex">
                <div className="textoAjuda">
                    <p id="CriarConta"><i class="fa-solid fa-user-plus"></i> Criar uma Conta</p>
                    <p id="EsqueciMinhaSenha"><i class="fa-solid fa-unlock-keyhole"></i> Esqueci Minha Senha</p>
                </div>
                <button id="loginButton"><i class="fa-solid fa-right-to-bracket"></i> Entrar</button>
                </div>
        </div>               
        </div>
    )
}

export default FormularioDeLogin