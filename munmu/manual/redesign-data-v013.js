// 단독 T포즈 컨셉; 얼굴 유사성, 장비 분리, 모델과 리깅은 아직 검수 전이다.
const ids=['munmu-a','munmu-b','yushin','seoloyu','simna','sona','gwanchang','sangyeong','chunchu','heumsun','inmun','goyeonmu','sideuk','gyebaek','uijik','yunchung','boksin','buyeopung','yeonnamsaeng','yeonnamgeon','yeonnamsan','geommojam','anseung','yeongaesomun'];
const v12=new Set(['goyeonmu','yeongaesomun','seoloyu','yeonnamgeon','yeonnamsaeng','yeonnamsan','geommojam','anseung','sideuk']);
export const heroRedesign=Object.fromEntries(ids.map(id=>[id,`${id}-tpose-${v12.has(id)?'v012':['yushin','gyebaek'].includes(id)?'v010':'v011'}.webp`]));
export const troopRedesign=Object.fromEntries(['silla','baekje','goguryeo','tang'].flatMap(f=>['shield','spearman','swordsman','archer','cavalry','siege'].map(r=>[`${f}-${r}`,`${f}-${r}-tpose-v011.webp`])));
