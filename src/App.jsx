import { useEffect, useRef, useState } from 'react'
import content from './content.html?raw'
import './styles.css'

const questions = [
  { q: 'Você recebe uma notícia sobre uma mudança nas regras de votação. O que faz primeiro?', a: ['Compartilho logo para alertar outras pessoas.', 'Verifico quem publicou e procuro a informação em canais oficiais.', 'Acredito se muitas pessoas já compartilharam.'], correct: 1, why: 'Isso mesmo! Verificar a origem e consultar canais oficiais ajuda a evitar a circulação de informações falsas.' },
  { q: 'Um vídeo sobre uma eleição circula sem data ou contexto. O que fazer?', a: ['Compartilhar porque parece convincente.', 'Acreditar se muitas pessoas enviaram.', 'Buscar a gravação completa e conferir em fontes confiáveis.'], correct: 2, why: 'Boa! Vídeos podem ser editados ou retirados de contexto. Procure a versão completa e outras fontes.' },
  { q: 'Uma mensagem alarmista diz que a votação foi cancelada. Qual é a atitude mais segura?', a: ['Checar nos canais oficiais da Justiça Eleitoral.', 'Repassar para alertar todo mundo.', 'Acreditar porque veio de alguém conhecido.'], correct: 0, why: 'Correto! Mensagens alarmistas e sem fonte são um sinal de alerta. Consulte os canais oficiais.' },
  { q: 'Qual atitude também fortalece a cidadania?', a: ['Acompanhar representantes e cobrar transparência.', 'Participar apenas no dia da votação.', 'Ignorar as decisões públicas depois da eleição.'], correct: 0, why: 'Perfeito! A participação democrática continua depois das urnas, com acompanhamento e fiscalização.' },
]

export default function App() {
  const rootRef = useRef(null)
  const [quiz, setQuiz] = useState({ index: 0, score: 0, selected: null, finished: false })

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const nav = root.querySelector('#navlinks')
    const closeMenu = () => nav?.classList.remove('open')

    const handleClick = (event) => {
      if (event.target.closest('#menu')) {
        nav?.classList.toggle('open')
        return
      }
      if (event.target.closest('#navlinks a')) closeMenu()
      if (event.target.closest('.backtop')) window.scrollTo({ top: 0, behavior: 'smooth' })

      const option = event.target.closest('.check-option')
      if (option && option.dataset.answer !== undefined) {
        const selected = Number(option.dataset.answer)
        setQuiz(current => {
          if (current.selected !== null || current.finished) return current
          return { ...current, selected, score: current.score + (selected === questions[current.index].correct ? 1 : 0) }
        })
      }
      if (event.target.closest('[data-quiz-next]')) {
        setQuiz(current => {
          const next = current.index + 1
          return next >= questions.length
            ? { ...current, finished: true, selected: null }
            : { ...current, index: next, selected: null }
        })
      }
      if (event.target.closest('[data-quiz-restart]')) {
        setQuiz({ index: 0, score: 0, selected: null, finished: false })
      }
    }

    root.addEventListener('click', handleClick)
    const reading = root.querySelector('#reading')
    const updateReading = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      if (reading) reading.style.width = `${total > 0 ? (doc.scrollTop / total) * 100 : 0}%`
    }
    window.addEventListener('scroll', updateReading, { passive: true })
    updateReading()

    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12 })
    root.querySelectorAll('.reveal').forEach(element => observer.observe(element))

    return () => {
      root.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', updateReading)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const root = rootRef.current
    const quizRoot = root?.querySelector('#quiz')
    if (!quizRoot) return
    const question = root.querySelector('#question')
    const options = root.querySelector('#options')
    const result = root.querySelector('#result')
    const progress = root.querySelector('#progress')

    if (quiz.finished) {
      question.textContent = 'Você concluiu o teste!'
      options.innerHTML = ''
      result.innerHTML = `Você acertou <strong>${quiz.score} de ${questions.length}</strong> perguntas. ${quiz.score === questions.length ? 'Mandou muito bem!' : 'Continue explorando a cartilha e aprendendo sobre cidadania.'}<br/><button class="btn" data-quiz-restart style="margin-top:14px">Refazer teste ↻</button>`
      if (progress) progress.style.width = '100%'
      return
    }

    const current = questions[quiz.index]
    question.textContent = current.q
    if (progress) progress.style.width = `${((quiz.index + 1) / questions.length) * 100}%`
    options.innerHTML = current.a.map((answer, index) => {
      const correct = quiz.selected !== null && index === current.correct
      const incorrect = quiz.selected === index && index !== current.correct
      return `<button class="check-option${correct ? ' correct' : ''}${incorrect ? ' incorrect' : ''}" data-answer="${index}" ${quiz.selected !== null ? 'disabled' : ''}>${answer}</button>`
    }).join('')

    result.textContent = quiz.selected === null
      ? 'Escolha uma resposta para continuar.'
      : current.why
    if (quiz.selected !== null) {
      result.innerHTML += `<br/><button class="btn" data-quiz-next style="margin-top:14px">${quiz.index === questions.length - 1 ? 'Ver resultado →' : 'Próxima pergunta →'}</button>`
    }
  }, [quiz])

  return <div ref={rootRef} className="app-root" dangerouslySetInnerHTML={{ __html: content }} />
}
