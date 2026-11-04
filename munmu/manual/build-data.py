from pathlib import Path
import re,json
root=Path(__file__).resolve().parents[2]; t=(root/'assets/munmu/review/문무_스테이지대화스크립트.txt').read_text(); lines=t.splitlines(); starts=[i for i,s in enumerate(lines) if re.match(r'^\d-\d\s',s)]; out=[]
for n,i in enumerate(starts):
 end=starts[n+1] if n+1<len(starts) else next((j for j in range(i+2,len(lines)) if lines[j]=='에필로그'),len(lines))
 title=lines[i]; sec=lines[i+2:end]; chunks={'전투 전':[],'전투 중':[],'전투 후':[],'컷신':[]};active='전투 전'
 for row in sec:
  if re.match(r'^\d장\s',row) or row=='일반판 전령 보고':break
  hit=next((k for k in chunks if row.startswith(k)),None)
  if hit:active=hit
  if row.strip():chunks[active].append(row)
 out.append({'id':title.split()[0],'title':title,'meta':lines[i+1], 'before':chunks['전투 전'],'during':chunks['전투 중'],'after':chunks['전투 후'],'cutscene':chunks['컷신']})
assert len(out)==36
(root/'munmu/manual/stages.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
print('indexed',len(out),'original story stages')
