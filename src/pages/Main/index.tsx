import './style.css'
import { AiOutlineDown, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { useState, FormEvent } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export function Main(){
    const [email, setEmail] = useState('')
    function submitEmail(e:FormEvent) {
        e.preventDefault()
        setEmail("")
        toast('Parabéns, você foi inscrito na BC!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return(
        <>
        <div id="pageInitial">
            <ToastContainer />
            <header>

                    <div id="logo">
                    <span id="logoBar">//</span> <span id="logoText">Bruce Caminhões</span>
                    </div>

                <nav id="navigation">

                        <li id="wware"><a className="linkHeader" href="#pagewware">Quem somos</a></li>
                        <li id="wwdo"><a className="linkHeader" href="#pagewwdo">O que fazemos</a></li>

                </nav>
            </header>
        
       <div id="midpage">
           <div id="brucebox">
                <p id="bruce">BRUCE CAMINHÕES</p>
            </div>
            <form id="formArea" onSubmit={submitEmail}>
                <label id="invitelabel" form="subscribeArea">Faça parte da maior e mais completa concessionária do mundo</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" placeholder="seuemail@exemplo.com"></input>
                <input type="submit" value="Enviar" id="sendbutton" />
            </form>

       </div>
       <nav className="navArrow"> 
            <a className="linkArrow" href="#pagewware">
                <AiOutlineDown className="arrow" />  
            </a> 
       </nav>
       </div>

        <div id="pagewware">
            <div id="pageboxwware">
                <div id="boxwware">
                    <p id="titlewware">Quem somos?</p>
                    <p id="contentwware">
                        Bruce Caminhões é a maior concessionária de caminhões do mundo. 
                        Somos líder em todos os tipos de serviço que possa imaginar em 
                        relação a caminhões e suas variáveis, presente no mundo todo e 
                        sempre entregando o melhor com o maior custo-benefício do mercado.
                    </p>
                </div>
                <img src="https://archello.s3.eu-central-1.amazonaws.com/images/2019/07/23/Den-Haag-Mercedes-Benz-Forepark-30.1563875437.5992.jpg" id="imgwware"/>
            </div>
            <div id="divArrow2">
                <nav id="navArrow2"> 
                        <a id="linkArrow2" href="#pagewwdo">
                            <AiOutlineDown id="arrow2" />  
                        </a> 
                </nav>
            </div>
        </div>

        <div id="pagewwdo">
            <div id="pageboxwwdo">
                <div id="boxwwdo">
                    <p id="titlewwdo">O que fazemos?</p>
                    <p id="contentwwdo">
                        A BC te entregará todos os serviços do mercado para seu caminhão.
                        Além de vender, todo BC Center terá uma oficina especializada para consertar
                        qualquer problema que você tiver, providenciando todas as peças que quiser.
                        Possuímos treinamento de direção para iniciantes e diversos outros serviços.
                    </p>
                </div>
            <img src="https://www.sofit4.com.br/wp-content/uploads/itens-manutencao-caminhao.jpg" id="imgwwdo" />
            </div>
            <div id="divSubButton">
                <a href="#pageInitial" id="linkSubButton">
                    <button id="subButton">Inscreva-se</button>
                </a>
            </div>
        </div>

        <footer>
            <div id="auxdivFooter">
                <p id="bcFooter"><span id="bcFooterBar">//</span> Bruce Caminhões</p>
                <p id="cityFooter">Natal-RN</p>
                <div id="iconsFooter">
                    <a className="linkIcons" target="_blank" href="https://github.com/JustNat">
                    <AiFillGithub id="github"/>
                    </a>
                    <a className="linkIcons" target="_blank" href="https://www.instagram.com/gp.sycho/">
                    <FaInstagram id="instagram" />
                    </a>
                    <a className="linkIcons" target="_blank" href="https://www.linkedin.com/in/gabriel-bruce-pereira/">
                    <AiOutlineLinkedin id="linkedin"/>
                    </a>     
                </div>
            </div>
            <div id="contentFooter">
                <p id="developmentFooter">
                    Site desenvolvido por <a target="_blank" id="linkName" href="https://www.linkedin.com/in/gabriel-bruce-pereira/">Gabriel Bruce Pereira</a> durante o treinamento do Hiring Coders.
                </p>
                <p id="allRightsReserved">
                    Bruce Caminhões &#169; Todos os direitos reservados.
                </p>
            </div>
        </footer>

       </>
    )
}