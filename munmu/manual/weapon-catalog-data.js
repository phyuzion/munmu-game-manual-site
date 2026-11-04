// 게임용 설계 제안. 능력치·국가 문양은 사료가 아닌 플레이 시험값이다.
export const factions=[
{id:'silla',name:'신라',palette:'청색·은백',emblem:'흰 천마',style:'deep royal blue, silver-white trim, white winged horse Pegasus emblem'},
{id:'goguryeo',name:'고구려',palette:'흑색·청색',emblem:'청룡',style:'charcoal black, steel-gray trim, vivid blue dragon emblem'},
{id:'baekje',name:'백제',palette:'흑갈색·금색',emblem:'봉황',style:'dark brown lacquer, gold trim and golden phoenix emblem'},
{id:'tang',name:'당',palette:'적색·흑색',emblem:'주작',style:'deep red and dark metal, red vermilion bird emblem'}];
const basic=[
['shield','방패','방패','defense','정면 방어 · 방패병','왼팔의 방패 장착점 · 몸과 분리','방어 +20 · 정면 원거리 피해 0.6배','one single front-facing infantry shield, broad rounded silhouette and thick rim, faction animal emblem centered'],
['bow','활','활','ranged','궁병 · 원거리','활 몸통·시위 별도 · 양손 그립','공격 +16 · 공격 1.6초 · 거리 3~5','one single recurved bow, clearly visible bowstring and central grip, no arrow, no quiver'],
['spear','보병창','창','melee','창병 · 대기병','창날·긴 자루 · 양손 그립','공격 +22 · 공격 1.8초 · 거리 1.5~2','one single historical infantry spear with a straight wooden shaft, narrow iron spearhead and visible grip'],
['sword','보병도','칼','melee','검병 · 근접','칼날·손잡이 · 오른손 장착점','공격 +20 · 공격 1.2초 · 거리 1','one single early Korean-style straight single-edged iron sword with simple ring pommel, no sheath']];
export const items=factions.flatMap(f=>basic.map(([key,title,type,role,owners,parts,stats,visual])=>({id:`${f.id}-${key}`,name:`${f.name} ${title}`,group:'진영 기본 장비',faction:f.name,type,role,owners,parts,stats,visual:`${visual}, ${f.style}`,reference:'게임용 진영 표식 · 형태·시대 고증 필요'})));
const common=[
['short-spear','단창','창','보병 전열','한 손 장착점 · 방패와 함께','공격 +16 · 1.2초 · 거리 1~1.5','a short infantry spear, short wooden shaft with modest leaf-shaped iron head'],
['long-spear','장창','창','장창병 · 기병 저지','긴 자루·양손 장착점','공격 +25 · 2초 · 거리 2~3','a very long infantry pike with straight wooden pole and small iron spearhead'],
['lance','기병창','창','기병 · 돌격','기수 손 장착점 · 말 별도','공격 +28 · 2초 · 거리 1.5~2.5','a cavalry lance with long shaft and hand guard, balanced silhouette'],
['javelin','투창','창','경보병 · 투사체','발사체와 손 장착점 분리','공격 +18 · 1.8초 · 거리 2~4','a lightweight throwing spear with slender shaft and compact leaf-shaped tip'],
['short-blade','단도','칼','경보병 · 접근전','칼집·단도 별도 · 손 장착점','공격 +14 · 0.8초 · 거리 1','a small straight historical utility dagger with plain handle'],
['long-blade','대도','칼','중보병 · 근접','손잡이·칼집 별도','공격 +30 · 1.8초 · 거리 1~1.5','one broad single-edged straight Korean historical long sword with a ring pommel'],
['axe','전투 도끼','도끼','도부수 · 방패 압박','도끼머리·자루 · 양손 그립','공격 +28 · 1.8초 · 거리 1','a single-headed military axe with wooden handle and a broad iron blade'],
['club','곤봉','타격','의병 · 근접','단일 몸체·손잡이 구분','공격 +16 · 1.3초 · 거리 1','a simple polygonal hardwood club with leather-wrapped handle, one solid piece'],
['mace','철퇴','타격','중보병 · 방어 압박','금속 머리·자루 별도','공격 +30 · 1.9초 · 거리 1','one historical-inspired iron mace with a faceted metal head and short handle'],
['flail','쇠추 도리깨','타격','특수병 · 범위','손잡이·연결줄·추 3개 분리, 줄·추 움직임','공격 +26 · 2.2초 · 거리 1~2','one stylized historical-inspired flail with one wooden handle, one short visible chain and one iron weight, individual parts readable'],
['wood-flail','목제 도리깨','타격','의병 · 근접 범위','긴 손잡이·짧은 타격봉·연결끈 분리','공격 +18 · 1.8초 · 거리 1~2','traditional Korean-inspired wooden two-section flail: one long wooden handle attached to one shorter wooden beater by a flexible leather cord, no metal ball'],
['crossbow','쇠뇌','원거리','쇠뇌병 · 관통','몸·활대·시위·발사체 별도','공격 +32 · 2.6초 · 거리 3~5','one compact early historical crossbow with wood stock, bow limb and clearly visible string, no bolt'],
['repair-hammer','목제 수리망치','도구','동타천 · 수리','머리·자루 별도','구조물 수리 +18/초 · 공격력 별도','a simple wooden mallet with sturdy short handle and rectangular wooden head'],
['staff','책략가 지팡이','도구','책략가 · 기술 연출','지팡이 몸체 · 상단 장식 별도','공격 +10 · 1.5초 · 거리 1~3','a simple Korean historical-inspired wooden staff with restrained bronze ornament']];
for(const [id,name,type,owners,parts,stats,visual] of common)items.push({id:`common-${id}`,name,group:'공용·특수 장비',faction:'공용',type,role:'공용',owners,parts,stats,visual,reference:'게임용 제안 · 사용 시기와 출토 근거 확인 필요'});
const heroes=[
['munmu','법민·문무왕의 천마 창','창','법민·문무왕','청색 끈과 은백 천마 · 창날·자루 분리','공격 +28 · 1.6초 · 거리 1.5~2.5','an individual royal Silla spear, deep blue wrapping, silver blade, subtle white Pegasus motif'],
['yushin','김유신의 장도','칼','김유신','은백 환두·청색 손잡이 · 칼집 분리','공격 +32 · 1.6초 · 거리 1~1.5','a distinctive Silla general straight long sword with silver ring pommel, deep blue grip and a small white Pegasus marking'],
['seoloyu','설오유의 도끼','도끼','설오유','마모된 도끼날 · 양손 손잡이','공격 +34 · 1.9초 · 거리 1~1.5','a rugged well-used single-headed Silla axe, silver metal, blue leather grip and subtle Pegasus motif'],
['gwanchang','관창의 기마창','창','관창','기병 손잡이 · 말과 기수 별도','공격 +26 · 1.7초 · 거리 1.5~2.5','a light youthful Silla cavalry lance with long shaft and blue-white wrap'],
['simna','심나의 대도','칼','심나','넓은 칼날 · 굵은 한손 손잡이','공격 +33 · 1.9초 · 거리 1~1.5','a broad heavy Silla straight single-edged sword with strong grip and blue-silver fittings'],
['sona','소나의 장도','칼','소나','날렵한 칼날 · 한손 손잡이','공격 +25 · 1.2초 · 거리 1','a slim light Silla sword with silver fittings and blue leather wrap'],
['chunchu','김춘추의 활','활','김춘추','활 몸체·시위 별도 · 화살 별도','공격 +22 · 1.7초 · 거리 3~5','a refined Silla recurve bow with visible string and deep blue silver grip'],
['sideuk','시득의 수군 활','활','시득','시위·활 몸체·화살 별도','공격 +24 · 1.5초 · 거리 3~5','a practical coastal Silla recurve bow, dark blue bindings and silver tips'],
['goyeonmu','고연무의 기마창','창','고연무','흑색 자루 · 청룡 장식','공격 +32 · 1.8초 · 거리 2~3','a Goguryeo cavalry lance with black shaft, muted steel fittings and a small blue dragon emblem'],
['gyebaek','계백의 장도','칼','계백','흑갈 손잡이·금빛 봉황','공격 +35 · 1.8초 · 거리 1~1.5','a Baekje general straight long sword, dark brown grip, subtle gold phoenix ring pommel'],
['yeongaesomun','연개소문의 장도','칼','연개소문','흑색 칼집·청룡 금속 장식','공격 +36 · 1.9초 · 거리 1~1.5','a Goguryeo commander long straight sword, charcoal grip and restrained blue dragon motif'],
['seolingwi','설인귀의 기마창','창','설인귀','흰 창날·적색 술 장식','공격 +34 · 1.8초 · 거리 2~3','a Tang commander cavalry lance with bright steel blade, red wrapping and restrained red bird symbol']];
for(const [id,name,type,owners,parts,stats,visual] of heroes)items.push({id:`hero-${id}`,name,group:'영웅·적장 전용',faction:'인물별',type,role:'전용',owners,parts,stats,visual,reference:'인물별 게임 디자인 제안 · 사료상 개인 무기 확정 아님'});
const furtherHeroes=[
['sangyeong','상영의 장창','창','상영','흑갈 자루·금색 봉황 · 양손 그립','공격 +30 · 1.8초 · 거리 2~3','Baekje officer long spear, dark-brown shaft with small gold phoenix fitting and clear grip'],
['heumsun','김흠순의 창칼','창','김흠순','긴 자루·칼날 분리 · 양손 그립','공격 +34 · 1.9초 · 거리 1.5~2.5','heavy Silla polearm with a long straight blade, blue bindings and restrained silver Pegasus fitting'],
['inmun','김인문의 활','활','김인문','당군 적색 활대·시위·화살 분리','공격 +23 · 1.6초 · 거리 3~5','Tang-style red and dark recurve bow for a Silla prince, red bird symbol and visible string'],
['uijik','의직의 장도','칼','의직','흑갈 손잡이·금빛 봉황 환두','공격 +31 · 1.6초 · 거리 1~1.5','Baekje veteran general single-edged sword, dark brown grip and gold phoenix ring pommel'],
['yunchung','윤충의 검','칼','윤충','흑갈 칼집·금색 손잡이','공격 +30 · 1.5초 · 거리 1','Baekje commander straight sword with dark brown wrapped grip and subtle golden phoenix mark'],
['boksin','복신의 장창','창','복신','창날·자루·금빛 장식 분리','공격 +29 · 1.8초 · 거리 1.5~2.5','Baekje resistance commander practical spear with worn dark shaft and small gold phoenix motif'],
['buyeopung','부여풍의 검','칼','부여풍','흑갈 손잡이·황금 환두','공격 +24 · 1.3초 · 거리 1','young Baekje prince straight sword with understated gold phoenix ring pommel and dark grip'],
['yeonnamsaeng','연남생의 창','창','연남생','흑색 자루·강철 장식','공격 +29 · 1.7초 · 거리 1.5~2.5','Goguryeo commander long spear with charcoal shaft, steel gray fittings and a wingless blue dragon detail'],
['yeonnamgeon','연남건의 대도','칼','연남건','검은 손잡이·청룡 문양','공격 +35 · 1.8초 · 거리 1~1.5','heavy Goguryeo general straight sword, charcoal and steel gray fittings, wingless blue dragon motif'],
['yeonnamsan','연남산의 지팡이','도구','연남산','흑색 지팡이·상단 장식 분리','공격 +15 · 1.5초 · 거리 1~3','Goguryeo strategist dark wood staff with restrained steel gray fittings and blue dragon emblem'],
['geommojam','검모잠의 장창','창','검모잠','검은 자루·창날 별도','공격 +31 · 1.8초 · 거리 2~3','Goguryeo commander long spear with charcoal shaft, steel gray grip and restrained wingless blue dragon'],
['anseung','안승의 검','칼','안승','검은 손잡이·은색 고리','공격 +25 · 1.4초 · 거리 1','Goguryeo royal claimant straight sword with charcoal grip, steel ring pommel and small blue dragon']];
for(const [id,name,type,owners,parts,stats,visual] of furtherHeroes)items.push({id:`hero-${id}`,name,group:'영웅·적장 전용',faction:'인물별',type,role:'전용',owners,parts,stats,visual,reference:'인물별 게임 디자인 제안 · 사료상 개인 무기 확정 아님'});
