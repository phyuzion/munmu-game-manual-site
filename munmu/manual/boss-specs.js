// 모든 수치는 테스트 제안. 같은 스킬 키를 쓰면 아군 영웅과 기본 판정은 같다.
export const techniques={
'spear':{name:'관통 창',effect:'전방 3거리 적 최대 3명, 공격력 180%',cooldown:8},
'sweep':{name:'전열 휩쓸기',effect:'1거리 원형 150%, 작은 적 경직',cooldown:9},
'stomp':{name:'지축 울림',effect:'1.5거리 원형 120%, 1초 저지',cooldown:14},
'rush':{name:'선봉 돌격',effect:'전방 2.5거리 돌진, 경로에 160%',cooldown:13},
'fire':{name:'화공',effect:'2거리 지역, 4초간 매초 25% 피해',cooldown:18},
'water':{name:'수공',effect:'2거리 부채꼴 100%, 3초 동안 이동 30% 감소',cooldown:18},
'mud':{name:'진흙의 계책',effect:'반경 1.5거리 6초, 범위 내 적 이동 35% 감소',cooldown:20},
'frost':{name:'눈과 얼음',effect:'반경 1.5거리 둔화 40%, 2초 후 1초 동결',cooldown:22},
'heal':{name:'군의 회복',effect:'주변 아군 최대 체력의 15% 회복',cooldown:18},
'rally':{name:'격려의 깃발',effect:'주변 아군 공격·방어 15% 증가 6초',cooldown:20}};
export const bossSkills={'윤충':['sweep','rally'],'상영':['spear','rally'],'의직':['rush','rally'],'고연무':['spear','rush'],'염종':['sweep','stomp'],'수세':['rally','heal'],'비담':['sweep','rally'],'은상':['spear','rally'],'검모잠':['spear','rally'],'계백':['sweep','rally'],'부여태':['spear','rally'],'복신':['fire','rally'],'도침':['heal','rally'],'뇌음신':['stomp','fire'],'연남생':['spear','rally'],'연남건':['sweep','rush'],'부여풍':['water','rally'],'연남산':['spear','mud'],'고간':['rush','rally'],'부여융':['rally','heal'],'곽대봉':['stomp','sweep'],'설인귀':['spear','rush'],'이근행':['rush','stomp'],'유인궤':['water','rally'],'이다조':['rush','sweep'],'죽죽':['sweep','rally'],'김유신':['rush','rally']};
