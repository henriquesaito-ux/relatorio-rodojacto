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
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-5">
        <div className="w-full mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="flex items-stretch">

            {/* ── COLUNA ESQUERDA (~38%) — Manchete ── */}
            <div className="flex flex-col justify-center pr-8" style={{ flex: '0 0 38%' }}>
              <SlideEyebrow active={active} delay={0}>Diagn&oacute;stico</SlideEyebrow>
              <SlideReveal active={active} delay={80}>
                <h2 className="font-semibold tracking-tight text-ink leading-[1.08] mb-3" style={{ fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.02em' }}>
                  Cada carreta parada &eacute; frete perdido.
                </h2>
                <p className="text-lg md:text-xl font-semibold text-red-600 leading-snug mb-6">
                  Voc&ecirc; tem 250 ativos sem visibilidade agora.
                </p>
              </SlideReveal>

              <SlideReveal active={active} delay={250}>
                <div className="space-y-3.5">
                  {[
                    { text: 'SLA descumprido sem que ningu\u00e9m saiba em tempo real' },
                    { text: 'Decis\u00f5es tomadas com dado que n\u00e3o reflete a opera\u00e7\u00e3o real' },
                    { text: 'Carretas saem da oficina e somem do radar \u2014 frota fantasma' },
                  ].map(function(b, i) { return (
                    <div key={i} className="flex items-start gap-2.5">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#fef2f2"/><path d="M8 4.5v4M8 10.5v.5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      <span className="text-[13px] text-muted leading-snug">{b.text}</span>
                    </div>
                  ); })}
                </div>
              </SlideReveal>
            </div>

            {/* ── Divider vertical ── */}
            <div className="w-px bg-stone-200/70 flex-shrink-0" />

            {/* ── COLUNA DIREITA (~60%) — Dados de diagnóstico ── */}
            <div className="flex-1 flex flex-col justify-between min-w-0 pl-10 py-2">
              <SlideReveal active={active} delay={120}>
                <p className="text-xs font-medium text-muted uppercase tracking-wider mb-4">O que a opera&ccedil;&atilde;o revela hoje</p>
              </SlideReveal>

              {/* 3 cards de métricas */}
              <SlideReveal active={active} delay={180}>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { tag: 'DISPONIBILIDADE', value: '250', unit: 'ativos', sub: 'sem visibilidade em tempo real' },
                    { tag: 'SISTEMAS', value: '3', unit: 'desconectados', sub: 'BTime + MO + SAP' },
                    { tag: 'AUTOMA\u00c7\u00c3O', value: '0', unit: '', sub: 'visibilidade em tempo real' },
                  ].map(function(k, i) { return (
                    <div key={i} className="rounded-lg border border-red-200 bg-red-50/50 px-3 py-4 text-center">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-red-500 mb-1">{k.tag}</div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-bold text-ink tabular-nums tracking-tight">{k.value}</span>
                        {k.unit && <span className="text-[11px] text-muted">{k.unit}</span>}
                      </div>
                      <div className="text-[10px] text-muted mt-1">{k.sub}</div>
                    </div>
                  ); })}
                </div>
              </SlideReveal>

              {/* 2 cards de alertas */}
              <SlideReveal active={active} delay={300}>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { tag: 'CUSTO OCULTO', title: 'Carretas paradas sem alerta', desc: 'Carretas no bols\u00e3o Jato ou no p\u00e1tio do cliente \u2014 sem notifica\u00e7\u00e3o, sem prazo, sem cobran\u00e7a.' },
                    { tag: 'DADO N\u00c3O CONFI\u00c1VEL', title: 'Rastreador n\u00e3o \u00e9 fonte de verdade', desc: '\u201cO rastreador diz que t\u00e1 dispon\u00edvel, mas a carreta n\u00e3o roda.\u201d \u2014 Alessandro' },
                  ].map(function(d, i) { return (
                    <div key={i} className="border border-stone-200/70 rounded-lg px-4 py-3.5">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-red-500 mb-1">{d.tag}</div>
                      <div className="text-sm font-bold text-ink mb-1">{d.title}</div>
                      <p className="text-xs text-muted leading-snug">{d.desc}</p>
                    </div>
                  ); })}
                </div>
              </SlideReveal>

              {/* Barra de Maturidade */}
              <SlideReveal active={active} delay={450}>
                <div className="pt-2">
                  <div className="mb-2">
                    <h3 className="text-sm font-semibold text-ink">Maturidade de Gest&atilde;o Operacional</h3>
                    <p className="text-[10px] text-muted">Rumo a uma gest&atilde;o exponencial</p>
                  </div>

                  {/* Barra de progresso */}
                  <div className="relative mt-5 mb-7" style={{ paddingTop: '32px' }}>
                    <div className="h-2.5 rounded-full bg-stone-200 w-full" />
                    <div className="absolute left-0 h-2.5 rounded-full" style={{ width: '66%', top: '32px', background: 'linear-gradient(90deg, #dc2626, #ea580c, #d97706, #f59e0b)' }} />

                    {[
                      { pos: '0%', filled: true },
                      { pos: '33%', filled: true },
                      { pos: '66%', filled: true, active: true },
                      { pos: '100%', filled: false },
                    ].map(function(s, i) { return (
                      <div key={i} className="absolute" style={{ left: s.pos, top: '32px', transform: 'translate(-50%, -3px)' }}>
                        <div className={'w-4 h-4 rounded-full border-2 border-white ' + (s.active ? 'ring-4 ring-amber-100' : '') + ' ' + (s.filled ? 'bg-amber-500' : 'bg-stone-300')} />
                      </div>
                    ); })}

                    {/* Marcador Rodojacto */}
                    <div className="absolute flex flex-col items-center" style={{ left: '66%', transform: 'translateX(-50%)', top: '-4px' }}>
                      <img src="assets/rodojacto-logo.png" alt="Rodojacto" style={{ height: '18px' }} />
                    </div>

                    {/* Marcador Clientes Rabbot */}
                    <div className="absolute flex flex-col items-center" style={{ left: '100%', transform: 'translateX(-50%)', top: '-1px' }}>
                      <span className="text-[9px] font-semibold text-green-700 border border-dashed border-green-500 bg-green-50 px-2.5 py-0.5 rounded-full whitespace-nowrap">Clientes Rabbot</span>
                    </div>
                  </div>

                  {/* Cards descritivos dos 4 modelos */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { title: 'Modelo Reativo', desc: 'Processos 100% anal\u00f3gicos, checklists de papel, telefone e e-mails, sem controle de processos nem visibilidade da opera\u00e7\u00e3o.' },
                      { title: 'Modelo Adaptativo', desc: 'Controles de processos feitos por checklists de papel e planilhas de Excel alimentadas de forma manual.' },
                      { title: 'Modelo Proativo', desc: 'Controles de processos feitos em ERPs e/ou outros sistemas, com dados coletados manual/digitalmente e visibilidade em tempo real, com baixo grau de automa\u00e7\u00e3o.', active: true },
                      { title: 'Modelo Preditivo', desc: 'Integra\u00e7\u00e3o das informa\u00e7\u00f5es de checklists digitais e sistemas, garantindo vis\u00e3o 360\u00b0 da opera\u00e7\u00e3o e atualiza\u00e7\u00f5es em tempo real, com alto grau de automa\u00e7\u00e3o, incluindo decis\u00f5es automatizadas.' },
                    ].map(function(m, i) { return (
                      <div key={i} className={'border rounded-lg p-3 ' + (m.active ? 'border-green-400 bg-green-50/30' : 'border-stone-200/70 bg-white')}>
                        <div className={'text-[11px] font-semibold mb-1 ' + (m.active ? 'text-green-700' : 'text-ink')}>{m.title}</div>
                        <div className="text-[9px] text-muted leading-relaxed">{m.desc}</div>
                      </div>
                    ); })}
                  </div>

                  {/* Meta */}
                  <div className="text-center mt-3">
                    <p className="text-[11px] text-muted">
                      <span className="font-semibold text-ink">Meta:</span> Avan&ccedil;ar da gest&atilde;o <span className="font-semibold text-ink">Proativa</span> para uma opera&ccedil;&atilde;o <span className="font-semibold text-green-600">Preditiva</span>, automatizada e integrada.
                    </p>
                  </div>
                </div>
              </SlideReveal>
            </div>

          </div>
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
    { step: 'Classifica\u00e7\u00e3o com apontamento manual', time: '~2h', tag: 'MANUAL', tone: 'darkred' },
    { step: 'Classifica\u00e7\u00e3o Dispon\u00edvel', time: '~1h', tag: 'SEM CONTROLE', tone: 'red' },
    { step: 'Classifica\u00e7\u00e3o Indispon\u00edvel (Manuten\u00e7\u00e3o)', time: '~vari\u00e1vel', tag: 'MANUAL', tone: 'darkred' },
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
        <div className="max-w-[1400px] w-full mx-auto">
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
              <div className="grid grid-cols-9 gap-1.5">
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
                <span className="text-[10px] text-muted">visibilidade total &middot; status autom&aacute;tico</span>
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
            <h2 className="font-bold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)', letterSpacing: '-0.03em' }}>
              <span style={{ color: '#9ca3af' }}>Menos tempo na oficina,</span><br />
              <span className="text-brand-600">mais tempo na estrada.</span>
            </h2>
          </SlideReveal>
          <SlideReveal active={active} delay={150}>
            <p className="text-lg font-medium text-brand-600 mt-5 mb-3">
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

          {/* D — Evolução da Disponibilidade (line) + Disponibilidade por Unidade (scatter) */}
          <SlideReveal active={active} delay={200} className="min-h-0 flex-1">
            <div className="grid grid-cols-2 gap-3 h-full min-h-0">

              {/* ── GRÁFICO 1: Line chart multi-série ── */}
              {(function() {
                var fixedIdx = 4; // 23/03/26 — tooltip sempre visível
                var dates = ['01/03/26','02/03/26','09/03/26','16/03/26','23/03/26','30/03/26','06/04/26','13/04/26','20/04/26','27/04/26','04/05/26','11/05/26'];
                var series = [
                  { key: 'disp', label: 'Disponibilidade', color: '#22c55e', data: [58,60,65.5,63,67.6,66,68,70,69,68,71,72] },
                  { key: 'util', label: 'Utiliza\u00e7\u00e3o', color: '#3b82f6', data: [21,18,17.2,15,15.3,16,17,30,32,31,28,30] },
                  { key: 'ocioso', label: 'Ocioso', color: '#f59e0b', data: [39,41,48.2,47,52.4,50,46,38,37,33,35,37] },
                  { key: 'espera', label: 'Espera Operacional', color: '#a855f7', data: [7,8,7.2,6,6.1,6.5,6,6,7,7,6,7] },
                  { key: 'manut', label: 'Manuten\u00e7\u00e3o', color: '#ef4444', data: [42,40,34.5,37,32.4,34,32,30,31,32,29,28] },
                ];
                var meta = 90;
                var W = 480, H = 240, left = 34, right = 8, top = 8, bottom = 28;
                var cW = W - left - right, cH = H - top - bottom;
                function xPos(i) { return left + (i / (dates.length - 1)) * cW; }
                function yPos(v) { return top + cH - (v / 100) * cH; }
                var ticks = [0,25,50,75,100];

                return (
                  <div className="bg-white border border-stone-200/70 rounded-xl shadow-sm flex flex-col p-3 h-full min-h-0">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1.5 shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#479C4A' }}>D</span>
                        <span className="text-[11px] font-bold text-ink uppercase tracking-wide">Evolu&ccedil;&atilde;o da Disponibilidade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex rounded-md overflow-hidden border border-stone-200">
                          <span className="text-[9px] font-semibold text-white px-2.5 py-1 flex items-center gap-1" style={{ background: '#22c55e' }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            Semana
                          </span>
                          <span className="text-[9px] font-medium text-muted px-2.5 py-1 bg-white flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            M&ecirc;s
                          </span>
                        </div>
                        <span className="text-[9px] font-semibold text-white px-2.5 py-1 rounded-md flex items-center gap-1" style={{ background: '#22c55e' }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          Detalhes
                        </span>
                      </div>
                    </div>
                    {/* SVG chart */}
                    <div className="flex-1 min-h-0 relative">
                      <svg viewBox={'0 0 ' + W + ' ' + H} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                        {/* Grid lines */}
                        {ticks.map(function(t) {
                          var yy = yPos(t);
                          return React.createElement('g', { key: 'g-' + t },
                            React.createElement('line', { x1: left, x2: left + cW, y1: yy, y2: yy, stroke: '#e7e5e4', strokeWidth: 0.5 }),
                            React.createElement('text', { x: left - 5, y: yy + 3, fontSize: '7', fill: '#78716c', textAnchor: 'end' }, t + '%')
                          );
                        })}
                        {/* Meta dashed line */}
                        <line x1={left} x2={left + cW} y1={yPos(meta)} y2={yPos(meta)} stroke="#57534e" strokeWidth="1" strokeDasharray="5 3" />
                        <circle cx={left + cW + 1} cy={yPos(meta)} r="3" fill="#57534e" />
                        {/* Series lines */}
                        {series.map(function(s) {
                          var pts = s.data.map(function(v, i) { return xPos(i) + ',' + yPos(v); }).join(' ');
                          return React.createElement('g', { key: s.key },
                            React.createElement('polyline', { points: pts, fill: 'none', stroke: s.color, strokeWidth: 1.8, strokeLinejoin: 'round', strokeLinecap: 'round' }),
                            s.data.map(function(v, i) {
                              return React.createElement('circle', { key: i, cx: xPos(i), cy: yPos(v), r: (fixedIdx === i) ? 4 : 2.5, fill: s.color, stroke: 'white', strokeWidth: 1 });
                            })
                          );
                        })}
                        {/* X labels */}
                        {dates.map(function(d, i) {
                          return React.createElement('text', { key: 'xl-' + i, x: xPos(i), y: H - 4, fontSize: '6.5', fill: '#78716c', textAnchor: 'middle', transform: 'rotate(-25,' + xPos(i) + ',' + (H - 4) + ')' }, d);
                        })}
                        {/* Fixed vertical line at selected date */}
                        <line x1={xPos(fixedIdx)} x2={xPos(fixedIdx)} y1={top} y2={top + cH} stroke="#a8a29e" strokeWidth="0.8" strokeDasharray="3 2" />
                      </svg>
                      {/* Fixed tooltip */}
                      <div className="absolute bg-white border border-stone-200 rounded-lg shadow-lg px-3 py-2 pointer-events-none z-10" style={{ left: (xPos(fixedIdx) / W * 100) + '%', top: '8px' }}>
                        <div className="text-xs font-bold text-ink mb-1">{dates[fixedIdx]}</div>
                        {series.map(function(s) { return (
                          <div key={s.key} className="flex items-center gap-1.5 text-[10px] leading-relaxed">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                            <span className="text-muted">{s.label}:</span>
                            <span className="font-semibold" style={{ color: s.color }}>{s.data[fixedIdx].toFixed(1)}%</span>
                          </div>
                        ); })}
                      </div>
                    </div>
                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-1.5 shrink-0">
                      <span className="flex items-center gap-1 text-[8px] text-muted"><span className="w-2 h-2 rounded-full" style={{ background: '#57534e' }}/>Meta</span>
                      {series.map(function(s) { return (
                        <span key={s.key} className="flex items-center gap-1 text-[8px] text-muted"><span className="w-2 h-2 rounded-full" style={{ background: s.color }}/>{s.label}</span>
                      ); })}
                    </div>
                  </div>
                );
              })()}

              {/* ── GRÁFICO 2: Scatter plot — Disponibilidade por Unidade ── */}
              {(function() {
                var fixedPt = 4; // CTG — tooltip sempre visível
                var units = [
                  {n:'Matriz',v:5,d:100},{n:'Filial SP',v:8,d:98},{n:'Filial PR',v:12,d:93},{n:'Filial MG',v:15,d:91},
                  {n:'CTG',v:23,d:65.4},{n:'Filial GO',v:3,d:88},{n:'Filial BA',v:7,d:85},{n:'Filial RS',v:10,d:78},
                  {n:'Filial SC',v:6,d:82},{n:'Filial MT',v:18,d:75},{n:'Filial MS',v:4,d:60},{n:'Filial RJ',v:9,d:72},
                  {n:'Filial PE',v:2,d:87},{n:'Filial CE',v:3,d:80},{n:'Filial PA',v:5,d:59},{n:'Filial AM',v:2,d:47},
                  {n:'Filial TO',v:4,d:62},{n:'Filial MA',v:3,d:58},{n:'Filial PI',v:1,d:30},{n:'Filial RN',v:2,d:0},
                  {n:'Filial AL',v:6,d:76},{n:'Filial SE',v:3,d:68},{n:'Filial ES',v:7,d:84},{n:'Filial DF',v:4,d:79},
                  {n:'Filial AP',v:1,d:45},{n:'Filial RO',v:2,d:55},{n:'Filial AC',v:1,d:28},{n:'Regional N',v:14,d:77},
                  {n:'Regional NE',v:11,d:64},{n:'Regional CO',v:20,d:70},{n:'Hub Log\u00edstico 1',v:30,d:80},
                  {n:'Hub Log\u00edstico 2',v:25,d:66},{n:'Hub Log\u00edstico 3',v:28,d:63},{n:'Base Operacional',v:35,d:78},
                  {n:'CD Sul',v:40,d:85},{n:'CD Sudeste',v:80,d:56},{n:'CD Norte',v:110,d:57},
                  {n:'Unidade Teste',v:8,d:89},{n:'Filial Nova',v:5,d:86},{n:'Transp. Ext.',v:10,d:67},
                  {n:'Sub Base A',v:3,d:61},{n:'Sub Base B',v:6,d:73},{n:'Sub Base C',v:4,d:46},
                  {n:'Oficina Central',v:12,d:83},{n:'P\u00e1tio Externo',v:7,d:60},{n:'Garagem 2',v:9,d:71},
                ];
                var meta = 90;
                var maxV = 123;
                var W = 480, H = 240, left = 42, right = 20, top = 8, bottom = 28;
                var cW = W - left - right, cH = H - top - bottom;
                function xP(v) { return left + (v / maxV) * cW; }
                function yP(d) { return top + cH - (d / 100) * cH; }
                var yTicks = [0,25,50,75,100];
                var xTicks = [0,35,70,123];
                var fu = units[fixedPt];
                var fuAbove = fu.d >= meta;

                return (
                  <div className="bg-white border border-stone-200/70 rounded-xl shadow-sm flex flex-col p-3 h-full min-h-0">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1.5 shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#479C4A' }}>D</span>
                        <span className="text-[11px] font-bold text-ink uppercase tracking-wide">Disponibilidade por Unidade</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-medium text-muted border border-stone-200 rounded-md px-2 py-1 flex items-center gap-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                          Ver Tabela
                        </span>
                      </div>
                    </div>
                    {/* Dropdown mock */}
                    <div className="flex justify-end mb-1 shrink-0">
                      <span className="text-[9px] text-muted border border-stone-200 rounded-md px-2.5 py-1 flex items-center gap-1">
                        % Disponibilidade
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                      </span>
                    </div>
                    {/* SVG chart */}
                    <div className="flex-1 min-h-0 relative">
                      <svg viewBox={'0 0 ' + W + ' ' + H} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                        {/* Y grid */}
                        {yTicks.map(function(t) {
                          var yy = yP(t);
                          return React.createElement('g', { key: 'yg-' + t },
                            React.createElement('line', { x1: left, x2: left + cW, y1: yy, y2: yy, stroke: '#e7e5e4', strokeWidth: 0.5 }),
                            React.createElement('text', { x: left - 5, y: yy + 3, fontSize: '7', fill: '#78716c', textAnchor: 'end' }, t + '%')
                          );
                        })}
                        {/* X grid */}
                        {xTicks.map(function(t) {
                          var xx = xP(t);
                          return React.createElement('g', { key: 'xg-' + t },
                            React.createElement('line', { x1: xx, x2: xx, y1: top, y2: top + cH, stroke: '#e7e5e4', strokeWidth: 0.5 }),
                            React.createElement('text', { x: xx, y: H - 8, fontSize: '7', fill: '#78716c', textAnchor: 'middle' }, String(t))
                          );
                        })}
                        {/* Meta dashed line */}
                        <line x1={left} x2={left + cW} y1={yP(meta)} y2={yP(meta)} stroke="#57534e" strokeWidth="1" strokeDasharray="5 3" />
                        <text x={left + cW + 5} y={yP(meta) + 3} fontSize="8" fill="#57534e" fontWeight="600">(M)</text>
                        {/* 65% horizontal reference */}
                        <line x1={left} x2={left + cW} y1={yP(65)} y2={yP(65)} stroke="#e7e5e4" strokeWidth="0.7" />
                        {/* Dots */}
                        {units.map(function(u, i) {
                          var above = u.d >= meta;
                          return React.createElement('circle', {
                            key: i, cx: xP(u.v), cy: yP(u.d),
                            r: (fixedPt === i) ? 5.5 : (3 + Math.min(u.v / 40, 2)),
                            fill: above ? '#22c55e' : '#ef4444',
                            fillOpacity: (fixedPt === i) ? 1 : 0.85,
                            stroke: 'white', strokeWidth: 1,
                          });
                        })}
                        {/* Axis labels */}
                        <text x={left + cW / 2} y={H - 0} fontSize="8" fill="#78716c" textAnchor="middle">Quantidade de Ativos</text>
                        <text x={8} y={top + cH / 2} fontSize="8" fill="#78716c" textAnchor="middle" transform={'rotate(-90,8,' + (top + cH / 2) + ')'}>% Disponibilidade</text>
                      </svg>
                      {/* Fixed tooltip on CTG */}
                      <div className="absolute bg-white border border-stone-200 rounded-lg shadow-lg px-3 py-2.5 pointer-events-none z-10" style={{ left: (xP(fu.v) / W * 100 + 2) + '%', top: (yP(fu.d) / H * 100 - 5) + '%' }}>
                        <div className="text-xs font-bold text-ink mb-1">{fu.n}</div>
                        <div className="text-[10px] text-muted">Ve&iacute;culos: <span className="font-semibold text-ink">{fu.v}</span></div>
                        <div className="text-[10px] text-muted">% Disponibilidade: <span className="font-semibold text-ink">{fu.d.toFixed(1)}%</span></div>
                        <div className="text-[10px]">Status: <span className="font-semibold" style={{ color: fuAbove ? '#22c55e' : '#ef4444' }}>{fuAbove ? 'Acima da meta' : 'Abaixo da meta'}</span></div>
                      </div>
                    </div>
                  </div>
                );
              })()}

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
                      <span className="text-[10px] font-bold text-ink ml-1">RODOPE&Ccedil;AS</span>
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
                  { name: 'RODOPE&Ccedil;AS', value: 1200, color: '#479C4A' },
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
      <div className="flex-1 flex justify-center items-stretch min-h-0">
        <div className="flex-1 grid grid-cols-[40%_1fr] min-h-0" style={{ maxWidth: '1200px' }}>

        {/* ── Coluna esquerda: narrativa ── */}
        <div className="flex flex-col justify-center pr-10 py-8">
          <SlideReveal active={active} delay={0}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-brand-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Time Rabbot</span>
            </div>
          </SlideReveal>

          <SlideReveal active={active} delay={100}>
            <h2 className="font-bold tracking-tight leading-[1.05] mb-6" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)', letterSpacing: '-0.03em' }}>
              <span style={{ color: '#d1d5db' }}>Sua opera&ccedil;&atilde;o inteira,</span><br />
              <span className="text-brand-500">rodando sozinha.</span>
            </h2>
          </SlideReveal>

          <SlideReveal active={active} delay={200}>
            <p className="text-sm text-stone-400 leading-relaxed mb-8" style={{ maxWidth: 380 }}>
              Um <strong className="text-white">time de agentes de IA</strong> cobrindo as <strong className="text-white">6 jornadas</strong> da sua frota, 24/7.
            </p>
          </SlideReveal>

          <SlideReveal active={active} delay={300}>
            <div className="flex items-start gap-3 mb-6 rounded-lg px-4 py-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse shrink-0 mt-1" />
              <span className="text-sm text-stone-300 leading-relaxed">
                J&aacute; rodamos o agente <strong className="text-white">Marco</strong> na sua opera&ccedil;&atilde;o.<br />
                <span className="text-brand-500 font-medium">Imagine o time completo.</span>
              </span>
            </div>
          </SlideReveal>

          <SlideReveal active={active} delay={400}>
            <a href="https://rodojacto-agent-report.lovable.app" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition shadow-lg shadow-brand-600/25">
              Ver relat&oacute;rio do Marco
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </SlideReveal>
        </div>

        {/* ── Coluna direita: grid de agentes ── */}
        <div className="flex items-center justify-center pl-6 py-8">
          <SlideReveal active={active} delay={200}>
            <AgentTeamOrganogram showcase />
          </SlideReveal>
        </div>

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
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-4" style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}>
        <div className="max-w-[1400px] w-full mx-auto">
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Fomos at&eacute; voc&ecirc;s e provamos em 1 dia.
            </h2>
            <p className="text-sm text-muted mb-4">Ao contr&aacute;rio de solu&ccedil;&otilde;es que prometem, a Rabbot implanta e prova resultado no mesmo dia.</p>
          </SlideReveal>

          {/* Main content: duas colunas — visuais à esquerda, texto à direita */}
          <SlideReveal active={active} delay={200}>
            <div className="flex gap-0">

              {/* ── COLUNA ESQUERDA: Hoje (imagem) + seta + Com a Rabbot (terminal) ── */}
              <div className="flex flex-col pr-8" style={{ flex: '0 0 42%' }}>
                {/* Hoje */}
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-500 mb-1.5 block">Hoje <span className="normal-case tracking-normal text-muted font-sans">(Planilha manual)</span></span>
                <div className="rounded-lg overflow-hidden border border-stone-200/70">
                  <img src="assets/planilha.jpeg" alt="Planilha manual" className="w-full object-contain" />
                </div>

                {/* Seta */}
                <div className="flex flex-col items-center my-2.5">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none"><path d="M10 2 L10 18 M4 14 L10 22 L16 14" stroke="#479C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>

                {/* Com a Rabbot — Terminal */}
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 mb-1.5 block">Com a Rabbot <span className="normal-case tracking-normal text-muted font-sans">(Processos automatizados)</span></span>
                {(function() {
                  var _tick = React.useState(0), tick = _tick[0], setTick = _tick[1];
                  var logLines = [
                    { time: '09:14', action: 'Detectou parada n\u00e3o programada', detail: 'Caminh\u00e3o #4521' },
                    { time: '09:14', action: '\u2192 acionou time de manuten\u00e7\u00e3o', detail: '' },
                    { time: '09:15', action: 'Checou preventivas vencidas', detail: 'revis\u00e3o 30k km vencida' },
                    { time: '09:15', action: 'Abriu O.S. interna', detail: 'prioridade alta' },
                    { time: '09:16', action: 'Checou estoque', detail: 'pastilhas em ruptura \u2192 acionou compras' },
                    { time: '09:18', action: 'Cotou 3 fornecedores', detail: 'melhor pre\u00e7o selecionado' },
                    { time: '09:18', action: 'Auto-aprovou or\u00e7amento', detail: 'entrega em 2h' },
                    { time: '11:30', action: 'Conciliou NF da entrega', detail: 'R$ 1.247 \u00b7 tudo conforme' },
                    { time: '13:42', action: 'Auditou execu\u00e7\u00e3o', detail: 'checklist de sa\u00edda OK' },
                    { time: '13:45', action: null, detail: null },
                  ];
                  var total = logLines.length;

                  React.useEffect(function() {
                    if (!active) { setTick(0); return; }
                    setTick(0);
                    var count = 0;
                    var delay = setTimeout(function() {
                      var iv = setInterval(function() {
                        count++;
                        setTick(count);
                        if (count >= total) clearInterval(iv);
                      }, 450);
                    }, 600);
                    return function() { clearTimeout(delay); };
                  }, [active]);

                  return (
                    <div className="rounded-lg overflow-hidden flex-1 flex flex-col" style={{ background: '#0f172a' }}>
                      <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: '#22c55e' }}>Automa&ccedil;&otilde;es em Execu&ccedil;&atilde;o</span>
                      </div>
                      <div className="px-3 py-2.5 flex-1 flex flex-col justify-start" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', minHeight: (total * 20) + 'px' }}>
                        {logLines.map(function(line, i) {
                          if (i >= tick) return null;
                          var isLast = (line.action === null);
                          var isNewest = (i === tick - 1);
                          var allDone = (tick >= total && isLast);
                          return (
                            <div key={i} className="flex items-baseline text-[10px] leading-[19px] px-1 py-0.5 rounded"
                              style={{
                                animation: isNewest ? 'termSlideIn 0.35s ease-out' : 'none',
                                background: allDone ? 'rgba(34,197,94,0.06)' : 'transparent',
                              }}>
                              <span style={{ color: '#64748b', minWidth: '28px', flexShrink: 0 }}>{line.time}</span>
                              <span style={{ color: '#334155', margin: '0 2px' }}>&middot;</span>
                              <span style={{ flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: '-2px' }}><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5" fill="#22c55e"/><circle cx="15" cy="10" r="1.5" fill="#22c55e"/><path d="M9 15c0 0 1.5 2 3 2s3-2 3-2"/></svg></span>
                              <span style={{ color: '#334155', margin: '0 2px' }}>&middot;</span>
                              {isLast ? (
                                <span style={{ color: '#22c55e', fontWeight: 700 }}>&check; Ve&iacute;culo liberado &middot; dispon&iacute;vel para rota</span>
                              ) : (
                                <span>
                                  <span style={{ color: '#e2e8f0' }}>{line.action}</span>
                                  {line.detail && (
                                    <span>
                                      <span style={{ color: '#334155', margin: '0 2px' }}>&middot;</span>
                                      <span style={{ color: '#f8fafc', fontWeight: 600 }}>{line.detail}</span>
                                    </span>
                                  )}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <style>{'\
                        @keyframes termSlideIn {\
                          from { opacity: 0; transform: translateY(5px); }\
                          to { opacity: 1; transform: translateY(0); }\
                        }\
                      '}</style>
                    </div>
                  );
                })()}
              </div>

              {/* ── Divider vertical ── */}
              <div className="w-px bg-stone-200/70 flex-shrink-0" />

              {/* ── COLUNA DIREITA: Antes / Depois (texto) ── */}
              <div className="flex flex-col justify-center pl-8 flex-1 min-w-0">
                {/* Headers */}
                <div className="grid grid-cols-2 gap-x-6 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-500">Antes</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700">Depois</span>
                </div>

                {/* Pares */}
                <div className="space-y-0">
                  {pairs.map(function(p, i) { return (
                    <div key={i} className="grid grid-cols-2 gap-x-6 py-3.5 border-b border-stone-200/70 last:border-b-0">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-0.5">
                          <IconAlert size={10} strokeWidth={1.5} className="text-stone-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink leading-tight">{p.before.title}</div>
                          <div className="text-xs text-muted leading-snug mt-0.5">{p.before.desc}</div>
                          <div className="text-[11px] text-red-500 font-medium mt-1">{p.before.tag}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                          <IconCheck size={10} strokeWidth={1.5} className="text-brand-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink leading-tight">{p.after.title}</div>
                          <div className="text-xs text-muted leading-snug mt-0.5">{p.after.desc}</div>
                          <div className="text-[11px] text-brand-600 font-medium mt-1">{p.after.tag}</div>
                        </div>
                      </div>
                    </div>
                  ); })}
                </div>
              </div>

            </div>
          </SlideReveal>


        </div>
      </div>

    </div>
  );
}

// ── SLIDE 7: ROI ──
function DeckROI({ active }) {
  var levers = [
    { letter: 'D', label: 'Disponibilidade', color: '#479C4A', value: '74.000', sub: '/m\u00eas', premises: [
      'Carretas indispon\u00edveis/ociosas na opera\u00e7\u00e3o sem visibilidade',
      'Carretas carregadas usadas como armazenagem \u2014 8 carretas \u00d7 R$ 4.040 = R$ 32k/m\u00eas',
      '100 dias parados com movimenta\u00e7\u00e3o sem vis\u00e3o; sem controle de n\u00edvel de carregamento (total/parcial)',
    ] },
    { letter: 'M', label: 'Manuten\u00e7\u00e3o', color: '#d97706', value: 'a definir', sub: '/m\u00eas', premises: [
      'Mix atual: 60% corretiva / 40% preventiva',
      'Objetivo: inverter o ponteiro \u2014 reduzir corretiva, aumentar preventiva',
      'Menos paradas n\u00e3o programadas = mais disponibilidade',
    ] },
    { letter: 'A', label: 'Aquisi\u00e7\u00e3o', color: '#3b82f6', value: 'a definir', sub: '/m\u00eas', premises: [
      'Redu\u00e7\u00e3o de 6% a 10% em custo de pe\u00e7as',
      'Cota\u00e7\u00e3o automatizada com ranking por efici\u00eancia',
    ] },
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
            <div className="rounded-xl p-5" style={{ background: '#1c1917' }}>
              <div className="flex items-stretch gap-6">
                {/* Coluna esquerda — Total */}
                <div className="text-center flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">Oportunidade total identificada</div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-brand-500 tabular-nums">R$ 885k</span>
                    <span className="text-lg text-stone-500">/ano</span>
                  </div>
                  <div className="mt-1.5 text-sm text-stone-500">R$ 74k /m&ecirc;s</div>
                </div>
                {/* Divider */}
                <div className="w-px bg-white/10 flex-shrink-0" />
                {/* Coluna direita — Recuperação Rabbot */}
                <div className="text-center flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">Recupera&ccedil;&atilde;o com Rabbot (35% conservador)</div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-brand-500 tabular-nums">R$ 310k</span>
                    <span className="text-lg text-stone-500">/ano</span>
                  </div>
                  <div className="mt-1.5 text-sm text-stone-500">R$ 26k /m&ecirc;s &mdash; s&oacute; com visibilidade e alertas</div>
                </div>
              </div>
            </div>
          </SlideReveal>
        </div>
      </div>
    </div>
  );
}

// ── SLIDE 8: CRONOGRAMA ──
function DeckCrono({ active }) {
  var totalCols = 12; // 3 meses x 4 semanas
  // rows: { label, sub, isGroup, color, start (0-based col out of 12), span, indent }
  var rows = [
    // Fase 1 — Disponibilidade
    { label: 'Fase 1 \u2014 Disponibilidade', isGroup: true, color: '#479C4A' },
    { label: 'Kick-off + setup', indent: true, color: '#479C4A', start: 0, span: 1 },
    { label: 'Treinamento', indent: true, color: '#479C4A', start: 1, span: 1 },
    { label: 'Uso em opera\u00e7\u00e3o', indent: true, color: '#479C4A', start: 1, span: 4 },
    { label: 'Primeiros resultados (Dashboard)', indent: true, color: '#479C4A', start: 5, span: 1 },
    // Fase 2 — Manutenção
    { label: 'Fase 2 \u2014 Manuten\u00e7\u00e3o Interna (Corretiva + Preventiva)', isGroup: true, color: '#3b82f6' },
    { label: 'Setup e treinamento', indent: true, color: '#3b82f6', start: 0, span: 3 },
    { label: 'Uso em opera\u00e7\u00e3o', indent: true, color: '#3b82f6', start: 2, span: 3 },
    { label: 'Primeiros resultados (Dashboard)', indent: true, color: '#3b82f6', start: 5, span: 1 },
    // Fase 3 — Aquisição
    { label: 'Fase 3 \u2014 Aquisi\u00e7\u00e3o de Pe\u00e7as', isGroup: true, color: '#84cc16' },
    { label: 'Mapeamento', indent: true, color: '#84cc16', start: 3, span: 1 },
    { label: 'Kick-off + setup', indent: true, color: '#84cc16', start: 6, span: 1 },
    { label: 'Treinamento', indent: true, color: '#84cc16', start: 6, span: 2 },
    { label: 'Uso em opera\u00e7\u00e3o', indent: true, color: '#84cc16', start: 7, span: 4 },
    { label: 'Primeiros resultados (Dashboard)', indent: true, color: '#84cc16', start: 11, span: 1 },
  ];
  return (
    <div className="flex-1 flex flex-col bg-bg">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Cronograma de implanta&ccedil;&atilde;o</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Em 90 dias, sua opera&ccedil;&atilde;o inteira rodando com a Rabbot.
            </h2>
          </SlideReveal>

          {/* Gantt table */}
          <SlideReveal active={active} delay={250}>
            <div className="bg-white border border-stone-200/70 rounded-xl overflow-hidden mb-4">
              {/* Header — Meses */}
              <div className="grid grid-cols-[200px_1fr] border-b border-stone-200/70 bg-stone-50">
                <div />
                <div className="grid grid-cols-3">
                  {['M\u00caS 1', 'M\u00caS 2', 'M\u00caS 3'].map(function(m, i) { return (
                    <div key={i} className={'px-2 py-1.5 text-[9px] font-bold uppercase tracking-wider text-ink text-center' + (i > 0 ? ' border-l border-stone-200/70' : '')}>{m}</div>
                  ); })}
                </div>
              </div>
              {/* Header — Semanas */}
              <div className="grid grid-cols-[200px_1fr] border-b border-stone-200/70 bg-stone-50/50">
                <div className="px-4 py-1 text-[8px] font-semibold uppercase tracking-wider text-muted">Projeto / Atividade</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
                  {[1,2,3,4,1,2,3,4,1,2,3,4].map(function(s, i) { return (
                    <div key={i} className={'py-1 text-[8px] text-muted text-center' + (i % 4 === 0 ? ' border-l border-stone-200/70' : ' border-l border-stone-100/50')}>S{s}</div>
                  ); })}
                </div>
              </div>
              {/* Rows */}
              {rows.map(function(r, i) { return (
                <div key={i} className={'grid grid-cols-[200px_1fr] border-b last:border-b-0 border-stone-100 ' + (r.isGroup ? 'bg-stone-50/50' : '')}>
                  <div className={'px-4 py-1.5 flex flex-col justify-center ' + (r.indent ? 'pl-7' : '')}>
                    <div className={'leading-tight ' + (r.isGroup ? 'text-[11px] font-bold' : 'text-[10px] text-stone-600')} style={r.isGroup ? { color: r.color } : {}}>
                      {r.indent && <span className="text-stone-300 mr-1">&bull;</span>}
                      {r.label}
                    </div>
                    {r.sub && <div className="text-[8px] font-medium" style={{ color: r.color }}>{r.sub}</div>}
                  </div>
                  <div className="relative" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
                    {[0,1,2,3,4,5,6,7,8,9,10,11].map(function(ci) { return (
                      <div key={ci} style={{ height: '100%' }} className={ci % 4 === 0 ? 'border-l border-stone-200/70' : 'border-l border-stone-100/50'} />
                    ); })}
                    {r.start !== undefined && (
                      <div className="absolute inset-0 flex items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
                        <div style={{ gridColumn: (r.start + 1) + ' / ' + (r.start + r.span + 1), padding: '0 3px' }}>
                          <div className="h-2 rounded-full" style={{ background: r.color }} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ); })}
            </div>
          </SlideReveal>

          {/* Legend */}
          <SlideReveal active={active} delay={400}>
            <div className="flex items-center gap-5 mb-4 text-[10px] text-muted">
              {[
                { color: '#479C4A', label: 'D \u00b7 Disponibilidade' },
                { color: '#3b82f6', label: 'M \u00b7 Manuten\u00e7\u00e3o' },
                { color: '#84cc16', label: 'A \u00b7 Aquisi\u00e7\u00e3o' },
              ].map(function(l, i) { return (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-3 h-2 rounded-full" style={{ background: l.color }} />
                  {l.label}
                </div>
              ); })}
            </div>
          </SlideReveal>

        </div>
      </div>
    </div>
  );
}

// ── SLIDE 9: PROPOSTA COMERCIAL ──
function DeckProposta({ active }) {
  var mesesPiloto = ['JUN\u201926', 'JUL\u201926', 'AGO\u201926'];
  var mesesEfetivacao = ['SET\u201926', 'OUT\u201926', 'NOV\u201926', 'DEZ\u201926', 'JAN\u201927+'];

  return (
    <div className="flex-1 flex flex-col bg-bg">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Proposta comercial</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Piloto de 3 meses: <span className="bg-brand-500 text-white px-3 py-0.5 rounded-md">Rabbot absorve o risco de entrada</span>
            </h2>
          </SlideReveal>
          <SlideReveal active={active} delay={140}>
            <p className="text-sm text-muted mb-6 max-w-[700px]">
              Mensalidade reduzida durante o piloto. Efetiva&ccedil;&atilde;o mediante avalia&ccedil;&atilde;o conjunta ao final do per&iacute;odo.
            </p>
          </SlideReveal>

          {/* Tabela de valores */}
          <SlideReveal active={active} delay={250}>
            <div className="bg-white border border-stone-200/70 rounded-xl overflow-hidden mb-5">
              {/* Header meses */}
              <div className="grid" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div className="border-b border-stone-200/70" />
                {/* Piloto */}
                {mesesPiloto.map(function(m, i) { return (
                  <div key={'p'+i} className="px-2 py-2.5 text-[11px] font-bold uppercase tracking-wide text-brand-700 text-center border-b-2 border-brand-400 bg-brand-50">
                    {m}
                  </div>
                ); })}
                {/* Efetivacao */}
                {mesesEfetivacao.map(function(m, i) { return (
                  <div key={'e'+i} className="px-2 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-stone-400 text-center border-b border-stone-200/70 bg-stone-50/50">
                    {m}
                  </div>
                ); })}
              </div>

              {/* Fase labels */}
              <div className="grid" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div />
                <div className="col-span-3 text-center py-1">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-brand-600">&mdash; Piloto &mdash;</span>
                </div>
                <div className="col-span-5 text-center py-1">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-stone-400">&mdash; Efetiva&ccedil;&atilde;o &mdash;</span>
                </div>
              </div>

              {/* Plataforma mensal */}
              <div className="grid border-t border-stone-100" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div className="px-4 py-3 text-[12px] font-medium text-stone-600 flex items-center">Plataforma mensal</div>
                {mesesPiloto.map(function(m, i) { return (
                  <div key={'pv'+i} className="px-2 py-3 text-center text-[13px] font-bold text-brand-600">R$ 12k</div>
                ); })}
                {mesesEfetivacao.map(function(m, i) { return (
                  <div key={'ev'+i} className="px-2 py-3 text-center text-[13px] font-semibold text-stone-500">R$ 15k</div>
                ); })}
              </div>

              {/* Setup */}
              <div className="grid border-t border-stone-100" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div className="px-4 py-3 text-[12px] font-medium text-stone-600 flex items-center">Setup (implementa&ccedil;&atilde;o)</div>
                <div className="col-span-3 px-2 py-3 text-center text-[13px] font-bold text-brand-600">R$ 30k</div>
                <div className="col-span-5 px-2 py-3 text-center" />
              </div>
            </div>
          </SlideReveal>

          {/* Callout investimento */}
          <SlideReveal active={active} delay={400}>
            <div className="bg-brand-50 border border-brand-200 rounded-xl px-5 py-3 mb-5">
              <p className="text-[12px] text-brand-800 leading-relaxed">
                <span className="font-bold text-brand-700">Investimento Rabbot no piloto:</span> setup de R$ 30k + mensalidade reduzida de R$ 12k/m&ecirc;s durante os 3 meses. Efetiva&ccedil;&atilde;o a R$ 15k/m&ecirc;s a partir de setembro (entrada de manuten&ccedil;&atilde;o + projetos do Brasil).
              </p>
            </div>
          </SlideReveal>


        </div>
      </div>
    </div>
  );
}

// ── SLIDE 10: AGENTE MARCO ──
function DeckMarco({ active }) {
  return (
    <div className="flex-1 flex flex-col bg-bg">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-5">
        <div className="max-w-[1200px] w-full mx-auto">

          {/* HEADER */}
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-8">
              Conhe&ccedil;a o Marco &mdash; seu monitor de disponibilidade 24/7.
            </h2>
          </SlideReveal>

          {/* ── BLOCO 1 — IDENTIDADE + DESCRITIVO ── */}
          <SlideReveal active={active} delay={180}>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_auto_1fr] items-center gap-5 mb-9">
              {/* Avatar + nome */}
              <div className="flex items-center gap-4">
                <img src="assets/agentes/avatar-marco.png" alt="Marco" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                <div>
                  <div className="text-xl font-bold text-ink leading-tight">Marco</div>
                  <div className="text-[12px] text-muted mt-0.5">Monitor de Disponibilidade &middot; Agente de IA</div>
                </div>
              </div>
              {/* Divider vertical */}
              <div className="hidden lg:block w-px h-12 bg-stone-200" />
              {/* Descritivo */}
              <p className="text-[15px] md:text-[16px] text-stone-600 leading-relaxed">
                Marco monitora a disponibilidade da sua frota 24 horas por dia, 7 dias por semana. Registra cada evento de status, identifica indisponibilidades em tempo real e mant&eacute;m o hist&oacute;rico audit&aacute;vel &mdash; sem precisar de turnos, sem f&eacute;rias, sem turnover.
              </p>
            </div>
          </SlideReveal>

          {/* ── BLOCO 2 — O QUE ELE GERA DE VALOR ── */}
          <SlideReveal active={active} delay={300}>
            <div className="mb-9">
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted mb-4">O que o Marco entrega</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Cobertura 24/7', desc: 'Opera dia, noite, feriados e fim de semana. Sem gaps de turno, sem janela cega.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
                  { title: 'Trabalho de ~2 pessoas', desc: 'Substitui aproximadamente 2 CLTs <strong>dedicados</strong> ao monitoramento de disponibilidade.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
                  { title: 'Audit\u00e1vel por padr\u00e3o', desc: 'Cada evento de status \u00e9 registrado, rastre\u00e1vel e revis\u00e1vel. Decis\u00e3o baseada em dado, n\u00e3o em mem\u00f3ria.', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' },
                ].map(function(p, i) { return (
                  <div key={i} className="bg-white border border-stone-200/70 rounded-xl px-5 py-4 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0 text-brand-600" dangerouslySetInnerHTML={{ __html: p.svg }} />
                    <div>
                      <div className="text-[13px] font-bold text-ink mb-1">{p.title}</div>
                      <div className="text-[12px] text-muted leading-snug">{p.desc}</div>
                    </div>
                  </div>
                ); })}
              </div>
            </div>
          </SlideReveal>

          {/* ── BLOCO 3 — COMPARATIVO DE CUSTO ── */}
          <SlideReveal active={active} delay={450}>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted mb-4">Custo comparado</div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-0">

                {/* Card CLT */}
                <div className="bg-stone-50 border border-stone-200/70 rounded-xl px-5 py-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-stone-400 mb-2">Funcion&aacute;rio CLT</div>
                  <div className="mb-3">
                    <span className="text-[28px] md:text-[32px] font-extrabold text-stone-600 tracking-tight leading-none">R$ 10-12k</span>
                    <span className="text-sm font-semibold text-stone-400 ml-1.5">/ m&ecirc;s</span>
                  </div>
                  <ul className="flex flex-col gap-1.5 text-[13px] text-stone-500 list-none m-0 p-0">
                    <li className="flex items-start gap-2"><span className="text-stone-300 mt-0.5">&bull;</span>Por m&ecirc;s, all-in (sal&aacute;rio + encargos + benef&iacute;cios + estrutura)</li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B85042' }} className="mt-0.5">&bull;</span><span style={{ color: '#B85042' }} className="font-medium">8h/dia, 22 dias &uacute;teis</span></li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B85042' }} className="mt-0.5">&bull;</span><span style={{ color: '#B85042' }} className="font-medium">Cobre uma fra&ccedil;&atilde;o da opera&ccedil;&atilde;o</span></li>
                    <li className="flex items-start gap-2"><span style={{ color: '#B85042' }} className="mt-0.5">&bull;</span><span style={{ color: '#B85042' }} className="font-medium">Tira f&eacute;rias, d&aacute; faltas, tem turnover</span></li>
                  </ul>
                </div>

                {/* Seta central */}
                <div className="hidden lg:flex items-center justify-center px-4">
                  <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center text-xl font-bold">&rarr;</div>
                </div>

                {/* Card Marco — pricing visual */}
                <div className="border-2 border-brand-500 rounded-xl px-5 py-4 flex flex-col bg-brand-50">
                  {/* Tag */}
                  <div className="mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700">Agente de IA &mdash; Disponibilidade</span>
                  </div>
                  {/* Subtítulo */}
                  <div className="text-[13px] font-semibold text-ink mb-2">Paga s&oacute; se trabalhar muito &mdash; com teto</div>
                  {/* Preço */}
                  <div className="mb-3">
                    <span className="text-[28px] md:text-[32px] font-extrabold text-brand-700 tracking-tight leading-none">R$ 10.000</span>
                    <span className="text-sm font-semibold text-stone-400 ml-1">/ m&ecirc;s</span>
                  </div>
                  {/* Divider */}
                  <div className="h-px bg-brand-200 mb-3" />
                  {/* Detalhes */}
                  <div className="flex flex-col gap-1.5 mb-3">
                    {[
                      { label: 'Mensalidade fixa', value: 'R$ 10.000' },
                      { label: 'Cota inclusa', value: '1.000 / m\u00eas' },
                      { label: 'Excedente', value: 'R$ 2,00 / unidade' },
                    ].map(function(row, i) { return (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[12px] text-muted">{row.label}</span>
                        <span className="text-[12px] font-bold text-ink">{row.value}</span>
                      </div>
                    ); })}
                  </div>
                  {/* Pílula teto */}
                  <div className="mt-auto">
                    <div className="bg-brand-100 text-brand-700 text-[11px] font-semibold text-center px-4 py-2 rounded-lg">
                      Teto garantido: R$ 26.000 / m&ecirc;s
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </SlideReveal>

        </div>
      </div>
    </div>
  );
}

// ── SLIDE 11: PROPOSTA CONSOLIDADA (Plataforma + Marco) ──
function DeckPropostaFull({ active }) {
  var mesesPiloto = ['JUN\u201926', 'JUL\u201926', 'AGO\u201926'];
  var mesesEfetivacao = ['SET\u201926', 'OUT\u201926', 'NOV\u201926', 'DEZ\u201926', 'JAN\u201927+'];

  return (
    <div className="flex-1 flex flex-col bg-bg">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
        <div className="max-w-[1200px] w-full mx-auto">
          <SlideEyebrow active={active} delay={0}>Proposta comercial consolidada</SlideEyebrow>
          <SlideReveal active={active} delay={80}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.08] text-ink mb-1">
              Piloto de 3 meses: <span className="bg-brand-500 text-white px-3 py-0.5 rounded-md">Rabbot absorve o risco de entrada</span>
            </h2>
          </SlideReveal>
          <SlideReveal active={active} delay={140}>
            <p className="text-sm text-muted mb-6 max-w-[700px]">
              Mensalidade reduzida durante o piloto. Efetiva&ccedil;&atilde;o mediante avalia&ccedil;&atilde;o conjunta ao final do per&iacute;odo.
            </p>
          </SlideReveal>

          {/* Tabela de valores */}
          <SlideReveal active={active} delay={250}>
            <div className="bg-white border border-stone-200/70 rounded-xl overflow-hidden mb-5">
              {/* Header meses */}
              <div className="grid" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div className="border-b border-stone-200/70" />
                {mesesPiloto.map(function(m, i) { return (
                  <div key={'p'+i} className="px-2 py-2.5 text-[11px] font-bold uppercase tracking-wide text-brand-700 text-center border-b-2 border-brand-400 bg-brand-50">
                    {m}
                  </div>
                ); })}
                {mesesEfetivacao.map(function(m, i) { return (
                  <div key={'e'+i} className="px-2 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-stone-400 text-center border-b border-stone-200/70 bg-stone-50/50">
                    {m}
                  </div>
                ); })}
              </div>

              {/* Fase labels */}
              <div className="grid" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div />
                <div className="col-span-3 text-center py-1">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-brand-600">&mdash; Piloto &mdash;</span>
                </div>
                <div className="col-span-5 text-center py-1">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-stone-400">&mdash; Efetiva&ccedil;&atilde;o &mdash;</span>
                </div>
              </div>

              {/* Plataforma mensal */}
              <div className="grid border-t border-stone-100" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div className="px-4 py-3 text-[12px] font-medium text-stone-600 flex items-center">Plataforma mensal</div>
                {mesesPiloto.map(function(m, i) { return (
                  <div key={'pv'+i} className="px-2 py-3 text-center text-[13px] font-bold text-brand-600">R$ 12k</div>
                ); })}
                {mesesEfetivacao.map(function(m, i) { return (
                  <div key={'ev'+i} className="px-2 py-3 text-center text-[13px] font-semibold text-stone-500">R$ 15k</div>
                ); })}
              </div>

              {/* Agente IA Marco */}
              <div className="grid border-t border-stone-100" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div className="px-4 py-3 text-[12px] font-medium text-stone-600 flex items-center">
                  <div>Agente IA Marco<div className="text-[10px] text-muted font-normal">fixo + R$ 2,00/evento</div></div>
                </div>
                {mesesPiloto.map(function(m, i) { return (
                  <div key={'am'+i} className="px-2 py-3 text-center text-[13px] font-bold text-brand-600">R$ 10k</div>
                ); })}
                {mesesEfetivacao.map(function(m, i) { return (
                  <div key={'ae'+i} className="px-2 py-3 text-center text-[13px] font-semibold text-stone-500">R$ 10k</div>
                ); })}
              </div>

              {/* Setup */}
              <div className="grid border-t border-stone-100" style={{ gridTemplateColumns: '180px repeat(8, 1fr)' }}>
                <div className="px-4 py-3 text-[12px] font-medium text-stone-600 flex items-center">Setup (implementa&ccedil;&atilde;o)</div>
                <div className="col-span-3 px-2 py-3 text-center text-[13px] font-bold text-brand-600">R$ 30k</div>
                <div className="col-span-5 px-2 py-3 text-center" />
              </div>
            </div>
          </SlideReveal>

          {/* Callout investimento */}
          <SlideReveal active={active} delay={400}>
            <div className="bg-brand-50 border border-brand-200 rounded-xl px-5 py-3 mb-5">
              <p className="text-[12px] text-brand-800 leading-relaxed">
                <span className="font-bold text-brand-700">Investimento Rabbot no piloto:</span> setup de R$ 30k + plataforma R$ 12k/m&ecirc;s + Agente Marco R$ 10k/m&ecirc;s (fixo + R$ 2,00/evento) durante os 3 meses. Efetiva&ccedil;&atilde;o da plataforma a R$ 15k/m&ecirc;s a partir de setembro (entrada de manuten&ccedil;&atilde;o + projetos do Brasil).
              </p>
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
  { key: 'deck-proposta', title: 'Proposta',     render: function(active) { return <DeckProposta active={active} />; } },
  { key: 'deck-marco',    title: 'Marco',       render: function(active) { return <DeckMarco active={active} />; } },
  { key: 'deck-proposta-full', title: 'Proposta Consolidada', render: function(active) { return <DeckPropostaFull active={active} />; } },
];

Object.assign(window, {
  DECK_SLIDES, DeckCapa, DeckProblema, DeckJornada, DeckSolucao,
  DeckAgentesVision, DeckPiloto, DeckROI, DeckCrono, DeckProposta, DeckMarco, DeckPropostaFull,
});
