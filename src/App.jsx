import { useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'

const topics = [
  { path: '/cidadania', number: '01', icon: '✳', tag: 'COMECE POR AQUI', title: 'Democracia e cidadania', desc: 'Entenda por que sua voz importa nas decisões coletivas.', color: 'lavender', time: '4 min' },
  { path: '/primeiro-voto', number: '02', icon: '🗳️', tag: 'MÃO NA MASSA', title: 'Guia do primeiro voto', desc: 'Do título de eleitor à urna: veja como se preparar.', color: 'yellow', time: '5 min' },
  { path: '/direitos', number: '03', icon: '⚖️', tag: 'SEUS DIREITOS', title: 'Direitos e responsabilidades', desc: 'Conheça direitos políticos e o papel de cada cidadão.', color: 'blue', time: '4 min' },
  { path: '/desinformacao', number: '04', icon: '🔎', tag: 'OLHAR CRÍTICO', title: 'Fato ou desinformação?', desc: 'Aprenda a checar conteúdos antes de compartilhar.', color: 'pink', time: '3 min' },
  { path: '/participacao', number: '05', icon: '🙌', tag: 'A JORNADA CONTINUA', title: 'Depois do voto', desc: 'Descubra formas de acompanhar e transformar sua comunidade.', color: 'green', time: '4 min' },
]

const content = {
  '/cidadania': {
    eyebrow: '01 · FUNDAMENTOS', title: 'Democracia começa com participação.', intro: 'A democracia é construída todos os dias, quando pessoas participam, dialogam e acompanham as decisões que afetam a vida em sociedade.',
    sections: [['O que é democracia?', 'É uma forma de organização política em que a população participa das decisões coletivas, diretamente ou por meio de representantes escolhidos em eleições.'], ['Cidadania vai além do voto', 'Cidadania envolve direitos, responsabilidades e participação na comunidade. O voto é uma das formas de exercer essa participação, mas não é a única.'], ['Pluralidade importa', 'Uma sociedade democrática reúne pessoas com experiências e opiniões diferentes. O diálogo e o respeito aos direitos ajudam a construir decisões coletivas.']]
  },
  '/primeiro-voto': {
    eyebrow: '02 · GUIA PRÁTICO', title: 'Seu primeiro voto, passo a passo.', intro: 'Informação é o primeiro passo para chegar à urna com tranquilidade e fazer uma escolha consciente.',
    sections: [['Quem pode votar?', 'O voto é facultativo para pessoas de 16 e 17 anos. A partir dos 18 anos, o alistamento e o voto são, em regra, obrigatórios, observadas as condições previstas na legislação.'], ['Antes da eleição', 'Consulte os canais oficiais da Justiça Eleitoral para verificar sua situação eleitoral, local de votação, documentos aceitos e prazos.'], ['No dia da votação', 'Confira sua seção eleitoral, leve um documento oficial com foto e siga as orientações da equipe da Justiça Eleitoral. A cabine de votação é individual e o voto é secreto.'], ['E se eu não puder comparecer?', 'Informe-se nos canais oficiais sobre justificativa eleitoral, prazos e procedimentos aplicáveis à sua situação.']]
  },
  '/direitos': {
    eyebrow: '03 · DIREITOS E DEVERES', title: 'Conhecer seus direitos também é cidadania.', intro: 'O exercício da cidadania está ligado à garantia dos direitos humanos e à responsabilidade coletiva.',
    sections: [['Direitos humanos', 'Liberdade, vida, saúde e educação são direitos fundamentais para a dignidade humana e devem ser respeitados.'], ['Direitos políticos', 'A participação política inclui votar, acompanhar debates públicos e buscar informações sobre instituições e decisões que afetam a sociedade.'], ['Abstenção e omissão', 'Quando o voto é obrigatório, a ausência exige atenção às regras de justificativa e regularização. A participação também amplia a diversidade de vozes no processo democrático.']]
  },
  '/desinformacao': {
    eyebrow: '04 · PENSAMENTO CRÍTICO', title: 'Na dúvida, pause. Investigue. Confirme.', intro: 'Informações falsas podem influenciar escolhas e prejudicar o debate público. Você pode ajudar a interromper esse ciclo.',
    sections: [['Investigue a origem', 'Confira quem publicou, a data, o contexto e se a informação aparece em outros canais confiáveis.'], ['Desconfie do sensacionalismo', 'Títulos alarmistas, imagens fora de contexto e mensagens que exigem compartilhamento urgente merecem atenção redobrada.'], ['Procure fontes oficiais', 'Consulte o Tribunal Superior Eleitoral (TSE) e os Tribunais Regionais Eleitorais (TREs) para esclarecer dúvidas sobre o processo eleitoral.']]
  },
  '/participacao': {
    eyebrow: '05 · PARA ALÉM DAS URNAS', title: 'A cidadania não termina na eleição.', intro: 'O voto escolhe representantes. A participação acompanha o que acontece depois.',
    sections: [['Acompanhe representantes', 'Busque informações sobre propostas, votações, decisões e ações dos representantes eleitos.'], ['Monitore políticas públicas', 'Observe como políticas públicas são planejadas e executadas e conheça os canais de participação e fiscalização disponíveis.'], ['Faça parte', 'Grêmios estudantis, conselhos, audiências públicas, associações e iniciativas comunitárias são espaços possíveis de participação social.']]
  }
}

function Header() {
  const location = useLocation()
  return <header className="header"><NavLink to="/" className="brand"><span className="brand-symbol">1º</span><span>PRIMEIRO<span className="brand-yellow">VOTO</span><small>CONHECIMENTO • CIDADANIA • PARTICIPAÇÃO</small></span></NavLink>
    <nav className="nav-links"><NavLink to="/cidadania">Democracia</NavLink><NavLink to="/primeiro-voto">Meu primeiro voto</NavLink><NavLink to="/desinformacao">Fato ou fake?</NavLink></nav>
    <NavLink className="nav-cta" to="/primeiro-voto">Começar <span>↗</span></NavLink>
    <button className="mobile-menu" aria-label="Ir para os conteúdos" onClick={() => document.getElementById('explorar')?.scrollIntoView({behavior:'smooth'})}>☰</button>
  </header>
}

function Home() {
  return <>
    <section className="hero-wrap"><div className="hero-copy"><span className="pill"><i/> SUA VOZ TEM PODER</span><h1>O futuro também<br/>passa pelo <em>seu voto.</em></h1><p>Seu primeiro voto não precisa ser um salto no escuro. Informação é o que transforma uma escolha em participação.</p><div className="hero-actions"><NavLink className="primary-btn" to="/primeiro-voto">Quero entender meu voto <span>→</span></NavLink><a className="text-link" href="#explorar">Explorar conteúdos ↓</a></div><div className="hero-proof"><span className="avatars"><b>✦</b><b>●</b><b>✿</b></span><span>Feito para quem quer<br/><strong>participar de verdade.</strong></span></div></div>
      <div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="sun-shape"/><div className="art-label label-top">SEU VOTO<br/>SUA VOZ <b>↗</b></div><div className="young-people"><span className="person p1">🧑🏽‍🦱</span><span className="person p2">👩🏻‍🦰</span><span className="person p3">👨🏿‍🦱</span><span className="person p4">👩🏽</span></div><div className="ballot-card"><span>✳</span><div><b>ESCOLHA COM<br/>CONSCIÊNCIA</b><small>Democracia se faz junto.</small></div></div><div className="art-label label-bottom">16+ <small>JÁ PODE<br/>PARTICIPAR</small></div></div>
    </section>
    <section className="explore-section" id="explorar"><div className="section-heading"><div><span className="eyebrow">UM GUIA PARA VOCÊ</span><h2>Conhecimento que<br/><em>vira atitude.</em></h2></div><p>Explore no seu ritmo. Cada passo te deixa mais preparado para participar das decisões que constroem o nosso futuro.</p></div>
      <div className="topic-grid">{topics.map(t=><NavLink to={t.path} className={'topic-card '+t.color} key={t.path}><div className="card-top"><span>{t.number} / 05</span><span className="topic-icon">{t.icon}</span></div><span className="card-tag">{t.tag}</span><h3>{t.title}</h3><p>{t.desc}</p><div className="card-bottom"><span>{t.time} de leitura</span><b>↗</b></div></NavLink>)}</div>
    </section>
    <section className="quiz-banner"><div><span className="eyebrow">BORA TESTAR?</span><h2>Você está por dentro<br/>da democracia?</h2><p>Responda algumas perguntas rápidas e descubra o que já sabe sobre cidadania e eleições.</p></div><NavLink to="/quiz" className="quiz-button">Fazer o quiz <span>→</span></NavLink><div className="quiz-sticker">?</div></section>
    <section className="closing"><span>✳</span><p>Uma escolha informada é o começo de uma participação que não termina na urna.</p></section>
  </>
}

function ContentPage({path}) {
  const data = content[path]
  return <article className="detail-page"><NavLink className="back-link" to="/">← Voltar ao início</NavLink><span className="eyebrow">{data.eyebrow}</span><h1>{data.title}</h1><p className="detail-intro">{data.intro}</p><div className="detail-layout"><div className="detail-index"><b>NESTE CONTEÚDO</b>{data.sections.map((s,i)=><a href={'#sec-'+i} key={s[0]}>{String(i+1).padStart(2,'0')} &nbsp;{s[0]}</a>)}</div><div className="detail-sections">{data.sections.map((s,i)=><section id={'sec-'+i} className="detail-block" key={s[0]}><span>0{i+1}</span><div><h2>{s[0]}</h2><p>{s[1]}</p></div></section>)}<div className="source-note">Dica: para informações sobre prazos, documentos e regras eleitorais, consulte sempre os canais oficiais da Justiça Eleitoral.</div></div></div><div className="next-topic"><span>CONTINUE SUA JORNADA</span><NavLink to={topics[(topics.findIndex(t=>t.path===path)+1)%topics.length].path}>Próximo conteúdo →</NavLink></div></article>
}

function Quiz() {
  const questions = [{q:'A partir de qual idade o voto é facultativo no Brasil?',a:['14 anos','16 anos','18 anos'],correct:1,why:'A partir dos 16 anos, o voto é facultativo para jovens de 16 e 17 anos.'},{q:'O que significa dizer que o voto é secreto?',a:['Ninguém pode escolher por você','Seu voto não pode ser identificado por outras pessoas','Você precisa votar sem documento'],correct:1,why:'O sigilo protege a liberdade de escolha de cada eleitor.'},{q:'A participação cidadã termina depois da eleição?',a:['Sim, só importa votar','Não, é possível acompanhar representantes e políticas públicas','Sim, até a próxima eleição'],correct:1,why:'Acompanhar decisões e participar da comunidade também são formas de exercer cidadania.'}]
  const [step,setStep]=useState(0),[answers,setAnswers]=useState([])
  const done=step===questions.length
  const q=questions[step]
  const score=answers.filter((a,i)=>a===questions[i].correct).length
  return <section className="quiz-page"><NavLink className="back-link" to="/">← Voltar ao início</NavLink><span className="eyebrow">QUIZ · APRENDA BRINCANDO</span><h1>Vamos testar seus conhecimentos?</h1><p className="detail-intro">Sem pressão: é só uma forma leve de revisar o que você aprendeu.</p><div className="quiz-box">{!done?<><div className="quiz-progress"><span>PERGUNTA {step+1} DE {questions.length}</span><span>{Math.round(step/questions.length*100)}%</span></div><div className="progress-track"><i style={{width:(step/questions.length*100)+'%'}}/></div><h2>{q.q}</h2><div className="answers">{q.a.map((a,i)=><button key={a} onClick={()=>{setAnswers([...answers,i]);setStep(step+1)}}>{String.fromCharCode(65+i)} <span>{a}</span><b>→</b></button>)}</div></>:<div className="quiz-result"><span>✳</span><h2>Você acertou {score} de {questions.length}!</h2><p>{score===3?'Mandou muito bem! Continue compartilhando informação de qualidade.':'Cada pergunta é uma oportunidade de aprender. Continue explorando os conteúdos!'}</p><button className="primary-btn" onClick={()=>{setStep(0);setAnswers([])}}>Refazer quiz ↻</button></div>}</div></section>
}

function App() {
  return <div className="site-shell"><Header/><main><Routes><Route path="/" element={<Home/>}/>{topics.map(t=><Route key={t.path} path={t.path} element={<ContentPage path={t.path}/>}/ >)}<Route path="/quiz" element={<Quiz/>}/><Route path="*" element={<Home/>}/></Routes></main><footer className="footer"><NavLink to="/" className="footer-brand">1º PRIMEIRO<span>VOTO</span></NavLink><p>Conhecimento, cidadania e participação política.</p><span>PROJETO DE EXTENSÃO · 2026</span><a href="https://www.tse.jus.br/" target="_blank" rel="noreferrer">Justiça Eleitoral ↗</a></footer></div>
}
export default App
