import {branchBattlePlans} from './branch-battle-plans.js';
import {battlePlans} from './battle-plans.js';
import {campaigns} from './three-campaigns-data.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const root=document.querySelector('#campaigns');
const existing={'백제:1-3':'B-01','백제:2-1':'B-02','백제:4-1':'B-03','백제:5-2':'B-04','백제:7-1':'B-05','백제:9-4':'B-06','고구려:1-4':'G-01','고구려:3-3':'G-02','고구려:5-2':'G-03','고구려:6-4':'G-04','고구려:7-1':'G-05','고구려:9-4':'G-06'};
const chapterNames=['풍전등화','반란의 밤','고립','백제 멸망','왕의 길','고구려 멸망','선제공격','석문의 비극','삼한일통'];
async function render(){
 const [response,mapResponse]=await Promise.all([fetch('stages.json'),fetch('maps/manifest.json').catch(()=>null)]);if(!response.ok)throw new Error('신라 대본을 읽지 못했습니다.');const stages=await response.json(),mapList=mapResponse?.ok?(await mapResponse.json()).maps:[],mapIds=new Set(mapList.map(m=>m.id));
 const silla={name:'신라',route:'silla',color:'#376aa4',symbol:'청색·은백 · 천마',premise:'제공된 대본을 기반으로 전개하는 9장 36전투. 대본의 결과와 게임 목표는 구분한다.',chapters:chapterNames.map((name,i)=>[name,stages.filter(s=>s.id.startsWith(`${i+1}-`)).map(s=>({id:s.id,title:s.title.replace(/^\d-\d\s*/,''),foe:battlePlans[s.id]?.foe||'미확인',goal:battlePlans[s.id]?.goal||'전투 목표 설계 필요'}))])};
 const branches=campaigns.map(c=>({...c,route:c.name==='백제'?'baekje':'goguryeo',chapters:c.chapters.map(([name,items],i)=>[name,items.map((line,j)=>{const [title,foe,goal]=line.split('|');return{id:`${i+1}-${j+1}`,title,foe,goal}})])}));
 root.innerHTML=[silla,...branches].map(c=>`<section class="campaign-route" id="route-${c.route}" style="--route:${c.color}"><h2>${esc(c.name)} · ${esc(c.symbol)}</h2><p>${esc(c.premise)}</p><p class="note">${c.route==='silla'?'대본 기반 · 대진과 전투 수치는 기획 제안':'대체 역사·창작 대사와 공통 웨이브 시험안 · 개별 검증 필요'}</p>${c.chapters.map(([name,battles],i)=>`<details ${i===0?'open':''}><summary>${i+1}장 · ${esc(name)} <small>${battles.length}전투</small></summary><div class="table"><table><thead><tr><th>전투</th><th>대진</th><th>플레이 목표 · 제안</th></tr></thead><tbody>${battles.map(b=>{const legacy=existing[`${c.name}:${b.id}`];return `<tr><td><a href="campaign-stage.html?route=${c.route}&amp;id=${b.id}">${esc(b.id)} ${esc(b.title)} · 상세 보기 ↗</a>${legacy?'<br><small>기존 IF 내용 반영 · 통합 검토 전</small>':''}${c.route==='silla'&&b.id==='1-1'?'<br><a href="stage-one.html">▶ 1-1 직접 플레이</a>':''}${c.route==='baekje'&&b.id==='1-3'?'<br><a href="stage-one.html?mode=siege">▶ 1-3 백제 공성 시험</a>':''}<br>${mapIds.has(`${c.route}-${b.id}`)?`<a href="grid-lab.html?map=${c.route}-${b.id}">격자 JSON 맵 ↗</a>`:'<small>격자 데이터 미제작</small>'}</td><td>${esc(c.name)} vs ${esc(b.foe)}</td><td>${esc(b.goal)}</td></tr>`}).join('')}</tbody></table></div></details>`).join('')}</section>`).join('');
 if(/^#route-(silla|baekje|goguryeo)$/.test(location.hash))document.querySelector(location.hash)?.scrollIntoView();
}
render().catch(e=>{root.textContent='캠페인 목록을 불러오지 못했습니다: '+e.message});
