const CASES = [{"id": "047", "slug": "caso-047.html", "title": "O ARQUIVO DESAPARECIDO", "subtitle": "Uma pasta sumiu do Instituto Aurora. Quatro pessoas tinham acesso. Uma sequência de registros não combina com os depoimentos.", "date": "18 de novembro de 2026", "place": "Instituto Aurora – Arquivo Central", "discovery": "19h40", "object": "Arquivo 12, uma pasta com o planejamento do Projeto Aurora", "question": "Quem retirou a pasta e por que ela foi parar na sala técnica?", "suspects": [["Lara Mendes", "COORDENADORA DO PROJETO", "34 anos", "Acesso ao arquivo e à administração", "Conferiu a pasta às 18h30 e saiu às 18h50."], ["Bruno Martins", "TÉCNICO DE INFORMÁTICA", "29 anos", "Acesso às salas técnicas e sistemas", "Disse que ficou na sala técnica e negou ter entrado no arquivo."], ["Marina Costa", "RESPONSÁVEL PELA SEGURANÇA", "41 anos", "Acesso aos corredores e monitoramento", "Fez a ronda e relatou uma interrupção nas câmeras."], ["Caio Ferreira", "ESTAGIÁRIO ADMINISTRATIVO", "20 anos", "Acesso acompanhado à administração", "Afirmou que deixou o prédio às 19h12."]], "timeline": [["18h30", "Última conferência", "Lara confirma que o Arquivo 12 está no armário B."], ["18h50", "Saída de Lara", "A coordenadora deixa o prédio."], ["19h16", "Acesso registrado", "O cartão de Bruno é usado na sala de arquivos."], ["19h18", "Interrupção das câmeras", "O monitoramento fica indisponível por cinco minutos."], ["19h21", "Digitalização", "O scanner registra um arquivo usando a conta BM-03."], ["19h40", "Descoberta", "Marina informa que a pasta não está no armário."], ["20h05", "Caixa técnica", "A pasta é localizada dentro de uma caixa na sala técnica."]], "evidence": [["01 — Registro do armário", "A conferência das 18h30 confirma que a pasta ainda estava no local."], ["02 — Cartão de acesso", "O cartão cadastrado para Bruno foi utilizado na sala de arquivos às 19h16."], ["03 — Relatório das câmeras", "A interrupção foi associada a uma manutenção iniciada pela conta de Bruno."], ["04 — Scanner", "Às 19h21, a conta BM-03 digitalizou um arquivo chamado ARQUIVO_12_COPIA."], ["05 — Ordem de serviço", "Bruno havia programado uma manutenção para aquela noite."], ["06 — Caixa técnica", "A pasta original foi encontrada na caixa de equipamentos, junto à folha de digitalização."]], "quotes": [["Lara Mendes", "Conferi o arquivo às 18h30. Ele estava no lugar. Saí antes das 19h e não voltei."], ["Bruno Martins", "Fiquei na sala técnica resolvendo uma atualização. Não entrei na sala de arquivos naquela noite."], ["Marina Costa", "Fiz minha ronda. As câmeras ficaram fora do ar por alguns minutos."], ["Caio Ferreira", "Saí às 19h12. Antes disso, ajudei a organizar pastas na administração."]], "answer": 1, "solution": "Bruno Martins retirou a pasta sem autorização para digitalizá-la. Depois, colocou o original em uma caixa de equipamentos. Não pretendia destruir o documento, mas escondeu a retirada e mentiu sobre o acesso.", "clue": "Na última folha digitalizada havia uma anotação: “SALA 03 — consultar inventário antigo”. Essa anotação leva ao Caso 048.", "next": "048"}, {"id": "048", "slug": "caso-048.html", "title": "A SALA FORA DO MAPA", "subtitle": "Uma anotação encontrada no Arquivo 12 aponta para uma sala que não aparece na planta atual do Instituto Aurora.", "date": "19 de novembro de 2026", "place": "Instituto Aurora – Ala antiga", "discovery": "08h15", "object": "Um livro de inventário que deveria estar na Sala 03", "question": "Por que a Sala 03 desapareceu dos registros atuais?", "suspects": [["Helena Duarte", "ARQUIVISTA", "52 anos", "Conhece os registros antigos do prédio", "Disse que a sala foi fechada durante uma reforma."], ["Rafael Nunes", "ENCARREGADO DA MANUTENÇÃO", "38 anos", "Acesso às alas antigas", "Afirmou que nunca recebeu uma chave da Sala 03."], ["Bianca Lopes", "PESQUISADORA", "27 anos", "Consulta documentos históricos", "Disse que procurava plantas antigas para um estudo."], ["Davi Rocha", "AUXILIAR ADMINISTRATIVO", "23 anos", "Organização de caixas e inventários", "Afirmou que transferiu caixas para o depósito na semana anterior."]], "timeline": [["07h40", "Abertura do arquivo", "Helena inicia a conferência dos inventários."], ["08h15", "Anotação localizada", "A referência à Sala 03 é encontrada na cópia do Arquivo 12."], ["08h35", "Planta consultada", "A planta atual não apresenta a Sala 03."], ["09h10", "Livro de circulação", "Um registro antigo indica consulta ao inventário da ala norte."], ["10h20", "Caixas conferidas", "Uma etiqueta de transferência aponta para o depósito norte."], ["11h05", "Inventário localizado", "O livro é encontrado no depósito, dentro de uma caixa catalogada como “N-21”."]], "evidence": [["01 — Planta atual", "A planta mais recente não mostra a Sala 03, mas isso não prova que ela nunca existiu."], ["02 — Planta antiga", "Uma planta de oito anos antes mostra uma sala identificada como 03 na ala norte."], ["03 — Livro de circulação", "O livro registra que o inventário foi consultado e transferido durante a reforma."], ["04 — Etiqueta N-21", "A etiqueta indica que caixas da antiga Sala 03 foram encaminhadas ao depósito norte."], ["05 — Registro de transferência", "Davi assinou o transporte de caixas para o depósito, mas não há registro de retirada do livro."], ["06 — Capa do inventário", "Na capa do livro há a inscrição “Projeto Horizonte — etapa inicial”."]], "quotes": [["Helena Duarte", "A sala foi fechada na reforma. Parte do material antigo ficou guardada, mas não sei em qual caixa."], ["Rafael Nunes", "Eu cuidei da manutenção, mas não fazia o inventário dos documentos."], ["Bianca Lopes", "Estava pesquisando a história do prédio. Não retirei nenhum livro."], ["Davi Rocha", "Levei as caixas para o depósito norte e registrei a transferência. Não abri o conteúdo de cada uma."]], "answer": 3, "solution": "Davi não roubou o inventário: ele transferiu as caixas durante a organização do depósito. A pista N-21 permitiu localizar o livro. O verdadeiro mistério é a inscrição Projeto Horizonte, que aparece em documentos antigos e atuais.", "clue": "Dentro do inventário havia uma folha dobrada com quatro palavras: “NORTE — 21 — QUATRO NOMES — UMA CHAVE”. Isso conduz ao Caso 049.", "next": "049"}, {"id": "049", "slug": "caso-049.html", "title": "O BILHETE DOS QUATRO NOMES", "subtitle": "Um bilhete sem assinatura foi encontrado no inventário antigo. Quatro nomes aparecem em anotações diferentes, mas apenas um padrão conecta tudo.", "date": "20 de novembro de 2026", "place": "Instituto Aurora – Depósito Norte", "discovery": "14h30", "object": "Um bilhete codificado e uma chave numerada", "question": "Quem deixou o bilhete e o que a chave abre?", "suspects": [["Helena Duarte", "ARQUIVISTA", "52 anos", "Organizou o inventário antigo", "Disse que reconheceu a caligrafia, mas não quis confirmar de quem era."], ["Lara Mendes", "COORDENADORA", "34 anos", "Conhece os projetos institucionais", "Disse que nunca tinha visto o bilhete."], ["Bruno Martins", "TÉCNICO", "29 anos", "Digitalizou documentos antigos", "Disse que apenas copiou o Arquivo 12."], ["Davi Rocha", "AUXILIAR ADMINISTRATIVO", "23 anos", "Transferiu caixas ao depósito", "Disse que encontrou o envelope dentro do inventário."]], "timeline": [["09h00", "Depósito reaberto", "A equipe inicia a conferência das caixas N-21."], ["10h15", "Envelope encontrado", "Um envelope sem remetente aparece dentro do inventário."], ["11h00", "Bilhete analisado", "A equipe identifica quatro palavras sublinhadas."], ["12h40", "Padrão descoberto", "As iniciais das quatro linhas formam a palavra NORTE."], ["13h20", "Chave numerada", "A chave 21 é associada a um armário antigo."], ["14h30", "Compartimento aberto", "O armário contém um envelope lacrado com a marca Projeto Horizonte."]], "evidence": [["01 — Bilhete", "As quatro linhas começam com letras que formam uma palavra quando lidas de cima para baixo."], ["02 — Número 21", "O número aparece tanto na etiqueta do depósito quanto na chave encontrada."], ["03 — Registro de chaves", "A chave 21 pertence ao armário de correspondências antigas."], ["04 — Caligrafia", "Helena reconhece a escrita como semelhante à de antigos comunicados da direção."], ["05 — Envelope lacrado", "O envelope não contém nomes de suspeitos; traz a frase “abrir somente quando os três registros estiverem reunidos”."], ["06 — Lista de responsáveis", "Uma lista antiga mostra quatro pessoas que participaram da criação do Projeto Horizonte: Helena, Lara, Bruno e uma antiga diretora chamada Teresa."]], "quotes": [["Helena Duarte", "Aquela escrita me lembra os comunicados da antiga diretora Teresa."], ["Lara Mendes", "O nome Projeto Horizonte apareceu em um planejamento muito antigo, mas nunca foi apresentado à equipe atual."], ["Bruno Martins", "Quando digitalizei o Arquivo 12, vi a mesma marca no rodapé."], ["Davi Rocha", "O envelope já estava dentro do inventário quando encontrei a caixa."]], "answer": 0, "solution": "Helena identificou corretamente a origem do bilhete: ele foi deixado por Teresa, antiga diretora e idealizadora do Projeto Horizonte. A chave 21 abre o armário de correspondências, onde está guardado o último envelope. Helena não é a autora; ela apenas reconheceu a escrita.", "clue": "O envelope traz uma instrução: “Reúnam os três registros e procurem a antiga sala de leitura”. A instrução abre o Caso 050.", "next": "050"}, {"id": "050", "slug": "caso-050.html", "title": "O PROJETO HORIZONTE", "subtitle": "Os três casos anteriores apontam para a antiga sala de leitura. Chegou a hora de reunir os registros e descobrir o que o Instituto Aurora guardou por tantos anos.", "date": "21 de novembro de 2026", "place": "Instituto Aurora – Antiga sala de leitura", "discovery": "16h00", "object": "O dossiê original do Projeto Horizonte", "question": "Qual era o verdadeiro objetivo do Projeto Horizonte e por que seus registros foram separados?", "suspects": [["Teresa Almeida", "ANTIGA DIRETORA", "Aposentada", "Idealizadora do projeto", "Deixou instruções e documentos para que o projeto fosse redescoberto."], ["Helena Duarte", "ARQUIVISTA", "52 anos", "Guardou parte do inventário", "Conhecia a história, mas não sabia onde estava o dossiê completo."], ["Lara Mendes", "COORDENADORA", "34 anos", "Encontrou referências ao projeto", "Ajudou a reunir os registros atuais."], ["Bruno Martins", "TÉCNICO", "29 anos", "Digitalizou o Arquivo 12", "A cópia digital permitiu recuperar a primeira pista."]], "timeline": [["10h00", "Três registros reunidos", "A equipe organiza o Arquivo 12, o inventário e o envelope 21."], ["11h30", "Antiga sala localizada", "A planta antiga confirma a localização da sala de leitura."], ["13h00", "Dossiê encontrado", "Uma caixa catalogada como “Horizonte” é localizada no armário da sala."], ["14h15", "Documentos conferidos", "O dossiê apresenta o objetivo e as etapas do projeto."], ["16h00", "Relatório final", "A equipe registra a conclusão da sequência de casos."]], "evidence": [["01 — Arquivo 12", "O primeiro documento descreve a proposta inicial do Projeto Horizonte."], ["02 — Inventário antigo", "Confirma a existência da antiga Sala 03 e sua relação com o projeto."], ["03 — Envelope 21", "Apresenta a instrução para procurar a antiga sala de leitura."], ["04 — Planta histórica", "Mostra que a Sala 03 foi renomeada como sala de leitura após a reforma."], ["05 — Dossiê Horizonte", "Reúne o plano de transformação da sala em espaço de leitura, pesquisa e memória."], ["06 — Carta de Teresa", "Explica que os documentos foram separados durante a reforma para serem preservados e redescobertos quando a instituição retomasse o projeto."]], "quotes": [["Teresa Almeida — carta arquivada", "Não escondi estes documentos para apagar a história. Separei os registros para que nada fosse descartado durante a reforma. Deixei pistas para que a equipe pudesse reconstruir o projeto quando chegasse a hora."], ["Helena Duarte", "Eu sabia que existia um projeto antigo, mas não imaginava que os documentos formavam uma sequência."], ["Lara Mendes", "Agora sabemos que a sala não desapareceu: ela mudou de função e de nome."], ["Bruno Martins", "A digitalização do Arquivo 12 acabou permitindo que a primeira referência fosse recuperada."]], "answer": 0, "solution": "O Projeto Horizonte era uma proposta antiga para transformar a Sala 03 em um espaço de leitura, pesquisa e memória do Instituto Aurora. Durante a reforma, Teresa separou os documentos para evitar que fossem descartados e deixou instruções para que o projeto pudesse ser retomado. Os casos não eram crimes conectados, mas pistas de um arquivo histórico que precisava ser reconstruído.", "clue": "SEQUÊNCIA CONCLUÍDA. O dossiê foi recuperado e o Instituto Aurora pode retomar o Projeto Horizonte.", "next": null}];

