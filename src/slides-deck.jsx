// DECK EXECUTIVO — 8 slides (arco Bruno)

// ── SLIDE 1: CAPA ──
function DeckCapa({ active }) {
  const photos = ['assets/blitz-01.jpeg','assets/blitz-02.jpeg','assets/blitz-03.jpeg','assets/blitz-04.png'];
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden" style={{ background: '#111110' }}>
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 opacity-30">
        {photos.map((src, i) => (
          <SlideReveal key={i} active={active} delay={i * 120} className="h-full">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </SlideReveal>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/80 to-[#111110]/50" />
      <div className="relative flex-1 flex flex-col justify-between px-10 md:px-20 py-10 md:py-14">
        <SlideReveal active={active} delay={0}>
          <div className="flex items-center gap-4">
            <span className="text-white"><Logo /></span>
            <span className="w-px bg-white/15" style={{ height: 22 }} />
            <img src="assets/rodojacto-logo.png" alt="Rodojacto" style={{ height: 28, filter: 'brightness(0) invert(1) opacity(0.8)' }} />
          </div>
        </SlideReveal>
        <div className="max-w-3xl">
          <SlideReveal active={active} delay={350}>
            <h1 className="font-semibold text-white leading-[1.05]" style={{ fontSize: 'clamp(36px, 5.5vw, 62px)', letterSpacing: '-0.03em' }}>
              Voc&ecirc; sabe o que est&aacute;<br />acontecendo na sua<br />frota <span style={{ color: '#ef4444' }}>agora</span>?
            </h1>
          </SlideReveal>
          <SlideReveal active={active} delay={550}>
            <p className="mt-6 text-stone-400 leading-relaxed" style={{ fontSize: 16, maxWidth: 540 }}>
              A gente passou um dia inteiro dentro da Rodojacto. Vimos de perto o que trava, o que se perde e o que d&aacute; pra mudar &mdash; <strong className="text-white">sem substituir o que j&aacute; funciona.</strong>
            </p>
          </SlideReveal>
        </div>
        <SlideReveal active={active} delay={650}>
          <div className="flex items-end justify-between">
            <div className="text-[11px] text-stone-500">
              <div>14 a 28 de abril, 2026</div>
              <div className="mt-0.5">{CLIENT.responsavel} &middot; Account Executive</div>
            </div>
            <div className="flex gap-2">
              {photos.map((src, i) => (
                <div key={i} className="w-14 h-14 rounded-lg overflow-hidden border border-white/10">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </SlideReveal>
      </div>
    </div>
  );
}

// ── SLIDE 2: PROBLEMA (SEM SCROLL) ──
function DeckProblema({ active }) {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-white">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-5">
        <div className="max-w-[1200px] w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Diagn&oacute;stico</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.1] text-ink mb-1">
              O que a opera&ccedil;&atilde;o da <span className="font-bold">Rodojacto</span> revela hoje
            </h2>
          </SlideReveal>

          <SlideReveal active={active} delay={180}>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { tag: 'DISPONIBILIDADE', value: '250', unit: 'ativos', sub: 'sem visibilidade em tempo real' },
                { tag: 'SISTEMAS', value: '3', unit: 'desconectados', sub: 'BTime + MO + SAP' },
                { tag: 'AUTOMA\u00c7\u00c3O', value: '0', unit: '', sub: 'visibilidade em tempo real' },
              ].map(function(k, i) { return (
                <div key={i} className="rounded-lg border border-red-200 bg-red-50/50 px-3 py-2.5 text-center">
                  <div className="text-[8px] font-bold uppercase tracking-wider text-red-500 mb-1">{k.tag}</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-ink tabular-nums tracking-tight">{k.value}</span>
                    {k.unit && <span className="text-[11px] text-muted">{k.unit}</span>}
                  </div>
                  <div className="text-[10px] text-muted mt-0.5">{k.sub}</div>
                </div>
              ); })}
            </div>
          </SlideReveal>

          <SlideReveal active={active} delay={300}>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { tag: 'CUSTO OCULTO', title: 'Carretas paradas sem alerta', desc: 'Carretas no bols\u00e3o Jato ou no p\u00e1tio do cliente \u2014 sem notifica\u00e7\u00e3o, sem prazo, sem cobran\u00e7a.' },
                { tag: 'DADO N\u00c3O CONFI\u00c1VEL', title: 'Rastreador n\u00e3o \u00e9 fonte de verdade', desc: '\u201cO rastreador diz que t\u00e1 dispon\u00edvel, mas a carreta n\u00e3o roda.\u201d \u2014 Alessandro' },
              ].map(function(d, i) { return (
                <div key={i} className="border border-stone-200/70 rounded-lg px-4 py-3">
                  <div className="text-[8px] font-bold uppercase tracking-wider text-red-500 mb-1">{d.tag}</div>
                  <div className="text-sm font-bold text-ink mb-0.5">{d.title}</div>
                  <p className="text-xs text-muted leading-snug">{d.desc}</p>
                </div>
              ); })}
            </div>
          </SlideReveal>

          <SlideReveal active={active} delay={450}>
            <div className="border-t border-stone-200/70 pt-5 text-center">
              <p className="text-base md:text-lg font-semibold text-ink leading-snug">
                Cada carreta parada &eacute; frete perdido.<br />
                <span className="text-red-600">Voc&ecirc; tem 250 ativos sem visibilidade agora.</span>
              </p>
            </div>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
}

// ── SLIDE 3: JORNADA ──
function DeckJornada({ active }) {
  var _s = React.useState(false), revealed = _s[0], setRevealed = _s[1];
  React.useEffect(function() {
    if (active) { var t = setTimeout(function() { setRevealed(true); }, 1200); return function() { clearTimeout(t); }; }
    setRevealed(false);
  }, [active]);

  var hoje = [
    { step: 'Sa\u00edda do Ve\u00edculo', time: '~30min', tag: 'SISTEMA', tone: 'gray' },
    { step: 'Em Tr\u00e2nsito (Ida)', time: '~vari\u00e1vel', tag: 'SISTEMA', tone: 'gray' },
    { step: 'Chegada no Cliente', time: '~1h', tag: 'SEM CONTROLE', tone: 'red' },
    { step: 'Aguardando Carregamento', time: '~4h', tag: 'SEM CONTROLE', tone: 'red' },
    { step: 'Em Tr\u00e2nsito (Volta)', time: '~vari\u00e1vel', tag: 'SISTEMA', tone: 'gray' },
    { step: 'Chegada na Base', time: '~30min', tag: 'SISTEMA', tone: 'gray' },
    { step: 'Classifica\u00e7\u00e3o Dispon\u00edvel', time: '~2h', tag: 'SEM CONTROLE', tone: 'red' },
    { step: 'Indispon\u00edvel (Manuten\u00e7\u00e3o)', time: '~vari\u00e1vel', tag: 'MANUAL', tone: 'darkred' },
  ];
  var rabbot = [
    { step: 'Rastreio Autom\u00e1tico', tag: 'Auto' },
    { step: 'ETA Inteligente', tag: 'Auto' },
    { step: 'Cercas Eletr\u00f4nicas', tag: 'Auto' },
    { step: 'Status em Tempo Real', tag: 'Real-time' },
    { step: 'Integra\u00e7\u00e3o Manuten\u00e7\u00e3o', tag: 'Auto' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-bg">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
        <div className="max-w-[1100px] w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Como mudamos o ciclo</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Da planilha ao controle inteligente da opera&ccedil;&atilde;o
            </h2>
            <p className="text-xs text-muted mb-6">O problema n&atilde;o &eacute; falta de sistema &mdash; s&atilde;o tr&ecirc;s sistemas desconectados com redigita&ccedil;&atilde;o em cada transi&ccedil;&atilde;o.</p>
          </SlideReveal>

          {/* CICLO ATUAL */}
          <SlideReveal active={active} delay={200}>
            <div className="bg-red-50/40 border border-red-200 rounded-xl p-5 mb-3">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink">Ciclo Atual</span>
              </div>
              <div className="grid grid-cols-8 gap-1.5">
                {hoje.map(function(s, i) {
                  return (
                    <div key={i} className="bg-white border border-red-200/70 rounded-lg px-1.5 py-2.5 text-center">
                      <div className="text-sm font-bold text-red-400 tabular-nums mb-0.5">{'0' + (i + 1)}</div>
                      <div className="text-[8px] font-semibold text-ink leading-snug mb-1">{s.step}</div>
                      <span className="text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full text-red-400 bg-red-50">{s.tag}</span>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-3">
                <span className="text-[10px] text-muted">sem visibilidade &mdash; planilha + WhatsApp + telefone</span>
              </div>
            </div>
          </SlideReveal>

          {/* GAPS DO CICLO ATUAL */}
          <SlideReveal active={active} delay={400}>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { tag: 'SEM VISIBILIDADE', title: 'Decis\u00e3o atrasada', desc: 'Sem rastreio em tempo real, gestor s\u00f3 reage quando j\u00e1 perdeu tempo.' },
                { tag: 'DEMURRAGE', title: 'Perda financeira', desc: 'Tempo no cliente invis\u00edvel. Demurrage n\u00e3o rastreado, n\u00e3o cobrado.' },
                { tag: 'CUSTO INVIS\u00cdVEL', title: 'Decis\u00e3o \u00e0s cegas', desc: 'Sem dado em tempo real, voc\u00ea s\u00f3 descobre o problema depois que ele j\u00e1 custou.' },
                { tag: 'MANUTEN\u00c7\u00c3O', title: 'Frota fantasma', desc: 'Carreta sai da oficina e some do radar. Ningu\u00e9m sabe se est\u00e1 dispon\u00edvel.' },
              ].map(function(g, i) { return (
                <div key={i} className="border border-red-200/70 bg-red-50/30 rounded-lg px-3 py-2.5">
                  <div className="text-[8px] font-bold uppercase tracking-wider text-red-500 mb-1">{g.tag}</div>
                  <div className="text-xs font-bold text-ink mb-0.5">{g.title}</div>
                  <p className="text-[10px] text-muted leading-snug">{g.desc}</p>
                </div>
              ); })}
            </div>
          </SlideReveal>

          {/* Divider with arrow */}
          <SlideReveal active={active} delay={700}>
            <div className="flex flex-col items-center my-4 gap-1">
              <div className={'transition-all duration-700 flex flex-col items-center gap-0.5 ' + (revealed ? 'opacity-100' : 'opacity-0')}>
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none"><path d="M12 2 L12 26 M5 20 L12 28 L19 20" stroke="#479C4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-[10px] font-semibold text-brand-600 uppercase tracking-wider">Com a Rabbot</span>
              </div>
            </div>
          </SlideReveal>

          {/* CICLO RABBOT — menor, efeito funil */}
          <div className={'transition-all duration-700 flex justify-center ' + (revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            <div className="bg-brand-50/50 border border-brand-200/60 rounded-xl p-4 w-3/4">
              <div className="flex justify-center mb-3">
                <span className="text-ink"><Logo /></span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {rabbot.map(function(s, i) { return (
                  <div key={i} className="bg-white border border-brand-200/70 rounded-lg px-2 py-2 text-center">
                    <div className="text-sm font-bold text-brand-700 tabular-nums mb-0.5">{'0' + (i + 1)}</div>
                    <div className="text-[10px] font-medium text-ink leading-snug">{s.step}</div>
                    <div className="text-[8px] text-brand-600 mt-1">{s.tag}</div>
                  </div>
                ); })}
              </div>
              <div className="text-center mt-3">
                <span className="text-[10px] text-muted">~2 dias &middot; visibilidade total &middot; status autom&aacute;tico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SLIDE 4: SOLU&Ccedil;&Atilde;O DMA ──
function DeckSolucao({ active }) {
  var tiles = [
    { letter: 'D', label: 'Disponibilidade', color: '#479C4A', title: 'Disponibilidade', desc: 'Kanban em tempo real, 250 ativos rastreados', img: 'assets/kanbanrabbot.png' },
    { letter: 'M', label: 'Manuten\u00e7\u00e3o', color: '#d97706', title: 'Manuten\u00e7\u00e3o', desc: 'OS digital, do apontamento ao fechamento', img: 'assets/manutencao-screenshot.png' },
    { letter: 'A', label: 'Aquisi\u00e7\u00e3o de Pe\u00e7as', color: '#3b82f6', title: 'Aquisi\u00e7\u00e3o de Pe\u00e7as', desc: 'Cota\u00e7\u00e3o e compra conectadas \u00e0s ordens de servi\u00e7o', img: 'assets/aquisicao-screenshot.png' },
  ];
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      <div className="flex-1 grid grid-cols-[38%_1fr] min-h-0">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-10 lg:px-14">
          <SlideEyebrow active={active} delay={0}>Solu&ccedil;&atilde;o &middot; D &middot; M &middot; A</SlideEyebrow>
          <SlideReveal active={active} delay={100}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Menos tempo na oficina,<br />mais tempo na estrada.
            </h2>
          </SlideReveal>
          <SlideReveal active={active} delay={150}>
            <p className="text-base font-semibold text-brand-600 mb-2">
              Simples de ver. F&aacute;cil de agir.
            </p>
          </SlideReveal>
          <SlideReveal active={active} delay={200}>
            <p className="text-sm text-muted leading-relaxed">
              Sem trocar de sistema, sem ligar pro mec&acirc;nico, sem planilha. O gestor v&ecirc; tudo e decide na hora.
            </p>
          </SlideReveal>
        </div>

        {/* Right: dashboard charts recreated */}
        <div className="flex flex-col gap-3 p-4 min-h-0 overflow-hidden" style={{ background: '#f5f5f4' }}>

          {/* D — Evolu&ccedil;&atilde;o da Disponibilidade (SVG) */}
          <SlideReveal active={active} delay={200} className="min-h-0 flex-1">
            <div className="bg-white border border-stone-200/70 rounded-xl overflow-hidden shadow-sm h-full flex flex-col p-3">
              <div className="flex items-center justify-between mb-2 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#479C4A' }}>D</span>
                  <span className="text-[11px] font-semibold text-ink">Evolu&ccedil;&atilde;o da disponibilidade</span>
                </div>
                <div className="flex items-center gap-0 border border-stone-200 rounded-md overflow-hidden">
                  <span className="text-[9px] font-semibold text-white px-2.5 py-0.5" style={{ background: '#479C4A' }}>Semana</span>
                  <span className="text-[9px] font-medium text-muted px-2.5 py-0.5 bg-white">M&ecirc;s</span>
                </div>
              </div>
              {(function() {
                var bars = [
                  { d: 62, label: '01/03' }, { d: 63, label: '02/03' }, { d: 64, label: '09/03' },
                  { d: 68, label: '16/03' }, { d: 68, label: '23/03' }, { d: 69, label: '30/03' },
                  { d: 70, label: '06/04' }, { d: 70, label: '13/04' }, { d: 72, label: '20/04' },
                  { d: 71, label: '27/04' }, { d: 70, label: '04/05' }, { d: 69, label: '11/05' },
                ];
                var W = 700, H = 180, left = 30, right = 4, top = 4, bottom = 16;
                var chartW = W - left - right;
                var chartH = H - top - bottom;
                var gap = 30;
                var bw = (chartW - (bars.length - 1) * gap) / bars.length;
                var ticks = [0, 25, 50, 75, 100];
                return (
                  <svg viewBox={'0 0 ' + W + ' ' + H} className="flex-1 w-full min-h-0" preserveAspectRatio="xMidYMid meet">
                    {ticks.map(function(t) {
                      var yy = top + chartH - (t / 100) * chartH;
                      return React.createElement('g', { key: 'tick-' + t },
                        React.createElement('line', { x1: left, x2: left + chartW, y1: yy, y2: yy, stroke: '#e7e5e4', strokeWidth: 0.5 }),
                        React.createElement('text', { x: left - 4, y: yy + 3, fontSize: '7', fill: '#78716c', textAnchor: 'end' }, t + '%')
                      );
                    })}
                    {bars.map(function(b, i) {
                      var x = left + i * (bw + gap);
                      var greenH = (b.d / 100) * chartH;
                      var redH = chartH - greenH;
                      return React.createElement('g', { key: i },
                        React.createElement('rect', { x: x, y: top, width: bw, height: redH, fill: '#C93D3D' }),
                        React.createElement('rect', { x: x, y: top + redH, width: bw, height: greenH, fill: '#479C4A' }),
                        React.createElement('text', { x: x + bw / 2, y: top + chartH + 11, textAnchor: 'middle', fontSize: '7', fill: '#78716c' }, b.label)
                      );
                    })}
                  </svg>
                );
              })()}
              <div className="flex items-center justify-center gap-4 mt-1 shrink-0">
                <span className="flex items-center gap-1 text-[9px] text-muted"><span className="w-2 h-2 rounded-sm" style={{ background: '#479C4A' }}/>Disponibilidade</span>
                <span className="flex items-center gap-1 text-[9px] text-muted"><span className="w-2 h-2 rounded-sm" style={{ background: '#C93D3D' }}/>Indisponibilidade</span>
              </div>
            </div>
          </SlideReveal>

          {/* M — Status das Ordens de Serviço */}
          <SlideReveal active={active} delay={320} className="min-h-0 flex-none">
            <div className="rounded-xl overflow-hidden shadow-sm p-4" style={{ background: '#fdf2f2', border: '1px solid #f9dada' }}>
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#d97706' }}>M</span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#C93D3D' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </span>
                  <span className="text-[12px] font-semibold text-ink">Status das Ordens de Serviço</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded" style={{ background: '#C93D3D' }}>Crítico</span>
                </div>
                <span className="text-[9px] font-semibold px-3 py-1 rounded-full border flex items-center gap-1" style={{ color: '#C93D3D', borderColor: '#f0abab', background: '#fdf2f2' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Ver 4 OS críticas
                </span>
              </div>
              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-ink">13</span>
                <span className="text-[10px] text-muted">serviços em aberto</span>
                <span className="text-[9px] font-semibold text-white px-2 py-0.5 rounded" style={{ background: '#C93D3D' }}>2 Urgentes</span>
                <span className="text-[9px] font-semibold text-white px-2 py-0.5 rounded" style={{ background: '#e07272' }}>2 Altas</span>
                <span className="text-[9px] font-semibold text-white px-2 py-0.5 rounded" style={{ background: '#d97706' }}>8 Médias</span>
                <span className="text-[9px] font-semibold text-white px-2 py-0.5 rounded" style={{ background: '#a3a3a3' }}>1 Baixa</span>
              </div>
              {/* Metric cards */}
              <div className="grid grid-cols-5 gap-2">
                <div className="bg-white border border-stone-200/70 rounded-lg p-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#C93D3D' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                    </span>
                    <span className="text-[9px] text-muted">Veículos em OS</span>
                  </div>
                  <div className="text-base font-bold text-ink">10</div>
                  <div className="text-[8px] text-muted mt-0.5">13 OS · 13 serviços · 96 frotas analisadas</div>
                </div>
                <div className="bg-white border border-stone-200/70 rounded-lg p-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#C93D3D' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </span>
                    <span className="text-[9px] text-muted">MTTR Médio</span>
                  </div>
                  <div className="text-base font-bold text-ink">2.9d</div>
                  <div className="text-[8px] text-muted mt-0.5">Tempo médio de reparo</div>
                  <div className="text-[8px] text-muted">— Sem dados anteriores</div>
                </div>
                <div className="bg-white border border-stone-200/70 rounded-lg p-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#d97706' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </span>
                    <span className="text-[9px] text-muted">% No Prazo</span>
                  </div>
                  <div className="text-base font-bold text-ink">65%</div>
                  <div className="text-[8px] text-muted mt-0.5">OS finalizadas dentro do SLA</div>
                </div>
                <div className="bg-white border border-stone-200/70 rounded-lg p-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#d97706' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polyline points="9 11 12 14 22 4"/></svg>
                    </span>
                    <span className="text-[9px] text-muted">Resolução ✓</span>
                  </div>
                  <div className="text-base font-bold text-ink">85%</div>
                  <div className="text-[8px] text-muted mt-0.5">Apontamentos resolvidos</div>
                </div>
                <div className="bg-white border border-stone-200/70 rounded-lg p-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#C93D3D' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    </span>
                    <span className="text-[9px] text-muted">Reincidência ↻</span>
                  </div>
                  <div className="text-base font-bold text-ink">25.5%</div>
                  <div className="text-[8px] text-muted mt-0.5">Taxa de reincidência</div>
                </div>
              </div>
            </div>
          </SlideReveal>

          {/* A — Top Fornecedores + Economia */}
          <SlideReveal active={active} delay={440} className="min-h-0 flex-1">
            <div className="bg-white border border-stone-200/70 rounded-xl overflow-hidden shadow-sm h-full flex flex-col p-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-2 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#3b82f6' }}>A</span>
                  <div>
                    <span className="text-[11px] font-bold text-ink uppercase tracking-wide">Top 10 Fornecedores</span>
                    <div className="text-[8px] text-muted">Por valor total de compras</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-muted border border-stone-200 rounded px-2 py-0.5 flex items-center gap-1">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    Normalizar
                  </span>
                  <span className="text-[8px] text-muted border border-stone-200 rounded px-2 py-0.5 flex items-center gap-1">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Excel
                  </span>
                </div>
              </div>
              {/* Top 3 podium */}
              <div className="grid grid-cols-3 gap-2 mb-2 shrink-0">
                <div className="border border-stone-200/70 rounded-lg p-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-bold text-white bg-green-600 rounded px-1">#1</span>
                      <span className="text-[10px] font-bold text-ink ml-1">BORA</span>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#479C4A" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                  <div className="text-sm font-bold" style={{ color: '#479C4A' }}>R$ 1.2M</div>
                  <div className="text-[8px] text-muted">0.2% eficiência</div>
                </div>
                <div className="border border-stone-200/70 rounded-lg p-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-bold text-white bg-green-600 rounded px-1">#2</span>
                      <span className="text-[10px] font-bold text-ink ml-1">PABU</span>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#479C4A" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                  <div className="text-sm font-bold" style={{ color: '#479C4A' }}>R$ 204k</div>
                  <div className="text-[8px] text-muted">10.6% eficiência</div>
                </div>
                <div className="border border-stone-200/70 rounded-lg p-2" style={{ border: '1.5px solid #479C4A' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-bold text-white bg-green-600 rounded px-1">#3</span>
                      <span className="text-[10px] font-bold text-ink ml-1">PORTOEIXO</span>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#479C4A" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                  <div className="text-sm font-bold" style={{ color: '#479C4A' }}>R$ 151k</div>
                  <div className="text-[8px] text-muted">1.9% eficiência</div>
                </div>
              </div>
              {/* Bar chart — 7 fornecedores */}
              <div className="flex flex-col justify-center gap-[3px]">
                {[
                  { name: 'BORA', value: 1200, color: '#479C4A' },
                  { name: 'PABU', value: 204, color: '#3d863f' },
                  { name: 'PORTOEIXO', value: 151, color: '#3b82f6' },
                  { name: 'PERIMPECAS', value: 90, color: '#a8a29e' },
                  { name: 'REDIESEL', value: 85, color: '#a8a29e' },
                  { name: 'GRUPOVANNUCCI', value: 72, color: '#a8a29e' },
                  { name: 'VIATRUCKS', value: 65, color: '#a8a29e' },
                ].map(function(f, i) { return (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[7px] text-muted w-20 text-right truncate shrink-0">{f.name}</span>
                    <div className="flex-1 h-3.5 bg-stone-100 rounded-sm overflow-hidden">
                      <div className="h-full rounded-sm" style={{ width: (f.value / 1200 * 100) + '%', background: f.color }} />
                    </div>
                  </div>
                ); })}
                {/* X axis labels */}
                <div className="flex justify-between pl-[88px] mt-0.5">
                  <span className="text-[7px] text-muted">R$ 0</span>
                  <span className="text-[7px] text-muted">R$ 300k</span>
                  <span className="text-[7px] text-muted">R$ 600k</span>
                  <span className="text-[7px] text-muted">R$ 900k</span>
                  <span className="text-[7px] text-muted">R$ 1.2M</span>
                </div>
              </div>
              {/* Summary footer */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100 shrink-0">
                <div className="text-center flex-1">
                  <div className="text-[8px] text-muted uppercase tracking-wider">Fornecedores</div>
                  <div className="text-sm font-bold text-ink">10</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-[8px] text-muted uppercase tracking-wider">Total Compras</div>
                  <div className="text-sm font-bold text-ink">R$ 2.4M</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-[8px] text-muted uppercase tracking-wider">Economia Total</div>
                  <div className="text-sm font-bold" style={{ color: '#479C4A' }}>R$ 248k</div>
                </div>
              </div>
            </div>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
}

// ── SLIDE 5: TIME DE IA ──
function DeckAgentesVision({ active }) {
  return (
    <div className="flex-1 flex flex-col" style={{ background: '#1c1917' }}>
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-8">
        <div className="max-w-5xl w-full mx-auto">
          <SlideReveal active={active} delay={0}>
            <div className="text-center mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500 mb-4">Time Rabbot</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.08] text-white mb-3">
                Um time de IA que trabalha<br /><span className="text-brand-500">24 horas por dia, 7 dias por semana</span>
              </h2>
            </div>
          </SlideReveal>
          <SlideReveal active={active} delay={200}>
            <div className="flex justify-center">
              <AgentTeamOrganogram showcase />
            </div>
          </SlideReveal>
          <SlideReveal active={active} delay={400}>
            <div className="flex flex-col items-center gap-3 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse shrink-0" />
                <span className="text-sm text-stone-400">
                  J&aacute; rodamos o agente Marco na sua opera&ccedil;&atilde;o. Imagine o time completo.
                </span>
              </div>
              <a href="https://rodojacto-agent-report.lovable.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition shadow-lg shadow-brand-600/25">
                Ver relat&oacute;rio do Marco
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
}

// ── SLIDE 6: PILOTO ──
function DeckPiloto({ active }) {
  var pairs = [
    { before: { title: 'Carretas ociosas sem alerta', desc: 'Carretas no bols\u00e3o Jato ou no p\u00e1tio sem notifica\u00e7\u00e3o autom\u00e1tica.', tag: 'Custo de imobiliza\u00e7\u00e3o invis\u00edvel' },
      after: { title: 'Agente IA monitora carreta parada no cliente', desc: 'Inclui bols\u00e3o Jato com dias de ociosidade.', tag: 'Custo de imobiliza\u00e7\u00e3o eliminado' } },
    { before: { title: 'Carretas presas no p\u00e1tio do cliente', desc: 'Sem saber h\u00e1 quantos dias est\u00e1 parada.', tag: 'Custo oculto de imobiliza\u00e7\u00e3o externa' },
      after: { title: 'Dashboard dispon\u00edvel 24/7 por placa', desc: 'Status, MTBF, MTTR e ranking de produtividade em tempo real.', tag: 'Decis\u00e3o baseada em dados' } },
    { before: { title: 'Rastreador n\u00e3o \u00e9 fonte de verdade', desc: '"Diz que t\u00e1 dispon\u00edvel, mas a carreta n\u00e3o roda." \u2014 Alessandro', tag: 'Dado que n\u00e3o reflete a realidade' },
      after: { title: 'Kanban como fonte de verdade da frota', desc: 'Status real, independente do rastreador.', tag: 'Dado confi\u00e1vel para decis\u00e3o' } },
    { before: { title: 'Planilha manual de disponibilidade', desc: 'Google Sheets com 200+ carretas atualizada manualmente.', tag: 'Frota vis\u00edvel s\u00f3 pra quem mant\u00e9m a planilha' },
      after: { title: 'Kanban de disponibilidade em tempo real', desc: 'Alessandro e Marcos Brasil veem toda a frota ao vivo.', tag: 'Substitui a planilha Google Sheets' } },
    { before: { title: 'Etapa manual que deveria ser autom\u00e1tica', desc: 'Intervalo entre apontamento e abertura de OS depende de a\u00e7\u00e3o humana.', tag: 'Tempo produtivo perdido por Alessandro' },
      after: { title: 'Abertura autom\u00e1tica de OS + baixa no SAP', desc: 'Integra\u00e7\u00e3o completa em 1 passo.', tag: 'Fim da duplica\u00e7\u00e3o entre sistemas' } },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-bg">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-4">
        <div className="max-w-[1100px] w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Piloto &middot; Blitz 22/04</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Fomos at&eacute; voc&ecirc;s e provamos em 1 dia.
            </h2>
            <p className="text-xs text-muted mb-5">Ao contr&aacute;rio de solu&ccedil;&otilde;es que prometem, a Rabbot implanta e prova resultado no mesmo dia.</p>
          </SlideReveal>

          {/* Main content: antes/depois */}
          <div>
            {/* Antes x Depois */}
            <SlideReveal active={active} delay={200}>
              {/* Prints inline — Hoje vs Com a Rabbot */}
              <div className="grid grid-cols-2 gap-x-8 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-500 mb-1.5 block">Hoje</span>
                  <div className="rounded-lg overflow-hidden border border-stone-200/70">
                    <img src="assets/planilha.jpeg" alt="Planilha manual" className="w-full object-contain" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 mb-1.5 block">Com a Rabbot</span>
                  <div className="rounded-lg overflow-hidden border border-brand-200">
                    <img src="assets/kanbanrabbot.png" alt="Kanban Rabbot" className="w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Mensagem */}
              <div className="rounded-lg p-3 mb-4" style={{ background: 'linear-gradient(135deg, #eef6ee 0%, #f5f5f4 100%)', border: '1px solid #d4e8d5' }}>
                <p className="text-[12px] text-muted text-center">
                  Mais visibilidade para sua equipe. Menos manual, mais automatizado. Todas as vis&otilde;es conectadas num &uacute;nico lugar.
                </p>
              </div>

              {/* Pares antes/depois */}
              <div className="grid grid-cols-2 gap-x-8 mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-500">Antes</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700">Depois</span>
              </div>
              <div className="space-y-0">
                {pairs.map(function(p, i) { return (
                  <div key={i} className="grid grid-cols-2 gap-x-8 py-3.5 border-b border-stone-200/70 last:border-b-0">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-0.5">
                        <IconAlert size={10} strokeWidth={1.5} className="text-stone-400" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-ink leading-tight">{p.before.title}</div>
                        <div className="text-[11px] text-muted leading-snug mt-0.5">{p.before.desc}</div>
                        <div className="text-[10px] text-red-500 font-medium mt-0.5">{p.before.tag}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck size={10} strokeWidth={1.5} className="text-brand-600" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-ink leading-tight">{p.after.title}</div>
                        <div className="text-[11px] text-muted leading-snug mt-0.5">{p.after.desc}</div>
                        <div className="text-[10px] text-brand-600 font-medium mt-0.5">{p.after.tag}</div>
                      </div>
                    </div>
                  </div>
                ); })}
              </div>
            </SlideReveal>
          </div>


        </div>
      </div>

    </div>
  );
}

// ── SLIDE 7: ROI ──
function DeckROI({ active }) {
  var levers = [
    { letter: 'D', label: 'Disponibilidade', color: '#479C4A', value: '[a definir]', sub: '/m\u00eas', premises: ['[premissa 1]', '[premissa 2]'] },
    { letter: 'M', label: 'Manuten\u00e7\u00e3o', color: '#d97706', value: '[a definir]', sub: '/m\u00eas', premises: ['[premissa 1]', '[premissa 2]'] },
    { letter: 'A', label: 'Aquisi\u00e7\u00e3o', color: '#3b82f6', value: '[a definir]', sub: '/m\u00eas', premises: ['[premissa 1]', '[premissa 2]'] },
  ];
  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-8">
        <div className="max-w-5xl w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Retorno endere&ccedil;&aacute;vel</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.08] text-ink mb-8">
              Retorno endere&ccedil;&aacute;vel<br />por pilar <span className="text-brand-600">D</span> &middot; <span className="text-amber-600">M</span> &middot; <span className="text-blue-600">A</span>
            </h2>
          </SlideReveal>
          <SlideReveal active={active} delay={250}>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {levers.map(function(l, i) { return (
                <div key={i} className="rounded-xl border-2 p-5 flex flex-col" style={{ borderColor: l.color + '40', background: l.color + '08' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: l.color }}>{l.letter}</span>
                    <span className="text-sm font-semibold text-ink">{l.label}</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-2xl font-bold tabular-nums" style={{ color: l.color }}>R$ {l.value}</span>
                    <span className="text-sm text-muted">{l.sub}</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-muted border-t pt-2 mt-auto" style={{ borderColor: l.color + '20' }}>
                    {l.premises.map(function(p, pi) { return (
                      <div key={pi} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: l.color }} />
                        <span>{p}</span>
                      </div>
                    ); })}
                  </div>
                </div>
              ); })}
            </div>
          </SlideReveal>
          <SlideReveal active={active} delay={450}>
            <div className="rounded-xl p-5 text-center" style={{ background: '#1c1917' }}>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">Total endere&ccedil;&aacute;vel</div>
              <div className="flex items-baseline justify-center gap-3 flex-wrap">
                <span className="text-3xl md:text-4xl font-bold text-brand-500 tabular-nums">R$ [placeholder]</span>
                <span className="text-lg text-stone-500">/m&ecirc;s</span>
              </div>
              <div className="mt-1.5 text-sm text-stone-500">R$ [placeholder] /ano</div>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-stone-600">N&uacute;meros ser&atilde;o preenchidos pela squad com premissas validadas</div>
            </div>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
}

// ── SLIDE 8: CRONOGRAMA ──
function DeckCrono({ active }) {
  var cols = ['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4'];
  // rows: { label, sub, isGroup, color, start (0-based col), span (num cols), indent }
  var rows = [
    { label: '[a definir]', sub: '[a definir]', isGroup: true, color: '#479C4A', start: 0, span: 4 },
    { label: '[a definir]', indent: true, color: '#479C4A', start: 0, span: 2 },
    { label: '[a definir]', indent: true, color: '#479C4A', start: 1, span: 2 },
    { label: '[a definir]', indent: true, color: '#479C4A', start: 0, span: 4 },
    { label: '[a definir]', sub: '[a definir]', isGroup: true, color: '#d97706', start: 1, span: 3 },
    { label: '[a definir]', indent: true, color: '#d97706', start: 1, span: 2 },
    { label: '[a definir]', indent: true, color: '#d97706', start: 2, span: 2 },
    { label: '[a definir]', sub: '[a definir]', isGroup: true, color: '#78716c', start: 1, span: 3 },
    { label: '[a definir]', indent: true, color: '#78716c', start: 1, span: 2 },
    { label: '[a definir]', indent: true, color: '#78716c', start: 2, span: 2 },
  ];
  var summaries = [
    { period: '[A DEFINIR]', title: '[a definir]', desc: '[a definir]' },
    { period: '[A DEFINIR]', title: '[a definir]', desc: '[a definir]' },
    { period: '[A DEFINIR]', title: '[a definir]', desc: '[a definir]' },
  ];
  return (
    <div className="flex-1 flex flex-col bg-bg">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
        <div className="max-w-[1100px] w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Cronograma de implanta&ccedil;&atilde;o</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Em 30 dias, sua opera&ccedil;&atilde;o rodando com a Rabbot.
            </h2>
            <p className="text-xs text-muted mb-5">Disponibilidade no m&ecirc;s 1. Manuten&ccedil;&atilde;o e integra&ccedil;&atilde;o ERP em paralelo.</p>
          </SlideReveal>

          {/* Gantt table */}
          <SlideReveal active={active} delay={250}>
            <div className="bg-white border border-stone-200/70 rounded-xl overflow-hidden mb-4">
              {/* Header */}
              <div className="grid grid-cols-[240px_1fr] border-b border-stone-200/70 bg-stone-50">
                <div className="px-4 py-2 text-[9px] font-semibold uppercase tracking-wider text-muted">Projeto / Atividade</div>
                <div className="grid grid-cols-4">
                  {cols.map(function(c, i) { return (
                    <div key={i} className="px-2 py-2 text-[9px] font-semibold uppercase tracking-wider text-muted text-center border-l border-stone-200/70">{c}</div>
                  ); })}
                </div>
              </div>
              {/* Rows */}
              {rows.map(function(r, i) { return (
                <div key={i} className={'grid grid-cols-[240px_1fr] border-b last:border-b-0 border-stone-100 ' + (r.isGroup ? 'bg-stone-50/50' : '')}>
                  <div className={'px-4 py-2 flex flex-col justify-center ' + (r.indent ? 'pl-8' : '')}>
                    <div className={'leading-tight ' + (r.isGroup ? 'text-xs font-bold text-ink' : 'text-[11px] text-stone-600')}>
                      {r.indent && <span className="text-stone-300 mr-1">&bull;</span>}
                      {r.label}
                    </div>
                    {r.sub && <div className="text-[9px] text-brand-600 font-medium">{r.sub}</div>}
                  </div>
                  <div className="relative" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {[0,1,2,3].map(function(ci) { return (
                      <div key={ci} className="border-l border-stone-100" style={{ height: '100%' }} />
                    ); })}
                    <div className="absolute inset-0 flex items-center px-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                      <div style={{ gridColumn: (r.start + 1) + ' / ' + (r.start + r.span + 1), padding: '0 4px' }}>
                        <div className="h-2.5 rounded-full" style={{ background: r.color }} />
                      </div>
                    </div>
                  </div>
                </div>
              ); })}
            </div>
          </SlideReveal>

          {/* Legend */}
          <SlideReveal active={active} delay={400}>
            <div className="flex items-center gap-4 mb-4 text-[10px] text-muted">
              {[
                { color: '#479C4A', label: 'Disponibilidade' },
                { color: '#d97706', label: 'Manuten\u00e7\u00e3o' },
                { color: '#78716c', label: 'Integra\u00e7\u00e3o ERP' },
              ].map(function(l, i) { return (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-3 h-2 rounded-full" style={{ background: l.color }} />
                  {l.label}
                </div>
              ); })}
            </div>
          </SlideReveal>

          {/* Summary cards */}
          <SlideReveal active={active} delay={500}>
            <div className="grid grid-cols-3 gap-3">
              {summaries.map(function(s, i) { return (
                <div key={i} className="bg-white border border-stone-200/70 rounded-xl p-4">
                  <div className={'text-[9px] font-bold uppercase tracking-wider mb-1 ' + ['text-brand-700', 'text-amber-600', 'text-stone-500'][i]}>{s.period}</div>
                  <div className="text-sm font-semibold text-ink mb-1">{s.title}</div>
                  <div className="text-[11px] text-muted leading-snug">{s.desc}</div>
                </div>
              ); })}
            </div>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
}

// ── Export ──
var DECK_SLIDES = [
  { key: 'deck-capa',     title: 'Capa',        render: function(active) { return <DeckCapa active={active} />; } },
  { key: 'deck-problema', title: 'Problema',     render: function(active) { return <DeckProblema active={active} />; } },
  { key: 'deck-jornada',  title: 'Jornada',      render: function(active) { return <DeckJornada active={active} />; } },
  { key: 'deck-solucao',  title: 'Solu\u00e7\u00e3o',      render: function(active) { return <DeckSolucao active={active} />; } },
  { key: 'deck-agentes',  title: 'Time IA',      render: function(active) { return <DeckAgentesVision active={active} />; } },
  { key: 'deck-piloto',   title: 'Piloto',       render: function(active) { return <DeckPiloto active={active} />; } },
  { key: 'deck-roi',      title: 'ROI',          render: function(active) { return <DeckROI active={active} />; } },
  { key: 'deck-crono',    title: 'Cronograma',   render: function(active) { return <DeckCrono active={active} />; } },
];

Object.assign(window, {
  DECK_SLIDES, DeckCapa, DeckProblema, DeckJornada, DeckSolucao,
  DeckAgentesVision, DeckPiloto, DeckROI, DeckCrono,
});
