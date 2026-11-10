import { NavLink, Route, Routes } from 'react-router-dom'

const pages = [
  { path: '/', label: 'Início' },
  { path: '/cidadania', label: 'Democracia e cidadania' },
  { path: '/primeiro-voto', label: 'Guia do primeiro voto' },
  { path: '/direitos', label: 'Direitos e deveres' },
  { path: '/desinformacao', label: 'Desinformação' },
  { path: '/participacao', label: 'Depois do voto' },
]

function Home() {
  return <section className="hero">
    <p className="eyebrow">CONHECIMENTO • CIDADANIA • PARTICIPAÇÃO</p>
    <h1>Seu primeiro voto começa com informação.</h1>
    <p className="lead">Entenda como a democracia funciona, conheça seus direitos e descubra maneiras de participar da vida pública.</p>
    <NavLink className="button" to="/primeiro-voto">Conheça o guia</NavLink>
    <div className="hero-note">Uma cartilha digital para jovens que estão começando a exercer sua cidadania.</div>
  </section>
}

function ContentPage({ eyebrow, title, intro, sections }) {
  return <article className="content">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p className="lead">{intro}</p>
    {sections.map(([heading, body]) => <section className="topic" key={heading}>
      <h2>{heading}</h2><p>{body}</p>
    </section>)}
  </article>
}

function App() {
  return <div className="app-shell">
    <header className="topbar">
      <NavLink to="/" className="brand"><span className="brand-mark">1º</span><span>PRIMEIRO VOTO<small>GUIA DE CIDADANIA</small></span></NavLink>
      <nav aria-label="Navegação principal">
        {pages.slice(1).map(p => <NavLink key={p.path} to={p.path}>{p.label}</NavLink>)}
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cidadania" element={<ContentPage eyebrow="01 • FUNDAMENTOS" title="Democracia e cidadania" intro="A participação política faz parte da construção da vida em sociedade." sections={[
          ['O que é democracia?', 'Democracia é uma forma de organização política em que a população participa das decisões coletivas, diretamente ou por meio de representantes escolhidos em eleições.'],
          ['Cidadania na prática', 'Cidadania envolve direitos, responsabilidades e participação na comunidade. Ela não se limita ao momento de votar.'],
          ['Participação e pluralidade', 'Uma sociedade democrática reúne pessoas com experiências e opiniões diferentes. O diálogo, o respeito aos direitos e a participação ajudam a construir decisões coletivas.']
        ]} />} />
        <Route path="/primeiro-voto" element={<ContentPage eyebrow="02 • NA PRÁTICA" title="Guia do primeiro voto" intro="Conhecer as etapas do processo eleitoral ajuda a exercer o voto com autonomia e segurança." sections={[
          ['Quem pode votar?', 'O voto é facultativo para pessoas de 16 e 17 anos. A partir dos 18 anos, o alistamento e o voto são, em regra, obrigatórios, observadas as condições previstas na legislação.'],
          ['Antes da eleição', 'Consulte os canais oficiais da Justiça Eleitoral para verificar sua situação eleitoral, local de votação, documentos aceitos e prazos.'],
          ['No dia da votação', 'Confira sua seção eleitoral, leve um documento oficial com foto e siga as orientações da equipe da Justiça Eleitoral. A cabine de votação é individual e o voto é secreto.'],
          ['Se não puder comparecer', 'Informe-se nos canais oficiais sobre justificativa eleitoral, prazos e procedimentos aplicáveis à sua situação.']
        ]} />} />
        <Route path="/direitos" element={<ContentPage eyebrow="03 • DIREITOS" title="Direitos e responsabilidades" intro="O exercício da cidadania está ligado à garantia dos direitos humanos e à responsabilidade coletiva." sections={[
          ['Direitos humanos', 'Direitos como liberdade, vida, saúde e educação são fundamentais para a dignidade humana e devem ser respeitados.'],
          ['Direitos políticos', 'A participação política inclui votar, acompanhar debates públicos e buscar informações sobre as instituições e decisões que afetam a sociedade.'],
          ['Abstenção e omissão', 'A ausência na votação, quando o voto é obrigatório, exige atenção às regras de justificativa e regularização. Além dos efeitos individuais previstos nas normas eleitorais, a baixa participação pode reduzir a diversidade de vozes presentes no processo democrático.']
        ]} />} />
        <Route path="/desinformacao" element={<ContentPage eyebrow="04 • PENSAMENTO CRÍTICO" title="Como reconhecer desinformação" intro="Antes de compartilhar uma informação sobre eleições, pare, confira e procure a origem." sections={[
          ['Verifique a fonte', 'Confira quem publicou a informação, a data, o contexto e se outros veículos ou canais confiáveis apresentam os mesmos dados.'],
          ['Desconfie de conteúdos manipulados', 'Títulos alarmistas, imagens fora de contexto e mensagens que pedem compartilhamento urgente merecem verificação cuidadosa.'],
          ['Consulte fontes oficiais', 'Use os canais oficiais do Tribunal Superior Eleitoral e dos Tribunais Regionais Eleitorais para esclarecer dúvidas sobre o processo eleitoral.']
        ]} />} />
        <Route path="/participacao" element={<ContentPage eyebrow="05 • PARA ALÉM DAS URNAS" title="A participação não termina no voto" intro="Acompanhar a vida pública é uma prática contínua de cidadania." sections={[
          ['Acompanhe representantes', 'Busque informações sobre propostas, votações, decisões e ações dos representantes eleitos.'],
          ['Monitore políticas públicas', 'Observe como políticas públicas são planejadas e executadas e conheça os canais de participação e fiscalização disponíveis.'],
          ['Participe da comunidade', 'Grêmios estudantis, conselhos, audiências públicas, associações e iniciativas comunitárias são espaços possíveis de participação social.']
        ]} />} />
        <Route path="*" element={<ContentPage eyebrow="PÁGINA NÃO ENCONTRADA" title="Não encontramos essa página" intro="Volte ao início para continuar explorando a cartilha." sections={[]} />} />
      </Routes>
    </main>
    <footer><strong>PRIMEIRO VOTO</strong><span>Conhecimento, cidadania e participação política.</span><small>Projeto de extensão • Conteúdo em desenvolvimento</small></footer>
  </div>
}

export default App