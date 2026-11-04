import {heroRedesign,troopRedesign} from './redesign-data-v013.js';
const heroRows=[
 ['munmu-a','법민','신라','창','관통 창','격려의 깃발','천마 · 맨머리 · 젊은 왕자'],
 ['munmu-b','문무왕','신라','창','관통 창','화공','천마 · 성숙한 왕'],
 ['yushin','김유신','신라','장검','선봉 돌격','격려의 깃발','천마 · 흰 수염 · 노장'],
 ['seoloyu','설오유','신라','도끼','전열 휩쓸기','화공','천마 · 흉터 · 낡은 갑옷'],
 ['simna','심나','신라','대도','전열 휩쓸기','지축 울림','천마 · 중년 · 천 허리띠'],
 ['sona','소나','신라','대도','선봉 돌격','전열 휩쓸기','천마 · 심나를 닮은 청년'],
 ['gwanchang','관창','신라','창','관통 창','선봉 돌격','천마 · 가벼운 기마 장비'],
 ['sangyeong','상영','백제','장창','관통 창','격려의 깃발','봉황 · 백제 갑옷'],
 ['chunchu','김춘추','신라','활','진흙의 계책','격려의 깃발','천마 · 관복 위 갑옷'],
 ['heumsun','김흠순','신라','창칼','선봉 돌격','지축 울림','천마 · 기마 중장'],
 ['inmun','김인문','신라 / 당군 착장','활','수공','격려의 깃발','주작 · 당군 갑옷'],
 ['goyeonmu','고연무','고구려','장창','관통 창','선봉 돌격','청룡 · 고구려 철갑기병'],
 ['sideuk','시득','신라','활','수공','화공','천마 · 맨발 수군']];
const heroGrades={'munmu-a':'SR','munmu-b':'SR',yushin:'SR',seoloyu:'S',simna:'C',sona:'A',gwanchang:'S',sangyeong:'A',chunchu:'S',heumsun:'A',inmun:'A',goyeonmu:'S',sideuk:'A'};
const $=s=>document.querySelector(s);
const escapeHtml=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
$('#heroes-grid').innerHTML=heroRows.map(([id,name,faction,weapon,s1,s2,note])=>{const img=heroRedesign[id];return `<article class="hero-card">${img?`<a href="assets/${img}" target="_blank"><img loading="lazy" src="assets/${img}" alt="${name} 단독 T포즈 디자인 시안"></a>`:''}<div class="body"><small>${faction} · ${heroGrades[id]} 제안 · 새 진영색 시안</small><h3>${name}</h3><p><b>무기:</b> ${weapon} · <b>기술:</b> ${s1} / ${s2}</p><p>${note}</p><p>동작: 공통 이동·기본공격·피격·전투불능 + 기술 2개. 실제 클립 미검증.</p></div></article>`}).join('');
const factions=[['silla','신라','청색·은백 · 천마'],['goguryeo','고구려','흑색 · 청룡'],['baekje','백제','어두운 갑옷·금빛 · 봉황'],['tang','당','적색 · 주작']];
$('#unit-overview').innerHTML=factions.map(([id,name,desc])=>`<article class="unit-card"><img loading="lazy" src="assets/${troopRedesign[id+'-spearman']}" alt="${name} 창병 단독 T포즈 시안"><h3>${name}</h3><p>${desc} · 새 기준</p><p>그림은 새 진영색 시안 · 개별 검수 필요</p><p>방패병 · 창병 · 검병 · 궁병 · 기병 · 공성병</p></article>`).join('');
const chapterNames=['풍전등화','반란의 밤','고립','백제 멸망','왕의 길','고구려 멸망','선제공격','석문의 비극','삼한일통'];
fetch('stages.json').then(r=>{if(!r.ok)throw Error('대본 목록을 불러오지 못했습니다');return r.json()}).then(stages=>{$('#chapters').innerHTML=chapterNames.map((name,i)=>{const list=stages.filter(s=>s.id.startsWith((i+1)+'-'));return `<details class="chap" ${i===0?'open':''}><summary>${i+1}장 · ${name} <small>${list.length}개 대본 전투</small></summary><div class="stage-grid">${list.map(s=>`<div class="stage"><strong>${escapeHtml(s.title)}</strong><span>${escapeHtml(s.meta)}</span><br><span>판별 웨이브·보상·실제 맵 검증 대기</span></div>`).join('')}</div></details>`}).join('')}).catch(e=>{$('#chapters').textContent=e.message});

const newFactions=[['silla','신라','청색·은백','천마','#325a9e'],['goguryeo','고구려','흑색','청룡','#303237'],['baekje','백제','흑갈색·금빛','봉황','#b98a37'],['tang','당나라','적색','주작','#b43535']];
const reps={silla:'yushin',goguryeo:'yeongaesomun',baekje:'gyebaek',tang:'inmun'};
$('#new-faction-art').innerHTML=newFactions.map(([id,name,color,animal,swatch])=>`<article class="faction-new-card"><div class="swatch" style="--fc:${swatch}"></div><div class="faction-art-slot" data-faction-art="${id}"><a href="assets/${heroRedesign[reps[id]]}" target="_blank"><img loading="lazy" src="assets/${heroRedesign[reps[id]]}" alt="${name} ${color} ${animal} 장수 단독 T포즈 시안"></a></div><div class="faction-new-copy"><h3>${name}</h3><b>${color} · ${animal}</b><p>확정 게임 식별 기준 · 장수 시안, 인물별 검수 전</p></div></article>`).join('');
