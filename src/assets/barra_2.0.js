/** @version 3.0.8 @source http://softwarepublico.gov.br/gitlab/govbr/barra-govbr/ @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt CC0 */  !function(){var a,r,i='<div class="conteudo-escondido"> <a accesskey="1" href="#conteudo">Ir para o conteúdo</a> </div><div class="conteudo-barra-brasil"> <a href="http://www.brasil.gov.br/" class="pic-gov" title="GovBR">GovBR</a> <nav id="menu-barra-brasil" onscroll="checkScrollBarra(this);"> <ul class="lista-barra-brasil"> <li class="list-item"> <a href="http://www.acessoainformacao.gov.br" class="link-barra link-externo-barra">Acesso &agrave; informa&ccedil;&atilde;o</a> </li> <li class="espacador"></li> <li class="list-item"> <a href="http://brasil.gov.br/participacao-social" class="link-barra link-externo-barra">Participe</a> </li> <li class="espacador"></li> <li class="list-item"> <a href="https://servicos.gov.br/" class="link-barra link-externo-barra">Servi&ccedil;os</a> </li> <li class="espacador"></li> <li class="list-item"> <a href="http://www4.planalto.gov.br/legislacao/" class="link-barra link-externo-barra">Legisla&ccedil;&atilde;o</a> </li> <li class="espacador"></li> <li class="list-item"> <a href="javascript:toggleOrgaosGoverno();" id="link-orgaos" class="link-barra link-interno-barra link-baixo-barra">Órgãos do Governo</a> </li> </ul> </nav> <a href="javascript:scrollBarra();" id="botao-seta-direita" class="botao-seta-direita"><i class="arrow right">Navegar para direita</i></a> </div><div class="orgaos-governo-barra" id="orgaos-governo-barra"> <div> <ul> <li class="orgao-barra"> <a href="http://www.casacivil.gov.br/">Casa Civil</a> </li> <li class="orgao-barra"> <a href="http://www.justica.gov.br/">Ministério da Justiça e Segurança Pública</a> </li> <li class="orgao-barra"> <a href="https://www.defesa.gov.br/">Ministério da Defesa</a> </li> <li class="orgao-barra"> <a href="http://www.itamaraty.gov.br/">Ministério das Relações Exteriores</a> </li> <li class="orgao-barra"> <a href="http://www.fazenda.gov.br/">Ministério da Economia</a> </li> <li class="orgao-barra"> <a href="http://www.infraestrutura.gov.br/">Ministério da Infraestrutura</a> </li> <li class="orgao-barra"> <a href="http://www.agricultura.gov.br/">Ministério da Agricultura</a> </li> <li class="orgao-barra"> <a href="http://www.mec.gov.br/">Ministério da Educação</a> </li> <li class="orgao-barra"> <a href="http://mds.gov.br/">Ministério da Cidadania</a> </li> <li class="orgao-barra"> <a href="http://portalms.saude.gov.br/">Ministério da Saúde</a> </li> <li class="orgao-barra"> <a href="http://www.mme.gov.br/">Ministério de Minas e Energia</a> </li> <li class="orgao-barra"> <a href="http://www.mctic.gov.br/">Ministério da Ciência, Tecnologia e Comunicação</a> </li> <li class="orgao-barra"> <a href="http://www.mma.gov.br/">Ministério do Meio Ambiente</a> </li> <li class="orgao-barra"> <a href="http://www.turismo.gov.br/">Ministério do Turismo</a> </li> <li class="orgao-barra"> <a href="http://www.integracao.gov.br/">Ministério do Desenvolvimento Regional</a> </li> <li class="orgao-barra"> <a href="http://www.cgu.gov.br/">Controladoria-Geral da União</a> </li> <li class="orgao-barra"> <a href="http://www.mdh.gov.br/">Ministério da Mulher, da Família e dos Direitos Humanos</a> </li> <li class="orgao-barra"> <a href="http://www.secretariageral.gov.br/">Secretaria-Geral da Presidência da República</a> </li> <li class="orgao-barra"> <a href="http://www.secretariadegoverno.gov.br/">Secretaria De Governo</a> </li> <li class="orgao-barra"> <a href="http://www.gsi.gov.br/">Gabinete de Segurança Institucional</a> </li> <li class="orgao-barra"> <a href="http://www.agu.gov.br/">Advocacia-Geral da União - AGU</a> </li> <li class="orgao-barra"> <a href="http://www.bcb.gov.br/">Banco Central do Brasil</a> </li> </ul> </div></div>';a=document.getElementById("barra-brasil"),a&&(a.removeAttribute("style"),a.innerHTML=i,r=document.getElementsByTagName("head")[0]),window._barrabrasil={insere_css:function(a){var i;return i=document.createElement("style"),i.setAttribute("type","text/css"),i.setAttribute("media","all"),i.appendChild(document.createTextNode(a)),r.appendChild(i)}}}(),window._barrabrasil.insere_css('#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;font-size:100%;font-family:inherit;vertical-align:baseline;font-size:1rem}#barra-brasil ul{list-style:none}@font-face{font-family:"Raleway";font-weight:bold;src:url("//barra.brasil.gov.br/static/Raleway-Bold.woff") format("woff")}.conteudo-escondido{display:block;background:transparent;background-image:none;background-image:none;border:none;height:0.1em;overflow:hidden;padding:0;margin:-0.1em 0 0 -0.1em;width:1px}#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;font-size:100%;font-family:inherit;vertical-align:baseline;font-size:1rem}#barra-brasil ul{list-style:none}#barra-brasil{background-color:#222;box-sizing:content-box;display:flex;flex-direction:column-reverse;align-items:center}#barra-brasil .conteudo-barra-brasil{height:40px;width:95%;max-width:1150px;margin:0 auto;height:40px;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between}#barra-brasil .pic-gov{background-image:url("data:image/svg+xml,%3Csvg%20width%3D%2266%22%20height%3D%2214%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M9.367%204.374V.247H.37v4.127h8.997z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M7.602%2011.174a3.693%203.693%200%200%201-2.45.896c-.644%200-1.26-.114-1.848-.343a4.416%204.416%200%200%201-1.54-1.001%204.863%204.863%200%200%201-1.05-1.61C.453%208.481.322%207.758.322%206.946a4.851%204.851%200%200%201%201.47-3.521%205.092%205.092%200%200%201%201.617-1.05%205.205%205.205%200%200%201%202.009-.385c.448%200%20.877.049%201.288.147a4.495%204.495%200%200%201%202.086%201.12c.28.266.509.567.686.903l-2.03%201.554a2.289%202.289%200%200%200-.882-.945%202.362%202.362%200%200%200-1.246-.357%202.034%202.034%200%200%200-1.596.742c-.196.233-.35.511-.462.833a3.198%203.198%200%200%200-.168%201.057c0%20.392.056.747.168%201.064.112.317.268.59.469.819.2.229.441.406.721.532.28.126.593.189.938.189.793%200%201.493-.327%202.1-.98H5.768v-1.96h4.088V12H7.602v-.826zm8.078.91c-.756%200-1.442-.145-2.058-.434a5.092%205.092%200%200%201-2.604-2.758%205.008%205.008%200%200%201-.364-1.876c0-.653.126-1.283.378-1.89a5.018%205.018%200%200%201%201.057-1.603c.453-.462.99-.83%201.61-1.106.62-.275%201.3-.413%202.037-.413.756%200%201.442.145%202.058.434.616.29%201.143.672%201.582%201.148a5.151%205.151%200%200%201%201.015%201.624c.238.607.357%201.227.357%201.862a4.83%204.83%200%200%201-.378%201.883%205.1%205.1%200%200%201-1.05%201.596%205.165%205.165%200%200%201-1.603%201.113c-.62.28-1.3.42-2.037.42zm-2.254-5.04c0%20.336.047.66.14.973.093.313.233.59.42.833.187.243.422.439.707.588.285.15.623.224%201.015.224.392%200%20.733-.077%201.022-.231a2.07%202.07%200%200%200%20.707-.602%202.59%202.59%200%200%200%20.406-.847c.089-.317.133-.64.133-.966%200-.336-.047-.66-.14-.973a2.397%202.397%200%200%200-.427-.826%202.156%202.156%200%200%200-.714-.574%202.182%202.182%200%200%200-1.001-.217c-.392%200-.73.075-1.015.224-.285.15-.52.348-.707.595a2.523%202.523%200%200%200-.413.84%203.498%203.498%200%200%200-.133.959zM23.828%202.06l1.946%206.51%201.918-6.51h2.87L26.908%2012H24.64l-3.696-9.94h2.884zM55.82%209.438c0%20.383-.077.733-.231%201.05a2.444%202.444%200%200%201-.63.812%202.887%202.887%200%200%201-.924.518c-.35.121-.726.182-1.127.182H48.19V2.06h4.942c.345%200%20.658.075.938.224.28.15.518.343.714.581.196.238.348.509.455.812.107.303.161.609.161.917%200%20.495-.124.952-.371%201.372-.247.42-.6.733-1.057.938.57.168%201.02.478%201.351.931.331.453.497.987.497%201.603zm-1.274-.224c0-.224-.04-.441-.119-.651a1.852%201.852%200%200%200-.322-.553%201.525%201.525%200%200%200-.483-.378%201.358%201.358%200%200%200-.616-.14H49.45v3.416h3.458c.233%200%20.448-.047.644-.14.196-.093.369-.217.518-.371a1.68%201.68%200%200%200%20.35-.539c.084-.205.126-.42.126-.644zM49.45%203.152V6.47h3.164c.224%200%20.43-.044.616-.133.187-.089.348-.208.483-.357.135-.15.243-.324.322-.525.08-.2.119-.413.119-.637a1.91%201.91%200%200%200-.112-.658%201.736%201.736%200%200%200-.301-.532%201.37%201.37%200%200%200-1.043-.476H49.45zM57.584%2012V2.06h4.256c.439%200%20.842.091%201.211.273.369.182.686.425.952.728.266.303.474.644.623%201.022.15.378.224.763.224%201.155%200%20.345-.049.679-.147%201.001a3.098%203.098%200%200%201-.42.875%202.812%202.812%200%200%201-.658.672%202.566%202.566%200%200%201-.861.406L65.172%2012h-1.428l-2.268-3.57h-2.632V12h-1.26zm1.26-4.69h3.01c.261%200%20.497-.056.707-.168.21-.112.39-.264.539-.455.15-.191.266-.413.35-.665.084-.252.126-.513.126-.784%200-.28-.049-.544-.147-.791a2.322%202.322%200%200%200-.392-.658%201.774%201.774%200%200%200-.574-.448%201.557%201.557%200%200%200-.693-.161h-2.926v4.13z%22%20fill%3D%22%23FFF%22%2F%3E%3Cpath%20fill%3D%22%23FFD400%22%20d%3D%22M35.145%200L46%206.875%2035.145%2013.75z%22%2F%3E%3Cpath%20d%3D%22M36.233%2011.177a4.293%204.293%200%200%200%204.3-4.3%204.293%204.293%200%200%200-4.3-4.302%204.293%204.293%200%200%200-4.301%204.301%204.293%204.293%200%200%200%204.3%204.301%22%20fill%3D%22%231675D3%22%2F%3E%3Cg%20transform%3D%22matrix(-1%200%200%201%2041%204.75)%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cpath%20d%3D%22M8.76.538C4.918-.46%202.19%201.288.533%203c-.267.248-.276.953.5%201.375%203.554-3.313%206.797-2.9%208.035-2.185.397%200%20.494-1.409-.308-1.65%22%20fill%3D%22%23FFF%22%20mask%3D%22url(%23b)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-repeat:no-repeat;display:block;width:66px;height:14px;min-width:66px;margin-right:10px;line-height:0;font-size:0;color:transparent}#barra-brasil .conteudo-barra-brasil nav{overflow-x:auto}#barra-brasil .conteudo-barra-brasil nav ul{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;width:auto;max-width:none}#barra-brasil .conteudo-barra-brasil nav ul li.list-item{flex-shrink:0}#barra-brasil .conteudo-barra-brasil nav ul li.espacador{height:20px;width:1px;border-right:1px solid rgba(151,151,151,0.3);margin:0 7px 0 20px}#barra-brasil a{text-decoration:none;color:#fff;font-weight:bold;font-size:0.7em;font-family:Raleway,Arial,Helvetica,sans-serif;text-transform:uppercase;transition-property:all;transition-duration:0.1s;transition-timing-function:ease-in-out}#barra-brasil .conteudo-barra-brasil nav a.link-externo-barra::before{content:"";display:inline-block;width:11px;height:10px;margin-right:6px;background-image:url("data:image/svg+xml,%3Csvg%20width%3D%2211%22%20height%3D%2210%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M10.174.169l-.003%204.002L6.173.173z%22%2F%3E%3Cpath%20d%3D%22M4%204.51L7.91.6l1.768%201.768-3.91%203.91zM0%200h3.5v2.5H0z%22%2F%3E%3Cpath%20d%3D%22M0%202h2.5v5H0zM7.5%206H10v3H7.5z%22%2F%3E%3Cpath%20d%3D%22M0%207h10v2.5H0z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");opacity:0;transition-property:all;transition-duration:0.1s;transition-timing-function:ease-in-out}#barra-brasil .conteudo-barra-brasil nav a.link-discreto,#barra-brasil .conteudo-barra-brasil nav a.link-discreto-fixo,#barra-brasil .conteudo-barra-brasil nav:hover li:not(:hover)>a{opacity:0.3}#barra-brasil .conteudo-barra-brasil nav a:hover{opacity:1}#barra-brasil .conteudo-barra-brasil nav a.link-externo-barra:hover::before{opacity:1}#barra-brasil .conteudo-barra-brasil nav a.link-interno-barra{margin-left:13px}#barra-brasil .conteudo-barra-brasil nav a.link-baixo-barra::after{content:"";display:inline-block;width:13px;height:13px;margin-left:6px;background-image:url("data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%229%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M1.9.033L8.4%206.531%206.63%208.3.133%201.801z%22%2F%3E%3Cpath%20d%3D%22M11.395%200L5.03%206.364l1.767%201.768%206.364-6.364z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-repeat:no-repeat;background-position:center;background-size:8px 6px;background-color:#3b3b3b;border-radius:50%}#barra-brasil .conteudo-barra-brasil nav a.link-baixo-barra.link-cima-barra::after{background-image:url("data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%229%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M1.9%208.967L8.4%202.469%206.63.7.133%207.199z%22%2F%3E%3Cpath%20d%3D%22M11.395%209L5.03%202.636%206.798.868l6.364%206.364z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")}#barra-brasil .conteudo-barra-brasil a.botao-seta-direita{display:none;width:9px;min-width:9px;margin-left:10px;height:13px;background-image:url("data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2213%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M.533%2011.232L7.03%204.734%208.8%206.502%202.301%2013z%22%2F%3E%3Cpath%20d%3D%22M.5%201.738l6.364%206.364%201.768-1.768L2.268-.03z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");line-height:0;font-size:0;color:transparent}#barra-brasil .orgaos-governo-barra{width:100%;border-bottom:0.5px solid rgba(255,255,255,0.3);max-height:0;overflow-y:hidden;transition-property:all;transition-duration:0.5s;transition-timing-function:ease-in-out}#barra-brasil .orgaos-governo-barra.mostra-orgaos{max-height:calc(90vh - 40px)}#barra-brasil .orgaos-governo-barra>div{width:100%;max-width:1150px;margin:0 auto}#barra-brasil .orgaos-governo-barra ul{margin-top:25px;width:calc(100% + 25px);display:flex;flex-flow:row wrap}#barra-brasil .orgaos-governo-barra ul li{width:168px;text-align:left;margin:0 25px 25px 0}#barra-brasil .orgaos-governo-barra ul li a{font-size:0.75em;text-transform:none;font-weight:bold}#barra-brasil .orgaos-governo-barra ul:hover li:not(:hover) a{opacity:0.3}#barra-brasil .orgaos-governo-barra ul li a:hover{font-weight:bold}@media only screen and (max-width: 600px){#barra-brasil .orgaos-governo-barra{overflow-y:auto}#barra-brasil .orgaos-governo-barra ul{width:100%;flex-flow:column nowrap}#barra-brasil .orgaos-governo-barra ul li{width:100%;margin:0 0 25px 0}#barra-brasil .conteudo-barra-brasil a.botao-seta-direita{display:block}}');var checkScrollBarra,scrollBarra,toggleOrgaosGoverno;toggleOrgaosGoverno=function(){var a,r,i,l,o;if(l=document.getElementById("orgaos-governo-barra"),i=document.getElementById("link-orgaos"),a=document.getElementsByClassName("link-externo-barra"),o=l.classList.contains("mostra-orgaos")){for(l.classList.remove("mostra-orgaos"),r=0;r<a.length;)a[r].classList.remove("link-discreto-fixo"),r++;setTimeout(i.classList.remove("link-cima-barra"),500)}else{for(r=0;r<a.length;)a[r].classList.add("link-discreto-fixo"),r++;l.classList.add("mostra-orgaos"),i.classList.add("link-cima-barra")}},scrollBarra=function(){var a,r,i;r=0,a=document.getElementById("menu-barra-brasil"),i=setInterval(function(){return a.scrollLeft+=20,r+=20,r>=100?window.clearInterval(i):void 0},100),console.log(a.scrollLeft),console.log(a.scrollRight)},checkScrollBarra=function(a){document.getElementById("botao-seta-direita").style.display=a.scrollLeft>=a.scrollWidth-a.clientWidth-1?"none":"block"},!function(){var a,r='<div id="wrapper-footer-brasil"><a class="logo-acesso-footer" href="http://www.acessoainformacao.gov.br/" alt="Acesso à informação" title="Acesso à informação"></a><a class="logo-governo-federal" href="http://www.brasil.gov.br/" alt="Governo Federal" title="Governo Federal"></a></div>';a=document.getElementById("footer-brasil"),a&&(a.innerHTML=r),window._footerbrasil={insere_css:function(a){var r,i;return i=document.createElement("style"),i.setAttribute("type","text/css"),i.setAttribute("media","all"),i.appendChild(document.createTextNode(a)),r=document.getElementsByTagName("head")[0],r.appendChild(i)}}}(),window._footerbrasil.insere_css('#footer-brasil{background-color:#F1F1F1;width:100%}#footer-brasil #wrapper-footer-brasil{width:95%;max-width:1150px;margin:0 auto;display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-end;padding:40px 0}#footer-brasil .logo-acesso-a-informacao,#footer-brasil .logo-governo-federal{line-height:0;font-size:0;color:transparent}#footer-brasil .logo-acesso-footer{width:117px;height:49px;margin-right:45px;background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20117%2049%22%20height%3D%2249%22%20width%3D%22117%22%20shape-rendering%3D%22geometricPrecision%22%20text-rendering%3D%22geometricPrecision%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%3C!%5BCDATA%5B.a%20%7Bfont%3A%20normal%20bold%2011px%20Open%20Sans%2C%20sans-serif%3B%7D%5D%5D%3E%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%2222%22%20cy%3D%2223%22%20r%3D%2222%22%20fill%3D%22%23222%22%2F%3E%3Cpath%20style%3D%22stroke%3A%23fff%3Bstroke-width%3A9%3Bstroke-linecap%3Around%3B%22%20d%3D%22m%2022%2C23%20v%2013%22%2F%3E%3Cpath%20style%3D%22stroke%3A%23222%3Bstroke-width%3A4%3Bstroke-linejoin%3Around%3B%22%20d%3D%22m%204%2C43%203%2C-6%204%2C3%20z%22%2F%3E%3Ccircle%20r%3D%224.5%22%20cy%3D%2211%22%20cx%3D%2222%22%20fill%3D%22%23fff%22%2F%3E%3Cg%20fill%3D%22%23222%22%3E%3Ctext%20x%3D%2247%22%20y%3D%2222%22%3E%3Ctspan%20class%3D%22a%22%20y%3D%2218%22%3EAcesso%20%C3%A0%3C%2Ftspan%3E%3Ctspan%20class%3D%22a%22%20x%3D%2247%22%20y%3D%2231%22%3EInforma%C3%A7%C3%A3o%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E")}#footer-brasil .logo-governo-federal{width:149px;height:42px;background-repeat:no-repeat;background-position:bottom right;background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20496.2%20143.8%22%3E%3Cstyle%3E.st0%7Bfill%3A%23575756%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M220.5%2054.5c14.5%200%2021.4%206%2021.4%2016%200%205.6-3.7%2010.4-9.2%2012.4%206.7%201.8%2012.5%207.9%2012.5%2015.5%200%209.8-7.1%2017.2-23.4%2017.2-8%200-14.4-.2-21.7-.3l-.6-.6V55.4l.6-.6c7.2-.1%2013.9-.3%2020.4-.3zm-10.7%2025.4h10.3c9.2%200%2011.3-4.9%2011.3-9.1%200-4.3-1.9-9.1-11.1-9.1-2.8%200-7.4%200-10.5-.1v18.3zm0%207.2v21.4c4.1%200%208.3-.1%2011.9-.1%2010.6%200%2012.8-6.1%2012.8-10.6%200-4.4-2.9-10.7-13.4-10.7h-11.3zM284.5%2088.7c3.2%201.1%205.6%204.1%207%207.5l4.3%2010.3c1%202.4%202.2%204.8%204.4%206.4-1.4%201.9-4.4%202.9-7.1%202.9-3.9%200-5.3-1.9-6.9-5.7l-4.9-11.9c-1.7-4.1-3.8-7.2-9.9-7.2h-8.1v24.3c-1.6.3-3.5.4-5.2.4-1.6%200-3.6-.1-5.1-.4V55.4l.6-.6c7.4-.1%2014.5-.3%2021.1-.3%2013.7%200%2022.3%206.4%2022.3%2018.1.1%208.1-5.3%2014.1-12.5%2016.1zm-21.1-5.3c3.8-.1%208.2-.2%2010.9-.2%209.6%200%2012-5.5%2012-10.6%200-5.4-2.4-10.7-12-10.7-2.9%200-7.6%200-10.9-.1v21.6zM320.8%20100.5l-5.2%2014.8c-1.3.3-2.9.4-4.5.4-1.9%200-3.7-.3-5.1-.6l-.3-.4L327.9%2055c1.6-.3%204.3-.4%206-.4%201.7%200%204.4.1%205.9.4l22%2059.7c-1.5.9-3.8%201.2-6.1%201.2-3.2%200-4.9-1.1-6.2-4.9l-3.6-10.3c-1.7%200-5.1.1-5.9.1h-13.5c-.8-.2-4-.3-5.7-.3zm2.6-7.6c1.6%200%204.2-.1%205-.1h9.8c.7%200%203.3.1%204.9.1l-4.5-12.8c-1.8-5.1-3.8-11.3-5.2-16h-.4c-1%204-2.8%209.5-3.8%2012.8l-5.8%2016zM371.1%20102.5c5.7%203.4%2013%206%2019.8%206%208%200%2012.5-3.4%2012.6-8.3%200-4.2-3.2-7.3-8.9-9.5L383%2086.2c-8.3-3.2-13.5-7.8-13.5-15.3%200-9.6%209-17.1%2022.2-17.1%208.2%200%2015.7%202.3%2020.8%204.6-.1%202.7-1.7%205.6-3.8%207.3-5.1-2.3-11.8-4.2-16.8-4.2-7.3%200-11.8%203.6-11.8%208.3%200%203.9%203.3%206.1%208.2%208l11.4%204.4c8.5%203.2%2014.7%208.6%2014.7%2016.4%200%2010.2-7.9%2017.8-24.1%2017.8-8.2%200-17-2.5-23.6-6.6.3-2.8%202.2-5.7%204.4-7.3zM426.6%2054.9c1.5-.3%203.6-.4%205.2-.4s3.6.1%205.2.4v60.3c-1.6.3-3.6.4-5.2.4s-3.7-.1-5.2-.4V54.9zM492.9%20107.1c0%201-.1%202.6-.3%203.7-.6%203-3%204.5-6.8%204.5h-25.7c-3.5%200-6.1-2-6.1-5.8V55l.7-.5h3.9c4.3%200%205.9%201.9%205.9%206v46.9c3-.3%206.1-.4%208.7-.4h19.7zM209.6%2034.6h-4.1v10.1c-.9.2-2.1.2-3%20.2-.8%200-2%200-3-.2V14.5l.3-.3c3.6-.1%206.5-.2%209.7-.2%206.1%200%2010.6%203.3%2010.6%2010.3%200%206.8-4.4%2010.3-10.5%2010.3zm-4.1-4.6c1.5%200%203.1-.1%203.7-.1%204%200%204.8-3.2%204.8-5.6%200-2.4-.8-5.6-4.8-5.6h-3.7V30zM227.2%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.7%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H227.2zm1.5-4.7H236.4l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM252.3%2022.5v-3.3H244.7c-.2-.9-.2-1.8-.2-2.5s0-1.6.2-2.5H266c.2.6.3%201.6.3%202.3%200%202-1%202.7-3.2%202.7H258.3v25.5c-1%20.2-2.1.2-3%20.2-.8%200-2%200-3-.2V22.5zM285.4%2031.6c1.6.6%202.7%202.1%203.3%203.9l1.6%204.5c.4%201.2%201.1%202.4%202.1%203.2-.8%201.1-2.4%201.8-4%201.8-2.2%200-2.9-1.2-3.8-3.5l-1.9-5.3c-.7-1.8-1.6-3.2-4.1-3.2H276v11.7c-1%20.2-2.1.2-3%20.2-.8%200-2%200-2.9-.2V14.5l.3-.3c3.6-.1%206.9-.2%2010.2-.2%206.2%200%2010.5%203.1%2010.5%209.4-.1%204.3-2.8%207.2-5.7%208.2zm-9.4-3.2c1.6-.1%203.2-.1%204.1-.1%203.9%200%204.8-2.4%204.8-4.8%200-2.5-.9-4.8-4.8-4.8H276v9.7zM297.3%2014.3c.9-.2%202.2-.2%203-.2.8%200%202%200%203%20.2v30.4c-1%20.2-2.1.2-3%20.2-.8%200-2.1%200-3-.2V14.3zM315.4%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.8%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1h-10.7zm1.5-4.7H324.6l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM353.1%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.7%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H353.1zm1.4-4.7H362.2l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM377.7%2014.3c1.3-.2%203-.3%204-.3%201.1%200%202.5.1%203.8.3l3.4%2012.3c.3%201.2%201.4%205.8%201.7%207.6h.3c.3-1.8%201.4-6.4%201.7-7.6l3.4-12.3c1.3-.2%202.8-.3%203.8-.3%201.1%200%202.7.1%204.1.3l2.4%2030.3c-.8.2-2%20.3-3%20.3-.9%200-1.8%200-2.6-.2l-.8-14.3c-.2-2.8-.4-6.9-.4-9.7h-.3L394%2040.1c-.9.1-2.2.2-3.1.2-.8%200-2.1-.1-3-.2l-5.2-19.4h-.3c0%202.8-.2%206.9-.4%209.7l-1%2014.3c-.8.1-1.7.2-2.7.2-.9%200-2.1-.1-3-.3l2.4-30.3zM417.4%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.7%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H417.4zm1.5-4.7H426.6l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM459.4%2042.7c-2%201.6-5.6%202.2-8%202.2-3.7%200-6.6-.1-10.5-.2l-.3-.3v-30l.3-.3c3.8-.1%206.8-.2%2010.5-.2%202.4%200%206%20.6%208%202.2%204.1%203.3%204.9%208%204.9%2013.2-.1%205.4-.8%2010.1-4.9%2013.4zm-8-23.9h-4.9v21.5h4.9c5.8%200%206.7-5.8%206.7-10.7%200-5-.9-10.8-6.7-10.8zM474%2037.8l-2.1%206.9c-.8.2-1.6.2-2.6.2-.9%200-2.1-.1-2.8-.4l-.2-.3%209.9-30c1-.1%202.4-.2%203.5-.2.9%200%202.5.1%203.4.3l9.8%2030c-.8.5-2.3.8-3.4.8-1.9%200-2.8-.7-3.6-3.2l-1.2-4.1H474zm1.5-4.7H483.2l-1.3-4.5c-.8-2.5-1.7-6-2.4-8.6h-.3c-.4%202.3-1.4%205.5-2%207.5l-1.7%205.6zM238.2%203.9c.9.5%202.1%201.9%202.4%203.2l-7.4%204.4c-.7-.3-1.4-1.3-1.6-2l6.6-5.6z%22%2F%3E%3Cg%3E%3Cpath%20d%3D%22M206.9%20133.7h3.4c1.5%200%202.3.7%202.3%202.2v5.7c-1.9.6-3.8.9-5.9.9-1%200-2-.2-2.8-.5-.8-.3-1.5-.8-2-1.5-.5-.6-.9-1.4-1.2-2.4-.3-.9-.4-2-.4-3.2%200-1.3.2-2.5.6-3.4s.9-1.8%201.5-2.4c.6-.6%201.4-1.1%202.2-1.5.8-.3%201.7-.5%202.6-.5%201.9%200%203.6.5%205.3%201.6%200%20.2-.1.5-.2.7-.1.2-.2.5-.3.7-.1.2-.3.4-.5.6-.2.2-.4.3-.6.5-1.2-.8-2.4-1.2-3.6-1.2-2.4%200-3.5%201.6-3.5%204.9%200%203.3%201.2%204.9%203.6%204.9h1c.3%200%20.6-.1.9-.1v-1.4-.9-.6h-1.1c-.6%200-1-.1-1.3-.4-.2-.2-.4-.6-.4-1.1.1-.6.2-1.1.4-1.6zM224.2%20141.1c-1.5-1.3-2.3-3.4-2.3-6.3%200-1.3.1-2.4.4-3.3.3-1%20.7-1.8%201.3-2.4.6-.6%201.2-1.1%202-1.5.8-.3%201.7-.5%202.7-.5%201%200%201.9.2%202.7.5.8.3%201.5.8%202%201.5.6.7%201%201.5%201.3%202.4.3%201%20.4%202.1.4%203.3%200%201.3-.1%202.4-.4%203.3-.3%201-.7%201.8-1.3%202.4-.6.6-1.2%201.1-2%201.5-.8.3-1.7.5-2.7.5-1.7-.1-3-.5-4.1-1.4zm1.7-3c.4%201.1%201.2%201.7%202.4%201.7.6%200%201.1-.1%201.4-.4.4-.3.7-.7.9-1.1.2-.5.3-1%20.4-1.5.1-.6.1-1.1.1-1.7%200-.5%200-1.1-.1-1.7%200-.6-.1-1.2-.3-1.7-.2-.5-.4-1-.8-1.4-.4-.4-.9-.6-1.6-.6-.7%200-1.2.2-1.6.5-.4.4-.6.8-.8%201.3-.2.5-.3%201.1-.3%201.7%200%20.6-.1%201.1-.1%201.5%200%20.7%200%201.3.1%201.8%200%20.5.1%201%20.3%201.6zM249.6%20139.2l2.8-11.9c.3-.1.8-.1%201.3-.1.8%200%201.3.1%201.8.2l.1.2-4%2014.5c-.8.1-1.6.1-2.5.1-.8%200-1.4-.1-1.8-.3-.4-.2-.6-.6-.8-1.2l-3.6-13.1c.8-.3%201.4-.5%201.9-.5.6%200%201.1.1%201.3.4.3.3.5.7.7%201.3l1.7%206.2c.3%201%20.5%202.3.8%203.9.1.2.1.3.3.3zM268.3%20137.7v1.6h6.6c0%20.5%200%20.9-.1%201.2-.2%201.1-.9%201.7-2.2%201.7h-5.8c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.7l.2-.2h9.3c.1.4.1.9.1%201.4s-.1%201-.3%201.5h-5.9v3.1h4.8c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4h-4.8v1.6zM295.3%20131.9c0%20.5-.1.9-.2%201.4-.1.4-.3.8-.6%201.1-.2.3-.5.6-.8.9-.3.3-.7.4-1%20.6.8.3%201.3.9%201.7%202l.6%201.8c.2.7.6%201.3%201.1%201.6-.2.3-.5.5-1%20.7-.4.2-.9.3-1.4.3-.5%200-.9-.1-1.2-.4-.3-.3-.6-.8-.8-1.5l-.8-2.3c-.2-.4-.4-.8-.6-1-.3-.2-.7-.3-1.2-.3h-.9v5.4c-.5.1-1%20.1-1.7.1s-1.3%200-1.7-.1v-14.7l.2-.2c1.3%200%202.3%200%203.2-.1h2c.8%200%201.5.1%202.2.3.6.2%201.2.5%201.7.9s.8.9%201.1%201.5c0%20.5.1%201.2.1%202zm-7.1-2.1v4.3h1.7c.5%200%20.8-.1%201.1-.3.3-.2.5-.4.6-.6.1-.3.2-.7.2-1.2%200-1.4-.7-2.1-2-2.1h-.9c-.3-.1-.5-.1-.7-.1zM317.1%20127.2l.2.2V142c-.6.1-1.3.2-2%20.2s-1.5%200-2.1-.1l-3.4-7.7c-.4-.9-.8-1.9-1.2-3.1h-.1c.2%202.1.3%204.3.3%206.5v4.3c-.4.1-1%20.1-1.6.1-.6%200-1.2%200-1.6-.1v-14.7c.5-.1%201.2-.2%202-.2s1.5%200%202.1.1l3.4%207.7c.6%201.4%201.1%202.5%201.3%203.3h.1c-.2-2-.3-4.1-.3-6.4v-2.6c0-.8.2-1.3.5-1.6.3-.3.8-.5%201.5-.5h.9zM329.4%20141.1c-1.5-1.3-2.3-3.4-2.3-6.3%200-1.3.1-2.4.4-3.3.3-1%20.7-1.8%201.3-2.4.6-.6%201.2-1.1%202-1.5.8-.3%201.7-.5%202.7-.5%201%200%201.9.2%202.7.5.8.3%201.5.8%202%201.5.6.7%201%201.5%201.3%202.4.3%201%20.4%202.1.4%203.3%200%201.3-.1%202.4-.4%203.3-.3%201-.7%201.8-1.3%202.4-.6.6-1.2%201.1-2%201.5-.8.3-1.7.5-2.7.5-1.6-.1-3-.5-4.1-1.4zm1.7-3c.4%201.1%201.2%201.7%202.4%201.7.6%200%201.1-.1%201.4-.4.4-.3.7-.7.9-1.1.2-.5.3-1%20.4-1.5.1-.6.1-1.1.1-1.7%200-.5%200-1.1-.1-1.7%200-.6-.1-1.2-.3-1.7-.2-.5-.4-1-.8-1.4-.4-.4-.9-.6-1.6-.6-.7%200-1.2.2-1.6.5-.4.4-.6.8-.8%201.3-.2.5-.3%201.1-.3%201.7%200%20.6-.1%201.1-.1%201.5%200%20.7%200%201.3.1%201.8s.2%201%20.3%201.6zM365.4%20130.3V133.4h4.7c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4h-4.7v6c-.5.1-1%20.1-1.7.1s-1.3%200-1.7-.1v-14.7l.2-.1h9.3c.1.4.1.8.1%201.4s-.1.9-.4%201.2c-.3.3-.8.4-1.4.4h-4.4zM384.4%20137.7v1.6h6.6c0%20.5%200%20.9-.1%201.2-.2%201.1-.9%201.7-2.2%201.7H383c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.7l.2-.2h9.3c.1.4.1.9.1%201.4s-.1%201-.3%201.5h-5.9v3.1h4.8c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4h-4.8v1.6zM410.4%20141.2c-.5.4-1.1.6-1.8.8-.8.2-1.6.3-2.5.3h-1.9c-.8%200-1.9%200-3.2-.1l-.2-.2v-14.6l.2-.2c.8%200%201.7%200%202.6-.1h2.8c1.2%200%202.3.2%203.1.6.8.4%201.5.9%202%201.6s.8%201.5%201%202.4c.2.9.3%201.9.3%203%200%201.4-.2%202.7-.5%203.7-.3%201.1-1%202-1.9%202.8zm-4-1.7c1.9%200%202.9-1.6%202.9-4.8%200-3.2-1-4.8-2.9-4.8h-2.1v9.7h.9c.3-.1.7-.1%201.2-.1zM426.1%20137.7v1.6h6.6c0%20.5%200%20.9-.1%201.2-.2%201.1-.9%201.7-2.2%201.7h-5.8c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.7l.2-.2h9.3c.1.4.1.9.1%201.4s-.1%201-.3%201.5H426v3.1h4.8c.1.4.2.9.2%201.4%200%20.5-.1%201-.2%201.4H426v1.6zM453.1%20131.9c0%20.5-.1.9-.2%201.4s-.3.8-.6%201.1c-.2.3-.5.6-.8.9-.3.3-.7.4-1%20.6.8.3%201.3.9%201.7%202l.6%201.8c.2.7.6%201.3%201.1%201.6-.2.3-.5.5-1%20.7-.4.2-.9.3-1.4.3-.5%200-.9-.1-1.2-.4-.3-.3-.6-.8-.8-1.5l-.8-2.3c-.2-.4-.4-.8-.6-1-.3-.2-.7-.3-1.2-.3h-.9v5.4c-.5.1-1%20.1-1.7.1s-1.3%200-1.7-.1v-14.7l.2-.2c1.3%200%202.3%200%203.2-.1h2c.8%200%201.5.1%202.2.3.6.2%201.2.5%201.7.9s.8.9%201.1%201.5c0%20.5.1%201.2.1%202zm-7.2-2.1v4.3h1.7c.5%200%20.8-.1%201.1-.3.3-.2.5-.4.6-.6.1-.3.2-.7.2-1.2%200-1.4-.7-2.1-2-2.1h-.9c-.2-.1-.5-.1-.7-.1zM466.8%20139h-.9l-.9%203.1c-.3.1-.8.1-1.4.1-.7%200-1.3-.1-1.7-.2l-.1-.2%204.8-14.5c.6-.1%201.2-.1%202-.1.9%200%201.5.1%202%20.2l4.7%2014.5c-.5.3-1.1.4-1.7.4-.8%200-1.3-.1-1.6-.4-.3-.3-.6-.8-.8-1.5l-.4-1.4h-4zm0-2.7h3.3l-.4-1.3c-.3-1.2-.7-2.7-1.2-4.5h-.1c-.1.6-.5%202-1%204.1l-.6%201.7zM489.9%20139.2h3.8c0%20.6%200%201.1-.1%201.5-.1.4-.3.8-.7%201.1-.4.3-.9.4-1.5.4h-4.9c-.6%200-1.1-.2-1.5-.5-.4-.4-.5-.9-.5-1.5v-12.8l.2-.2h1.3c1.3%200%202%20.7%202%202.2v9.9c.5-.1%201.2-.1%201.9-.1z%22%2F%3E%3C%2Fg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M.7%2014v69.8l72.1-58.2%20109.1%2048.1V14z%22%2F%3E%3Cpath%20d%3D%22M.7%2083.8v49.4s5.8-5%2016.5-12.2C22.4%2089.1%2050%2064.8%2083.3%2064.8c15.1%200%2029%205%2040.2%2013.4%2017.9-3.3%2037.4-5.1%2058.3-4.5l-109-48.1L.7%2083.8z%22%20fill%3D%22%23c6c6c6%22%2F%3E%3Cpath%20d%3D%22M83.3%2064.8c-33.3%200-60.9%2024.3-66%2056.2%2019.9-13.2%2057-33.7%20106.3-42.8-11.2-8.4-25.2-13.4-40.3-13.4z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M140.2%2096.5C79.3%20100%2037.4%20119.4%2016.4%20131.8%206%20137.9.7%20142.3.7%20142.3h181.1V96.6c-14.7-.9-28.5-.9-41.6-.1z%22%2F%3E%3C%2Fsvg%3E")}');
/** @license-end */