const caseId = document.body.dataset.case || "home";
const completedKey = "di_investigacoes_concluidos";
function completed(){try{return JSON.parse(localStorage.getItem(completedKey)||"[]")}catch(e){return []}}
function markCompleted(id){const list=completed();if(!list.includes(id))list.push(id);localStorage.setItem(completedKey,JSON.stringify(list))}
function isUnlocked(id){const order=["047","048","049","050"];const idx=order.indexOf(id);return idx===0||completed().includes(order[idx-1])}
function nav(){
 const links=[["index.html","⌂ PAINEL","home"],["caso-047.html","▤ CASO 047","047"],["caso-048.html","▤ CASO 048","048"],["caso-049.html","▤ CASO 049","049"],["caso-050.html","▤ CASO 050","050"]];
 document.getElementById("sideNav").innerHTML=links.map(([href,label,id])=>{
  const locked=id!=="home"&&!isUnlocked(id);
  return `<a class="${id===caseId?"active":""} ${locked?"locked":""}" href="${locked?"#":href}" ${locked?'title="Resolva o caso anterior para liberar"':""}>${label}${locked?" · BLOQUEADO":""}</a>`;
 }).join("");
}
function shell(title, eyebrow, content){
 document.getElementById("main").innerHTML=`<div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${content}`;
}
function homePage(){
 nav();
 const done=completed();
 const cards=CASES.map((c,i)=>{
  const unlocked=i===0||done.includes(CASES[i-1].id);
  const solved=done.includes(c.id);
  return `<a class="case-link ${unlocked?"":"locked"}" href="${unlocked?c.slug:"#"}">
   <div><b>CASO ${c.id} — ${c.title}</b><small>${c.subtitle}</small></div>
   <span class="tag ${solved?"gold":""}">${solved?"SOLUCIONADO":unlocked?"DISPONÍVEL":"BLOQUEADO"}</span>
  </a>`;
 }).join("");
 shell("CENTRAL DE INVESTIGAÇÃO","D.I. / ARQUIVO GERAL",`
 <div class="hero" data-number="D.I.">
  <div class="eyebrow">SÉRIE ESPECIAL • 4 ARQUIVOS CONECTADOS</div>
  <h1>ARQUIVOS<br>DO HORIZONTE</h1>
  <p>Quatro casos, uma sequência de pistas e um projeto esquecido. Investigue cada arquivo, compare depoimentos e descubra o que conecta os acontecimentos no Instituto Aurora.</p>
  <a class="btn" href="caso-047.html">INICIAR SEQUÊNCIA →</a>
 </div>
 <div class="stats">
  <div class="stat"><strong>04</strong><small>CASOS NA SÉRIE</small></div>
  <div class="stat"><strong>${done.length}/4</strong><small>CASOS CONCLUÍDOS</small></div>
  <div class="stat"><strong>01</strong><small>MISTÉRIO CENTRAL</small></div>
  <div class="stat"><strong>2026</strong><small>ANO DOS REGISTROS</small></div>
 </div>
 <div class="section-heading"><h2>PAINEL DE ARQUIVOS</h2></div>
 ${cards}
 <div class="notice">Todos os personagens, instituições e acontecimentos são fictícios. O progresso fica salvo neste navegador.</div>
 <button class="btn secondary" onclick="resetProgress()">REINICIAR PROGRESSO</button>`);
}
function casePage(c){
 nav();
 const alreadyDone=completed().includes(c.id);
 const stats=`<div class="stats">
 <div class="stat"><strong>${c.id}</strong><small>NÚMERO DO CASO</small></div>
 <div class="stat"><strong>04</strong><small>ENVOLVIDOS</small></div>
 <div class="stat"><strong>06</strong><small>EVIDÊNCIAS</small></div>
 <div class="stat"><strong>${alreadyDone?"OK":"ABERTO"}</strong><small>STATUS</small></div></div>`;
 const suspectCards=c.suspects.map((s,i)=>`<div class="profile"><div class="avatar">${s[0].split(" ").map(x=>x[0]).join("")}</div><h3>${s[0]}</h3><div class="role">${s[1]}</div><p>${s[2]}</p><p><b>Acesso:</b> ${s[3]}</p><p><b>Declaração:</b> ${s[4]}</p><span class="tag">ENVOLVIDO ${String(i+1).padStart(2,"0")}</span></div>`).join("");
 const timeline=c.timeline.map(t=>`<div class="event"><time>${t[0]}</time><h3>${t[1]}</h3><p>${t[2]}</p></div>`).join("");
 const evidence=c.evidence.map((e,i)=>`<details class="evidence"><summary>${e[0]}</summary><p>${e[1]}</p></details>`).join("");
 const quotes=c.quotes.map(q=>`<div class="card"><h3>${q[0]}</h3><div class="quote">“${q[1]}”</div></div>`).join("");
 const options=c.suspects.map((s,i)=>`<button class="answer" onclick="accuse(${i})" ${alreadyDone?"disabled":""}>${s[0].toUpperCase()}</button>`).join("");
 shell(c.title,`ARQUIVO Nº ${c.id}/2026 • ACESSO RESTRITO`,`
 <div class="hero" data-number="${c.id}"><div class="eyebrow">INVESTIGAÇÃO EM ANDAMENTO</div><h1>${c.title}</h1><p>${c.subtitle}</p><span class="tag">CASO FICTÍCIO • ${c.date.toUpperCase()}</span></div>
 ${stats}
 <div class="section-heading"><h2>01 / RELATÓRIO INICIAL</h2></div>
 <div class="file"><h3>RELATÓRIO DE INVESTIGAÇÃO</h3><p><b>PROTOCOLO:</b> ${c.id}/2026</p><p><b>LOCAL:</b> ${c.place}</p><p><b>DATA:</b> ${c.date}</p><p><b>HORÁRIO DA DESCOBERTA:</b> ${c.discovery}</p><p><b>OBJETO OU REGISTRO:</b> ${c.object}</p><p>${c.question}</p><div class="stamp">CONFIDENCIAL</div></div>
 <div class="section-heading"><h2>02 / PESSOAS ENVOLVIDAS</h2></div><div class="grid">${suspectCards}</div>
 <div class="section-heading"><h2>03 / CRONOLOGIA</h2></div><div class="timeline">${timeline}</div>
 <div class="section-heading"><h2>04 / DEPOIMENTOS</h2></div><div class="grid">${quotes}</div>
 <div class="section-heading"><h2>05 / EVIDÊNCIAS</h2></div><p>Clique em cada registro para ler os detalhes.</p>${evidence}
 <div class="section-heading"><h2>06 / SUA INVESTIGAÇÃO</h2></div><p>${c.question}</p><p>Escolha quem, na sua análise, explica melhor as evidências. Se a hipótese estiver incorreta, você poderá tentar novamente.</p><div class="grid">${options}</div>
 <div id="caseResult" class="result" style="display:${alreadyDone?"block":"none"}">${alreadyDone?'<span style="color:var(--green)">✓ ESTE CASO JÁ FOI CONCLUÍDO.</span><br><br>O relatório oficial já foi liberado anteriormente.':""}</div>
 <div class="section-heading"><h2>07 / SOLUÇÃO OFICIAL</h2></div><p>O relatório final só será liberado depois que você escolher a hipótese correta.</p><button id="revealBtn" class="btn" onclick="reveal()" ${alreadyDone?"":"disabled"}>${alreadyDone?"RELATÓRIO FINAL JÁ LIBERADO":"REVELAR RELATÓRIO FINAL →"}</button>
 <div id="official" class="result" style="display:none"></div>
 <div id="nextArea"></div>
 <div class="notice">Dica: as pistas de cada caso são importantes para entender o próximo arquivo. Anote os códigos e nomes encontrados.</div>`);
 window.currentCase=c;
 window.currentCaseSolved=alreadyDone;
 if(alreadyDone){
   const official=document.getElementById("official");
   official.style.display="block";
   official.innerHTML=`<div class="eyebrow">RELATÓRIO FINAL • CASO ${c.id}</div><h2>CONCLUSÃO DA INVESTIGAÇÃO</h2><p>${c.solution}</p><br><h3>PISTA PARA O PRÓXIMO ARQUIVO</h3><p>${c.clue}</p><br><span class="tag gold">CASO ${c.id} CONCLUÍDO</span>`;
   showNext(c);
 }
}
function accuse(i){
 const c=window.currentCase, box=document.getElementById("caseResult");
 if(completed().includes(c.id)) return;
 box.style.display="block";
 if(i===c.answer){
  window.currentCaseSolved=true;
  box.innerHTML=`<span style="color:var(--green)">✓ RESPOSTA CORRETA!</span><br><br>Sua hipótese está de acordo com as evidências. O relatório final foi liberado. Clique no botão abaixo para concluir o caso.`;
  const revealBtn=document.getElementById("revealBtn");
  revealBtn.disabled=false;
  revealBtn.textContent="REVELAR RELATÓRIO FINAL →";
  document.querySelectorAll(".answer").forEach(btn=>btn.disabled=true);
 }else{
  box.innerHTML=`<span style="color:#df8585">✕ RESPOSTA INCORRETA</span><br><br>Essa hipótese não corresponde às evidências. A resposta correta não será revelada. Revise os documentos e depoimentos e tente novamente.`;
 }
}
function reveal(){
 const c=window.currentCase, box=document.getElementById("official");
 if(!window.currentCaseSolved && !completed().includes(c.id)){
  alert("Você precisa escolher a resposta correta antes de liberar o relatório final.");
  return;
 }
 if(completed().includes(c.id) && box.style.display==="block") return;

 box.style.display="block";
 box.innerHTML=`<div class="eyebrow">RELATÓRIO FINAL • CASO ${c.id}</div><h2>CONCLUSÃO DA INVESTIGAÇÃO</h2><p>${c.solution}</p><br><h3>PISTA PARA O PRÓXIMO ARQUIVO</h3><p>${c.clue}</p><br><span class="tag gold">CASO ${c.id} CONCLUÍDO</span>`;
 markCompleted(c.id);
 nav();
 showNext(c);
}
function showNext(c){
 const area=document.getElementById("nextArea");
 if(!area)return;
 if(c.next){
  const next=CASES.find(x=>x.id===c.next);
  area.innerHTML=`<div class="section-heading"><h2>PRÓXIMA ETAPA LIBERADA</h2></div><div class="notice">Caso concluído! O próximo arquivo será aberto automaticamente em <strong id="nextCountdown">5</strong> segundos.</div><a class="btn" href="${next.slug}">ABRIR CASO ${next.id} AGORA →</a>`;
  let seconds=5;
  const countdown=document.getElementById("nextCountdown");
  const timer=setInterval(()=>{
    seconds--;
    if(countdown)countdown.textContent=seconds;
    if(seconds<=0){
      clearInterval(timer);
      window.location.href=next.slug;
    }
  },1000);
 }else{
  area.innerHTML=`<div class="section-heading"><h2>SEQUÊNCIA CONCLUÍDA</h2></div><div class="notice">Parabéns! Você concluiu os quatro casos e recuperou o Projeto Horizonte. A sequência está encerrada.</div><button class="btn" onclick="restartSequence()">REINICIAR SEQUÊNCIA DESDE O CASO 047 ↻</button>`;
 }
}
function restartSequence(){
 if(confirm("A sequência será reiniciada. Seu progresso dos quatro casos será apagado. Deseja começar novamente?")){
  localStorage.removeItem(completedKey);
  window.location.href="caso-047.html";
 }
}
function resetProgress(){
 if(confirm("Deseja apagar o progresso e bloquear novamente os quatro casos?")){
  localStorage.removeItem(completedKey);location.href="index.html";
 }
}
if(caseId==="home"){homePage()}else{
 const c=CASES.find(x=>x.id===caseId);
 if(!c){homePage()}else if(!isUnlocked(caseId)){
  nav();shell("ARQUIVO BLOQUEADO","ACESSO RESTRITO",`<div class="notice">Este arquivo ainda não foi liberado. Resolva o caso anterior para continuar a sequência.</div><a class="btn" href="index.html">VOLTAR AO PAINEL</a>`);
 }else{casePage(c)}
}
