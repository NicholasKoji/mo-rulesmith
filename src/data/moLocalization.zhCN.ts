/**
 * MO Rulesmith Chinese localization data.
 *
 * Put this file in `src/data/moLocalization.zhCN.ts`, then import the maps
 * and helper functions wherever object display names are needed.
 */

export interface MoDisplayNameEntry {
  displayName: string;
  sectionType: string;
  uiName?: string;
  name?: string;
}

export interface BasicIniEntry {
  key: string;
  value: string;
}

export interface BasicIniSection {
  name: string;
  entries: BasicIniEntry[];
}

export type DisplayNameResolvedBy = 'uiName' | 'name' | 'section';

export interface ResolvedDisplayName {
  displayName: string;
  uiName?: string;
  rawName?: string;
  resolvedBy: DisplayNameResolvedBy;
}

/**
 * Normalized `NAME:xxx` label -> Chinese text.
 * Keys are normalized to uppercase and remove extra spaces after `NAME:`.
 */
export const MO_NAME_STRINGS_ZH_CN: Record<string, string> = {
  "NAME:CNTRPUNCH": "反击",
  "NAME:DEATHMRCH": "死亡行军",
  "NAME:DSRTMRCH": "沙漠行军",
  "NAME:3ROBO": "四辆机器人坦克",
  "NAME:4ARCH": "一辆冥卫坦克",
  "NAME:4CAVA": "三辆骑士坦克",
  "NAME:4INFSQ": "两辆光棱坦克",
  "NAME:4THOR": "一架雷神炮艇",
  "NAME:5PTHARNESS": "五星防护",
  "NAME:ABAN01": "西木原木公司",
  "NAME:ABAN02": "帕奴洛大牧场",
  "NAME:ABAN03": "废弃工厂",
  "NAME:ABAN04": "市政府",
  "NAME:ABAN05": "狩猎小屋",
  "NAME:ABAN06": "地方旅馆",
  "NAME:ABAN07": "教堂",
  "NAME:ABAN08": "废弃仓库",
  "NAME:ABAN09": "托尔的住所",
  "NAME:ABAN10": "汽车旅馆",
  "NAME:ABAN11": "米利庄园",
  "NAME:ABAN12": "凯特勒寓所",
  "NAME:ABAN13": "隆格之家",
  "NAME:ABAN14": "地方商店",
  "NAME:ABAN15": "亚当之家",
  "NAME:ABAN16": "加油站",
  "NAME:ABAN17": "加油帮浦",
  "NAME:ABAN18": "加油站招牌",
  "NAME:ABRM": "艾布拉姆斯坦克",
  "NAME:ACRSSNILE": "越过尼罗河",
  "NAME:ACTIVATE": "启动",
  "NAME:ADEPT": "心灵专家",
  "NAME:ADOG": "盟军军犬",
  "NAME:AEGIS": "神盾巡洋舰",
  "NAME:AENGINEER": "盟军工程师",
  "NAME:AERO": "天火防空坦克",
  "NAME:AETHER": "以太之光",
  "NAME:AFRICANS": "利比亚",
  "NAME:AFRICAN_WARLORDS": "非洲战神",
  "NAME:AHMV": "武装悍马车",
  "NAME:AHVYBOT": "未来坦克X-0",
  "NAME:AHVYBOT2": "未来坦克阿尔法",
  "NAME:AIAMCV": "盟军机动建设车",
  "NAME:AICLEG": "超时空军团兵",
  "NAME:AISMCV": "苏联机动建设车",
  "NAME:AIYMCV": "厄普西隆机动建设车",
  "NAME:AKULA": "阿库拉导弹潜艇",
  "NAME:ALL": "鳄鱼",
  "NAME:ALL01": "军事行动：孤独守卫",
  "NAME:ALL01MD": "军事行动：光阴似箭",
  "NAME:ALL01MDSAV": "盟军 01 - 光阴似箭",
  "NAME:ALL02": "军事行动：危机黎明",
  "NAME:ALL02MD": "军事行动：好莱坞，梦一场",
  "NAME:ALL02MDSAV": "盟军 02 - 好莱坞，梦一场",
  "NAME:ALL03": "军事行动：为长官欢呼",
  "NAME:ALL03MD": "军事行动：集中攻击",
  "NAME:ALL03MDSAV": "盟军 03 - 集中攻击",
  "NAME:ALL04": "军事行动：最后机会",
  "NAME:ALL04MD": "军事行动：古墓奇击",
  "NAME:ALL04MDSAV": "盟军 04 - 古墓奇击",
  "NAME:ALL05": "军事行动：暗夜",
  "NAME:ALL05MD": "军事行动：纽澳复制战",
  "NAME:ALL05MDSAV": "盟军 05 - 纽澳复制战",
  "NAME:ALL06": "军事行动：自由",
  "NAME:ALL06MD": "军事行动：万圣节",
  "NAME:ALL06MDSAV": "盟军 06 - 万圣节",
  "NAME:ALL07": "军事行动：深海",
  "NAME:ALL07MD": "军事行动：脑死",
  "NAME:ALL07MDSAV": "盟军 07 - 脑死",
  "NAME:ALL08": "军事行动：自由门户",
  "NAME:ALL09": "军事行动：太阳神殿",
  "NAME:ALL10": "军事行动：海市蜃楼",
  "NAME:ALL11": "军事行动：核爆辐射尘",
  "NAME:ALL12": "军事行动：超时空风暴",
  "NAME:ALLFINALE": "盟军终场",
  "NAME:ALLFINALMOVIE": "盟军胜利",
  "NAME:ALLIANCE": "韩国",
  "NAME:ALLIES": "盟军",
  "NAME:ALLIGATOR": "鳄鱼",
  "NAME:ALL_COOP": "盟军战役",
  "NAME:AMBAS": "谈判者",
  "NAME:AMBU": "救护车",
  "NAME:AMBUL": "救护车",
  "NAME:AMC": "执政官装甲步兵车",
  "NAME:AMCV": "盟军机动建设车",
  "NAME:AMEDIC": "军医",
  "NAME:AMERICANS": "美国",
  "NAME:AMMOCRAT": "弹药箱",
  "NAME:AMMOCRATES": "弹药箱",
  "NAME:AMWC": "科技卡车",
  "NAME:APACHE": "阿帕契",
  "NAME:APARA": "空降部队",
  "NAME:APOC": "天启坦克",
  "NAME:ARABS": "伊拉克",
  "NAME:ARCH": "恐龟加农炮",
  "NAME:ARGT": "出租车",
  "NAME:ARMA": "犰狳重型载具",
  "NAME:ARMORPRD": "反装甲大战",
  "NAME:ARMR": "友川纪夫",
  "NAME:ARND": "法兰克福特",
  "NAME:ARRIVING": "派遣中",
  "NAME:ARSO": "纵火狂",
  "NAME:ARTY": "远程火炮",
  "NAME:ASSAULTA": "辛辣突击",
  "NAME:ASSN": "拉恩",
  "NAME:ASW": "鱼鹰无人机",
  "NAME:ATESLA": "光棱塔",
  "NAME:ATOURN1": "美国锦标赛一",
  "NAME:ATOURN2": "美国锦标赛二",
  "NAME:AZIZ": "将军",
  "NAME:B52": "同温层堡垒轰炸机",
  "NAME:BACKWARP": "回溯",
  "NAME:BANE": "巨人克星",
  "NAME:BANE_N": "天神克星",
  "NAME:BANK": "银行",
  "NAME:BARRELS": "油桶架",
  "NAME:BARRIER": "动能屏障",
  "NAME:BASIL": "毒蜥空中战舰",
  "NAME:BASS": "雅典娜炮",
  "NAME:BATTERSEA": "巴特西发电站",
  "NAME:BATTLECR": "巴特克里市",
  "NAME:BATTLEFORTRESS": "玄武战斗要塞",
  "NAME:BBOARD01": "来雷德旅馆",
  "NAME:BBOARD02": "美味的优卡可乐！",
  "NAME:BBOARD03": "汉堡 $99",
  "NAME:BBOARD04": "拉斯维加斯观光",
  "NAME:BBOARD05": "房间每晚 $29",
  "NAME:BBOARD06": "军事仓库",
  "NAME:BBOARD07": "硷电池大型商场",
  "NAME:BBOARD08": "鳄鱼王宠物店就在前头！",
  "NAME:BBOARD09": "战术高手舞厅！",
  "NAME:BBOARD10": "WW 海鲜牛排餐，来试试吧！",
  "NAME:BBOARD11": "离迪库咖啡厅仅十一哩！",
  "NAME:BBOARD12": "没有人可以从射手收容所逃脱！",
  "NAME:BBOARD13": "来修维美发沙龙坐坐吧",
  "NAME:BBOARD14": "比尔鲍伯收割机学校",
  "NAME:BBOARD15": "潘奴洛大庄园",
  "NAME:BCNTR": "黑百夫长攻城机甲",
  "NAME:BEACONACTIVE": "警报 - 心灵信标已经启动 ！",
  "NAME:BEAG2": "黑鹰战机",
  "NAME:BEAGLE": "黑鹰战机",
  "NAME:BEETLE": "巨型甲虫",
  "NAME:BFRT": "玄武战斗要塞",
  "NAME:BGGY": "自爆吉普车",
  "NAME:BIGPOWER": "城市发电站",
  "NAME:BIKE": "伊文摩托兵",
  "NAME:BIOR": "生化反应室",
  "NAME:BISON": "野牛",
  "NAME:BIZON": "蛮牛角斗坦克",
  "NAME:BLACKCAB": "黑色计程车",
  "NAME:BLACKOUTMISSILE": "断路导弹",
  "NAME:BLAST": "爆裂屏障",
  "NAME:BLASTACTIVE": "警报 - 爆裂屏障正在运作 ！",
  "NAME:BLASTDETECT": "警报 - 侦测到爆裂熔炉 ！",
  "NAME:BLASTRAD": "爆炸半径",
  "NAME:BLASTRUNNING": "- 激活 -",
  "NAME:BLDZ": "推土机",
  "NAME:BLIGHT": "恶灵战机",
  "NAME:BLOODHOUNDS": "空降猎犬小队",
  "NAME:BLOWER": "铲雪机",
  "NAME:BLZZ": "暴风雪坦克",
  "NAME:BOAT": "船",
  "NAME:BOBC": "山猫挖掘机",
  "NAME:BOID": "机械造物",
  "NAME:BOIDBLITZ": "造物惩击",
  "NAME:BOMBING": "空中攻击",
  "NAME:BOO": "幽灵",
  "NAME:BOOMCAR": "闹市车",
  "NAME:BOOMER": "雷鸣攻击潜舰",
  "NAME:BOREK": "破坏神载具",
  "NAME:BORIS": "鲍里斯",
  "NAME:BOXCAR": "箱式货车",
  "NAME:BPLN": "米格轰炸机",
  "NAME:BPLNX": "米格X",
  "NAME:BRANC": "布兰城堡",
  "NAME:BRDRSKIRM": "边界前哨战",
  "NAME:BRITISH": "英国",
  "NAME:BRONXBOM": "步萨克斯区轰炸机",
  "NAME:BRUTE": "狂兽人",
  "NAME:BTRUCK": "箱式卡车",
  "NAME:BUILDING": "建筑物",
  "NAME:BUOY": "浮力",
  "NAME:BURA": "布拉提诺火箭车",
  "NAME:BUS": "校车",
  "NAME:BUSRED": "公交车",
  "NAME:BUZZ": "秃鹰攻击机",
  "NAME:CA0001": "雷得旅馆",
  "NAME:CA0002": "山伯父子之家",
  "NAME:CA0003": "临时住宅",
  "NAME:CA0004": "小站",
  "NAME:CA0005": "出售小屋",
  "NAME:CA0006": "豪华旅馆",
  "NAME:CA0007": "力场产生器",
  "NAME:CA0008": "地下住宅",
  "NAME:CA0009": "地下住宅",
  "NAME:CA0010": "李利旅人之家",
  "NAME:CA0011": "水槽",
  "NAME:CA0012": "温室",
  "NAME:CA0013": "净水厂",
  "NAME:CA0014": "观测塔",
  "NAME:CA0015": "港口小木屋",
  "NAME:CA0016": "豪华港口小木屋",
  "NAME:CA0017": "能量转换器",
  "NAME:CA0018": "太阳能电池板",
  "NAME:CA0019": "太阳能电池板",
  "NAME:CA0020": "太阳能电池板",
  "NAME:CA0021": "太阳能电池板",
  "NAME:CAABOX": "箱子",
  "NAME:CAACAD": "科技步兵学院",
  "NAME:CAACOM": "通讯塔",
  "NAME:CAAEFLG": "阿联酋旗帜",
  "NAME:CAAERO": "科技航空学院",
  "NAME:CAAFLG": "盟军旗帜",
  "NAME:CAAIRP": "科技机场",
  "NAME:CAANNN": "圣母领报大教堂",
  "NAME:CAAPAD": "直升机坪",
  "NAME:CAARAY": "市民群",
  "NAME:CAARFGL": "阿根廷旗帜",
  "NAME:CAARMR": "国民兵训练中心",
  "NAME:CAARMY01": "军队营帐",
  "NAME:CAARMY01A": "军队营帐",
  "NAME:CAARMY01B": "军队营帐",
  "NAME:CAART": "科技重型火炮",
  "NAME:CAARTY": "巨炮",
  "NAME:CAASHN": "克莱帕基广告牌",
  "NAME:CAASUK": "Ares广告牌",
  "NAME:CAAUFLG": "澳大利亚旗帜",
  "NAME:CAAZIZ": "拉什迪的宫殿",
  "NAME:CABALL": "炮弹",
  "NAME:CABANA": "海滨酒吧",
  "NAME:CABANK": "科技银行",
  "NAME:CABANN01": "日本旗帜",
  "NAME:CABANN03": "火车标志",
  "NAME:CABARB": "铁丝网",
  "NAME:CABARN02": "谷仓",
  "NAME:CABARR": "拒马",
  "NAME:CABARR2": "反抗军避难所",
  "NAME:CABARRX": "拒马",
  "NAME:CABATT": "悖论电池",
  "NAME:CABCRN": "港口起重机",
  "NAME:CABHUT": "桥梁维修小屋",
  "NAME:CABILL01A": "我是尤里， 你得服从",
  "NAME:CABILL02A": "锤子与镰刀广告牌",
  "NAME:CABILL03A": "苏维埃世界广告牌",
  "NAME:CABILL04A": "尤里的意志广告牌",
  "NAME:CABILL05A": "苏军广告牌",
  "NAME:CABILL06A": "使命召唤广告牌",
  "NAME:CABILL07A": "罗曼诺夫广告牌",
  "NAME:CABILL08A": "尤里&罗曼诺夫广告牌",
  "NAME:CABILL09A": "月球飞行兵广告牌",
  "NAME:CABILL10A": "苏维埃宇宙广告牌",
  "NAME:CABILL11A": "列宁广告牌",
  "NAME:CABIOS": "考古学博物馆",
  "NAME:CABLSH": "莫斯科大剧院",
  "NAME:CABLUL": "蓝色信号灯",
  "NAME:CABORS": "鲍里斯雕像",
  "NAME:CABRFC": "砖瓦围墙",
  "NAME:CABRFLG": "巴西旗帜",
  "NAME:CABRID": "桥梁",
  "NAME:CABRKK": "建筑物",
  "NAME:CABRTB": "吧台",
  "NAME:CABSFLG": "比绍旗帜",
  "NAME:CABSTA": "青铜体育场",
  "NAME:CABSTOP": "公交站",
  "NAME:CABUBB": "水箱",
  "NAME:CABUBL": "水槽",
  "NAME:CABUDD": "佛像",
  "NAME:CABUNK01": "科技混凝土碉堡",
  "NAME:CABUNK01A": "科技混凝土碉堡",
  "NAME:CACABL": "电缆塔",
  "NAME:CACAFLG": "加拿大旗帜",
  "NAME:CACANN01": "炮台",
  "NAME:CACAPP": "矿石贮存井",
  "NAME:CACARG01": "集装箱",
  "NAME:CACASK": "啤酒桶",
  "NAME:CACAST": "堡垒",
  "NAME:CACHIG01": "建筑物",
  "NAME:CACHIG02": "建筑物　",
  "NAME:CACHIG03": "建筑物",
  "NAME:CACHIG04": "芝加哥协会大楼",
  "NAME:CACHIG05": "西尔斯大厦",
  "NAME:CACHIN": "中国旗帜",
  "NAME:CACHNA03": "塔",
  "NAME:CACHUR01": "教堂",
  "NAME:CACHUR02": "圣詹姆士天主教堂",
  "NAME:CACHUR09": "城堡遗迹",
  "NAME:CACHUT": "检查点",
  "NAME:CACITY": "写字楼",
  "NAME:CACITY01": "建筑物",
  "NAME:CACITY02": "建筑物",
  "NAME:CACITY03": "建筑物",
  "NAME:CACITY04": "建筑物",
  "NAME:CACMNT": "无线电塔",
  "NAME:CACNONA": "小型火炮",
  "NAME:CACNSRV": "博物馆",
  "NAME:CACOLM": "立柱",
  "NAME:CACOLO": "罗马斗兽场",
  "NAME:CACOLO01": "空军学院礼拜堂",
  "NAME:CACOMN": "科技卫星入侵中心",
  "NAME:CACOOL": "低温冷冻液",
  "NAME:CACORE": "中枢计算机",
  "NAME:CACPTL": "美国国会",
  "NAME:CACRAN": "港口起重机",
  "NAME:CACRTK": "冷冻液贮藏罐",
  "NAME:CACRYO": "圆顶研究室",
  "NAME:CACTNT": "工人营帐",
  "NAME:CADEFB": "科技防卫局",
  "NAME:CADEFN": "短剑防御系统",
  "NAME:CADFLY": "蜻蜓雕像",
  "NAME:CADKFLG": "丹麦旗帜",
  "NAME:CADOCK": "科技军事码头",
  "NAME:CADOME": "雷达球",
  "NAME:CADORM": "圣母升天大教堂",
  "NAME:CADRAG01": "龙尾",
  "NAME:CADRAG02": "龙门",
  "NAME:CADRAG03": "龙头",
  "NAME:CADRAG04": "龙头",
  "NAME:CADRIL": "老式挖掘设施",
  "NAME:CADSTA": "椭圆型竞技场",
  "NAME:CADTBG": "扩展包广告牌",
  "NAME:CADWAR": "仓库",
  "NAME:CAEAFLG": "欧洲联盟旗帜",
  "NAME:CAEAST01": "复活岛石像",
  "NAME:CAEAST02": "尤里雕像",
  "NAME:CAEAST02X": "尤里雕像",
  "NAME:CAEGYP": "金字塔",
  "NAME:CAEGYP03": "狮身人面像",
  "NAME:CAEMBA": "大使馆",
  "NAME:CAESBL": "帝国大厦",
  "NAME:CAETNT": "帐篷",
  "NAME:CAEUR04": "建筑物",
  "NAME:CAEUR1": "小屋",
  "NAME:CAEUR2": "小屋",
  "NAME:CAEURO05": "雕像",
  "NAME:CAEURO05X": "牧师雕像",
  "NAME:CAEXCV": "挖掘设施",
  "NAME:CAFACC": "老旧工厂",
  "NAME:CAFARM01": "农庄",
  "NAME:CAFARM02": "农庄贮槽",
  "NAME:CAFARM06": "灯塔",
  "NAME:CAFARM06F": "灯塔",
  "NAME:CAFBRL": "滚筒",
  "NAME:CAFCTR": "工厂",
  "NAME:CAFDZ": "风力发电站",
  "NAME:CAFHOSP": "科技医院",
  "NAME:CAFLAG": "玩家的军旗",
  "NAME:CAFMSC01": "霓虹灯柱",
  "NAME:CAFMSC02": "霓虹光带",
  "NAME:CAFMSC04": "霓虹星尘",
  "NAME:CAFMSC05": "霓虹立方",
  "NAME:CAFNCB": "黑色栅栏",
  "NAME:CAFNCP": "监狱栅栏",
  "NAME:CAFNCW": "白色栅栏",
  "NAME:CAFNFLG": "芬兰旗帜",
  "NAME:CAFOOT": "过街天桥",
  "NAME:CAFORT": "科技混凝土要塞",
  "NAME:CAFRMA": "农舍",
  "NAME:CAFRMB": "移动式厕所",
  "NAME:CAFUEL": "燃料罐",
  "NAME:CAFUSI": "地震平衡杆",
  "NAME:CAGARD": "守卫塔",
  "NAME:CAGARD01": "警卫哨",
  "NAME:CAGARD01A": "警戒哨",
  "NAME:CAGARG": "车库",
  "NAME:CAGAS01": "加油站",
  "NAME:CAGAS02": "加油机",
  "NAME:CAGAS03": "加油站标志",
  "NAME:CAGCUG": "邓奇的车库",
  "NAME:CAGEDTIG": "笼中虎",
  "NAME:CAGLOB": "投影地球仪",
  "NAME:CAGREFGL": "希腊旗帜",
  "NAME:CAGRNL": "绿色信号灯",
  "NAME:CAHALL02": "仓库",
  "NAME:CAHALL02N": "苏联仓库",
  "NAME:CAHANG": "机库",
  "NAME:CAHBAN": "厄普西隆总部守卫旗帜",
  "NAME:CAHBNK": "直升机碉堡",
  "NAME:CAHEAV": "天坛",
  "NAME:CAHELI": "直升机坪",
  "NAME:CAHERT": "最高指挥部苏维埃宫",
  "NAME:CAHHFLG": "狂鲨先锋旗帜",
  "NAME:CAHMCH": "科技重机械厂",
  "NAME:CAHMG": "科技重机枪塔",
  "NAME:CAHOLO": "焚风投影板",
  "NAME:CAHOSP": "市民医院",
  "NAME:CAHPIP": "U型滑板场",
  "NAME:CAHSE": "房子",
  "NAME:CAHSE01": "房屋",
  "NAME:CAHSE02": "房屋",
  "NAME:CAHSE03": "房屋　",
  "NAME:CAHSE04": "房屋",
  "NAME:CAHSE05": "货柜屋",
  "NAME:CAHSE06": "货柜屋",
  "NAME:CAHTCH": "舱门",
  "NAME:CAIDFGL": "冰岛旗帜",
  "NAME:CAIFLG": "意大利旗帜",
  "NAME:CAIND01": "工厂",
  "NAME:CAIND01X": "工厂",
  "NAME:CAINDFLG": "印度尼西亚旗帜",
  "NAME:CAINDU01": "工厂废墟",
  "NAME:CAINFLG": "印度旗帜",
  "NAME:CAIRFLAG": "爱尔兰旗帜",
  "NAME:CAIRFLG": "爱尔兰旗帜",
  "NAME:CAJAIL": "监狱",
  "NAME:CAJAPA": "建筑物",
  "NAME:CAJAPA06": "日式围墙",
  "NAME:CAJARC": "鸟居",
  "NAME:CAJHUT": "竹屋",
  "NAME:CAJORA": "神龛",
  "NAME:CAJPFLG": "日本旗帜",
  "NAME:CAJTAL": "盟军征兵广告牌",
  "NAME:CAJUNK": "垃圾场",
  "NAME:CAJWAT": "旧水塔",
  "NAME:CAKANE01": "金川实验室",
  "NAME:CAKANE05": "金川装配车间",
  "NAME:CAKANE06": "金川工业总部",
  "NAME:CAKIND": "金川工业广告牌",
  "NAME:CAKNIN": "未来科技广告牌",
  "NAME:CAKRAR": "克里姆林宫军械库",
  "NAME:CAKRMW": "围墙",
  "NAME:CAKRSN": "克里姆林宫参议院",
  "NAME:CAKZFLG": "哈萨克斯坦旗帜",
  "NAME:CALA01": "小型购物中心",
  "NAME:CALA01X": "科冈的精品店",
  "NAME:CALA03": "好莱坞标志",
  "NAME:CALA03X": "好莱坞标志",
  "NAME:CALA04": "好莱坞剧场",
  "NAME:CALA04X": "好莱坞露天影城",
  "NAME:CALA05": "洛杉矶",
  "NAME:CALA06": "洛杉矶塔台",
  "NAME:CALA07": "电影院",
  "NAME:CALA08": "汽车代理商",
  "NAME:CALA09": "便利商店",
  "NAME:CALA10": "看板",
  "NAME:CALA10A": "Westwood 广告牌",
  "NAME:CALA10B": "你家被偷了 ！广告牌",
  "NAME:CALBFLG": "最后堡垒旗帜",
  "NAME:CALCFGL": "拉丁同盟旗帜",
  "NAME:CALGHT01": "工作灯",
  "NAME:CALIT01E": "照明设施",
  "NAME:CALIT01N": "照明设施",
  "NAME:CALIT01S": "照明设施",
  "NAME:CALIT01W": "照明设施",
  "NAME:CALIT02": "光照",
  "NAME:CALIT03": "光照",
  "NAME:CALLBORIS": "部署鲍里斯",
  "NAME:CALOND04": "英国国会",
  "NAME:CALOND05": "大笨钟",
  "NAME:CALOND06": "伦敦塔",
  "NAME:CALUNR01": "登月小艇",
  "NAME:CALUNR02": "美国旗帜",
  "NAME:CAMACH": "科技机械维修车间",
  "NAME:CAMALL": "大型商场",
  "NAME:CAMAUS": "列宁墓",
  "NAME:CAMCFLAG": "摩洛哥旗帜",
  "NAME:CAMCFLG": "摩洛哥旗帜",
  "NAME:CAMDDB": "ModDB 广告牌",
  "NAME:CAMEL": "骆驼",
  "NAME:CAMEX01": "玛雅金字塔",
  "NAME:CAMHME": "活动住房",
  "NAME:CAMIAM01": "饭店",
  "NAME:CAMIAM02": "饭店",
  "NAME:CAMIAM03": "饭店",
  "NAME:CAMIAM04": "救生员休息亭",
  "NAME:CAMIAM05": "饭店",
  "NAME:CAMIAM06": "饭店",
  "NAME:CAMIAM07": "饭店",
  "NAME:CAMIAM08": "亚历桑那纪念馆",
  "NAME:CAMIKU": "World Beyond 广告牌",
  "NAME:CAMINE": "矿井",
  "NAME:CAMINE01": "采矿设施",
  "NAME:CAMINE02": "仓库",
  "NAME:CAMINE04": "矿井",
  "NAME:CAMINF": "浓缩设施",
  "NAME:CAMISC01": "油桶",
  "NAME:CAMISC01A": "油桶",
  "NAME:CAMISC02": "油桶",
  "NAME:CAMISC02A": "油桶",
  "NAME:CAMISC03": "子母垃圾车",
  "NAME:CAMISC04": "邮筒",
  "NAME:CAMISC05": "水管",
  "NAME:CAMISC05X": "管道",
  "NAME:CAMISC06": "V3 飞弹",
  "NAME:CAMISC06X": "飞毛腿导弹架",
  "NAME:CAMISC0X": "油桶",
  "NAME:CAMISC11": "轮胎",
  "NAME:CAMISC12": "练习靶",
  "NAME:CAMISC13": "废弃坦克",
  "NAME:CAMISL": "科技导弹发射井",
  "NAME:CAML": "骆驼",
  "NAME:CAMONA": "圣索菲亚大教堂",
  "NAME:CAMONU": "方尖碑",
  "NAME:CAMORR05": "理克酒馆",
  "NAME:CAMORR06B": "猫头鹰与朋友",
  "NAME:CAMOV01": "广告看板",
  "NAME:CAMOV01X": "香蕉显示屏",
  "NAME:CAMOV02": "停车场商店",
  "NAME:CAMOV03": "蚂蚁显示屏",
  "NAME:CAMOV04": "Westwood显示屏",
  "NAME:CAMOV05": "苏维埃欧洲显示屏",
  "NAME:CAMOV06": "核试验显示屏",
  "NAME:CAMOV07": "警察追捕显示屏",
  "NAME:CAMPER": "露营车",
  "NAME:CAMPG": "高效燃油越野车",
  "NAME:CAMRKT01": "集市",
  "NAME:CAMSC01": "美又美热狗摊！　",
  "NAME:CAMSC02": "遮阳伞",
  "NAME:CAMSC02X": "伞",
  "NAME:CAMSC04": "海滩毛巾",
  "NAME:CAMSC04X": "浴巾",
  "NAME:CAMSC06": "营火",
  "NAME:CAMSC07": "小屋",
  "NAME:CAMSC07A": "小屋",
  "NAME:CAMSC10": "牛肉堡王",
  "NAME:CAMSC12": "训练靶",
  "NAME:CAMSC13": "废弃的猛犸坦克",
  "NAME:CAMSC14": "火堆",
  "NAME:CAMSC15": "火炬",
  "NAME:CAMUSE01": "大厦",
  "NAME:CAMUSE01B": "乌亚兹多夫大楼",
  "NAME:CAMXFLG": "墨西哥旗帜",
  "NAME:CANAVY": "港务大楼",
  "NAME:CANCON": "纳米纤维贮藏仓",
  "NAME:CANEWY01": "建筑物",
  "NAME:CANEWY04": "自由女神像",
  "NAME:CANEWY05": "世界贸易中心",
  "NAME:CANEWY06": "建筑物",
  "NAME:CANEWY07": "建筑物　",
  "NAME:CANEWY08": "建筑物　",
  "NAME:CANEWY10": "建筑物　",
  "NAME:CANEWY11": "建筑物　",
  "NAME:CANEWY12": "建筑物　",
  "NAME:CANEWY13": "建筑物　",
  "NAME:CANEWY14": "建筑物　",
  "NAME:CANEWY15": "建筑物　",
  "NAME:CANEWY16": "建筑物　",
  "NAME:CANEWY17": "建筑物　",
  "NAME:CANEWY18": "建筑物　",
  "NAME:CANEWY20": "仓库",
  "NAME:CANEWY20X": "仓库",
  "NAME:CANGFLG": "尼日利亚旗帜",
  "NAME:CANMIN": "水雷",
  "NAME:CANMINB": "EMP水雷",
  "NAME:CANPLM": "燃烧弹仓库",
  "NAME:CANRCT": "科技核电站",
  "NAME:CANRKR": "朝鲜旗帜",
  "NAME:CANTHR": "纳米织线",
  "NAME:CANTOW": "霓虹灯塔",
  "NAME:CANWFGL": "挪威旗帜",
  "NAME:CANWY05": "世界贸易中心",
  "NAME:CANWY09": "建筑物",
  "NAME:CANWY22": "建筑物　",
  "NAME:CANWY23": "建筑物　",
  "NAME:CANWY24": "建筑物　",
  "NAME:CANWY25": "建筑物　",
  "NAME:CANWY26": "建筑物　",
  "NAME:CANZFLG": "新西兰旗帜",
  "NAME:CAOFFC": "邓奇的办公楼",
  "NAME:CAOILD": "科技钻油井",
  "NAME:CAOILDOM": "科技钻油井",
  "NAME:CAOILDX": "科技钻油井",
  "NAME:CAOILR": "石油精炼厂",
  "NAME:CAOILS": "油罐",
  "NAME:CAOLEO": "石油管道",
  "NAME:CAONIO": "圆顶教堂",
  "NAME:CAOPER": "特内里费歌剧院",
  "NAME:CAOPIP": "油管",
  "NAME:CAOPLT": "钻井平台",
  "NAME:CAORAN": "圆顶教堂",
  "NAME:CAOS": "基因突击车",
  "NAME:CAOSTA": "蓝宝石体育场",
  "NAME:CAOUTP": "科技前哨站",
  "NAME:CAPAD": "直升机坪",
  "NAME:CAPALA": "韦恩庄园",
  "NAME:CAPALACE": "凯瑟琳宫",
  "NAME:CAPARK01": "公园长椅",
  "NAME:CAPARK02": "秋千",
  "NAME:CAPARK03": "旋转盘",
  "NAME:CAPARKB": "长椅",
  "NAME:CAPARS01": "埃菲尔铁塔",
  "NAME:CAPARS01A": "埃菲尔铁塔",
  "NAME:CAPARS02": "建筑物　",
  "NAME:CAPARS08": "建筑物　",
  "NAME:CAPARS09": "建筑物　",
  "NAME:CAPARS10": "建筑物",
  "NAME:CAPARS11": "凯旋门",
  "NAME:CAPARS11X": "凯旋门",
  "NAME:CAPARS12": "大教堂",
  "NAME:CAPARS12X": "巴黎圣母院",
  "NAME:CAPARS13": "建筑物",
  "NAME:CAPARS14": "建筑物",
  "NAME:CAPBAN": "心灵军团旗帜",
  "NAME:CAPEFLG": "秘鲁旗帜",
  "NAME:CAPETE": "圣彼得大教堂",
  "NAME:CAPFFLG": "太平洋阵线旗帜",
  "NAME:CAPHFLG": "菲律宾旗帜",
  "NAME:CAPHUT": "海滩小屋",
  "NAME:CAPICN01": "野餐桌",
  "NAME:CAPICN01X": "野餐桌",
  "NAME:CAPIER": "灯塔码头",
  "NAME:CAPIPE": "混凝土管道",
  "NAME:CAPKFLG": "巴基斯坦旗帜",
  "NAME:CAPLAT": "火车站台",
  "NAME:CAPLAT01": "被摧毁的平台",
  "NAME:CAPOL01E": "电线杆",
  "NAME:CAPOL01N": "电线杆",
  "NAME:CAPOL01S": "电线杆",
  "NAME:CAPOL01W": "电线杆",
  "NAME:CAPOWR": "科技发电厂",
  "NAME:CAPOZN": "波兹南哈拉竞技场",
  "NAME:CAPP": "煤炭发电厂",
  "NAME:CAPRLT": "东方明珠塔",
  "NAME:CAPROP": "铁桶",
  "NAME:CAPRS03": "卢浮宫",
  "NAME:CAPRS03X": "卢浮宫",
  "NAME:CAPRS04": "建筑物　",
  "NAME:CAPRS05": "建筑物　",
  "NAME:CAPRS06": "建筑物　",
  "NAME:CAPRS07": "电话亭",
  "NAME:CAPRSN": "监狱建筑物",
  "NAME:CAPU": "重装部队",
  "NAME:CAPYR01": "金字塔",
  "NAME:CAPYR02": "金字塔",
  "NAME:CAPYR03": "金字塔",
  "NAME:CAPYRA": "大金字塔",
  "NAME:CAR": "平民车辆",
  "NAME:CARAD": "科技辐照塔",
  "NAME:CARADI": "无线电塔",
  "NAME:CARAIL": "轨道炮塔",
  "NAME:CARDBK": "路障",
  "NAME:CAREDL": "红色信号灯",
  "NAME:CAREFN": "科技矿石精炼厂",
  "NAME:CARGOCAR": "运输车",
  "NAME:CARIK": "里克酒馆",
  "NAME:CARING": "圣彼得广场",
  "NAME:CAROAD": "混凝土路障",
  "NAME:CARODS01": "钢管",
  "NAME:CARPUB": "邓奇的酒馆",
  "NAME:CARRIER": "航空母舰",
  "NAME:CARRIERB": "尼米兹号航空母舰",
  "NAME:CARRIERE": "企业航空母舰",
  "NAME:CARS": "汽车",
  "NAME:CARSIN": "辐射标志",
  "NAME:CARUS01": "圣巴索大教堂",
  "NAME:CARUS01X": "圣巴西尔大教堂",
  "NAME:CARUS03": "克里姆林宫　",
  "NAME:CARUS03X": "克里姆林宫",
  "NAME:CARUS04": "建筑物　",
  "NAME:CARUS05": "建筑物　",
  "NAME:CARUS06": "建筑物　",
  "NAME:CARUS07": "红场",
  "NAME:CARUS07X": "罗波诺耶梅思托平台",
  "NAME:CARUSHT": "国家历史博物馆",
  "NAME:CARV": "卡维利将军",
  "NAME:CARWARS": "汽车战争",
  "NAME:CASAM": "科技防空阵地",
  "NAME:CASANF04": "金门大桥",
  "NAME:CASANF04X": "金门大桥",
  "NAME:CASANF05": "恶魔岛",
  "NAME:CASANF15": "水塔",
  "NAME:CASANF16": "灯塔",
  "NAME:CASANT": "圣天使堡",
  "NAME:CASBAN": "天蝎组织旗帜",
  "NAME:CASBUN": "科技补给碉堡",
  "NAME:CASCIE01": "研究模块",
  "NAME:CASEAT01": "西雅图太空针塔",
  "NAME:CASEAT02": "巨软园区",
  "NAME:CASEIM": "波兰下议院",
  "NAME:CASEJM01": "波兰下议院",
  "NAME:CASEJM02": "波兰下议院",
  "NAME:CASEJM03": "波兰下议院",
  "NAME:CASGFLG": "新加坡旗帜",
  "NAME:CASHIP": "舰船残骸",
  "NAME:CASHLD": "科技保护伞",
  "NAME:CASHSE01": "房屋",
  "NAME:CASHSE02": "砖厂",
  "NAME:CASHSE03": "贮藏罐",
  "NAME:CASHUT": "贮存室",
  "NAME:CASIEG": "西格弗里德的大楼",
  "NAME:CASIN03": "施工标志",
  "NAME:CASIN03E": "施工标识",
  "NAME:CASING": "新加坡国会",
  "NAME:CASLAB": "秘密科技实验室",
  "NAME:CASLUM": "贫民窟",
  "NAME:CASOLR": "太阳能电池板",
  "NAME:CASPAC": "火箭发射台",
  "NAME:CASPAFGL": "西班牙旗帜",
  "NAME:CASSAM": "科技防空导弹",
  "NAME:CASSFLG": "苏维埃美利坚旗帜",
  "NAME:CASSUN": "落日投影板",
  "NAME:CASTAIR": "楼梯间",
  "NAME:CASTAT": "火车站",
  "NAME:CASTAT01": "雕塑",
  "NAME:CASTCH": "命运科技广告牌",
  "NAME:CASTEI": "经典老作广告牌",
  "NAME:CASTEIB": "命运科技大学伦敦分校",
  "NAME:CASTEID": "命运科技大学",
  "NAME:CASTEIN": "命运科技大学柏林分校",
  "NAME:CASTL01": "建筑物",
  "NAME:CASTL02": "建筑物",
  "NAME:CASTL03": "建筑物",
  "NAME:CASTL04": "萨尔南拱门",
  "NAME:CASTL04X": "圣路易斯拱门",
  "NAME:CASTL05": "体育馆",
  "NAME:CASTL05X": "体育场",
  "NAME:CASTOF": "命运科技办公楼",
  "NAME:CASTON": "石像",
  "NAME:CASTOR": "贮存室",
  "NAME:CASTRF": "科技建筑维护中心",
  "NAME:CASTRT05": "公车站",
  "NAME:CASTSGN": "命运科技标志",
  "NAME:CASWFGL": "瑞典旗帜",
  "NAME:CASWLL": "石头围墙",
  "NAME:CASWST01": "建筑物",
  "NAME:CASYDN02": "麦克鲁汉堡",
  "NAME:CASYDN03": "悉尼歌剧院",
  "NAME:CATA": "灾厄坦克",
  "NAME:CATARGII": "练习靶",
  "NAME:CATCSK": "大地新星贮藏桶",
  "NAME:CATECH01": "通讯中心",
  "NAME:CATEKN01": "实验室",
  "NAME:CATEKN02": "旧实验室",
  "NAME:CATENT01": "帐篷",
  "NAME:CATESL": "废弃的反应炉",
  "NAME:CATEXS01": "建筑物",
  "NAME:CATEXS02": "阿拉莫要塞",
  "NAME:CATEXS03": "建筑物　",
  "NAME:CATEXS04": "建筑物　",
  "NAME:CATEXS05": "建筑物　",
  "NAME:CATEXS06": "办公大楼",
  "NAME:CATEXS07": "办公大楼　",
  "NAME:CATEXS08": "办公大楼　",
  "NAME:CATHOSP": "科技医院",
  "NAME:CATIKI01": "提基人面像",
  "NAME:CATIME02": "时间机器",
  "NAME:CATIME02X": "时间机器",
  "NAME:CATIMEX": "时间机器",
  "NAME:CATOKY": "东京塔",
  "NAME:CATPAD": "科技增援平台",
  "NAME:CATPIP": "传输管道",
  "NAME:CATRAN01": "地窖",
  "NAME:CATRAN01X": "地窖",
  "NAME:CATRAN03": "尤里要塞",
  "NAME:CATRAN03X": "特兰西瓦尼亚要塞",
  "NAME:CATRBN": "风力涡轮",
  "NAME:CATRFLG": "土耳其旗帜",
  "NAME:CATS01": "谷仓",
  "NAME:CATSAR": "沙皇大钟",
  "NAME:CATSTAT": "火车站",
  "NAME:CATUR": "科技加农炮阵地",
  "NAME:CATURR": "科技炮台",
  "NAME:CAUAFLG": "乌克兰旗帜",
  "NAME:CAURB01": "电话亭",
  "NAME:CAURB02": "消防栓",
  "NAME:CAURB03": "聚光灯",
  "NAME:CAURB03B": "聚光灯",
  "NAME:CAUSFGL": "美国旗帜",
  "NAME:CAVAL": "骑士中型坦克",
  "NAME:CAVEFLG": "委内瑞拉旗帜",
  "NAME:CAVENT": "排气扇",
  "NAME:CAVHNG": "命运科技机库",
  "NAME:CAVNFLG": "越南旗帜",
  "NAME:CAWA2A": "五角大厦",
  "NAME:CAWA2AX": "五角大楼",
  "NAME:CAWALL": "混凝土墙",
  "NAME:CAWARS": "仓库",
  "NAME:CAWASH01": "白宫",
  "NAME:CAWASH03": "建筑物",
  "NAME:CAWASH04": "建筑物",
  "NAME:CAWASH05": "建筑物",
  "NAME:CAWASH07": "建筑物",
  "NAME:CAWASH08": "建筑物",
  "NAME:CAWASH10": "建筑物　",
  "NAME:CAWASH11": "建筑物",
  "NAME:CAWASH12": "华盛顿纪念碑",
  "NAME:CAWASH13": "建筑物　",
  "NAME:CAWASH15": "林肯纪念馆",
  "NAME:CAWASH16": "史密索尼安城堡",
  "NAME:CAWASH17": "自然历史博物馆",
  "NAME:CAWASH18": "喷水池",
  "NAME:CAWASH18A": "喷泉",
  "NAME:CAWASH19": "胜利纪念碑",
  "NAME:CAWCFLG": "科洛尼亚旗帜",
  "NAME:CAWELL": "井",
  "NAME:CAWHEE": "水车",
  "NAME:CAWIND": "风车",
  "NAME:CAWOAH": "哇！这是一个广告牌",
  "NAME:CAWOOD": "木板",
  "NAME:CAWSH08": "建筑物　",
  "NAME:CAWSH09": "建筑物　",
  "NAME:CAWSH10": "建筑物　",
  "NAME:CAWSH12": "华盛顿纪念碑",
  "NAME:CAWSH14": "杰弗逊纪念馆",
  "NAME:CAWSIR": "华沙美人鱼",
  "NAME:CAWSTA": "白金体育场",
  "NAME:CAWSTT": "控制面板",
  "NAME:CAWT": "水塔",
  "NAME:CAWT01": "水塔",
  "NAME:CAWT01C": "水塔",
  "NAME:CAWTXS": "欢迎来到德克萨斯",
  "NAME:CAYBAN": "厄普西隆旗帜",
  "NAME:CAYUNO": "CnCNet 广告牌",
  "NAME:CAYURST": "尤里的雕像",
  "NAME:CAZOO": "动物园",
  "NAME:CAZOPH": "原版游戏广告牌",
  "NAME:CBLC": "电车",
  "NAME:CBRIS": "太空特种兵",
  "NAME:CCOMAND": "超时空突击队",
  "NAME:CDEST": "海岸巡防艇",
  "NAME:CDOG": "狗",
  "NAME:CEASEFIRE": "停火协议",
  "NAME:CFODDER2": "岛屿战争二",
  "NAME:CHAOSDRONE": "混乱突击车",
  "NAME:CHAOSTOUCH": "迷幻之触",
  "NAME:CHENYING": "程英",
  "NAME:CHINESE": "中国",
  "NAME:CHITZ": "契特卡伊",
  "NAME:CHRONO": "超时空传送",
  "NAME:CHRONO2": "超时空传送 II型",
  "NAME:CHRONOACTIVE": "警报 - 超时空传送仪已经启动 ！",
  "NAME:CHRONOBOOST": "超时空加速",
  "NAME:CHRONODETECT": "警报 - 侦测到超时空传送仪 ！",
  "NAME:CHRONOLIFT": "超时空起重机",
  "NAME:CHRP": "超时空监狱",
  "NAME:CHRTNK": "冥卫坦克",
  "NAME:CIA": "CIA",
  "NAME:CIRCUITBRD": "电路板",
  "NAME:CITADEL": "护城墙",
  "NAME:CITY01": "法院部门",
  "NAME:CITY02": "莱特纳豪华家具",
  "NAME:CITY03": "办公大楼",
  "NAME:CITY04": "Westwood 股市交易所",
  "NAME:CITY05": "太阳日报",
  "NAME:CITY06": "优卡可乐公司",
  "NAME:CITY07": "都市住宅",
  "NAME:CITY08": "伊斯折扣酒吧",
  "NAME:CITY09": "废弃仓库",
  "NAME:CITY10": "都市店面",
  "NAME:CITY11": "候机室",
  "NAME:CITY12": "波士底大厦",
  "NAME:CITY13": "修维美发沙龙",
  "NAME:CITY14": "商业办公室",
  "NAME:CITY15": "第二国家银行",
  "NAME:CITY16": "超高层饭店",
  "NAME:CITY17": "国民住宅",
  "NAME:CITY18": "射手收容所",
  "NAME:CITY19": "斐乐抽水站",
  "NAME:CITY20": "加油帮浦",
  "NAME:CITY21": "加油站招牌",
  "NAME:CITY22": "教堂",
  "NAME:CITYSCAPE": "都市风情",
  "NAME:CIV1": "平民",
  "NAME:CIV2": "平民",
  "NAME:CIV3": "平民",
  "NAME:CIVAN": "超时空伊文",
  "NAME:CIVILIAN": "市民",
  "NAME:CIVILIAN_PLANE": "民航机",
  "NAME:CIVP": "运输机",
  "NAME:CLAIR": "千里眼机器人",
  "NAME:CLAYMORE": "双刃大砍刀",
  "NAME:CLEG": "超时空军团兵",
  "NAME:CLNT": "克林特-西木",
  "NAME:CLUS": "伞兵",
  "NAME:CMIN": "超时空采矿车",
  "NAME:CMISLE": "阿库拉导弹",
  "NAME:CMON": "超时空采矿车（空）",
  "NAME:CMONO": "超时空采矿车（空）",
  "NAME:CNDTNRED": "红色警戒",
  "NAME:CNTR": "百夫长攻城机甲",
  "NAME:CODEBROA": "行动代码：阔刀",
  "NAME:COMA": "战鹰直升机",
  "NAME:COMBINE": "联合收割机",
  "NAME:CONA": "挖掘机",
  "NAME:COND": "苍鹰攻击机",
  "NAME:CONF": "激怒者支援车",
  "NAME:CONFEDERATION": "拉丁同盟",
  "NAME:CONFEDERATIONZ": "拉丁同盟",
  "NAME:CONTP": "平台单位",
  "NAME:CONTR": "建造卡车",
  "NAME:CONVEH": "建设车",
  "NAME:COON": "浣熊悬浮干扰车",
  "NAME:COOPDESC1": "- 德州非军事区 - \n 此为美国与苏联于美国西南的战役。玩家必须将苏联及其古巴盟军赶出德州平原。战役结束于摧毁处于墨西哥边境的苏联要塞。困难度为简易。",
  "NAME:COOPDESC11": "苏联位于古巴的基地，已经对美国本土形成了一定的威胁，所以必须将他们歼灭。指挥官一将指挥我们位于海岸附近的秘密空军基地，而指挥官二将负责严守哈瓦那的城市。",
  "NAME:COOPDESC12": "尤里已经于好莱坞山庄里建造了一座基地，指挥官一将负责洛杉矶附近的区域，指挥官二将负责位于高速公路东方的发电厂与炼油厂区域。",
  "NAME:COOPDESC13": "你已经成功的把尤里及苏联盟军给赶回苏联去了，建立基地以结束这场战争吧。",
  "NAME:COOPDESC2": "- 欧洲剧场 - \n 于东欧轻敲苏联的前门。玩家可以于英国、法国及德国盟军之间做选择，战役结束于攻击穿越苏联边境的主要前哨站。困难度为简易。",
  "NAME:COOPDESC21": "美国人以为他们能守住西雅图，摧毁他们的防御设施，让我们往更荣耀的战争前进吧！指挥官一将指挥我们的海军，而指挥官二则负责准备发动突击战。",
  "NAME:COOPDESC22": "叛徒尤里已经在埃及沙漠重新建造了自己的势力；指挥官一将负责我们位于尼罗河畔的旧基地，而指挥官二必须保护我军位于尤里阵营前线南方的油田。",
  "NAME:COOPDESC23": "看来德国黑森林是我们两方敌人最后的决胜地，而且两方寻找爱因斯坦实验室的行动都徒劳无功。希望这么一来，爱因斯坦可以多争取点机会。情报已经确认了核子反应炉的位置，那一定就是供爱因斯坦实验室所需的动力来源。请据守位置，然后确认敌军位置，并毕其功于一役地其歼灭。",
  "NAME:COOPDESC3": "- 东方守护者 - \n 韩国必须抵抗苏联位于东南亚的侵略。战役最高潮为韩国部队入侵苏联覆雪的东部海岸线。困难度为中等。",
  "NAME:COOPDESC31": "盟军已经于其重要的白宫四周建起防御措施。他们就像遭到惊吓的孩子，躲在的科技武力防护之后。建立您的基地，并终结他们想击退我们的愚蠢想法。",
  "NAME:COOPDESC32": "红军已经窃取了盟军的光棱技术，并试图在犹加敦丛林深处的秘密研究机构中，发展属于他们其自有的光棱塔。我们将对他们的基地发动奇袭，并摧毁红军最后获胜的希望。指挥官一将从小油田的北方出发，指挥官二则从本地机场的东边开始行动。",
  "NAME:COOPDESC33": "盟军与苏联已经联合起来对抗我们了，他们已经在伦敦进行部队的最后集结。指挥官一将控制我们位于城市中的油井铁塔，指挥官二将控制横跨泰晤士河的医院；这场胜利将确定尤里对世界的主宰权。",
  "NAME:COOPDESC4": "- 非洲战神 - \n 攻占位于北非的油田。玩家可控制苏联、伊拉克及利比亚集团对抗欧洲盟军。困难度为中等。",
  "NAME:COOPDESC41": "为了因应苏联的入侵，尤里已经在纽约市的心脏地区建立了两座基地，苏联已经不再接受尤里的控制，并且而与美国建立同盟以对付这个叛徒。",
  "NAME:COOPDESC5": "- 赤色风暴 - \n 玩家可于美军及欧洲盟军间选择，以对抗于北海及分佈于北欧的苏联。战役结束于一场壮观的海战，战场位于冰冷的贝里克海。困难度为困难。",
  "NAME:COPA": "天启坦克原型机",
  "NAME:COPCAR": "警车",
  "NAME:CORONIA": "科洛尼亚侧翼",
  "NAME:COTTER": "尤里的空中要塞",
  "NAME:COW": "乳牛",
  "NAME:COWW": "奶牛",
  "NAME:CRATERCA": "火山谷",
  "NAME:CREAM": "冰淇淋车",
  "NAME:CREVASSE": "裂缝",
  "NAME:CRISISCO": "卡斯沃危机",
  "NAME:CRUISESHIP": "游轮",
  "NAME:CRYO": "冷冻直升机",
  "NAME:CRYOSHOT": "冰锥",
  "NAME:CRYOSPEAR": "冰枪",
  "NAME:CSTLEYURI": "尤里堡",
  "NAME:CTCAR": "集装箱货车",
  "NAME:CTDAM": "水库",
  "NAME:CTECH": "技师",
  "NAME:CTECHM": "技师",
  "NAME:CTNK": "麒麟强袭坦克",
  "NAME:CTOW": "雷达站",
  "NAME:CTRUCK": "运输卡车",
  "NAME:CTVEGA": "织女星金字塔",
  "NAME:CUBANFLAG": "古巴旗帜",
  "NAME:CUBEWRLD": "隔间世界",
  "NAME:CYBO": "半机械人原型",
  "NAME:CYBOV": "半机械人先驱",
  "NAME:CYCL": "独眼装甲巨人",
  "NAME:CYCOM": "半机械特种兵",
  "NAME:CZEP": "基洛夫指挥艇",
  "NAME:DBAT": "恶灵攻击机",
  "NAME:DBMOV": "黑之契约者LOGO广告牌",
  "NAME:DBOAT": "烈蚊自爆快艇",
  "NAME:DDBX": "双层巴士",
  "NAME:DDREC": "距离心灵信标可被占领时间：",
  "NAME:DEATHDOOR": "死亡之门",
  "NAME:DEBRIS": "原材料",
  "NAME:DECOYSQUADRON": "诱饵中队",
  "NAME:DECOYTEAM": "诱饵小队",
  "NAME:DEER": "鹿",
  "NAME:DEPLOY": "部署",
  "NAME:DESERT": "沙漠",
  "NAME:DESO": "朝鲜",
  "NAME:DESO2": "辐射工兵",
  "NAME:DESOR": "辐射根除者",
  "NAME:DEST": "驱逐舰",
  "NAME:DESTH": "地平线驱逐舰",
  "NAME:DESTINATION": "点击此处以选择目标地点",
  "NAME:DESTISIDE": "点击此处以选择你的部队",
  "NAME:DEVI": "迷幻猎手",
  "NAME:DEVIL": "红魔鬼",
  "NAME:DEVO": "巨像",
  "NAME:DEVOD": "巨像",
  "NAME:DEVOURER": "吞并",
  "NAME:DHANDL": "埃列什基伽勒之手",
  "NAME:DHANDR": "埃列什基伽勒之手",
  "NAME:DIGG": "小型挖掘机",
  "NAME:DISK": "入侵飞碟",
  "NAME:DIVER": "爆裂蜂",
  "NAME:DLPH": "海豚",
  "NAME:DMISL": "飞弹",
  "NAME:DMISLE": "无畏导弹",
  "NAME:DMOBUGY": "炸弹吉普车",
  "NAME:DNOA": "暴龙",
  "NAME:DNOAA": "暴龙",
  "NAME:DNOB": "腕龙",
  "NAME:DNOBB": "雷龙",
  "NAME:DOG": "苏联军犬",
  "NAME:DOLY": "摄影车",
  "NAME:DOME": "雷达球",
  "NAME:DOMINACTIVE": "警报 - 心灵支配仪已经启动 ！",
  "NAME:DOMINACTIVEX": "警报 - 大量的心灵能量正在向你所在的位置聚集 ！",
  "NAME:DOMINDETECT": "警报 - 侦测到心灵支配仪 ！",
  "NAME:DOZER": "推土机",
  "NAME:DPFREEZE": "冰原深处",
  "NAME:DRACO": "飞蜥弹射坦克",
  "NAME:DRACOD": "飞蜥炮台无人机",
  "NAME:DRED": "无畏级导弹舰",
  "NAME:DREDB": "无畏级导弹舰",
  "NAME:DREDK": "库兹涅佐夫无畏舰",
  "NAME:DRIL": "钻地运输车",
  "NAME:DRLLTRCK": "钻井车",
  "NAME:DRON": "恐怖机器人",
  "NAME:DRONC": "恐怖机器人",
  "NAME:DRONP": "无人机原型",
  "NAME:DSGNTARG": "标示目标",
  "NAME:DTHVALLEY": "死亡谷",
  "NAME:DTRK": "翻斗车",
  "NAME:DTRUCK": "中国",
  "NAME:DTRUCK2": "自爆卡车",
  "NAME:DUNE": "沙丘骑兵",
  "NAME:DUPL": "增殖机器人",
  "NAME:DUST": "尘旋风支援机",
  "NAME:DYBTR": "恶灵运输机",
  "NAME:E1": "盟军大兵",
  "NAME:E2": "动员兵",
  "NAME:ECNTYSDE": "英国农村",
  "NAME:EDRN": "蜻蜓无人机",
  "NAME:EINS": "爱因斯坦",
  "NAME:EINSTEINLAB": "爱因斯坦实验室",
  "NAME:ELECTRICPULSE": "声呐脉冲",
  "NAME:ELEPHANT": "大象",
  "NAME:ELEVATOR": "电梯",
  "NAME:ELITERESERVES": "精英预备队",
  "NAME:EMC1": "应急车",
  "NAME:EMP": "电磁脉冲",
  "NAME:EMPR": "女娲加农炮",
  "NAME:EMPULS": "电磁脉冲",
  "NAME:ENEMYAIR": "敌军飞行器",
  "NAME:ENEMYSOLDIER": "敌军士兵",
  "NAME:ENEMYSTR": "敌军建筑",
  "NAME:ENEMYVEH": "敌军载具",
  "NAME:ENFO": "光棱攻城兵",
  "NAME:ENGINEER": "盟军工程师",
  "NAME:ENGITEAM": "工程师小队",
  "NAME:ENROUTE": "派遣中",
  "NAME:EPSILON": "厄普西隆",
  "NAME:EPSILONHEADQUATERS": "厄普西隆总部守卫",
  "NAME:ERESREADY": "精英预备队已失效。",
  "NAME:ESDR": "监视者无人机",
  "NAME:ETNK": "斗牛犬轻型坦克",
  "NAME:EUREKA": "优莱卡",
  "NAME:EUROALLIANCE": "欧洲联盟",
  "NAME:EUROPEAN_THEATER": "欧洲剧场",
  "NAME:EXPANDED": "帝国扩充",
  "NAME:EXPPOST": "科技扩张前哨站",
  "NAME:EYGPTIAN": "埃及军火",
  "NAME:EZOMBIE": "被感染的丧尸",
  "NAME:FAAREN": "巨齿鲨强化塔",
  "NAME:FAAVAL": "离子要塞炮",
  "NAME:FABARR": "焚风兵营",
  "NAME:FABARR_B": "兵营升级：轨道舱协议",
  "NAME:FABARR_D": "兵营升级：网络流协议",
  "NAME:FABLST": "爆裂熔炉",
  "NAME:FABOID": "机械造物",
  "NAME:FABTRC": "爆裂战壕",
  "NAME:FACLDP": "穿云尖塔",
  "NAME:FACLDP_B": "穿云尖塔扩展模组",
  "NAME:FACNST": "焚风建造场",
  "NAME:FACOAT": "纳米护甲生成器",
  "NAME:FACOMP": "离子切割机",
  "NAME:FACONF": "迷幻网格",
  "NAME:FACORE": "沃克网核心",
  "NAME:FACYBR": "网络核心",
  "NAME:FACYBR_B": "网络核心扩展模组",
  "NAME:FADBAY": "起降平台",
  "NAME:FADROP": "轨道舱信标",
  "NAME:FAELEV": "暴风起源",
  "NAME:FAFILD": "静滞网格",
  "NAME:FAFNCE": "发电风带",
  "NAME:FAGUAR": "伯劳防空鸟巢",
  "NAME:FAHARB": "先锋导航塔",
  "NAME:FAINHI": "信号抑制器",
  "NAME:FALLENEM": "帝国沦亡",
  "NAME:FAMMIN": "M.A.D. 地雷",
  "NAME:FAMSA": "声波侦测仪",
  "NAME:FANANO": "纳米纤维织机",
  "NAME:FANANO_B": "纳米纤维织机扩展模组",
  "NAME:FAORCI": "虎鲸波动干扰器",
  "NAME:FAPOST": "发电风带",
  "NAME:FARAIL": "轨道炮塔",
  "NAME:FAREFN": "焚风矿石精炼厂",
  "NAME:FAREPR": "资源再生室",
  "NAME:FARM": "拖拉机",
  "NAME:FARWAL": "加固围墙",
  "NAME:FASONI": "声波发射器",
  "NAME:FASPIN": "加速旋塔",
  "NAME:FASWPR": "扫荡者无人机",
  "NAME:FATRAP": "发电风箱",
  "NAME:FATURB": "纳米塑形器",
  "NAME:FAWALL": "防御壁垒",
  "NAME:FAWEAP": "焚风战争工厂",
  "NAME:FAYARD": "焚风海军船坞",
  "NAME:FBOAT": "渔船",
  "NAME:FCAR": "一级方程式赛车",
  "NAME:FDRON": "怒焰地雷无人机",
  "NAME:FENCE": "栅栏",
  "NAME:FENGINEER": "焚风工程师",
  "NAME:FEYRIS": "摩天轮",
  "NAME:FIAT": "马列赫",
  "NAME:FIN": "菲因",
  "NAME:FLAKEY": "浣熊干扰车",
  "NAME:FLAKT": "防空步兵",
  "NAME:FLAMER": "喷火工兵",
  "NAME:FLATA": "火箭载具",
  "NAME:FLATCAR": "平板货车",
  "NAME:FLOAD": "前端装载机",
  "NAME:FLOYD": "弗洛伊德博士",
  "NAME:FLTCAR": "平板货车",
  "NAME:FMCV": "焚风机动建设车",
  "NAME:FOOTWORK": "花式舞步",
  "NAME:FORCESHIELD": "力场护盾",
  "NAME:FORFIRES": "重返森林战",
  "NAME:FORTRESS": "梭鱼轰炸机",
  "NAME:FOX": "狐步舞者战机",
  "NAME:FRANK01": "本游戏模式必须多于一位玩家。",
  "NAME:FRANK02": "本游戏模式必须多于一位人类玩家。",
  "NAME:FRANK03": "本游戏模式必须多于一个小队。",
  "NAME:FRANK04": "必须是注册玩家才能使用本地图。",
  "NAME:FRENCH": "法国",
  "NAME:FRENCHFLAG": "法国旗帜",
  "NAME:FRIDGE": "冷藏车",
  "NAME:FSPEC": "焚风专家",
  "NAME:FTHQ": "命运科技塔",
  "NAME:FTRK": "救火车",
  "NAME:FTRKA": "消防车",
  "NAME:FULLAUTO": "全自动",
  "NAME:FV": "斯特瑞克步兵战车",
  "NAME:GAAIRB": "盟军空军指挥部",
  "NAME:GAAIRC": "盟军空军指挥部",
  "NAME:GAARTY": "已部署的野炮",
  "NAME:GABSTA": "断电武器研究站",
  "NAME:GABUNK": "应急碉堡",
  "NAME:GACIRC": "传送导管",
  "NAME:GACLAB": "实验型传送平台",
  "NAME:GACNST": "盟军建造场",
  "NAME:GACOND": "悖论传导器",
  "NAME:GACPIL": "迷彩机枪碉堡",
  "NAME:GACREM": "超时空传送仪残骸",
  "NAME:GACRYO": "冷冻地雷",
  "NAME:GACRYOS": "冷冻地雷",
  "NAME:GACSAM": "地对空飞弹升级",
  "NAME:GACSPH": "超时空传送仪",
  "NAME:GACSPHH": "超时空传送仪",
  "NAME:GACTWR": "组合塔",
  "NAME:GADEPO": "军械库",
  "NAME:GADEPT": "盟军维修厂",
  "NAME:GADPSA": "已部署的侦测阵列",
  "NAME:GADUMY": "超时空传送仪",
  "NAME:GAENGN": "悖论引擎残骸",
  "NAME:GAFIRE": "火风暴产生器",
  "NAME:GAFSDF": "火风暴围墙",
  "NAME:GAFWLL": "法国围墙",
  "NAME:GAFWLLS": "护城墙",
  "NAME:GAGAP": "黑幕产生器",
  "NAME:GAGARD": "哨塔",
  "NAME:GAGATE_A": "闸门",
  "NAME:GAGREEN": "环保建筑",
  "NAME:GAGUN": "定点炮台",
  "NAME:GAHPAD": "机场",
  "NAME:GAHPADR": "扩展跑道",
  "NAME:GAHYBR": "混合塔",
  "NAME:GAHYPE": "休伯利安防空炮",
  "NAME:GAICBM": "已部署的洲际导弹",
  "NAME:GAKODK": "大熊",
  "NAME:GAMGG": "机动黑幕产生器",
  "NAME:GAMISL": "导弹发射井",
  "NAME:GANODE": "传送节点",
  "NAME:GAOLDCC1": "旧建造厂",
  "NAME:GAOLDCC2": "旧神殿",
  "NAME:GAOLDCC3": "旧武器工厂",
  "NAME:GAOLDCC4": "旧精炼厂",
  "NAME:GAOLDCC5": "旧先进发电厂",
  "NAME:GAOLDCC6": "旧贮槽",
  "NAME:GAOREP": "矿石提纯器",
  "NAME:GAPAVE": "道路",
  "NAME:GAPILE": "盟军兵营",
  "NAME:GAPILL": "机枪碉堡",
  "NAME:GAPLUG1": "威胁等级节点",
  "NAME:GAPLUG2": "搜寻者控制",
  "NAME:GAPLUG3": "离子炮连结",
  "NAME:GAPOWR": "发电厂",
  "NAME:GAPOWRUP": "发电厂升级：动力涡轮",
  "NAME:GARADR": "指挥中心",
  "NAME:GARAIN": "气象晶体",
  "NAME:GAREFN": "盟军矿石精炼厂",
  "NAME:GAROCK": "RPG 升级",
  "NAME:GAROD": "引雷针",
  "NAME:GASAND": "沙袋",
  "NAME:GASCEA": "防御指挥部",
  "NAME:GASCPF": "机器人控制中心",
  "NAME:GASCUS": "空军指挥部升级：空降控制站",
  "NAME:GASILO": "储存槽",
  "NAME:GASNPR": "哨塔",
  "NAME:GASONIC": "天光防空炮",
  "NAME:GASPOT": "灯塔",
  "NAME:GASPYSAT": "间谍卫星",
  "NAME:GASTAS": "火控穹顶",
  "NAME:GATE1": "闸门",
  "NAME:GATECH": "盟军科技中心",
  "NAME:GATECHZ": "科技中心",
  "NAME:GATEEW": "闸门（东西方向）",
  "NAME:GATENE": "闸门（东北方向）",
  "NAME:GATENS": "闸门（南北方向）",
  "NAME:GATESW": "闸门（西南方向）",
  "NAME:GATICK": "已部署的坦克",
  "NAME:GATTCANNON": "加特林机炮",
  "NAME:GATTTANK": "加特林坦克",
  "NAME:GAVULC": "巴尔干炮",
  "NAME:GAWALL": "盟军围墙",
  "NAME:GAWALLS": "混凝土墙",
  "NAME:GAWEAP": "盟军战争工厂",
  "NAME:GAWEAPZ": "盟军战争工厂",
  "NAME:GAWEAT": "天气控制机",
  "NAME:GAYARD": "盟军海军船坞",
  "NAME:GAYARDS": "盟军海军船坞",
  "NAME:GAZEPH": "西风定位机器人",
  "NAME:GBEAR": "灰熊",
  "NAME:GEARCHANGE": "工厂停产维护\n资金增加$3000",
  "NAME:GENE": "基因突变",
  "NAME:GENERAL": "Mental Omega 3.3.X -- Official Rules of Engagement",
  "NAME:GERMANFLAG": "德国旗帜",
  "NAME:GERMANS": "德国",
  "NAME:GGOLEM": "石像机甲",
  "NAME:GHOST": "海豹突击队",
  "NAME:GHTNK": "巨鳄载具",
  "NAME:GIANTBANE": "巨人克星",
  "NAME:GIGA": "巨型怪兽车",
  "NAME:GLACIALSCREEN": "寒冰屏障",
  "NAME:GLOBE": "球状戏院",
  "NAME:GOLDENWIND": "黄金之风",
  "NAME:GOLONG": "前往远方",
  "NAME:GOTTER": "空中要塞伊利卡拉",
  "NAME:GOVER": "政府建筑物",
  "NAME:GRAV": "力神飞碟",
  "NAME:GREATTEMPEST": "顶点暴风",
  "NAME:GREATTEMPESTA": "警报 - 暴风起源已经启动 ！",
  "NAME:GREATTEMPESTNO": "天气操纵已在进行中， 激活失败。",
  "NAME:GREATTEMPESTS": "顶点暴风已经被释放了 ！",
  "NAME:GREECE": "希腊",
  "NAME:GRINDER": "粉碎回收厂",
  "NAME:GRND": "机动粉碎机",
  "NAME:GROOMER": "压雪机",
  "NAME:GRUMBLE": "轰鸣防空导弹",
  "NAME:GTGCAN": "法国",
  "NAME:GTOURN1": "德国锦标赛一",
  "NAME:GTOURN2": "德国锦标赛二",
  "NAME:GUARDIANGI": "守卫大兵",
  "NAME:GUARDIANS_OF_THE_EAST": "东方守卫者",
  "NAME:GYRO": "旋翼飞行兵",
  "NAME:HAIHEAD": "狂鲨先锋",
  "NAME:HARBINGER": "先锋炮艇机",
  "NAME:HARBSTRIKE": "先锋炮艇机空袭",
  "NAME:HARDDECK": "硬仗",
  "NAME:HARLEMHO": "哈林区集散地",
  "NAME:HARP": "弓箭手",
  "NAME:HARV": "武装采矿车",
  "NAME:HARVESTE": "收割者家园",
  "NAME:HAVOC": "大浩劫",
  "NAME:HBIRD": "蜂鸟支援机",
  "NAME:HCAN": "九头蛇炮",
  "NAME:HCRUIS": "三叉戟战列舰",
  "NAME:HEADQUATERS": "总部守卫",
  "NAME:HEATWAVE": "热浪",
  "NAME:HEPH": "冥府守护神",
  "NAME:HFTK": "半履带车",
  "NAME:HID": "鹿角重型直升机",
  "NAME:HIGHEXPR": "烈性炸药",
  "NAME:HIJACKER": "劫持者",
  "NAME:HIJACKERS": "空降劫持者",
  "NAME:HINATECH": "中国军事司令部",
  "NAME:HIND": "雌鹿运输直升机",
  "NAME:HITDECK": "浪拍甲板",
  "NAME:HKAMAZ": "重型卡玛兹卡车",
  "NAME:HMMV": "武装悍马车",
  "NAME:HORNET": "黄蜂无人机",
  "NAME:HORNETE": "黄蜂无人机",
  "NAME:HORV": "武装采矿车",
  "NAME:HORVV": "武装采矿车",
  "NAME:HORVZ": "武装采矿车（空）",
  "NAME:HOVERTANK": "河童悬浮坦克",
  "NAME:HOWI": "西风火炮",
  "NAME:HTK": "半履带车",
  "NAME:HTNK": "犀牛重型坦克",
  "NAME:HUNTERSEEKER": "猎杀机器人（最多5架）",
  "NAME:HUNTERSEEKERB": "猎杀机器人",
  "NAME:HUNTR": "女猎手",
  "NAME:HURR": "长生鸟空中哨站",
  "NAME:HVR": "盘旋猴",
  "NAME:HYD": "海蝎",
  "NAME:HYENA": "鬣狗",
  "NAME:IAMTHELAW": "火星戒严令",
  "NAME:ICBM": "白杨M发射台",
  "NAME:ICBMROCKET": "白杨M导弹",
  "NAME:ICE_AGE": "冰河时代",
  "NAME:IDRAG": "铁龙坦克",
  "NAME:INCOMING": "终极入侵",
  "NAME:INDUSTRIALPLANT": "工业工厂",
  "NAME:INFC": "感染者",
  "NAME:INIT": "新兵",
  "NAME:INTROMOVIE": "开场动画",
  "NAME:INTRUDER": "渗透者",
  "NAME:INVADER": "入侵飞碟",
  "NAME:ION": "离子炮",
  "NAME:IPBM": "死神之手洲际导弹",
  "NAME:IRAQFLAG": "伊拉克旗帜",
  "NAME:IRAQZ": "伊拉克",
  "NAME:IRON": "无敌",
  "NAME:IRONACTIVE": "警报 - 铁幕装置已经启动 ！",
  "NAME:IRONDETECT": "警报 - 侦测到铁幕装置 ！",
  "NAME:IRONWING": "铁翼喷气机",
  "NAME:IRRADIATEBETA": "放射性装甲贝塔",
  "NAME:IRRADIATEGAMMA": "放射性装甲伽马",
  "NAME:IRVINECA": "加州，尔湾",
  "NAME:ISLANDRU": "海岛遗迹",
  "NAME:ISLEOLAND": "陆地上的小岛",
  "NAME:ITNK": "传播坦克",
  "NAME:IVAN": "疯狂伊文",
  "NAME:JACKAL": "豺狼突击载具",
  "NAME:JEEP": "吉普车",
  "NAME:JEEPP": "吉普车",
  "NAME:JOSH": "猴子",
  "NAME:JTNK": "捷豹战斗坦克",
  "NAME:JUDGEMENT": "审判",
  "NAME:JUMPJET": "火箭飞行兵",
  "NAME:KAMAZ": "卡玛兹卡车",
  "NAME:KANGAROO": "袋鼠",
  "NAME:KAOS": "毒爆虱",
  "NAME:KENNL": "狗窝",
  "NAME:KICKASS": "特攻要塞",
  "NAME:KINETICBARRIER": "动能屏障",
  "NAME:KINGS": "皇家骑兵",
  "NAME:KINGSNAKES": "王蛇战机",
  "NAME:KIS": "金川工业科学家",
  "NAME:KNIGHT": "铁骑兵",
  "NAME:KNIGHTFALL": "天降神兵",
  "NAME:KOREAFLAG": "韩国旗帜",
  "NAME:KOREAFLAGX": "韩国旗帜",
  "NAME:KRUKOV": "库可夫",
  "NAME:KSNK": "重型坦克",
  "NAME:KSTARF": "空袭",
  "NAME:KTOURN1": "韩国锦标赛一",
  "NAME:KTOURN2": "韩国锦标赛二",
  "NAME:LANCER": "长枪战士",
  "NAME:LANDACCE": "禁区",
  "NAME:LANDORSEA": "靠山或靠海",
  "NAME:LASHER": "鞭打者轻型坦克",
  "NAME:LASTBASTION": "最后堡垒",
  "NAME:LATINCONFEDERATION": "拉丁同盟",
  "NAME:LCRF": "旅行者运输艇",
  "NAME:LCRFB": "旅行者运输艇",
  "NAME:LEVI": "利维坦无人机母舰",
  "NAME:LEVIA": "利维坦无人机",
  "NAME:LEVIDET": "警报 - 一架先锋炮艇机已经进入战场 ！",
  "NAME:LGHTCAVL": "轻骑兵",
  "NAME:LIBRA": "天秤",
  "NAME:LIBRACLONES": "天秤复制人",
  "NAME:LIBRC": "天秤复制人",
  "NAME:LIMO": "豪华轿车",
  "NAME:LIMOW": "豪华轿车",
  "NAME:LION": "狮子",
  "NAME:LIONH": "狮心王轰炸机",
  "NAME:LOCOMOTIVE": "火车",
  "NAME:LOGL": "木材装载机",
  "NAME:LONDONFL": "伦敦沦陷",
  "NAME:LONGBOW": "长弓直升机",
  "NAME:LONGNIGHT": "最长的一夜",
  "NAME:LOSTWRLD": "世界遗忘的时间",
  "NAME:LTNK": "轻坦克",
  "NAME:LUNR": "月球飞行兵",
  "NAME:LYBIAFLAG": "利比亚旗帜",
  "NAME:LYBIAFLAGG": "利比亚旗帜",
  "NAME:MACK": "洒水车",
  "NAME:MAD": "M.A.D.M.A.N.\n-部署自爆-",
  "NAME:MADMINE": "M.A.D.地雷",
  "NAME:MADU": "M.A.D.坦克",
  "NAME:MAGNET": "磁力射线",
  "NAME:MAGNETRON": "磁控坦克",
  "NAME:MAINT": "建筑维护",
  "NAME:MALARIA": "疟疾",
  "NAME:MAMM": "天启坦克",
  "NAME:MAMU": "猛犸坦克",
  "NAME:MANTA": "魔鬼鱼无人防空舰",
  "NAME:MARA": "掠夺者坦克",
  "NAME:MASTERMIND": "心灵之主",
  "NAME:MAYAN": "玛雅金字塔",
  "NAME:MAYANP": "玛雅金字塔",
  "NAME:MAYANRUIN": "玛雅遗迹",
  "NAME:MAYANRUINS": "玛雅遗迹",
  "NAME:MAYANTEMPLE": "玛雅神殿",
  "NAME:MECHA": "天狗机器人",
  "NAME:MEGA": "巨齿鲨机甲",
  "NAME:MEGAARENA": "巨齿鲨竞技场",
  "NAME:MERCURY": "墨丘利卫星系统终端",
  "NAME:MERCURYSTRIKE": "墨丘利激光打击",
  "NAME:MGG": "机动黑幕产生器",
  "NAME:MGTK": "幻影坦克",
  "NAME:MIG2": "米格战机",
  "NAME:MIGSPY": "米格运输机",
  "NAME:MIND": "心灵之主",
  "NAME:MINDHAZE": "暗影环绕",
  "NAME:MINEDROP": "空降部队",
  "NAME:MIXER": "混凝土搅拌车",
  "NAME:MNKYTREX": "卧猴藏暴龙",
  "NAME:MODEV": "心灵终结仪",
  "NAME:MOJODOJO": "魔法道场",
  "NAME:MOJOLAND": "魔法降临",
  "NAME:MOJORISE": "魔法重现",
  "NAME:MOJOSPIRIT": "魔法一号之魂",
  "NAME:MOMOV": "命令与征服广告牌",
  "NAME:MONKEY": "猴子",
  "NAME:MONSTERCOME": "距离苏俄巨兽天启坦克抵达时间：",
  "NAME:MONSTERM": "怪兽电影",
  "NAME:MOONBREA": "月球破碎机",
  "NAME:MOONDROP": "月球空投",
  "NAME:MOONPATR": "月球巡礼",
  "NAME:MORALES": "莫拉莱斯",
  "NAME:MOSAC": "利维坦无人机",
  "NAME:MOTHRA": "侦察乌鸦",
  "NAME:MOTOR": "火炮机车",
  "NAME:MOTORAMBUSH": "火炮机车突袭",
  "NAME:MSA": "机动声波侦测仪",
  "NAME:MTNK": "骑士中型坦克",
  "NAME:MTRUCK": "怪物卡车",
  "NAME:MUMY": "木乃伊",
  "NAME:MUTATION": "基因震爆",
  "NAME:MVAN": "小型货车",
  "NAME:MWF": "斯大林之拳",
  "NAME:NAAIRB": "苏联空军基地",
  "NAME:NAAPWR": "先进发电厂",
  "NAME:NAAZT1": "阿兹特克神庙",
  "NAME:NABNKR": "战斗碉堡",
  "NAME:NABNKRR": "战斗碉堡",
  "NAME:NACLON": "克隆缸",
  "NAME:NACNST": "苏联建造场",
  "NAME:NACSTB01": "废弃的矿石精炼厂",
  "NAME:NADEPT": "苏联维修工厂　",
  "NAME:NADIST": "裂解防空塔",
  "NAME:NADRON": "维修起重机",
  "NAME:NAEMPS": "电磁脉冲控制站",
  "NAME:NAFBUR": "战地情报局",
  "NAME:NAFIST": "前线战争工厂",
  "NAME:NAFLAK": "高射炮",
  "NAME:NAFLMT": "烈焰炮塔",
  "NAME:NAFNCE": "激光防护部队",
  "NAME:NAFTUR": "烈焰炮塔",
  "NAME:NAFURY": "怒焰地雷",
  "NAME:NAGRUM": "轰鸣防空导弹",
  "NAME:NAHAMM": "地锤防御装置",
  "NAME:NAHAND": "苏联兵营",
  "NAME:NAHOSP": "医疗碉堡",
  "NAME:NAHPAD": "直升机坪",
  "NAME:NAINDP2": "工业工厂",
  "NAME:NAIRDM": "钢铁守卫",
  "NAME:NAIRON": "铁幕装置",
  "NAME:NALASR": "哨戒机炮",
  "NAME:NAMISL": "战术核弹发射井",
  "NAME:NAMORT": "烟雾炮台",
  "NAME:NANANA": "纳米离心机",
  "NAME:NANOCHARGE": "纳米回复场",
  "NAME:NANOFIBER": "纳米纤维同步",
  "NAME:NANRCT": "核子反应炉",
  "NAME:NANRCTUP": "核能转换器",
  "NAME:NAPALMSTORE": "燃烧弹仓库",
  "NAME:NAPOST": "激光防护站",
  "NAME:NAPOWR": "磁能反应炉",
  "NAME:NAPSIS": "心灵探测器",
  "NAME:NAPSYA": "心灵控制增幅器",
  "NAME:NAPSYB": "心灵信标",
  "NAME:NAPSYB1": "不明建筑物",
  "NAME:NAPSYB2": "心灵信标",
  "NAME:NAPSYBB": "心灵信标",
  "NAME:NAPSYBK": "心灵信标",
  "NAME:NAPSYD": "心灵控制增幅器残骸",
  "NAME:NAPULS": "电磁炮",
  "NAME:NARADR": "雷达站",
  "NAME:NARADRB": "雷达站",
  "NAME:NARDRD": "高级雷达站",
  "NAME:NARECL": "维修设施",
  "NAME:NAREFN": "苏联矿石精炼厂",
  "NAME:NASAM": "爱国者防空导弹",
  "NAME:NASAMM": "爱国者防空导弹",
  "NAME:NASCOM": "侦测塔",
  "NAME:NASTLH": "匿踪产生器",
  "NAME:NATBNK": "坦克碉堡",
  "NAME:NATBNKK": "坦克碉堡",
  "NAME:NATBUNKER": "速成坦克碉堡",
  "NAME:NATECH": "宫殿",
  "NAME:NATECHC": "作战实验室",
  "NAME:NATECHZ": "宫殿",
  "NAME:NATEK": "原子核心",
  "NAME:NATRAP": "EMP地雷",
  "NAME:NATRAPS": "EMP地雷",
  "NAME:NATTCH": "改良科技中心",
  "NAME:NATUNE": "隧道入口",
  "NAME:NATUNH": "隧道枢纽",
  "NAME:NAUT": "鹦鹉螺磁力潜艇",
  "NAME:NAWALL": "要塞墙",
  "NAME:NAWALLS": "要塞墙",
  "NAME:NAWAST": "废弃物处理设施",
  "NAME:NAWEAP": "苏联战争工厂",
  "NAME:NAWEAPZ": "苏联战争工厂",
  "NAME:NAYARD": "苏联海军船坞",
  "NAME:NAYARDS": "苏联海军船坞",
  "NAME:NEUTRAL": "平民",
  "NAME:NMIN": "矿甲虫",
  "NAME:NUCLEARPATH": "核能奔涌",
  "NAME:NUKE": "战术核弹攻击",
  "NAME:NUKEACTIVE": "警报 - 战术核弹已经发射 ！",
  "NAME:NUKEDETECT": "警报 - 侦测到战术核弹发射井 ！",
  "NAME:OASIS": "绿洲",
  "NAME:OBSERVER": "观察者",
  "NAME:OILTANKER": "油轮",
  "NAME:OILTRUCK": "油罐车",
  "NAME:OPNGTSTK": "军事行动：骑士潜行者",
  "NAME:OPPOSEFRCE": "敌对势力",
  "NAME:OPRATANN": "军事行动：歼灭战",
  "NAME:OPRATDEA": "军事行动：至死方休",
  "NAME:ORCA": "鹞式战机",
  "NAME:ORCATRAN": "黑鸥运输机损坏版",
  "NAME:ORCIN": "虎鲸波动干扰器",
  "NAME:ORETRUCK": "忧郁的矿车司机",
  "NAME:OVERCHARGE": "磁能过载",
  "NAME:OXID": "氧化者防空支援车",
  "NAME:PACIFICFRONT": "太平洋阵线",
  "NAME:PACKATTACK": "辐射四联空袭",
  "NAME:PALADIN": "铁龙坦克",
  "NAME:PALADINAID": "圣骑士增援",
  "NAME:PANTHER": "圣骑士猎杀坦克",
  "NAME:PARA": "美国",
  "NAME:PARA2": "空降部队",
  "NAME:PARA3": "伞兵",
  "NAME:PARTS": "组合元件",
  "NAME:PASPLN": "客机",
  "NAME:PATHTAKEN": "寻常路径",
  "NAME:PCOMMANDO": "心灵突击队",
  "NAME:PCV": "厄普西隆机动建设车",
  "NAME:PDPLANE": "运输机",
  "NAME:PDPLANEZ": "运输机",
  "NAME:PENTGENX": "将军",
  "NAME:PERUN": "佩龙旗舰",
  "NAME:PETCMETRY": "宠物墓园",
  "NAME:PHNT": "幻光多管火箭炮",
  "NAME:PICK": "小货车",
  "NAME:PICKK": "皮卡货车",
  "NAME:PIG": "猪",
  "NAME:PIGCAR": "警车",
  "NAME:PILL": "机枪碉堡",
  "NAME:PIRANHA": "食人鱼迷你潜艇",
  "NAME:PLAG": "瘟疫投石机",
  "NAME:PLOW": "扫雪车",
  "NAME:POLARB": "北极熊",
  "NAME:POLARBEAR": "北极熊",
  "NAME:POLAROP": "两极反应",
  "NAME:POLISHFLAG": "波兰旗帜",
  "NAME:POST": "风带核心",
  "NAME:PRES": "总统",
  "NAME:PRESD": "杜根总统",
  "NAME:PRISONER": "囚车",
  "NAME:PROME": "乳齿象坦克",
  "NAME:PROPA": "宣传车",
  "NAME:PROPPL": "螺旋桨飞机",
  "NAME:PROPTR": "广播卡车",
  "NAME:PROS": "异教",
  "NAME:PROTOPCV": "机动建设车原型",
  "NAME:PSICORPS": "心灵军团",
  "NAME:PSOLDIER": "心灵能力者",
  "NAME:PSYBREADY": "距离心灵信标准备完成时间：",
  "NAME:PSYBREADYCAMP": "距离心灵信标启动时间：",
  "NAME:PSYCHICFLASH": "心灵之火",
  "NAME:PSYCHICFLASHB": "超能心灵火",
  "NAME:PSYCHICWAVE": "心灵控制脉冲",
  "NAME:PSYD": "心灵支配",
  "NAME:PSYREVEAL": "启示",
  "NAME:PTBLANK": "空白区域",
  "NAME:PTROOP": "超能力部队",
  "NAME:PU": "Ï",
  "NAME:QTNK": "螳螂拼装坦克",
  "NAME:QUAD": "迷雾机动车",
  "NAME:QUETZ": "风神翼龙",
  "NAME:QUICK": "跃迁载具",
  "NAME:RACC": "浣熊干扰车",
  "NAME:RADATTACK": "辐射空袭",
  "NAME:RAGAAAGUN": "老式防空炮",
  "NAME:RAGAAPP": "老式盟军先进发电厂",
  "NAME:RAGABARR": "老式盟军兵营",
  "NAME:RAGADOME": "老式盟军雷达球",
  "NAME:RAGAFACT": "老式盟军战争工厂",
  "NAME:RAGAPDOX": "老式超时空传送仪",
  "NAME:RAGAPWR": "老式盟军发电厂",
  "NAME:RAGAREF": "老式盟军矿石精炼厂",
  "NAME:RAGARGAP": "老式黑幕产生器",
  "NAME:RAGE": "狂暴",
  "NAME:RAGEACTIVE": "警报 - 狂暴激发器已经启动 ！",
  "NAME:RAGEDETECT": "警报 - 侦测到狂暴激发器 ！",
  "NAME:RAGEINDUCTOR": "狂暴激发器",
  "NAME:RAIL": "轨道炮战士",
  "NAME:RAMW": "公羊",
  "NAME:RANAAPP": "老式苏联高级发电厂",
  "NAME:RANACONY": "老式建造场",
  "NAME:RANADOME": "老式苏联雷达球",
  "NAME:RANADPT": "老式维修厂",
  "NAME:RANAFACT": "老式苏联战争工厂",
  "NAME:RANAFLMT": "老式火焰炮塔",
  "NAME:RANAHELI": "老式直升机坪",
  "NAME:RANAICUR": "老式铁幕装置",
  "NAME:RANAPILE": "老式苏联兵营",
  "NAME:RANAPWR": "老式苏联发电厂",
  "NAME:RANAREF": "老式苏联矿石精炼厂",
  "NAME:RANASAIR": "老式苏联机场",
  "NAME:RANASAMT": "老式防空导弹",
  "NAME:RANATCOIL": "老式磁暴线圈",
  "NAME:RANATEK": "老式苏联科技中心",
  "NAME:RANGER": "巡逻车",
  "NAME:RAVA": "德拉库夫机动监狱",
  "NAME:RAVENS": "侦察乌鸦",
  "NAME:RDROLLER": "压路机",
  "NAME:REACTARM": "反应装甲",
  "NAME:REAP": "收割巡逻艇",
  "NAME:RECON": "扫描无人机",
  "NAME:RECONSORTIE": "侦察扫描",
  "NAME:REDBUS": "巴士",
  "NAME:RED_STORM": "赤色风暴",
  "NAME:REGENDRUGS": "恢复剂",
  "NAME:REINFOPAD": "增援空降",
  "NAME:REJU": "空中维修机",
  "NAME:RELAY": "老式雷达球",
  "NAME:RELEASE": "释放",
  "NAME:REPORT": "战场报告：",
  "NAME:REPORTE": "状况评估：",
  "NAME:REPORTR": "拉什迪的讯息：",
  "NAME:REPORTX": "？？？的讯息：",
  "NAME:REPORTY": "尤里的讯息：",
  "NAME:REPU": "磁震恶徒",
  "NAME:RESO": "幽灵采矿车",
  "NAME:RESP": "瘟神弹道潜艇",
  "NAME:REZNOV": "雷泽诺夫",
  "NAME:RHAD": "拉什迪",
  "NAME:RIOT": "市民动乱",
  "NAME:RIOTT": "镇暴部队",
  "NAME:RISEN": "速成方尖碑",
  "NAME:RIVERRAI": "大河逆袭",
  "NAME:RIVERRAM": "大河奔流",
  "NAME:RJAM": "雷达干扰",
  "NAME:RMNV": "罗曼诺夫总理",
  "NAME:ROADR": "走鹃活动炸弹",
  "NAME:ROBO": "机器人坦克",
  "NAME:ROBOCONT": "机器人控制中心",
  "NAME:ROBOTANK": "机器人坦克",
  "NAME:ROLLER": "蒸汽压路机",
  "NAME:RUINER": "压制飞碟",
  "NAME:RUNNINGT": "中世纪武士决战",
  "NAME:RUSSIANFLAG": "苏俄旗帜",
  "NAME:RUSSIANS": "苏维埃社会主义共和国联盟",
  "NAME:RVIEW": "远端观看",
  "NAME:SA": "苏联特工",
  "NAME:SALA": "火蜥蜴空中战舰",
  "NAME:SANDBAGS": "沙袋",
  "NAME:SAPC": "野牛运输艇",
  "NAME:SAPCB": "野牛运输艇",
  "NAME:SARINFAC": "白磷工厂",
  "NAME:SATHACK": "卫星侵入",
  "NAME:SAVG": "蛮兽人",
  "NAME:SBTR": "破坏者",
  "NAME:SCAR": "猛虎装甲运输车",
  "NAME:SCARSOFS": "苏格兰之痛",
  "NAME:SCAV": "暴君",
  "NAME:SCDROCKET": "飞毛腿导弹",
  "NAME:SCHP": "劫掠者武装直升机",
  "NAME:SCOMA": "梦魇特种兵",
  "NAME:SCORPIONCELL": "天蝎组织",
  "NAME:SCRG": "天灾突袭兵",
  "NAME:SCTR": "飞毛腿导弹运输车",
  "NAME:SCUD": "飞毛腿导弹发射车",
  "NAME:SCUD2": "火箭",
  "NAME:SCUDTRANSPORT": "飞毛腿导弹运输车",
  "NAME:SDOG": "苏联军犬",
  "NAME:SDOZ": "小型推土机",
  "NAME:SDRN": "维修无人机",
  "NAME:SDRNS": "双子维修机",
  "NAME:SEAL": "海豹突击队",
  "NAME:SEAT": "海猫运输艇",
  "NAME:SECRETSERVICE": "秘密保镖",
  "NAME:SEEKERD": "风神无人机",
  "NAME:SEITAAD": "塞泰龙弩炮",
  "NAME:SEIZER": "恶灵摄魂师",
  "NAME:SEL": "海豹",
  "NAME:SELECT": "选择",
  "NAME:SENGINEER": "苏联工程师",
  "NAME:SENT": "哨兵防空车",
  "NAME:SFB237I": "圣达菲B23-7",
  "NAME:SFC408WL": "圣达菲C40-8W",
  "NAME:SFCAB": "圣达菲守车",
  "NAME:SFCF7R": "圣达菲CF7",
  "NAME:SFGP50L": "圣达菲GP-50",
  "NAME:SFGP60L": "圣达菲GP60M",
  "NAME:SFV": "斯特瑞克步兵战车",
  "NAME:SHAD": "千里马运输直升机",
  "NAME:SHADOW": "魔影坦克",
  "NAME:SHADOWRING": "暗影环绕",
  "NAME:SHARK": "扁鲨迷幻潜艇",
  "NAME:SHATTERE": "碎列的遗迹",
  "NAME:SHEEP": "公羊",
  "NAME:SHINBOT": "新型长剑毁灭装甲",
  "NAME:SHK": "磁暴步兵",
  "NAME:SHOCK": "闪流步兵",
  "NAME:SHRAY": "沙德雷聚波坦克",
  "NAME:SHRIKE": "伯劳防空无人机",
  "NAME:SHUTTLE": "太空舱",
  "NAME:SIBERIAN": "西伯利亚荒原",
  "NAME:SIBFIN": "菲因",
  "NAME:SICALI": "阿利兹",
  "NAME:SIEGECHOPPER": "劫掠者武装直升机",
  "NAME:SIEGFRIED": "西格弗里德",
  "NAME:SIGJAM": "信号干扰",
  "NAME:SILOARMED": "武装飞弹发射台",
  "NAME:SINKSWIM": "成事在人",
  "NAME:SIREN": "塞壬护卫舰",
  "NAME:SLAV": "工人",
  "NAME:SLHYT": "龙雕像",
  "NAME:SMAMM": "超级天启坦克",
  "NAME:SMCV": "苏联机动建设车",
  "NAME:SMIN": "奴隶采矿车",
  "NAME:SMOB": "雪地机动车",
  "NAME:SMOKEBOMBS": "烟雾弹空袭",
  "NAME:SNAKE": "王蛇战机",
  "NAME:SNIPE": "英国",
  "NAME:SNIPE2": "狙击手",
  "NAME:SNOW": "雪地",
  "NAME:SONARPULSE": "声呐脉冲",
  "NAME:SOV01": "军事行动：红色黎明",
  "NAME:SOV01MD": "军事行动：时空转移",
  "NAME:SOV01MDSAV": "苏联 01 - 时空转移",
  "NAME:SOV02": "军事行动：危机四伏",
  "NAME:SOV02MD": "军事行动：似曾相识",
  "NAME:SOV02MDSAV": "苏联 02 - 似曾相识",
  "NAME:SOV03": "军事行动：大苹果",
  "NAME:SOV03MD": "军事行动：洗脑行动",
  "NAME:SOV03MDSAV": "苏联 03 - 洗脑行动",
  "NAME:SOV04": "军事行动：家乡前线",
  "NAME:SOV04MD": "军事行动：北非谍影",
  "NAME:SOV04MDSAV": "苏联 04 - 北非谍影",
  "NAME:SOV05": "军事行动：灯火之城",
  "NAME:SOV05MD": "军事行动：脱离地心引力",
  "NAME:SOV05MDSAV": "苏联 05 - 脱离地心引力",
  "NAME:SOV06": "军事行动：划分",
  "NAME:SOV06MD": "军事行动：飞向月球",
  "NAME:SOV06MDSAV": "苏联 06 - 飞向月球",
  "NAME:SOV07": "军事行动：超时空防御战",
  "NAME:SOV07MD": "军事行动：首脑游戏",
  "NAME:SOV07MDSAV": "苏联 07 - 首脑游戏",
  "NAME:SOV08": "军事行动：首都之辱",
  "NAME:SOV09": "军事行动：狐狸与猎犬",
  "NAME:SOV10": "军事行动：残兵败将",
  "NAME:SOV11": "军事行动：红色革命",
  "NAME:SOV12": "军事行动：北极风暴　",
  "NAME:SOVFINALE": "苏联终场",
  "NAME:SOVFINALMOVIE": "苏联胜利",
  "NAME:SOVGEN": "苏联将军",
  "NAME:SOVIETS": "苏联",
  "NAME:SOV_COOP": "苏联战役",
  "NAME:SPACEENGINEER": "太空工程师",
  "NAME:SPECIAL": "治安官",
  "NAME:SPIN": "加速旋塔",
  "NAME:SPOOK": "精怪",
  "NAME:SPORT": "跑车",
  "NAME:SPY": "间谍",
  "NAME:SPYP": "侦察机",
  "NAME:SPYSAT": "侦察卫星",
  "NAME:SQD": "巨型乌贼",
  "NAME:SQUEAKYA": "未上油的轴",
  "NAME:SREF": "光棱坦克",
  "NAME:STALKER": "梦魇行者",
  "NAME:STALL": "千里马运输直升机",
  "NAME:STARDUST": "悖论引擎",
  "NAME:STATNTAR": "静止目标",
  "NAME:STEAM": "机车",
  "NAME:STEINSTECH": "命运科技实验室",
  "NAME:STINGER": "毒刺无人载具",
  "NAME:STLN": "史泰龙",
  "NAME:STNK": "奥普斯定制坦克",
  "NAME:STOREROOM": "贮藏室",
  "NAME:STORM": "闪电风暴",
  "NAME:STORMABORT": "天气操纵已在进行中， 激活失败。",
  "NAME:STORMACTIVE": "警报 - 闪电风暴正在接近 ！",
  "NAME:STORMDETECT": "警报 - 侦测到天气控制机 ！",
  "NAME:STORMSIEGE": "暴风雨攻城战",
  "NAME:STPARADE": "游行大街",
  "NAME:STRM": "风暴之子战机",
  "NAME:SUB": "台风攻击潜艇",
  "NAME:SUBX": "台风攻击潜艇",
  "NAME:SUPPLIES": "补给",
  "NAME:SUPR": "反转士",
  "NAME:SURVIVAL": "你需要存活的时间：",
  "NAME:SWAT1": "SWAT卡车",
  "NAME:SWAT2": "SWAT货车",
  "NAME:SWEEPERDROP": "空降扫荡者无人机",
  "NAME:SWLF": "海狼炮艇",
  "NAME:SWORD": "剑鱼护卫舰",
  "NAME:SWPR": "扫荡者无人机",
  "NAME:SYCKLE": "镰刃摩托车",
  "NAME:SYNC": "同步浪人",
  "NAME:SYNC_N": "同步忍者",
  "NAME:TAMPICOT": "坦皮克之伤",
  "NAME:TANKDROP": "空降坦克",
  "NAME:TANYA": "谭雅",
  "NAME:TAPIR": "貘",
  "NAME:TARCHIA": "多智龙火炮",
  "NAME:TARGET": "目标",
  "NAME:TARGETPAINTER": "目标锁定",
  "NAME:TAXI": "计程车",
  "NAME:TAXII": "出租车",
  "NAME:TECHMISSILE": "导弹攻击",
  "NAME:TEMPDETECT": "警报 - 侦测到暴风起源 ！",
  "NAME:TEMPERATE": "温和",
  "NAME:TENGU": "长剑步兵装甲",
  "NAME:TERA": "雷鸟无人防空车",
  "NAME:TERRAINF": "地形景观",
  "NAME:TERROR": "拉丁同盟",
  "NAME:TERRORDROP": "恐怖机器人降临",
  "NAME:TERRORIST": "伊文实习兵",
  "NAME:TESLA": "磁暴线圈",
  "NAME:TESLATER": "终极特斯拉",
  "NAME:TESTERSMAP": "测试员地图",
  "NAME:TEXAS_DMZ": "德州非军事区",
  "NAME:TGELIMIN": "目标歼灭",
  "NAME:THOR": "雷神炮艇",
  "NAME:THORX": "超级雷神炮艇",
  "NAME:TICKTRAP": "毒爆虱陷阱",
  "NAME:TIGER": "老虎",
  "NAME:TIMEFREEZE": "时间静止",
  "NAME:TNKD": "德国",
  "NAME:TNKKIL": "坦克歼击车",
  "NAME:TNKRSHHR": "坦克尖峰时刻",
  "NAME:TOTEM": "图腾",
  "NAME:TOW": "拖车",
  "NAME:TOWERTRO": "麻烦之塔",
  "NAME:TOXICSTRIKE": "剧毒空袭",
  "NAME:TRACTOR": "清道夫坦克",
  "NAME:TRAINCAR": "教练车",
  "NAME:TRANSYLV": "外西维亚的麻烦",
  "NAME:TRASH": "垃圾车",
  "NAME:TRBLWTR": "恶水",
  "NAME:TRGTACQRD": "正中目标",
  "NAME:TRIKE": "极速三轮摩托车",
  "NAME:TRINCAR": "列车车厢",
  "NAME:TRKO": "卡车",
  "NAME:TRN01": "新兵训练营 - 第一天",
  "NAME:TRN02": "新兵训练营 - 第二天",
  "NAME:TRNOFLIE": "谎言锦标赛",
  "NAME:TRNSPORT": "运输机",
  "NAME:TRUCKA": "卡车",
  "NAME:TRUCKAA": "卡车（空）",
  "NAME:TRUCKB": "卡车（载货）",
  "NAME:TRUCKBB": "卡车（载货）",
  "NAME:TTNK": "苏维埃社会主义共和国联盟",
  "NAME:TTNK2": "磁能巡航坦克",
  "NAME:TU16": "沙暴支援机",
  "NAME:TUGBOAT": "拖船",
  "NAME:UKFLAG": "英国旗帜",
  "NAME:UMIN": "极限采矿车",
  "NAME:UMON": "极限采矿车（空）",
  "NAME:UNANSCHA": "不接受挑战",
  "NAME:UNDER": "马尔翁",
  "NAME:UNFAIRAD": "不平等优势",
  "NAME:UNITEDSTATES": "美国",
  "NAME:UNITEDSTATESOFAMERICA": "美利坚合众国",
  "NAME:UNKNOWN": "未知目标",
  "NAME:UNREPENT": "顽冥不灵",
  "NAME:URAGAN": "乌拉甘",
  "NAME:URBAN": "都市",
  "NAME:URBRENEWAL": "都市重建计划",
  "NAME:USSR": "苏维埃俄罗斯",
  "NAME:UTOPIA": "乌托邦载具",
  "NAME:V2": "V2火箭发射车",
  "NAME:V2ROCKET": "V2火箭",
  "NAME:V3": "V3 火箭发射车",
  "NAME:V3ROCKET": "V3 火箭",
  "NAME:VALHALLA": "瓦尔哈拉神殿",
  "NAME:VCARR": "冰雹平台",
  "NAME:VENOM": "恶灵基因升腾者",
  "NAME:VENTREX": "冰雹轰炸机",
  "NAME:VIPER": "无齿翼龙突击机",
  "NAME:VIRUS": "病毒狙击手",
  "NAME:VISION": "心灵视界",
  "NAME:VLADBOAT": "弗拉基米尔指挥舰",
  "NAME:VLADIMIR": "弗拉基米尔",
  "NAME:VLADMIRX": "将军",
  "NAME:VOLKOV": "沃尔科夫",
  "NAME:VULTURE": "秃鹫",
  "NAME:WALLBUSTER": "壁垒杀手导弹",
  "NAME:WARMONGE": "战争贩子",
  "NAME:WAROFTHE": "玫瑰战争",
  "NAME:WARRIG": "雷格机动前哨站",
  "NAME:WASP": "刺蜂行者",
  "NAME:WASTE": "辐射自爆机",
  "NAME:WAT": "？？？",
  "NAME:WAVEACTIVE": "警报 - 心灵控制脉冲已经启动 ！",
  "NAME:WEEDGUY": "化学兵",
  "NAME:WEEK1": "华尔街",
  "NAME:WEEK100": "新兵训练营",
  "NAME:WEEK101": "许可活动 1",
  "NAME:WEEK102": "许可活动 2",
  "NAME:WEEK103": "许可活动 3",
  "NAME:WEEK104": "许可活动 4",
  "NAME:WEEK105": "锦标赛 1",
  "NAME:WEEK106": "锦标赛 2",
  "NAME:WEEK107": "锦标赛 3",
  "NAME:WEEK108": "锦标赛 4",
  "NAME:WEEK11": "沉睡海底",
  "NAME:WEEK110": "猎杀拾荒者",
  "NAME:WEEK111": "抢旗行动",
  "NAME:WEEK112": "奥林匹克 1",
  "NAME:WEEK113": "奥林匹克 2",
  "NAME:WEEK114": "奥林匹克 3",
  "NAME:WEEK115": "奥林匹克 4",
  "NAME:WEEK116": "完全削减",
  "NAME:WEEK117": "核爆辐射尘掩蔽所",
  "NAME:WEEK12": "舰艇大展",
  "NAME:WEEK13": "美利坚球洞",
  "NAME:WEEK17": "金矿",
  "NAME:WEEK18": "金手指",
  "NAME:WEEK19": "富贵富翁",
  "NAME:WEEK20": "黄砖道",
  "NAME:WEEK21": "险峡谷",
  "NAME:WEEK23": "红岩石",
  "NAME:WEEK24": "云景",
  "NAME:WEEK25": "饲料堆",
  "NAME:WEEK28": "世外桃源",
  "NAME:WEEK29": "都会区",
  "NAME:WEEK3": "互相毁灭",
  "NAME:WEEK31": "大峡谷",
  "NAME:WEEK32": "战俘营",
  "NAME:WEEK33": "西北边境",
  "NAME:WEEK34": "夺取路易斯安纳",
  "NAME:WEEK36": "芝加哥大火",
  "NAME:WEEK37": "百老汇与四十二街",
  "NAME:WEEK40": "蛮荒西部",
  "NAME:WEEK42": "罗曼诺夫的复仇",
  "NAME:WEEK45": "总统先生",
  "NAME:WEEK46": "二线是莫斯科",
  "NAME:WEEK48": "核武威胁",
  "NAME:WEEK5": "湖中少女",
  "NAME:WEEK50": "正在进行的大屠杀",
  "NAME:WEEK51": "再没有抨击",
  "NAME:WEEK52": "防火障",
  "NAME:WEEK53": "流星",
  "NAME:WEEK54": "封闭区",
  "NAME:WEEK57": "红军徽章",
  "NAME:WEEK61": "天命显现",
  "NAME:WEEK62": "门罗主义",
  "NAME:WEEK63": "机会元素",
  "NAME:WEEK65": "特别来宾",
  "NAME:WEEK66": "流行测验",
  "NAME:WEEK67": "危机模式",
  "NAME:WEEK68": "垃圾压缩机",
  "NAME:WEEK70": "搅拌机",
  "NAME:WEEK71": "骄傲与荣耀",
  "NAME:WEEK72": "史坦战役",
  "NAME:WEEK75": "夺桥遗恨",
  "NAME:WEEK77": "首部曲",
  "NAME:WEEK79": "顺从训练",
  "NAME:WEEK81": "死亡之路",
  "NAME:WEEK84": "迫切的危机",
  "NAME:WEEK87": "毒物流出",
  "NAME:WEEK88": "撤除层级活动",
  "NAME:WEEK89": "避雷针",
  "NAME:WEEK90": "迷宫",
  "NAME:WEEK92": "驮兽",
  "NAME:WEEK93": "骑马霰弹枪",
  "NAME:WEEK95": "新坦克",
  "NAME:WEEK97": "锦标",
  "NAME:WEEK98": "比赛安排者",
  "NAME:WEEK99": "决斗",
  "NAME:WIDOW": "黑寡妇干扰机",
  "NAME:WIDOWA": "黑寡妇干扰机阿尔法",
  "NAME:WINGSOFCORONIA": "科洛尼亚侧翼",
  "NAME:WINI": "休旅车",
  "NAME:WOLF": "猎狼犬直升机",
  "NAME:WOLFNLNDN": "伦敦狼人",
  "NAME:WONDERDRUGS": "治疗剂",
  "NAME:WORLD_COOP": "世界合作",
  "NAME:WORMQ": "虫群女王",
  "NAME:WTC": "世界贸易中心",
  "NAME:WZHDL": "运输卡车",
  "NAME:XCOMET": "位置标定器",
  "NAME:XPCV": "厄普西隆机动建设车",
  "NAME:YAAIRF": "厄普西隆停机坪",
  "NAME:YABIO": "生化罐",
  "NAME:YABIOB": "大生化罐",
  "NAME:YABOLT": "超能转换器",
  "NAME:YABRCK": "厄普西隆兵营",
  "NAME:YACAOS": "心灵信标",
  "NAME:YACNST": "厄普西隆建造场",
  "NAME:YACNSTA": "厄普西隆建造场",
  "NAME:YACOMD": "厄普西隆指挥中心",
  "NAME:YACOMDS": "厄普西隆指挥中心",
  "NAME:YACXST": "假厄普西隆建造场",
  "NAME:YADMME": "枢纽升级：心灵研究组件",
  "NAME:YADOME": "枢纽升级：化学研究组件",
  "NAME:YADOMM": "枢纽升级：基因研究组件",
  "NAME:YADYNA": "心灵能量源",
  "NAME:YAGGUN": "加特林机炮",
  "NAME:YAGNTC": "基因突变器",
  "NAME:YAHADE": "安塔瑞斯炮台",
  "NAME:YAHCR": "炼狱防空平台",
  "NAME:YAHIVE": "恶灵防空巢",
  "NAME:YAKAOS": "毒爆虱巢穴",
  "NAME:YAMAGN": "磁控节点",
  "NAME:YAMPSI": "心灵感应器",
  "NAME:YAMREF": "雷格机动前哨站",
  "NAME:YANEUR": "神经毒素厂",
  "NAME:YAOMGA": "主控旋塔",
  "NAME:YAPLN": "恶灵拦截机",
  "NAME:YAPOWR": "生化反应室",
  "NAME:YAPPET": "心灵支配仪",
  "NAME:YAPPETZ": "心灵支配仪",
  "NAME:YAPPPT": "建设中的心灵支配仪",
  "NAME:YAPPXT": "假心灵支配仪",
  "NAME:YAPROT": "建造场原型",
  "NAME:YAPSIS": "雷达旋塔",
  "NAME:YAPSYT": "心灵控制塔",
  "NAME:YAPSYT2": "心灵控制塔",
  "NAME:YAQUAD": "迷雾核心",
  "NAME:YARAIL": "地狱热能塔",
  "NAME:YARCON": "火箭控制单元",
  "NAME:YAREFN": "厄普西隆矿石精炼厂",
  "NAME:YARIFT": "幻象核心",
  "NAME:YARIREFN": "厄普西隆矿石精炼厂",
  "NAME:YAROCK": "不明建筑物",
  "NAME:YAROCKT": "火箭发射台",
  "NAME:YASHRD": "切割塔",
  "NAME:YASMIN": "奴隶采矿车",
  "NAME:YASPAT": "天剑防御系统",
  "NAME:YASPIR": "心灵信标",
  "NAME:YATUNL": "毒爆虱巢穴",
  "NAME:YAULAB": "地下设施实验室",
  "NAME:YAVNMM": "基因地雷",
  "NAME:YAVNMMS": "基因地雷",
  "NAME:YAVULT": "合成缸",
  "NAME:YAWEAPZ": "厄普西隆战争工厂",
  "NAME:YAYARDA": "厄普西隆海军船坞",
  "NAME:YBARRACKS": "厄普西隆兵营",
  "NAME:YBLAB": "尤里作战实验室",
  "NAME:YBLABX": "假潘多拉枢纽",
  "NAME:YBLABZ": "潘多拉枢纽",
  "NAME:YCAB": "黄色计程车",
  "NAME:YENGNEER": "厄普西隆工程师",
  "NAME:YHVR": "神舟运输艇",
  "NAME:YMCV": "厄普西隆机动建设车",
  "NAME:YMIN": "幽灵采矿车",
  "NAME:YNAVAL": "厄普西隆海军船坞",
  "NAME:YOU": "你自己",
  "NAME:YTNK": "加特林坦克",
  "NAME:YTOWER": "尤里的巨塔",
  "NAME:YUNRU": "云茹",
  "NAME:YURI": "心灵军团",
  "NAME:YURIAGAIN": "尤里重现",
  "NAME:YURICLONE": "心灵专家",
  "NAME:YURICOUNTRY": "心灵军团",
  "NAME:YURIHIMSELF": "尤里",
  "NAME:YURIPR": "尤里改",
  "NAME:YURIPRIME": "尤里",
  "NAME:YURIRAD": "心灵感应器",
  "NAME:YURISLEG": "尤里的遗产",
  "NAME:YURIX": "心灵精英",
  "NAME:YURI_COOP": "尤里战役",
  "NAME:YWARFACTORY": "厄普西隆战争工厂",
  "NAME:ZEP": "基洛夫飞艇",
  "NAME:ZEPH": "西风火炮",
  "NAME:ZOMBIE": "丧尸",
  "NAME:ZORB": "气压球使徒",
  "NAME:ZORB_N": "气压球晋升者",
  "NAME:EMPTY": "Addon - Salamander Confusion 2",
  "NAME:DUMMYDUMMY": "Ceasefire Spawn (Do Not Use)",
  "NAME:CASHROUD": "Map Shroud Generator",
  "NAME:ULTIMAWEAPON": "Ion Storm",
  "NAME:CRATEDROP": "Crate Drop"
};

/**
 * Section ID -> display-name metadata.
 * This is useful for fast list rendering and search indexing.
 */
export const MO_DISPLAY_NAMES_ZH_CN: Record<string, MoDisplayNameEntry> = {
  "General": {
    "displayName": "Mental Omega 3.3.X -- Official Rules of Engagement",
    "sectionType": "Unknown",
    "uiName": "NAME:General",
    "name": "Mental Omega 3.3.6 --- Official Rules of Engagement"
  },
  "JumpjetControls": {
    "displayName": "JumpjetControls",
    "sectionType": "Unknown"
  },
  "SpecialWeapons": {
    "displayName": "SpecialWeapons",
    "sectionType": "Unknown"
  },
  "GenericPrerequisites": {
    "displayName": "GenericPrerequisites",
    "sectionType": "Unknown"
  },
  "AudioVisual": {
    "displayName": "AudioVisual",
    "sectionType": "Unknown"
  },
  "CrateRules": {
    "displayName": "CrateRules",
    "sectionType": "Unknown"
  },
  "Powerups": {
    "displayName": "Powerups",
    "sectionType": "Unknown"
  },
  "CombatDamage": {
    "displayName": "CombatDamage",
    "sectionType": "Unknown"
  },
  "Radiation": {
    "displayName": "Radiation",
    "sectionType": "Unknown"
  },
  "ElevationModel": {
    "displayName": "ElevationModel",
    "sectionType": "Unknown"
  },
  "WallModel": {
    "displayName": "WallModel",
    "sectionType": "Unknown"
  },
  "GlobalControls": {
    "displayName": "GlobalControls",
    "sectionType": "Unknown"
  },
  "MultiplayerDialogSettings": {
    "displayName": "MultiplayerDialogSettings",
    "sectionType": "Unknown"
  },
  "Maximums": {
    "displayName": "Maximums",
    "sectionType": "Unknown"
  },
  "AI": {
    "displayName": "AI",
    "sectionType": "Unknown"
  },
  "IQ": {
    "displayName": "IQ",
    "sectionType": "Unknown"
  },
  "Easy": {
    "displayName": "Easy",
    "sectionType": "Unknown"
  },
  "Normal": {
    "displayName": "Normal",
    "sectionType": "Unknown"
  },
  "Difficult": {
    "displayName": "Difficult",
    "sectionType": "Unknown"
  },
  "MouseCursors": {
    "displayName": "MouseCursors",
    "sectionType": "Unknown"
  },
  "Colors": {
    "displayName": "Colors",
    "sectionType": "Unknown"
  },
  "ColorAdd": {
    "displayName": "ColorAdd",
    "sectionType": "Unknown"
  },
  "TunnelTypes": {
    "displayName": "TunnelTypes",
    "sectionType": "Unknown"
  },
  "FatalTunnel": {
    "displayName": "FatalTunnel",
    "sectionType": "Unknown"
  },
  "BasicTunnel": {
    "displayName": "BasicTunnel",
    "sectionType": "Unknown"
  },
  "ArmorTypes": {
    "displayName": "ArmorTypes",
    "sectionType": "Unknown"
  },
  "InfantryTypes": {
    "displayName": "InfantryTypes",
    "sectionType": "Unknown"
  },
  "VehicleTypes": {
    "displayName": "VehicleTypes",
    "sectionType": "Unknown"
  },
  "AircraftTypes": {
    "displayName": "AircraftTypes",
    "sectionType": "Unknown"
  },
  "BuildingTypes": {
    "displayName": "BuildingTypes",
    "sectionType": "Unknown"
  },
  "TerrainTypes": {
    "displayName": "TerrainTypes",
    "sectionType": "Unknown"
  },
  "SmudgeTypes": {
    "displayName": "SmudgeTypes",
    "sectionType": "Unknown"
  },
  "OverlayTypes": {
    "displayName": "OverlayTypes",
    "sectionType": "Unknown"
  },
  "Animations": {
    "displayName": "Animations",
    "sectionType": "Unknown"
  },
  "VoxelAnims": {
    "displayName": "VoxelAnims",
    "sectionType": "Unknown"
  },
  "Particles": {
    "displayName": "Particles",
    "sectionType": "Unknown"
  },
  "ParticleSystems": {
    "displayName": "ParticleSystems",
    "sectionType": "Unknown"
  },
  "SuperWeaponTypes": {
    "displayName": "SuperWeaponTypes",
    "sectionType": "Unknown"
  },
  "Warheads": {
    "displayName": "Warheads",
    "sectionType": "Unknown"
  },
  "WeaponTypes": {
    "displayName": "WeaponTypes",
    "sectionType": "Unknown"
  },
  "Projectiles": {
    "displayName": "Projectiles",
    "sectionType": "Unknown"
  },
  "Sides": {
    "displayName": "Sides",
    "sectionType": "Unknown"
  },
  "GDI": {
    "displayName": "GDI",
    "sectionType": "Unknown"
  },
  "Nod": {
    "displayName": "Nod",
    "sectionType": "Unknown"
  },
  "ThirdSide": {
    "displayName": "ThirdSide",
    "sectionType": "Unknown"
  },
  "FourthSide": {
    "displayName": "FourthSide",
    "sectionType": "Unknown"
  },
  "Civilian": {
    "displayName": "Civilian",
    "sectionType": "Unknown"
  },
  "Mutant": {
    "displayName": "Mutant",
    "sectionType": "Unknown"
  },
  "Countries": {
    "displayName": "Countries",
    "sectionType": "Unknown"
  },
  "UnitedStates": {
    "displayName": "美国",
    "sectionType": "Country",
    "uiName": "NAME:UnitedStates",
    "name": "United States"
  },
  "Europeans": {
    "displayName": "欧洲联盟",
    "sectionType": "Country",
    "uiName": "NAME:EuroAlliance",
    "name": "Euro Alliance"
  },
  "Pacific": {
    "displayName": "太平洋阵线",
    "sectionType": "Country",
    "uiName": "NAME:PacificFront",
    "name": "Pacific Front"
  },
  "USSR": {
    "displayName": "苏维埃俄罗斯",
    "sectionType": "Country",
    "uiName": "NAME:USSR",
    "name": "Russia"
  },
  "Latin": {
    "displayName": "拉丁同盟",
    "sectionType": "Country",
    "uiName": "NAME:Confederationz",
    "name": "Confederation"
  },
  "Chinese": {
    "displayName": "中国",
    "sectionType": "Country",
    "uiName": "NAME:Chinese",
    "name": "Chinese"
  },
  "PsiCorps": {
    "displayName": "心灵军团",
    "sectionType": "Country",
    "uiName": "NAME:PsiCorps",
    "name": "PsiCorps"
  },
  "ScorpionCell": {
    "displayName": "天蝎组织",
    "sectionType": "Country",
    "uiName": "NAME:ScorpionCell",
    "name": "Scorpion Cell"
  },
  "Headquaters": {
    "displayName": "总部守卫",
    "sectionType": "Country",
    "uiName": "NAME:Headquaters",
    "name": "Headquarters"
  },
  "Guild1": {
    "displayName": "狂鲨先锋",
    "sectionType": "Country",
    "uiName": "NAME:Haihead",
    "name": "Haihead"
  },
  "Guild2": {
    "displayName": "科洛尼亚侧翼",
    "sectionType": "Country",
    "uiName": "NAME:Coronia",
    "name": "Wings of Coronia"
  },
  "Guild3": {
    "displayName": "最后堡垒",
    "sectionType": "Country",
    "uiName": "NAME:LastBastion",
    "name": "Last Bastion"
  },
  "Special": {
    "displayName": "治安官",
    "sectionType": "Side",
    "uiName": "NAME:Special",
    "name": "JP"
  },
  "Neutral": {
    "displayName": "平民",
    "sectionType": "Side",
    "uiName": "NAME:Neutral",
    "name": "Civilian"
  },
  "E1": {
    "displayName": "盟军大兵",
    "sectionType": "Infantry",
    "uiName": "NAME:E1",
    "name": "G.I."
  },
  "ADOG": {
    "displayName": "盟军军犬",
    "sectionType": "Infantry",
    "uiName": "NAME:ADOG",
    "name": "Allied Attack Dog"
  },
  "ENGINEER": {
    "displayName": "盟军工程师",
    "sectionType": "Infantry",
    "uiName": "NAME:AENGINEER",
    "name": "Allied Engineer"
  },
  "AMEDIC": {
    "displayName": "军医",
    "sectionType": "Infantry",
    "uiName": "NAME:AMEDIC",
    "name": "Field Medic"
  },
  "GGI": {
    "displayName": "守卫大兵",
    "sectionType": "Infantry",
    "uiName": "NAME:GuardianGI",
    "name": "Guardian G.I."
  },
  "ENFO": {
    "displayName": "光棱攻城兵",
    "sectionType": "Infantry",
    "uiName": "NAME:ENFO",
    "name": "Siege Cadre"
  },
  "JUMPJET": {
    "displayName": "火箭飞行兵",
    "sectionType": "Infantry",
    "uiName": "NAME:JUMPJET",
    "name": "Rocketeer"
  },
  "SPY": {
    "displayName": "间谍",
    "sectionType": "Infantry",
    "uiName": "NAME:SPY",
    "name": "Spy"
  },
  "GHOST": {
    "displayName": "海豹突击队",
    "sectionType": "Infantry",
    "uiName": "NAME:SEAL",
    "name": "Navy SEAL"
  },
  "TANY": {
    "displayName": "谭雅",
    "sectionType": "Infantry",
    "uiName": "NAME:TANYA",
    "name": "Tanya"
  },
  "SUPR": {
    "displayName": "反转士",
    "sectionType": "Infantry",
    "uiName": "NAME:SUPR",
    "name": "Suppressor"
  },
  "ARMR": {
    "displayName": "友川纪夫",
    "sectionType": "Infantry",
    "uiName": "NAME:ARMR",
    "name": "Norio"
  },
  "CLEG": {
    "displayName": "超时空军团兵",
    "sectionType": "Infantry",
    "uiName": "NAME:CLEG",
    "name": "Chrono Legionnaire"
  },
  "AICLEG": {
    "displayName": "超时空军团兵",
    "sectionType": "Infantry",
    "uiName": "NAME:AICLEG",
    "name": "Chrono Legionnaire (AI)"
  },
  "SNIPE": {
    "displayName": "狙击手",
    "sectionType": "Infantry",
    "uiName": "NAME:SNIPE2",
    "name": "Sniper"
  },
  "RIOT": {
    "displayName": "镇暴部队",
    "sectionType": "Infantry",
    "uiName": "NAME:RIOTT",
    "name": "Riot Trooper"
  },
  "SIEG": {
    "displayName": "西格弗里德",
    "sectionType": "Infantry",
    "uiName": "NAME:SIEGFRIED",
    "name": "Siegfried"
  },
  "E2": {
    "displayName": "动员兵",
    "sectionType": "Infantry",
    "uiName": "NAME:E2",
    "name": "Conscript"
  },
  "DOG": {
    "displayName": "苏联军犬",
    "sectionType": "Infantry",
    "uiName": "NAME:SDOG",
    "name": "Soviet Attack Dog"
  },
  "FLAKT": {
    "displayName": "防空步兵",
    "sectionType": "Infantry",
    "uiName": "NAME:FLAKT",
    "name": "Flak Trooper"
  },
  "SENGINEER": {
    "displayName": "苏联工程师",
    "sectionType": "Infantry",
    "uiName": "NAME:SENGINEER",
    "name": "Soviet Engineer"
  },
  "SHK": {
    "displayName": "磁暴步兵",
    "sectionType": "Infantry",
    "uiName": "NAME:SHK",
    "name": "Tesla Trooper"
  },
  "SHOCK": {
    "displayName": "闪流步兵",
    "sectionType": "Infantry",
    "uiName": "NAME:SHOCK",
    "name": "Shock Trooper"
  },
  "FLAMER": {
    "displayName": "喷火工兵",
    "sectionType": "Infantry",
    "uiName": "NAME:FLAMER",
    "name": "Pyro"
  },
  "GYRO": {
    "displayName": "旋翼飞行兵",
    "sectionType": "Infantry",
    "uiName": "NAME:GYRO",
    "name": "Gyrocopter"
  },
  "MOTOR": {
    "displayName": "火炮机车",
    "sectionType": "Infantry",
    "uiName": "NAME:MOTOR",
    "name": "Mortar Quad"
  },
  "IVAN": {
    "displayName": "疯狂伊文",
    "sectionType": "Infantry",
    "uiName": "NAME:IVAN",
    "name": "Crazy Ivan"
  },
  "ARSO": {
    "displayName": "纵火狂",
    "sectionType": "Infantry",
    "uiName": "NAME:ARSO",
    "name": "Arsonist"
  },
  "SBTR": {
    "displayName": "破坏者",
    "sectionType": "Infantry",
    "uiName": "NAME:SBTR",
    "name": "Saboteur"
  },
  "MORALES": {
    "displayName": "莫拉莱斯",
    "sectionType": "Infantry",
    "uiName": "NAME:Morales",
    "name": "Morales"
  },
  "AIMORA": {
    "displayName": "莫拉莱斯",
    "sectionType": "Infantry",
    "uiName": "NAME:Morales",
    "name": "Morales (AI)"
  },
  "VOLKOV": {
    "displayName": "沃尔科夫",
    "sectionType": "Infantry",
    "uiName": "NAME:VOLKOV",
    "name": "Volkov"
  },
  "CYBO": {
    "displayName": "半机械人先驱",
    "sectionType": "Infantry",
    "uiName": "NAME:CYBOV",
    "name": "Cyborg Vanguard"
  },
  "CHITZ": {
    "displayName": "契特卡伊",
    "sectionType": "Infantry",
    "uiName": "NAME:CHITZ",
    "name": "Chitzkoi"
  },
  "YUNRU": {
    "displayName": "云茹",
    "sectionType": "Infantry",
    "uiName": "NAME:YUNRU",
    "name": "Yunru"
  },
  "DESO": {
    "displayName": "辐射工兵",
    "sectionType": "Infantry",
    "uiName": "NAME:DESO2",
    "name": "Desolator"
  },
  "DESOR": {
    "displayName": "辐射根除者",
    "sectionType": "Infantry",
    "uiName": "NAME:DESOR",
    "name": "Eradicator"
  },
  "INIT": {
    "displayName": "新兵",
    "sectionType": "Infantry",
    "uiName": "NAME:INIT",
    "name": "Initiate"
  },
  "HARP": {
    "displayName": "弓箭手",
    "sectionType": "Infantry",
    "uiName": "NAME:HARP",
    "name": "Archer"
  },
  "YDOG": {
    "displayName": "精怪",
    "sectionType": "Infantry",
    "uiName": "NAME:SPOOK",
    "name": "Spook"
  },
  "YENGINEER": {
    "displayName": "厄普西隆工程师",
    "sectionType": "Infantry",
    "uiName": "NAME:YENGNEER",
    "name": "Epsilon Engineer"
  },
  "BRUTE": {
    "displayName": "狂兽人",
    "sectionType": "Infantry",
    "uiName": "NAME:Brute",
    "name": "Brute"
  },
  "INTRUDER": {
    "displayName": "渗透者",
    "sectionType": "Infantry",
    "uiName": "NAME:INTRUDER",
    "name": "Infiltrator"
  },
  "HIJACKER": {
    "displayName": "劫持者",
    "sectionType": "Infantry",
    "uiName": "NAME:HIJACKER",
    "name": "Hijacker"
  },
  "REPU": {
    "displayName": "磁震恶徒",
    "sectionType": "Infantry",
    "uiName": "NAME:REPU",
    "name": "Repulsor"
  },
  "SCRG": {
    "displayName": "天灾突袭兵",
    "sectionType": "Infantry",
    "uiName": "NAME:SCRG",
    "name": "Scourge"
  },
  "STALKER": {
    "displayName": "梦魇行者",
    "sectionType": "Infantry",
    "uiName": "NAME:STALKER",
    "name": "Stalker"
  },
  "KAOS": {
    "displayName": "毒爆虱",
    "sectionType": "Infantry",
    "uiName": "NAME:KAOS",
    "name": "Bloatick"
  },
  "MOTHRA": {
    "displayName": "侦察乌鸦",
    "sectionType": "Infantry",
    "uiName": "NAME:MOTHRA",
    "name": "Scout Raven"
  },
  "VIRUS": {
    "displayName": "病毒狙击手",
    "sectionType": "Infantry",
    "uiName": "NAME:Virus",
    "name": "Virus"
  },
  "YURI": {
    "displayName": "心灵专家",
    "sectionType": "Infantry",
    "uiName": "NAME:ADEPT",
    "name": "Epsilon Adept"
  },
  "YURIPR": {
    "displayName": "心灵精英",
    "sectionType": "Infantry",
    "uiName": "NAME:YURIX",
    "name": "Epsilon Elite"
  },
  "ASSN": {
    "displayName": "拉恩",
    "sectionType": "Infantry",
    "uiName": "NAME:ASSN",
    "name": "Rahn"
  },
  "UNDER": {
    "displayName": "马尔翁",
    "sectionType": "Infantry",
    "uiName": "NAME:UNDER",
    "name": "Malver"
  },
  "LIBRA": {
    "displayName": "天秤",
    "sectionType": "Infantry",
    "uiName": "NAME:LIBRA",
    "name": "Libra"
  },
  "LIBRC": {
    "displayName": "天秤复制人",
    "sectionType": "Infantry",
    "uiName": "NAME:LIBRC",
    "name": "Libra Clone"
  },
  "DUNE": {
    "displayName": "沙丘骑兵",
    "sectionType": "Infantry",
    "uiName": "NAME:DUNE",
    "name": "Dunerider"
  },
  "KNIGHT": {
    "displayName": "铁骑兵",
    "sectionType": "Infantry",
    "uiName": "NAME:KNIGHT",
    "name": "Knightframe"
  },
  "D_KNIGHT": {
    "displayName": "铁骑兵",
    "sectionType": "Infantry",
    "uiName": "NAME:KNIGHT",
    "name": "Decoy Knightframe"
  },
  "KINGS": {
    "displayName": "皇家骑兵",
    "sectionType": "Infantry",
    "uiName": "NAME:KINGS",
    "name": "Kingsframe"
  },
  "COVE": {
    "displayName": "长枪战士",
    "sectionType": "Infantry",
    "uiName": "NAME:LANCER",
    "name": "Lancer"
  },
  "D_COVE": {
    "displayName": "长枪战士",
    "sectionType": "Infantry",
    "uiName": "NAME:LANCER",
    "name": "Decoy Lancer"
  },
  "RAIL": {
    "displayName": "轨道炮战士",
    "sectionType": "Infantry",
    "uiName": "NAME:RAIL",
    "name": "Railguneer"
  },
  "FENGINEER": {
    "displayName": "焚风工程师",
    "sectionType": "Infantry",
    "uiName": "NAME:FENGINEER",
    "name": "Foehn Engineer"
  },
  "CLAIR": {
    "displayName": "千里眼机器人",
    "sectionType": "Infantry",
    "uiName": "NAME:CLAIR",
    "name": "Clairvoyant"
  },
  "D_CLAIR": {
    "displayName": "千里眼机器人",
    "sectionType": "Infantry",
    "uiName": "NAME:CLAIR",
    "name": "Decoy Clairvoyant"
  },
  "CLAIRAI": {
    "displayName": "千里眼机器人",
    "sectionType": "Infantry",
    "uiName": "NAME:CLAIR",
    "name": "Clairvoyant (AI)"
  },
  "DUPL": {
    "displayName": "增殖机器人",
    "sectionType": "Infantry",
    "uiName": "NAME:DUPL",
    "name": "Duplicant"
  },
  "HUNTR": {
    "displayName": "女猎手",
    "sectionType": "Infantry",
    "uiName": "NAME:HUNTR",
    "name": "Huntress"
  },
  "DEVI": {
    "displayName": "迷幻猎手",
    "sectionType": "Infantry",
    "uiName": "NAME:DEVI",
    "name": "Deviatress"
  },
  "SYNC": {
    "displayName": "同步浪人",
    "sectionType": "Infantry",
    "uiName": "NAME:SYNC",
    "name": "Syncronin"
  },
  "SYNC_N": {
    "displayName": "同步忍者",
    "sectionType": "Infantry",
    "uiName": "NAME:SYNC_N",
    "name": "Syncronaut"
  },
  "WASP": {
    "displayName": "刺蜂行者",
    "sectionType": "Infantry",
    "uiName": "NAME:WASP",
    "name": "Neonwasp"
  },
  "ZORB": {
    "displayName": "气压球使徒",
    "sectionType": "Infantry",
    "uiName": "NAME:ZORB",
    "name": "Zorbtrotter"
  },
  "ZORB_N": {
    "displayName": "气压球晋升者",
    "sectionType": "Infantry",
    "uiName": "NAME:ZORB_N",
    "name": "Zorbfloater"
  },
  "BANE": {
    "displayName": "巨人克星",
    "sectionType": "Infantry",
    "uiName": "NAME:BANE",
    "name": "Giantsbane"
  },
  "BANE_N": {
    "displayName": "天神克星",
    "sectionType": "Infantry",
    "uiName": "NAME:BANE_N",
    "name": "Godsbane"
  },
  "SIBFIN": {
    "displayName": "菲因",
    "sectionType": "Infantry",
    "uiName": "NAME:SIBFIN",
    "name": "Fin"
  },
  "SICALI": {
    "displayName": "阿利兹",
    "sectionType": "Infantry",
    "uiName": "NAME:SICALI",
    "name": "Alize"
  },
  "EUREKA": {
    "displayName": "优莱卡",
    "sectionType": "Infantry",
    "uiName": "NAME:EUREKA",
    "name": "Eureka"
  },
  "URAGAN": {
    "displayName": "乌拉甘",
    "sectionType": "Infantry",
    "uiName": "NAME:URAGAN",
    "name": "Uragan"
  },
  "COW": {
    "displayName": "奶牛",
    "sectionType": "Infantry",
    "uiName": "NAME:COWW",
    "name": "Animal Cow"
  },
  "PIG": {
    "displayName": "猪",
    "sectionType": "Infantry",
    "uiName": "NAME:PIG",
    "name": "Animal Pig"
  },
  "SEL": {
    "displayName": "海豹",
    "sectionType": "Infantry",
    "uiName": "NAME:SEL",
    "name": "Animal Seal"
  },
  "BISON": {
    "displayName": "野牛",
    "sectionType": "Infantry",
    "uiName": "NAME:BISON",
    "name": "Animal Bison"
  },
  "DEER": {
    "displayName": "鹿",
    "sectionType": "Infantry",
    "uiName": "NAME:DEER",
    "name": "Animal Deer"
  },
  "TAPIR": {
    "displayName": "貘",
    "sectionType": "Infantry",
    "uiName": "NAME:TAPIR",
    "name": "Animal Tapir"
  },
  "HYENA": {
    "displayName": "鬣狗",
    "sectionType": "Infantry",
    "uiName": "NAME:HYENA",
    "name": "Animal Hyena"
  },
  "TIGER": {
    "displayName": "老虎",
    "sectionType": "Infantry",
    "uiName": "NAME:TIGER",
    "name": "Animal Tiger"
  },
  "WTIGR": {
    "displayName": "老虎",
    "sectionType": "Infantry",
    "uiName": "NAME:TIGER",
    "name": "Animal Tiger White"
  },
  "SHEEP": {
    "displayName": "公羊",
    "sectionType": "Infantry",
    "uiName": "NAME:SHEEP",
    "name": "Animal Sheep"
  },
  "ALL": {
    "displayName": "鳄鱼",
    "sectionType": "Infantry",
    "uiName": "NAME:ALL",
    "name": "Animal Alligator"
  },
  "POLARB": {
    "displayName": "北极熊",
    "sectionType": "Infantry",
    "uiName": "NAME:POLARB",
    "name": "Animal Polar Bear"
  },
  "GBEAR": {
    "displayName": "灰熊",
    "sectionType": "Infantry",
    "uiName": "NAME:GBEAR",
    "name": "Animal Grizzly Bear"
  },
  "KANGAROO": {
    "displayName": "袋鼠",
    "sectionType": "Infantry",
    "uiName": "NAME:KANGAROO",
    "name": "Animal Kangaroo"
  },
  "LION": {
    "displayName": "狮子",
    "sectionType": "Infantry",
    "uiName": "NAME:LION",
    "name": "Animal Lion"
  },
  "BEETLE": {
    "displayName": "巨型甲虫",
    "sectionType": "Infantry",
    "uiName": "NAME:BEETLE",
    "name": "Animal Giant Beetle"
  },
  "ELEPHANT": {
    "displayName": "大象",
    "sectionType": "Infantry",
    "uiName": "NAME:ELEPHANT",
    "name": "Animal Elephant"
  },
  "JOSH": {
    "displayName": "猴子",
    "sectionType": "Infantry",
    "uiName": "NAME:JOSH",
    "name": "Animal Monkey"
  },
  "CDOG": {
    "displayName": "狗",
    "sectionType": "Infantry",
    "uiName": "NAME:CDOG",
    "name": "Animal Dog"
  },
  "CAML": {
    "displayName": "骆驼",
    "sectionType": "Infantry",
    "uiName": "NAME:CAMEL",
    "name": "Animal Camel"
  },
  "DNOA": {
    "displayName": "暴龙",
    "sectionType": "Infantry",
    "uiName": "NAME:DNOAA",
    "name": "Animal T-Rex"
  },
  "DNOB": {
    "displayName": "雷龙",
    "sectionType": "Infantry",
    "uiName": "NAME:DNOBB",
    "name": "Animal Brontosaurus"
  },
  "CIV1": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Fem Yellow"
  },
  "CIVX1": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Fem White"
  },
  "CIV2": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Male White A"
  },
  "CIVX2": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Male White B"
  },
  "CIV3": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Male Brown"
  },
  "CIVX3": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Male Green"
  },
  "CIVA": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Texan B"
  },
  "CIVB": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Texan C"
  },
  "CIVC": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Texan D"
  },
  "CIV4": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Texan A"
  },
  "CIVBBP": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Baseball Player B"
  },
  "CIVBBR": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Baseball Player A"
  },
  "CIVBFM": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Beach Fat Male"
  },
  "CIVBF": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Beach Female A"
  },
  "CIVX4": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Beach Female B"
  },
  "CIVBTM": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Beach Thin Male"
  },
  "CIVSFM": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Snow Fat Male A"
  },
  "CIVX7": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Snow Fat Male B"
  },
  "CIVSF": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Snow Female A"
  },
  "CIVX5": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Snow Female B"
  },
  "CIVX6": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Snow Female C"
  },
  "CIVSTM": {
    "displayName": "市民",
    "sectionType": "Infantry",
    "uiName": "NAME:CIVILIAN",
    "name": "Civilian Snow Thin Male"
  },
  "SLAV": {
    "displayName": "工人",
    "sectionType": "Infantry",
    "uiName": "NAME:SLAV",
    "name": "Slave Worker"
  },
  "CYCOM": {
    "displayName": "半机械特种兵",
    "sectionType": "Infantry",
    "uiName": "NAME:CYCOM",
    "name": "Cyborg Commando"
  },
  "LUNR": {
    "displayName": "月球飞行兵",
    "sectionType": "Infantry",
    "uiName": "NAME:LUNR",
    "name": "Cosmonaut"
  },
  "REZNOV": {
    "displayName": "雷泽诺夫",
    "sectionType": "Infantry",
    "uiName": "NAME:REZNOV",
    "name": "Col. Reznov"
  },
  "KRUKOV": {
    "displayName": "库可夫",
    "sectionType": "Infantry",
    "uiName": "NAME:KRUKOV",
    "name": "Col. Krukov"
  },
  "CBRIS": {
    "displayName": "太空特种兵",
    "sectionType": "Infantry",
    "uiName": "NAME:CBRIS",
    "name": "Space Commando"
  },
  "YURIX": {
    "displayName": "尤里",
    "sectionType": "Infantry",
    "uiName": "NAME:YURIHIMSELF",
    "name": "Yuri"
  },
  "TERROR": {
    "displayName": "伊文实习兵",
    "sectionType": "Infantry",
    "uiName": "NAME:TERRORIST",
    "name": "Ivan Cadet"
  },
  "BIKE": {
    "displayName": "伊文摩托兵",
    "sectionType": "Infantry",
    "uiName": "NAME:BIKE",
    "name": "Ivan Biker"
  },
  "EINS": {
    "displayName": "爱因斯坦",
    "sectionType": "Infantry",
    "uiName": "NAME:EINS",
    "name": "Albert Einstein"
  },
  "MUMY": {
    "displayName": "木乃伊",
    "sectionType": "Infantry",
    "uiName": "NAME:MUMY",
    "name": "Mummy"
  },
  "SAVG": {
    "displayName": "蛮兽人",
    "sectionType": "Infantry",
    "uiName": "NAME:SAVG",
    "name": "Savage"
  },
  "RMNV": {
    "displayName": "罗曼诺夫总理",
    "sectionType": "Infantry",
    "uiName": "NAME:RMNV",
    "name": "Premier Romanov"
  },
  "CARV": {
    "displayName": "卡维利将军",
    "sectionType": "Infantry",
    "uiName": "NAME:CARV",
    "name": "General Carville"
  },
  "PENTGENX": {
    "displayName": "将军",
    "sectionType": "Infantry",
    "uiName": "NAME:PENTGENX",
    "name": "General Allied"
  },
  "VLADIMIRX": {
    "displayName": "将军",
    "sectionType": "Infantry",
    "uiName": "NAME:VLADMIRX",
    "name": "General Soviet"
  },
  "BLACKGEN": {
    "displayName": "将军",
    "sectionType": "Infantry",
    "uiName": "NAME:AZIZ",
    "name": "General Cell"
  },
  "PROS": {
    "displayName": "异教",
    "sectionType": "Infantry",
    "uiName": "NAME:PROS",
    "name": "Proselyte"
  },
  "SSRV": {
    "displayName": "秘密保镖",
    "sectionType": "Infantry",
    "uiName": "NAME:SecretService",
    "name": "Secret Service"
  },
  "RHAD": {
    "displayName": "拉什迪",
    "sectionType": "Infantry",
    "uiName": "NAME:RHAD",
    "name": "Rashidi"
  },
  "PRES": {
    "displayName": "杜根总统",
    "sectionType": "Infantry",
    "uiName": "NAME:PRESD",
    "name": "President Dugan"
  },
  "CTECH": {
    "displayName": "技师",
    "sectionType": "Infantry",
    "uiName": "NAME:CTECH",
    "name": "Technician"
  },
  "CTECHM": {
    "displayName": "技师",
    "sectionType": "Infantry",
    "uiName": "NAME:CTECHM",
    "name": "M.A.D. Technician"
  },
  "STLN": {
    "displayName": "史泰龙",
    "sectionType": "Infantry",
    "uiName": "NAME:STLN",
    "name": "Sammy Stallion"
  },
  "ARND": {
    "displayName": "法兰克福特",
    "sectionType": "Infantry",
    "uiName": "NAME:ARND",
    "name": "Arnie Frankfurter"
  },
  "CLNT": {
    "displayName": "克林特-西木",
    "sectionType": "Infantry",
    "uiName": "NAME:CLNT",
    "name": "Flint Westwood"
  },
  "MTNK": {
    "displayName": "骑士中型坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:CAVAL",
    "name": "Cavalier Medium Tank"
  },
  "ETNK": {
    "displayName": "斗牛犬轻型坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:ETNK",
    "name": "Bulldog Light Tank"
  },
  "ETNK2": {
    "displayName": "斗牛犬轻型坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:ETNK",
    "name": "Bulldog (Painter)"
  },
  "KTNK": {
    "displayName": "河童悬浮坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:HOVERTANK",
    "name": "Kappa Hover Tank"
  },
  "ROBO": {
    "displayName": "机器人坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:ROBO",
    "name": "Robot Tank"
  },
  "ROBOW": {
    "displayName": "机器人坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:ROBO",
    "name": "Robot Tank (Water)"
  },
  "FV": {
    "displayName": "斯特瑞克步兵战车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SFV",
    "name": "Stryker IFV"
  },
  "AMC": {
    "displayName": "执政官装甲步兵车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AMC",
    "name": "Archon AMC"
  },
  "TENGU": {
    "displayName": "长剑步兵装甲",
    "sectionType": "Vehicle",
    "uiName": "NAME:TENGU",
    "name": "Tsurugi Powersuit"
  },
  "LCRF": {
    "displayName": "旅行者运输艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:LCRFB",
    "name": "Voyager Transport"
  },
  "SHAD": {
    "displayName": "千里马运输直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:STALL",
    "name": "Stallion Transport"
  },
  "ORCA": {
    "displayName": "鹞式战机",
    "sectionType": "Aircraft",
    "uiName": "NAME:ORCA",
    "name": "Harrier"
  },
  "STORM": {
    "displayName": "风暴之子战机",
    "sectionType": "Aircraft",
    "uiName": "NAME:STRM",
    "name": "Stormchild"
  },
  "SNAKE": {
    "displayName": "王蛇战机",
    "sectionType": "Aircraft",
    "uiName": "NAME:SNAKE",
    "name": "Kingsnake"
  },
  "BEAG": {
    "displayName": "黑鹰战机",
    "sectionType": "Aircraft",
    "uiName": "NAME:BEAG2",
    "name": "Black Eagle"
  },
  "FORTRESS": {
    "displayName": "梭鱼轰炸机",
    "sectionType": "Aircraft",
    "uiName": "NAME:FORTRESS",
    "name": "Barracuda"
  },
  "WIDOW": {
    "displayName": "黑寡妇干扰机",
    "sectionType": "Aircraft",
    "uiName": "NAME:WIDOW",
    "name": "Black Widow"
  },
  "WIDOWA": {
    "displayName": "黑寡妇干扰机阿尔法",
    "sectionType": "Aircraft",
    "uiName": "NAME:WIDOWA",
    "name": "Black Widow Alpha"
  },
  "HBIRD": {
    "displayName": "蜂鸟支援机",
    "sectionType": "Aircraft",
    "uiName": "NAME:HBIRD",
    "name": "Hummingbird"
  },
  "SUNB": {
    "displayName": "猎杀机器人",
    "sectionType": "Vehicle",
    "uiName": "NAME:HunterSeekerB",
    "name": "Hunter-Seeker"
  },
  "SUNB_1": {
    "displayName": "Addon - Hunter-Seeker",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Hunter-Seeker"
  },
  "COMA": {
    "displayName": "战鹰直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:COMA",
    "name": "Warhawk"
  },
  "CRYO": {
    "displayName": "冷冻直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:CRYO",
    "name": "Cryocopter"
  },
  "CRYOAI": {
    "displayName": "冷冻直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:CRYO",
    "name": "Cryocopter (AI)"
  },
  "MGTK": {
    "displayName": "幻影坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:MGTK",
    "name": "Mirage Tank"
  },
  "HOWI": {
    "displayName": "西风火炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:ZEPH",
    "name": "Zephyr Artillery"
  },
  "AIHOWI": {
    "displayName": "西风火炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:ZEPH",
    "name": "Zephyr Artillery (AI)"
  },
  "SREF": {
    "displayName": "光棱坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:SREF",
    "name": "Prism Tank"
  },
  "BASS": {
    "displayName": "雅典娜炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:BASS",
    "name": "Athena Cannon"
  },
  "BASS2": {
    "displayName": "雅典娜炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:BASS",
    "name": "Athena Cannon (No Attack)"
  },
  "ABRM": {
    "displayName": "艾布拉姆斯坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:ABRM",
    "name": "Abrams Tank"
  },
  "BFRT": {
    "displayName": "玄武战斗要塞",
    "sectionType": "Vehicle",
    "uiName": "NAME:BFRT",
    "name": "Battle Tortoise"
  },
  "AMCV": {
    "displayName": "盟军机动建设车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AMCV",
    "name": "Allied Construction Vehicle"
  },
  "DEST": {
    "displayName": "地平线驱逐舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:DESTH",
    "name": "Horizon Destroyer"
  },
  "ASW": {
    "displayName": "鱼鹰无人机",
    "sectionType": "Aircraft",
    "uiName": "NAME:ASW",
    "name": "Horizon Osprey"
  },
  "SIREN": {
    "displayName": "塞壬护卫舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:SIREN",
    "name": "Siren Frigate"
  },
  "SIREN2": {
    "displayName": "塞壬护卫舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:SIREN",
    "name": "Siren (Shield)"
  },
  "DLPH": {
    "displayName": "海豚",
    "sectionType": "Vehicle",
    "uiName": "NAME:DLPH",
    "name": "Dolphin"
  },
  "AEGIS": {
    "displayName": "神盾巡洋舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:AEGIS",
    "name": "Aegis Cruiser"
  },
  "CARRIER": {
    "displayName": "企业航空母舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARRIERE",
    "name": "Enterprise Aircraft Carrier"
  },
  "HORNET": {
    "displayName": "黄蜂无人机",
    "sectionType": "Aircraft",
    "uiName": "NAME:HORNETE",
    "name": "Enterprise Hornet"
  },
  "HCRUIS": {
    "displayName": "三叉戟战列舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:HCRUIS",
    "name": "Trident Battleship"
  },
  "CMIN": {
    "displayName": "超时空采矿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CMIN",
    "name": "Chrono Miner"
  },
  "CMON": {
    "displayName": "超时空采矿车（空）",
    "sectionType": "Vehicle",
    "uiName": "NAME:CMONO",
    "name": "Chrono Miner (No Back)"
  },
  "AHMV": {
    "displayName": "武装悍马车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AHMV",
    "name": "Airborne Humvee"
  },
  "AERO": {
    "displayName": "天火防空坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:AERO",
    "name": "Aeroblaze"
  },
  "AERO2": {
    "displayName": "天火防空坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:AERO",
    "name": "Aeroblaze (Long)"
  },
  "VCARR": {
    "displayName": "冰雹平台",
    "sectionType": "Vehicle",
    "uiName": "NAME:VCARR",
    "name": "Hailstorm"
  },
  "VENTREX": {
    "displayName": "冰雹轰炸机",
    "sectionType": "Aircraft",
    "uiName": "NAME:VENTREX",
    "name": "Hailstorm Hailjet"
  },
  "BLZZ": {
    "displayName": "暴风雪坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:BLZZ",
    "name": "Blizzard Tank"
  },
  "PANTHER": {
    "displayName": "圣骑士猎杀坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:PANTHER",
    "name": "Paladin Tank Hunter"
  },
  "CHRTNK": {
    "displayName": "冥卫坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:CHRTNK",
    "name": "Charon Tank"
  },
  "CHRTNK2": {
    "displayName": "冥卫坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:CHRTNK",
    "name": "Charon Tank (No Attack)"
  },
  "THOR": {
    "displayName": "雷神炮艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:THOR",
    "name": "Thor Gunship"
  },
  "AITHOR": {
    "displayName": "雷神炮艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:THOR",
    "name": "Thor Gunship (AI)"
  },
  "UMIN": {
    "displayName": "极限采矿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:UMIN",
    "name": "Ultra Miner"
  },
  "UMINW": {
    "displayName": "极限采矿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:UMIN",
    "name": "Ultra Miner (Water)"
  },
  "UMON": {
    "displayName": "极限采矿车（空）",
    "sectionType": "Vehicle",
    "uiName": "NAME:UMON",
    "name": "Ultra Miner (No Back)"
  },
  "DRON": {
    "displayName": "恐怖机器人",
    "sectionType": "Vehicle",
    "uiName": "NAME:DRON",
    "name": "Terror Drone"
  },
  "DRON2": {
    "displayName": "恐怖机器人",
    "sectionType": "Vehicle",
    "uiName": "NAME:DRON",
    "name": "Terror Drone (No Attack)"
  },
  "HTK": {
    "displayName": "半履带车",
    "sectionType": "Vehicle",
    "uiName": "NAME:HFTK",
    "name": "Halftrack"
  },
  "SCAR": {
    "displayName": "猛虎装甲运输车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCAR",
    "name": "Tigr APC"
  },
  "HTNK": {
    "displayName": "犀牛重型坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:HTNK",
    "name": "Rhino Heavy Tank"
  },
  "CTNK": {
    "displayName": "麒麟强袭坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:CTNK",
    "name": "Qilin Assault Tank"
  },
  "JTNK": {
    "displayName": "捷豹战斗坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:JTNK",
    "name": "Jaguar Battle Tank"
  },
  "TNKKIL": {
    "displayName": "坦克歼击车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TNKKIL",
    "name": "Tank Killer"
  },
  "HCAN": {
    "displayName": "九头蛇炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:HCAN",
    "name": "Hydra Cannon"
  },
  "SAPC": {
    "displayName": "野牛运输艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:SAPCB",
    "name": "Zubr Transport"
  },
  "V3": {
    "displayName": "飞毛腿导弹发射车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCUD",
    "name": "Scud Launcher"
  },
  "TTNK": {
    "displayName": "磁能巡航坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:TTNK2",
    "name": "Tesla Cruiser"
  },
  "FDRON": {
    "displayName": "怒焰地雷无人机",
    "sectionType": "Vehicle",
    "uiName": "NAME:FDRON",
    "name": "Fury Drone"
  },
  "NAFURY": {
    "displayName": "怒焰地雷",
    "sectionType": "Building",
    "uiName": "NAME:NAFURY",
    "name": "Deployed Fury Drone"
  },
  "SCHP": {
    "displayName": "劫掠者武装直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCHP",
    "name": "Vulture"
  },
  "SCHPAI": {
    "displayName": "劫掠者武装直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCHP",
    "name": "Vulture (AI)"
  },
  "EDRN": {
    "displayName": "蜻蜓无人机",
    "sectionType": "Vehicle",
    "uiName": "NAME:EDRN",
    "name": "Dragonfly"
  },
  "WOLF": {
    "displayName": "猎狼犬直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:WOLF",
    "name": "Wolfhound"
  },
  "ZEP": {
    "displayName": "基洛夫飞艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:ZEP",
    "name": "Kirov Airship"
  },
  "BPLN": {
    "displayName": "米格X",
    "sectionType": "Aircraft",
    "uiName": "NAME:BPLNX",
    "name": "X-Mig"
  },
  "BPLNE": {
    "displayName": "米格X",
    "sectionType": "Aircraft",
    "uiName": "NAME:BPLNX",
    "name": "X-Mig (Elite)"
  },
  "SPYP": {
    "displayName": "侦察机",
    "sectionType": "Aircraft",
    "uiName": "NAME:SpyP",
    "name": "Spy Plane"
  },
  "MIGSPY": {
    "displayName": "米格运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:MIGSPY",
    "name": "Mig Transport"
  },
  "RAVA": {
    "displayName": "德拉库夫机动监狱",
    "sectionType": "Vehicle",
    "uiName": "NAME:RAVA",
    "name": "Drakuv Prison Vehicle"
  },
  "SENT": {
    "displayName": "哨兵防空车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SENT",
    "name": "Sentinel"
  },
  "EMPR": {
    "displayName": "女娲加农炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPR",
    "name": "Nuwa Cannon"
  },
  "SDRN": {
    "displayName": "维修无人机",
    "sectionType": "Vehicle",
    "uiName": "NAME:SDRN",
    "name": "Repair Drone"
  },
  "BOREK": {
    "displayName": "破坏神载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOREK",
    "name": "Borillo"
  },
  "BOREKW": {
    "displayName": "破坏神载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOREK",
    "name": "Borillo (Water)"
  },
  "ARMA": {
    "displayName": "犰狳重型载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:ARMA",
    "name": "Armadillo"
  },
  "ARMAW": {
    "displayName": "犰狳重型载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:ARMA",
    "name": "Armadillo (Water)"
  },
  "FOX": {
    "displayName": "狐步舞者战机",
    "sectionType": "Aircraft",
    "uiName": "NAME:FOX",
    "name": "Foxtrot"
  },
  "DUST": {
    "displayName": "尘旋风支援机",
    "sectionType": "Aircraft",
    "uiName": "NAME:DUST",
    "name": "Dustdevil"
  },
  "TU16": {
    "displayName": "沙暴支援机",
    "sectionType": "Aircraft",
    "uiName": "NAME:TU16",
    "name": "Sandstorm"
  },
  "WASTE": {
    "displayName": "辐射自爆机",
    "sectionType": "Aircraft",
    "uiName": "NAME:WASTE",
    "name": "Wastelot"
  },
  "CNTR": {
    "displayName": "百夫长攻城机甲",
    "sectionType": "Vehicle",
    "uiName": "NAME:CNTR",
    "name": "Centurion Siege Crawler"
  },
  "SMCV": {
    "displayName": "苏联机动建设车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SMCV",
    "name": "Soviet Construction Vehicle"
  },
  "MWF": {
    "displayName": "斯大林之拳",
    "sectionType": "Vehicle",
    "uiName": "NAME:MWF",
    "name": "Stalin's Fist"
  },
  "SUB": {
    "displayName": "台风攻击潜艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:SUBX",
    "name": "Typhoon Attack Sub"
  },
  "SUB2": {
    "displayName": "台风攻击潜艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:SUBX",
    "name": "Typhoon (Tesla)"
  },
  "SWLF": {
    "displayName": "海狼炮艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:SWLF",
    "name": "Seawolf Gunboat"
  },
  "DBOAT": {
    "displayName": "烈蚊自爆快艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:DBOAT",
    "name": "Mosquito Demoboat"
  },
  "REAP": {
    "displayName": "收割巡逻艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:REAP",
    "name": "Reaper Corvette"
  },
  "REAPL": {
    "displayName": "收割巡逻艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:REAP",
    "name": "Reaper (Land)"
  },
  "DRED": {
    "displayName": "库兹涅佐夫无畏舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:DREDK",
    "name": "Kuznetsov Dreadnought"
  },
  "AKULA": {
    "displayName": "阿库拉导弹潜艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:AKULA",
    "name": "Akula Missile Sub"
  },
  "HARV": {
    "displayName": "武装采矿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:HARV",
    "name": "War Miner"
  },
  "HORV": {
    "displayName": "武装采矿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:HORVV",
    "name": "War Miner (No Back)"
  },
  "BURA": {
    "displayName": "布拉提诺火箭车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BURA",
    "name": "Buratino"
  },
  "BURA2": {
    "displayName": "布拉提诺火箭车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BURA",
    "name": "Buratino (Spread)"
  },
  "APOC": {
    "displayName": "灾厄坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:CATA",
    "name": "Catastrophe Tank"
  },
  "BGGY": {
    "displayName": "自爆吉普车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BGGY",
    "name": "Bomb Buggy"
  },
  "DTRUCK": {
    "displayName": "自爆卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:DTRUCK2",
    "name": "Demolition Truck"
  },
  "LTNK": {
    "displayName": "鞭打者轻型坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:Lasher",
    "name": "Lasher Light Tank"
  },
  "QTNK": {
    "displayName": "螳螂拼装坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:QTNK",
    "name": "Mantis Scrap Tank"
  },
  "STNK": {
    "displayName": "奥普斯定制坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:STNK",
    "name": "Opus Custom Tank"
  },
  "TRIKE": {
    "displayName": "极速三轮摩托车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRIKE",
    "name": "Speeder Trike"
  },
  "TRIKE2": {
    "displayName": "极速三轮摩托车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRIKE",
    "name": "Speeder (Lobber)"
  },
  "COYO": {
    "displayName": "氧化者防空支援车",
    "sectionType": "Vehicle",
    "uiName": "NAME:OXID",
    "name": "Oxidizer"
  },
  "COYOW": {
    "displayName": "氧化者防空支援车",
    "sectionType": "Vehicle",
    "uiName": "NAME:OXID",
    "name": "Oxidizer (Water)"
  },
  "STING": {
    "displayName": "毒刺无人载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:Stinger",
    "name": "Stinger"
  },
  "YTNK": {
    "displayName": "加特林坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:YTNK",
    "name": "Gatling Tank"
  },
  "QUAD": {
    "displayName": "迷雾机动车",
    "sectionType": "Vehicle",
    "uiName": "NAME:QUAD",
    "name": "Hazequad"
  },
  "YAQUAD": {
    "displayName": "迷雾核心",
    "sectionType": "Building",
    "uiName": "NAME:YAQUAD",
    "name": "Deployed Hazequad"
  },
  "DRIL": {
    "displayName": "钻地运输车",
    "sectionType": "Vehicle",
    "uiName": "NAME:DRIL",
    "name": "Driller APC"
  },
  "MAGNET": {
    "displayName": "磁力射线",
    "sectionType": "Vehicle",
    "uiName": "NAME:MAGNET",
    "name": "Magnetic Beam"
  },
  "MAGNET_1": {
    "displayName": "Addon - Magnetic Beam",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Magnetic Beam"
  },
  "MAGNET_2": {
    "displayName": "Addon - Nautilus Beam",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Nautilus Beam"
  },
  "TELE": {
    "displayName": "磁控坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:Magnetron",
    "name": "Magnetron"
  },
  "MIND": {
    "displayName": "心灵之主",
    "sectionType": "Vehicle",
    "uiName": "NAME:MIND",
    "name": "Mastermind"
  },
  "DEVO": {
    "displayName": "巨像",
    "sectionType": "Vehicle",
    "uiName": "NAME:DEVO",
    "name": "Colossus"
  },
  "DEVOD": {
    "displayName": "巨像",
    "sectionType": "Vehicle",
    "uiName": "NAME:DEVO",
    "name": "Colossus (Anti-Air)"
  },
  "CAOS": {
    "displayName": "基因突击车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CAOS",
    "name": "Genequad"
  },
  "ESDR": {
    "displayName": "监视者无人机",
    "sectionType": "Vehicle",
    "uiName": "NAME:ESDR",
    "name": "Beholder"
  },
  "YAHCR": {
    "displayName": "炼狱防空平台",
    "sectionType": "Vehicle",
    "uiName": "NAME:YAHCR",
    "name": "Gehenna Platform"
  },
  "YAPLN": {
    "displayName": "恶灵拦截机",
    "sectionType": "Aircraft",
    "uiName": "NAME:YAPLN",
    "name": "Dybbuk-Interceptor"
  },
  "YAPLNB": {
    "displayName": "恶灵拦截机",
    "sectionType": "Aircraft",
    "uiName": "NAME:YAPLN",
    "name": "Dybbuk-I (Hive)"
  },
  "DYBTR": {
    "displayName": "恶灵运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:DYBTR",
    "name": "Dybbuk-Transport"
  },
  "DBAT": {
    "displayName": "恶灵攻击机",
    "sectionType": "Aircraft",
    "uiName": "NAME:DBAT",
    "name": "Dybbuk-Striker"
  },
  "PLAG": {
    "displayName": "瘟疫投石机",
    "sectionType": "Vehicle",
    "uiName": "NAME:PLAG",
    "name": "Plague Splatter"
  },
  "SHADOW": {
    "displayName": "魔影坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:SHADOW",
    "name": "Shadow Tank"
  },
  "SHADOWF": {
    "displayName": "魔影坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:SHADOW",
    "name": "Shadow Tank (No Attack)"
  },
  "DISK": {
    "displayName": "入侵飞碟",
    "sectionType": "Vehicle",
    "uiName": "NAME:INVADER",
    "name": "Invader"
  },
  "RUINER": {
    "displayName": "压制飞碟",
    "sectionType": "Vehicle",
    "uiName": "NAME:RUINER",
    "name": "Ruiner"
  },
  "BLIGHT": {
    "displayName": "恶灵战机",
    "sectionType": "Aircraft",
    "uiName": "NAME:BLIGHT",
    "name": "Dybbuk-Attacker"
  },
  "VENOM": {
    "displayName": "恶灵基因升腾者",
    "sectionType": "Animation",
    "uiName": "NAME:VENOM",
    "name": "Dybbuk-Evolver"
  },
  "BASIL": {
    "displayName": "毒蜥空中战舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:BASIL",
    "name": "Basilisk"
  },
  "GOTTER": {
    "displayName": "空中要塞伊利卡拉",
    "sectionType": "Vehicle",
    "uiName": "NAME:GOTTER",
    "name": "Aerial Fortress Irkalla"
  },
  "GRND": {
    "displayName": "机动粉碎机",
    "sectionType": "Vehicle",
    "uiName": "NAME:GRND",
    "name": "Mobile Grinder"
  },
  "SMIN": {
    "displayName": "雷格机动前哨站",
    "sectionType": "Vehicle",
    "uiName": "NAME:WARRIG",
    "name": "War Rig"
  },
  "PCV": {
    "displayName": "厄普西隆机动建设车",
    "sectionType": "Vehicle",
    "uiName": "NAME:PCV",
    "name": "Epsilon Construction Vehicle"
  },
  "XPCV": {
    "displayName": "厄普西隆机动建设车",
    "sectionType": "Vehicle",
    "uiName": "NAME:XPCV",
    "name": "Fake Epsilon MCV"
  },
  "YHVR": {
    "displayName": "神舟运输艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:YHVR",
    "name": "Mandjet Transport"
  },
  "SLED": {
    "displayName": "食人鱼迷你潜艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:PIRANHA",
    "name": "Piranha Minisub"
  },
  "SQD": {
    "displayName": "巨型乌贼",
    "sectionType": "Vehicle",
    "uiName": "NAME:SQD",
    "name": "Giant Squid"
  },
  "BSUB": {
    "displayName": "瘟神弹道潜艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:RESP",
    "name": "Resheph Ballistic Sub"
  },
  "NAUT": {
    "displayName": "鹦鹉螺磁力潜艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:NAUT",
    "name": "Nautilus Magnetic Sub"
  },
  "YMIN": {
    "displayName": "幽灵采矿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:YMIN",
    "name": "Ghost Miner"
  },
  "YMON": {
    "displayName": "幽灵采矿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:YMIN",
    "name": "Ghost Miner (No Back)"
  },
  "SCAV": {
    "displayName": "暴君",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCAV",
    "name": "Tyrant"
  },
  "MARA": {
    "displayName": "掠夺者坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:MARA",
    "name": "Marauder"
  },
  "MARAW": {
    "displayName": "掠夺者坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:MARA",
    "name": "Marauder (Water)"
  },
  "ROACH": {
    "displayName": "蛮牛角斗坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:BIZON",
    "name": "Bison Combat Tank"
  },
  "DRACO": {
    "displayName": "飞蜥弹射坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:DRACO",
    "name": "Draco Light Tank"
  },
  "DRACOD": {
    "displayName": "飞蜥炮台无人机",
    "sectionType": "Vehicle",
    "uiName": "NAME:DRACOD",
    "name": "Draco Autoturret"
  },
  "JACKAL": {
    "displayName": "豺狼突击载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:JACKAL",
    "name": "Jackal Racer"
  },
  "TERA": {
    "displayName": "雷鸟无人防空车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TERA",
    "name": "Teratorn"
  },
  "BUZZ": {
    "displayName": "秃鹰攻击机",
    "sectionType": "Vehicle",
    "uiName": "NAME:BUZZ",
    "name": "Buzzard"
  },
  "COND": {
    "displayName": "苍鹰攻击机",
    "sectionType": "Vehicle",
    "uiName": "NAME:COND",
    "name": "Condor"
  },
  "RACC": {
    "displayName": "浣熊干扰车",
    "sectionType": "Vehicle",
    "uiName": "NAME:RACC",
    "name": "Raccoon"
  },
  "COON": {
    "displayName": "浣熊悬浮干扰车",
    "sectionType": "Vehicle",
    "uiName": "NAME:COON",
    "name": "Hovracoon"
  },
  "MSA": {
    "displayName": "机动声波侦测仪",
    "sectionType": "Vehicle",
    "uiName": "NAME:MSA",
    "name": "SODAR Array"
  },
  "MSAW": {
    "displayName": "机动声波侦测仪",
    "sectionType": "Vehicle",
    "uiName": "NAME:MSA",
    "name": "SODAR Array (Water)"
  },
  "FAMSA": {
    "displayName": "声波侦测仪",
    "sectionType": "Building",
    "uiName": "NAME:FAMSA",
    "name": "Deployed SODAR"
  },
  "FAMSAW": {
    "displayName": "声波侦测仪",
    "sectionType": "Building",
    "uiName": "NAME:FAMSA",
    "name": "Deployed SODAR (Water)"
  },
  "ORCIN": {
    "displayName": "虎鲸波动干扰器",
    "sectionType": "Vehicle",
    "uiName": "NAME:ORCIN",
    "name": "Orcinus Waveshaper"
  },
  "FAORCI": {
    "displayName": "虎鲸波动干扰器",
    "sectionType": "Building",
    "uiName": "NAME:FAORCI",
    "name": "Deployed Orcinus"
  },
  "TARCHIA": {
    "displayName": "多智龙火炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:TARCHIA",
    "name": "Tarchia Cannon"
  },
  "MAD": {
    "displayName": "M.A.D.M.A.N.\n-部署自爆-",
    "sectionType": "Vehicle",
    "uiName": "NAME:MAD",
    "name": "M.A.D.M.A.N."
  },
  "MADAI": {
    "displayName": "M.A.D.M.A.N.\n-部署自爆-",
    "sectionType": "Vehicle",
    "uiName": "NAME:MAD",
    "name": "M.A.D.M.A.N. (AI)"
  },
  "SHRAY": {
    "displayName": "沙德雷聚波坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:SHRAY",
    "name": "Shadray Torch Tank"
  },
  "FMCV": {
    "displayName": "焚风机动建设车",
    "sectionType": "Vehicle",
    "uiName": "NAME:FMCV",
    "name": "Foehn Construction Vehicle"
  },
  "VIPER": {
    "displayName": "无齿翼龙突击机",
    "sectionType": "Vehicle",
    "uiName": "NAME:VIPER",
    "name": "Pteranodon"
  },
  "D_VIPER": {
    "displayName": "无齿翼龙突击机",
    "sectionType": "Vehicle",
    "uiName": "NAME:VIPER",
    "name": "Decoy Pteranodon"
  },
  "DIVER": {
    "displayName": "爆裂蜂",
    "sectionType": "Vehicle",
    "uiName": "NAME:DIVER",
    "name": "Diverbee"
  },
  "SEAT": {
    "displayName": "海猫运输艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:SEAT",
    "name": "Watercat Transport"
  },
  "SWORD": {
    "displayName": "剑鱼护卫舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:SWORD",
    "name": "Swordfish"
  },
  "SHARK": {
    "displayName": "扁鲨迷幻潜艇",
    "sectionType": "Vehicle",
    "uiName": "NAME:SHARK",
    "name": "Angelshark"
  },
  "MANTA": {
    "displayName": "魔鬼鱼无人防空舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:MANTA",
    "name": "Whipray"
  },
  "LEVI": {
    "displayName": "利维坦无人机母舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:LEVI",
    "name": "Leviathan Helicarrier"
  },
  "LEVIA": {
    "displayName": "利维坦无人机",
    "sectionType": "Aircraft",
    "uiName": "NAME:LEVIA",
    "name": "Leviathan Helibot"
  },
  "MEGA": {
    "displayName": "巨齿鲨机甲",
    "sectionType": "Vehicle",
    "uiName": "NAME:MEGA",
    "name": "Megalodon"
  },
  "ROADR": {
    "displayName": "走鹃活动炸弹",
    "sectionType": "Vehicle",
    "uiName": "NAME:ROADR",
    "name": "Roadrunner"
  },
  "ROADR2": {
    "displayName": "走鹃活动炸弹",
    "sectionType": "Vehicle",
    "uiName": "NAME:ROADR",
    "name": "Roadrunner (No Attack)"
  },
  "PROME": {
    "displayName": "乳齿象坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:PROME",
    "name": "Mastodon"
  },
  "BOID": {
    "displayName": "机械造物",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOID",
    "name": "Boidmachine"
  },
  "FABOID": {
    "displayName": "机械造物",
    "sectionType": "Building",
    "uiName": "NAME:FABOID",
    "name": "Deployed Boidmachine"
  },
  "GHTNK": {
    "displayName": "巨鳄载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:GHTNK",
    "name": "Gharial"
  },
  "GHTNKW": {
    "displayName": "巨鳄载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:GHTNK",
    "name": "Gharial (Water)"
  },
  "CYCL": {
    "displayName": "独眼装甲巨人",
    "sectionType": "Vehicle",
    "uiName": "NAME:CYCL",
    "name": "Cyclops Walker"
  },
  "CYCL_1": {
    "displayName": "Addon - Cyclops Close Combat",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Cyclops Close Combat"
  },
  "NMIN": {
    "displayName": "矿甲虫",
    "sectionType": "Vehicle",
    "uiName": "NAME:NMIN",
    "name": "Minermite"
  },
  "SWPR": {
    "displayName": "扫荡者无人机",
    "sectionType": "Vehicle",
    "uiName": "NAME:SWPR",
    "name": "Sweeper"
  },
  "FASWPR": {
    "displayName": "扫荡者无人机",
    "sectionType": "Building",
    "uiName": "NAME:FASWPR",
    "name": "Deployed Sweeper"
  },
  "CONF": {
    "displayName": "激怒者支援车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CONF",
    "name": "Irritator"
  },
  "CONFD": {
    "displayName": "激怒者支援车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CONF",
    "name": "Deployed Irritator"
  },
  "HURR": {
    "displayName": "长生鸟空中哨站",
    "sectionType": "Vehicle",
    "uiName": "NAME:HURR",
    "name": "Alanqa Skystation"
  },
  "RECON": {
    "displayName": "扫描无人机",
    "sectionType": "Aircraft",
    "uiName": "NAME:RECON",
    "name": "Recon Probe"
  },
  "QUETZ": {
    "displayName": "风神翼龙",
    "sectionType": "Vehicle",
    "uiName": "NAME:QUETZ",
    "name": "Quetzal"
  },
  "D_QUETZ": {
    "displayName": "风神翼龙",
    "sectionType": "Vehicle",
    "uiName": "NAME:QUETZ",
    "name": "Decoy Quetzal"
  },
  "SEEKERD": {
    "displayName": "风神无人机",
    "sectionType": "Aircraft",
    "uiName": "NAME:SEEKERD",
    "name": "Quetzal Eyes"
  },
  "D_SEEKERD": {
    "displayName": "风神无人机",
    "sectionType": "Aircraft",
    "uiName": "NAME:SEEKERD",
    "name": "Decoy Quetzal Eyes"
  },
  "SHRIKE": {
    "displayName": "伯劳防空无人机",
    "sectionType": "Aircraft",
    "uiName": "NAME:SHRIKE",
    "name": "Shrike"
  },
  "HARB": {
    "displayName": "先锋炮艇机",
    "sectionType": "Aircraft",
    "uiName": "NAME:Harbinger",
    "name": "Harbinger"
  },
  "QUICK": {
    "displayName": "跃迁载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:QUICK",
    "name": "Quickshifter"
  },
  "LIONH": {
    "displayName": "狮心王轰炸机",
    "sectionType": "Aircraft",
    "uiName": "NAME:LIONH",
    "name": "Lionheart Bomber"
  },
  "CHRP": {
    "displayName": "超时空监狱",
    "sectionType": "Vehicle",
    "uiName": "NAME:CHRP",
    "name": "Chrono Prison"
  },
  "AHVYBOT2": {
    "displayName": "未来坦克阿尔法",
    "sectionType": "Vehicle",
    "uiName": "NAME:AHVYBOT2",
    "name": "Future Tank Alpha"
  },
  "AHVYBOT2B": {
    "displayName": "未来坦克阿尔法",
    "sectionType": "Vehicle",
    "uiName": "NAME:AHVYBOT2",
    "name": "F-Tank Alpha (Cannon)"
  },
  "GRUMBLE": {
    "displayName": "轰鸣防空导弹",
    "sectionType": "Vehicle",
    "uiName": "NAME:GRUMBLE",
    "name": "Grumble"
  },
  "NAGRUM": {
    "displayName": "轰鸣防空导弹",
    "sectionType": "Building",
    "uiName": "NAME:NAGRUM",
    "name": "Deployed Grumble"
  },
  "MAMM": {
    "displayName": "天启坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:MAMM",
    "name": "Apocalypse Tank"
  },
  "SYCKLE": {
    "displayName": "镰刃摩托车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SYCKLE",
    "name": "Syckle"
  },
  "IDRAG": {
    "displayName": "铁龙坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:IDRAG",
    "name": "Iron Dragon"
  },
  "TRACTOR": {
    "displayName": "清道夫坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRACTOR",
    "name": "Scavenger"
  },
  "WORMQ": {
    "displayName": "虫群女王",
    "sectionType": "Vehicle",
    "uiName": "NAME:WORMQ",
    "name": "Wormqueen"
  },
  "SEIZER": {
    "displayName": "恶灵摄魂师",
    "sectionType": "Aircraft",
    "uiName": "NAME:SEIZER",
    "name": "Dybbuk-Seizer"
  },
  "SALA": {
    "displayName": "火蜥蜴空中战舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:SALA",
    "name": "Salamander"
  },
  "SALA_1": {
    "displayName": "Addon - Salamander Confusion 1",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Salamander Confusion 1"
  },
  "SALA_2": {
    "displayName": "Addon - Salamander Confusion 2",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Salamander Confusion 2"
  },
  "PHNT": {
    "displayName": "幻光多管火箭炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:PHNT",
    "name": "Phantasm MLRS"
  },
  "SEITAAD": {
    "displayName": "塞泰龙弩炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:SEITAAD",
    "name": "Seitaad Ballista"
  },
  "ARCH": {
    "displayName": "恐龟加农炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:ARCH",
    "name": "Archelon"
  },
  "ARCH2": {
    "displayName": "恐龟加农炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:ARCH",
    "name": "Archelon (No Attack)"
  },
  "ARCHW": {
    "displayName": "恐龟加农炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:ARCH",
    "name": "Archelon (Water)"
  },
  "RAMW": {
    "displayName": "公羊",
    "sectionType": "Vehicle",
    "uiName": "NAME:RAMW",
    "name": "Ramwagon"
  },
  "KSNK": {
    "displayName": "重型坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:KSNK",
    "name": "Old Heavy Tank"
  },
  "OTRK": {
    "displayName": "自爆卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:DTRUCK2",
    "name": "Old Demo Truck"
  },
  "MADU": {
    "displayName": "M.A.D.坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:MADU",
    "name": "Old M.A.D. Tank"
  },
  "MAMU": {
    "displayName": "猛犸坦克",
    "sectionType": "Vehicle",
    "uiName": "NAME:MAMU",
    "name": "Old Mammoth Tank"
  },
  "V2": {
    "displayName": "V2火箭发射车",
    "sectionType": "Vehicle",
    "uiName": "NAME:V2",
    "name": "Old V2 Launcher"
  },
  "RANGER": {
    "displayName": "巡逻车",
    "sectionType": "Vehicle",
    "uiName": "NAME:RANGER",
    "name": "Old Ranger"
  },
  "MGG": {
    "displayName": "机动黑幕产生器",
    "sectionType": "Vehicle",
    "uiName": "NAME:MGG",
    "name": "Old Mobile Gap"
  },
  "GAMGG": {
    "displayName": "机动黑幕产生器",
    "sectionType": "Building",
    "uiName": "NAME:GAMGG",
    "name": "Deployed Old Mobile Gap"
  },
  "ARTY": {
    "displayName": "远程火炮",
    "sectionType": "Vehicle",
    "uiName": "NAME:ARTY",
    "name": "Old Artillery"
  },
  "LONGBO": {
    "displayName": "长弓直升机",
    "sectionType": "Vehicle",
    "uiName": "NAME:LONGBOW",
    "name": "Old Longbow"
  },
  "REJU": {
    "displayName": "空中维修机",
    "sectionType": "Vehicle",
    "uiName": "NAME:REJU",
    "name": "Rejuvenator"
  },
  "STARDUSTB": {
    "displayName": "悖论引擎",
    "sectionType": "Vehicle",
    "uiName": "NAME:STARDUST",
    "name": "The Paradox Engine"
  },
  "STARDUST": {
    "displayName": "悖论引擎",
    "sectionType": "Aircraft",
    "uiName": "NAME:STARDUST",
    "name": "The Paradox Engine (AI)"
  },
  "ICBM": {
    "displayName": "白杨M发射台",
    "sectionType": "Vehicle",
    "uiName": "NAME:ICBM",
    "name": "Topol-M"
  },
  "ICBMWO": {
    "displayName": "白杨M发射台",
    "sectionType": "Vehicle",
    "uiName": "NAME:ICBM",
    "name": "Topol-M (No Rocket)"
  },
  "GRAV": {
    "displayName": "力神飞碟",
    "sectionType": "Vehicle",
    "uiName": "NAME:GRAV",
    "name": "Gravitron"
  },
  "DMCV": {
    "displayName": "Dummy Base Unit",
    "sectionType": "Vehicle",
    "name": "Dummy Base Unit"
  },
  "AMWC": {
    "displayName": "科技卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AMWC",
    "name": "Tech Truck A"
  },
  "AMWB": {
    "displayName": "科技卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AMWC",
    "name": "Tech Truck B"
  },
  "AMWD": {
    "displayName": "科技卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AMWC",
    "name": "Tech Truck C"
  },
  "FLATA": {
    "displayName": "飞毛腿导弹运输车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCTR",
    "name": "Scud Transport A"
  },
  "FLATB": {
    "displayName": "飞毛腿导弹运输车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCTR",
    "name": "Scud Transport B"
  },
  "FLATC": {
    "displayName": "飞毛腿导弹运输车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SCTR",
    "name": "Scud Transport C"
  },
  "MECHA": {
    "displayName": "天狗机器人",
    "sectionType": "Vehicle",
    "uiName": "NAME:MECHA",
    "name": "Robo Tengu"
  },
  "AHVYBOT": {
    "displayName": "未来坦克X-0",
    "sectionType": "Vehicle",
    "uiName": "NAME:AHVYBOT",
    "name": "Future Tank X-0"
  },
  "SHINBOT": {
    "displayName": "新型长剑毁灭装甲",
    "sectionType": "Vehicle",
    "uiName": "NAME:SHINBOT",
    "name": "Shin Tsurugi Decimator"
  },
  "UTOPIA": {
    "displayName": "乌托邦载具",
    "sectionType": "Vehicle",
    "uiName": "NAME:UTOPIA",
    "name": "Utopia Transport Pod"
  },
  "B52": {
    "displayName": "同温层堡垒轰炸机",
    "sectionType": "Aircraft",
    "uiName": "NAME:B52",
    "name": "Stratofortress"
  },
  "IRONWING": {
    "displayName": "铁翼喷气机",
    "sectionType": "Aircraft",
    "uiName": "NAME:IRONWING",
    "name": "Ironwing"
  },
  "PERUN": {
    "displayName": "佩龙旗舰",
    "sectionType": "Vehicle",
    "uiName": "NAME:PERUN",
    "name": "Perun Flagship"
  },
  "DHANDL": {
    "displayName": "埃列什基伽勒之手",
    "sectionType": "Vehicle",
    "uiName": "NAME:DHANDL",
    "name": "Hand of Ereshkigal Right"
  },
  "DHANDR": {
    "displayName": "埃列什基伽勒之手",
    "sectionType": "Vehicle",
    "uiName": "NAME:DHANDR",
    "name": "Hand of Ereshkigal Right"
  },
  "HEPH": {
    "displayName": "冥府守护神",
    "sectionType": "Vehicle",
    "uiName": "NAME:HEPH",
    "name": "Ganzir Defender"
  },
  "MDUMMY1": {
    "displayName": "Map Dummy 1",
    "sectionType": "Vehicle",
    "name": "Map Dummy 1"
  },
  "MDUMMY2": {
    "displayName": "Map Dummy 2",
    "sectionType": "Vehicle",
    "name": "Map Dummy 2"
  },
  "MDUMMY3": {
    "displayName": "Map Dummy 3",
    "sectionType": "Vehicle",
    "name": "Map Dummy 3"
  },
  "CDUMMY": {
    "displayName": "Crate Drop (Spawner)",
    "sectionType": "Vehicle",
    "name": "Crate Drop (Spawner)"
  },
  "GCHF": {
    "displayName": "Gear Change (Spawner)",
    "sectionType": "Vehicle",
    "name": "Gear Change (Spawner)"
  },
  "NCHF": {
    "displayName": "Nanocharge (Spawner)",
    "sectionType": "Vehicle",
    "name": "Nanocharge (Spawner)"
  },
  "BOIDF": {
    "displayName": "Mission Marker (Spawner)",
    "sectionType": "Vehicle",
    "name": "Mission Marker (Spawner)"
  },
  "ICE1": {
    "displayName": "Antarctic Ice Floe",
    "sectionType": "Vehicle",
    "name": "Antarctic Ice Floe"
  },
  "SLOCOA": {
    "displayName": "机车",
    "sectionType": "Vehicle",
    "uiName": "NAME:STEAM",
    "name": "Locomotive A"
  },
  "SLOCOB": {
    "displayName": "机车",
    "sectionType": "Vehicle",
    "uiName": "NAME:STEAM",
    "name": "Locomotive B"
  },
  "STEAM": {
    "displayName": "机车",
    "sectionType": "Vehicle",
    "uiName": "NAME:STEAM",
    "name": "Locomotive Steam"
  },
  "SSUBCARB": {
    "displayName": "列车车厢",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRINCAR",
    "name": "Train Car A"
  },
  "SSUBCARC": {
    "displayName": "列车车厢",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRINCAR",
    "name": "Train Car B"
  },
  "SSUBCAR": {
    "displayName": "列车车厢",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRINCAR",
    "name": "Train Car C"
  },
  "CBLC": {
    "displayName": "电车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CBLC",
    "name": "Cable Car"
  },
  "SBOOMCAR": {
    "displayName": "闹市车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOOMCAR",
    "name": "Boom Car"
  },
  "SFLTCAR": {
    "displayName": "平板货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:FLTCAR",
    "name": "Flat Car"
  },
  "SCTCAR": {
    "displayName": "集装箱货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CTCAR",
    "name": "Container Car A"
  },
  "SCTCRB": {
    "displayName": "集装箱货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CTCAR",
    "name": "Container Car B"
  },
  "SBOXBR": {
    "displayName": "箱式货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOXCAR",
    "name": "Box Car A"
  },
  "SBOXBU": {
    "displayName": "箱式货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOXCAR",
    "name": "Box Car B"
  },
  "SUVB": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile L"
  },
  "MIXER": {
    "displayName": "混凝土搅拌车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MIXER",
    "name": "Concrete Mixer Truck"
  },
  "TRUCKA": {
    "displayName": "卡车（空）",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRUCKAA",
    "name": "Truck (Empty)"
  },
  "TRASH": {
    "displayName": "垃圾车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRASH",
    "name": "Garbage Truck"
  },
  "OILTRUCK": {
    "displayName": "油罐车",
    "sectionType": "Vehicle",
    "uiName": "NAME:OILTRUCK",
    "name": "Oil Truck"
  },
  "TRUCKB": {
    "displayName": "卡车（载货）",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRUCKBB",
    "name": "Truck (Loaded)"
  },
  "BUS": {
    "displayName": "校车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BUS",
    "name": "School Bus"
  },
  "DDBX": {
    "displayName": "双层巴士",
    "sectionType": "Vehicle",
    "uiName": "NAME:DDBX",
    "name": "Double Decker Bus"
  },
  "REDBUS": {
    "displayName": "公交车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BUSRED",
    "name": "Bus Red"
  },
  "BLUBUS": {
    "displayName": "公交车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BUSRED",
    "name": "Bus White"
  },
  "GRNBUS": {
    "displayName": "公交车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BUSRED",
    "name": "Bus Green"
  },
  "PICK": {
    "displayName": "皮卡货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:PICKK",
    "name": "Pickup Truck A"
  },
  "CAR": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile A"
  },
  "BEETL": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile E"
  },
  "PRS": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile F"
  },
  "PRSA": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile G"
  },
  "ARGT": {
    "displayName": "出租车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TAXII",
    "name": "Taxi Argentinian"
  },
  "REDR12": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile C"
  },
  "KAMAZ": {
    "displayName": "卡玛兹卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:KAMAZ",
    "name": "Kamaz Truck"
  },
  "HKAMAZ": {
    "displayName": "重型卡玛兹卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:HKAMAZ",
    "name": "Heavy Kamaz Truck"
  },
  "SPGRE": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile B"
  },
  "WZHDL": {
    "displayName": "运输卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:WZHDL",
    "name": "Delivery Truck"
  },
  "WINI": {
    "displayName": "露营车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CAMPER",
    "name": "Campervan"
  },
  "CREAM": {
    "displayName": "冰淇淋车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CREAM",
    "name": "Ice Cream Truck"
  },
  "PROPA": {
    "displayName": "宣传车",
    "sectionType": "Vehicle",
    "uiName": "NAME:PROPA",
    "name": "Propaganda Truck"
  },
  "CONA": {
    "displayName": "挖掘机",
    "sectionType": "Vehicle",
    "uiName": "NAME:CONA",
    "name": "Excavator"
  },
  "COP": {
    "displayName": "警车",
    "sectionType": "Vehicle",
    "uiName": "NAME:PIGCAR",
    "name": "Police Car"
  },
  "COPCAR": {
    "displayName": "警车",
    "sectionType": "Vehicle",
    "uiName": "NAME:COPCAR",
    "name": "Police Van"
  },
  "SWAT1": {
    "displayName": "SWAT卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SWAT1",
    "name": "SWAT Truck"
  },
  "SWAT2": {
    "displayName": "SWAT货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SWAT2",
    "name": "SWAT Van"
  },
  "CONVEH": {
    "displayName": "建设车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CONVEH",
    "name": "Construction Vehicle"
  },
  "CONTR": {
    "displayName": "建造卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CONTR",
    "name": "Construction Truck"
  },
  "DTRK": {
    "displayName": "翻斗车",
    "sectionType": "Vehicle",
    "uiName": "NAME:DTRK",
    "name": "Dump Truck"
  },
  "CONTP": {
    "displayName": "平台单位",
    "sectionType": "Vehicle",
    "uiName": "NAME:CONTP",
    "name": "Platform Unit"
  },
  "COMBA": {
    "displayName": "联合收割机",
    "sectionType": "Vehicle",
    "uiName": "NAME:COMBINE",
    "name": "Combine A"
  },
  "COMBB": {
    "displayName": "联合收割机",
    "sectionType": "Vehicle",
    "uiName": "NAME:COMBINE",
    "name": "Combine B"
  },
  "COMBC": {
    "displayName": "联合收割机",
    "sectionType": "Vehicle",
    "uiName": "NAME:COMBINE",
    "name": "Combine C"
  },
  "DOZER": {
    "displayName": "推土机",
    "sectionType": "Vehicle",
    "uiName": "NAME:DOZER",
    "name": "Dozer"
  },
  "BLDZ": {
    "displayName": "推土机",
    "sectionType": "Vehicle",
    "uiName": "NAME:BLDZ",
    "name": "Bulldozer A"
  },
  "DRLLTRCK": {
    "displayName": "钻井车",
    "sectionType": "Vehicle",
    "uiName": "NAME:DRLLTRCK",
    "name": "Drill Truck"
  },
  "BOBC": {
    "displayName": "山猫挖掘机",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOBC",
    "name": "Bobcat"
  },
  "FLOAD": {
    "displayName": "前端装载机",
    "sectionType": "Vehicle",
    "uiName": "NAME:FLOAD",
    "name": "Front Loader A"
  },
  "FLOADB": {
    "displayName": "前端装载机",
    "sectionType": "Vehicle",
    "uiName": "NAME:FLOAD",
    "name": "Front Loader B"
  },
  "SDOZ": {
    "displayName": "推土机",
    "sectionType": "Vehicle",
    "uiName": "NAME:BLDZ",
    "name": "Bulldozer B"
  },
  "ROLLER": {
    "displayName": "蒸汽压路机",
    "sectionType": "Vehicle",
    "uiName": "NAME:ROLLER",
    "name": "Steam Roller"
  },
  "RDROLLER": {
    "displayName": "压路机",
    "sectionType": "Vehicle",
    "uiName": "NAME:RDROLLER",
    "name": "Road Roller"
  },
  "SMOB": {
    "displayName": "雪地机动车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SMOB",
    "name": "Snowmobile"
  },
  "GROOMER": {
    "displayName": "压雪机",
    "sectionType": "Vehicle",
    "uiName": "NAME:GROOMER",
    "name": "Snow Groomer"
  },
  "FARM": {
    "displayName": "拖拉机",
    "sectionType": "Vehicle",
    "uiName": "NAME:FARM",
    "name": "Tractor A"
  },
  "RFARM": {
    "displayName": "拖拉机",
    "sectionType": "Vehicle",
    "uiName": "NAME:FARM",
    "name": "Tractor B"
  },
  "MACK": {
    "displayName": "洒水车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MACK",
    "name": "Water Truck"
  },
  "TOW": {
    "displayName": "拖车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TOW",
    "name": "Tow Truck"
  },
  "SPORT": {
    "displayName": "跑车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SPORT",
    "name": "Sports Car A"
  },
  "SPORTB": {
    "displayName": "跑车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SPORT",
    "name": "Sports Car B"
  },
  "SPORTC": {
    "displayName": "跑车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SPORT",
    "name": "Sports Car C"
  },
  "SPORTD": {
    "displayName": "跑车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SPORT",
    "name": "Sports Car D"
  },
  "SPORTE": {
    "displayName": "跑车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SPORT",
    "name": "Sports Car E"
  },
  "SPORTF": {
    "displayName": "跑车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SPORT",
    "name": "Sports Car F"
  },
  "SPORTG": {
    "displayName": "跑车",
    "sectionType": "Vehicle",
    "uiName": "NAME:SPORT",
    "name": "Sports Car G"
  },
  "GIGA": {
    "displayName": "巨型怪兽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:GIGA",
    "name": "The Gigahorse"
  },
  "EUROC": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile I"
  },
  "LIMO": {
    "displayName": "豪华轿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:LIMOW",
    "name": "Limousine Black"
  },
  "LIMOW": {
    "displayName": "豪华轿车",
    "sectionType": "Vehicle",
    "uiName": "NAME:LIMOW",
    "name": "Limousine White"
  },
  "STANG": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile M"
  },
  "CARN": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile N"
  },
  "CARO": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile O"
  },
  "CAD": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile P"
  },
  "MERC": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile R"
  },
  "HOTR": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile S"
  },
  "BEET2": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile T"
  },
  "BUICK": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile U"
  },
  "FIAT": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile W"
  },
  "PLYM": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile V"
  },
  "VAN1": {
    "displayName": "小型货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MVAN",
    "name": "Minivan A"
  },
  "VAN2": {
    "displayName": "小型货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MVAN",
    "name": "Minivan B"
  },
  "VAN3": {
    "displayName": "小型货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MVAN",
    "name": "Minivan C"
  },
  "VAN4": {
    "displayName": "小型货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MVAN",
    "name": "Minivan D"
  },
  "TRKO": {
    "displayName": "卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRKO",
    "name": "Truck A"
  },
  "TRKG": {
    "displayName": "卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRKO",
    "name": "Truck B"
  },
  "TRKD": {
    "displayName": "卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:TRKO",
    "name": "Truck C"
  },
  "CTRUCK": {
    "displayName": "运输卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CTRUCK",
    "name": "Cargo Truck"
  },
  "SUVW": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile J"
  },
  "SUV": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile D"
  },
  "TAXI": {
    "displayName": "出租车",
    "sectionType": "Vehicle",
    "uiName": "NAME:Taxii",
    "name": "Taxi American"
  },
  "TAXI2": {
    "displayName": "出租车",
    "sectionType": "Vehicle",
    "uiName": "NAME:Taxii",
    "name": "Taxi European"
  },
  "YCAB": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile H"
  },
  "JEEP": {
    "displayName": "吉普车",
    "sectionType": "Vehicle",
    "uiName": "NAME:JEEPP",
    "name": "Jeep A"
  },
  "GJEEP": {
    "displayName": "吉普车",
    "sectionType": "Vehicle",
    "uiName": "NAME:JEEPP",
    "name": "Jeep B"
  },
  "BJEEP": {
    "displayName": "吉普车",
    "sectionType": "Vehicle",
    "uiName": "NAME:JEEPP",
    "name": "Jeep C"
  },
  "YJEEP": {
    "displayName": "吉普车",
    "sectionType": "Vehicle",
    "uiName": "NAME:JEEPP",
    "name": "Jeep D"
  },
  "BCAB": {
    "displayName": "汽车",
    "sectionType": "Vehicle",
    "uiName": "NAME:CARS",
    "name": "Automobile K"
  },
  "PTRUCK": {
    "displayName": "皮卡货车",
    "sectionType": "Vehicle",
    "uiName": "NAME:PICKK",
    "name": "Pickup Truck B"
  },
  "BTRUCK": {
    "displayName": "箱式卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:BTRUCK",
    "name": "Box Truck"
  },
  "DIGG": {
    "displayName": "小型挖掘机",
    "sectionType": "Vehicle",
    "uiName": "NAME:DIGG",
    "name": "Mini Digger"
  },
  "MTRUCK": {
    "displayName": "怪物卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MTRUCK",
    "name": "Monster Truck A"
  },
  "MTRUCKB": {
    "displayName": "怪物卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MTRUCK",
    "name": "Monster Truck B"
  },
  "MTRUCKC": {
    "displayName": "怪物卡车",
    "sectionType": "Vehicle",
    "uiName": "NAME:MTRUCK",
    "name": "Monster Truck C"
  },
  "PLOW": {
    "displayName": "扫雪车",
    "sectionType": "Vehicle",
    "uiName": "NAME:PLOW",
    "name": "Snowplow Truck"
  },
  "BLOWER": {
    "displayName": "铲雪机",
    "sectionType": "Vehicle",
    "uiName": "NAME:BLOWER",
    "name": "Snow Blower"
  },
  "LOG1": {
    "displayName": "木材装载机",
    "sectionType": "Vehicle",
    "uiName": "NAME:LOGL",
    "name": "Log Loader A"
  },
  "LOG2": {
    "displayName": "木材装载机",
    "sectionType": "Vehicle",
    "uiName": "NAME:LOGL",
    "name": "Log Loader B"
  },
  "DOLY": {
    "displayName": "摄影车",
    "sectionType": "Vehicle",
    "uiName": "NAME:DOLY",
    "name": "Camera Dolly"
  },
  "FTRK": {
    "displayName": "消防车",
    "sectionType": "Vehicle",
    "uiName": "NAME:FTRKA",
    "name": "Fire Truck A"
  },
  "FTRUCK": {
    "displayName": "消防车",
    "sectionType": "Vehicle",
    "uiName": "NAME:FTRKA",
    "name": "Fire Truck B"
  },
  "FITRK": {
    "displayName": "消防车",
    "sectionType": "Vehicle",
    "uiName": "NAME:FTRKA",
    "name": "Fire Truck C"
  },
  "FTRUK": {
    "displayName": "消防车",
    "sectionType": "Vehicle",
    "uiName": "NAME:FTRKA",
    "name": "Fire Truck D"
  },
  "EMC1": {
    "displayName": "应急车",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMC1",
    "name": "Emergency Unit A"
  },
  "EMC2": {
    "displayName": "应急车",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMC1",
    "name": "Emergency Unit B"
  },
  "AMBU": {
    "displayName": "救护车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AMBUL",
    "name": "Ambulance A"
  },
  "AMBL": {
    "displayName": "救护车",
    "sectionType": "Vehicle",
    "uiName": "NAME:AMBUL",
    "name": "Ambulance B"
  },
  "CRUISE": {
    "displayName": "游轮",
    "sectionType": "Vehicle",
    "uiName": "NAME:CruiseShip",
    "name": "Cruise Ship"
  },
  "OILTANKER": {
    "displayName": "油轮",
    "sectionType": "Vehicle",
    "uiName": "NAME:OILTANKER",
    "name": "Oil Tanker"
  },
  "TUG": {
    "displayName": "拖船",
    "sectionType": "Vehicle",
    "uiName": "NAME:TUGBOAT",
    "name": "Tug Boat"
  },
  "FBOAT": {
    "displayName": "渔船",
    "sectionType": "Vehicle",
    "uiName": "NAME:FBOAT",
    "name": "Fishing Boat"
  },
  "BOAT": {
    "displayName": "船",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOAT",
    "name": "Boat A"
  },
  "BOATB": {
    "displayName": "船",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOAT",
    "name": "Boat B"
  },
  "BOATC": {
    "displayName": "船",
    "sectionType": "Vehicle",
    "uiName": "NAME:BOAT",
    "name": "Boat C"
  },
  "PROPPL": {
    "displayName": "螺旋桨飞机",
    "sectionType": "Vehicle",
    "uiName": "NAME:PROPPL",
    "name": "Propeller Plane A"
  },
  "PROPPLB": {
    "displayName": "螺旋桨飞机",
    "sectionType": "Vehicle",
    "uiName": "NAME:PROPPL",
    "name": "Propeller Plane B"
  },
  "CIVP": {
    "displayName": "运输机",
    "sectionType": "Vehicle",
    "uiName": "NAME:CIVP",
    "name": "Transport Plane"
  },
  "V3ROCKET": {
    "displayName": "飞毛腿导弹",
    "sectionType": "Aircraft",
    "uiName": "NAME:SCDROCKET",
    "name": "Scud Rocket"
  },
  "V2ROCKET": {
    "displayName": "V2火箭",
    "sectionType": "Aircraft",
    "uiName": "NAME:V2ROCKET",
    "name": "V2 Rocket"
  },
  "PSBOM": {
    "displayName": "Psionic Bomb",
    "sectionType": "Aircraft",
    "name": "Psionic Bomb"
  },
  "ICBMROCKET": {
    "displayName": "白杨M导弹",
    "sectionType": "Aircraft",
    "uiName": "NAME:ICBMROCKET",
    "name": "ICBM Rocket"
  },
  "DMISL": {
    "displayName": "无畏导弹",
    "sectionType": "Aircraft",
    "uiName": "NAME:DMISLE",
    "name": "Dreadnought Missile"
  },
  "CMISL": {
    "displayName": "阿库拉导弹",
    "sectionType": "Aircraft",
    "uiName": "NAME:CMISLE",
    "name": "Akula Missile"
  },
  "PDPLANE": {
    "displayName": "运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PDPLANEZ",
    "name": "Cargo Plane A"
  },
  "PDPLANE2": {
    "displayName": "运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PDPLANEZ",
    "name": "Cargo Plane Allied"
  },
  "PDPLANEUS": {
    "displayName": "运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PDPLANEZ",
    "name": "Cargo Plane American"
  },
  "PDPLANE3": {
    "displayName": "运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PDPLANEZ",
    "name": "Cargo Plane Soviet"
  },
  "PDPLANE4": {
    "displayName": "运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PDPLANEZ",
    "name": "Cargo Plane Epsilon"
  },
  "PDPLANE5": {
    "displayName": "运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PDPLANEZ",
    "name": "Cargo Plane Foehn"
  },
  "CARGOPLANE": {
    "displayName": "运输机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PDPLANEZ",
    "name": "Cargo Plane B"
  },
  "PASPLN1": {
    "displayName": "客机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PASPLN",
    "name": "Passenger Plane A"
  },
  "PASPLN2": {
    "displayName": "客机",
    "sectionType": "Aircraft",
    "uiName": "NAME:PASPLN",
    "name": "Passenger Plane B"
  },
  "DUMMYDUMMY": {
    "displayName": "Dummy Normal (Do Not Use)",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Normal (Do Not Use)"
  },
  "AILOCK": {
    "displayName": "AI Locker (Do Not Use)",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "AI Locker (Do Not Use)"
  },
  "NOTHING": {
    "displayName": "Dummy Insignificant (Do Not Use)",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Insignificant (Do Not Use)"
  },
  "F_ERESB": {
    "displayName": "Fake Elite Reserves (Do Not Use)",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Fake Elite Reserves (Do Not Use)"
  },
  "F_KSNAK": {
    "displayName": "Kingsnake Warp",
    "sectionType": "Vehicle",
    "name": "Kingsnake Warp"
  },
  "CASHTAKE": {
    "displayName": "Dummy Cash Take",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Cash Take"
  },
  "CASHGIVE": {
    "displayName": "Dummy Cash Give",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Cash Give"
  },
  "CASHROUD": {
    "displayName": "Map Shroud Generator",
    "sectionType": "Building",
    "uiName": "NAME:CASHROUD",
    "name": "Map Shroud Generator"
  },
  "GAWEAPC": {
    "displayName": "GAWEAPC",
    "sectionType": "Unknown"
  },
  "NAWEAPC": {
    "displayName": "NAWEAPC",
    "sectionType": "Unknown"
  },
  "YAWEAPC": {
    "displayName": "YAWEAPC",
    "sectionType": "Unknown"
  },
  "FAWEAPC": {
    "displayName": "FAWEAPC",
    "sectionType": "Unknown"
  },
  "GACNST": {
    "displayName": "盟军建造场",
    "sectionType": "Building",
    "uiName": "NAME:GACNST",
    "name": "Allied Construction Yard"
  },
  "GAPOWR": {
    "displayName": "发电厂",
    "sectionType": "Building",
    "uiName": "NAME:GAPOWR",
    "name": "Power Plant"
  },
  "GAPOWRUP": {
    "displayName": "发电厂升级：动力涡轮",
    "sectionType": "Building",
    "uiName": "NAME:GAPOWRUP",
    "name": "Power Turbine"
  },
  "GAPILE": {
    "displayName": "盟军兵营",
    "sectionType": "Building",
    "uiName": "NAME:GAPILE",
    "name": "Allied Barracks"
  },
  "GAPILEB": {
    "displayName": "盟军兵营",
    "sectionType": "Building",
    "uiName": "NAME:GAPILE",
    "name": "Allied Barracks (AI)"
  },
  "GAREFN": {
    "displayName": "盟军矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:GAREFN",
    "name": "Allied Ore Refinery"
  },
  "GAWEAP": {
    "displayName": "盟军战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:GAWEAP",
    "name": "Allied War Factory"
  },
  "GAWEAPB": {
    "displayName": "盟军战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:GAWEAPZ",
    "name": "Allied War Factory (AI)"
  },
  "GAAIRC": {
    "displayName": "盟军空军指挥部",
    "sectionType": "Building",
    "uiName": "NAME:GAAIRB",
    "name": "Allied Air Force Command Headquarters"
  },
  "GADEPO": {
    "displayName": "军械库",
    "sectionType": "Building",
    "uiName": "NAME:GADEPO",
    "name": "Arsenal Depot"
  },
  "GAHPAD": {
    "displayName": "扩展跑道",
    "sectionType": "Building",
    "uiName": "NAME:GAHPADR",
    "name": "Runway"
  },
  "GAYARD": {
    "displayName": "盟军海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:GAYARDS",
    "name": "Allied Naval Shipyard"
  },
  "GAYARDAI": {
    "displayName": "盟军海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:GAYARDS",
    "name": "Allied Naval Shipyard (AI)"
  },
  "GATECH": {
    "displayName": "科技中心",
    "sectionType": "Building",
    "uiName": "NAME:GATECHZ",
    "name": "Allied Tech Center"
  },
  "GASTAS": {
    "displayName": "火控穹顶",
    "sectionType": "Building",
    "uiName": "NAME:GASTAS",
    "name": "Ultra Dome"
  },
  "GACLAB": {
    "displayName": "实验型传送平台",
    "sectionType": "Building",
    "uiName": "NAME:GACLAB",
    "name": "Experimental Warpshop"
  },
  "GAOREP": {
    "displayName": "矿石提纯器",
    "sectionType": "Building",
    "uiName": "NAME:GAOREP",
    "name": "Ore Purifier"
  },
  "GAMERC": {
    "displayName": "墨丘利卫星系统终端",
    "sectionType": "Building",
    "uiName": "NAME:MERCURY",
    "name": "Mercury Network Uplink"
  },
  "GASCPF": {
    "displayName": "机器人控制中心",
    "sectionType": "Building",
    "uiName": "NAME:GASCPF",
    "name": "Robot Ops Control Center"
  },
  "GASCEA": {
    "displayName": "防御指挥部",
    "sectionType": "Building",
    "uiName": "NAME:GASCEA",
    "name": "Shield Command"
  },
  "GAAIRC_D": {
    "displayName": "空军指挥部升级：空降控制站",
    "sectionType": "Building",
    "uiName": "NAME:GASCUS",
    "name": "Allied Drop Control"
  },
  "GAWALL": {
    "displayName": "混凝土墙",
    "sectionType": "Overlay",
    "uiName": "NAME:GAWALLS",
    "name": "Allied Concrete Wall"
  },
  "GAGATE_C": {
    "displayName": "闸门（南北方向）",
    "sectionType": "Animation",
    "uiName": "NAME:GATENS",
    "name": "Allied Gate NS"
  },
  "GAGATE_D": {
    "displayName": "闸门（东西方向）",
    "sectionType": "Animation",
    "uiName": "NAME:GATEEW",
    "name": "Allied Gate EW"
  },
  "GAPILL": {
    "displayName": "机枪碉堡",
    "sectionType": "Building",
    "uiName": "NAME:PILL",
    "name": "Pillbox"
  },
  "GACPIL": {
    "displayName": "迷彩机枪碉堡",
    "sectionType": "Building",
    "uiName": "NAME:GACPIL",
    "name": "Camo Pillbox"
  },
  "ZTARGET": {
    "displayName": "西风定位机器人",
    "sectionType": "Building",
    "uiName": "NAME:GAZEPH",
    "name": "Zephyrobot"
  },
  "GAGUN": {
    "displayName": "定点炮台",
    "sectionType": "Building",
    "uiName": "NAME:GAGUN",
    "name": "Gun Turret"
  },
  "NASAM": {
    "displayName": "爱国者防空导弹",
    "sectionType": "Building",
    "uiName": "NAME:NASAMM",
    "name": "Patriot Missiles"
  },
  "GAHYPE": {
    "displayName": "休伯利安防空炮",
    "sectionType": "Building",
    "uiName": "NAME:GAHYPE",
    "name": "Hyperion"
  },
  "GACRYOS": {
    "displayName": "冷冻地雷",
    "sectionType": "Building",
    "uiName": "NAME:GACRYOS",
    "name": "Cryomines (Spawner)"
  },
  "GACRYO": {
    "displayName": "冷冻地雷",
    "sectionType": "Building",
    "uiName": "NAME:GACRYO",
    "name": "Cryomine"
  },
  "GAROD": {
    "displayName": "引雷针",
    "sectionType": "Building",
    "uiName": "NAME:GAROD",
    "name": "Lightning Rod"
  },
  "ATESLA": {
    "displayName": "光棱塔",
    "sectionType": "Building",
    "uiName": "NAME:ATESLA",
    "name": "Prism Tower"
  },
  "GTGCAN": {
    "displayName": "巨炮",
    "sectionType": "Building",
    "uiName": "NAME:CAARTY",
    "name": "Grand Cannon"
  },
  "GAPOST": {
    "displayName": "传送节点",
    "sectionType": "Building",
    "uiName": "NAME:GANODE",
    "name": "Warpnode"
  },
  "GAGAP": {
    "displayName": "黑幕产生器",
    "sectionType": "Building",
    "uiName": "NAME:GAGAP",
    "name": "Gap Generator"
  },
  "GACSPH": {
    "displayName": "超时空传送仪",
    "sectionType": "Building",
    "uiName": "NAME:GACSPHH",
    "name": "Chronosphere"
  },
  "GAWEAT": {
    "displayName": "天气控制机",
    "sectionType": "Building",
    "uiName": "NAME:GAWEAT",
    "name": "Weather Controller"
  },
  "GASNPR": {
    "displayName": "哨塔",
    "sectionType": "Building",
    "uiName": "NAME:GASNPR",
    "name": "Allied Watch Tower"
  },
  "NACNST": {
    "displayName": "苏联建造场",
    "sectionType": "Building",
    "uiName": "NAME:NACNST",
    "name": "Soviet Construction Yard"
  },
  "NAPOWR": {
    "displayName": "磁能反应炉",
    "sectionType": "Building",
    "uiName": "NAME:NAPOWR",
    "name": "Tesla Reactor"
  },
  "NAHAND": {
    "displayName": "苏联兵营",
    "sectionType": "Building",
    "uiName": "NAME:NAHAND",
    "name": "Soviet Barracks"
  },
  "NAHANDB": {
    "displayName": "苏联兵营",
    "sectionType": "Building",
    "uiName": "NAME:NAHAND",
    "name": "Soviet Barracks (AI)"
  },
  "NAREFN": {
    "displayName": "苏联矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:NAREFN",
    "name": "Soviet Ore Refinery"
  },
  "NAWEAP": {
    "displayName": "苏联战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:NAWEAP",
    "name": "Soviet War Factory"
  },
  "NAWEAPB": {
    "displayName": "苏联战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:NAWEAPZ",
    "name": "Soviet War Factory (AI)"
  },
  "NAFIST": {
    "displayName": "前线战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:NAFIST",
    "name": "Deployed Stalin's Fist"
  },
  "NAAIR": {
    "displayName": "苏联空军基地",
    "sectionType": "Building",
    "uiName": "NAME:NAAIRB",
    "name": "Soviet Airbase"
  },
  "CANMIN": {
    "displayName": "水雷",
    "sectionType": "Building",
    "uiName": "NAME:CANMIN",
    "name": "Naval Mine"
  },
  "NAYARD": {
    "displayName": "苏联海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:NAYARDS",
    "name": "Soviet Naval Shipyard"
  },
  "NAYARDAI": {
    "displayName": "苏联海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:NAYARDS",
    "name": "Soviet Naval Shipyard (AI)"
  },
  "NARADR": {
    "displayName": "雷达站",
    "sectionType": "Building",
    "uiName": "NAME:NARADRB",
    "name": "Radar Dish"
  },
  "NAPRIS": {
    "displayName": "战地情报局",
    "sectionType": "Building",
    "uiName": "NAME:NAFBUR",
    "name": "Field Bureau"
  },
  "NAEMPS": {
    "displayName": "电磁脉冲控制站",
    "sectionType": "Building",
    "uiName": "NAME:NAEMPS",
    "name": "EMP Control Station"
  },
  "NATEK": {
    "displayName": "原子核心",
    "sectionType": "Building",
    "uiName": "NAME:NATEK",
    "name": "Chinese Atomheart"
  },
  "NATECHC": {
    "displayName": "作战实验室",
    "sectionType": "Building",
    "uiName": "NAME:NATECHC",
    "name": "Latin Battle Lab"
  },
  "NATECHR": {
    "displayName": "宫殿",
    "sectionType": "Building",
    "uiName": "NAME:NATECHZ",
    "name": "Russian Palace"
  },
  "NAINDP": {
    "displayName": "工业工厂",
    "sectionType": "Building",
    "uiName": "NAME:IndustrialPlant",
    "name": "Industrial Plant"
  },
  "NANRCT": {
    "displayName": "核子反应炉",
    "sectionType": "Building",
    "uiName": "NAME:NANRCT",
    "name": "Nuclear Reactor"
  },
  "NANRCTUP": {
    "displayName": "核能转换器",
    "sectionType": "Building",
    "uiName": "NAME:NANRCTUP",
    "name": "Nuclear Converter"
  },
  "NAWALL": {
    "displayName": "要塞墙",
    "sectionType": "Overlay",
    "uiName": "NAME:NAWALLS",
    "name": "Soviet Fortress Wall"
  },
  "NAGATE_A": {
    "displayName": "闸门（南北方向）",
    "sectionType": "Animation",
    "uiName": "NAME:GATENS",
    "name": "Soviet Gate NS"
  },
  "NAGATE_B": {
    "displayName": "闸门（东西方向）",
    "sectionType": "Animation",
    "uiName": "NAME:GATEEW",
    "name": "Soviet Gate EW"
  },
  "NALASR": {
    "displayName": "哨戒机炮",
    "sectionType": "Building",
    "uiName": "NAME:NALASR",
    "name": "Sentry Gun"
  },
  "NAFTUR": {
    "displayName": "烈焰炮塔",
    "sectionType": "Building",
    "uiName": "NAME:NAFTUR",
    "name": "Flame Tower"
  },
  "NAMORT": {
    "displayName": "烟雾炮台",
    "sectionType": "Building",
    "uiName": "NAME:NAMORT",
    "name": "Smoke Turret"
  },
  "NASCOM": {
    "displayName": "侦测塔",
    "sectionType": "Building",
    "uiName": "NAME:NASCOM",
    "name": "Sensor Tower"
  },
  "NATRAPS": {
    "displayName": "EMP地雷",
    "sectionType": "Building",
    "uiName": "NAME:NATRAPS",
    "name": "EMP Mines (Spawner)"
  },
  "NATRAP": {
    "displayName": "EMP地雷",
    "sectionType": "Building",
    "uiName": "NAME:NATRAP",
    "name": "EMP Mine"
  },
  "NAFLAK": {
    "displayName": "高射炮",
    "sectionType": "Building",
    "uiName": "NAME:NAFLAK",
    "name": "Flak Cannon"
  },
  "TESLA": {
    "displayName": "磁暴线圈",
    "sectionType": "Building",
    "uiName": "NAME:TESLA",
    "name": "Tesla Coil"
  },
  "NAHAMM": {
    "displayName": "地锤防御装置",
    "sectionType": "Building",
    "uiName": "NAME:NAHAMM",
    "name": "Hammer Defense"
  },
  "NADIST": {
    "displayName": "裂解防空塔",
    "sectionType": "Building",
    "uiName": "NAME:NADIST",
    "name": "Disruptor"
  },
  "NADRON": {
    "displayName": "维修起重机",
    "sectionType": "Building",
    "uiName": "NAME:NADRON",
    "name": "Repair Crane"
  },
  "NABNKR": {
    "displayName": "战斗碉堡",
    "sectionType": "Building",
    "uiName": "NAME:NABNKR",
    "name": "Battle Bunker"
  },
  "NABNKRR": {
    "displayName": "战斗碉堡",
    "sectionType": "Building",
    "uiName": "NAME:NABNKR",
    "name": "Instant Shelter"
  },
  "NAIRON": {
    "displayName": "铁幕装置",
    "sectionType": "Building",
    "uiName": "NAME:NAIRON",
    "name": "Iron Curtain Device"
  },
  "NAIRDM": {
    "displayName": "钢铁守卫",
    "sectionType": "Building",
    "uiName": "NAME:NAIRDM",
    "name": "Iron Guard"
  },
  "NAMISL": {
    "displayName": "战术核弹发射井",
    "sectionType": "Building",
    "uiName": "NAME:NAMISL",
    "name": "Tactical Nuke Silo"
  },
  "NASPOT": {
    "displayName": "哨塔",
    "sectionType": "Building",
    "uiName": "NAME:GASNPR",
    "name": "Soviet Watch Tower"
  },
  "NAHOSP": {
    "displayName": "医疗碉堡",
    "sectionType": "Building",
    "uiName": "NAME:NAHOSP",
    "name": "Medic Bunker"
  },
  "YACNST": {
    "displayName": "厄普西隆建造场",
    "sectionType": "Building",
    "uiName": "NAME:YACNSTA",
    "name": "Epsilon Construction Yard"
  },
  "YACXST": {
    "displayName": "假厄普西隆建造场",
    "sectionType": "Building",
    "uiName": "NAME:YACXST",
    "name": "Fake Construction Yard"
  },
  "YAPOWR": {
    "displayName": "生化反应室",
    "sectionType": "Building",
    "uiName": "NAME:YAPOWR",
    "name": "Bio Reactor"
  },
  "YAPOWRB": {
    "displayName": "生化反应室",
    "sectionType": "Building",
    "uiName": "NAME:YAPOWR",
    "name": "Bio Reactor (AI)"
  },
  "YABRCK": {
    "displayName": "厄普西隆兵营",
    "sectionType": "Building",
    "uiName": "NAME:YABRCK",
    "name": "Epsilon Barracks"
  },
  "YABRCKB": {
    "displayName": "厄普西隆兵营",
    "sectionType": "Building",
    "uiName": "NAME:YABRCK",
    "name": "Epsilon Barracks (AI)"
  },
  "YAVULT": {
    "displayName": "合成缸",
    "sectionType": "Building",
    "uiName": "NAME:YAVULT",
    "name": "Synthesis Vault"
  },
  "YARIREFN": {
    "displayName": "厄普西隆矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:YARIREFN",
    "name": "Epsilon Ore Refinery"
  },
  "YAWEAP": {
    "displayName": "厄普西隆战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:YAWEAPZ",
    "name": "Epsilon War Factory"
  },
  "YAWEAPB": {
    "displayName": "厄普西隆战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:YAWEAPZ",
    "name": "Epsilon War Factory (AI)"
  },
  "YAPSIS": {
    "displayName": "雷达旋塔",
    "sectionType": "Building",
    "uiName": "NAME:YAPSIS",
    "name": "Radar Spire"
  },
  "YAAIRF": {
    "displayName": "厄普西隆停机坪",
    "sectionType": "Building",
    "uiName": "NAME:YAAIRF",
    "name": "Epsilon Aerodome"
  },
  "YAYARD": {
    "displayName": "厄普西隆海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:YAYARDA",
    "name": "Epsilon Naval Shipyard"
  },
  "YAYARDAI": {
    "displayName": "厄普西隆海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:YAYARDA",
    "name": "Epsilon Naval Shipyard (AI)"
  },
  "YATECH": {
    "displayName": "潘多拉枢纽",
    "sectionType": "Building",
    "uiName": "NAME:YBLABZ",
    "name": "Epsilon Pandora Hub"
  },
  "YATXCH": {
    "displayName": "假潘多拉枢纽",
    "sectionType": "Building",
    "uiName": "NAME:YBLABX",
    "name": "Fake Pandora Hub"
  },
  "YAPVLT": {
    "displayName": "枢纽升级：心灵研究组件",
    "sectionType": "Animation",
    "uiName": "NAME:YADMME",
    "name": "Psychplug"
  },
  "YACVLT": {
    "displayName": "枢纽升级：化学研究组件",
    "sectionType": "Animation",
    "uiName": "NAME:YADOME",
    "name": "Chemplug"
  },
  "YAGVLT": {
    "displayName": "枢纽升级：基因研究组件",
    "sectionType": "Animation",
    "uiName": "NAME:YADOMM",
    "name": "Geneplug"
  },
  "YAMPSI": {
    "displayName": "心灵感应器",
    "sectionType": "Building",
    "uiName": "NAME:YAMPSI",
    "name": "Mind Reader"
  },
  "YAGRND": {
    "displayName": "粉碎回收厂",
    "sectionType": "Building",
    "uiName": "NAME:Grinder",
    "name": "Grinder"
  },
  "NACLON": {
    "displayName": "克隆缸",
    "sectionType": "Building",
    "uiName": "NAME:NACLON",
    "name": "Cloning Vats"
  },
  "YAMREF": {
    "displayName": "雷格机动前哨站",
    "sectionType": "Building",
    "uiName": "NAME:WARRIG",
    "name": "Deployed War Rig"
  },
  "GAFWLL": {
    "displayName": "护城墙",
    "sectionType": "Overlay",
    "uiName": "NAME:GAFWLLS",
    "name": "Epsilon Citadel Wall"
  },
  "YAGATE_A": {
    "displayName": "闸门（南北方向）",
    "sectionType": "Animation",
    "uiName": "NAME:GATENS",
    "name": "Epsilon Gate NS"
  },
  "YAGATE_B": {
    "displayName": "闸门（东西方向）",
    "sectionType": "Animation",
    "uiName": "NAME:GATEEW",
    "name": "Epsilon Gate EW"
  },
  "YAGGUN": {
    "displayName": "加特林机炮",
    "sectionType": "Building",
    "uiName": "NAME:YAGGUN",
    "name": "Gatling Cannon"
  },
  "YARAIL": {
    "displayName": "地狱热能塔",
    "sectionType": "Building",
    "uiName": "NAME:YARAIL",
    "name": "Inferno Tower"
  },
  "YABALL": {
    "displayName": "速成方尖碑",
    "sectionType": "Building",
    "uiName": "NAME:RISEN",
    "name": "Risen Monolith"
  },
  "YAPSYT": {
    "displayName": "心灵控制塔",
    "sectionType": "Building",
    "uiName": "NAME:YAPSYT",
    "name": "Psychic Tower"
  },
  "YAPSYTAI": {
    "displayName": "心灵控制塔",
    "sectionType": "Building",
    "uiName": "NAME:YAPSYT",
    "name": "Psychic Tower (AI)"
  },
  "YAVNMMS": {
    "displayName": "基因地雷",
    "sectionType": "Building",
    "uiName": "NAME:YAVNMMS",
    "name": "Genomines (Spawner)"
  },
  "YAVNMM": {
    "displayName": "基因地雷",
    "sectionType": "Building",
    "uiName": "NAME:YAVNMM",
    "name": "Genomine"
  },
  "YAHADE": {
    "displayName": "安塔瑞斯炮台",
    "sectionType": "Building",
    "uiName": "NAME:YAHADE",
    "name": "Antares Battery"
  },
  "YAHADEAI": {
    "displayName": "安塔瑞斯炮台",
    "sectionType": "Building",
    "uiName": "NAME:YAHADE",
    "name": "Antares Battery (AI)"
  },
  "YARIFT": {
    "displayName": "幻象核心",
    "sectionType": "Building",
    "uiName": "NAME:YARIFT",
    "name": "Chimera Core"
  },
  "YARIFTAI": {
    "displayName": "幻象核心",
    "sectionType": "Building",
    "uiName": "NAME:YARIFT",
    "name": "Chimera Core (AI)"
  },
  "YATUNL": {
    "displayName": "毒爆虱巢穴",
    "sectionType": "Building",
    "uiName": "NAME:YATUNL",
    "name": "Bloatick Tunnel (Do Not Use)"
  },
  "YAVISN": {
    "displayName": "Vision (Do Not Use)",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Vision (Do Not Use)"
  },
  "NATBNK": {
    "displayName": "坦克碉堡",
    "sectionType": "Building",
    "uiName": "NAME:NATBNK",
    "name": "Tank Bunker"
  },
  "NATBNKK": {
    "displayName": "坦克碉堡",
    "sectionType": "Building",
    "uiName": "NAME:NATBNKK",
    "name": "Quick Fort"
  },
  "YAGNTC": {
    "displayName": "狂暴激发器",
    "sectionType": "Building",
    "uiName": "NAME:RageInductor",
    "name": "Rage Inductor"
  },
  "YAPPET": {
    "displayName": "心灵支配仪",
    "sectionType": "Building",
    "uiName": "NAME:YAPPET",
    "name": "Psychic Dominator"
  },
  "YAPPXT": {
    "displayName": "假心灵支配仪",
    "sectionType": "Building",
    "uiName": "NAME:YAPPXT",
    "name": "Fake Psychic Dominator"
  },
  "YASPOT": {
    "displayName": "哨塔",
    "sectionType": "Building",
    "uiName": "NAME:GASNPR",
    "name": "Epsilon Watch Tower"
  },
  "FACNST": {
    "displayName": "焚风建造场",
    "sectionType": "Building",
    "uiName": "NAME:FACNST",
    "name": "Foehn Construction Yard"
  },
  "FATRAP": {
    "displayName": "发电风箱",
    "sectionType": "Building",
    "uiName": "NAME:FATRAP",
    "name": "Windtrap"
  },
  "FAPOST": {
    "displayName": "发电风带",
    "sectionType": "Building",
    "uiName": "NAME:FAPOST",
    "name": "Windbelt Post"
  },
  "FAFNCE": {
    "displayName": "发电风带",
    "sectionType": "Building",
    "uiName": "NAME:FAFNCE",
    "name": "Windbelt Section"
  },
  "FAWALL": {
    "displayName": "防御壁垒",
    "sectionType": "Overlay",
    "uiName": "NAME:FAWALL",
    "name": "Foehn Bastion Wall"
  },
  "FABARR": {
    "displayName": "焚风兵营",
    "sectionType": "Building",
    "uiName": "NAME:FABARR",
    "name": "Foehn Barracks"
  },
  "FABARRB": {
    "displayName": "焚风兵营",
    "sectionType": "Building",
    "uiName": "NAME:FABARR",
    "name": "Foehn Barracks (AI)"
  },
  "FABARR_D": {
    "displayName": "兵营升级：网络流协议",
    "sectionType": "Animation",
    "uiName": "NAME:FABARR_D",
    "name": "Netrunner Protocol"
  },
  "FABARR_B": {
    "displayName": "兵营升级：轨道舱协议",
    "sectionType": "Animation",
    "uiName": "NAME:FABARR_B",
    "name": "Knightfall Protocol"
  },
  "FADROP": {
    "displayName": "轨道舱信标",
    "sectionType": "Building",
    "uiName": "NAME:FADROP",
    "name": "Knightfall Beacon"
  },
  "FAREFN": {
    "displayName": "焚风矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:FAREFN",
    "name": "Foehn Ore Refinery"
  },
  "FAYARD": {
    "displayName": "焚风海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:FAYARD",
    "name": "Foehn Naval Shipyard"
  },
  "FAYARDAI": {
    "displayName": "焚风海军船坞",
    "sectionType": "Building",
    "uiName": "NAME:FAYARD",
    "name": "Foehn Naval Shipyard (AI)"
  },
  "FAWEAP": {
    "displayName": "焚风战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:FAWEAP",
    "name": "Foehn War Factory"
  },
  "FAWEAPB": {
    "displayName": "焚风战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:FAWEAP",
    "name": "Foehn War Factory (AI)"
  },
  "FASPIN": {
    "displayName": "加速旋塔",
    "sectionType": "Building",
    "uiName": "NAME:FASPIN",
    "name": "Spinblade"
  },
  "FASPINAI": {
    "displayName": "加速旋塔",
    "sectionType": "Building",
    "uiName": "NAME:FASPIN",
    "name": "Spinblade (AI)"
  },
  "FAINHI": {
    "displayName": "信号抑制器",
    "sectionType": "Building",
    "uiName": "NAME:FAINHI",
    "name": "Signal Inhibitor"
  },
  "FAINHIB": {
    "displayName": "信号抑制器",
    "sectionType": "Building",
    "uiName": "NAME:FAINHI",
    "name": "Signal Inhibitor (AI)"
  },
  "FAJAMM": {
    "displayName": "Signal Jammer (Do Not Use)",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Signal Jammer (Do Not Use)"
  },
  "FACOMP": {
    "displayName": "离子切割机",
    "sectionType": "Building",
    "uiName": "NAME:FACOMP",
    "name": "Neutralizer"
  },
  "FACOMPAI": {
    "displayName": "离子切割机",
    "sectionType": "Building",
    "uiName": "NAME:FACOMP",
    "name": "Foehn Neutralizer (AI)"
  },
  "FACOAT": {
    "displayName": "纳米护甲生成器",
    "sectionType": "Building",
    "uiName": "NAME:FACOAT",
    "name": "Nanocoat Regulator"
  },
  "FASONI": {
    "displayName": "声波发射器",
    "sectionType": "Building",
    "uiName": "NAME:FASONI",
    "name": "Sonic Emitter"
  },
  "FARAIL": {
    "displayName": "轨道炮塔",
    "sectionType": "Building",
    "uiName": "NAME:FARAIL",
    "name": "Railgun Tower"
  },
  "FAFILDS": {
    "displayName": "静滞网格",
    "sectionType": "Building",
    "uiName": "NAME:FAFILD",
    "name": "Stun Grid (Spawner)"
  },
  "FAFILD": {
    "displayName": "静滞网格",
    "sectionType": "Building",
    "uiName": "NAME:FAFILD",
    "name": "Stun Grid Segment"
  },
  "FACONFS": {
    "displayName": "迷幻网格",
    "sectionType": "Building",
    "uiName": "NAME:FACONF",
    "name": "Turmoil Grid (Spawner)"
  },
  "FACONF": {
    "displayName": "迷幻网格",
    "sectionType": "Building",
    "uiName": "NAME:FACONF",
    "name": "Turmoil Grid Segment"
  },
  "FAGUAR": {
    "displayName": "伯劳防空鸟巢",
    "sectionType": "Building",
    "uiName": "NAME:FAGUAR",
    "name": "Shrike Nest"
  },
  "FAAREN": {
    "displayName": "巨齿鲨强化塔",
    "sectionType": "Building",
    "uiName": "NAME:FAAREN",
    "name": "Megaarena Projector"
  },
  "FANANO": {
    "displayName": "纳米纤维织机",
    "sectionType": "Building",
    "uiName": "NAME:FANANO",
    "name": "Foehn Nanofiber Loom"
  },
  "FANANO_B": {
    "displayName": "纳米纤维织机扩展模组",
    "sectionType": "Animation",
    "uiName": "NAME:FANANO_B",
    "name": "Nanofiber Loom Expansion"
  },
  "FACYBR": {
    "displayName": "网络核心",
    "sectionType": "Building",
    "uiName": "NAME:FACYBR",
    "name": "Foehn Cyberkernel"
  },
  "FACYBR_B": {
    "displayName": "网络核心扩展模组",
    "sectionType": "Animation",
    "uiName": "NAME:FACYBR_B",
    "name": "Cyberkernel Expansion"
  },
  "FACLDP": {
    "displayName": "穿云尖塔",
    "sectionType": "Building",
    "uiName": "NAME:FACLDP",
    "name": "Foehn Cloud Piercer"
  },
  "FACLDP_B": {
    "displayName": "穿云尖塔扩展模组",
    "sectionType": "Animation",
    "uiName": "NAME:FACLDP_B",
    "name": "Cloud Piercer Expansion"
  },
  "FAREPR": {
    "displayName": "资源再生室",
    "sectionType": "Building",
    "uiName": "NAME:FAREPR",
    "name": "Reprocessor"
  },
  "FABLST": {
    "displayName": "爆裂熔炉",
    "sectionType": "Building",
    "uiName": "NAME:FABLST",
    "name": "Blast Furnace"
  },
  "FAELEV": {
    "displayName": "暴风起源",
    "sectionType": "Building",
    "uiName": "NAME:FAELEV",
    "name": "Tempest Architect"
  },
  "FABTRC": {
    "displayName": "爆裂战壕",
    "sectionType": "Building",
    "uiName": "NAME:FABTRC",
    "name": "Blast Trench"
  },
  "FAHARB": {
    "displayName": "先锋导航塔",
    "sectionType": "Building",
    "uiName": "NAME:FAHARB",
    "name": "Harbinger Tower"
  },
  "FAAVAL": {
    "displayName": "离子要塞炮",
    "sectionType": "Building",
    "uiName": "NAME:FAAVAL",
    "name": "Plasmerizer"
  },
  "FAMMIN": {
    "displayName": "M.A.D. 地雷",
    "sectionType": "Building",
    "uiName": "NAME:FAMMIN",
    "name": "M.A.D. Mine"
  },
  "FASPOT": {
    "displayName": "哨塔",
    "sectionType": "Building",
    "uiName": "NAME:GASNPR",
    "name": "Foehn Watch Tower"
  },
  "CAAIRP": {
    "displayName": "科技机场",
    "sectionType": "Building",
    "uiName": "NAME:CAAIRP",
    "name": "Tech Airfield"
  },
  "CASTRF": {
    "displayName": "科技建筑维护中心",
    "sectionType": "Building",
    "uiName": "NAME:CASTRF",
    "name": "Tech Maintenance Facility"
  },
  "CASHLD": {
    "displayName": "科技保护伞",
    "sectionType": "Building",
    "uiName": "NAME:CASHLD",
    "name": "Tech Protector"
  },
  "CATPAD": {
    "displayName": "科技增援平台",
    "sectionType": "Building",
    "uiName": "NAME:CATPAD",
    "name": "Tech Reinforcement Pad"
  },
  "CAACAD": {
    "displayName": "科技步兵学院",
    "sectionType": "Building",
    "uiName": "NAME:CAACAD",
    "name": "Tech Academy"
  },
  "CADEFB": {
    "displayName": "科技防卫局",
    "sectionType": "Building",
    "uiName": "NAME:CADEFB",
    "name": "Tech Defense Bureau"
  },
  "CAHMCH": {
    "displayName": "科技重机械厂",
    "sectionType": "Building",
    "uiName": "NAME:CAHMCH",
    "name": "Tech Heavy Machinery"
  },
  "CAAERO": {
    "displayName": "科技航空学院",
    "sectionType": "Building",
    "uiName": "NAME:CAAERO",
    "name": "Tech Aeronautics"
  },
  "CADOCK": {
    "displayName": "科技军事码头",
    "sectionType": "Building",
    "uiName": "NAME:CADOCK",
    "name": "Tech Military Docks"
  },
  "CAMISL": {
    "displayName": "科技导弹发射井",
    "sectionType": "Building",
    "uiName": "NAME:CAMISL",
    "name": "Tech Missile Bunker"
  },
  "CAREFN": {
    "displayName": "科技矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:CAREFN",
    "name": "Tech Refinery"
  },
  "CACOMN": {
    "displayName": "科技卫星入侵中心",
    "sectionType": "Building",
    "uiName": "NAME:CACOMN",
    "name": "Tech Satellite Hack Center"
  },
  "CAEXPS": {
    "displayName": "科技扩张前哨站",
    "sectionType": "Building",
    "uiName": "NAME:EXPPOST",
    "name": "Tech Base Expansion Post"
  },
  "CAHMG": {
    "displayName": "科技重机枪塔",
    "sectionType": "Building",
    "uiName": "NAME:CAHMG",
    "name": "Tech HMG Tower"
  },
  "CACANN": {
    "displayName": "科技炮台",
    "sectionType": "Building",
    "uiName": "NAME:CATURR",
    "name": "Tech Turret"
  },
  "CASSAM": {
    "displayName": "科技防空导弹",
    "sectionType": "Building",
    "uiName": "NAME:CASSAM",
    "name": "Tech SAM Site"
  },
  "CATUR": {
    "displayName": "科技加农炮阵地",
    "sectionType": "Building",
    "uiName": "NAME:CATUR",
    "name": "Tech Cannon Bunker"
  },
  "CAART": {
    "displayName": "科技重型火炮",
    "sectionType": "Building",
    "uiName": "NAME:CAART",
    "name": "Tech Artillery Bunker"
  },
  "CASAM": {
    "displayName": "科技防空阵地",
    "sectionType": "Building",
    "uiName": "NAME:CASAM",
    "name": "Tech SAM Bunker"
  },
  "CABUNK01": {
    "displayName": "科技混凝土碉堡",
    "sectionType": "Building",
    "uiName": "NAME:CABUNK01A",
    "name": "Tech Bunker Bottom-Left"
  },
  "CABUNK02": {
    "displayName": "科技混凝土碉堡",
    "sectionType": "Building",
    "uiName": "NAME:CABUNK01A",
    "name": "Tech Bunker Bottom-Right"
  },
  "CABUNK03": {
    "displayName": "科技混凝土碉堡",
    "sectionType": "Building",
    "uiName": "NAME:CABUNK01A",
    "name": "Tech Bunker Top-Right"
  },
  "CABUNK04": {
    "displayName": "科技混凝土碉堡",
    "sectionType": "Building",
    "uiName": "NAME:CABUNK01A",
    "name": "Tech Bunker Top-Left"
  },
  "CAFORT": {
    "displayName": "科技混凝土要塞",
    "sectionType": "Building",
    "uiName": "NAME:CAFORT",
    "name": "Tech Concrete Fortress"
  },
  "CAOILD": {
    "displayName": "科技钻油井",
    "sectionType": "Building",
    "uiName": "NAME:CAOILD",
    "name": "Tech Oil Derrick"
  },
  "CABANK": {
    "displayName": "科技银行",
    "sectionType": "Building",
    "uiName": "NAME:CABANK",
    "name": "Tech Deposit Bank"
  },
  "CAPOWR": {
    "displayName": "科技发电厂",
    "sectionType": "Building",
    "uiName": "NAME:CAPOWR",
    "name": "Tech Power Plant"
  },
  "CANRCT": {
    "displayName": "科技核电站",
    "sectionType": "Building",
    "uiName": "NAME:CANRCT",
    "name": "Tech Nuclear Plant"
  },
  "CAMACH": {
    "displayName": "科技机械维修车间",
    "sectionType": "Building",
    "uiName": "NAME:CAMACH",
    "name": "Tech Machine Shop"
  },
  "CATHOSP": {
    "displayName": "科技医院",
    "sectionType": "Building",
    "uiName": "NAME:CATHOSP",
    "name": "Tech Hospital"
  },
  "CAFHOSP": {
    "displayName": "科技医院",
    "sectionType": "Building",
    "uiName": "NAME:CAFHOSP",
    "name": "Tech Field Hospital"
  },
  "CASLAB": {
    "displayName": "秘密科技实验室",
    "sectionType": "Building",
    "uiName": "NAME:CASLAB",
    "name": "Tech Secret Lab"
  },
  "CAWALL": {
    "displayName": "混凝土墙",
    "sectionType": "Overlay",
    "uiName": "NAME:CAWALL",
    "name": "Generic Concrete Wall"
  },
  "CABHUT": {
    "displayName": "桥梁维修小屋",
    "sectionType": "Building",
    "uiName": "NAME:CABHUT",
    "name": "Bridge Repair Hut"
  },
  "NAAPP": {
    "displayName": "老式苏联高级发电厂",
    "sectionType": "Building",
    "uiName": "NAME:RANAAPP",
    "name": "Old Soviet Advanced Power"
  },
  "GAAPP": {
    "displayName": "老式盟军先进发电厂",
    "sectionType": "Building",
    "uiName": "NAME:RAGAAPP",
    "name": "Old Allied Advanced Power"
  },
  "NAPWR": {
    "displayName": "老式苏联发电厂",
    "sectionType": "Building",
    "uiName": "NAME:RANAPWR",
    "name": "Old Soviet Power Plant"
  },
  "GAPWR": {
    "displayName": "老式盟军发电厂",
    "sectionType": "Building",
    "uiName": "NAME:RAGAPWR",
    "name": "Old Allied Power Plant"
  },
  "NASAIR": {
    "displayName": "老式苏联机场",
    "sectionType": "Building",
    "uiName": "NAME:RANASAIR",
    "name": "Old Soviet Airfield"
  },
  "NAPILE": {
    "displayName": "老式苏联兵营",
    "sectionType": "Building",
    "uiName": "NAME:RANAPILE",
    "name": "Old Soviet Barracks"
  },
  "GABARR": {
    "displayName": "老式盟军兵营",
    "sectionType": "Building",
    "uiName": "NAME:RAGABARR",
    "name": "Old Allied Army Tents"
  },
  "NACONY": {
    "displayName": "老式建造场",
    "sectionType": "Building",
    "uiName": "NAME:RANACONY",
    "name": "Old Construction Yard"
  },
  "NAFMLT": {
    "displayName": "老式火焰炮塔",
    "sectionType": "Building",
    "uiName": "NAME:RANAFLMT",
    "name": "Old Flame Tower"
  },
  "NAHELI": {
    "displayName": "老式直升机坪",
    "sectionType": "Building",
    "uiName": "NAME:RANAHELI",
    "name": "Old Helipad"
  },
  "NADOME": {
    "displayName": "老式苏联雷达球",
    "sectionType": "Building",
    "uiName": "NAME:RANADOME",
    "name": "Old Soviet Radar Dome"
  },
  "NAREF": {
    "displayName": "老式苏联矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:RANAREF",
    "name": "Old Soviet Ore Refinery"
  },
  "GAREF": {
    "displayName": "老式盟军矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:RAGAREF",
    "name": "Old Allied Ore Refinery"
  },
  "NASAMT": {
    "displayName": "老式防空导弹",
    "sectionType": "Building",
    "uiName": "NAME:RANASAMT",
    "name": "Old SAM Site"
  },
  "NADPT": {
    "displayName": "老式维修厂",
    "sectionType": "Building",
    "uiName": "NAME:RANADPT",
    "name": "Old Service Depot"
  },
  "NATEKN": {
    "displayName": "老式苏联科技中心",
    "sectionType": "Building",
    "uiName": "NAME:RANATEK",
    "name": "Old Soviet Tech Center"
  },
  "NATCOIL": {
    "displayName": "老式磁暴线圈",
    "sectionType": "Building",
    "uiName": "NAME:RANATCOIL",
    "name": "Old Tesla Coil"
  },
  "NAFACT": {
    "displayName": "老式苏联战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:RANAFACT",
    "name": "Old Soviet War Factory"
  },
  "GAFACT": {
    "displayName": "老式盟军战争工厂",
    "sectionType": "Building",
    "uiName": "NAME:RAGAFACT",
    "name": "Old Allied War Factory"
  },
  "NAICUR": {
    "displayName": "老式铁幕装置",
    "sectionType": "Building",
    "uiName": "NAME:RANAICUR",
    "name": "Old Iron Curtain"
  },
  "GAAAGUN": {
    "displayName": "老式防空炮",
    "sectionType": "Building",
    "uiName": "NAME:RAGAAAGUN",
    "name": "Old AA Gun"
  },
  "GARGAP": {
    "displayName": "老式黑幕产生器",
    "sectionType": "Building",
    "uiName": "NAME:RAGARGAP",
    "name": "Old Gap Generator"
  },
  "GADOME": {
    "displayName": "老式盟军雷达球",
    "sectionType": "Building",
    "uiName": "NAME:RAGADOME",
    "name": "Old Allied Radar Dome"
  },
  "GAPDOX": {
    "displayName": "老式超时空传送仪",
    "sectionType": "Building",
    "uiName": "NAME:RAGAPDOX",
    "name": "Old Chronosphere"
  },
  "RADFLD1": {
    "displayName": "Radiation Field Large",
    "sectionType": "Building",
    "name": "Radiation Field Large"
  },
  "RADFLD2": {
    "displayName": "Radiation Field Small",
    "sectionType": "Building",
    "name": "Radiation Field Small"
  },
  "CACRCK": {
    "displayName": "Destructible Rocks Base",
    "sectionType": "Overlay",
    "name": "Destructible Rocks Base"
  },
  "CARCK01": {
    "displayName": "Destructible Rocks A",
    "sectionType": "Building",
    "name": "Destructible Rocks A"
  },
  "CARCK02": {
    "displayName": "Destructible Rocks B",
    "sectionType": "Building",
    "name": "Destructible Rocks B"
  },
  "CARCK03": {
    "displayName": "Destructible Rocks C",
    "sectionType": "Building",
    "name": "Destructible Rocks C"
  },
  "CARCK04": {
    "displayName": "Destructible Rocks D",
    "sectionType": "Building",
    "name": "Destructible Rocks D"
  },
  "CARCK05": {
    "displayName": "Destructible Rocks E",
    "sectionType": "Building",
    "name": "Destructible Rocks E"
  },
  "CARCK06": {
    "displayName": "Destructible Rocks F",
    "sectionType": "Building",
    "name": "Destructible Rocks F"
  },
  "INORANLAMP": {
    "displayName": "Invisible Orange Light Post",
    "sectionType": "Building",
    "name": "Invisible Orange Light Post"
  },
  "INGRNLMP": {
    "displayName": "Invisible Green Light Post",
    "sectionType": "Building",
    "name": "Invisible Green Light Post"
  },
  "INREDLMP": {
    "displayName": "Invisible Red Light Post",
    "sectionType": "Building",
    "name": "Invisible Red Light Post"
  },
  "INBLULMP": {
    "displayName": "Invisible Blue Light Post",
    "sectionType": "Building",
    "name": "Invisible Blue Light Post"
  },
  "INGALITE": {
    "displayName": "Invisible White Light Post",
    "sectionType": "Building",
    "name": "Invisible White Light Post"
  },
  "INYELWLAMP": {
    "displayName": "Invisible Yellow Light Post",
    "sectionType": "Building",
    "name": "Invisible Yellow Light Post"
  },
  "INPURPLAMP": {
    "displayName": "Invisible Purple Light Post",
    "sectionType": "Building",
    "name": "Invisible Purple Light Post"
  },
  "INTEALLAMP": {
    "displayName": "Invisible Teal Light Post",
    "sectionType": "Building",
    "name": "Invisible Teal Light Post"
  },
  "INMAGNLAMP": {
    "displayName": "Invisible Magenta Light Post",
    "sectionType": "Building",
    "name": "Invisible Magenta Light Post"
  },
  "INBLCKLAMP": {
    "displayName": "Invisible Black Light Post",
    "sectionType": "Building",
    "name": "Invisible Black Light Post"
  },
  "INAQUALAMP": {
    "displayName": "Invisible Aqua Light Post",
    "sectionType": "Building",
    "name": "Invisible Aqua Light Post"
  },
  "INPINKLAMP": {
    "displayName": "Invisible Pink Light Post",
    "sectionType": "Building",
    "name": "Invisible Pink Light Post"
  },
  "TEMMORLAMP": {
    "displayName": "Temperate Morning Light Post",
    "sectionType": "Building",
    "name": "Temperate Morning Light Post"
  },
  "TEMDAYLAMP": {
    "displayName": "Temperate Day Light Post",
    "sectionType": "Building",
    "name": "Temperate Day Light Post"
  },
  "TEMDUSLAMP": {
    "displayName": "Temperate Dusk Light Post",
    "sectionType": "Building",
    "name": "Temperate Dusk Light Post"
  },
  "TEMNITLAMP": {
    "displayName": "Temperate Night Light Post",
    "sectionType": "Building",
    "name": "Temperate Night Light Post"
  },
  "SNOMORLAMP": {
    "displayName": "Snow Morning Light Post",
    "sectionType": "Building",
    "name": "Snow Morning Light Post"
  },
  "SNODAYLAMP": {
    "displayName": "Snow Day Light Post",
    "sectionType": "Building",
    "name": "Snow Day Light Post"
  },
  "SNODUSLAMP": {
    "displayName": "Snow Dusk Light Post",
    "sectionType": "Building",
    "name": "Snow Dusk Light Post"
  },
  "SNONITLAMP": {
    "displayName": "Snow Night Light Post",
    "sectionType": "Building",
    "name": "Snow Night Light Post"
  },
  "NEGBLUE": {
    "displayName": "Tint Yellow Light Post",
    "sectionType": "Building",
    "name": "Tint Yellow Light Post"
  },
  "NEGRED": {
    "displayName": "Tint Teal Light Post",
    "sectionType": "Building",
    "name": "Tint Teal Light Post"
  },
  "NEGGREEN": {
    "displayName": "Tint Purple Light Post",
    "sectionType": "Building",
    "name": "Tint Purple Light Post"
  },
  "NEGLAMP": {
    "displayName": "Negative White Light Post",
    "sectionType": "Building",
    "name": "Negative White Light Post"
  },
  "NEGBLACK": {
    "displayName": "Absolute Black Light Post",
    "sectionType": "Building",
    "name": "Absolute Black Light Post"
  },
  "REDTLAMP": {
    "displayName": "Tint Red Light Post",
    "sectionType": "Building",
    "name": "Tint Red Light Post"
  },
  "GREENTLAMP": {
    "displayName": "Tint Green Light Post",
    "sectionType": "Building",
    "name": "Tint Green Light Post"
  },
  "TSTLAMP": {
    "displayName": "Alpha Light Circle A",
    "sectionType": "Building",
    "name": "Alpha Light Circle A"
  },
  "TSTLAMPB": {
    "displayName": "Alpha Light Circle B",
    "sectionType": "Building",
    "name": "Alpha Light Circle B"
  },
  "TSTLAMPC": {
    "displayName": "Alpha Light Square A",
    "sectionType": "Building",
    "name": "Alpha Light Square A"
  },
  "TSTLAMPD": {
    "displayName": "Alpha Light Square B",
    "sectionType": "Building",
    "name": "Alpha Light Square B"
  },
  "XLAMP": {
    "displayName": "Negative Alpha Light Circle",
    "sectionType": "Building",
    "name": "Negative Alpha Light Circle"
  },
  "XLAMPB": {
    "displayName": "Negative Alpha Light Square",
    "sectionType": "Building",
    "name": "Negative Alpha Light Square"
  },
  "GALITE": {
    "displayName": "Light Post (Do Not Use)",
    "sectionType": "Building",
    "name": "Light Post (Do Not Use)"
  },
  "REDLAMP": {
    "displayName": "Red Light Post (Do Not Use)",
    "sectionType": "Building",
    "name": "Red Light Post (Do Not Use)"
  },
  "GRENLAMP": {
    "displayName": "Green Light Post (Do Not Use)",
    "sectionType": "Building",
    "name": "Green Light Post (Do Not Use)"
  },
  "BLUELAMP": {
    "displayName": "Blue Light Post (Do Not Use)",
    "sectionType": "Building",
    "name": "Blue Light Post (Do Not Use)"
  },
  "YELWLAMP": {
    "displayName": "Yellow Light Post (Do Not Use)",
    "sectionType": "Building",
    "name": "Yellow Light Post (Do Not Use)"
  },
  "PURPLAMP": {
    "displayName": "Purple Light Post (Do Not Use)",
    "sectionType": "Building",
    "name": "Purple Light Post (Do Not Use)"
  },
  "CAOILDOM": {
    "displayName": "Oil/Bounty Capturable",
    "sectionType": "Building",
    "name": "Oil/Bounty Capturable"
  },
  "KEYBLD": {
    "displayName": "心灵信标",
    "sectionType": "Building",
    "uiName": "NAME:NAPSYBK",
    "name": "Psychic Beacon KOTH"
  },
  "GARADR": {
    "displayName": "Placeholder Radar",
    "sectionType": "Unknown",
    "name": "Placeholder Radar"
  },
  "CACEAS": {
    "displayName": "Ceasefire Spawn (Do Not Use)",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Ceasefire Spawn (Do Not Use)"
  },
  "CAPOWR2": {
    "displayName": "科技发电厂",
    "sectionType": "Building",
    "uiName": "NAME:CAPOWR",
    "name": "Civilian Power Test"
  },
  "MODEV": {
    "displayName": "心灵终结仪",
    "sectionType": "Building",
    "uiName": "NAME:MODEV",
    "name": "Mental Omega Device"
  },
  "FTHQ": {
    "displayName": "命运科技塔",
    "sectionType": "Building",
    "uiName": "NAME:FTHQ",
    "name": "SteinsTech Spectral Tower"
  },
  "GAHYBR": {
    "displayName": "混合塔",
    "sectionType": "Building",
    "uiName": "NAME:GAHYBR",
    "name": "Hybrid Tower"
  },
  "YAROCK": {
    "displayName": "火箭发射台",
    "sectionType": "Building",
    "uiName": "NAME:YAROCKT",
    "name": "Epsilon Rocket Launchpad"
  },
  "YARCON": {
    "displayName": "火箭控制单元",
    "sectionType": "Building",
    "uiName": "NAME:YARCON",
    "name": "Rocket Control Unit"
  },
  "YAHIVE": {
    "displayName": "恶灵防空巢",
    "sectionType": "Building",
    "uiName": "NAME:YAHIVE",
    "name": "Epsilon Dybbuk Hive"
  },
  "YACOMD": {
    "displayName": "厄普西隆指挥中心",
    "sectionType": "Building",
    "uiName": "NAME:YACOMDS",
    "name": "Epsilon Command Center"
  },
  "GAMISL": {
    "displayName": "导弹发射井",
    "sectionType": "Building",
    "uiName": "NAME:GAMISL",
    "name": "Peacekeeper Missile Silo"
  },
  "CAPP": {
    "displayName": "煤炭发电厂",
    "sectionType": "Building",
    "uiName": "NAME:CAPP",
    "name": "Coal Plant"
  },
  "CAFDZ": {
    "displayName": "风力发电站",
    "sectionType": "Building",
    "uiName": "NAME:CAFDZ",
    "name": "Wind Plant"
  },
  "CASPAC": {
    "displayName": "火箭发射台",
    "sectionType": "Building",
    "uiName": "NAME:CASPAC",
    "name": "Rocket Launch Bay"
  },
  "CADOME": {
    "displayName": "雷达球",
    "sectionType": "Building",
    "uiName": "NAME:CADOME",
    "name": "Radar Dome Large"
  },
  "YAKAOS": {
    "displayName": "毒爆虱巢穴",
    "sectionType": "Building",
    "uiName": "NAME:YAKAOS",
    "name": "Bloatick Tunnel"
  },
  "YANEUR": {
    "displayName": "神经毒素厂",
    "sectionType": "Building",
    "uiName": "NAME:YANEUR",
    "name": "Neurotoxin Plant"
  },
  "YABIOB": {
    "displayName": "大生化罐",
    "sectionType": "Building",
    "uiName": "NAME:YABIOB",
    "name": "Epsilon Bio Tank Large"
  },
  "YABIO1": {
    "displayName": "生化罐",
    "sectionType": "Building",
    "uiName": "NAME:YABIO",
    "name": "Epsilon Bio Tank A"
  },
  "YABIO2": {
    "displayName": "生化罐",
    "sectionType": "Building",
    "uiName": "NAME:YABIO",
    "name": "Epsilon Bio Tank B"
  },
  "YABIO3": {
    "displayName": "生化罐",
    "sectionType": "Building",
    "uiName": "NAME:YABIO",
    "name": "Epsilon Bio Tank C"
  },
  "NANANA": {
    "displayName": "纳米离心机",
    "sectionType": "Building",
    "uiName": "NAME:NANANA",
    "name": "Soviet Nanocentrifuge"
  },
  "FANANA": {
    "displayName": "纳米离心机",
    "sectionType": "Building",
    "uiName": "NAME:NANANA",
    "name": "Foehn Nanocentrifuge"
  },
  "CACORE": {
    "displayName": "中枢计算机",
    "sectionType": "Building",
    "uiName": "NAME:CACORE",
    "name": "VOLKNET Mainframe"
  },
  "GABSTA": {
    "displayName": "断电武器研究站",
    "sectionType": "Building",
    "uiName": "NAME:GABSTA",
    "name": "Blackout Research Station"
  },
  "CAKANE03": {
    "displayName": "雷达球",
    "sectionType": "Building",
    "uiName": "NAME:CADOME",
    "name": "Kanegawa Radar Dome"
  },
  "GARAIN": {
    "displayName": "气象晶体",
    "sectionType": "Building",
    "uiName": "NAME:GARAIN",
    "name": "Weather Crystal"
  },
  "CABATT": {
    "displayName": "悖论电池",
    "sectionType": "Building",
    "uiName": "NAME:CABATT",
    "name": "Paradox Battery"
  },
  "GACOND": {
    "displayName": "悖论传导器",
    "sectionType": "Building",
    "uiName": "NAME:GACOND",
    "name": "Paradox Conductor"
  },
  "GACIRC": {
    "displayName": "传送导管",
    "sectionType": "Building",
    "uiName": "NAME:GACIRC",
    "name": "Warp Circuit"
  },
  "CAVHNG": {
    "displayName": "命运科技机库",
    "sectionType": "Building",
    "uiName": "NAME:CAVHNG",
    "name": "SteinsTech London Hangar"
  },
  "CASTSGN": {
    "displayName": "命运科技标志",
    "sectionType": "Building",
    "uiName": "NAME:CASTSGN",
    "name": "SteinsTech Sign"
  },
  "CAFUSI": {
    "displayName": "地震平衡杆",
    "sectionType": "Building",
    "uiName": "NAME:CAFUSI",
    "name": "Seismic Stabilizer"
  },
  "CASOLR": {
    "displayName": "太阳能电池板",
    "sectionType": "Building",
    "uiName": "NAME:CASOLR",
    "name": "Solar Panel A"
  },
  "CASOLRB": {
    "displayName": "太阳能电池板",
    "sectionType": "Building",
    "uiName": "NAME:CASOLR",
    "name": "Solar Panel B"
  },
  "HINATECH": {
    "displayName": "中国军事司令部",
    "sectionType": "Building",
    "uiName": "NAME:HINATECH",
    "name": "Chinese Military HQ"
  },
  "CANPLM": {
    "displayName": "燃烧弹仓库",
    "sectionType": "Building",
    "uiName": "NAME:CANPLM",
    "name": "Soviet Napalm Storage"
  },
  "CAMINF": {
    "displayName": "浓缩设施",
    "sectionType": "Building",
    "uiName": "NAME:CAMINF",
    "name": "Soviet Enrichment Facility"
  },
  "CAACOM": {
    "displayName": "通讯塔",
    "sectionType": "Building",
    "uiName": "NAME:CAACOM",
    "name": "Allied Comm Tower"
  },
  "CANAVY": {
    "displayName": "港务大楼",
    "sectionType": "Building",
    "uiName": "NAME:CANAVY",
    "name": "Port Authority Building"
  },
  "CAAZIZ": {
    "displayName": "拉什迪的宫殿",
    "sectionType": "Building",
    "uiName": "NAME:CAAZIZ",
    "name": "Rashidi's Palace"
  },
  "CAHERT": {
    "displayName": "最高指挥部苏维埃宫",
    "sectionType": "Building",
    "uiName": "NAME:CAHERT",
    "name": "High Command Heart Building"
  },
  "CAWASH01": {
    "displayName": "白宫",
    "sectionType": "Building",
    "uiName": "NAME:CAWASH01",
    "name": "White House"
  },
  "CACPTL": {
    "displayName": "美国国会",
    "sectionType": "Building",
    "uiName": "NAME:CACPTL",
    "name": "The Capitol"
  },
  "CAEMBA": {
    "displayName": "大使馆",
    "sectionType": "Building",
    "uiName": "NAME:CAEMBA",
    "name": "American Embassy"
  },
  "CARUS03": {
    "displayName": "克里姆林宫",
    "sectionType": "Building",
    "uiName": "NAME:CARUS03X",
    "name": "Grand Kremlin Palace"
  },
  "NAPSYB": {
    "displayName": "心灵信标",
    "sectionType": "Building",
    "uiName": "NAME:NAPSYBB",
    "name": "Epsilon Psychic Beacon"
  },
  "NAPSYB2": {
    "displayName": "心灵信标",
    "sectionType": "Building",
    "uiName": "NAME:NAPSYB2",
    "name": "Soviet Psychic Beacon"
  },
  "ORCINX": {
    "displayName": "虎鲸波动干扰器",
    "sectionType": "Building",
    "uiName": "NAME:FAORCI",
    "name": "Immune Orcinus"
  },
  "NAPSYA": {
    "displayName": "心灵控制增幅器",
    "sectionType": "Building",
    "uiName": "NAME:NAPSYA",
    "name": "Psychic Amplifier"
  },
  "CACOLO01": {
    "displayName": "空军学院礼拜堂",
    "sectionType": "Building",
    "uiName": "NAME:CACOLO01",
    "name": "Air Force Academy Chapel Colorado"
  },
  "CALAB": {
    "displayName": "命运科技实验室",
    "sectionType": "Building",
    "uiName": "NAME:STEINSTECH",
    "name": "SteinsTech Lab"
  },
  "CATIME01": {
    "displayName": "时间机器",
    "sectionType": "Building",
    "uiName": "NAME:CATIME02X",
    "name": "Time Machine Active"
  },
  "CATIME02": {
    "displayName": "时间机器",
    "sectionType": "Building",
    "uiName": "NAME:CATIME02X",
    "name": "Time Machine Inactive"
  },
  "CASING": {
    "displayName": "新加坡国会",
    "sectionType": "Building",
    "uiName": "NAME:CASING",
    "name": "Congress of Singapore"
  },
  "CATRAN03": {
    "displayName": "特兰西瓦尼亚要塞",
    "sectionType": "Building",
    "uiName": "NAME:CATRAN03X",
    "name": "Transylvania Fortress"
  },
  "GASAND": {
    "displayName": "沙袋",
    "sectionType": "Overlay",
    "uiName": "NAME:SANDBAGS",
    "name": "Generic Sandbags"
  },
  "CASWLL": {
    "displayName": "石头围墙",
    "sectionType": "Overlay",
    "uiName": "NAME:CASWLL",
    "name": "Generic Stone Wall"
  },
  "CABRFC": {
    "displayName": "砖瓦围墙",
    "sectionType": "Overlay",
    "uiName": "NAME:CABRFC",
    "name": "Generic Brick Fence"
  },
  "CAFNCP": {
    "displayName": "栅栏",
    "sectionType": "Overlay",
    "uiName": "NAME:FENCE",
    "name": "Generic Prison Fence"
  },
  "CABARB": {
    "displayName": "铁丝网",
    "sectionType": "Overlay",
    "uiName": "NAME:CABARB",
    "name": "Generic Barbed Wire"
  },
  "CAOPIP": {
    "displayName": "油管",
    "sectionType": "Overlay",
    "uiName": "NAME:CAOPIP",
    "name": "Generic Oil Pipe"
  },
  "CAFNCB": {
    "displayName": "栅栏",
    "sectionType": "Overlay",
    "uiName": "NAME:FENCE",
    "name": "Generic Black Fence"
  },
  "CAFNCW": {
    "displayName": "栅栏",
    "sectionType": "Overlay",
    "uiName": "NAME:FENCE",
    "name": "Generic White Fence"
  },
  "GAGATE_A": {
    "displayName": "闸门",
    "sectionType": "Animation",
    "uiName": "NAME:GAGATE_A",
    "name": "Gate Civilian A"
  },
  "GAGATE_A2": {
    "displayName": "闸门",
    "sectionType": "Building",
    "uiName": "NAME:GAGATE_A",
    "name": "Gate Civilian B"
  },
  "GAGATE_A3": {
    "displayName": "闸门",
    "sectionType": "Building",
    "uiName": "NAME:GAGATE_A",
    "name": "Gate Civilian C"
  },
  "GAGATE_A4": {
    "displayName": "闸门",
    "sectionType": "Building",
    "uiName": "NAME:GAGATE_A",
    "name": "Gate Civilian D"
  },
  "CAPARS01": {
    "displayName": "埃菲尔铁塔",
    "sectionType": "Building",
    "uiName": "NAME:CAPARS01A",
    "name": "Eiffel Tower"
  },
  "CADEFN": {
    "displayName": "短剑防御系统",
    "sectionType": "Building",
    "uiName": "NAME:CADEFN",
    "name": "Gladius Defense System"
  },
  "CADEFNB": {
    "displayName": "短剑防御系统",
    "sectionType": "Building",
    "uiName": "NAME:CADEFN",
    "name": "Gladius Defense System B"
  },
  "CADEFNC": {
    "displayName": "短剑防御系统",
    "sectionType": "Building",
    "uiName": "NAME:CADEFN",
    "name": "Gladius Defense System C"
  },
  "YASPAT": {
    "displayName": "天剑防御系统",
    "sectionType": "Building",
    "uiName": "NAME:YASPAT",
    "name": "Spatha Defense System"
  },
  "YABOLT": {
    "displayName": "超能转换器",
    "sectionType": "Building",
    "uiName": "NAME:YABOLT",
    "name": "Psionic Converter"
  },
  "YAULAB": {
    "displayName": "地下设施实验室",
    "sectionType": "Building",
    "uiName": "NAME:YAULAB",
    "name": "Underground Lab"
  },
  "YADYNA": {
    "displayName": "心灵能量源",
    "sectionType": "Building",
    "uiName": "NAME:YADYNA",
    "name": "Mental Dynamo"
  },
  "GAENGN": {
    "displayName": "悖论引擎残骸",
    "sectionType": "Building",
    "uiName": "NAME:GAENGN",
    "name": "Paradox Engine Wreckage"
  },
  "CACHIN": {
    "displayName": "中国旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CACHIN",
    "name": "Chinese Flag"
  },
  "CANRKR": {
    "displayName": "朝鲜旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CANRKR",
    "name": "North Korean Flag"
  },
  "CAUSFGL": {
    "displayName": "美国旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAUSFGL",
    "name": "US Flag"
  },
  "CARUFGL": {
    "displayName": "苏俄旗帜",
    "sectionType": "Building",
    "uiName": "NAME:RUSSIANFLAG",
    "name": "Russian Flag"
  },
  "CAFRFGL": {
    "displayName": "法国旗帜",
    "sectionType": "Building",
    "uiName": "NAME:FRENCHFLAG",
    "name": "French Flag"
  },
  "CAIRFGL": {
    "displayName": "伊拉克旗帜",
    "sectionType": "Building",
    "uiName": "NAME:IRAQFLAG",
    "name": "Iraqi Flag"
  },
  "CASSFLG": {
    "displayName": "苏维埃美利坚旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CASSFLG",
    "name": "SSA Flag"
  },
  "CAPKFLG": {
    "displayName": "巴基斯坦旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAPKFLG",
    "name": "Pakistani Flag"
  },
  "CADKFLG": {
    "displayName": "丹麦旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CADKFLG",
    "name": "Danish Flag"
  },
  "CANZFLG": {
    "displayName": "新西兰旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CANZFLG",
    "name": "New Zealand Flag"
  },
  "CAVNFLG": {
    "displayName": "越南旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAVNFLG",
    "name": "Vietnamese Flag"
  },
  "CAUAFLG": {
    "displayName": "乌克兰旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAUAFLG",
    "name": "Ukrainian Flag"
  },
  "CAIRFLG": {
    "displayName": "爱尔兰旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAIRFLG",
    "name": "Irish Flag"
  },
  "CABSFLG": {
    "displayName": "比绍旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CABSFLG",
    "name": "Bissauan Flag"
  },
  "CASGFLG": {
    "displayName": "新加坡旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CASGFLG",
    "name": "Singaporean Flag"
  },
  "CAPHFLG": {
    "displayName": "菲律宾旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAPHFLG",
    "name": "Philippine Flag"
  },
  "CAINDFLG": {
    "displayName": "印度尼西亚旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAINDFLG",
    "name": "Indonesian Flag"
  },
  "CAVEFLG": {
    "displayName": "委内瑞拉旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAVEFLG",
    "name": "Venezuelan Flag"
  },
  "CAKZFLG": {
    "displayName": "哈萨克斯坦旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAKZFLG",
    "name": "Kazakhstani Flag"
  },
  "CAPEFLG": {
    "displayName": "秘鲁旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAPEFLG",
    "name": "Peruvian Flag"
  },
  "CAAEFLG": {
    "displayName": "阿联酋旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAAEFLG",
    "name": "Emirates Flag"
  },
  "CAINFLG": {
    "displayName": "印度旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAINFLG",
    "name": "Indian Flag"
  },
  "CANGFLG": {
    "displayName": "尼日利亚旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CANGFLG",
    "name": "Nigerian Flag"
  },
  "CACAFLG": {
    "displayName": "加拿大旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CACAFLG",
    "name": "Canadian Flag"
  },
  "CACUFGL": {
    "displayName": "古巴旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CUBANFLAG",
    "name": "Cuban Flag"
  },
  "CASKFGL": {
    "displayName": "韩国旗帜",
    "sectionType": "Building",
    "uiName": "NAME:KOREAFLAGX",
    "name": "South Korean Flag"
  },
  "CALBFGL": {
    "displayName": "利比亚旗帜",
    "sectionType": "Building",
    "uiName": "NAME:LYBIAFLAGG",
    "name": "Libyan Flag"
  },
  "CAGEFGL": {
    "displayName": "德国旗帜",
    "sectionType": "Building",
    "uiName": "NAME:GERMANFLAG",
    "name": "German Flag"
  },
  "CAUKFGL": {
    "displayName": "英国旗帜",
    "sectionType": "Building",
    "uiName": "NAME:UKFLAG",
    "name": "British Flag"
  },
  "CAARFGL": {
    "displayName": "阿根廷旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAARFGL",
    "name": "Argentinian Flag"
  },
  "CAPOFGL": {
    "displayName": "波兰旗帜",
    "sectionType": "Building",
    "uiName": "NAME:POLISHFLAG",
    "name": "Polish Flag"
  },
  "CAJPFLG": {
    "displayName": "日本旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAJPFLG",
    "name": "Japanese Flag"
  },
  "CAIFLG": {
    "displayName": "意大利旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAIFLG",
    "name": "Italian Flag"
  },
  "CAPFFLG": {
    "displayName": "太平洋阵线旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAPFFLG",
    "name": "Pacific Front Flag"
  },
  "CASPAFGL": {
    "displayName": "西班牙旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CASPAFGL",
    "name": "Spanish Flag"
  },
  "CALCFGL": {
    "displayName": "拉丁同盟旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CALCFGL",
    "name": "Confederation Flag"
  },
  "CAGREFGL": {
    "displayName": "希腊旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAGREFGL",
    "name": "Greek Flag"
  },
  "CASWFGL": {
    "displayName": "瑞典旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CASWFGL",
    "name": "Swedish Flag"
  },
  "CANWFGL": {
    "displayName": "挪威旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CANWFGL",
    "name": "Norwegian Flag"
  },
  "CAIDFGL": {
    "displayName": "冰岛旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAIDFGL",
    "name": "Icelandic Flag"
  },
  "CAEAFLG": {
    "displayName": "欧洲联盟旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAEAFLG",
    "name": "Euro Alliance Flag"
  },
  "CAAUFLG": {
    "displayName": "澳大利亚旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAAUFLG",
    "name": "Australian Flag"
  },
  "CAMXFLG": {
    "displayName": "墨西哥旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAMXFLG",
    "name": "Mexican Flag"
  },
  "CABRFLG": {
    "displayName": "巴西旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CABRFLG",
    "name": "Brazilian Flag"
  },
  "CAMCFLG": {
    "displayName": "摩洛哥旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAMCFLG",
    "name": "Moroccan Flag"
  },
  "CATRFLG": {
    "displayName": "土耳其旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CATRFLG",
    "name": "Turkish Flag"
  },
  "CAFNFLG": {
    "displayName": "芬兰旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAFNFLG",
    "name": "Finnish Flag"
  },
  "CAHHFLG": {
    "displayName": "狂鲨先锋旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAHHFLG",
    "name": "Haihead Flag"
  },
  "CAWCFLG": {
    "displayName": "科洛尼亚旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAWCFLG",
    "name": "Coronia Flag"
  },
  "CALBFLG": {
    "displayName": "最后堡垒旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CALBFLG",
    "name": "Last Bastion Flag"
  },
  "CUTARGET": {
    "displayName": "练习靶",
    "sectionType": "Building",
    "uiName": "NAME:CATARGII",
    "name": "Bullseye"
  },
  "KENNL": {
    "displayName": "狗窝",
    "sectionType": "Building",
    "uiName": "NAME:KENNL",
    "name": "Kennel"
  },
  "SLHYT": {
    "displayName": "龙雕像",
    "sectionType": "Building",
    "uiName": "NAME:SLHYT",
    "name": "Statue of Dragon"
  },
  "CASSUN": {
    "displayName": "落日投影板",
    "sectionType": "Building",
    "uiName": "NAME:CASSUN",
    "name": "Synth Sun Holoboard A"
  },
  "CASSUNB": {
    "displayName": "落日投影板",
    "sectionType": "Building",
    "uiName": "NAME:CASSUN",
    "name": "Synth Sun Holoboard B"
  },
  "CAHOLO01": {
    "displayName": "焚风投影板",
    "sectionType": "Building",
    "uiName": "NAME:CAHOLO",
    "name": "Foehn Holoboard A"
  },
  "CAHOLO02": {
    "displayName": "焚风投影板",
    "sectionType": "Building",
    "uiName": "NAME:CAHOLO",
    "name": "Foehn Holoboard B"
  },
  "CABILL01A": {
    "displayName": "我是尤里， 你得服从",
    "sectionType": "Building",
    "uiName": "NAME:CABILL01A",
    "name": "Yuri Obey Billboard A"
  },
  "CABILL01B": {
    "displayName": "我是尤里， 你得服从",
    "sectionType": "Building",
    "uiName": "NAME:CABILL01A",
    "name": "Yuri Obey Billboard B"
  },
  "CABILL02A": {
    "displayName": "锤子与镰刀广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL02A",
    "name": "Hammer & Sickle Billboard A"
  },
  "CABILL02B": {
    "displayName": "锤子与镰刀广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL02A",
    "name": "Hammer & Sickle Billboard B"
  },
  "CABILL03A": {
    "displayName": "苏维埃世界广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL03A",
    "name": "Soviet World Billboard A"
  },
  "CABILL03B": {
    "displayName": "苏维埃世界广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL03A",
    "name": "Soviet World Billboard B"
  },
  "CABILL04A": {
    "displayName": "尤里的意志广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL04A",
    "name": "Be One With Yuri Billboard A"
  },
  "CABILL04B": {
    "displayName": "尤里的意志广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL04A",
    "name": "Be One With Yuri Billboard B"
  },
  "CABILL05A": {
    "displayName": "苏军广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL05A",
    "name": "Soviet Army Billboard A"
  },
  "CABILL05B": {
    "displayName": "苏军广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL05A",
    "name": "Soviet Army Billboard B"
  },
  "CABILL06A": {
    "displayName": "使命召唤广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL06A",
    "name": "Duty Calls Billboard A"
  },
  "CABILL06B": {
    "displayName": "使命召唤广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL06A",
    "name": "Duty Calls Billboard B"
  },
  "CABILL07A": {
    "displayName": "罗曼诺夫广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL07A",
    "name": "Romanov Billboard A"
  },
  "CABILL07B": {
    "displayName": "罗曼诺夫广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL07A",
    "name": "Romanov Billboard B"
  },
  "CABILL08A": {
    "displayName": "尤里&罗曼诺夫广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL08A",
    "name": "Yuri & Romanov Billboard A"
  },
  "CABILL08B": {
    "displayName": "尤里&罗曼诺夫广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL08A",
    "name": "Yuri & Romanov Billboard B"
  },
  "CABILL09A": {
    "displayName": "月球飞行兵广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL09A",
    "name": "Soviet Cosmonaut Billboard A"
  },
  "CABILL09B": {
    "displayName": "月球飞行兵广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL09A",
    "name": "Soviet Cosmonaut Billboard B"
  },
  "CABILL10A": {
    "displayName": "苏维埃宇宙广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL10A",
    "name": "Soviet Space Billboard A"
  },
  "CABILL10B": {
    "displayName": "苏维埃宇宙广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL10A",
    "name": "Soviet Space Billboard B"
  },
  "CABILL11A": {
    "displayName": "列宁广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL11A",
    "name": "Lenin Billboard A"
  },
  "CABILL11B": {
    "displayName": "列宁广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CABILL11A",
    "name": "Lenin Billboard B"
  },
  "DBMOV": {
    "displayName": "黑之契约者LOGO广告牌",
    "sectionType": "Building",
    "uiName": "NAME:DBMOV",
    "name": "Darker than Black Sign"
  },
  "CAMDDB": {
    "displayName": "ModDB 广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAMDDB",
    "name": "ModDB Billboard A"
  },
  "CAMDDB2": {
    "displayName": "ModDB 广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAMDDB",
    "name": "ModDB Billboard B"
  },
  "CAMIKU": {
    "displayName": "World Beyond 广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAMIKU",
    "name": "World Beyond Billboard A"
  },
  "CAMIKU2": {
    "displayName": "World Beyond 广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAMIKU",
    "name": "World Beyond Billboard B"
  },
  "CAYUNO": {
    "displayName": "CnCNet 广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAYUNO",
    "name": "CnCNet Billboard A"
  },
  "CAYUNO2": {
    "displayName": "CnCNet 广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAYUNO",
    "name": "CnCNet Billboard B"
  },
  "CAASHN": {
    "displayName": "克莱帕基广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAASHN",
    "name": "Klepacki Billboard A"
  },
  "CAASHN2": {
    "displayName": "克莱帕基广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAASHN",
    "name": "Klepacki Billboard B"
  },
  "CASTEI": {
    "displayName": "经典老作广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CASTEI",
    "name": "Classics Billboard A"
  },
  "CASTEI2": {
    "displayName": "经典老作广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CASTEI",
    "name": "Classics Billboard B"
  },
  "CASTCH": {
    "displayName": "命运科技广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CASTCH",
    "name": "SteinsTech Billboard A"
  },
  "CASTCH2": {
    "displayName": "命运科技广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CASTCH",
    "name": "SteinsTech Billboard B"
  },
  "CAKIND": {
    "displayName": "金川工业广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAKIND",
    "name": "KI Billboard A"
  },
  "CAKIND2": {
    "displayName": "金川工业广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAKIND",
    "name": "KI Billboard B"
  },
  "CAKNIN": {
    "displayName": "未来科技广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAKNIN",
    "name": "FutureTech Billboard A"
  },
  "CAKNIN2": {
    "displayName": "未来科技广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAKNIN",
    "name": "FutureTech Billboard B"
  },
  "CAJTAL": {
    "displayName": "盟军征兵广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAJTAL",
    "name": "Join the Allies Billboard A"
  },
  "CAJTAL2": {
    "displayName": "盟军征兵广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAJTAL",
    "name": "Join the Allies Billboard B"
  },
  "CAASUK": {
    "displayName": "Ares广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAASUK",
    "name": "Ares Billboard A"
  },
  "CAASUK2": {
    "displayName": "Ares广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAASUK",
    "name": "Ares Billboard B"
  },
  "CAZOPH": {
    "displayName": "原版游戏广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAZOPH",
    "name": "Vanilla Game Billboard A"
  },
  "CAZOPH2": {
    "displayName": "原版游戏广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAZOPH",
    "name": "Vanilla Game Billboard B"
  },
  "CADTBG": {
    "displayName": "扩展包广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CADTBG",
    "name": "Expansion Pack Billboard A"
  },
  "CADTBG2": {
    "displayName": "扩展包广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CADTBG",
    "name": "Expansion Pack Billboard B"
  },
  "CAWOAH01": {
    "displayName": "哇！这是一个广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAWOAH",
    "name": "Woah Sign A"
  },
  "CAWOAH02": {
    "displayName": "哇！这是一个广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CAWOAH",
    "name": "Woah Sign B"
  },
  "GACREM": {
    "displayName": "超时空传送仪残骸",
    "sectionType": "Building",
    "uiName": "NAME:GACREM",
    "name": "Chronosphere Elements"
  },
  "CAMINE": {
    "displayName": "矿井",
    "sectionType": "Building",
    "uiName": "NAME:CAMINE",
    "name": "Mine Entrance A"
  },
  "CAMINEB": {
    "displayName": "矿井",
    "sectionType": "Building",
    "uiName": "NAME:CAMINE",
    "name": "Mine Entrance B"
  },
  "CAMINE01": {
    "displayName": "采矿设施",
    "sectionType": "Building",
    "uiName": "NAME:CAMINE01",
    "name": "Mining Facility"
  },
  "CAMINE02": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAMINE02",
    "name": "Hall A"
  },
  "CAMINE03": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAMINE02",
    "name": "Hall B"
  },
  "CAMINE04": {
    "displayName": "矿井",
    "sectionType": "Building",
    "uiName": "NAME:CAMINE04",
    "name": "Mine Shaft"
  },
  "CABRID": {
    "displayName": "桥梁",
    "sectionType": "Building",
    "uiName": "NAME:CABRID",
    "name": "Mine Bridge"
  },
  "CADRIL": {
    "displayName": "老式挖掘设施",
    "sectionType": "Building",
    "uiName": "NAME:CADRIL",
    "name": "Rusted Drill"
  },
  "CACRYO": {
    "displayName": "圆顶研究室",
    "sectionType": "Building",
    "uiName": "NAME:CACRYO",
    "name": "Research Dome Large"
  },
  "CACRYOB": {
    "displayName": "圆顶研究室",
    "sectionType": "Building",
    "uiName": "NAME:CACRYO",
    "name": "Research Dome Small A"
  },
  "CACRYOC": {
    "displayName": "圆顶研究室",
    "sectionType": "Building",
    "uiName": "NAME:CACRYO",
    "name": "Research Dome Medium"
  },
  "CACRYOD": {
    "displayName": "圆顶研究室",
    "sectionType": "Building",
    "uiName": "NAME:CACRYO",
    "name": "Research Dome Small B"
  },
  "CAPRLT": {
    "displayName": "东方明珠塔",
    "sectionType": "Building",
    "uiName": "NAME:CAPRLT",
    "name": "Shanghai Pearl Tower"
  },
  "CAHBNK": {
    "displayName": "直升机碉堡",
    "sectionType": "Building",
    "uiName": "NAME:CAHBNK",
    "name": "Helibunker"
  },
  "CATEKN01": {
    "displayName": "实验室",
    "sectionType": "Building",
    "uiName": "NAME:CATEKN01",
    "name": "Laboratory Blue"
  },
  "CATEKN02": {
    "displayName": "实验室",
    "sectionType": "Building",
    "uiName": "NAME:CATEKN01",
    "name": "Laboratory Red"
  },
  "CACITY01F": {
    "displayName": "写字楼",
    "sectionType": "Building",
    "uiName": "NAME:CACITY",
    "name": "Glass Office Building A"
  },
  "CACITY02F": {
    "displayName": "写字楼",
    "sectionType": "Building",
    "uiName": "NAME:CACITY",
    "name": "Glass Office Building B"
  },
  "CAKANE01": {
    "displayName": "金川实验室",
    "sectionType": "Building",
    "uiName": "NAME:CAKANE01",
    "name": "Kanegawa Laboratories A"
  },
  "CAKANE02": {
    "displayName": "金川实验室",
    "sectionType": "Building",
    "uiName": "NAME:CAKANE01",
    "name": "Kanegawa Laboratories B"
  },
  "CAKANE04": {
    "displayName": "金川实验室",
    "sectionType": "Building",
    "uiName": "NAME:CAKANE01",
    "name": "Kanegawa Laboratories C"
  },
  "CAKANE05": {
    "displayName": "金川装配车间",
    "sectionType": "Building",
    "uiName": "NAME:CAKANE05",
    "name": "Kanegawa Assembly"
  },
  "CASTOF01": {
    "displayName": "命运科技办公楼",
    "sectionType": "Building",
    "uiName": "NAME:CASTOF",
    "name": "SteinsTech Office A"
  },
  "CASTOF02": {
    "displayName": "命运科技办公楼",
    "sectionType": "Building",
    "uiName": "NAME:CASTOF",
    "name": "SteinsTech Office B"
  },
  "CASTOF03": {
    "displayName": "命运科技办公楼",
    "sectionType": "Building",
    "uiName": "NAME:CASTOF",
    "name": "SteinsTech Office C"
  },
  "CASTOF04": {
    "displayName": "命运科技办公楼",
    "sectionType": "Building",
    "uiName": "NAME:CASTOF",
    "name": "SteinsTech Office D"
  },
  "CASTOF05": {
    "displayName": "命运科技办公楼",
    "sectionType": "Building",
    "uiName": "NAME:CASTOF",
    "name": "SteinsTech Office Tower A"
  },
  "CASTOF06": {
    "displayName": "命运科技办公楼",
    "sectionType": "Building",
    "uiName": "NAME:CASTOF",
    "name": "SteinsTech Office Tower B"
  },
  "CAOPER": {
    "displayName": "特内里费歌剧院",
    "sectionType": "Building",
    "uiName": "NAME:CAOPER",
    "name": "Tenerife Opera House"
  },
  "CAKANE06": {
    "displayName": "金川工业总部",
    "sectionType": "Building",
    "uiName": "NAME:CAKANE06",
    "name": "Kanegawa HQ"
  },
  "CAMRKT01": {
    "displayName": "集市",
    "sectionType": "Building",
    "uiName": "NAME:CAMRKT01",
    "name": "Marketplace A"
  },
  "CAMRKT02": {
    "displayName": "集市",
    "sectionType": "Building",
    "uiName": "NAME:CAMRKT01",
    "name": "Marketplace B"
  },
  "CAMRKT03": {
    "displayName": "补给",
    "sectionType": "Building",
    "uiName": "NAME:SUPPLIES",
    "name": "Supplies Large"
  },
  "CASUPLA": {
    "displayName": "补给",
    "sectionType": "Building",
    "uiName": "NAME:SUPPLIES",
    "name": "Supplies Small"
  },
  "CABRLS": {
    "displayName": "补给",
    "sectionType": "Building",
    "uiName": "NAME:SUPPLIES",
    "name": "Water Supplies"
  },
  "CAWHEE": {
    "displayName": "水车",
    "sectionType": "Building",
    "uiName": "NAME:CAWHEE",
    "name": "Water Wheel"
  },
  "CASIN03E": {
    "displayName": "施工标识",
    "sectionType": "Building",
    "uiName": "NAME:CASIN03E",
    "name": "Construction Sign A"
  },
  "CASIN03S": {
    "displayName": "施工标识",
    "sectionType": "Building",
    "uiName": "NAME:CASIN03E",
    "name": "Construction Sign B"
  },
  "CARDBK01": {
    "displayName": "路障",
    "sectionType": "Building",
    "uiName": "NAME:CARDBK",
    "name": "Road Block A"
  },
  "CARDBK02": {
    "displayName": "路障",
    "sectionType": "Building",
    "uiName": "NAME:CARDBK",
    "name": "Road Block B"
  },
  "CARDBK03": {
    "displayName": "路障",
    "sectionType": "Building",
    "uiName": "NAME:CARDBK",
    "name": "Road Block C"
  },
  "CARDBK04": {
    "displayName": "路障",
    "sectionType": "Building",
    "uiName": "NAME:CARDBK",
    "name": "Road Block D"
  },
  "CAPROP01": {
    "displayName": "铁桶",
    "sectionType": "Building",
    "uiName": "NAME:CAPROP",
    "name": "Steel Barrels A"
  },
  "CAPROP02": {
    "displayName": "铁桶",
    "sectionType": "Building",
    "uiName": "NAME:CAPROP",
    "name": "Steel Barrels B"
  },
  "CAPROP03": {
    "displayName": "铁桶",
    "sectionType": "Building",
    "uiName": "NAME:CAPROP",
    "name": "Steel Barrels C"
  },
  "CACASK": {
    "displayName": "啤酒桶",
    "sectionType": "Building",
    "uiName": "NAME:CACASK",
    "name": "Beer Cask"
  },
  "CAMRKT04": {
    "displayName": "集市",
    "sectionType": "Building",
    "uiName": "NAME:CAMRKT01",
    "name": "Marketplace C"
  },
  "CAMRKT05": {
    "displayName": "集市",
    "sectionType": "Building",
    "uiName": "NAME:CAMRKT01",
    "name": "Marketplace D"
  },
  "CAMRKT06": {
    "displayName": "集市",
    "sectionType": "Building",
    "uiName": "NAME:CAMRKT01",
    "name": "Marketplace E"
  },
  "CAMRKT07": {
    "displayName": "集市",
    "sectionType": "Building",
    "uiName": "NAME:CAMRKT01",
    "name": "Marketplace F"
  },
  "CAMRKT08": {
    "displayName": "集市",
    "sectionType": "Building",
    "uiName": "NAME:CAMRKT01",
    "name": "Marketplace G"
  },
  "CCHINA01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Chinese Building A"
  },
  "CCHINA02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Chinese Building B"
  },
  "CACHNA01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Chinese Building C"
  },
  "CACHNA02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Chinese Building D"
  },
  "CACHNA03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Chinese Tower"
  },
  "CASHSE01": {
    "displayName": "房屋",
    "sectionType": "Building",
    "uiName": "NAME:CASHSE01",
    "name": "Silo House"
  },
  "CASHSE02": {
    "displayName": "砖厂",
    "sectionType": "Building",
    "uiName": "NAME:CASHSE02",
    "name": "Brickyard"
  },
  "CASHSE03": {
    "displayName": "贮藏罐",
    "sectionType": "Building",
    "uiName": "NAME:CASHSE03",
    "name": "Silo Facility"
  },
  "CACOMO": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Country Church"
  },
  "CACHUR01": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Church A"
  },
  "CACHUR02": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Church B"
  },
  "CACHUR03": {
    "displayName": "圣詹姆士天主教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR02",
    "name": "St. James' Cathedral"
  },
  "CACHUR04": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Church Ruin A"
  },
  "CACHUR05": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Church Ruin B"
  },
  "CACHUR06": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Church C"
  },
  "CACHUR07": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Church D"
  },
  "CACHUR08": {
    "displayName": "教堂",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR01",
    "name": "Church E"
  },
  "CAMUSE01": {
    "displayName": "大厦",
    "sectionType": "Building",
    "uiName": "NAME:CAMUSE01",
    "name": "Mansion A"
  },
  "CAMUSE02": {
    "displayName": "大厦",
    "sectionType": "Building",
    "uiName": "NAME:CAMUSE01",
    "name": "Mansion B"
  },
  "CAMUSE03": {
    "displayName": "大厦",
    "sectionType": "Building",
    "uiName": "NAME:CAMUSE01",
    "name": "Mansion C"
  },
  "CAMUSE04": {
    "displayName": "命运科技大学",
    "sectionType": "Building",
    "uiName": "NAME:CASTEID",
    "name": "SteinsTech University"
  },
  "CAMONA": {
    "displayName": "圣索菲亚大教堂",
    "sectionType": "Building",
    "uiName": "NAME:CAMONA",
    "name": "Haga Sophia"
  },
  "NACSTB01": {
    "displayName": "废弃的矿石精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:NACSTB01",
    "name": "Abandoned Refinery"
  },
  "CATESL": {
    "displayName": "废弃的反应炉",
    "sectionType": "Building",
    "uiName": "NAME:CATESL",
    "name": "Abandoned Reactor"
  },
  "CACOLO": {
    "displayName": "罗马斗兽场",
    "sectionType": "Building",
    "uiName": "NAME:CACOLO",
    "name": "The Colosseum"
  },
  "CASANT": {
    "displayName": "圣天使堡",
    "sectionType": "Building",
    "uiName": "NAME:CASANT",
    "name": "Castel Sant'Angelo"
  },
  "CAPETE": {
    "displayName": "圣彼得大教堂",
    "sectionType": "Building",
    "uiName": "NAME:CAPETE",
    "name": "St. Peter's Basilica Ruin"
  },
  "CARING": {
    "displayName": "圣彼得广场",
    "sectionType": "Building",
    "uiName": "NAME:CARING",
    "name": "St. Peter's Square A"
  },
  "CARING2": {
    "displayName": "圣彼得广场",
    "sectionType": "Building",
    "uiName": "NAME:CARING",
    "name": "St. Peter's Square B"
  },
  "CASEIM01": {
    "displayName": "波兰下议院",
    "sectionType": "Building",
    "uiName": "NAME:CASEIM",
    "name": "Polish Sejm A"
  },
  "CASEIM02": {
    "displayName": "波兰下议院",
    "sectionType": "Building",
    "uiName": "NAME:CASEIM",
    "name": "Polish Sejm B"
  },
  "CASEIM03": {
    "displayName": "波兰下议院",
    "sectionType": "Building",
    "uiName": "NAME:CASEIM",
    "name": "Polish Sejm C"
  },
  "CASEIM04": {
    "displayName": "波兰下议院",
    "sectionType": "Building",
    "uiName": "NAME:CASEIM",
    "name": "Polish Sejm D"
  },
  "CASEIM05": {
    "displayName": "波兰下议院",
    "sectionType": "Building",
    "uiName": "NAME:CASEIM",
    "name": "Polish Sejm E"
  },
  "CASEIM06": {
    "displayName": "波兰下议院",
    "sectionType": "Building",
    "uiName": "NAME:CASEIM",
    "name": "Polish Sejm F"
  },
  "CACHUR09": {
    "displayName": "城堡遗迹",
    "sectionType": "Building",
    "uiName": "NAME:CACHUR09",
    "name": "Citadel Ruins"
  },
  "CAPALA": {
    "displayName": "韦恩庄园",
    "sectionType": "Building",
    "uiName": "NAME:CAPALA",
    "name": "Manor"
  },
  "NAAZT1": {
    "displayName": "阿兹特克神庙",
    "sectionType": "Building",
    "uiName": "NAME:NAAZT1",
    "name": "Aztec Temple Main"
  },
  "NAAZT2": {
    "displayName": "阿兹特克神庙",
    "sectionType": "Building",
    "uiName": "NAME:NAAZT1",
    "name": "Aztec Temple Small"
  },
  "CAHTCH": {
    "displayName": "舱门",
    "sectionType": "Building",
    "uiName": "NAME:CAHTCH",
    "name": "Hatch"
  },
  "CAEXCV": {
    "displayName": "挖掘设施",
    "sectionType": "Building",
    "uiName": "NAME:CAEXCV",
    "name": "Excavation Site"
  },
  "CASTON": {
    "displayName": "石像",
    "sectionType": "Building",
    "uiName": "NAME:CASTON",
    "name": "Stone Bunker"
  },
  "CAMONU": {
    "displayName": "方尖碑",
    "sectionType": "Building",
    "uiName": "NAME:CAMONU",
    "name": "Obelisk"
  },
  "CACANN01": {
    "displayName": "炮台",
    "sectionType": "Building",
    "uiName": "NAME:CACANN01",
    "name": "Cannon Right"
  },
  "CACANN02": {
    "displayName": "炮台",
    "sectionType": "Building",
    "uiName": "NAME:CACANN01",
    "name": "Cannon Left"
  },
  "CASTON01": {
    "displayName": "石像",
    "sectionType": "Building",
    "uiName": "NAME:CASTON",
    "name": "Stone Statue A"
  },
  "CASTON02": {
    "displayName": "石像",
    "sectionType": "Building",
    "uiName": "NAME:CASTON",
    "name": "Stone Statue B"
  },
  "CATIKI08": {
    "displayName": "石像",
    "sectionType": "Building",
    "uiName": "NAME:CASTON",
    "name": "Stone Statue C"
  },
  "CABORS": {
    "displayName": "鲍里斯雕像",
    "sectionType": "Building",
    "uiName": "NAME:CABORS",
    "name": "Statue of Boris"
  },
  "CAYURST": {
    "displayName": "尤里的雕像",
    "sectionType": "Building",
    "uiName": "NAME:CAYURST",
    "name": "Statue of Yuri"
  },
  "CASTAT01": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue City A"
  },
  "CASTAT02": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue City B"
  },
  "CASTAT03": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue City C"
  },
  "CATIKI01": {
    "displayName": "提基人面像",
    "sectionType": "Building",
    "uiName": "NAME:CATIKI01",
    "name": "Tiki Face A"
  },
  "CATIKI02": {
    "displayName": "提基人面像",
    "sectionType": "Building",
    "uiName": "NAME:CATIKI01",
    "name": "Tiki Face B"
  },
  "CATIKI03": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Tiki Statue A"
  },
  "CATIKI04": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Tiki Statue B"
  },
  "CATIKI05": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Tiki Statue C"
  },
  "CATIKI06": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Tiki Statue D"
  },
  "CATIKI07": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Tiki Statue E"
  },
  "CATOTE01": {
    "displayName": "图腾",
    "sectionType": "Building",
    "uiName": "NAME:TOTEM",
    "name": "Totem A"
  },
  "CATOTE02": {
    "displayName": "图腾",
    "sectionType": "Building",
    "uiName": "NAME:TOTEM",
    "name": "Totem B"
  },
  "CACOLM": {
    "displayName": "立柱",
    "sectionType": "Building",
    "uiName": "NAME:CACOLM",
    "name": "Japanese Column"
  },
  "CABUDD": {
    "displayName": "佛像",
    "sectionType": "Building",
    "uiName": "NAME:CABUDD",
    "name": "Statue of Buddha"
  },
  "CATSAR": {
    "displayName": "沙皇大钟",
    "sectionType": "Building",
    "uiName": "NAME:CATSAR",
    "name": "Tsar Bell"
  },
  "CAFISH": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue of Fish"
  },
  "CADRAG01": {
    "displayName": "龙尾",
    "sectionType": "Building",
    "uiName": "NAME:CADRAG01",
    "name": "Dragon Statue Tail"
  },
  "CADRAG02": {
    "displayName": "龙门",
    "sectionType": "Building",
    "uiName": "NAME:CADRAG02",
    "name": "Dragon Statue Gate A"
  },
  "CADRAG03": {
    "displayName": "龙门",
    "sectionType": "Building",
    "uiName": "NAME:CADRAG02",
    "name": "Dragon Statue Gate B"
  },
  "CADRAG04": {
    "displayName": "龙头",
    "sectionType": "Building",
    "uiName": "NAME:CADRAG04",
    "name": "Dragon Statue Head"
  },
  "CABARR": {
    "displayName": "反抗军避难所",
    "sectionType": "Building",
    "uiName": "NAME:CABARR2",
    "name": "Rebel Hideout"
  },
  "NATUNE": {
    "displayName": "隧道入口",
    "sectionType": "Building",
    "uiName": "NAME:NATUNE",
    "name": "Tunnel Entrance"
  },
  "NATUNH": {
    "displayName": "隧道枢纽",
    "sectionType": "Building",
    "uiName": "NAME:NATUNH",
    "name": "Tunnel Hub"
  },
  "CAPLF01": {
    "displayName": "火车站台",
    "sectionType": "Building",
    "uiName": "NAME:CAPLAT",
    "name": "Train Platform A"
  },
  "CAPLF02": {
    "displayName": "火车站台",
    "sectionType": "Building",
    "uiName": "NAME:CAPLAT",
    "name": "Train Platform B"
  },
  "CASTN01": {
    "displayName": "火车站",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT",
    "name": "Train Station A"
  },
  "CASTN02": {
    "displayName": "火车站",
    "sectionType": "Building",
    "uiName": "NAME:CATSTAT",
    "name": "Train Station B"
  },
  "CABIOS": {
    "displayName": "考古学博物馆",
    "sectionType": "Building",
    "uiName": "NAME:CABIOS",
    "name": "Archeology Museum"
  },
  "CABLSH": {
    "displayName": "莫斯科大剧院",
    "sectionType": "Building",
    "uiName": "NAME:CABLSH",
    "name": "Moscow Bolshoi Theatre"
  },
  "CAKRSN": {
    "displayName": "克里姆林宫参议院",
    "sectionType": "Building",
    "uiName": "NAME:CAKRSN",
    "name": "Kremlin Senate"
  },
  "CADORM": {
    "displayName": "圣母升天大教堂",
    "sectionType": "Building",
    "uiName": "NAME:CADORM",
    "name": "Kremlin Dormition Cathedral"
  },
  "CAANNN": {
    "displayName": "圣母领报大教堂",
    "sectionType": "Building",
    "uiName": "NAME:CAANNN",
    "name": "Kremlin Annunciation Cathedral"
  },
  "CAKRAR": {
    "displayName": "克里姆林宫军械库",
    "sectionType": "Building",
    "uiName": "NAME:CAKRAR",
    "name": "Kremlin Arsenal"
  },
  "CACNSRV": {
    "displayName": "博物馆",
    "sectionType": "Building",
    "uiName": "NAME:CACNSRV",
    "name": "Museum of Industry"
  },
  "CAPRSNA": {
    "displayName": "监狱建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAPRSN",
    "name": "Prison Building A"
  },
  "CAPRSNB": {
    "displayName": "监狱建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAPRSN",
    "name": "Prison Building B"
  },
  "CAPRSNC": {
    "displayName": "监狱建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAPRSN",
    "name": "Prison Building C"
  },
  "CAPRSND": {
    "displayName": "监狱建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAPRSN",
    "name": "Prison Building D"
  },
  "CAPRSNE": {
    "displayName": "监狱建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAPRSN",
    "name": "Prison Building E"
  },
  "CAPRSNF": {
    "displayName": "监狱建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAPRSN",
    "name": "Prison Building F"
  },
  "CAPRSNG": {
    "displayName": "监狱建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAPRSN",
    "name": "Prison Building G"
  },
  "CAZOO": {
    "displayName": "动物园",
    "sectionType": "Building",
    "uiName": "NAME:CAZOO",
    "name": "Zoo Building"
  },
  "CATEXS02": {
    "displayName": "阿拉莫要塞",
    "sectionType": "Building",
    "uiName": "NAME:CATEXS02",
    "name": "The Alamo"
  },
  "CAWASH02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington A"
  },
  "CAWSH12": {
    "displayName": "华盛顿纪念碑",
    "sectionType": "Building",
    "uiName": "NAME:CAWSH12",
    "name": "Washington Monument"
  },
  "CAHEAV": {
    "displayName": "天坛",
    "sectionType": "Building",
    "uiName": "NAME:CAHEAV",
    "name": "Temple of Heaven"
  },
  "CAPOZN": {
    "displayName": "波兹南哈拉竞技场",
    "sectionType": "Building",
    "uiName": "NAME:CAPOZN",
    "name": "Hala Arena"
  },
  "CAJORA": {
    "displayName": "神龛",
    "sectionType": "Building",
    "uiName": "NAME:CAJORA",
    "name": "Japanese Shrine"
  },
  "CAWASH14": {
    "displayName": "杰弗逊纪念馆",
    "sectionType": "Building",
    "uiName": "NAME:CAWSH14",
    "name": "Jefferson Memorial"
  },
  "CAMAUS": {
    "displayName": "列宁墓",
    "sectionType": "Building",
    "uiName": "NAME:CAMAUS",
    "name": "Lenin's Mausoleum"
  },
  "CARUSHT": {
    "displayName": "国家历史博物馆",
    "sectionType": "Building",
    "uiName": "NAME:CARUSHT",
    "name": "Moscow State Historical Museum"
  },
  "CAPRS03": {
    "displayName": "卢浮宫",
    "sectionType": "Building",
    "uiName": "NAME:CAPRS03X",
    "name": "Paris Louvre Museum"
  },
  "CAMEX01": {
    "displayName": "玛雅金字塔",
    "sectionType": "Building",
    "uiName": "NAME:MAYANP",
    "name": "Mayan Prism A"
  },
  "MAYAN": {
    "displayName": "玛雅金字塔",
    "sectionType": "Building",
    "uiName": "NAME:MAYANP",
    "name": "Mayan Prism B"
  },
  "CAPALACE01": {
    "displayName": "凯瑟琳宫",
    "sectionType": "Building",
    "uiName": "NAME:CAPALACE",
    "name": "Russian Catherine Palace A"
  },
  "CAPALACE02": {
    "displayName": "凯瑟琳宫",
    "sectionType": "Building",
    "uiName": "NAME:CAPALACE",
    "name": "Russian Catherine Palace B"
  },
  "CAPALACE03": {
    "displayName": "凯瑟琳宫",
    "sectionType": "Building",
    "uiName": "NAME:CAPALACE",
    "name": "Russian Catherine Palace C"
  },
  "CAPALACE04": {
    "displayName": "凯瑟琳宫",
    "sectionType": "Building",
    "uiName": "NAME:CAPALACE",
    "name": "Russian Catherine Palace D"
  },
  "CAWASH15": {
    "displayName": "林肯纪念馆",
    "sectionType": "Building",
    "uiName": "NAME:CAWASH15",
    "name": "Washington Lincoln Memorial"
  },
  "CAPARS11": {
    "displayName": "凯旋门",
    "sectionType": "Building",
    "uiName": "NAME:CAPARS11X",
    "name": "Arc de Triomphe"
  },
  "CAPARS12": {
    "displayName": "巴黎圣母院",
    "sectionType": "Building",
    "uiName": "NAME:CAPARS12X",
    "name": "Notre-Dame Cathedral"
  },
  "CARUS07": {
    "displayName": "罗波诺耶梅思托平台",
    "sectionType": "Building",
    "uiName": "NAME:CARUS07X",
    "name": "Lobnoye Mesto"
  },
  "CAWASH16": {
    "displayName": "史密索尼安城堡",
    "sectionType": "Building",
    "uiName": "NAME:CAWASH16",
    "name": "Smithsonian Castle"
  },
  "CACAST": {
    "displayName": "堡垒",
    "sectionType": "Building",
    "uiName": "NAME:CACAST",
    "name": "Old Bastion"
  },
  "CAWASH17": {
    "displayName": "自然历史博物馆",
    "sectionType": "Building",
    "uiName": "NAME:CAWASH17",
    "name": "Smithsonian Natural History Museum"
  },
  "CACHIG05": {
    "displayName": "西尔斯大厦",
    "sectionType": "Building",
    "uiName": "NAME:CACHIG05",
    "name": "Chicago Sears Tower"
  },
  "CAWASH18": {
    "displayName": "喷泉",
    "sectionType": "Building",
    "uiName": "NAME:CAWASH18A",
    "name": "Fountain A"
  },
  "CAFONT": {
    "displayName": "喷泉",
    "sectionType": "Building",
    "uiName": "NAME:CAWASH18A",
    "name": "Fountain B"
  },
  "CASTL04": {
    "displayName": "圣路易斯拱门",
    "sectionType": "Building",
    "uiName": "NAME:CASTL04X",
    "name": "Gateway Arch"
  },
  "CARUS01": {
    "displayName": "圣巴西尔大教堂",
    "sectionType": "Building",
    "uiName": "NAME:CARUS01X",
    "name": "St. Basil's Cathedral"
  },
  "CAWA2A": {
    "displayName": "五角大楼",
    "sectionType": "Building",
    "uiName": "NAME:CAWA2AX",
    "name": "Pentagon A"
  },
  "CAWA2B": {
    "displayName": "五角大楼",
    "sectionType": "Building",
    "uiName": "NAME:CAWA2AX",
    "name": "Pentagon B"
  },
  "CAWA2C": {
    "displayName": "五角大楼",
    "sectionType": "Building",
    "uiName": "NAME:CAWA2AX",
    "name": "Pentagon C"
  },
  "CAWA2D": {
    "displayName": "五角大楼",
    "sectionType": "Building",
    "uiName": "NAME:CAWA2AX",
    "name": "Pentagon D"
  },
  "CAEAST01": {
    "displayName": "复活岛石像",
    "sectionType": "Building",
    "uiName": "NAME:CAEAST01",
    "name": "Moai"
  },
  "CAEAST02": {
    "displayName": "尤里雕像",
    "sectionType": "Building",
    "uiName": "NAME:CAEAST02X",
    "name": "Yuri's Bust"
  },
  "YAPPPT": {
    "displayName": "建设中的心灵支配仪",
    "sectionType": "Building",
    "uiName": "NAME:YAPPPT",
    "name": "Partially Built Psychic Dominator"
  },
  "CARRELS": {
    "displayName": "油桶架",
    "sectionType": "Building",
    "uiName": "NAME:BARRELS",
    "name": "Barrels Rack"
  },
  "CAMISC01": {
    "displayName": "油桶",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC01A",
    "name": "Barrels Orange"
  },
  "CAMISC02": {
    "displayName": "油桶",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC02A",
    "name": "Barrel Orange"
  },
  "CAMISC01B": {
    "displayName": "油桶",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC01A",
    "name": "Barrels Red"
  },
  "CAMISC02B": {
    "displayName": "油桶",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC02A",
    "name": "Barrel Red"
  },
  "CAMISC0X": {
    "displayName": "油桶",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC0X",
    "name": "Barrel Napalm"
  },
  "AMMOCRAT": {
    "displayName": "弹药箱",
    "sectionType": "Building",
    "uiName": "NAME:AMMOCRATES",
    "name": "Ammo Crates A"
  },
  "AMMOCRATB": {
    "displayName": "弹药箱",
    "sectionType": "Building",
    "uiName": "NAME:AMMOCRATES",
    "name": "Ammo Crates B"
  },
  "CALOND04": {
    "displayName": "英国国会",
    "sectionType": "Building",
    "uiName": "NAME:CALOND04",
    "name": "London Parliament"
  },
  "CALOND05": {
    "displayName": "大笨钟",
    "sectionType": "Building",
    "uiName": "NAME:CALOND05",
    "name": "Big Ben"
  },
  "CALOND06": {
    "displayName": "伦敦塔",
    "sectionType": "Building",
    "uiName": "NAME:CALOND06",
    "name": "Tower of London"
  },
  "CADSTA": {
    "displayName": "椭圆型竞技场",
    "sectionType": "Building",
    "uiName": "NAME:CADSTA",
    "name": "Oval Stadium"
  },
  "CAONIO": {
    "displayName": "圆顶教堂",
    "sectionType": "Building",
    "uiName": "NAME:CAONIO",
    "name": "Onion Dome"
  },
  "CAORAN": {
    "displayName": "圆顶教堂",
    "sectionType": "Building",
    "uiName": "NAME:CAORAN",
    "name": "Melon Dome"
  },
  "CAWSTA": {
    "displayName": "白金体育场",
    "sectionType": "Building",
    "uiName": "NAME:CAWSTA",
    "name": "Platinum Stadium"
  },
  "CABSTA": {
    "displayName": "青铜体育场",
    "sectionType": "Building",
    "uiName": "NAME:CABSTA",
    "name": "Bronze Stadium"
  },
  "CAOSTA": {
    "displayName": "蓝宝石体育场",
    "sectionType": "Building",
    "uiName": "NAME:CAOSTA",
    "name": "Sapphire Stadium"
  },
  "CASTL05A": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large A"
  },
  "CASTL05B": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large B"
  },
  "CASTL05C": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large C"
  },
  "CASTL05D": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large D"
  },
  "CASTL05E": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large E"
  },
  "CASTL05F": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large F"
  },
  "CASTL05G": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large G"
  },
  "CASTL05H": {
    "displayName": "体育场",
    "sectionType": "Building",
    "uiName": "NAME:CASTL05X",
    "name": "Stadium Large H"
  },
  "CAMIAM08": {
    "displayName": "亚历桑那纪念馆",
    "sectionType": "Building",
    "uiName": "NAME:CAMIAM08",
    "name": "Arizona Memorial"
  },
  "CAEGYP01": {
    "displayName": "大金字塔",
    "sectionType": "Building",
    "uiName": "NAME:CAPYRA",
    "name": "Pyramid A"
  },
  "CAEGYP02": {
    "displayName": "金字塔",
    "sectionType": "Building",
    "uiName": "NAME:CAEGYP",
    "name": "Pyramid Small"
  },
  "CAEGYP03": {
    "displayName": "狮身人面像",
    "sectionType": "Building",
    "uiName": "NAME:CAEGYP03",
    "name": "Sphinx"
  },
  "CAEGYP04": {
    "displayName": "大金字塔",
    "sectionType": "Building",
    "uiName": "NAME:CAPYRA",
    "name": "Pyramid B"
  },
  "CAEGYP05": {
    "displayName": "大金字塔",
    "sectionType": "Building",
    "uiName": "NAME:CAPYRA",
    "name": "Pyramid C"
  },
  "CAEGYP06": {
    "displayName": "大金字塔",
    "sectionType": "Building",
    "uiName": "NAME:CAPYRA",
    "name": "Pyramid Back"
  },
  "CALA03": {
    "displayName": "好莱坞标志",
    "sectionType": "Building",
    "uiName": "NAME:CALA03X",
    "name": "Holywood Sign A"
  },
  "CALA04": {
    "displayName": "好莱坞露天影城",
    "sectionType": "Building",
    "uiName": "NAME:CALA04X",
    "name": "Hollywood Bowl"
  },
  "CALA11": {
    "displayName": "好莱坞露天影城",
    "sectionType": "Building",
    "uiName": "NAME:CALA04X",
    "name": "Hollywood Bowl Seats A"
  },
  "CALA12": {
    "displayName": "好莱坞露天影城",
    "sectionType": "Building",
    "uiName": "NAME:CALA04X",
    "name": "Hollywood Bowl Seats B"
  },
  "CALA13": {
    "displayName": "好莱坞标志",
    "sectionType": "Building",
    "uiName": "NAME:CALA03X",
    "name": "Hollywood Sign B"
  },
  "CALA14": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Mini Mall A"
  },
  "CAMALL": {
    "displayName": "大型商场",
    "sectionType": "Building",
    "uiName": "NAME:CAMALL",
    "name": "Big Mall"
  },
  "CALA15": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Mini Mall B"
  },
  "CALA05": {
    "displayName": "洛杉矶",
    "sectionType": "Building",
    "uiName": "NAME:CALA05",
    "name": "LAX"
  },
  "CALA06": {
    "displayName": "洛杉矶塔台",
    "sectionType": "Building",
    "uiName": "NAME:CALA06",
    "name": "LAX Control Tower"
  },
  "CALA07": {
    "displayName": "电影院",
    "sectionType": "Building",
    "uiName": "NAME:CALA07",
    "name": "Movie Theater"
  },
  "CALA08": {
    "displayName": "汽车代理商",
    "sectionType": "Building",
    "uiName": "NAME:CALA08",
    "name": "Car Dealership"
  },
  "CALA09": {
    "displayName": "便利商店",
    "sectionType": "Building",
    "uiName": "NAME:CALA09",
    "name": "Convenience Store"
  },
  "CALA10": {
    "displayName": "Westwood 广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CALA10A",
    "name": "Westwood Sign"
  },
  "CALB10": {
    "displayName": "你家被偷了 ！广告牌",
    "sectionType": "Building",
    "uiName": "NAME:CALA10B",
    "name": "All Your Base Sign"
  },
  "CASANF04": {
    "displayName": "金门大桥",
    "sectionType": "Building",
    "uiName": "NAME:CASANF04X",
    "name": "Golden Gate Bridge Main"
  },
  "CASANF05": {
    "displayName": "恶魔岛",
    "sectionType": "Building",
    "uiName": "NAME:CASANF05",
    "name": "Alcatraz"
  },
  "CASANF06": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Home Victorian D"
  },
  "CASANF07": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Home Victorian E"
  },
  "CASANF08": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Home Victorian F"
  },
  "CASANF09": {
    "displayName": "金门大桥",
    "sectionType": "Building",
    "uiName": "NAME:CASANF04X",
    "name": "Golden Gate Bridge A"
  },
  "CASANF10": {
    "displayName": "金门大桥",
    "sectionType": "Building",
    "uiName": "NAME:CASANF04X",
    "name": "Golden Gate Bridge B"
  },
  "CASANF11": {
    "displayName": "金门大桥",
    "sectionType": "Building",
    "uiName": "NAME:CASANF04X",
    "name": "Golden Gate Bridge C"
  },
  "CASANF12": {
    "displayName": "金门大桥",
    "sectionType": "Building",
    "uiName": "NAME:CASANF04X",
    "name": "Golden Gate Bridge D"
  },
  "CASANF13": {
    "displayName": "金门大桥",
    "sectionType": "Building",
    "uiName": "NAME:CASANF04X",
    "name": "Golden Gate Bridge E"
  },
  "CASANF14": {
    "displayName": "金门大桥",
    "sectionType": "Building",
    "uiName": "NAME:CASANF04X",
    "name": "Golden Gate Bridge F"
  },
  "CASANF15": {
    "displayName": "水塔",
    "sectionType": "Building",
    "uiName": "NAME:CASANF15",
    "name": "Alcatraz Water Tower"
  },
  "CASANF16": {
    "displayName": "灯塔",
    "sectionType": "Building",
    "uiName": "NAME:CASANF16",
    "name": "Alcatraz Lighthouse"
  },
  "CASANF17": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Alcatraz Building A"
  },
  "CASANF18": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Alcatraz Building B"
  },
  "CASEAT01": {
    "displayName": "西雅图太空针塔",
    "sectionType": "Building",
    "uiName": "NAME:CASEAT01",
    "name": "Seattle Space Needle"
  },
  "CASEAT02": {
    "displayName": "巨软园区",
    "sectionType": "Building",
    "uiName": "NAME:CASEAT02",
    "name": "MassiveSoft Campus"
  },
  "CASYDN03": {
    "displayName": "悉尼歌剧院",
    "sectionType": "Building",
    "uiName": "NAME:CASYDN03",
    "name": "Sydney Opera House"
  },
  "CALA01": {
    "displayName": "科冈的精品店",
    "sectionType": "Building",
    "uiName": "NAME:CALA01X",
    "name": "Keegan's Fine Produce"
  },
  "CALOND01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Home London"
  },
  "CALOND03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Pub London"
  },
  "CAROAD": {
    "displayName": "混凝土路障",
    "sectionType": "Building",
    "uiName": "NAME:CAROAD",
    "name": "Concrete Block"
  },
  "CACRSS1": {
    "displayName": "Custom Prop A",
    "sectionType": "Building",
    "name": "Custom Prop A"
  },
  "CACRSS2": {
    "displayName": "Custom Prop B",
    "sectionType": "Building",
    "name": "Custom Prop B"
  },
  "CACRSS3": {
    "displayName": "Custom Prop C",
    "sectionType": "Building",
    "name": "Custom Prop C"
  },
  "CACRSS4": {
    "displayName": "Custom Prop D",
    "sectionType": "Building",
    "name": "Custom Prop D"
  },
  "CACRSSX": {
    "displayName": "Custom Prop X",
    "sectionType": "Building",
    "name": "Custom Prop X"
  },
  "CACRSSY": {
    "displayName": "Custom Prop Y",
    "sectionType": "Building",
    "name": "Custom Prop Y"
  },
  "CABARR01": {
    "displayName": "拒马",
    "sectionType": "Building",
    "uiName": "NAME:CABARRX",
    "name": "Hedgehog A"
  },
  "CABARR02": {
    "displayName": "拒马",
    "sectionType": "Building",
    "uiName": "NAME:CABARRX",
    "name": "Hedgehog B"
  },
  "CAMORR01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco A"
  },
  "CAMORR02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco B"
  },
  "CAMORR03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco C"
  },
  "CAMORR04": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco D"
  },
  "CAMORR05": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Bar Morocco"
  },
  "CAMORR06": {
    "displayName": "里克酒馆",
    "sectionType": "Building",
    "uiName": "NAME:CARIK",
    "name": "Rik's Place"
  },
  "CAMORR07": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco E"
  },
  "CAMORR08": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco F"
  },
  "CAMORR09": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco G"
  },
  "CAMORR10": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco H"
  },
  "CAMORR11": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco I"
  },
  "CAMORR12": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco J"
  },
  "CAMORR13": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco K"
  },
  "CAMORR14": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco L"
  },
  "CAMORR15": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco M"
  },
  "CAMORR16": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco N"
  },
  "CAMORR17": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Morocco O"
  },
  "CASANF01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Home Victorian A"
  },
  "CASANF02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Home Victorian B"
  },
  "CASANF03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Home Victorian C"
  },
  "CASYDN02": {
    "displayName": "麦克鲁汉堡",
    "sectionType": "Building",
    "uiName": "NAME:CASYDN02",
    "name": "McRoo Burger"
  },
  "CATRAN01": {
    "displayName": "地窖",
    "sectionType": "Building",
    "uiName": "NAME:CATRAN01X",
    "name": "Crypt A"
  },
  "CATRAN02": {
    "displayName": "地窖",
    "sectionType": "Building",
    "uiName": "NAME:CATRAN01X",
    "name": "Crypt B"
  },
  "CAMEX02": {
    "displayName": "玛雅遗迹",
    "sectionType": "Building",
    "uiName": "NAME:MAYANRUIN",
    "name": "Mayan Temple Main"
  },
  "CAMEX03": {
    "displayName": "玛雅遗迹",
    "sectionType": "Building",
    "uiName": "NAME:MAYANRUIN",
    "name": "Mayan Temple Small"
  },
  "CAMEX04": {
    "displayName": "玛雅遗迹",
    "sectionType": "Building",
    "uiName": "NAME:MAYANRUIN",
    "name": "Mayan Temple Large"
  },
  "CAMEX05": {
    "displayName": "玛雅遗迹",
    "sectionType": "Building",
    "uiName": "NAME:MAYANRUIN",
    "name": "Mayan Platform"
  },
  "CACHIG06": {
    "displayName": "水塔",
    "sectionType": "Building",
    "uiName": "NAME:CAWT01C",
    "name": "Chicago Water Tower"
  },
  "CATOKY": {
    "displayName": "东京塔",
    "sectionType": "Building",
    "uiName": "NAME:CATOKY",
    "name": "Tokyo Tower"
  },
  "CACITY05": {
    "displayName": "巴特西发电站",
    "sectionType": "Building",
    "uiName": "NAME:BATTERSEA",
    "name": "Battersea Power Plant"
  },
  "CANEWY01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY A"
  },
  "CANEWY04": {
    "displayName": "自由女神像",
    "sectionType": "Building",
    "uiName": "NAME:CANEWY04",
    "name": "Statue of Liberty"
  },
  "BANK": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Two Stars Apartments"
  },
  "CASWST01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Clock Orange"
  },
  "CATEXS01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Texas High"
  },
  "CAWASH05": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington B"
  },
  "CAWASH06": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington C"
  },
  "CAWASH04": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington D"
  },
  "CAWASH03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington E"
  },
  "CAWASH07": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington F"
  },
  "CAWASH11": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington G"
  },
  "CAWASH08": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington H"
  },
  "CAWASH09": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington I"
  },
  "CAWASH10": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington J"
  },
  "CAWASH13": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Washington K"
  },
  "CAEUR1": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Euro Cottage A"
  },
  "CAEUR2": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Euro Cottage B"
  },
  "CAMIAM02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Hotel Miami High B"
  },
  "CAJAIL": {
    "displayName": "监狱",
    "sectionType": "Building",
    "uiName": "NAME:CAJAIL",
    "name": "Jail Building"
  },
  "CAJAPA01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Temple"
  },
  "CAJAPA02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building A"
  },
  "CAJAPA03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building B"
  },
  "CAJAPA04": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building C"
  },
  "CAJAPA05": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building D"
  },
  "CAJAPA06": {
    "displayName": "日式围墙",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA06",
    "name": "Japanese Wall"
  },
  "CAJAPA07": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building E"
  },
  "CAJAPA08": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building F"
  },
  "CAJAPA09": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building G"
  },
  "CAJAPA10": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building H"
  },
  "CAJAPA11": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CAJAPA",
    "name": "Japanese Building I"
  },
  "CANWY05": {
    "displayName": "世界贸易中心",
    "sectionType": "Building",
    "uiName": "NAME:WTC",
    "name": "World Trade Center"
  },
  "CAEUR04": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Euro Cottage Large"
  },
  "CARUS02A": {
    "displayName": "Kremlin Wall Large Tower",
    "sectionType": "Building",
    "name": "Kremlin Wall Large Tower"
  },
  "CARUS02B": {
    "displayName": "Kremlin Wall Small Tower",
    "sectionType": "Building",
    "name": "Kremlin Wall Small Tower"
  },
  "CARUS02C": {
    "displayName": "Kremlin Wall North",
    "sectionType": "Building",
    "name": "Kremlin Wall North"
  },
  "CARUS02D": {
    "displayName": "Kremlin Wall East",
    "sectionType": "Building",
    "name": "Kremlin Wall East"
  },
  "CARUS02E": {
    "displayName": "Kremlin Wall South",
    "sectionType": "Building",
    "name": "Kremlin Wall South"
  },
  "CARUS02F": {
    "displayName": "Kremlin Wall West",
    "sectionType": "Building",
    "name": "Kremlin Wall West"
  },
  "CARUS02G": {
    "displayName": "Kremlin Wall Clock Tower",
    "sectionType": "Building",
    "name": "Kremlin Wall Clock Tower"
  },
  "CARUS02H": {
    "displayName": "Kremlin Wall Corner",
    "sectionType": "Building",
    "name": "Kremlin Wall Corner"
  },
  "CANEWY06": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Wall Street Office A"
  },
  "CANEWY07": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Wall Street Office B"
  },
  "CANEWY08": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Wall Street Office C"
  },
  "CAPARS02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Cathedral Paris Black"
  },
  "CAPARS08": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Cathedral Paris Red"
  },
  "CAPARS09": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Paris Large"
  },
  "CANEWY10": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY B"
  },
  "CANEWY11": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY C"
  },
  "CANEWY12": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY D"
  },
  "CANEWY13": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY E"
  },
  "CANEWY14": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY F"
  },
  "CANEWY15": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY G"
  },
  "CANEWY16": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY H"
  },
  "CANEWY17": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY I"
  },
  "CANEWY18": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY J"
  },
  "CAPARS04": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Paris A"
  },
  "CAPARS05": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Paris B"
  },
  "CAPARS06": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Paris C"
  },
  "CAPARS07": {
    "displayName": "电话亭",
    "sectionType": "Building",
    "uiName": "NAME:CAPRS07",
    "name": "Phone Booth"
  },
  "CAPARS10": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Bistro Paris A"
  },
  "CAPARS13": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Bistro Paris B"
  },
  "CAPARS14": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Bistro Paris C"
  },
  "CAGAS01": {
    "displayName": "加油站",
    "sectionType": "Building",
    "uiName": "NAME:CAGAS01",
    "name": "Gas Station"
  },
  "CAGAS02": {
    "displayName": "加油机",
    "sectionType": "Building",
    "uiName": "NAME:CAGAS02",
    "name": "Fuel Dispenser"
  },
  "CAGAS03": {
    "displayName": "加油站标志",
    "sectionType": "Building",
    "uiName": "NAME:CAGAS03",
    "name": "Gas Station Sign"
  },
  "CAFARM06": {
    "displayName": "灯塔",
    "sectionType": "Building",
    "uiName": "NAME:CAFARM06F",
    "name": "Lighthouse Large"
  },
  "CAMIAM04": {
    "displayName": "救生员休息亭",
    "sectionType": "Building",
    "uiName": "NAME:CAMIAM04",
    "name": "Lifeguard"
  },
  "CAIND01": {
    "displayName": "工厂",
    "sectionType": "Building",
    "uiName": "NAME:CAIND01X",
    "name": "Factory Large"
  },
  "CANWY09": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY K"
  },
  "CANWY22": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY L"
  },
  "CANWY23": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY M"
  },
  "CANWY24": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY N"
  },
  "CANWY25": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY O"
  },
  "CANWY26": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building NY P"
  },
  "CATEXS03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Texas A"
  },
  "CATEXS04": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Texas B"
  },
  "CATEXS05": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Texas C"
  },
  "CACHIG04": {
    "displayName": "芝加哥协会大楼",
    "sectionType": "Building",
    "uiName": "NAME:CACHIG04",
    "name": "Chicago Associates Center"
  },
  "CAMIAM03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Hotel Miami High C"
  },
  "CAMIAM01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Hotel Miami High A"
  },
  "CATEXS06": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Office Texas A"
  },
  "CATEXS07": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Office Texas B"
  },
  "CATEXS08": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Office Texas C"
  },
  "CATEXS08B": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Office Texas D"
  },
  "CATEXS09": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Office Texas E"
  },
  "CACHIG01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Brick A"
  },
  "CACHIG02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Brick B"
  },
  "CACHIG03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Office Chicago"
  },
  "CARUS08": {
    "displayName": "GUM Corner",
    "sectionType": "Building",
    "name": "GUM Corner"
  },
  "CARUS09": {
    "displayName": "GUM Middle",
    "sectionType": "Building",
    "name": "GUM Middle"
  },
  "CARUS10": {
    "displayName": "GUM Wall NS",
    "sectionType": "Building",
    "name": "GUM Wall NS"
  },
  "CARUS11": {
    "displayName": "GUM Wall EW",
    "sectionType": "Building",
    "name": "GUM Wall EW"
  },
  "CANEWY20": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CANEWY20X",
    "name": "Warehouse A"
  },
  "CANEWY21": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CANEWY20X",
    "name": "Warehouse B"
  },
  "CACARG1": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Allied Right"
  },
  "CACARG2": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Allied Left"
  },
  "CASCRG01": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Soviet Right"
  },
  "CASCRG02": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Soviet Left"
  },
  "CAYCRG01": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Epsilon Right"
  },
  "CAYCRG02": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Epsilon Left"
  },
  "CAFCRG01": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Foehn Right"
  },
  "CAFCRG02": {
    "displayName": "集装箱",
    "sectionType": "Building",
    "uiName": "NAME:CACARG01",
    "name": "Container Foehn Left"
  },
  "CAFSUP01": {
    "displayName": "补给",
    "sectionType": "Building",
    "uiName": "NAME:SUPPLIES",
    "name": "Supplies Foehn A"
  },
  "CAFSUP02": {
    "displayName": "补给",
    "sectionType": "Building",
    "uiName": "NAME:SUPPLIES",
    "name": "Supplies Foehn B"
  },
  "CAFSUP03": {
    "displayName": "补给",
    "sectionType": "Building",
    "uiName": "NAME:SUPPLIES",
    "name": "Supplies Foehn C"
  },
  "CAFSUP04": {
    "displayName": "补给",
    "sectionType": "Building",
    "uiName": "NAME:SUPPLIES",
    "name": "Supplies Foehn D"
  },
  "CAFBRL01": {
    "displayName": "滚筒",
    "sectionType": "Building",
    "uiName": "NAME:CAFBRL",
    "name": "Drum Foehn A"
  },
  "CAFBRL02": {
    "displayName": "滚筒",
    "sectionType": "Building",
    "uiName": "NAME:CAFBRL",
    "name": "Drum Foehn B"
  },
  "CAFBRL03": {
    "displayName": "滚筒",
    "sectionType": "Building",
    "uiName": "NAME:CAFBRL",
    "name": "Drum Foehn C"
  },
  "CANCON01": {
    "displayName": "纳米纤维贮藏仓",
    "sectionType": "Building",
    "uiName": "NAME:CANCON",
    "name": "Nanocontainer A"
  },
  "CANCON02": {
    "displayName": "纳米纤维贮藏仓",
    "sectionType": "Building",
    "uiName": "NAME:CANCON",
    "name": "Nanocontainer B"
  },
  "CANCON03": {
    "displayName": "纳米纤维贮藏仓",
    "sectionType": "Building",
    "uiName": "NAME:CANCON",
    "name": "Nanocontainer C"
  },
  "CANTHR01": {
    "displayName": "纳米织线",
    "sectionType": "Building",
    "uiName": "NAME:CANTHR",
    "name": "Nanothreads A"
  },
  "CANTHR02": {
    "displayName": "纳米织线",
    "sectionType": "Building",
    "uiName": "NAME:CANTHR",
    "name": "Nanothreads B"
  },
  "CAFWAT": {
    "displayName": "水塔",
    "sectionType": "Building",
    "uiName": "NAME:CAWT",
    "name": "Water Tower Foehn"
  },
  "CAFSIL": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank Foehn"
  },
  "CAGLOB": {
    "displayName": "投影地球仪",
    "sectionType": "Building",
    "uiName": "NAME:CAGLOB",
    "name": "Hologlobe"
  },
  "CAVENT": {
    "displayName": "排气扇",
    "sectionType": "Building",
    "uiName": "NAME:CAVENT",
    "name": "Ventilator"
  },
  "CATRBN01": {
    "displayName": "风力涡轮",
    "sectionType": "Building",
    "uiName": "NAME:CATRBN",
    "name": "Wind Turbine A"
  },
  "CATRBN02": {
    "displayName": "风力涡轮",
    "sectionType": "Building",
    "uiName": "NAME:CATRBN",
    "name": "Wind Turbine B"
  },
  "CATRBN03": {
    "displayName": "风力涡轮",
    "sectionType": "Building",
    "uiName": "NAME:CATRBN",
    "name": "Wind Turbine C"
  },
  "FATURB": {
    "displayName": "纳米塑形器",
    "sectionType": "Building",
    "uiName": "NAME:FATURB",
    "name": "Transformer"
  },
  "FARWALA": {
    "displayName": "Reinforced Wall Corner",
    "sectionType": "Building",
    "name": "Reinforced Wall Corner"
  },
  "FARWALB": {
    "displayName": "Reinforced Wall NS",
    "sectionType": "Building",
    "name": "Reinforced Wall NS"
  },
  "FARWALC": {
    "displayName": "Reinforced Wall EW",
    "sectionType": "Building",
    "name": "Reinforced Wall EW"
  },
  "CACOOL01": {
    "displayName": "低温冷冻液",
    "sectionType": "Building",
    "uiName": "NAME:CACOOL",
    "name": "Cryocoolant A"
  },
  "CACOOL02": {
    "displayName": "低温冷冻液",
    "sectionType": "Building",
    "uiName": "NAME:CACOOL",
    "name": "Cryocoolant B"
  },
  "CACOOL03": {
    "displayName": "低温冷冻液",
    "sectionType": "Building",
    "uiName": "NAME:CACOOL",
    "name": "Cryocoolant C"
  },
  "CACOOL04": {
    "displayName": "低温冷冻液",
    "sectionType": "Building",
    "uiName": "NAME:CACOOL",
    "name": "Cryocoolant D"
  },
  "CACRTK01": {
    "displayName": "冷冻液贮藏罐",
    "sectionType": "Building",
    "uiName": "NAME:CACRTK",
    "name": "Cryo Tank A"
  },
  "CACRTK02": {
    "displayName": "冷冻液贮藏罐",
    "sectionType": "Building",
    "uiName": "NAME:CACRTK",
    "name": "Cryo Tank B"
  },
  "CACRTK03": {
    "displayName": "冷冻液贮藏罐",
    "sectionType": "Building",
    "uiName": "NAME:CACRTK",
    "name": "Cryo Tank C"
  },
  "CATCSK01": {
    "displayName": "大地新星贮藏桶",
    "sectionType": "Building",
    "uiName": "NAME:CATCSK",
    "name": "Terranova Casks A"
  },
  "CATCSK02": {
    "displayName": "大地新星贮藏桶",
    "sectionType": "Building",
    "uiName": "NAME:CATCSK",
    "name": "Terranova Casks B"
  },
  "CATCSK03": {
    "displayName": "大地新星贮藏桶",
    "sectionType": "Building",
    "uiName": "NAME:CATCSK",
    "name": "Terranova Casks C"
  },
  "CASTAIR01": {
    "displayName": "楼梯间",
    "sectionType": "Building",
    "uiName": "NAME:CASTAIR",
    "name": "Staircase East"
  },
  "CASTAIR02": {
    "displayName": "楼梯间",
    "sectionType": "Building",
    "uiName": "NAME:CASTAIR",
    "name": "Staircase West"
  },
  "CASTAIR03": {
    "displayName": "楼梯间",
    "sectionType": "Building",
    "uiName": "NAME:CASTAIR",
    "name": "Staircase North"
  },
  "CASTAIR04": {
    "displayName": "楼梯间",
    "sectionType": "Building",
    "uiName": "NAME:CASTAIR",
    "name": "Staircase South"
  },
  "CAWARE": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CANEWY20X",
    "name": "Warehouse Blue"
  },
  "CAWARE2": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CADWAR",
    "name": "Warehouse Tall"
  },
  "CADWAR": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CADWAR",
    "name": "Warehouse Long A"
  },
  "CADWARB": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CADWAR",
    "name": "Warehouse Long B"
  },
  "CAJUNK": {
    "displayName": "垃圾场",
    "sectionType": "Building",
    "uiName": "NAME:CAJUNK",
    "name": "Junkyard"
  },
  "CAFACC": {
    "displayName": "老旧工厂",
    "sectionType": "Building",
    "uiName": "NAME:CAFACC",
    "name": "Factory Old"
  },
  "CAFCTR": {
    "displayName": "工厂",
    "sectionType": "Building",
    "uiName": "NAME:CAFCTR",
    "name": "Factory Small"
  },
  "CAGARG": {
    "displayName": "车库",
    "sectionType": "Building",
    "uiName": "NAME:CAGARG",
    "name": "Garage Brown"
  },
  "CAGARB": {
    "displayName": "车库",
    "sectionType": "Building",
    "uiName": "NAME:CAGARG",
    "name": "Garage Grey"
  },
  "CAHANG": {
    "displayName": "机库",
    "sectionType": "Building",
    "uiName": "NAME:CAHANG",
    "name": "Hangar Large"
  },
  "CAHALL": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Cover Building"
  },
  "CAHALL02": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAHALL02",
    "name": "Magazine Grey"
  },
  "CAHALL02N": {
    "displayName": "苏联仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAHALL02N",
    "name": "Magazine Soviet"
  },
  "CAWARS": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAWARS",
    "name": "Storehouse Blue"
  },
  "CAWHSE": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAWARS",
    "name": "Storehouse Red"
  },
  "CACRAN01": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CACRAN",
    "name": "Port Crane A"
  },
  "CACRAN02": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CACRAN",
    "name": "Port Crane B"
  },
  "CACRAN03": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CACRAN",
    "name": "Port Crane C"
  },
  "CACRAN04": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CACRAN",
    "name": "Port Crane D"
  },
  "CABCRN01": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CABCRN",
    "name": "Port Crane Large A"
  },
  "CABCRN02": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CABCRN",
    "name": "Port Crane Large B"
  },
  "CABCRN03": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CABCRN",
    "name": "Port Crane Large C"
  },
  "CABCRN04": {
    "displayName": "港口起重机",
    "sectionType": "Building",
    "uiName": "NAME:CABCRN",
    "name": "Port Crane Large D"
  },
  "CACABL": {
    "displayName": "电缆塔",
    "sectionType": "Building",
    "uiName": "NAME:CACABL",
    "name": "Cable Tower A"
  },
  "CACABLB": {
    "displayName": "电缆塔",
    "sectionType": "Building",
    "uiName": "NAME:CACABL",
    "name": "Cable Tower B"
  },
  "CARADI": {
    "displayName": "无线电塔",
    "sectionType": "Building",
    "uiName": "NAME:CARADI",
    "name": "Radio Tower Big A"
  },
  "CARATO": {
    "displayName": "无线电塔",
    "sectionType": "Building",
    "uiName": "NAME:CARADI",
    "name": "Radio Tower Big B"
  },
  "CANHSE01": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAWARS",
    "name": "Small Storehouse A"
  },
  "CANHSE02": {
    "displayName": "仓库",
    "sectionType": "Building",
    "uiName": "NAME:CAWARS",
    "name": "Small Storehouse B"
  },
  "CAJHUT": {
    "displayName": "竹屋",
    "sectionType": "Building",
    "uiName": "NAME:CAJHUT",
    "name": "Bamboo Hut A"
  },
  "CAJHUTB": {
    "displayName": "竹屋",
    "sectionType": "Building",
    "uiName": "NAME:CAJHUT",
    "name": "Bamboo Hut B"
  },
  "CAPIER01": {
    "displayName": "灯塔码头",
    "sectionType": "Building",
    "uiName": "NAME:CAPIER",
    "name": "Lighthouse Pier A"
  },
  "CAPIER02": {
    "displayName": "灯塔码头",
    "sectionType": "Building",
    "uiName": "NAME:CAPIER",
    "name": "Lighthouse Pier B"
  },
  "CABRKK": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:CABRKK",
    "name": "Steel Building"
  },
  "CAFUEL": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank Large"
  },
  "CAFTNK01": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank A"
  },
  "CAFTNK02": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank B"
  },
  "CAFTNK03": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank C"
  },
  "CAFTNK04": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank D"
  },
  "CAFTNK05": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank E"
  },
  "CAFTNK06": {
    "displayName": "燃料罐",
    "sectionType": "Building",
    "uiName": "NAME:CAFUEL",
    "name": "Fuel Tank F"
  },
  "CAOILR": {
    "displayName": "石油精炼厂",
    "sectionType": "Building",
    "uiName": "NAME:CAOILR",
    "name": "Oil Refinery"
  },
  "CAOILS": {
    "displayName": "油罐",
    "sectionType": "Building",
    "uiName": "NAME:CAOILS",
    "name": "Oil Silo"
  },
  "CARUS04": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Moscow A"
  },
  "CARUS05": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Moscow B"
  },
  "CARUS06": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building Moscow C"
  },
  "CAMSC01": {
    "displayName": "美又美热狗摊！　",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC01",
    "name": "Mr. Yummy's Hot Dogs!"
  },
  "CAMPG": {
    "displayName": "高效燃油越野车",
    "sectionType": "Building",
    "uiName": "NAME:CAMPG",
    "name": "Field MPG"
  },
  "CAYBAN": {
    "displayName": "厄普西隆旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAYBAN",
    "name": "Yuri Banner"
  },
  "CASBAN": {
    "displayName": "天蝎组织旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CASBAN",
    "name": "Scorpion Banner"
  },
  "CAPBAN": {
    "displayName": "心灵军团旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAPBAN",
    "name": "PsiCorps Banner"
  },
  "CAHBAN": {
    "displayName": "厄普西隆总部守卫旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAHBAN",
    "name": "Epsilon HQ Banner"
  },
  "CAOWLF": {
    "displayName": "猫头鹰与朋友",
    "sectionType": "Building",
    "uiName": "NAME:CAMORR06B",
    "name": "Owl & Friends Sign"
  },
  "CAWTXS": {
    "displayName": "欢迎来到德克萨斯",
    "sectionType": "Building",
    "uiName": "NAME:CAWTXS",
    "name": "Welcome To Texas Sign"
  },
  "CABANN01": {
    "displayName": "日本旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CABANN01",
    "name": "Japanese Banner Dolphin"
  },
  "CABANN02": {
    "displayName": "日本旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CABANN01",
    "name": "Japanese Banner Sun"
  },
  "CAJARC": {
    "displayName": "鸟居",
    "sectionType": "Building",
    "uiName": "NAME:CAJARC",
    "name": "Japanese Torii"
  },
  "CAMSC02": {
    "displayName": "伞",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC02X",
    "name": "Beach Umbrellas A"
  },
  "CAMSC03": {
    "displayName": "伞",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC02X",
    "name": "Beach Umbrellas B"
  },
  "CAMSC04": {
    "displayName": "浴巾",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC04X",
    "name": "Beach Towels A"
  },
  "CAMSC05": {
    "displayName": "浴巾",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC04X",
    "name": "Beach Towels B"
  },
  "CAMSC06": {
    "displayName": "营火",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC06",
    "name": "Camp Fire"
  },
  "CAMSC07": {
    "displayName": "小屋",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC07A",
    "name": "Hut Large"
  },
  "CAMSC08": {
    "displayName": "小屋",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC07A",
    "name": "Hut Small Right"
  },
  "CAMSC09": {
    "displayName": "小屋",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC07A",
    "name": "Hut Small Left"
  },
  "CAEURO05": {
    "displayName": "牧师雕像",
    "sectionType": "Building",
    "uiName": "NAME:CAEURO05X",
    "name": "Statue of Priest"
  },
  "CAWSIR": {
    "displayName": "华沙美人鱼",
    "sectionType": "Building",
    "uiName": "NAME:CAWSIR",
    "name": "Warsaw Mermaid"
  },
  "CASTAT04": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue of Founder"
  },
  "CASTAT05": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue of Knight"
  },
  "CASTAT06": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue of Soldier"
  },
  "CASTAT07": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue of Pioneer"
  },
  "CASTAT08": {
    "displayName": "雕塑",
    "sectionType": "Building",
    "uiName": "NAME:CASTAT01",
    "name": "Statue of Deity"
  },
  "CALUNR01": {
    "displayName": "登月小艇",
    "sectionType": "Building",
    "uiName": "NAME:CALUNR01",
    "name": "Lunar Lander"
  },
  "CALUNR02": {
    "displayName": "美国旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CALUNR02",
    "name": "Small US Flag"
  },
  "CABRTB01": {
    "displayName": "吧台",
    "sectionType": "Building",
    "uiName": "NAME:CABRTB",
    "name": "Bar Table A"
  },
  "CABRTB02": {
    "displayName": "吧台",
    "sectionType": "Building",
    "uiName": "NAME:CABRTB",
    "name": "Bar Table B"
  },
  "CABRTB03": {
    "displayName": "吧台",
    "sectionType": "Building",
    "uiName": "NAME:CABRTB",
    "name": "Bar Table C"
  },
  "CABRTB04": {
    "displayName": "吧台",
    "sectionType": "Building",
    "uiName": "NAME:CABRTB",
    "name": "Bar Table D"
  },
  "CABRTB05": {
    "displayName": "吧台",
    "sectionType": "Building",
    "uiName": "NAME:CABRTB",
    "name": "Bar Table E"
  },
  "CABRTB06": {
    "displayName": "吧台",
    "sectionType": "Building",
    "uiName": "NAME:CABRTB",
    "name": "Bar Table F"
  },
  "CABRTB07": {
    "displayName": "吧台",
    "sectionType": "Building",
    "uiName": "NAME:CABRTB",
    "name": "Bar Table G"
  },
  "CAPICN01": {
    "displayName": "野餐桌",
    "sectionType": "Building",
    "uiName": "NAME:CAPICN01X",
    "name": "Picnic Table A"
  },
  "CAPICN02": {
    "displayName": "野餐桌",
    "sectionType": "Building",
    "uiName": "NAME:CAPICN01X",
    "name": "Picnic Table B"
  },
  "CAPICN03": {
    "displayName": "野餐桌",
    "sectionType": "Building",
    "uiName": "NAME:CAPICN01X",
    "name": "Picnic Table C"
  },
  "CAPICN04": {
    "displayName": "野餐桌",
    "sectionType": "Building",
    "uiName": "NAME:CAPICN01X",
    "name": "Picnic Table D"
  },
  "CAPARK02": {
    "displayName": "秋千",
    "sectionType": "Building",
    "uiName": "NAME:CAPARK02",
    "name": "Swing Set"
  },
  "CAPARK03": {
    "displayName": "旋转盘",
    "sectionType": "Building",
    "uiName": "NAME:CAPARK03",
    "name": "Merry-Go-Round"
  },
  "CAPARK01": {
    "displayName": "长椅",
    "sectionType": "Building",
    "uiName": "NAME:CAPARKB",
    "name": "Park Bench South"
  },
  "CAPARK04": {
    "displayName": "长椅",
    "sectionType": "Building",
    "uiName": "NAME:CAPARKB",
    "name": "Park Bench North"
  },
  "CAPARK05": {
    "displayName": "长椅",
    "sectionType": "Building",
    "uiName": "NAME:CAPARKB",
    "name": "Park Bench West"
  },
  "CAPARK06": {
    "displayName": "长椅",
    "sectionType": "Building",
    "uiName": "NAME:CAPARKB",
    "name": "Park Bench East"
  },
  "FEYRIS": {
    "displayName": "摩天轮",
    "sectionType": "Building",
    "uiName": "NAME:FEYRIS",
    "name": "Ferris Wheel"
  },
  "CAHSE02": {
    "displayName": "房子",
    "sectionType": "Building",
    "uiName": "NAME:CAHSE",
    "name": "House American B"
  },
  "CAHSE03": {
    "displayName": "房子",
    "sectionType": "Building",
    "uiName": "NAME:CAHSE",
    "name": "House American C"
  },
  "CAHSE04": {
    "displayName": "房子",
    "sectionType": "Building",
    "uiName": "NAME:CAHSE",
    "name": "House American D"
  },
  "CASTL01": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building St Louis A"
  },
  "CASTL02": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building St Louis B"
  },
  "CASTL03": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Building St Louis C"
  },
  "CAHSE05": {
    "displayName": "活动住房",
    "sectionType": "Building",
    "uiName": "NAME:CAMHME",
    "name": "Mobile Home A"
  },
  "CAHSE06": {
    "displayName": "活动住房",
    "sectionType": "Building",
    "uiName": "NAME:CAMHME",
    "name": "Mobile Home B"
  },
  "CAHSE07": {
    "displayName": "房子",
    "sectionType": "Building",
    "uiName": "NAME:CAHSE",
    "name": "House American E"
  },
  "CAMIAM05": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Hotel Miami Low A"
  },
  "CAMIAM06": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Hotel Miami Low B"
  },
  "CAMIAM07": {
    "displayName": "建筑物",
    "sectionType": "Building",
    "uiName": "NAME:BUILDING",
    "name": "Hotel Miami Low C"
  },
  "CASTRT01": {
    "displayName": "Traffic Light A",
    "sectionType": "Building",
    "name": "Traffic Light A"
  },
  "CASTRT02": {
    "displayName": "Traffic Light B",
    "sectionType": "Building",
    "name": "Traffic Light B"
  },
  "CASTRT03": {
    "displayName": "Traffic Light C",
    "sectionType": "Building",
    "name": "Traffic Light C"
  },
  "CASTRT04": {
    "displayName": "Traffic Light D",
    "sectionType": "Building",
    "name": "Traffic Light D"
  },
  "CASTRT05": {
    "displayName": "公交站",
    "sectionType": "Building",
    "uiName": "NAME:CABSTOP",
    "name": "Bus Stop Wood"
  },
  "CABUS01": {
    "displayName": "公交站",
    "sectionType": "Building",
    "uiName": "NAME:CABSTOP",
    "name": "Bus Stop Steel A"
  },
  "CABUS02": {
    "displayName": "公交站",
    "sectionType": "Building",
    "uiName": "NAME:CABSTOP",
    "name": "Bus Stop Steel B"
  },
  "CADFLY": {
    "displayName": "蜻蜓雕像",
    "sectionType": "Building",
    "uiName": "NAME:CADFLY",
    "name": "Statue of Dragonfly"
  },
  "CAARMY01": {
    "displayName": "军队营帐",
    "sectionType": "Building",
    "uiName": "NAME:CAARMY01A",
    "name": "Army Tent Large"
  },
  "CAARMY02": {
    "displayName": "军队营帐",
    "sectionType": "Building",
    "uiName": "NAME:CAARMY01B",
    "name": "Army Tent A"
  },
  "CAARMY03": {
    "displayName": "军队营帐",
    "sectionType": "Building",
    "uiName": "NAME:CAARMY01B",
    "name": "Army Tent B"
  },
  "CAARMY04": {
    "displayName": "军队营帐",
    "sectionType": "Building",
    "uiName": "NAME:CAARMY01B",
    "name": "Army Tent C"
  },
  "CATENT02": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CATENT01",
    "name": "Tent Tech A"
  },
  "CATENT03": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CATENT01",
    "name": "Tent Tech B"
  },
  "CATENT04": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CATENT01",
    "name": "Tent Tech Large A"
  },
  "CATENT05": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CATENT01",
    "name": "Tent Tech Medium A"
  },
  "CATENT06": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CATENT01",
    "name": "Tent Tech Medium B"
  },
  "CATENT07": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CATENT01",
    "name": "Tent Tech Large B"
  },
  "CAINDU01": {
    "displayName": "工厂废墟",
    "sectionType": "Building",
    "uiName": "NAME:CAINDU01",
    "name": "Industrial Ruin A"
  },
  "CAINDU02": {
    "displayName": "工厂废墟",
    "sectionType": "Building",
    "uiName": "NAME:CAINDU01",
    "name": "Industrial Ruin B"
  },
  "CAINDU03": {
    "displayName": "工厂废墟",
    "sectionType": "Building",
    "uiName": "NAME:CAINDU01",
    "name": "Industrial Ruin C"
  },
  "CAINDU04": {
    "displayName": "工厂废墟",
    "sectionType": "Building",
    "uiName": "NAME:CAINDU01",
    "name": "Industrial Ruin D"
  },
  "CAINDU05": {
    "displayName": "工厂废墟",
    "sectionType": "Building",
    "uiName": "NAME:CAINDU01",
    "name": "Industrial Ruin E"
  },
  "CAINDU06": {
    "displayName": "工厂废墟",
    "sectionType": "Building",
    "uiName": "NAME:CAINDU01",
    "name": "Industrial Ruin F"
  },
  "CAINDU07": {
    "displayName": "工厂废墟",
    "sectionType": "Building",
    "uiName": "NAME:CAINDU01",
    "name": "Industrial Ruin G"
  },
  "CAHELI": {
    "displayName": "直升机坪",
    "sectionType": "Building",
    "uiName": "NAME:CAHELI",
    "name": "Helipad A"
  },
  "CAHELP": {
    "displayName": "直升机坪",
    "sectionType": "Building",
    "uiName": "NAME:CAHELI",
    "name": "Helipad B"
  },
  "CAGARD": {
    "displayName": "守卫塔",
    "sectionType": "Building",
    "uiName": "NAME:CAGARD",
    "name": "Guard Tower"
  },
  "CAGARD01": {
    "displayName": "警戒哨",
    "sectionType": "Building",
    "uiName": "NAME:CAGARD01A",
    "name": "Guard Shack Soviet"
  },
  "CAGARD03": {
    "displayName": "警戒哨",
    "sectionType": "Building",
    "uiName": "NAME:CAGARD01A",
    "name": "Guard Shack Allied"
  },
  "CAGARD02": {
    "displayName": "警戒哨",
    "sectionType": "Building",
    "uiName": "NAME:CAGARD01A",
    "name": "Guard Shack"
  },
  "CAFARM01": {
    "displayName": "农庄",
    "sectionType": "Building",
    "uiName": "NAME:CAFARM01",
    "name": "Farm"
  },
  "CAFARM02": {
    "displayName": "农庄贮槽",
    "sectionType": "Building",
    "uiName": "NAME:CAFARM02",
    "name": "Farm Silo"
  },
  "CAFRMA": {
    "displayName": "农舍",
    "sectionType": "Building",
    "uiName": "NAME:CAFRMA",
    "name": "Farm House"
  },
  "CAFRMB": {
    "displayName": "移动式厕所",
    "sectionType": "Building",
    "uiName": "NAME:CAFRMB",
    "name": "Outhouse"
  },
  "CALIT01E": {
    "displayName": "照明设施",
    "sectionType": "Building",
    "uiName": "NAME:CALIT01E",
    "name": "Light E"
  },
  "CALIT01N": {
    "displayName": "照明设施",
    "sectionType": "Building",
    "uiName": "NAME:CALIT01N",
    "name": "Light N"
  },
  "CALIT01S": {
    "displayName": "照明设施",
    "sectionType": "Building",
    "uiName": "NAME:CALIT01S",
    "name": "Light S"
  },
  "CALIT01W": {
    "displayName": "照明设施",
    "sectionType": "Building",
    "uiName": "NAME:CALIT01W",
    "name": "Light W"
  },
  "CALIT03E": {
    "displayName": "光照",
    "sectionType": "Building",
    "uiName": "NAME:CALIT03",
    "name": "Light 3 E"
  },
  "CALIT03N": {
    "displayName": "光照",
    "sectionType": "Building",
    "uiName": "NAME:CALIT03",
    "name": "Light 3 N"
  },
  "CALIT03S": {
    "displayName": "光照",
    "sectionType": "Building",
    "uiName": "NAME:CALIT03",
    "name": "Light 3 S"
  },
  "CALIT03W": {
    "displayName": "光照",
    "sectionType": "Building",
    "uiName": "NAME:CALIT03",
    "name": "Light 3 W"
  },
  "CALIT02L": {
    "displayName": "光照",
    "sectionType": "Building",
    "uiName": "NAME:CALIT02",
    "name": "Light 2 L"
  },
  "CALIT02R": {
    "displayName": "光照",
    "sectionType": "Building",
    "uiName": "NAME:CALIT02",
    "name": "Light 2 R"
  },
  "CARPUB": {
    "displayName": "邓奇的酒馆",
    "sectionType": "Building",
    "uiName": "NAME:CARPUB",
    "name": "Donkey's Pub"
  },
  "CAGCUG": {
    "displayName": "邓奇的车库",
    "sectionType": "Building",
    "uiName": "NAME:CAGCUG",
    "name": "Donkey's Garages"
  },
  "CAOFFC": {
    "displayName": "邓奇的办公楼",
    "sectionType": "Building",
    "uiName": "NAME:CAOFFC",
    "name": "Donkey's Offices"
  },
  "CAHSE01": {
    "displayName": "房子",
    "sectionType": "Building",
    "uiName": "NAME:CAHSE",
    "name": "House American A"
  },
  "CASCIE01": {
    "displayName": "研究模块",
    "sectionType": "Building",
    "uiName": "NAME:CASCIE01",
    "name": "Research Module A"
  },
  "CASCIE02": {
    "displayName": "研究模块",
    "sectionType": "Building",
    "uiName": "NAME:CASCIE01",
    "name": "Research Module B"
  },
  "CASCIE03": {
    "displayName": "研究模块",
    "sectionType": "Building",
    "uiName": "NAME:CASCIE01",
    "name": "Research Module C"
  },
  "CASCIE05": {
    "displayName": "研究模块",
    "sectionType": "Building",
    "uiName": "NAME:CASCIE01",
    "name": "Research Module D"
  },
  "CASCIE04": {
    "displayName": "研究模块",
    "sectionType": "Building",
    "uiName": "NAME:CASCIE01",
    "name": "Research Module Small"
  },
  "CAWT01": {
    "displayName": "水塔",
    "sectionType": "Building",
    "uiName": "NAME:CAWT",
    "name": "Water Tower Orange"
  },
  "CAJWAT": {
    "displayName": "水塔",
    "sectionType": "Building",
    "uiName": "NAME:CAWT",
    "name": "Water Tower Old"
  },
  "CAWATR": {
    "displayName": "水塔",
    "sectionType": "Building",
    "uiName": "NAME:CAWT",
    "name": "Water Tower Steel"
  },
  "CABUBL": {
    "displayName": "水槽",
    "sectionType": "Building",
    "uiName": "NAME:CABUBL",
    "name": "Water Silo"
  },
  "CATS01": {
    "displayName": "谷仓",
    "sectionType": "Building",
    "uiName": "NAME:CATS01",
    "name": "Grain Silo"
  },
  "CABARN02": {
    "displayName": "谷仓",
    "sectionType": "Building",
    "uiName": "NAME:CABARN02",
    "name": "Barn"
  },
  "CACAPP": {
    "displayName": "矿石贮存井",
    "sectionType": "Building",
    "uiName": "NAME:CACAPP",
    "name": "Ore Silo"
  },
  "CAWELL01": {
    "displayName": "井",
    "sectionType": "Building",
    "uiName": "NAME:CAWELL",
    "name": "Well A"
  },
  "CAWELL02": {
    "displayName": "井",
    "sectionType": "Building",
    "uiName": "NAME:CAWELL",
    "name": "Well B"
  },
  "CAMISC03": {
    "displayName": "子母垃圾车",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC03",
    "name": "Dumpster"
  },
  "CAABOX": {
    "displayName": "箱子",
    "sectionType": "Building",
    "uiName": "NAME:CAABOX",
    "name": "Steel Box"
  },
  "CAMISC04": {
    "displayName": "邮筒",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC04",
    "name": "Mail Box"
  },
  "CACTNT": {
    "displayName": "工人营帐",
    "sectionType": "Building",
    "uiName": "NAME:CACTNT",
    "name": "Worker Tent"
  },
  "CAMISC05": {
    "displayName": "管道",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC05X",
    "name": "Pipes A"
  },
  "CAMISC05B": {
    "displayName": "管道",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC05X",
    "name": "Pipes B"
  },
  "CATPIP": {
    "displayName": "传输管道",
    "sectionType": "Building",
    "uiName": "NAME:CATPIP",
    "name": "Transmitter Pipe"
  },
  "CAPIPE": {
    "displayName": "混凝土管道",
    "sectionType": "Building",
    "uiName": "NAME:CAPIPE",
    "name": "Concrete Pipes"
  },
  "CAOILP": {
    "displayName": "油管",
    "sectionType": "Building",
    "uiName": "NAME:CAOPIP",
    "name": "Oil Pipe Large"
  },
  "CAPHUT2": {
    "displayName": "海滩小屋",
    "sectionType": "Building",
    "uiName": "NAME:CAPHUT",
    "name": "Beach House A"
  },
  "CAPHUT3": {
    "displayName": "海滩小屋",
    "sectionType": "Building",
    "uiName": "NAME:CAPHUT",
    "name": "Beach House B"
  },
  "CAPHUT4": {
    "displayName": "海滩小屋",
    "sectionType": "Building",
    "uiName": "NAME:CAPHUT",
    "name": "Beach House C"
  },
  "CASHUT": {
    "displayName": "贮存室",
    "sectionType": "Building",
    "uiName": "NAME:CASHUT",
    "name": "Storeroom"
  },
  "CACHUT": {
    "displayName": "检查点",
    "sectionType": "Building",
    "uiName": "NAME:CACHUT",
    "name": "Checkpoint"
  },
  "CAPHUT": {
    "displayName": "海滩小屋",
    "sectionType": "Building",
    "uiName": "NAME:CAPHUT",
    "name": "Beach House Large"
  },
  "CASLUMA": {
    "displayName": "贫民窟",
    "sectionType": "Building",
    "uiName": "NAME:CASLUM",
    "name": "Slums A"
  },
  "CASLUMB": {
    "displayName": "贫民窟",
    "sectionType": "Building",
    "uiName": "NAME:CASLUM",
    "name": "Slums B"
  },
  "CASLUMC": {
    "displayName": "贫民窟",
    "sectionType": "Building",
    "uiName": "NAME:CASLUM",
    "name": "Slums C"
  },
  "CASLUMD": {
    "displayName": "贫民窟",
    "sectionType": "Building",
    "uiName": "NAME:CASLUM",
    "name": "Slums D"
  },
  "CASLUME": {
    "displayName": "贫民窟",
    "sectionType": "Building",
    "uiName": "NAME:CASLUM",
    "name": "Slums E"
  },
  "CAETNT01": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CAETNT",
    "name": "Tents A"
  },
  "CAETNT02": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CAETNT",
    "name": "Tents B"
  },
  "CAETNT03": {
    "displayName": "帐篷",
    "sectionType": "Building",
    "uiName": "NAME:CAETNT",
    "name": "Tents C"
  },
  "CABUBB": {
    "displayName": "水箱",
    "sectionType": "Building",
    "uiName": "NAME:CABUBB",
    "name": "Water Barrels A"
  },
  "CABUBB02": {
    "displayName": "水箱",
    "sectionType": "Building",
    "uiName": "NAME:CABUBB",
    "name": "Water Barrels B"
  },
  "CAWOODS": {
    "displayName": "木板",
    "sectionType": "Building",
    "uiName": "NAME:CAWOOD",
    "name": "Wooden Boards A"
  },
  "CAWOODB": {
    "displayName": "木板",
    "sectionType": "Building",
    "uiName": "NAME:CAWOOD",
    "name": "Wooden Boards B"
  },
  "CAWOODC": {
    "displayName": "木板",
    "sectionType": "Building",
    "uiName": "NAME:CAWOOD",
    "name": "Wooden Boards C"
  },
  "CAWOODD": {
    "displayName": "木板",
    "sectionType": "Building",
    "uiName": "NAME:CAWOOD",
    "name": "Wooden Boards D"
  },
  "CARODS01": {
    "displayName": "钢管",
    "sectionType": "Building",
    "uiName": "NAME:CARODS01",
    "name": "Rods A"
  },
  "CARODS02": {
    "displayName": "钢管",
    "sectionType": "Building",
    "uiName": "NAME:CARODS01",
    "name": "Rods B"
  },
  "CALGHT01": {
    "displayName": "工作灯",
    "sectionType": "Building",
    "uiName": "NAME:CALGHT01",
    "name": "Worklight"
  },
  "CACMNT": {
    "displayName": "无线电塔",
    "sectionType": "Building",
    "uiName": "NAME:CACMNT",
    "name": "Radio Tower Small"
  },
  "CARAD": {
    "displayName": "无线电塔",
    "sectionType": "Building",
    "uiName": "NAME:CACMNT",
    "name": "Radio Tower Medium"
  },
  "CARDIO": {
    "displayName": "无线电塔",
    "sectionType": "Building",
    "uiName": "NAME:CACMNT",
    "name": "Radio Tower Large"
  },
  "CAAFLG": {
    "displayName": "盟军旗帜",
    "sectionType": "Building",
    "uiName": "NAME:CAAFLG",
    "name": "Small Allied Flag"
  },
  "CACNONA": {
    "displayName": "小型火炮",
    "sectionType": "Building",
    "uiName": "NAME:CACNONA",
    "name": "Small Cannon Right"
  },
  "CACNONB": {
    "displayName": "小型火炮",
    "sectionType": "Building",
    "uiName": "NAME:CACNONA",
    "name": "Small Cannon Left"
  },
  "CAMISC06": {
    "displayName": "飞毛腿导弹架",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC06X",
    "name": "Scud Ammunition"
  },
  "CAMSC10": {
    "displayName": "牛肉堡王",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC10",
    "name": "McBurger Kong"
  },
  "CAMSC11": {
    "displayName": "轮胎",
    "sectionType": "Building",
    "uiName": "NAME:CAMISC11",
    "name": "Tires"
  },
  "CABALL": {
    "displayName": "炮弹",
    "sectionType": "Building",
    "uiName": "NAME:CABALL",
    "name": "Cannon Balls"
  },
  "CAMSC12": {
    "displayName": "训练靶",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC12",
    "name": "Practice Target A"
  },
  "CAMSC12A": {
    "displayName": "训练靶",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC12",
    "name": "Practice Target B"
  },
  "MOMOV": {
    "displayName": "命令与征服广告牌",
    "sectionType": "Building",
    "uiName": "NAME:MOMOV",
    "name": "C&C Sign"
  },
  "CAMOV02": {
    "displayName": "停车场商店",
    "sectionType": "Building",
    "uiName": "NAME:CAMOV02",
    "name": "Concession Stand"
  },
  "CAMOV01": {
    "displayName": "香蕉显示屏",
    "sectionType": "Building",
    "uiName": "NAME:CAMOV01X",
    "name": "Movie Screen Banana"
  },
  "CAMOV03": {
    "displayName": "蚂蚁显示屏",
    "sectionType": "Building",
    "uiName": "NAME:CAMOV03",
    "name": "Movie Screen Ants"
  },
  "CAMOV04": {
    "displayName": "Westwood显示屏",
    "sectionType": "Building",
    "uiName": "NAME:CAMOV04",
    "name": "Movie Screen Westwood"
  },
  "CAMOV05": {
    "displayName": "苏维埃欧洲显示屏",
    "sectionType": "Building",
    "uiName": "NAME:CAMOV05",
    "name": "Movie Screen Europe"
  },
  "CAMOV06": {
    "displayName": "核试验显示屏",
    "sectionType": "Building",
    "uiName": "NAME:CAMOV06",
    "name": "Movie Screen Nuclear"
  },
  "CAMOV07": {
    "displayName": "警察追捕显示屏",
    "sectionType": "Building",
    "uiName": "NAME:CAMOV07",
    "name": "Movie Screen Police"
  },
  "CAMSC13": {
    "displayName": "废弃的猛犸坦克",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC13",
    "name": "Derelict Mammoth Tank"
  },
  "CAMSC14": {
    "displayName": "火堆",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC14",
    "name": "Stone Fire"
  },
  "CAMSC15": {
    "displayName": "火炬",
    "sectionType": "Building",
    "uiName": "NAME:CAMSC15",
    "name": "Torch Fire"
  },
  "CAFMSC01": {
    "displayName": "霓虹灯柱",
    "sectionType": "Building",
    "uiName": "NAME:CAFMSC01",
    "name": "Neon Torch A"
  },
  "CAFMSC02": {
    "displayName": "霓虹光带",
    "sectionType": "Building",
    "uiName": "NAME:CAFMSC02",
    "name": "Neon Pillar"
  },
  "CAFMSC03": {
    "displayName": "霓虹灯柱",
    "sectionType": "Building",
    "uiName": "NAME:CAFMSC01",
    "name": "Neon Torch B"
  },
  "CAFMSC04": {
    "displayName": "霓虹星尘",
    "sectionType": "Building",
    "uiName": "NAME:CAFMSC04",
    "name": "Neon Dust"
  },
  "CAFMSC05": {
    "displayName": "霓虹立方",
    "sectionType": "Building",
    "uiName": "NAME:CAFMSC05",
    "name": "Neon Cube"
  },
  "CAFMSC06": {
    "displayName": "霓虹灯柱",
    "sectionType": "Building",
    "uiName": "NAME:CAFMSC01",
    "name": "Neon Torch C"
  },
  "CAFMSC07": {
    "displayName": "霓虹灯柱",
    "sectionType": "Building",
    "uiName": "NAME:CAFMSC01",
    "name": "Neon Torch D"
  },
  "CANTOW": {
    "displayName": "霓虹灯塔",
    "sectionType": "Building",
    "uiName": "NAME:CANTOW",
    "name": "Neon Tower"
  },
  "CAWSTT01": {
    "displayName": "控制面板",
    "sectionType": "Building",
    "uiName": "NAME:CAWSTT",
    "name": "Control Panel A"
  },
  "CAWSTT02": {
    "displayName": "控制面板",
    "sectionType": "Building",
    "uiName": "NAME:CAWSTT",
    "name": "Control Panel B"
  },
  "CAWSTT03": {
    "displayName": "控制面板",
    "sectionType": "Building",
    "uiName": "NAME:CAWSTT",
    "name": "Control Panel C"
  },
  "CAREDL": {
    "displayName": "红色信号灯",
    "sectionType": "Building",
    "uiName": "NAME:CAREDL",
    "name": "Red Signal"
  },
  "CAGRNL": {
    "displayName": "绿色信号灯",
    "sectionType": "Building",
    "uiName": "NAME:CAGRNL",
    "name": "Green Signal"
  },
  "CABLUL": {
    "displayName": "蓝色信号灯",
    "sectionType": "Building",
    "uiName": "NAME:CABLUL",
    "name": "Blue Signal"
  },
  "CASHIP": {
    "displayName": "舰船残骸",
    "sectionType": "Building",
    "uiName": "NAME:CASHIP",
    "name": "Shipwreck A"
  },
  "CASHIP01": {
    "displayName": "舰船残骸",
    "sectionType": "Building",
    "uiName": "NAME:CASHIP",
    "name": "Shipwreck B"
  },
  "CASHIP02": {
    "displayName": "舰船残骸",
    "sectionType": "Building",
    "uiName": "NAME:CASHIP",
    "name": "Shipwreck C"
  },
  "CAHPIP": {
    "displayName": "U型滑板场",
    "sectionType": "Building",
    "uiName": "NAME:CAHPIP",
    "name": "Halfpipe"
  },
  "CASTOR": {
    "displayName": "贮存室",
    "sectionType": "Building",
    "uiName": "NAME:CASTOR",
    "name": "Storage"
  },
  "CASTOR02": {
    "displayName": "贮存室",
    "sectionType": "Building",
    "uiName": "NAME:CASTOR",
    "name": "Storage Large"
  },
  "CAPLAT01": {
    "displayName": "被摧毁的平台",
    "sectionType": "Building",
    "uiName": "NAME:CAPLAT01",
    "name": "Oil Platform Ruins"
  },
  "CAOPLT": {
    "displayName": "钻井平台",
    "sectionType": "Building",
    "uiName": "NAME:CAOPLT",
    "name": "Oil Platform A"
  },
  "CAOPLT2": {
    "displayName": "钻井平台",
    "sectionType": "Building",
    "uiName": "NAME:CAOPLT",
    "name": "Oil Platform B"
  },
  "CAWIND": {
    "displayName": "风车",
    "sectionType": "Building",
    "uiName": "NAME:CAWIND",
    "name": "Steel Windmill"
  },
  "CAURB01": {
    "displayName": "电话亭",
    "sectionType": "Building",
    "uiName": "NAME:CAURB01",
    "name": "Telephone Booth"
  },
  "CAURB02": {
    "displayName": "消防栓",
    "sectionType": "Building",
    "uiName": "NAME:CAURB02",
    "name": "Fire Hydrant"
  },
  "CAURB03": {
    "displayName": "聚光灯",
    "sectionType": "Building",
    "uiName": "NAME:CAURB03B",
    "name": "Spotlight A"
  },
  "CAURB03B": {
    "displayName": "聚光灯",
    "sectionType": "Building",
    "uiName": "NAME:CAURB03B",
    "name": "Spotlight B"
  },
  "CARSIN01": {
    "displayName": "Radiation Sign A",
    "sectionType": "Building",
    "name": "Radiation Sign A"
  },
  "CARSIN02": {
    "displayName": "Radiation Sign B",
    "sectionType": "Building",
    "name": "Radiation Sign B"
  },
  "CAKRMW": {
    "displayName": "围墙",
    "sectionType": "Overlay",
    "uiName": "NAME:CAKRMW",
    "name": "Kremlin Walls"
  },
  "CeasefireWeapon": {
    "displayName": "CeasefireWeapon",
    "sectionType": "Weapon"
  },
  "SpecialC4": {
    "displayName": "SpecialC4",
    "sectionType": "Weapon"
  },
  "SuperIronWeapon": {
    "displayName": "SuperIronWeapon",
    "sectionType": "Weapon"
  },
  "TrueSuperIronWeapon": {
    "displayName": "TrueSuperIronWeapon",
    "sectionType": "Weapon"
  },
  "FauxDomAttach": {
    "displayName": "FauxDomAttach",
    "sectionType": "Weapon"
  },
  "FauxDomIntro": {
    "displayName": "FauxDomIntro",
    "sectionType": "Weapon"
  },
  "FauxDomSound": {
    "displayName": "FauxDomSound",
    "sectionType": "Weapon"
  },
  "FauxDomStrike": {
    "displayName": "FauxDomStrike",
    "sectionType": "Weapon"
  },
  "SuperSuppress": {
    "displayName": "SuperSuppress",
    "sectionType": "Weapon"
  },
  "SuppressReal": {
    "displayName": "SuppressReal",
    "sectionType": "Weapon"
  },
  "SuperJammer": {
    "displayName": "SuperJammer",
    "sectionType": "Weapon"
  },
  "JammerReal": {
    "displayName": "JammerReal",
    "sectionType": "Weapon"
  },
  "SuperCryo": {
    "displayName": "SuperCryo",
    "sectionType": "Weapon"
  },
  "CryoReal": {
    "displayName": "CryoReal",
    "sectionType": "Weapon"
  },
  "GreenArrow": {
    "displayName": "GreenArrow",
    "sectionType": "Weapon"
  },
  "FakeArrow": {
    "displayName": "FakeArrow",
    "sectionType": "Weapon"
  },
  "NotAStrategyLarge": {
    "displayName": "NotAStrategyLarge",
    "sectionType": "Weapon"
  },
  "ExtendLife": {
    "displayName": "ExtendLife",
    "sectionType": "Weapon"
  },
  "WesternReporter": {
    "displayName": "WesternReporter",
    "sectionType": "Weapon"
  },
  "StructureBuffLarge": {
    "displayName": "StructureBuffLarge",
    "sectionType": "Weapon"
  },
  "GreatTempestRock": {
    "displayName": "GreatTempestRock",
    "sectionType": "Weapon"
  },
  "NavalMineBomb": {
    "displayName": "NavalMineBomb",
    "sectionType": "Weapon"
  },
  "MineBomb": {
    "displayName": "MineBomb",
    "sectionType": "Weapon"
  },
  "MineBombEMP": {
    "displayName": "MineBombEMP",
    "sectionType": "Weapon"
  },
  "CryomineBomb": {
    "displayName": "CryomineBomb",
    "sectionType": "Weapon"
  },
  "CryomineFreeze": {
    "displayName": "CryomineFreeze",
    "sectionType": "Weapon"
  },
  "GenomineBomb": {
    "displayName": "GenomineBomb",
    "sectionType": "Weapon"
  },
  "MadMineStart": {
    "displayName": "MadMineStart",
    "sectionType": "Weapon"
  },
  "MadMine": {
    "displayName": "MadMine",
    "sectionType": "Weapon"
  },
  "MadMineFrag": {
    "displayName": "MadMineFrag",
    "sectionType": "Weapon"
  },
  "MadBlastStartAI": {
    "displayName": "MadBlastStartAI",
    "sectionType": "Weapon"
  },
  "MadBlastStart": {
    "displayName": "MadBlastStart",
    "sectionType": "Weapon"
  },
  "MadBlast": {
    "displayName": "MadBlast",
    "sectionType": "Weapon"
  },
  "MadBlastFrag": {
    "displayName": "MadBlastFrag",
    "sectionType": "Weapon"
  },
  "EurekaBlast": {
    "displayName": "EurekaBlast",
    "sectionType": "Weapon"
  },
  "FVEurekaBlast": {
    "displayName": "FVEurekaBlast",
    "sectionType": "Weapon"
  },
  "EurekaBlastFrag": {
    "displayName": "EurekaBlastFrag",
    "sectionType": "Weapon"
  },
  "Megaslash": {
    "displayName": "Megaslash",
    "sectionType": "Weapon"
  },
  "MegaslashE": {
    "displayName": "MegaslashE",
    "sectionType": "Weapon"
  },
  "MegaslashWindAnim": {
    "displayName": "MegaslashWindAnim",
    "sectionType": "Weapon"
  },
  "MegaslashWindAnimE": {
    "displayName": "MegaslashWindAnimE",
    "sectionType": "Weapon"
  },
  "MegaslashDamage": {
    "displayName": "MegaslashDamage",
    "sectionType": "Weapon"
  },
  "MegaslashDamageE": {
    "displayName": "MegaslashDamageE",
    "sectionType": "Weapon"
  },
  "MegalodonDeath": {
    "displayName": "MegalodonDeath",
    "sectionType": "Weapon"
  },
  "LionheartBomb": {
    "displayName": "LionheartBomb",
    "sectionType": "Weapon"
  },
  "LionheartEMP": {
    "displayName": "LionheartEMP",
    "sectionType": "Weapon"
  },
  "StrikerGunRun": {
    "displayName": "StrikerGunRun",
    "sectionType": "Weapon"
  },
  "EvolverRun": {
    "displayName": "EvolverRun",
    "sectionType": "Weapon"
  },
  "StratoRun": {
    "displayName": "StratoRun",
    "sectionType": "Weapon"
  },
  "ShadowPower": {
    "displayName": "ShadowPower",
    "sectionType": "Weapon"
  },
  "ShadowPowerE": {
    "displayName": "ShadowPowerE",
    "sectionType": "Weapon"
  },
  "StealthScanner": {
    "displayName": "StealthScanner",
    "sectionType": "Weapon"
  },
  "PiranhaMissile": {
    "displayName": "PiranhaMissile",
    "sectionType": "Weapon"
  },
  "PiranhaMissileE": {
    "displayName": "PiranhaMissileE",
    "sectionType": "Weapon"
  },
  "Plasma": {
    "displayName": "Plasma",
    "sectionType": "Weapon"
  },
  "PlasmaE": {
    "displayName": "PlasmaE",
    "sectionType": "Weapon"
  },
  "StunGrid": {
    "displayName": "StunGrid",
    "sectionType": "Weapon"
  },
  "ConfusionField": {
    "displayName": "ConfusionField",
    "sectionType": "Weapon"
  },
  "StalkerGrenade": {
    "displayName": "StalkerGrenade",
    "sectionType": "Weapon"
  },
  "StalkerGrenadeE": {
    "displayName": "StalkerGrenadeE",
    "sectionType": "Weapon"
  },
  "DrainGrenade": {
    "displayName": "DrainGrenade",
    "sectionType": "Weapon"
  },
  "FVStalkerGrenade": {
    "displayName": "FVStalkerGrenade",
    "sectionType": "Weapon"
  },
  "FVStalkerGrenadeE": {
    "displayName": "FVStalkerGrenadeE",
    "sectionType": "Weapon"
  },
  "GiantsbaneMissile": {
    "displayName": "GiantsbaneMissile",
    "sectionType": "Weapon"
  },
  "FVGiantsbaneMissile": {
    "displayName": "FVGiantsbaneMissile",
    "sectionType": "Weapon"
  },
  "StalkerWeb": {
    "displayName": "StalkerWeb",
    "sectionType": "Weapon"
  },
  "ClairWeb": {
    "displayName": "ClairWeb",
    "sectionType": "Weapon"
  },
  "ClairIFVWeb": {
    "displayName": "ClairIFVWeb",
    "sectionType": "Weapon"
  },
  "DClairWeb": {
    "displayName": "DClairWeb",
    "sectionType": "Weapon"
  },
  "CruiserCannonA": {
    "displayName": "CruiserCannonA",
    "sectionType": "Weapon"
  },
  "CruiserCannonAE": {
    "displayName": "CruiserCannonAE",
    "sectionType": "Weapon"
  },
  "CruiserCannonB": {
    "displayName": "CruiserCannonB",
    "sectionType": "Weapon"
  },
  "CruiserCannonBE": {
    "displayName": "CruiserCannonBE",
    "sectionType": "Weapon"
  },
  "ElephantStrike": {
    "displayName": "ElephantStrike",
    "sectionType": "Weapon"
  },
  "MODeathWeapon": {
    "displayName": "MODeathWeapon",
    "sectionType": "Weapon"
  },
  "BeetleBite": {
    "displayName": "BeetleBite",
    "sectionType": "Weapon"
  },
  "BeetleRam": {
    "displayName": "BeetleRam",
    "sectionType": "Weapon"
  },
  "NeutronRifle": {
    "displayName": "NeutronRifle",
    "sectionType": "Weapon"
  },
  "NeutronRifleE": {
    "displayName": "NeutronRifleE",
    "sectionType": "Weapon"
  },
  "NeutronRifle2": {
    "displayName": "NeutronRifle2",
    "sectionType": "Weapon"
  },
  "NeutronRifle2E": {
    "displayName": "NeutronRifle2E",
    "sectionType": "Weapon"
  },
  "CRNeutronRifle": {
    "displayName": "CRNeutronRifle",
    "sectionType": "Weapon"
  },
  "CRNeutronRifleE": {
    "displayName": "CRNeutronRifleE",
    "sectionType": "Weapon"
  },
  "NeutronBlaster": {
    "displayName": "NeutronBlaster",
    "sectionType": "Weapon"
  },
  "NeutronBlasterE": {
    "displayName": "NeutronBlasterE",
    "sectionType": "Weapon"
  },
  "NeutronCannon": {
    "displayName": "NeutronCannon",
    "sectionType": "Weapon"
  },
  "NeutronCannonE": {
    "displayName": "NeutronCannonE",
    "sectionType": "Weapon"
  },
  "ChronoImprison": {
    "displayName": "ChronoImprison",
    "sectionType": "Weapon"
  },
  "BlizzardNerf": {
    "displayName": "BlizzardNerf",
    "sectionType": "Weapon"
  },
  "BlizzardBeam": {
    "displayName": "BlizzardBeam",
    "sectionType": "Weapon"
  },
  "BlizzardBeamE": {
    "displayName": "BlizzardBeamE",
    "sectionType": "Weapon"
  },
  "BlizzardAA": {
    "displayName": "BlizzardAA",
    "sectionType": "Weapon"
  },
  "BlizzardAAE": {
    "displayName": "BlizzardAAE",
    "sectionType": "Weapon"
  },
  "FakeHyperion": {
    "displayName": "FakeHyperion",
    "sectionType": "Weapon"
  },
  "HyperionBlast": {
    "displayName": "HyperionBlast",
    "sectionType": "Weapon"
  },
  "HyperionBlastE": {
    "displayName": "HyperionBlastE",
    "sectionType": "Weapon"
  },
  "HyperionFlash": {
    "displayName": "HyperionFlash",
    "sectionType": "Weapon"
  },
  "BondBreaker": {
    "displayName": "BondBreaker",
    "sectionType": "Weapon"
  },
  "FVBondBreaker": {
    "displayName": "FVBondBreaker",
    "sectionType": "Weapon"
  },
  "BondEruption": {
    "displayName": "BondEruption",
    "sectionType": "Weapon"
  },
  "FVBondEruption": {
    "displayName": "FVBondEruption",
    "sectionType": "Weapon"
  },
  "FVBondEruption2": {
    "displayName": "FVBondEruption2",
    "sectionType": "Weapon"
  },
  "OxidizerTarget": {
    "displayName": "OxidizerTarget",
    "sectionType": "Weapon"
  },
  "OxidizerFake": {
    "displayName": "OxidizerFake",
    "sectionType": "Weapon"
  },
  "DolphinGun": {
    "displayName": "DolphinGun",
    "sectionType": "Weapon"
  },
  "DolphinGunE": {
    "displayName": "DolphinGunE",
    "sectionType": "Weapon"
  },
  "DolphinGunFragment": {
    "displayName": "DolphinGunFragment",
    "sectionType": "Weapon"
  },
  "EnforcerGun": {
    "displayName": "EnforcerGun",
    "sectionType": "Weapon"
  },
  "EnforcerGunE": {
    "displayName": "EnforcerGunE",
    "sectionType": "Weapon"
  },
  "EnforcerGun2": {
    "displayName": "EnforcerGun2",
    "sectionType": "Weapon"
  },
  "EnforcerGun2E": {
    "displayName": "EnforcerGun2E",
    "sectionType": "Weapon"
  },
  "CREnforcerGun": {
    "displayName": "CREnforcerGun",
    "sectionType": "Weapon"
  },
  "CREnforcerGunE": {
    "displayName": "CREnforcerGunE",
    "sectionType": "Weapon"
  },
  "EnforcerGunFragment": {
    "displayName": "EnforcerGunFragment",
    "sectionType": "Weapon"
  },
  "BoidBlitzUp": {
    "displayName": "BoidBlitzUp",
    "sectionType": "Weapon"
  },
  "BoidBlitzSuper": {
    "displayName": "BoidBlitzSuper",
    "sectionType": "Weapon"
  },
  "Longbow": {
    "displayName": "Longbow",
    "sectionType": "Weapon"
  },
  "LongbowE": {
    "displayName": "LongbowE",
    "sectionType": "Weapon"
  },
  "LongbowAA": {
    "displayName": "LongbowAA",
    "sectionType": "Weapon"
  },
  "LongbowAAE": {
    "displayName": "LongbowAAE",
    "sectionType": "Weapon"
  },
  "FVLongbow": {
    "displayName": "FVLongbow",
    "sectionType": "Weapon"
  },
  "UCLongbow": {
    "displayName": "UCLongbow",
    "sectionType": "Weapon"
  },
  "UCLongbowE": {
    "displayName": "UCLongbowE",
    "sectionType": "Weapon"
  },
  "DefaultDeathWeapon": {
    "displayName": "DefaultDeathWeapon",
    "sectionType": "Weapon"
  },
  "AircraftDeathWeapon": {
    "displayName": "AircraftDeathWeapon",
    "sectionType": "Weapon"
  },
  "InfantryDeathWeapon": {
    "displayName": "InfantryDeathWeapon",
    "sectionType": "Weapon"
  },
  "UnitDeathWeapon": {
    "displayName": "UnitDeathWeapon",
    "sectionType": "Weapon"
  },
  "OilExplosion": {
    "displayName": "OilExplosion",
    "sectionType": "Weapon"
  },
  "BarrelExplosion": {
    "displayName": "BarrelExplosion",
    "sectionType": "Weapon"
  },
  "RocksExplosion": {
    "displayName": "RocksExplosion",
    "sectionType": "Weapon"
  },
  "StealthExplosion": {
    "displayName": "StealthExplosion",
    "sectionType": "Weapon"
  },
  "KillEngineers": {
    "displayName": "KillEngineers",
    "sectionType": "Weapon"
  },
  "SpiderBomb": {
    "displayName": "SpiderBomb",
    "sectionType": "Weapon"
  },
  "FVSpiderBomb": {
    "displayName": "FVSpiderBomb",
    "sectionType": "Weapon"
  },
  "DuplicantAttack": {
    "displayName": "DuplicantAttack",
    "sectionType": "Weapon"
  },
  "FVDuplicantAttack": {
    "displayName": "FVDuplicantAttack",
    "sectionType": "Weapon"
  },
  "BlimpBomb": {
    "displayName": "BlimpBomb",
    "sectionType": "Weapon"
  },
  "BlimpBombE": {
    "displayName": "BlimpBombE",
    "sectionType": "Weapon"
  },
  "BlimpBombEffect": {
    "displayName": "BlimpBombEffect",
    "sectionType": "Weapon"
  },
  "BlimpBombNuke": {
    "displayName": "BlimpBombNuke",
    "sectionType": "Weapon"
  },
  "StardustBombEffect": {
    "displayName": "StardustBombEffect",
    "sectionType": "Weapon"
  },
  "IrkallaDeath": {
    "displayName": "IrkallaDeath",
    "sectionType": "Weapon"
  },
  "WastelotAttack": {
    "displayName": "WastelotAttack",
    "sectionType": "Weapon"
  },
  "WastelotDeath": {
    "displayName": "WastelotDeath",
    "sectionType": "Weapon"
  },
  "Dustbombs": {
    "displayName": "Dustbombs",
    "sectionType": "Weapon"
  },
  "Smokebombs": {
    "displayName": "Smokebombs",
    "sectionType": "Weapon"
  },
  "Vulcan": {
    "displayName": "Vulcan",
    "sectionType": "Weapon"
  },
  "VulcanE": {
    "displayName": "VulcanE",
    "sectionType": "Weapon"
  },
  "Vulcan2": {
    "displayName": "Vulcan2",
    "sectionType": "Weapon"
  },
  "Vulcan2E": {
    "displayName": "Vulcan2E",
    "sectionType": "Weapon"
  },
  "CamoVulcan2": {
    "displayName": "CamoVulcan2",
    "sectionType": "Weapon"
  },
  "CamoVulcan2E": {
    "displayName": "CamoVulcan2E",
    "sectionType": "Weapon"
  },
  "SharkTorpedo": {
    "displayName": "SharkTorpedo",
    "sectionType": "Weapon"
  },
  "SharkWave": {
    "displayName": "SharkWave",
    "sectionType": "Weapon"
  },
  "SharkWave2": {
    "displayName": "SharkWave2",
    "sectionType": "Weapon"
  },
  "SharkWave3": {
    "displayName": "SharkWave3",
    "sectionType": "Weapon"
  },
  "SharkWave4": {
    "displayName": "SharkWave4",
    "sectionType": "Weapon"
  },
  "SharkWave5": {
    "displayName": "SharkWave5",
    "sectionType": "Weapon"
  },
  "NautilusTorpedo": {
    "displayName": "NautilusTorpedo",
    "sectionType": "Weapon"
  },
  "NautilusTorpedoE": {
    "displayName": "NautilusTorpedoE",
    "sectionType": "Weapon"
  },
  "MagnetShift2": {
    "displayName": "MagnetShift2",
    "sectionType": "Weapon"
  },
  "SubTorpedo": {
    "displayName": "SubTorpedo",
    "sectionType": "Weapon"
  },
  "SubTorpedoE": {
    "displayName": "SubTorpedoE",
    "sectionType": "Weapon"
  },
  "SuperSubTorpedo": {
    "displayName": "SuperSubTorpedo",
    "sectionType": "Weapon"
  },
  "SuperSubTorpedoE": {
    "displayName": "SuperSubTorpedoE",
    "sectionType": "Weapon"
  },
  "SAMBunkerWeapon": {
    "displayName": "SAMBunkerWeapon",
    "sectionType": "Weapon"
  },
  "SAMBunkerWeaponE": {
    "displayName": "SAMBunkerWeaponE",
    "sectionType": "Weapon"
  },
  "SAMBunkerFake": {
    "displayName": "SAMBunkerFake",
    "sectionType": "Weapon"
  },
  "FakeEye": {
    "displayName": "FakeEye",
    "sectionType": "Weapon"
  },
  "RedEye2": {
    "displayName": "RedEye2",
    "sectionType": "Weapon"
  },
  "RedEye2E": {
    "displayName": "RedEye2E",
    "sectionType": "Weapon"
  },
  "TechRedEye2": {
    "displayName": "TechRedEye2",
    "sectionType": "Weapon"
  },
  "TechRedEye2E": {
    "displayName": "TechRedEye2E",
    "sectionType": "Weapon"
  },
  "HoverMissile": {
    "displayName": "HoverMissile",
    "sectionType": "Weapon"
  },
  "HoverMissileE": {
    "displayName": "HoverMissileE",
    "sectionType": "Weapon"
  },
  "AmphMissile": {
    "displayName": "AmphMissile",
    "sectionType": "Weapon"
  },
  "AmphMissileE": {
    "displayName": "AmphMissileE",
    "sectionType": "Weapon"
  },
  "KingsGun": {
    "displayName": "KingsGun",
    "sectionType": "Weapon"
  },
  "FVKingsGun": {
    "displayName": "FVKingsGun",
    "sectionType": "Weapon"
  },
  "GharialCannon": {
    "displayName": "GharialCannon",
    "sectionType": "Weapon"
  },
  "GharialPiles": {
    "displayName": "GharialPiles",
    "sectionType": "Weapon"
  },
  "GharialBetaCannon": {
    "displayName": "GharialBetaCannon",
    "sectionType": "Weapon"
  },
  "UraganPunches": {
    "displayName": "UraganPunches",
    "sectionType": "Weapon"
  },
  "UraganFragment": {
    "displayName": "UraganFragment",
    "sectionType": "Weapon"
  },
  "UraganDeath": {
    "displayName": "UraganDeath",
    "sectionType": "Weapon"
  },
  "LeviathanDroneBomb": {
    "displayName": "LeviathanDroneBomb",
    "sectionType": "Weapon"
  },
  "MissileLauncher": {
    "displayName": "MissileLauncher",
    "sectionType": "Weapon"
  },
  "MissileLauncherE": {
    "displayName": "MissileLauncherE",
    "sectionType": "Weapon"
  },
  "UCMissileLauncher": {
    "displayName": "UCMissileLauncher",
    "sectionType": "Weapon"
  },
  "UCMissileLauncherE": {
    "displayName": "UCMissileLauncherE",
    "sectionType": "Weapon"
  },
  "MissileLauncherDep": {
    "displayName": "MissileLauncherDep",
    "sectionType": "Weapon"
  },
  "MissileLauncherDepE": {
    "displayName": "MissileLauncherDepE",
    "sectionType": "Weapon"
  },
  "CRMissileLauncher": {
    "displayName": "CRMissileLauncher",
    "sectionType": "Weapon"
  },
  "CRMissileLauncherE": {
    "displayName": "CRMissileLauncherE",
    "sectionType": "Weapon"
  },
  "ParadoxPrism": {
    "displayName": "ParadoxPrism",
    "sectionType": "Weapon"
  },
  "ParadoxMedusa": {
    "displayName": "ParadoxMedusa",
    "sectionType": "Weapon"
  },
  "Phalanx": {
    "displayName": "Phalanx",
    "sectionType": "Weapon"
  },
  "PhalanxE": {
    "displayName": "PhalanxE",
    "sectionType": "Weapon"
  },
  "Medusa": {
    "displayName": "Medusa",
    "sectionType": "Weapon"
  },
  "MedusaE": {
    "displayName": "MedusaE",
    "sectionType": "Weapon"
  },
  "ArmorMissileStrike": {
    "displayName": "ArmorMissileStrike",
    "sectionType": "Weapon"
  },
  "ArmorMissileStrikeE": {
    "displayName": "ArmorMissileStrikeE",
    "sectionType": "Weapon"
  },
  "IceBeam": {
    "displayName": "IceBeam",
    "sectionType": "Weapon"
  },
  "IceBeamE": {
    "displayName": "IceBeamE",
    "sectionType": "Weapon"
  },
  "IceBeamNerf": {
    "displayName": "IceBeamNerf",
    "sectionType": "Weapon"
  },
  "HMGWeapon": {
    "displayName": "HMGWeapon",
    "sectionType": "Weapon"
  },
  "HMGWeaponE": {
    "displayName": "HMGWeaponE",
    "sectionType": "Weapon"
  },
  "PhantasmMissiles": {
    "displayName": "PhantasmMissiles",
    "sectionType": "Weapon"
  },
  "GodsbaneMissile": {
    "displayName": "GodsbaneMissile",
    "sectionType": "Weapon"
  },
  "FVGodsbaneMissile": {
    "displayName": "FVGodsbaneMissile",
    "sectionType": "Weapon"
  },
  "GodsbaneFrag": {
    "displayName": "GodsbaneFrag",
    "sectionType": "Weapon"
  },
  "FuryMissile": {
    "displayName": "FuryMissile",
    "sectionType": "Weapon"
  },
  "DiverbeeAttack": {
    "displayName": "DiverbeeAttack",
    "sectionType": "Weapon"
  },
  "SweeperMissile": {
    "displayName": "SweeperMissile",
    "sectionType": "Weapon"
  },
  "AGGattling": {
    "displayName": "AGGattling",
    "sectionType": "Weapon"
  },
  "AGGattling2": {
    "displayName": "AGGattling2",
    "sectionType": "Weapon"
  },
  "AGGattling3": {
    "displayName": "AGGattling3",
    "sectionType": "Weapon"
  },
  "AGGattlingE": {
    "displayName": "AGGattlingE",
    "sectionType": "Weapon"
  },
  "AGGattling2E": {
    "displayName": "AGGattling2E",
    "sectionType": "Weapon"
  },
  "AGGattling3E": {
    "displayName": "AGGattling3E",
    "sectionType": "Weapon"
  },
  "AAGattling": {
    "displayName": "AAGattling",
    "sectionType": "Weapon"
  },
  "AAGattling2": {
    "displayName": "AAGattling2",
    "sectionType": "Weapon"
  },
  "AAGattling3": {
    "displayName": "AAGattling3",
    "sectionType": "Weapon"
  },
  "AAGattlingE": {
    "displayName": "AAGattlingE",
    "sectionType": "Weapon"
  },
  "AAGattling2E": {
    "displayName": "AAGattling2E",
    "sectionType": "Weapon"
  },
  "AAGattling3E": {
    "displayName": "AAGattling3E",
    "sectionType": "Weapon"
  },
  "AAGattCann": {
    "displayName": "AAGattCann",
    "sectionType": "Weapon"
  },
  "AAGattCann2": {
    "displayName": "AAGattCann2",
    "sectionType": "Weapon"
  },
  "AAGattCann3": {
    "displayName": "AAGattCann3",
    "sectionType": "Weapon"
  },
  "AAGattCannE": {
    "displayName": "AAGattCannE",
    "sectionType": "Weapon"
  },
  "AAGattCann2E": {
    "displayName": "AAGattCann2E",
    "sectionType": "Weapon"
  },
  "AAGattCann3E": {
    "displayName": "AAGattCann3E",
    "sectionType": "Weapon"
  },
  "Sapper": {
    "displayName": "Sapper",
    "sectionType": "Unknown"
  },
  "M1Carbine": {
    "displayName": "M1Carbine",
    "sectionType": "Weapon"
  },
  "M1CarbineE": {
    "displayName": "M1CarbineE",
    "sectionType": "Weapon"
  },
  "UCM1Carbine": {
    "displayName": "UCM1Carbine",
    "sectionType": "Weapon"
  },
  "UCM1CarbineE": {
    "displayName": "UCM1CarbineE",
    "sectionType": "Weapon"
  },
  "PsychicJab": {
    "displayName": "PsychicJab",
    "sectionType": "Weapon"
  },
  "PsychicJabE": {
    "displayName": "PsychicJabE",
    "sectionType": "Weapon"
  },
  "CRPsychicJab": {
    "displayName": "CRPsychicJab",
    "sectionType": "Weapon"
  },
  "CRPsychicJabE": {
    "displayName": "CRPsychicJabE",
    "sectionType": "Weapon"
  },
  "UCPsychicJab": {
    "displayName": "UCPsychicJab",
    "sectionType": "Weapon"
  },
  "UCPsychicJabE": {
    "displayName": "UCPsychicJabE",
    "sectionType": "Weapon"
  },
  "M60": {
    "displayName": "M60",
    "sectionType": "Weapon"
  },
  "M60E": {
    "displayName": "M60E",
    "sectionType": "Weapon"
  },
  "CRM60": {
    "displayName": "CRM60",
    "sectionType": "Weapon"
  },
  "CRM60E": {
    "displayName": "CRM60E",
    "sectionType": "Weapon"
  },
  "CRM60T": {
    "displayName": "CRM60T",
    "sectionType": "Weapon"
  },
  "CRM60TE": {
    "displayName": "CRM60TE",
    "sectionType": "Weapon"
  },
  "Para": {
    "displayName": "Para",
    "sectionType": "Weapon"
  },
  "ParaE": {
    "displayName": "ParaE",
    "sectionType": "Weapon"
  },
  "UCPara": {
    "displayName": "UCPara",
    "sectionType": "Weapon"
  },
  "UCParaE": {
    "displayName": "UCParaE",
    "sectionType": "Weapon"
  },
  "KnightGun": {
    "displayName": "KnightGun",
    "sectionType": "Weapon"
  },
  "KnightGunE": {
    "displayName": "KnightGunE",
    "sectionType": "Weapon"
  },
  "FVKnightGun": {
    "displayName": "FVKnightGun",
    "sectionType": "Weapon"
  },
  "FVKnightGunE": {
    "displayName": "FVKnightGunE",
    "sectionType": "Weapon"
  },
  "UCKnightGun": {
    "displayName": "UCKnightGun",
    "sectionType": "Weapon"
  },
  "UCKnightGunE": {
    "displayName": "UCKnightGunE",
    "sectionType": "Weapon"
  },
  "KnightGunAA": {
    "displayName": "KnightGunAA",
    "sectionType": "Weapon"
  },
  "KnightGunAAE": {
    "displayName": "KnightGunAAE",
    "sectionType": "Weapon"
  },
  "DKnightGun": {
    "displayName": "DKnightGun",
    "sectionType": "Weapon"
  },
  "DKnightGunAA": {
    "displayName": "DKnightGunAA",
    "sectionType": "Weapon"
  },
  "20mmRapid": {
    "displayName": "20mmRapid",
    "sectionType": "Weapon"
  },
  "20mmRapidE": {
    "displayName": "20mmRapidE",
    "sectionType": "Weapon"
  },
  "FortressGun": {
    "displayName": "FortressGun",
    "sectionType": "Weapon"
  },
  "FortressGunE": {
    "displayName": "FortressGunE",
    "sectionType": "Weapon"
  },
  "FortressMissile": {
    "displayName": "FortressMissile",
    "sectionType": "Weapon"
  },
  "FortressMissileE": {
    "displayName": "FortressMissileE",
    "sectionType": "Weapon"
  },
  "GyroGun": {
    "displayName": "GyroGun",
    "sectionType": "Weapon"
  },
  "GyroGunE": {
    "displayName": "GyroGunE",
    "sectionType": "Weapon"
  },
  "GyroAAGun": {
    "displayName": "GyroAAGun",
    "sectionType": "Weapon"
  },
  "20mm": {
    "displayName": "20mm",
    "sectionType": "Weapon"
  },
  "20mmE": {
    "displayName": "20mmE",
    "sectionType": "Weapon"
  },
  "ThorHeavyGun": {
    "displayName": "ThorHeavyGun",
    "sectionType": "Weapon"
  },
  "ThorHeavyGunE": {
    "displayName": "ThorHeavyGunE",
    "sectionType": "Weapon"
  },
  "HoldTheLine": {
    "displayName": "HoldTheLine",
    "sectionType": "Weapon"
  },
  "CraneWeapon": {
    "displayName": "CraneWeapon",
    "sectionType": "Weapon"
  },
  "IronGuardWeapon": {
    "displayName": "IronGuardWeapon",
    "sectionType": "Weapon"
  },
  "Nanofiber1Weapon": {
    "displayName": "Nanofiber1Weapon",
    "sectionType": "Weapon"
  },
  "Nanofiber2Weapon": {
    "displayName": "Nanofiber2Weapon",
    "sectionType": "Weapon"
  },
  "Nanofiber3Weapon": {
    "displayName": "Nanofiber3Weapon",
    "sectionType": "Weapon"
  },
  "Nanofiber4Weapon": {
    "displayName": "Nanofiber4Weapon",
    "sectionType": "Weapon"
  },
  "Nanofiber5Weapon": {
    "displayName": "Nanofiber5Weapon",
    "sectionType": "Weapon"
  },
  "Nanofiber6Weapon": {
    "displayName": "Nanofiber6Weapon",
    "sectionType": "Weapon"
  },
  "Nanofiber7Weapon": {
    "displayName": "Nanofiber7Weapon",
    "sectionType": "Weapon"
  },
  "ShutDownFake": {
    "displayName": "ShutDownFake",
    "sectionType": "Weapon"
  },
  "ShutDownFactories": {
    "displayName": "ShutDownFactories",
    "sectionType": "Weapon"
  },
  "JudgementWeapon": {
    "displayName": "JudgementWeapon",
    "sectionType": "Weapon"
  },
  "TemporalShield": {
    "displayName": "TemporalShield",
    "sectionType": "Weapon"
  },
  "TimeFreezeWeapon": {
    "displayName": "TimeFreezeWeapon",
    "sectionType": "Weapon"
  },
  "Nanocharge": {
    "displayName": "Nanocharge",
    "sectionType": "Weapon"
  },
  "AlanqaAA": {
    "displayName": "AlanqaAA",
    "sectionType": "Weapon"
  },
  "HurricaneSpawn": {
    "displayName": "HurricaneSpawn",
    "sectionType": "Weapon"
  },
  "BuzzardGun": {
    "displayName": "BuzzardGun",
    "sectionType": "Weapon"
  },
  "BuzzardMines": {
    "displayName": "BuzzardMines",
    "sectionType": "Weapon"
  },
  "BuzzardMinesStun": {
    "displayName": "BuzzardMinesStun",
    "sectionType": "Weapon"
  },
  "CondorBlast": {
    "displayName": "CondorBlast",
    "sectionType": "Weapon"
  },
  "CondorGun": {
    "displayName": "CondorGun",
    "sectionType": "Weapon"
  },
  "SeekerLauncher": {
    "displayName": "SeekerLauncher",
    "sectionType": "Weapon"
  },
  "SeekerBomb": {
    "displayName": "SeekerBomb",
    "sectionType": "Weapon"
  },
  "DSeekerBomb": {
    "displayName": "DSeekerBomb",
    "sectionType": "Weapon"
  },
  "NestFake": {
    "displayName": "NestFake",
    "sectionType": "Weapon"
  },
  "NestLauncher": {
    "displayName": "NestLauncher",
    "sectionType": "Weapon"
  },
  "SentinelFake": {
    "displayName": "SentinelFake",
    "sectionType": "Weapon"
  },
  "SentinelAA": {
    "displayName": "SentinelAA",
    "sectionType": "Weapon"
  },
  "SentinelAAE": {
    "displayName": "SentinelAAE",
    "sectionType": "Weapon"
  },
  "MP5": {
    "displayName": "MP5",
    "sectionType": "Weapon"
  },
  "MP5E": {
    "displayName": "MP5E",
    "sectionType": "Weapon"
  },
  "CRMP5": {
    "displayName": "CRMP5",
    "sectionType": "Weapon"
  },
  "CRMP5E": {
    "displayName": "CRMP5E",
    "sectionType": "Weapon"
  },
  "SealC4": {
    "displayName": "SealC4",
    "sectionType": "Weapon"
  },
  "TanyaLaser": {
    "displayName": "TanyaLaser",
    "sectionType": "Weapon"
  },
  "TanyaLaserE": {
    "displayName": "TanyaLaserE",
    "sectionType": "Weapon"
  },
  "FVTanyaLaser": {
    "displayName": "FVTanyaLaser",
    "sectionType": "Weapon"
  },
  "FVTanyaLaserE": {
    "displayName": "FVTanyaLaserE",
    "sectionType": "Weapon"
  },
  "TanyaC4": {
    "displayName": "TanyaC4",
    "sectionType": "Weapon"
  },
  "StunGun": {
    "displayName": "StunGun",
    "sectionType": "Weapon"
  },
  "MobileGrinder": {
    "displayName": "MobileGrinder",
    "sectionType": "Weapon"
  },
  "SuperSniper": {
    "displayName": "SuperSniper",
    "sectionType": "Weapon"
  },
  "SuperSniperE": {
    "displayName": "SuperSniperE",
    "sectionType": "Weapon"
  },
  "SuperSniperKill": {
    "displayName": "SuperSniperKill",
    "sectionType": "Weapon"
  },
  "FVSuperSniper": {
    "displayName": "FVSuperSniper",
    "sectionType": "Weapon"
  },
  "Flare": {
    "displayName": "Flare",
    "sectionType": "Weapon"
  },
  "SuperSniperAI": {
    "displayName": "SuperSniperAI",
    "sectionType": "Weapon"
  },
  "SuperSniperAIE": {
    "displayName": "SuperSniperAIE",
    "sectionType": "Weapon"
  },
  "FlareAI": {
    "displayName": "FlareAI",
    "sectionType": "Weapon"
  },
  "ReznovSniper": {
    "displayName": "ReznovSniper",
    "sectionType": "Weapon"
  },
  "ReznovSniperE": {
    "displayName": "ReznovSniperE",
    "sectionType": "Weapon"
  },
  "AKM": {
    "displayName": "AKM",
    "sectionType": "Weapon"
  },
  "AKME": {
    "displayName": "AKME",
    "sectionType": "Weapon"
  },
  "AWP": {
    "displayName": "AWP",
    "sectionType": "Weapon"
  },
  "AWPE": {
    "displayName": "AWPE",
    "sectionType": "Weapon"
  },
  "AWP2": {
    "displayName": "AWP2",
    "sectionType": "Weapon"
  },
  "AWP2E": {
    "displayName": "AWP2E",
    "sectionType": "Weapon"
  },
  "CRAWP": {
    "displayName": "CRAWP",
    "sectionType": "Weapon"
  },
  "CRAWPE": {
    "displayName": "CRAWPE",
    "sectionType": "Weapon"
  },
  "Virusgun": {
    "displayName": "Virusgun",
    "sectionType": "Weapon"
  },
  "VirusgunE": {
    "displayName": "VirusgunE",
    "sectionType": "Weapon"
  },
  "FVVirusgun": {
    "displayName": "FVVirusgun",
    "sectionType": "Weapon"
  },
  "AlizeGun": {
    "displayName": "AlizeGun",
    "sectionType": "Weapon"
  },
  "FVAlizeGun": {
    "displayName": "FVAlizeGun",
    "sectionType": "Weapon"
  },
  "FinAutoSniperGun": {
    "displayName": "FinAutoSniperGun",
    "sectionType": "Weapon"
  },
  "FVFinAutoSniperGun": {
    "displayName": "FVFinAutoSniperGun",
    "sectionType": "Weapon"
  },
  "RaccoonEMP": {
    "displayName": "RaccoonEMP",
    "sectionType": "Weapon"
  },
  "RaccoonDefense": {
    "displayName": "RaccoonDefense",
    "sectionType": "Weapon"
  },
  "RaccoonBeam": {
    "displayName": "RaccoonBeam",
    "sectionType": "Weapon"
  },
  "OrcinusWave": {
    "displayName": "OrcinusWave",
    "sectionType": "Weapon"
  },
  "OrcinusWaveReal": {
    "displayName": "OrcinusWaveReal",
    "sectionType": "Weapon"
  },
  "VultureCannon": {
    "displayName": "VultureCannon",
    "sectionType": "Weapon"
  },
  "VultureCannonE": {
    "displayName": "VultureCannonE",
    "sectionType": "Weapon"
  },
  "VultureBombs": {
    "displayName": "VultureBombs",
    "sectionType": "Weapon"
  },
  "VultureBombsE": {
    "displayName": "VultureBombsE",
    "sectionType": "Weapon"
  },
  "VultureBombsAI": {
    "displayName": "VultureBombsAI",
    "sectionType": "Weapon"
  },
  "VultureBombsAIE": {
    "displayName": "VultureBombsAIE",
    "sectionType": "Weapon"
  },
  "VultureAnimFire": {
    "displayName": "VultureAnimFire",
    "sectionType": "Weapon"
  },
  "StealthMissile": {
    "displayName": "StealthMissile",
    "sectionType": "Weapon"
  },
  "StealthMissileE": {
    "displayName": "StealthMissileE",
    "sectionType": "Weapon"
  },
  "TimeWarp1": {
    "displayName": "TimeWarp1",
    "sectionType": "Weapon"
  },
  "TimeWarp2": {
    "displayName": "TimeWarp2",
    "sectionType": "Weapon"
  },
  "HarbingerCannon": {
    "displayName": "HarbingerCannon",
    "sectionType": "Weapon"
  },
  "HarbingerCannonFrag": {
    "displayName": "HarbingerCannonFrag",
    "sectionType": "Weapon"
  },
  "WidowSignal": {
    "displayName": "WidowSignal",
    "sectionType": "Weapon"
  },
  "WidowAlphaSignal": {
    "displayName": "WidowAlphaSignal",
    "sectionType": "Weapon"
  },
  "WidowSignal2": {
    "displayName": "WidowSignal2",
    "sectionType": "Weapon"
  },
  "WidowSignal3": {
    "displayName": "WidowSignal3",
    "sectionType": "Weapon"
  },
  "Maverick": {
    "displayName": "Maverick",
    "sectionType": "Weapon"
  },
  "MaverickE": {
    "displayName": "MaverickE",
    "sectionType": "Weapon"
  },
  "MaverickB": {
    "displayName": "MaverickB",
    "sectionType": "Weapon"
  },
  "MaverickBE": {
    "displayName": "MaverickBE",
    "sectionType": "Weapon"
  },
  "MaverickNerf": {
    "displayName": "MaverickNerf",
    "sectionType": "Weapon"
  },
  "FoxMissile": {
    "displayName": "FoxMissile",
    "sectionType": "Weapon"
  },
  "FoxMissileE": {
    "displayName": "FoxMissileE",
    "sectionType": "Weapon"
  },
  "FoxMissileSplit": {
    "displayName": "FoxMissileSplit",
    "sectionType": "Weapon"
  },
  "FoxMissileSplitE": {
    "displayName": "FoxMissileSplitE",
    "sectionType": "Weapon"
  },
  "StormMissile": {
    "displayName": "StormMissile",
    "sectionType": "Weapon"
  },
  "StormMissileE": {
    "displayName": "StormMissileE",
    "sectionType": "Weapon"
  },
  "StormGun": {
    "displayName": "StormGun",
    "sectionType": "Weapon"
  },
  "StormGunE": {
    "displayName": "StormGunE",
    "sectionType": "Weapon"
  },
  "SnakeMissile": {
    "displayName": "SnakeMissile",
    "sectionType": "Weapon"
  },
  "SnakeMissileE": {
    "displayName": "SnakeMissileE",
    "sectionType": "Weapon"
  },
  "SnakeGun": {
    "displayName": "SnakeGun",
    "sectionType": "Weapon"
  },
  "SnakeGunE": {
    "displayName": "SnakeGunE",
    "sectionType": "Weapon"
  },
  "Maverick2": {
    "displayName": "Maverick2",
    "sectionType": "Weapon"
  },
  "Maverick2E": {
    "displayName": "Maverick2E",
    "sectionType": "Weapon"
  },
  "Maverick3": {
    "displayName": "Maverick3",
    "sectionType": "Weapon"
  },
  "Maverick3E": {
    "displayName": "Maverick3E",
    "sectionType": "Weapon"
  },
  "ParaDropWeapon": {
    "displayName": "ParaDropWeapon",
    "sectionType": "Weapon"
  },
  "SpyCameraWeapon": {
    "displayName": "SpyCameraWeapon",
    "sectionType": "Weapon"
  },
  "ReconBomb": {
    "displayName": "ReconBomb",
    "sectionType": "Weapon"
  },
  "HornetBomb": {
    "displayName": "HornetBomb",
    "sectionType": "Weapon"
  },
  "HornetBombE": {
    "displayName": "HornetBombE",
    "sectionType": "Weapon"
  },
  "HornetCollision": {
    "displayName": "HornetCollision",
    "sectionType": "Weapon"
  },
  "ASWBomb": {
    "displayName": "ASWBomb",
    "sectionType": "Weapon"
  },
  "ASWBombE": {
    "displayName": "ASWBombE",
    "sectionType": "Weapon"
  },
  "ASWCollision": {
    "displayName": "ASWCollision",
    "sectionType": "Weapon"
  },
  "HumveeGun": {
    "displayName": "HumveeGun",
    "sectionType": "Weapon"
  },
  "HumveeGunE": {
    "displayName": "HumveeGunE",
    "sectionType": "Weapon"
  },
  "RangerGun": {
    "displayName": "RangerGun",
    "sectionType": "Weapon"
  },
  "RangerGunE": {
    "displayName": "RangerGunE",
    "sectionType": "Weapon"
  },
  "SpotLight": {
    "displayName": "SpotLight",
    "sectionType": "Weapon"
  },
  "SensorSpotLight": {
    "displayName": "SensorSpotLight",
    "sectionType": "Weapon"
  },
  "105mm": {
    "displayName": "105mm",
    "sectionType": "Weapon"
  },
  "105mmE": {
    "displayName": "105mmE",
    "sectionType": "Weapon"
  },
  "BulldogPainter": {
    "displayName": "BulldogPainter",
    "sectionType": "Weapon"
  },
  "105mmR": {
    "displayName": "105mmR",
    "sectionType": "Weapon"
  },
  "105mmRE": {
    "displayName": "105mmRE",
    "sectionType": "Weapon"
  },
  "105mmR2": {
    "displayName": "105mmR2",
    "sectionType": "Weapon"
  },
  "105mmR2E": {
    "displayName": "105mmR2E",
    "sectionType": "Weapon"
  },
  "CavalierTarget": {
    "displayName": "CavalierTarget",
    "sectionType": "Weapon"
  },
  "TankKiller": {
    "displayName": "TankKiller",
    "sectionType": "Weapon"
  },
  "TankKillerE": {
    "displayName": "TankKillerE",
    "sectionType": "Weapon"
  },
  "HydraCannon": {
    "displayName": "HydraCannon",
    "sectionType": "Weapon"
  },
  "HydraCannonE": {
    "displayName": "HydraCannonE",
    "sectionType": "Weapon"
  },
  "HydraStrike": {
    "displayName": "HydraStrike",
    "sectionType": "Weapon"
  },
  "ScourgeGuns": {
    "displayName": "ScourgeGuns",
    "sectionType": "Weapon"
  },
  "ScourgeGunsE": {
    "displayName": "ScourgeGunsE",
    "sectionType": "Weapon"
  },
  "FVDoubleCannon": {
    "displayName": "FVDoubleCannon",
    "sectionType": "Weapon"
  },
  "FVDoubleCannonE": {
    "displayName": "FVDoubleCannonE",
    "sectionType": "Weapon"
  },
  "ScourgeTrans": {
    "displayName": "ScourgeTrans",
    "sectionType": "Weapon"
  },
  "ScourgeTransE": {
    "displayName": "ScourgeTransE",
    "sectionType": "Weapon"
  },
  "ScourgeEMP": {
    "displayName": "ScourgeEMP",
    "sectionType": "Weapon"
  },
  "JagdPanther": {
    "displayName": "JagdPanther",
    "sectionType": "Weapon"
  },
  "JagdPantherE": {
    "displayName": "JagdPantherE",
    "sectionType": "Weapon"
  },
  "JagdMissile": {
    "displayName": "JagdMissile",
    "sectionType": "Weapon"
  },
  "JagdMissileE": {
    "displayName": "JagdMissileE",
    "sectionType": "Weapon"
  },
  "RhadGun": {
    "displayName": "RhadGun",
    "sectionType": "Weapon"
  },
  "TurretGun": {
    "displayName": "TurretGun",
    "sectionType": "Weapon"
  },
  "TurretGunE": {
    "displayName": "TurretGunE",
    "sectionType": "Weapon"
  },
  "TechTurretGun": {
    "displayName": "TechTurretGun",
    "sectionType": "Weapon"
  },
  "TechTurretGunE": {
    "displayName": "TechTurretGunE",
    "sectionType": "Weapon"
  },
  "Hover105mm": {
    "displayName": "Hover105mm",
    "sectionType": "Weapon"
  },
  "Hover105mmE": {
    "displayName": "Hover105mmE",
    "sectionType": "Weapon"
  },
  "ShinBeams": {
    "displayName": "ShinBeams",
    "sectionType": "Weapon"
  },
  "ShinBeamsE": {
    "displayName": "ShinBeamsE",
    "sectionType": "Weapon"
  },
  "ShinMissiles": {
    "displayName": "ShinMissiles",
    "sectionType": "Weapon"
  },
  "ShinMissilesE": {
    "displayName": "ShinMissilesE",
    "sectionType": "Weapon"
  },
  "ShinCannons": {
    "displayName": "ShinCannons",
    "sectionType": "Weapon"
  },
  "ShinCannonsE": {
    "displayName": "ShinCannonsE",
    "sectionType": "Weapon"
  },
  "145mm": {
    "displayName": "145mm",
    "sectionType": "Weapon"
  },
  "145mmE": {
    "displayName": "145mmE",
    "sectionType": "Weapon"
  },
  "AbramsLaser": {
    "displayName": "AbramsLaser",
    "sectionType": "Weapon"
  },
  "AbramsLaserE": {
    "displayName": "AbramsLaserE",
    "sectionType": "Weapon"
  },
  "CatastropheGren": {
    "displayName": "CatastropheGren",
    "sectionType": "Weapon"
  },
  "CatastropheGrenE": {
    "displayName": "CatastropheGrenE",
    "sectionType": "Weapon"
  },
  "MammothTusk": {
    "displayName": "MammothTusk",
    "sectionType": "Weapon"
  },
  "MammothTuskE": {
    "displayName": "MammothTuskE",
    "sectionType": "Weapon"
  },
  "120mmx": {
    "displayName": "120mmx",
    "sectionType": "Weapon"
  },
  "120mmxE": {
    "displayName": "120mmxE",
    "sectionType": "Weapon"
  },
  "ApocMissile": {
    "displayName": "ApocMissile",
    "sectionType": "Weapon"
  },
  "ApocMissileE": {
    "displayName": "ApocMissileE",
    "sectionType": "Weapon"
  },
  "ApocStrike": {
    "displayName": "ApocStrike",
    "sectionType": "Weapon"
  },
  "ApocStrikeE": {
    "displayName": "ApocStrikeE",
    "sectionType": "Weapon"
  },
  "UraniumCannon": {
    "displayName": "UraniumCannon",
    "sectionType": "Weapon"
  },
  "UraniumCannonE": {
    "displayName": "UraniumCannonE",
    "sectionType": "Weapon"
  },
  "NuwaDeathWeapon": {
    "displayName": "NuwaDeathWeapon",
    "sectionType": "Weapon"
  },
  "ToxicPills": {
    "displayName": "ToxicPills",
    "sectionType": "Weapon"
  },
  "ScavengerDeath": {
    "displayName": "ScavengerDeath",
    "sectionType": "Weapon"
  },
  "AcidSpray": {
    "displayName": "AcidSpray",
    "sectionType": "Weapon"
  },
  "AcidSprayE": {
    "displayName": "AcidSprayE",
    "sectionType": "Weapon"
  },
  "GeneticGas": {
    "displayName": "GeneticGas",
    "sectionType": "Weapon"
  },
  "CannonBunkerWeapon": {
    "displayName": "CannonBunkerWeapon",
    "sectionType": "Weapon"
  },
  "CannonBunkerWeaponE": {
    "displayName": "CannonBunkerWeaponE",
    "sectionType": "Weapon"
  },
  "120mm": {
    "displayName": "120mm",
    "sectionType": "Weapon"
  },
  "120mmE": {
    "displayName": "120mmE",
    "sectionType": "Weapon"
  },
  "Super120mm": {
    "displayName": "Super120mm",
    "sectionType": "Weapon"
  },
  "Super120mmE": {
    "displayName": "Super120mmE",
    "sectionType": "Weapon"
  },
  "GehennaBlaster": {
    "displayName": "GehennaBlaster",
    "sectionType": "Weapon"
  },
  "GehennaBlasterGround": {
    "displayName": "GehennaBlasterGround",
    "sectionType": "Weapon"
  },
  "MothraFollow": {
    "displayName": "MothraFollow",
    "sectionType": "Weapon"
  },
  "ColossusCannon": {
    "displayName": "ColossusCannon",
    "sectionType": "Weapon"
  },
  "ColossusCannonE": {
    "displayName": "ColossusCannonE",
    "sectionType": "Weapon"
  },
  "ColossusAA": {
    "displayName": "ColossusAA",
    "sectionType": "Weapon"
  },
  "ColossusAAFake": {
    "displayName": "ColossusAAFake",
    "sectionType": "Weapon"
  },
  "BasiliskCannon": {
    "displayName": "BasiliskCannon",
    "sectionType": "Weapon"
  },
  "BasiliskCannonE": {
    "displayName": "BasiliskCannonE",
    "sectionType": "Weapon"
  },
  "120mmTiger": {
    "displayName": "120mmTiger",
    "sectionType": "Weapon"
  },
  "120mmTigerE": {
    "displayName": "120mmTigerE",
    "sectionType": "Weapon"
  },
  "120mmHeavy": {
    "displayName": "120mmHeavy",
    "sectionType": "Weapon"
  },
  "120mmHeavyE": {
    "displayName": "120mmHeavyE",
    "sectionType": "Weapon"
  },
  "120mmMammoth": {
    "displayName": "120mmMammoth",
    "sectionType": "Weapon"
  },
  "120mmMammothE": {
    "displayName": "120mmMammothE",
    "sectionType": "Weapon"
  },
  "MammothMissile": {
    "displayName": "MammothMissile",
    "sectionType": "Weapon"
  },
  "MammothMissileE": {
    "displayName": "MammothMissileE",
    "sectionType": "Weapon"
  },
  "120mmJaguar": {
    "displayName": "120mmJaguar",
    "sectionType": "Weapon"
  },
  "120mmJaguarE": {
    "displayName": "120mmJaguarE",
    "sectionType": "Weapon"
  },
  "Flamethrower": {
    "displayName": "Flamethrower",
    "sectionType": "Weapon"
  },
  "FlamethrowerE": {
    "displayName": "FlamethrowerE",
    "sectionType": "Weapon"
  },
  "Flamethrower2": {
    "displayName": "Flamethrower2",
    "sectionType": "Weapon"
  },
  "Flamethrower2E": {
    "displayName": "Flamethrower2E",
    "sectionType": "Weapon"
  },
  "FVFlamethrower": {
    "displayName": "FVFlamethrower",
    "sectionType": "Weapon"
  },
  "FVFlamethrowerE": {
    "displayName": "FVFlamethrowerE",
    "sectionType": "Weapon"
  },
  "BorilloFlamethrower": {
    "displayName": "BorilloFlamethrower",
    "sectionType": "Weapon"
  },
  "BorilloFlamethrowerE": {
    "displayName": "BorilloFlamethrowerE",
    "sectionType": "Weapon"
  },
  "ArmadilloFlamethrower": {
    "displayName": "ArmadilloFlamethrower",
    "sectionType": "Weapon"
  },
  "ArmadilloFlamethrowerE": {
    "displayName": "ArmadilloFlamethrowerE",
    "sectionType": "Weapon"
  },
  "TurretFlamethrower": {
    "displayName": "TurretFlamethrower",
    "sectionType": "Weapon"
  },
  "TurretFlamethrowerE": {
    "displayName": "TurretFlamethrowerE",
    "sectionType": "Weapon"
  },
  "OldFlamethrower": {
    "displayName": "OldFlamethrower",
    "sectionType": "Weapon"
  },
  "TurretAnimFire": {
    "displayName": "TurretAnimFire",
    "sectionType": "Weapon"
  },
  "MantisGun": {
    "displayName": "MantisGun",
    "sectionType": "Weapon"
  },
  "MantisGunE": {
    "displayName": "MantisGunE",
    "sectionType": "Weapon"
  },
  "MantisDeathWeapon": {
    "displayName": "MantisDeathWeapon",
    "sectionType": "Weapon"
  },
  "ATGUN": {
    "displayName": "ATGUN",
    "sectionType": "Weapon"
  },
  "ATGUNE": {
    "displayName": "ATGUNE",
    "sectionType": "Weapon"
  },
  "OpusGun": {
    "displayName": "OpusGun",
    "sectionType": "Weapon"
  },
  "OpusGunE": {
    "displayName": "OpusGunE",
    "sectionType": "Weapon"
  },
  "OpusGunX": {
    "displayName": "OpusGunX",
    "sectionType": "Weapon"
  },
  "OpusGunXE": {
    "displayName": "OpusGunXE",
    "sectionType": "Weapon"
  },
  "OpusGunY": {
    "displayName": "OpusGunY",
    "sectionType": "Weapon"
  },
  "OpusGunYE": {
    "displayName": "OpusGunYE",
    "sectionType": "Weapon"
  },
  "OpusGunZ": {
    "displayName": "OpusGunZ",
    "sectionType": "Weapon"
  },
  "OpusGunZE": {
    "displayName": "OpusGunZE",
    "sectionType": "Weapon"
  },
  "Robogun": {
    "displayName": "Robogun",
    "sectionType": "Weapon"
  },
  "RobogunE": {
    "displayName": "RobogunE",
    "sectionType": "Weapon"
  },
  "RobogunW": {
    "displayName": "RobogunW",
    "sectionType": "Weapon"
  },
  "RobogunWE": {
    "displayName": "RobogunWE",
    "sectionType": "Weapon"
  },
  "Robotorpedo": {
    "displayName": "Robotorpedo",
    "sectionType": "Weapon"
  },
  "RobotorpedoE": {
    "displayName": "RobotorpedoE",
    "sectionType": "Weapon"
  },
  "SunburstLaser": {
    "displayName": "SunburstLaser",
    "sectionType": "Weapon"
  },
  "SunburstBomb": {
    "displayName": "SunburstBomb",
    "sectionType": "Weapon"
  },
  "SeekerFake": {
    "displayName": "SeekerFake",
    "sectionType": "Weapon"
  },
  "CatapultWeapon": {
    "displayName": "CatapultWeapon",
    "sectionType": "Weapon"
  },
  "CatapultWeaponE": {
    "displayName": "CatapultWeaponE",
    "sectionType": "Weapon"
  },
  "CorossionB": {
    "displayName": "CorossionB",
    "sectionType": "Weapon"
  },
  "QuadMortar": {
    "displayName": "QuadMortar",
    "sectionType": "Weapon"
  },
  "QuadMortarE": {
    "displayName": "QuadMortarE",
    "sectionType": "Weapon"
  },
  "QuadMortar2": {
    "displayName": "QuadMortar2",
    "sectionType": "Weapon"
  },
  "QuadMortar2E": {
    "displayName": "QuadMortar2E",
    "sectionType": "Weapon"
  },
  "FVQuadMortar": {
    "displayName": "FVQuadMortar",
    "sectionType": "Weapon"
  },
  "FVQuadMortarE": {
    "displayName": "FVQuadMortarE",
    "sectionType": "Weapon"
  },
  "IronDragonBalls": {
    "displayName": "IronDragonBalls",
    "sectionType": "Weapon"
  },
  "IronDragonDeath": {
    "displayName": "IronDragonDeath",
    "sectionType": "Weapon"
  },
  "IronCrate": {
    "displayName": "IronCrate",
    "sectionType": "Weapon"
  },
  "DominatorParticles": {
    "displayName": "DominatorParticles",
    "sectionType": "Weapon"
  },
  "BrightFlash": {
    "displayName": "BrightFlash",
    "sectionType": "Weapon"
  },
  "Cryobase": {
    "displayName": "Cryobase",
    "sectionType": "Weapon"
  },
  "IronBlastFlash": {
    "displayName": "IronBlastFlash",
    "sectionType": "Weapon"
  },
  "IronOldFlash": {
    "displayName": "IronOldFlash",
    "sectionType": "Weapon"
  },
  "IronDeviceFlash": {
    "displayName": "IronDeviceFlash",
    "sectionType": "Weapon"
  },
  "IronOrcinusFlash": {
    "displayName": "IronOrcinusFlash",
    "sectionType": "Weapon"
  },
  "BoidmachineFlash": {
    "displayName": "BoidmachineFlash",
    "sectionType": "Weapon"
  },
  "ArtyCannon": {
    "displayName": "ArtyCannon",
    "sectionType": "Weapon"
  },
  "ArtyCannonE": {
    "displayName": "ArtyCannonE",
    "sectionType": "Weapon"
  },
  "Howitzer": {
    "displayName": "Howitzer",
    "sectionType": "Weapon"
  },
  "HowitzerE": {
    "displayName": "HowitzerE",
    "sectionType": "Weapon"
  },
  "HowitzerBeacon": {
    "displayName": "HowitzerBeacon",
    "sectionType": "Weapon"
  },
  "HowitzerBeaconE": {
    "displayName": "HowitzerBeaconE",
    "sectionType": "Weapon"
  },
  "155mm": {
    "displayName": "155mm",
    "sectionType": "Weapon"
  },
  "155mmE": {
    "displayName": "155mmE",
    "sectionType": "Weapon"
  },
  "155mmPart": {
    "displayName": "155mmPart",
    "sectionType": "Weapon"
  },
  "ASWLauncher": {
    "displayName": "ASWLauncher",
    "sectionType": "Weapon"
  },
  "SmokeCannon": {
    "displayName": "SmokeCannon",
    "sectionType": "Weapon"
  },
  "V3Launcher": {
    "displayName": "V3Launcher",
    "sectionType": "Weapon"
  },
  "LeviLauncher": {
    "displayName": "LeviLauncher",
    "sectionType": "Weapon"
  },
  "PsyBomLauncher": {
    "displayName": "PsyBomLauncher",
    "sectionType": "Weapon"
  },
  "CruiseLauncher": {
    "displayName": "CruiseLauncher",
    "sectionType": "Weapon"
  },
  "DredLauncher": {
    "displayName": "DredLauncher",
    "sectionType": "Weapon"
  },
  "MiniNukeRad": {
    "displayName": "MiniNukeRad",
    "sectionType": "Weapon"
  },
  "TopolLauncher": {
    "displayName": "TopolLauncher",
    "sectionType": "Weapon"
  },
  "DroneJump": {
    "displayName": "DroneJump",
    "sectionType": "Weapon"
  },
  "DroneScratch": {
    "displayName": "DroneScratch",
    "sectionType": "Weapon"
  },
  "DogBite": {
    "displayName": "DogBite",
    "sectionType": "Weapon"
  },
  "SpookBite": {
    "displayName": "SpookBite",
    "sectionType": "Weapon"
  },
  "AlligatorBite": {
    "displayName": "AlligatorBite",
    "sectionType": "Weapon"
  },
  "BearBite": {
    "displayName": "BearBite",
    "sectionType": "Weapon"
  },
  "ChimpBite": {
    "displayName": "ChimpBite",
    "sectionType": "Weapon"
  },
  "TRexBite": {
    "displayName": "TRexBite",
    "sectionType": "Weapon"
  },
  "TRexInfBite": {
    "displayName": "TRexInfBite",
    "sectionType": "Weapon"
  },
  "RoboTeeth": {
    "displayName": "RoboTeeth",
    "sectionType": "Weapon"
  },
  "RoboTeethE": {
    "displayName": "RoboTeethE",
    "sectionType": "Weapon"
  },
  "SHOVEL": {
    "displayName": "SHOVEL",
    "sectionType": "Weapon"
  },
  "VirtualScanner": {
    "displayName": "VirtualScanner",
    "sectionType": "Weapon"
  },
  "EngineerScanner": {
    "displayName": "EngineerScanner",
    "sectionType": "Weapon"
  },
  "TankScanner": {
    "displayName": "TankScanner",
    "sectionType": "Weapon"
  },
  "RoadrunnerChoke": {
    "displayName": "RoadrunnerChoke",
    "sectionType": "Weapon"
  },
  "RoadrunnerNerf": {
    "displayName": "RoadrunnerNerf",
    "sectionType": "Weapon"
  },
  "RoadrunnerDeath": {
    "displayName": "RoadrunnerDeath",
    "sectionType": "Weapon"
  },
  "NotADeployer": {
    "displayName": "NotADeployer",
    "sectionType": "Weapon"
  },
  "NotAWeapon": {
    "displayName": "NotAWeapon",
    "sectionType": "Weapon"
  },
  "NotAStrategy": {
    "displayName": "NotAStrategy",
    "sectionType": "Weapon"
  },
  "NotASpin": {
    "displayName": "NotASpin",
    "sectionType": "Weapon"
  },
  "NotANull": {
    "displayName": "NotANull",
    "sectionType": "Unknown"
  },
  "NotANanocoat": {
    "displayName": "NotANanocoat",
    "sectionType": "Weapon"
  },
  "NotAShield": {
    "displayName": "NotAShield",
    "sectionType": "Weapon"
  },
  "NotAnEnergy": {
    "displayName": "NotAnEnergy",
    "sectionType": "Weapon"
  },
  "NotAnEiffel": {
    "displayName": "NotAnEiffel",
    "sectionType": "Weapon"
  },
  "ReallyNotAWeapon": {
    "displayName": "ReallyNotAWeapon",
    "sectionType": "Unknown"
  },
  "NotAStealth": {
    "displayName": "NotAStealth",
    "sectionType": "Weapon"
  },
  "NotAQuad": {
    "displayName": "NotAQuad",
    "sectionType": "Weapon"
  },
  "NotARad": {
    "displayName": "NotARad",
    "sectionType": "Weapon"
  },
  "NotAMega": {
    "displayName": "NotAMega",
    "sectionType": "Weapon"
  },
  "NotASodar": {
    "displayName": "NotASodar",
    "sectionType": "Weapon"
  },
  "NotAnOrcinus": {
    "displayName": "NotAnOrcinus",
    "sectionType": "Weapon"
  },
  "NotARod": {
    "displayName": "NotARod",
    "sectionType": "Weapon"
  },
  "NotAnInhibitor": {
    "displayName": "NotAnInhibitor",
    "sectionType": "Weapon"
  },
  "NotAWarp": {
    "displayName": "NotAWarp",
    "sectionType": "Weapon"
  },
  "NotAKnightfall": {
    "displayName": "NotAKnightfall",
    "sectionType": "Weapon"
  },
  "NotACrane": {
    "displayName": "NotACrane",
    "sectionType": "Unknown"
  },
  "GeneburstWeapon": {
    "displayName": "GeneburstWeapon",
    "sectionType": "Weapon"
  },
  "NuclearPathWeapon": {
    "displayName": "NuclearPathWeapon",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon1": {
    "displayName": "BackwarpWeapon1",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon2": {
    "displayName": "BackwarpWeapon2",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon3": {
    "displayName": "BackwarpWeapon3",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon4": {
    "displayName": "BackwarpWeapon4",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon5": {
    "displayName": "BackwarpWeapon5",
    "sectionType": "Weapon"
  },
  "DisruptorField": {
    "displayName": "DisruptorField",
    "sectionType": "Weapon"
  },
  "DisruptorFieldReal": {
    "displayName": "DisruptorFieldReal",
    "sectionType": "Weapon"
  },
  "StealthGenerator": {
    "displayName": "StealthGenerator",
    "sectionType": "Weapon"
  },
  "StealthGeneratorAI": {
    "displayName": "StealthGeneratorAI",
    "sectionType": "Weapon"
  },
  "StealthGeneratorReal": {
    "displayName": "StealthGeneratorReal",
    "sectionType": "Weapon"
  },
  "HazequadGenerator": {
    "displayName": "HazequadGenerator",
    "sectionType": "Weapon"
  },
  "HazequadGeneratorReal": {
    "displayName": "HazequadGeneratorReal",
    "sectionType": "Weapon"
  },
  "SodarBoost": {
    "displayName": "SodarBoost",
    "sectionType": "Weapon"
  },
  "SodarBoostReal": {
    "displayName": "SodarBoostReal",
    "sectionType": "Weapon"
  },
  "Megaarena": {
    "displayName": "Megaarena",
    "sectionType": "Weapon"
  },
  "MegaarenaReal": {
    "displayName": "MegaarenaReal",
    "sectionType": "Weapon"
  },
  "LightningRod": {
    "displayName": "LightningRod",
    "sectionType": "Weapon"
  },
  "LightningRodReal": {
    "displayName": "LightningRodReal",
    "sectionType": "Weapon"
  },
  "TankBunkerBuffReal": {
    "displayName": "TankBunkerBuffReal",
    "sectionType": "Weapon"
  },
  "DefenseBuff": {
    "displayName": "DefenseBuff",
    "sectionType": "Weapon"
  },
  "DefenseBuffReal": {
    "displayName": "DefenseBuffReal",
    "sectionType": "Weapon"
  },
  "Hypergate": {
    "displayName": "Hypergate",
    "sectionType": "Weapon"
  },
  "HypergateReal": {
    "displayName": "HypergateReal",
    "sectionType": "Weapon"
  },
  "ShieldGenerator": {
    "displayName": "ShieldGenerator",
    "sectionType": "Weapon"
  },
  "ShieldGeneratorReal": {
    "displayName": "ShieldGeneratorReal",
    "sectionType": "Weapon"
  },
  "StructureBuff": {
    "displayName": "StructureBuff",
    "sectionType": "Weapon"
  },
  "StructureBuffReal": {
    "displayName": "StructureBuffReal",
    "sectionType": "Weapon"
  },
  "SpinGenerator": {
    "displayName": "SpinGenerator",
    "sectionType": "Weapon"
  },
  "SpinGeneratorReal": {
    "displayName": "SpinGeneratorReal",
    "sectionType": "Weapon"
  },
  "GSpinGenerator": {
    "displayName": "GSpinGenerator",
    "sectionType": "Weapon"
  },
  "GSpinGeneratorReal": {
    "displayName": "GSpinGeneratorReal",
    "sectionType": "Weapon"
  },
  "GSpinGeneratorReal2": {
    "displayName": "GSpinGeneratorReal2",
    "sectionType": "Weapon"
  },
  "SquidPunch": {
    "displayName": "SquidPunch",
    "sectionType": "Weapon"
  },
  "SquidPunchE": {
    "displayName": "SquidPunchE",
    "sectionType": "Weapon"
  },
  "HornetLauncher": {
    "displayName": "HornetLauncher",
    "sectionType": "Weapon"
  },
  "SnakeLauncher": {
    "displayName": "SnakeLauncher",
    "sectionType": "Weapon"
  },
  "GehennaLauncher": {
    "displayName": "GehennaLauncher",
    "sectionType": "Weapon"
  },
  "SuperGehennaLauncher": {
    "displayName": "SuperGehennaLauncher",
    "sectionType": "Weapon"
  },
  "VentrexLauncher": {
    "displayName": "VentrexLauncher",
    "sectionType": "Weapon"
  },
  "JackalZap": {
    "displayName": "JackalZap",
    "sectionType": "Weapon"
  },
  "JackalZapE": {
    "displayName": "JackalZapE",
    "sectionType": "Weapon"
  },
  "EmitterZap": {
    "displayName": "EmitterZap",
    "sectionType": "Weapon"
  },
  "EmitterZapE": {
    "displayName": "EmitterZapE",
    "sectionType": "Weapon"
  },
  "RepairBullet": {
    "displayName": "RepairBullet",
    "sectionType": "Weapon"
  },
  "DroneRepairBullet": {
    "displayName": "DroneRepairBullet",
    "sectionType": "Weapon"
  },
  "MiteRepairBullet": {
    "displayName": "MiteRepairBullet",
    "sectionType": "Weapon"
  },
  "RejuvenationBullet": {
    "displayName": "RejuvenationBullet",
    "sectionType": "Weapon"
  },
  "Heal": {
    "displayName": "Heal",
    "sectionType": "Weapon"
  },
  "Heal2": {
    "displayName": "Heal2",
    "sectionType": "Weapon"
  },
  "HealBullet": {
    "displayName": "HealBullet",
    "sectionType": "Weapon"
  },
  "Punch": {
    "displayName": "Punch",
    "sectionType": "Weapon"
  },
  "Smash": {
    "displayName": "Smash",
    "sectionType": "Weapon"
  },
  "FVTankCannon": {
    "displayName": "FVTankCannon",
    "sectionType": "Weapon"
  },
  "FVTankCannonE": {
    "displayName": "FVTankCannonE",
    "sectionType": "Weapon"
  },
  "BulletPunch": {
    "displayName": "BulletPunch",
    "sectionType": "Unknown"
  },
  "SuperSmash": {
    "displayName": "SuperSmash",
    "sectionType": "Unknown"
  },
  "Mummypunch": {
    "displayName": "Mummypunch",
    "sectionType": "Weapon"
  },
  "Mummysmash": {
    "displayName": "Mummysmash",
    "sectionType": "Weapon"
  },
  "EMPBeam": {
    "displayName": "EMPBeam",
    "sectionType": "Weapon"
  },
  "BikeBeamWeapon": {
    "displayName": "BikeBeamWeapon",
    "sectionType": "Weapon"
  },
  "MobileIronCurtain": {
    "displayName": "MobileIronCurtain",
    "sectionType": "Weapon"
  },
  "RadBeamWeapon": {
    "displayName": "RadBeamWeapon",
    "sectionType": "Weapon"
  },
  "RadBeamWeaponE": {
    "displayName": "RadBeamWeaponE",
    "sectionType": "Weapon"
  },
  "CRRadBeamWeapon": {
    "displayName": "CRRadBeamWeapon",
    "sectionType": "Weapon"
  },
  "CRRadBeamWeaponE": {
    "displayName": "CRRadBeamWeaponE",
    "sectionType": "Weapon"
  },
  "RadEruptionWeapon": {
    "displayName": "RadEruptionWeapon",
    "sectionType": "Weapon"
  },
  "RadEruptionWeaponE": {
    "displayName": "RadEruptionWeaponE",
    "sectionType": "Weapon"
  },
  "RadEradWeapon": {
    "displayName": "RadEradWeapon",
    "sectionType": "Weapon"
  },
  "RadEradWeaponE": {
    "displayName": "RadEradWeaponE",
    "sectionType": "Weapon"
  },
  "RadEradicationWeapon": {
    "displayName": "RadEradicationWeapon",
    "sectionType": "Weapon"
  },
  "RadEradicationWeaponE": {
    "displayName": "RadEradicationWeaponE",
    "sectionType": "Weapon"
  },
  "KrukovRadBeam": {
    "displayName": "KrukovRadBeam",
    "sectionType": "Weapon"
  },
  "KrukovSword": {
    "displayName": "KrukovSword",
    "sectionType": "Weapon"
  },
  "KrukovSwordFrag": {
    "displayName": "KrukovSwordFrag",
    "sectionType": "Weapon"
  },
  "PrometheusBetaCharge": {
    "displayName": "PrometheusBetaCharge",
    "sectionType": "Weapon"
  },
  "PrometheusBetaCharge2": {
    "displayName": "PrometheusBetaCharge2",
    "sectionType": "Weapon"
  },
  "PrometheusBetaBlast": {
    "displayName": "PrometheusBetaBlast",
    "sectionType": "Weapon"
  },
  "ReaperCannon": {
    "displayName": "ReaperCannon",
    "sectionType": "Weapon"
  },
  "ReaperDeathWeapon": {
    "displayName": "ReaperDeathWeapon",
    "sectionType": "Weapon"
  },
  "SpecialRad": {
    "displayName": "SpecialRad",
    "sectionType": "Weapon"
  },
  "GrumbleFake": {
    "displayName": "GrumbleFake",
    "sectionType": "Weapon"
  },
  "GrumbleRocket": {
    "displayName": "GrumbleRocket",
    "sectionType": "Weapon"
  },
  "BlackoutMissileWeapon": {
    "displayName": "BlackoutMissileWeapon",
    "sectionType": "Weapon"
  },
  "BlackoutB": {
    "displayName": "BlackoutB",
    "sectionType": "Weapon"
  },
  "Wallbuster": {
    "displayName": "Wallbuster",
    "sectionType": "Weapon"
  },
  "AtomheartDeath": {
    "displayName": "AtomheartDeath",
    "sectionType": "Weapon"
  },
  "YunruEMP": {
    "displayName": "YunruEMP",
    "sectionType": "Weapon"
  },
  "FVYunruEMP": {
    "displayName": "FVYunruEMP",
    "sectionType": "Weapon"
  },
  "EarthBreaker": {
    "displayName": "EarthBreaker",
    "sectionType": "Weapon"
  },
  "EarthBreakerE": {
    "displayName": "EarthBreakerE",
    "sectionType": "Weapon"
  },
  "UnderBlade": {
    "displayName": "UnderBlade",
    "sectionType": "Weapon"
  },
  "FVUnderBlade": {
    "displayName": "FVUnderBlade",
    "sectionType": "Weapon"
  },
  "Undermine": {
    "displayName": "Undermine",
    "sectionType": "Weapon"
  },
  "UCUndermine": {
    "displayName": "UCUndermine",
    "sectionType": "Weapon"
  },
  "MagnetShift": {
    "displayName": "MagnetShift",
    "sectionType": "Weapon"
  },
  "BeamUnitScanner": {
    "displayName": "BeamUnitScanner",
    "sectionType": "Weapon"
  },
  "FakeDarts": {
    "displayName": "FakeDarts",
    "sectionType": "Weapon"
  },
  "FVFakeDarts": {
    "displayName": "FVFakeDarts",
    "sectionType": "Weapon"
  },
  "PsychicDarts": {
    "displayName": "PsychicDarts",
    "sectionType": "Weapon"
  },
  "FVPsychicDarts": {
    "displayName": "FVPsychicDarts",
    "sectionType": "Weapon"
  },
  "AntiGravity": {
    "displayName": "AntiGravity",
    "sectionType": "Weapon"
  },
  "AntiGravityE": {
    "displayName": "AntiGravityE",
    "sectionType": "Weapon"
  },
  "ZorbAttack": {
    "displayName": "ZorbAttack",
    "sectionType": "Weapon"
  },
  "FVZorbAttack": {
    "displayName": "FVZorbAttack",
    "sectionType": "Weapon"
  },
  "ZorbLongAttack": {
    "displayName": "ZorbLongAttack",
    "sectionType": "Weapon"
  },
  "ZorbTractorWind": {
    "displayName": "ZorbTractorWind",
    "sectionType": "Weapon"
  },
  "FVZorbTractorWind": {
    "displayName": "FVZorbTractorWind",
    "sectionType": "Weapon"
  },
  "YuriMonolithShot": {
    "displayName": "YuriMonolithShot",
    "sectionType": "Weapon"
  },
  "YuriMonolithShotE": {
    "displayName": "YuriMonolithShotE",
    "sectionType": "Weapon"
  },
  "YuriBustShot": {
    "displayName": "YuriBustShot",
    "sectionType": "Weapon"
  },
  "YuriBustShotE": {
    "displayName": "YuriBustShotE",
    "sectionType": "Weapon"
  },
  "MarauderRailgun": {
    "displayName": "MarauderRailgun",
    "sectionType": "Weapon"
  },
  "MarauderRailgunE": {
    "displayName": "MarauderRailgunE",
    "sectionType": "Weapon"
  },
  "InfernoRailgun": {
    "displayName": "InfernoRailgun",
    "sectionType": "Weapon"
  },
  "InfernoRailgunE": {
    "displayName": "InfernoRailgunE",
    "sectionType": "Weapon"
  },
  "InfernoRailgunBlue": {
    "displayName": "InfernoRailgunBlue",
    "sectionType": "Weapon"
  },
  "InfernoRailgunBlueE": {
    "displayName": "InfernoRailgunBlueE",
    "sectionType": "Weapon"
  },
  "AntaresBeam": {
    "displayName": "AntaresBeam",
    "sectionType": "Weapon"
  },
  "AntaresBeamE": {
    "displayName": "AntaresBeamE",
    "sectionType": "Weapon"
  },
  "AntaresBeamBlue": {
    "displayName": "AntaresBeamBlue",
    "sectionType": "Weapon"
  },
  "AntaresBeamBlueE": {
    "displayName": "AntaresBeamBlueE",
    "sectionType": "Weapon"
  },
  "MiniAntaresBeam": {
    "displayName": "MiniAntaresBeam",
    "sectionType": "Weapon"
  },
  "MiniAntaresBeamE": {
    "displayName": "MiniAntaresBeamE",
    "sectionType": "Weapon"
  },
  "MayanPrism": {
    "displayName": "MayanPrism",
    "sectionType": "Weapon"
  },
  "ElectricBolt": {
    "displayName": "ElectricBolt",
    "sectionType": "Weapon"
  },
  "ElectricBoltE": {
    "displayName": "ElectricBoltE",
    "sectionType": "Weapon"
  },
  "CRElectricBolt": {
    "displayName": "CRElectricBolt",
    "sectionType": "Weapon"
  },
  "CRElectricBoltE": {
    "displayName": "CRElectricBoltE",
    "sectionType": "Weapon"
  },
  "AssaultBolt": {
    "displayName": "AssaultBolt",
    "sectionType": "Weapon"
  },
  "TeslaFragment": {
    "displayName": "TeslaFragment",
    "sectionType": "Weapon"
  },
  "ShockBolt": {
    "displayName": "ShockBolt",
    "sectionType": "Weapon"
  },
  "ShockBoltE": {
    "displayName": "ShockBoltE",
    "sectionType": "Weapon"
  },
  "TeslaLittleFragment": {
    "displayName": "TeslaLittleFragment",
    "sectionType": "Weapon"
  },
  "SpaceComBeam": {
    "displayName": "SpaceComBeam",
    "sectionType": "Weapon"
  },
  "SpaceComEMP": {
    "displayName": "SpaceComEMP",
    "sectionType": "Weapon"
  },
  "VolkovBomb": {
    "displayName": "VolkovBomb",
    "sectionType": "Weapon"
  },
  "VolkovBombE": {
    "displayName": "VolkovBombE",
    "sectionType": "Weapon"
  },
  "VolkovBolt": {
    "displayName": "VolkovBolt",
    "sectionType": "Weapon"
  },
  "VolkovBoltE": {
    "displayName": "VolkovBoltE",
    "sectionType": "Weapon"
  },
  "FVVolkovBolt": {
    "displayName": "FVVolkovBolt",
    "sectionType": "Weapon"
  },
  "FVVolkovBoltE": {
    "displayName": "FVVolkovBoltE",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment": {
    "displayName": "VolkovBoltFragment",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment2": {
    "displayName": "VolkovBoltFragment2",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment3": {
    "displayName": "VolkovBoltFragment3",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragmentE": {
    "displayName": "VolkovBoltFragmentE",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment2E": {
    "displayName": "VolkovBoltFragment2E",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment3E": {
    "displayName": "VolkovBoltFragment3E",
    "sectionType": "Weapon"
  },
  "VolkovBombBlue": {
    "displayName": "VolkovBombBlue",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlue": {
    "displayName": "VolkovBoltBlue",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlueFragment": {
    "displayName": "VolkovBoltBlueFragment",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlueFragment2": {
    "displayName": "VolkovBoltBlueFragment2",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlueFragment3": {
    "displayName": "VolkovBoltBlueFragment3",
    "sectionType": "Weapon"
  },
  "SammyGun": {
    "displayName": "SammyGun",
    "sectionType": "Weapon"
  },
  "SammyGunE": {
    "displayName": "SammyGunE",
    "sectionType": "Weapon"
  },
  "FlintPistola": {
    "displayName": "FlintPistola",
    "sectionType": "Weapon"
  },
  "FlintPistolaE": {
    "displayName": "FlintPistolaE",
    "sectionType": "Weapon"
  },
  "FlintDynamite": {
    "displayName": "FlintDynamite",
    "sectionType": "Weapon"
  },
  "TERMIGUN": {
    "displayName": "TERMIGUN",
    "sectionType": "Weapon"
  },
  "TERMIGUNE": {
    "displayName": "TERMIGUNE",
    "sectionType": "Weapon"
  },
  "CyborgGrenade": {
    "displayName": "CyborgGrenade",
    "sectionType": "Weapon"
  },
  "CyborgGrenadeE": {
    "displayName": "CyborgGrenadeE",
    "sectionType": "Weapon"
  },
  "TankEMP": {
    "displayName": "TankEMP",
    "sectionType": "Weapon"
  },
  "TankBolt": {
    "displayName": "TankBolt",
    "sectionType": "Weapon"
  },
  "TankBoltE": {
    "displayName": "TankBoltE",
    "sectionType": "Weapon"
  },
  "PerunBolt": {
    "displayName": "PerunBolt",
    "sectionType": "Weapon"
  },
  "PerunBoltE": {
    "displayName": "PerunBoltE",
    "sectionType": "Weapon"
  },
  "PerunCharge": {
    "displayName": "PerunCharge",
    "sectionType": "Weapon"
  },
  "Overcharge": {
    "displayName": "Overcharge",
    "sectionType": "Weapon"
  },
  "GravitronField": {
    "displayName": "GravitronField",
    "sectionType": "Weapon"
  },
  "GravitronAnim": {
    "displayName": "GravitronAnim",
    "sectionType": "Weapon"
  },
  "RuinerRay": {
    "displayName": "RuinerRay",
    "sectionType": "Weapon"
  },
  "RuinerEffect": {
    "displayName": "RuinerEffect",
    "sectionType": "Weapon"
  },
  "MobileGrinderRig": {
    "displayName": "MobileGrinderRig",
    "sectionType": "Weapon"
  },
  "WarRigDrills": {
    "displayName": "WarRigDrills",
    "sectionType": "Weapon"
  },
  "WarRigRay": {
    "displayName": "WarRigRay",
    "sectionType": "Weapon"
  },
  "SonicRay": {
    "displayName": "SonicRay",
    "sectionType": "Weapon"
  },
  "DSonicRay": {
    "displayName": "DSonicRay",
    "sectionType": "Weapon"
  },
  "WolfCannon": {
    "displayName": "WolfCannon",
    "sectionType": "Weapon"
  },
  "WolfCannonE": {
    "displayName": "WolfCannonE",
    "sectionType": "Weapon"
  },
  "WolfStrike": {
    "displayName": "WolfStrike",
    "sectionType": "Weapon"
  },
  "WolfStrikeE": {
    "displayName": "WolfStrikeE",
    "sectionType": "Weapon"
  },
  "ConfuseRifle": {
    "displayName": "ConfuseRifle",
    "sectionType": "Weapon"
  },
  "ConfuseRifleAA": {
    "displayName": "ConfuseRifleAA",
    "sectionType": "Weapon"
  },
  "FVConfuseRifle": {
    "displayName": "FVConfuseRifle",
    "sectionType": "Weapon"
  },
  "ChaosTouchEffect": {
    "displayName": "ChaosTouchEffect",
    "sectionType": "Weapon"
  },
  "ConfuseRay": {
    "displayName": "ConfuseRay",
    "sectionType": "Weapon"
  },
  "ConfuseFlare": {
    "displayName": "ConfuseFlare",
    "sectionType": "Weapon"
  },
  "ConfuseFlareFrag": {
    "displayName": "ConfuseFlareFrag",
    "sectionType": "Weapon"
  },
  "ShadrayWave": {
    "displayName": "ShadrayWave",
    "sectionType": "Weapon"
  },
  "ShadrayWaveE": {
    "displayName": "ShadrayWaveE",
    "sectionType": "Weapon"
  },
  "ShadrayWaveAA": {
    "displayName": "ShadrayWaveAA",
    "sectionType": "Weapon"
  },
  "ShadrayWaveAAE": {
    "displayName": "ShadrayWaveAAE",
    "sectionType": "Weapon"
  },
  "ShadrayFlash": {
    "displayName": "ShadrayFlash",
    "sectionType": "Weapon"
  },
  "SeitaadEMPCannon": {
    "displayName": "SeitaadEMPCannon",
    "sectionType": "Weapon"
  },
  "SeitaadMissile": {
    "displayName": "SeitaadMissile",
    "sectionType": "Weapon"
  },
  "SeitaadMissileFrag": {
    "displayName": "SeitaadMissileFrag",
    "sectionType": "Weapon"
  },
  "Devourer": {
    "displayName": "Devourer",
    "sectionType": "Weapon"
  },
  "ArchelonAttack": {
    "displayName": "ArchelonAttack",
    "sectionType": "Weapon"
  },
  "HuntressAttack": {
    "displayName": "HuntressAttack",
    "sectionType": "Weapon"
  },
  "FVHuntressAttack": {
    "displayName": "FVHuntressAttack",
    "sectionType": "Weapon"
  },
  "BuratinoStrike": {
    "displayName": "BuratinoStrike",
    "sectionType": "Weapon"
  },
  "BuratinoStrikeE": {
    "displayName": "BuratinoStrikeE",
    "sectionType": "Weapon"
  },
  "BuratinoStrikeSpread": {
    "displayName": "BuratinoStrikeSpread",
    "sectionType": "Weapon"
  },
  "BuratinoStrikeSpreadE": {
    "displayName": "BuratinoStrikeSpreadE",
    "sectionType": "Weapon"
  },
  "SpeederStrike": {
    "displayName": "SpeederStrike",
    "sectionType": "Weapon"
  },
  "SpeederStrikeE": {
    "displayName": "SpeederStrikeE",
    "sectionType": "Weapon"
  },
  "SpeederStrikeB": {
    "displayName": "SpeederStrikeB",
    "sectionType": "Weapon"
  },
  "SpeederStrikeBE": {
    "displayName": "SpeederStrikeBE",
    "sectionType": "Weapon"
  },
  "HybridBolt": {
    "displayName": "HybridBolt",
    "sectionType": "Weapon"
  },
  "HybridBoltE": {
    "displayName": "HybridBoltE",
    "sectionType": "Weapon"
  },
  "HybridBoltSupport": {
    "displayName": "HybridBoltSupport",
    "sectionType": "Weapon"
  },
  "CoilBolt": {
    "displayName": "CoilBolt",
    "sectionType": "Weapon"
  },
  "CoilBoltE": {
    "displayName": "CoilBoltE",
    "sectionType": "Weapon"
  },
  "OPCoilBolt": {
    "displayName": "OPCoilBolt",
    "sectionType": "Weapon"
  },
  "OPCoilBoltE": {
    "displayName": "OPCoilBoltE",
    "sectionType": "Weapon"
  },
  "OldCoilBolt": {
    "displayName": "OldCoilBolt",
    "sectionType": "Weapon"
  },
  "EiffelBolt": {
    "displayName": "EiffelBolt",
    "sectionType": "Weapon"
  },
  "DefuseKit": {
    "displayName": "DefuseKit",
    "sectionType": "Weapon"
  },
  "TriggerShaker": {
    "displayName": "TriggerShaker",
    "sectionType": "Weapon"
  },
  "NukePayload": {
    "displayName": "NukePayload",
    "sectionType": "Weapon"
  },
  "NuclearReactorDeath": {
    "displayName": "NuclearReactorDeath",
    "sectionType": "Weapon"
  },
  "MIDASDeath": {
    "displayName": "MIDASDeath",
    "sectionType": "Weapon"
  },
  "SeismicDeath": {
    "displayName": "SeismicDeath",
    "sectionType": "Weapon"
  },
  "NukeCarrier": {
    "displayName": "NukeCarrier",
    "sectionType": "Weapon"
  },
  "MissileCarrier": {
    "displayName": "MissileCarrier",
    "sectionType": "Weapon"
  },
  "FlashCarrier": {
    "displayName": "FlashCarrier",
    "sectionType": "Weapon"
  },
  "FlashPayload": {
    "displayName": "FlashPayload",
    "sectionType": "Weapon"
  },
  "MissilePayload": {
    "displayName": "MissilePayload",
    "sectionType": "Weapon"
  },
  "EMPPayload": {
    "displayName": "EMPPayload",
    "sectionType": "Weapon"
  },
  "EMPPayloadB": {
    "displayName": "EMPPayloadB",
    "sectionType": "Weapon"
  },
  "Pistola": {
    "displayName": "Pistola",
    "sectionType": "Weapon"
  },
  "TechPistola": {
    "displayName": "TechPistola",
    "sectionType": "Weapon"
  },
  "RiotGun": {
    "displayName": "RiotGun",
    "sectionType": "Weapon"
  },
  "RiotSuppress": {
    "displayName": "RiotSuppress",
    "sectionType": "Weapon"
  },
  "RiotGrenade": {
    "displayName": "RiotGrenade",
    "sectionType": "Weapon"
  },
  "RiotGrenadeGarrison": {
    "displayName": "RiotGrenadeGarrison",
    "sectionType": "Weapon"
  },
  "FVRiotGrenade": {
    "displayName": "FVRiotGrenade",
    "sectionType": "Weapon"
  },
  "Cryobeam1": {
    "displayName": "Cryobeam1",
    "sectionType": "Weapon"
  },
  "Cryobeam2": {
    "displayName": "Cryobeam2",
    "sectionType": "Weapon"
  },
  "Cryobeam3": {
    "displayName": "Cryobeam3",
    "sectionType": "Weapon"
  },
  "Cryobeam4": {
    "displayName": "Cryobeam4",
    "sectionType": "Weapon"
  },
  "CryobeamIAnimA": {
    "displayName": "CryobeamIAnimA",
    "sectionType": "Weapon"
  },
  "Cryobeam5": {
    "displayName": "Cryobeam5",
    "sectionType": "Weapon"
  },
  "CryobeamIVAnimA": {
    "displayName": "CryobeamIVAnimA",
    "sectionType": "Weapon"
  },
  "Cryobeam6": {
    "displayName": "Cryobeam6",
    "sectionType": "Weapon"
  },
  "Cryobeam6AnimA": {
    "displayName": "Cryobeam6AnimA",
    "sectionType": "Weapon"
  },
  "Cryobeam6AnimB": {
    "displayName": "Cryobeam6AnimB",
    "sectionType": "Weapon"
  },
  "Cryobeam6AnimC": {
    "displayName": "Cryobeam6AnimC",
    "sectionType": "Weapon"
  },
  "Cryobeam1AI": {
    "displayName": "Cryobeam1AI",
    "sectionType": "Weapon"
  },
  "Cryobeam2AI": {
    "displayName": "Cryobeam2AI",
    "sectionType": "Weapon"
  },
  "Cryobeam3AI": {
    "displayName": "Cryobeam3AI",
    "sectionType": "Weapon"
  },
  "Cryobeam4AI": {
    "displayName": "Cryobeam4AI",
    "sectionType": "Weapon"
  },
  "Cryobeam5AI": {
    "displayName": "Cryobeam5AI",
    "sectionType": "Weapon"
  },
  "Cryobeam6AI": {
    "displayName": "Cryobeam6AI",
    "sectionType": "Weapon"
  },
  "WarpnodeBomb": {
    "displayName": "WarpnodeBomb",
    "sectionType": "Weapon"
  },
  "UltraMinerBomb": {
    "displayName": "UltraMinerBomb",
    "sectionType": "Weapon"
  },
  "SuppressorPart": {
    "displayName": "SuppressorPart",
    "sectionType": "Weapon"
  },
  "SuppressorBomb": {
    "displayName": "SuppressorBomb",
    "sectionType": "Weapon"
  },
  "FVSuppressorBomb": {
    "displayName": "FVSuppressorBomb",
    "sectionType": "Weapon"
  },
  "SuppressorBombIn": {
    "displayName": "SuppressorBombIn",
    "sectionType": "Weapon"
  },
  "HoverGrenade": {
    "displayName": "HoverGrenade",
    "sectionType": "Weapon"
  },
  "HoverGrenadeE": {
    "displayName": "HoverGrenadeE",
    "sectionType": "Weapon"
  },
  "FVHoverGrenade": {
    "displayName": "FVHoverGrenade",
    "sectionType": "Weapon"
  },
  "FVHoverGrenadeE": {
    "displayName": "FVHoverGrenadeE",
    "sectionType": "Weapon"
  },
  "MutationRailgun": {
    "displayName": "MutationRailgun",
    "sectionType": "Weapon"
  },
  "MutationRailgunE": {
    "displayName": "MutationRailgunE",
    "sectionType": "Weapon"
  },
  "MutationClairFix": {
    "displayName": "MutationClairFix",
    "sectionType": "Weapon"
  },
  "FVMutationRailgun": {
    "displayName": "FVMutationRailgun",
    "sectionType": "Weapon"
  },
  "FVMutationRailgunE": {
    "displayName": "FVMutationRailgunE",
    "sectionType": "Weapon"
  },
  "MindControl": {
    "displayName": "MindControl",
    "sectionType": "Weapon"
  },
  "MindControlE": {
    "displayName": "MindControlE",
    "sectionType": "Weapon"
  },
  "DybbukMindControl": {
    "displayName": "DybbukMindControl",
    "sectionType": "Weapon"
  },
  "DybbukMindControlE": {
    "displayName": "DybbukMindControlE",
    "sectionType": "Unknown"
  },
  "SuperMindControl": {
    "displayName": "SuperMindControl",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTank": {
    "displayName": "MultipleMindControlTank",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTankE": {
    "displayName": "MultipleMindControlTankE",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTower": {
    "displayName": "MultipleMindControlTower",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTowE": {
    "displayName": "MultipleMindControlTowE",
    "sectionType": "Weapon"
  },
  "PsiWave": {
    "displayName": "PsiWave",
    "sectionType": "Weapon"
  },
  "SuperPsiWave": {
    "displayName": "SuperPsiWave",
    "sectionType": "Weapon"
  },
  "CRMindBlast": {
    "displayName": "CRMindBlast",
    "sectionType": "Weapon"
  },
  "CRSuperMindBlast": {
    "displayName": "CRSuperMindBlast",
    "sectionType": "Weapon"
  },
  "RepulsorWeapon": {
    "displayName": "RepulsorWeapon",
    "sectionType": "Weapon"
  },
  "RepulsorEffect": {
    "displayName": "RepulsorEffect",
    "sectionType": "Weapon"
  },
  "FVRepulsorWeapon": {
    "displayName": "FVRepulsorWeapon",
    "sectionType": "Weapon"
  },
  "ArsonistWeapon": {
    "displayName": "ArsonistWeapon",
    "sectionType": "Weapon"
  },
  "FVArsonistWeapon": {
    "displayName": "FVArsonistWeapon",
    "sectionType": "Weapon"
  },
  "JaguarPilotBomb": {
    "displayName": "JaguarPilotBomb",
    "sectionType": "Weapon"
  },
  "FVPilotBomb": {
    "displayName": "FVPilotBomb",
    "sectionType": "Weapon"
  },
  "IvanBomber": {
    "displayName": "IvanBomber",
    "sectionType": "Weapon"
  },
  "IvanBomberE": {
    "displayName": "IvanBomberE",
    "sectionType": "Weapon"
  },
  "FVIvanBomber": {
    "displayName": "FVIvanBomber",
    "sectionType": "Weapon"
  },
  "FVIvanBomberE": {
    "displayName": "FVIvanBomberE",
    "sectionType": "Weapon"
  },
  "IvanDeath": {
    "displayName": "IvanDeath",
    "sectionType": "Weapon"
  },
  "SaboteurBomb": {
    "displayName": "SaboteurBomb",
    "sectionType": "Weapon"
  },
  "SaboteurDummy": {
    "displayName": "SaboteurDummy",
    "sectionType": "Weapon"
  },
  "BridgeKiller": {
    "displayName": "BridgeKiller",
    "sectionType": "Weapon"
  },
  "BridgeKillerClair": {
    "displayName": "BridgeKillerClair",
    "sectionType": "Weapon"
  },
  "MakeupKit": {
    "displayName": "MakeupKit",
    "sectionType": "Weapon"
  },
  "MirageGun": {
    "displayName": "MirageGun",
    "sectionType": "Weapon"
  },
  "MirageGunE": {
    "displayName": "MirageGunE",
    "sectionType": "Weapon"
  },
  "TankMakeupKit": {
    "displayName": "TankMakeupKit",
    "sectionType": "Weapon"
  },
  "SiegfriedCannon": {
    "displayName": "SiegfriedCannon",
    "sectionType": "Weapon"
  },
  "SiegfriedCannonE": {
    "displayName": "SiegfriedCannonE",
    "sectionType": "Weapon"
  },
  "ChronoFreeze": {
    "displayName": "ChronoFreeze",
    "sectionType": "Weapon"
  },
  "ChronoFreezeE": {
    "displayName": "ChronoFreezeE",
    "sectionType": "Weapon"
  },
  "HammerWeapon": {
    "displayName": "HammerWeapon",
    "sectionType": "Weapon"
  },
  "ArtilleryBunkerWeapon": {
    "displayName": "ArtilleryBunkerWeapon",
    "sectionType": "Weapon"
  },
  "ArtilleryBunkerWeaponE": {
    "displayName": "ArtilleryBunkerWeaponE",
    "sectionType": "Weapon"
  },
  "NeonwaspCutter": {
    "displayName": "NeonwaspCutter",
    "sectionType": "Weapon"
  },
  "RamWeldCutter": {
    "displayName": "RamWeldCutter",
    "sectionType": "Weapon"
  },
  "RamHackArena": {
    "displayName": "RamHackArena",
    "sectionType": "Weapon"
  },
  "RamHackArenaB": {
    "displayName": "RamHackArenaB",
    "sectionType": "Weapon"
  },
  "NeutralizerCutter": {
    "displayName": "NeutralizerCutter",
    "sectionType": "Weapon"
  },
  "GrandCannonWeapon": {
    "displayName": "GrandCannonWeapon",
    "sectionType": "Weapon"
  },
  "GrandCannonWeaponE": {
    "displayName": "GrandCannonWeaponE",
    "sectionType": "Weapon"
  },
  "GrandCannonPart": {
    "displayName": "GrandCannonPart",
    "sectionType": "Weapon"
  },
  "CenturionCannon": {
    "displayName": "CenturionCannon",
    "sectionType": "Weapon"
  },
  "CenturionCannonE": {
    "displayName": "CenturionCannonE",
    "sectionType": "Weapon"
  },
  "CenturionMissiles": {
    "displayName": "CenturionMissiles",
    "sectionType": "Weapon"
  },
  "CenturionMissilesE": {
    "displayName": "CenturionMissilesE",
    "sectionType": "Weapon"
  },
  "FlakFake": {
    "displayName": "FlakFake",
    "sectionType": "Weapon"
  },
  "FlakWeapon": {
    "displayName": "FlakWeapon",
    "sectionType": "Weapon"
  },
  "FlakGuyGun": {
    "displayName": "FlakGuyGun",
    "sectionType": "Weapon"
  },
  "FlakGuyGunE": {
    "displayName": "FlakGuyGunE",
    "sectionType": "Weapon"
  },
  "UCFlakGuyGun": {
    "displayName": "UCFlakGuyGun",
    "sectionType": "Weapon"
  },
  "FlakGuyAAGun": {
    "displayName": "FlakGuyAAGun",
    "sectionType": "Weapon"
  },
  "FVFlakGuyAAGun": {
    "displayName": "FVFlakGuyAAGun",
    "sectionType": "Weapon"
  },
  "HalftrackGun": {
    "displayName": "HalftrackGun",
    "sectionType": "Weapon"
  },
  "HalftrackGunE": {
    "displayName": "HalftrackGunE",
    "sectionType": "Weapon"
  },
  "HalftrackGunX": {
    "displayName": "HalftrackGunX",
    "sectionType": "Weapon"
  },
  "HalftrackGunXE": {
    "displayName": "HalftrackGunXE",
    "sectionType": "Weapon"
  },
  "FlakTrackAAGun": {
    "displayName": "FlakTrackAAGun",
    "sectionType": "Weapon"
  },
  "ZubrFake": {
    "displayName": "ZubrFake",
    "sectionType": "Weapon"
  },
  "ZubrGun": {
    "displayName": "ZubrGun",
    "sectionType": "Weapon"
  },
  "SeawolfCannon": {
    "displayName": "SeawolfCannon",
    "sectionType": "Weapon"
  },
  "SeawolfCannonE": {
    "displayName": "SeawolfCannonE",
    "sectionType": "Weapon"
  },
  "SeawolfAAGun": {
    "displayName": "SeawolfAAGun",
    "sectionType": "Weapon"
  },
  "Lunarblaster": {
    "displayName": "Lunarblaster",
    "sectionType": "Weapon"
  },
  "DiskLaser": {
    "displayName": "DiskLaser",
    "sectionType": "Weapon"
  },
  "DiskLaserE": {
    "displayName": "DiskLaserE",
    "sectionType": "Weapon"
  },
  "DiskDrain": {
    "displayName": "DiskDrain",
    "sectionType": "Weapon"
  },
  "SalamanderBow": {
    "displayName": "SalamanderBow",
    "sectionType": "Weapon"
  },
  "SalamanderBowAA": {
    "displayName": "SalamanderBowAA",
    "sectionType": "Weapon"
  },
  "SalamanderBeam": {
    "displayName": "SalamanderBeam",
    "sectionType": "Weapon"
  },
  "SalamanderBeamAA": {
    "displayName": "SalamanderBeamAA",
    "sectionType": "Weapon"
  },
  "SalamanderField": {
    "displayName": "SalamanderField",
    "sectionType": "Weapon"
  },
  "Megalaser": {
    "displayName": "Megalaser",
    "sectionType": "Weapon"
  },
  "MegalaserE": {
    "displayName": "MegalaserE",
    "sectionType": "Weapon"
  },
  "MegalaserAA": {
    "displayName": "MegalaserAA",
    "sectionType": "Weapon"
  },
  "MegalaserAAE": {
    "displayName": "MegalaserAAE",
    "sectionType": "Weapon"
  },
  "GotterLaser": {
    "displayName": "GotterLaser",
    "sectionType": "Weapon"
  },
  "GotterLaserE": {
    "displayName": "GotterLaserE",
    "sectionType": "Weapon"
  },
  "GotterBow": {
    "displayName": "GotterBow",
    "sectionType": "Weapon"
  },
  "GotterBowE": {
    "displayName": "GotterBowE",
    "sectionType": "Weapon"
  },
  "WormqueenBolt": {
    "displayName": "WormqueenBolt",
    "sectionType": "Weapon"
  },
  "DeathBolt": {
    "displayName": "DeathBolt",
    "sectionType": "Weapon"
  },
  "DeathBoltAA": {
    "displayName": "DeathBoltAA",
    "sectionType": "Weapon"
  },
  "DeathBoltFragment": {
    "displayName": "DeathBoltFragment",
    "sectionType": "Weapon"
  },
  "DeathFlash": {
    "displayName": "DeathFlash",
    "sectionType": "Weapon"
  },
  "TarchiaTarget": {
    "displayName": "TarchiaTarget",
    "sectionType": "Weapon"
  },
  "TarchiaCannon": {
    "displayName": "TarchiaCannon",
    "sectionType": "Weapon"
  },
  "TarchiaCannonOld": {
    "displayName": "TarchiaCannonOld",
    "sectionType": "Weapon"
  },
  "PrometheusCharge": {
    "displayName": "PrometheusCharge",
    "sectionType": "Weapon"
  },
  "PrometheusCharge2": {
    "displayName": "PrometheusCharge2",
    "sectionType": "Weapon"
  },
  "PrometheusBlast": {
    "displayName": "PrometheusBlast",
    "sectionType": "Weapon"
  },
  "RailguneerBlast": {
    "displayName": "RailguneerBlast",
    "sectionType": "Weapon"
  },
  "RailguneerBlast2": {
    "displayName": "RailguneerBlast2",
    "sectionType": "Weapon"
  },
  "FVRailguneerBlast": {
    "displayName": "FVRailguneerBlast",
    "sectionType": "Weapon"
  },
  "RailgunTowerBlast": {
    "displayName": "RailgunTowerBlast",
    "sectionType": "Weapon"
  },
  "RoachBlast": {
    "displayName": "RoachBlast",
    "sectionType": "Weapon"
  },
  "RoachBlastE": {
    "displayName": "RoachBlastE",
    "sectionType": "Weapon"
  },
  "DracoCannon": {
    "displayName": "DracoCannon",
    "sectionType": "Weapon"
  },
  "DracoCannonE": {
    "displayName": "DracoCannonE",
    "sectionType": "Weapon"
  },
  "DracoCannonDrone": {
    "displayName": "DracoCannonDrone",
    "sectionType": "Weapon"
  },
  "DracoCannonDroneE": {
    "displayName": "DracoCannonDroneE",
    "sectionType": "Weapon"
  },
  "TeratornLaser": {
    "displayName": "TeratornLaser",
    "sectionType": "Weapon"
  },
  "TeratornFake": {
    "displayName": "TeratornFake",
    "sectionType": "Weapon"
  },
  "TeratornRocket": {
    "displayName": "TeratornRocket",
    "sectionType": "Weapon"
  },
  "MantaFake": {
    "displayName": "MantaFake",
    "sectionType": "Weapon"
  },
  "MantaRocket": {
    "displayName": "MantaRocket",
    "sectionType": "Weapon"
  },
  "MantaConfuseRay": {
    "displayName": "MantaConfuseRay",
    "sectionType": "Weapon"
  },
  "FlyingDroneRocket": {
    "displayName": "FlyingDroneRocket",
    "sectionType": "Weapon"
  },
  "CyclopsCannon": {
    "displayName": "CyclopsCannon",
    "sectionType": "Weapon"
  },
  "CyclopsCannonE": {
    "displayName": "CyclopsCannonE",
    "sectionType": "Weapon"
  },
  "CyclopsBuff": {
    "displayName": "CyclopsBuff",
    "sectionType": "Weapon"
  },
  "AvalonCharge": {
    "displayName": "AvalonCharge",
    "sectionType": "Weapon"
  },
  "AvalonCharge2": {
    "displayName": "AvalonCharge2",
    "sectionType": "Weapon"
  },
  "AvalonBlast": {
    "displayName": "AvalonBlast",
    "sectionType": "Weapon"
  },
  "MercuryOverdrive": {
    "displayName": "MercuryOverdrive",
    "sectionType": "Weapon"
  },
  "MercuryLaser": {
    "displayName": "MercuryLaser",
    "sectionType": "Weapon"
  },
  "AthenaStrike": {
    "displayName": "AthenaStrike",
    "sectionType": "Weapon"
  },
  "AthenaStrikeE": {
    "displayName": "AthenaStrikeE",
    "sectionType": "Weapon"
  },
  "AthenaLaser": {
    "displayName": "AthenaLaser",
    "sectionType": "Weapon"
  },
  "VentrexBeam": {
    "displayName": "VentrexBeam",
    "sectionType": "Weapon"
  },
  "VentrexBeamE": {
    "displayName": "VentrexBeamE",
    "sectionType": "Weapon"
  },
  "Comet": {
    "displayName": "Comet",
    "sectionType": "Weapon"
  },
  "CometFragment": {
    "displayName": "CometFragment",
    "sectionType": "Weapon"
  },
  "SuperComet": {
    "displayName": "SuperComet",
    "sectionType": "Weapon"
  },
  "SuperCometFragment": {
    "displayName": "SuperCometFragment",
    "sectionType": "Weapon"
  },
  "SuperCometFragmentB": {
    "displayName": "SuperCometFragmentB",
    "sectionType": "Weapon"
  },
  "PrismShot": {
    "displayName": "PrismShot",
    "sectionType": "Weapon"
  },
  "PrismShotE": {
    "displayName": "PrismShotE",
    "sectionType": "Weapon"
  },
  "PrismShotFragment": {
    "displayName": "PrismShotFragment",
    "sectionType": "Weapon"
  },
  "PrismShotSupport": {
    "displayName": "PrismShotSupport",
    "sectionType": "Weapon"
  },
  "FTShot": {
    "displayName": "FTShot",
    "sectionType": "Weapon"
  },
  "RuptureBeam": {
    "displayName": "RuptureBeam",
    "sectionType": "Weapon"
  },
  "ScavengerTankCannon": {
    "displayName": "ScavengerTankCannon",
    "sectionType": "Weapon"
  },
  "ScavengerTankCannonE": {
    "displayName": "ScavengerTankCannonE",
    "sectionType": "Weapon"
  },
  "ScavengerMachineGun": {
    "displayName": "ScavengerMachineGun",
    "sectionType": "Weapon"
  },
  "ScavengerMachineGunE": {
    "displayName": "ScavengerMachineGunE",
    "sectionType": "Weapon"
  },
  "ScavengerTankKiller": {
    "displayName": "ScavengerTankKiller",
    "sectionType": "Weapon"
  },
  "ScavengerTankKillerE": {
    "displayName": "ScavengerTankKillerE",
    "sectionType": "Weapon"
  },
  "ScavengerHECannon": {
    "displayName": "ScavengerHECannon",
    "sectionType": "Weapon"
  },
  "ScavengerLaser": {
    "displayName": "ScavengerLaser",
    "sectionType": "Weapon"
  },
  "ScavengerLaserE": {
    "displayName": "ScavengerLaserE",
    "sectionType": "Weapon"
  },
  "ScavengerSuperlaser": {
    "displayName": "ScavengerSuperlaser",
    "sectionType": "Weapon"
  },
  "ScavengerSuperlaserE": {
    "displayName": "ScavengerSuperlaserE",
    "sectionType": "Weapon"
  },
  "ScavengerHail": {
    "displayName": "ScavengerHail",
    "sectionType": "Weapon"
  },
  "ScavengerVenom": {
    "displayName": "ScavengerVenom",
    "sectionType": "Weapon"
  },
  "ScavengerRailgun": {
    "displayName": "ScavengerRailgun",
    "sectionType": "Weapon"
  },
  "ScavengerComet": {
    "displayName": "ScavengerComet",
    "sectionType": "Weapon"
  },
  "ScavengerCometE": {
    "displayName": "ScavengerCometE",
    "sectionType": "Weapon"
  },
  "ScavengerTeslaBolt": {
    "displayName": "ScavengerTeslaBolt",
    "sectionType": "Weapon"
  },
  "ScavengerTeslaBoltE": {
    "displayName": "ScavengerTeslaBoltE",
    "sectionType": "Weapon"
  },
  "ScavengerMedusa": {
    "displayName": "ScavengerMedusa",
    "sectionType": "Weapon"
  },
  "ScavengerConfuseRay": {
    "displayName": "ScavengerConfuseRay",
    "sectionType": "Weapon"
  },
  "ScavengerRadBeam": {
    "displayName": "ScavengerRadBeam",
    "sectionType": "Weapon"
  },
  "ScavengerJammer": {
    "displayName": "ScavengerJammer",
    "sectionType": "Weapon"
  },
  "ScavengerNeutron": {
    "displayName": "ScavengerNeutron",
    "sectionType": "Weapon"
  },
  "ScavengerGoldRock": {
    "displayName": "ScavengerGoldRock",
    "sectionType": "Weapon"
  },
  "ScavengerTarcCannon": {
    "displayName": "ScavengerTarcCannon",
    "sectionType": "Weapon"
  },
  "ScavengerCryo": {
    "displayName": "ScavengerCryo",
    "sectionType": "Weapon"
  },
  "ScavengerCryoE": {
    "displayName": "ScavengerCryoE",
    "sectionType": "Weapon"
  },
  "SuperRuptureBeam": {
    "displayName": "SuperRuptureBeam",
    "sectionType": "Weapon"
  },
  "MagneticBeam": {
    "displayName": "MagneticBeam",
    "sectionType": "Weapon"
  },
  "MagneticBeamE": {
    "displayName": "MagneticBeamE",
    "sectionType": "Weapon"
  },
  "MagneticPart": {
    "displayName": "MagneticPart",
    "sectionType": "Weapon"
  },
  "MagneShake": {
    "displayName": "MagneShake",
    "sectionType": "Weapon"
  },
  "MagneShakeE": {
    "displayName": "MagneShakeE",
    "sectionType": "Weapon"
  },
  "LancerAirslash": {
    "displayName": "LancerAirslash",
    "sectionType": "Weapon"
  },
  "LancerAirslash2": {
    "displayName": "LancerAirslash2",
    "sectionType": "Weapon"
  },
  "FVLancerAirslash": {
    "displayName": "FVLancerAirslash",
    "sectionType": "Weapon"
  },
  "UCLancerAirslash": {
    "displayName": "UCLancerAirslash",
    "sectionType": "Weapon"
  },
  "LancerFrag": {
    "displayName": "LancerFrag",
    "sectionType": "Weapon"
  },
  "DLancerAirslash": {
    "displayName": "DLancerAirslash",
    "sectionType": "Weapon"
  },
  "DLancerAirslash2": {
    "displayName": "DLancerAirslash2",
    "sectionType": "Weapon"
  },
  "DLancerFrag": {
    "displayName": "DLancerFrag",
    "sectionType": "Weapon"
  },
  "SwordfishAirslash": {
    "displayName": "SwordfishAirslash",
    "sectionType": "Weapon"
  },
  "SwordfishFrag": {
    "displayName": "SwordfishFrag",
    "sectionType": "Weapon"
  },
  "InfAreaRemover": {
    "displayName": "InfAreaRemover",
    "sectionType": "Weapon"
  },
  "AirAreaRemover": {
    "displayName": "AirAreaRemover",
    "sectionType": "Weapon"
  },
  "NavyAreaRemover": {
    "displayName": "NavyAreaRemover",
    "sectionType": "Weapon"
  },
  "HalfLifeWeapon": {
    "displayName": "HalfLifeWeapon",
    "sectionType": "Weapon"
  },
  "Demobomb": {
    "displayName": "Demobomb",
    "sectionType": "Weapon"
  },
  "DemobombE": {
    "displayName": "DemobombE",
    "sectionType": "Weapon"
  },
  "Madbomb": {
    "displayName": "Madbomb",
    "sectionType": "Weapon"
  },
  "Scorchbomb": {
    "displayName": "Scorchbomb",
    "sectionType": "Weapon"
  },
  "ScorchbombE": {
    "displayName": "ScorchbombE",
    "sectionType": "Weapon"
  },
  "Scorchbomb2": {
    "displayName": "Scorchbomb2",
    "sectionType": "Weapon"
  },
  "Scorchbomb2E": {
    "displayName": "Scorchbomb2E",
    "sectionType": "Weapon"
  },
  "ScorchbombFrag": {
    "displayName": "ScorchbombFrag",
    "sectionType": "Weapon"
  },
  "ScorchbombD": {
    "displayName": "ScorchbombD",
    "sectionType": "Weapon"
  },
  "Nukebomb": {
    "displayName": "Nukebomb",
    "sectionType": "Unknown"
  },
  "FTankLaser": {
    "displayName": "FTankLaser",
    "sectionType": "Weapon"
  },
  "FTankLaserE": {
    "displayName": "FTankLaserE",
    "sectionType": "Weapon"
  },
  "FTankPiles": {
    "displayName": "FTankPiles",
    "sectionType": "Weapon"
  },
  "FTankCannon": {
    "displayName": "FTankCannon",
    "sectionType": "Weapon"
  },
  "ComancheLaser": {
    "displayName": "ComancheLaser",
    "sectionType": "Weapon"
  },
  "ComancheLaserE": {
    "displayName": "ComancheLaserE",
    "sectionType": "Weapon"
  },
  "ComancheStrike": {
    "displayName": "ComancheStrike",
    "sectionType": "Weapon"
  },
  "ComancheStrikeE": {
    "displayName": "ComancheStrikeE",
    "sectionType": "Weapon"
  },
  "ComancheHeal": {
    "displayName": "ComancheHeal",
    "sectionType": "Weapon"
  },
  "LongbowStrike": {
    "displayName": "LongbowStrike",
    "sectionType": "Weapon"
  },
  "LongbowStrikeE": {
    "displayName": "LongbowStrikeE",
    "sectionType": "Weapon"
  },
  "AeroblazeFake": {
    "displayName": "AeroblazeFake",
    "sectionType": "Weapon"
  },
  "AeroblazeLaser": {
    "displayName": "AeroblazeLaser",
    "sectionType": "Weapon"
  },
  "AeroblazeLaserE": {
    "displayName": "AeroblazeLaserE",
    "sectionType": "Weapon"
  },
  "AeroblazeSniper": {
    "displayName": "AeroblazeSniper",
    "sectionType": "Weapon"
  },
  "AeroblazeSniperE": {
    "displayName": "AeroblazeSniperE",
    "sectionType": "Weapon"
  },
  "WarRigProj": {
    "displayName": "WarRigProj",
    "sectionType": "Projectile"
  },
  "TimeWarpP1": {
    "displayName": "TimeWarpP1",
    "sectionType": "Projectile"
  },
  "TimeWarpP2": {
    "displayName": "TimeWarpP2",
    "sectionType": "Projectile"
  },
  "SharkWaveP": {
    "displayName": "SharkWaveP",
    "sectionType": "Projectile"
  },
  "SharkWaveP2": {
    "displayName": "SharkWaveP2",
    "sectionType": "Projectile"
  },
  "SharkWaveP3": {
    "displayName": "SharkWaveP3",
    "sectionType": "Projectile"
  },
  "SharkWaveP4": {
    "displayName": "SharkWaveP4",
    "sectionType": "Projectile"
  },
  "SharkWaveP5": {
    "displayName": "SharkWaveP5",
    "sectionType": "Projectile"
  },
  "SuperIronWeaponP": {
    "displayName": "SuperIronWeaponP",
    "sectionType": "Unknown"
  },
  "SuperSuppressP": {
    "displayName": "SuperSuppressP",
    "sectionType": "Projectile"
  },
  "SuperJammerP": {
    "displayName": "SuperJammerP",
    "sectionType": "Projectile"
  },
  "SuperCryoP": {
    "displayName": "SuperCryoP",
    "sectionType": "Projectile"
  },
  "GreenArrowP": {
    "displayName": "GreenArrowP",
    "sectionType": "Projectile"
  },
  "ExtendLifeP": {
    "displayName": "ExtendLifeP",
    "sectionType": "Projectile"
  },
  "StructureBuffLargeP": {
    "displayName": "StructureBuffLargeP",
    "sectionType": "Projectile"
  },
  "EurekaBlastFragP": {
    "displayName": "EurekaBlastFragP",
    "sectionType": "Projectile"
  },
  "MadBlastFragP": {
    "displayName": "MadBlastFragP",
    "sectionType": "Projectile"
  },
  "MadMineFragP": {
    "displayName": "MadMineFragP",
    "sectionType": "Projectile"
  },
  "ConfuseFlareFragP": {
    "displayName": "ConfuseFlareFragP",
    "sectionType": "Projectile"
  },
  "EurekaBlastP": {
    "displayName": "EurekaBlastP",
    "sectionType": "Projectile"
  },
  "KrukovSwordP": {
    "displayName": "KrukovSwordP",
    "sectionType": "Projectile"
  },
  "KrukovSwordFragP": {
    "displayName": "KrukovSwordFragP",
    "sectionType": "Projectile"
  },
  "MadBlastStartAIP": {
    "displayName": "MadBlastStartAIP",
    "sectionType": "Projectile"
  },
  "MadBlastStartP": {
    "displayName": "MadBlastStartP",
    "sectionType": "Projectile"
  },
  "MadMineStartP": {
    "displayName": "MadMineStartP",
    "sectionType": "Projectile"
  },
  "MadMineP": {
    "displayName": "MadMineP",
    "sectionType": "Projectile"
  },
  "DefenseBuffP": {
    "displayName": "DefenseBuffP",
    "sectionType": "Projectile"
  },
  "HypergateP": {
    "displayName": "HypergateP",
    "sectionType": "Projectile"
  },
  "StructureBuffP": {
    "displayName": "StructureBuffP",
    "sectionType": "Projectile"
  },
  "ShieldGeneratorP": {
    "displayName": "ShieldGeneratorP",
    "sectionType": "Projectile"
  },
  "ShutDownFakeP": {
    "displayName": "ShutDownFakeP",
    "sectionType": "Projectile"
  },
  "RamHackArenaP": {
    "displayName": "RamHackArenaP",
    "sectionType": "Projectile"
  },
  "MegaarenaP": {
    "displayName": "MegaarenaP",
    "sectionType": "Projectile"
  },
  "OrcinusWaveP": {
    "displayName": "OrcinusWaveP",
    "sectionType": "Projectile"
  },
  "SodarBoostP": {
    "displayName": "SodarBoostP",
    "sectionType": "Projectile"
  },
  "DisruptorFieldP": {
    "displayName": "DisruptorFieldP",
    "sectionType": "Projectile"
  },
  "StealthGeneratorP": {
    "displayName": "StealthGeneratorP",
    "sectionType": "Projectile"
  },
  "HazequadGeneratorP": {
    "displayName": "HazequadGeneratorP",
    "sectionType": "Projectile"
  },
  "SpinGeneratorP": {
    "displayName": "SpinGeneratorP",
    "sectionType": "Projectile"
  },
  "GSpinGeneratorP": {
    "displayName": "GSpinGeneratorP",
    "sectionType": "Projectile"
  },
  "GSpinGeneratorRealP": {
    "displayName": "GSpinGeneratorRealP",
    "sectionType": "Projectile"
  },
  "LightningRodP": {
    "displayName": "LightningRodP",
    "sectionType": "Projectile"
  },
  "MadBlastP": {
    "displayName": "MadBlastP",
    "sectionType": "Projectile"
  },
  "ScorchStartP": {
    "displayName": "ScorchStartP",
    "sectionType": "Projectile"
  },
  "ScorchStartPE": {
    "displayName": "ScorchStartPE",
    "sectionType": "Projectile"
  },
  "ScorchP": {
    "displayName": "ScorchP",
    "sectionType": "Projectile"
  },
  "HuntressProj": {
    "displayName": "HuntressProj",
    "sectionType": "Projectile"
  },
  "ArchelonProj": {
    "displayName": "ArchelonProj",
    "sectionType": "Projectile"
  },
  "UCLancerProj": {
    "displayName": "UCLancerProj",
    "sectionType": "Unknown"
  },
  "LancerProj": {
    "displayName": "LancerProj",
    "sectionType": "Projectile"
  },
  "DLancerProj": {
    "displayName": "DLancerProj",
    "sectionType": "Projectile"
  },
  "SwordfishProj": {
    "displayName": "SwordfishProj",
    "sectionType": "Projectile"
  },
  "LancerProj2": {
    "displayName": "LancerProj2",
    "sectionType": "Unknown"
  },
  "LancerFragProj2": {
    "displayName": "LancerFragProj2",
    "sectionType": "Unknown"
  },
  "LancerFragProj": {
    "displayName": "LancerFragProj",
    "sectionType": "Projectile"
  },
  "SeawolfProj": {
    "displayName": "SeawolfProj",
    "sectionType": "Projectile"
  },
  "GharialProj": {
    "displayName": "GharialProj",
    "sectionType": "Projectile"
  },
  "LionheartP": {
    "displayName": "LionheartP",
    "sectionType": "Projectile"
  },
  "VenomP": {
    "displayName": "VenomP",
    "sectionType": "Projectile"
  },
  "StratoP": {
    "displayName": "StratoP",
    "sectionType": "Projectile"
  },
  "RiotGunP": {
    "displayName": "RiotGunP",
    "sectionType": "Projectile"
  },
  "RiotGrenadeP": {
    "displayName": "RiotGrenadeP",
    "sectionType": "Projectile"
  },
  "GotterDart": {
    "displayName": "GotterDart",
    "sectionType": "Projectile"
  },
  "StalkerProj": {
    "displayName": "StalkerProj",
    "sectionType": "Projectile"
  },
  "StalkerDrainProj": {
    "displayName": "StalkerDrainProj",
    "sectionType": "Projectile"
  },
  "CataProj": {
    "displayName": "CataProj",
    "sectionType": "Projectile"
  },
  "Cannon3": {
    "displayName": "Cannon3",
    "sectionType": "Projectile"
  },
  "Cannon3E": {
    "displayName": "Cannon3E",
    "sectionType": "Projectile"
  },
  "ToxicPill": {
    "displayName": "ToxicPill",
    "sectionType": "Projectile"
  },
  "ChaosPill": {
    "displayName": "ChaosPill",
    "sectionType": "Unknown"
  },
  "AcidProj": {
    "displayName": "AcidProj",
    "sectionType": "Projectile"
  },
  "PyroProj": {
    "displayName": "PyroProj",
    "sectionType": "Projectile"
  },
  "PyroProjE": {
    "displayName": "PyroProjE",
    "sectionType": "Projectile"
  },
  "FlameProj": {
    "displayName": "FlameProj",
    "sectionType": "Projectile"
  },
  "FlameProjE": {
    "displayName": "FlameProjE",
    "sectionType": "Projectile"
  },
  "InvisibleInaccAA": {
    "displayName": "InvisibleInaccAA",
    "sectionType": "Projectile"
  },
  "GyroProj": {
    "displayName": "GyroProj",
    "sectionType": "Projectile"
  },
  "GyroProjE": {
    "displayName": "GyroProjE",
    "sectionType": "Projectile"
  },
  "AeroFake": {
    "displayName": "AeroFake",
    "sectionType": "Projectile"
  },
  "AeroProj": {
    "displayName": "AeroProj",
    "sectionType": "Projectile"
  },
  "FortMisl": {
    "displayName": "FortMisl",
    "sectionType": "Projectile"
  },
  "FortMislE": {
    "displayName": "FortMislE",
    "sectionType": "Projectile"
  },
  "ZubrProj": {
    "displayName": "ZubrProj",
    "sectionType": "Unknown"
  },
  "ZubrProjE": {
    "displayName": "ZubrProjE",
    "sectionType": "Unknown"
  },
  "FlakTProj": {
    "displayName": "FlakTProj",
    "sectionType": "Projectile"
  },
  "BuratinoRocket": {
    "displayName": "BuratinoRocket",
    "sectionType": "Projectile"
  },
  "BuratinoRocketSpread": {
    "displayName": "BuratinoRocketSpread",
    "sectionType": "Projectile"
  },
  "BuratinoRocketE": {
    "displayName": "BuratinoRocketE",
    "sectionType": "Projectile"
  },
  "BuratinoRocketSpreadE": {
    "displayName": "BuratinoRocketSpreadE",
    "sectionType": "Projectile"
  },
  "MP5Proj": {
    "displayName": "MP5Proj",
    "sectionType": "Projectile"
  },
  "ConfuseProjAcc": {
    "displayName": "ConfuseProjAcc",
    "sectionType": "Unknown"
  },
  "ConfuseProj": {
    "displayName": "ConfuseProj",
    "sectionType": "Projectile"
  },
  "ComaStrike": {
    "displayName": "ComaStrike",
    "sectionType": "Projectile"
  },
  "ComaStrikeE": {
    "displayName": "ComaStrikeE",
    "sectionType": "Projectile"
  },
  "MTStrike": {
    "displayName": "MTStrike",
    "sectionType": "Projectile"
  },
  "MTStrikeE": {
    "displayName": "MTStrikeE",
    "sectionType": "Projectile"
  },
  "JagdStrike": {
    "displayName": "JagdStrike",
    "sectionType": "Projectile"
  },
  "JagdStrikeE": {
    "displayName": "JagdStrikeE",
    "sectionType": "Projectile"
  },
  "ReaperProj": {
    "displayName": "ReaperProj",
    "sectionType": "Projectile"
  },
  "SpeederProj": {
    "displayName": "SpeederProj",
    "sectionType": "Projectile"
  },
  "SpeederProjE": {
    "displayName": "SpeederProjE",
    "sectionType": "Projectile"
  },
  "SpeederProjB": {
    "displayName": "SpeederProjB",
    "sectionType": "Projectile"
  },
  "SpeederProjBE": {
    "displayName": "SpeederProjBE",
    "sectionType": "Projectile"
  },
  "HarpoonProj": {
    "displayName": "HarpoonProj",
    "sectionType": "Unknown"
  },
  "StealthMissileProj": {
    "displayName": "StealthMissileProj",
    "sectionType": "Projectile"
  },
  "StealthMissileProjE": {
    "displayName": "StealthMissileProjE",
    "sectionType": "Projectile"
  },
  "Invisible": {
    "displayName": "Invisible",
    "sectionType": "Projectile"
  },
  "InvisibleQuetz": {
    "displayName": "InvisibleQuetz",
    "sectionType": "Projectile"
  },
  "InvisibleLaser": {
    "displayName": "InvisibleLaser",
    "sectionType": "Projectile"
  },
  "Invisible3": {
    "displayName": "Invisible3",
    "sectionType": "Projectile"
  },
  "BuzzardProj": {
    "displayName": "BuzzardProj",
    "sectionType": "Projectile"
  },
  "ThorProjZ": {
    "displayName": "ThorProjZ",
    "sectionType": "Unknown"
  },
  "ThorProj": {
    "displayName": "ThorProj",
    "sectionType": "Projectile"
  },
  "StrikerGunRunP": {
    "displayName": "StrikerGunRunP",
    "sectionType": "Projectile"
  },
  "Invisible4": {
    "displayName": "Invisible4",
    "sectionType": "Projectile"
  },
  "InvisibleVertical": {
    "displayName": "InvisibleVertical",
    "sectionType": "Projectile"
  },
  "SuperSniperP": {
    "displayName": "SuperSniperP",
    "sectionType": "Projectile"
  },
  "MineBombP": {
    "displayName": "MineBombP",
    "sectionType": "Projectile"
  },
  "CryomineBombP": {
    "displayName": "CryomineBombP",
    "sectionType": "Projectile"
  },
  "GenomineBombP": {
    "displayName": "GenomineBombP",
    "sectionType": "Projectile"
  },
  "BladeInvisible": {
    "displayName": "BladeInvisible",
    "sectionType": "Projectile"
  },
  "BladeInvisibleE": {
    "displayName": "BladeInvisibleE",
    "sectionType": "Projectile"
  },
  "BladeInvisible2": {
    "displayName": "BladeInvisible2",
    "sectionType": "Projectile"
  },
  "BladeInvisible2E": {
    "displayName": "BladeInvisible2E",
    "sectionType": "Projectile"
  },
  "InvisibleEMP": {
    "displayName": "InvisibleEMP",
    "sectionType": "Projectile"
  },
  "InvisibleWork": {
    "displayName": "InvisibleWork",
    "sectionType": "Projectile"
  },
  "InvisibleMerc": {
    "displayName": "InvisibleMerc",
    "sectionType": "Projectile"
  },
  "RoadrunnerNerfP": {
    "displayName": "RoadrunnerNerfP",
    "sectionType": "Projectile"
  },
  "InvisibleSentry": {
    "displayName": "InvisibleSentry",
    "sectionType": "Projectile"
  },
  "InvisibleLow": {
    "displayName": "InvisibleLow",
    "sectionType": "Projectile"
  },
  "InvisibleLowBrute": {
    "displayName": "InvisibleLowBrute",
    "sectionType": "Projectile"
  },
  "InvisibleLowChaos": {
    "displayName": "InvisibleLowChaos",
    "sectionType": "Projectile"
  },
  "InvisibleMedium": {
    "displayName": "InvisibleMedium",
    "sectionType": "Projectile"
  },
  "InvisibleHigh": {
    "displayName": "InvisibleHigh",
    "sectionType": "Projectile"
  },
  "MutationRailgunP": {
    "displayName": "MutationRailgunP",
    "sectionType": "Projectile"
  },
  "InvisibleElectric": {
    "displayName": "InvisibleElectric",
    "sectionType": "Projectile"
  },
  "InvisibleCryo": {
    "displayName": "InvisibleCryo",
    "sectionType": "Projectile"
  },
  "FVBondP": {
    "displayName": "FVBondP",
    "sectionType": "Projectile"
  },
  "IceBeamP": {
    "displayName": "IceBeamP",
    "sectionType": "Projectile"
  },
  "BlizzardP": {
    "displayName": "BlizzardP",
    "sectionType": "Projectile"
  },
  "ScavengerCryoP": {
    "displayName": "ScavengerCryoP",
    "sectionType": "Projectile"
  },
  "CryobeamIP": {
    "displayName": "CryobeamIP",
    "sectionType": "Projectile"
  },
  "CryobeamIPAI": {
    "displayName": "CryobeamIPAI",
    "sectionType": "Projectile"
  },
  "CryobeamIPAnimA": {
    "displayName": "CryobeamIPAnimA",
    "sectionType": "Projectile"
  },
  "CryobeamIVP": {
    "displayName": "CryobeamIVP",
    "sectionType": "Projectile"
  },
  "CryobeamIVPAI": {
    "displayName": "CryobeamIVPAI",
    "sectionType": "Projectile"
  },
  "CryobeamIVPAnimA": {
    "displayName": "CryobeamIVPAnimA",
    "sectionType": "Projectile"
  },
  "Cryobeam6P": {
    "displayName": "Cryobeam6P",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAI": {
    "displayName": "Cryobeam6PAI",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAnimA": {
    "displayName": "Cryobeam6PAnimA",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAnimB": {
    "displayName": "Cryobeam6PAnimB",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAnimC": {
    "displayName": "Cryobeam6PAnimC",
    "sectionType": "Projectile"
  },
  "ArtCannonBall": {
    "displayName": "ArtCannonBall",
    "sectionType": "Projectile"
  },
  "TarchiaCannonBall": {
    "displayName": "TarchiaCannonBall",
    "sectionType": "Projectile"
  },
  "GrandCannonBall": {
    "displayName": "GrandCannonBall",
    "sectionType": "Projectile"
  },
  "GrandCannonBallE": {
    "displayName": "GrandCannonBallE",
    "sectionType": "Projectile"
  },
  "GrandCannonShrapnel": {
    "displayName": "GrandCannonShrapnel",
    "sectionType": "Projectile"
  },
  "Ballistic": {
    "displayName": "Ballistic",
    "sectionType": "Projectile"
  },
  "BallisticInacc": {
    "displayName": "BallisticInacc",
    "sectionType": "Projectile"
  },
  "BallisticShrapnel": {
    "displayName": "BallisticShrapnel",
    "sectionType": "Projectile"
  },
  "TarchiaProj": {
    "displayName": "TarchiaProj",
    "sectionType": "Projectile"
  },
  "TarchiaProjFake": {
    "displayName": "TarchiaProjFake",
    "sectionType": "Projectile"
  },
  "AntiGravityProj": {
    "displayName": "AntiGravityProj",
    "sectionType": "Projectile"
  },
  "InvisibleShadray": {
    "displayName": "InvisibleShadray",
    "sectionType": "Projectile"
  },
  "InvisibleShadrayAA": {
    "displayName": "InvisibleShadrayAA",
    "sectionType": "Projectile"
  },
  "InvisibleAll": {
    "displayName": "InvisibleAll",
    "sectionType": "Projectile"
  },
  "InvisibleAA": {
    "displayName": "InvisibleAA",
    "sectionType": "Projectile"
  },
  "PsychicControl": {
    "displayName": "PsychicControl",
    "sectionType": "Projectile"
  },
  "DybbukControl": {
    "displayName": "DybbukControl",
    "sectionType": "Projectile"
  },
  "Psychic": {
    "displayName": "Psychic",
    "sectionType": "Projectile"
  },
  "QuadShell": {
    "displayName": "QuadShell",
    "sectionType": "Projectile"
  },
  "AresCannonProj": {
    "displayName": "AresCannonProj",
    "sectionType": "Projectile"
  },
  "DeathBoltP": {
    "displayName": "DeathBoltP",
    "sectionType": "Projectile"
  },
  "Null": {
    "displayName": "Null",
    "sectionType": "Unknown"
  },
  "CyCannon": {
    "displayName": "CyCannon",
    "sectionType": "Projectile"
  },
  "WarpnodeBombP": {
    "displayName": "WarpnodeBombP",
    "sectionType": "Projectile"
  },
  "SuppressorBombP": {
    "displayName": "SuppressorBombP",
    "sectionType": "Projectile"
  },
  "DuneGrenade": {
    "displayName": "DuneGrenade",
    "sectionType": "Projectile"
  },
  "NuwaProj": {
    "displayName": "NuwaProj",
    "sectionType": "Projectile"
  },
  "CannonScourge": {
    "displayName": "CannonScourge",
    "sectionType": "Projectile"
  },
  "CannonInviso": {
    "displayName": "CannonInviso",
    "sectionType": "Projectile"
  },
  "CannonDraco": {
    "displayName": "CannonDraco",
    "sectionType": "Projectile"
  },
  "CannonAbrams": {
    "displayName": "CannonAbrams",
    "sectionType": "Projectile"
  },
  "CannonCavalier": {
    "displayName": "CannonCavalier",
    "sectionType": "Projectile"
  },
  "Grenade": {
    "displayName": "Grenade",
    "sectionType": "Unknown"
  },
  "BoidSuperUp": {
    "displayName": "BoidSuperUp",
    "sectionType": "Projectile"
  },
  "BoidSuperDown": {
    "displayName": "BoidSuperDown",
    "sectionType": "Projectile"
  },
  "GodsbaneP": {
    "displayName": "GodsbaneP",
    "sectionType": "Projectile"
  },
  "GodsbaneFragP": {
    "displayName": "GodsbaneFragP",
    "sectionType": "Projectile"
  },
  "ScavMedusaP": {
    "displayName": "ScavMedusaP",
    "sectionType": "Projectile"
  },
  "UCLongbowProj": {
    "displayName": "UCLongbowProj",
    "sectionType": "Unknown"
  },
  "UCLongbowProjE": {
    "displayName": "UCLongbowProjE",
    "sectionType": "Unknown"
  },
  "SeitaadEMPCannonProj": {
    "displayName": "SeitaadEMPCannonProj",
    "sectionType": "Projectile"
  },
  "SeitaadMissileP": {
    "displayName": "SeitaadMissileP",
    "sectionType": "Projectile"
  },
  "LongbowProj": {
    "displayName": "LongbowProj",
    "sectionType": "Projectile"
  },
  "LongbowProjE": {
    "displayName": "LongbowProjE",
    "sectionType": "Projectile"
  },
  "SeekerInviso": {
    "displayName": "SeekerInviso",
    "sectionType": "Unknown"
  },
  "PiranhaProj": {
    "displayName": "PiranhaProj",
    "sectionType": "Projectile"
  },
  "PiranhaProjE": {
    "displayName": "PiranhaProjE",
    "sectionType": "Projectile"
  },
  "JUMP": {
    "displayName": "JUMP",
    "sectionType": "Projectile"
  },
  "FuryP": {
    "displayName": "FuryP",
    "sectionType": "Projectile"
  },
  "DiverbeeP": {
    "displayName": "DiverbeeP",
    "sectionType": "Projectile"
  },
  "WastelotP": {
    "displayName": "WastelotP",
    "sectionType": "Projectile"
  },
  "CHITZJUMP": {
    "displayName": "CHITZJUMP",
    "sectionType": "Projectile"
  },
  "KRUKJUMP": {
    "displayName": "KRUKJUMP",
    "sectionType": "Unknown"
  },
  "SQDJUMP": {
    "displayName": "SQDJUMP",
    "sectionType": "Unknown"
  },
  "GiantNukeUp": {
    "displayName": "GiantNukeUp",
    "sectionType": "Projectile"
  },
  "GiantNukeDown": {
    "displayName": "GiantNukeDown",
    "sectionType": "Projectile"
  },
  "SmallNukeUp": {
    "displayName": "SmallNukeUp",
    "sectionType": "Projectile"
  },
  "SmallNukeDown": {
    "displayName": "SmallNukeDown",
    "sectionType": "Projectile"
  },
  "HeatSeeker": {
    "displayName": "HeatSeeker",
    "sectionType": "Unknown"
  },
  "SHTorpedo": {
    "displayName": "SHTorpedo",
    "sectionType": "Projectile"
  },
  "Torpedo": {
    "displayName": "Torpedo",
    "sectionType": "Projectile"
  },
  "TorpedoE": {
    "displayName": "TorpedoE",
    "sectionType": "Projectile"
  },
  "TorpedoX": {
    "displayName": "TorpedoX",
    "sectionType": "Projectile"
  },
  "TorpedoXE": {
    "displayName": "TorpedoXE",
    "sectionType": "Projectile"
  },
  "NautTorpedo": {
    "displayName": "NautTorpedo",
    "sectionType": "Projectile"
  },
  "NautTorpedoE": {
    "displayName": "NautTorpedoE",
    "sectionType": "Projectile"
  },
  "RTorpedo": {
    "displayName": "RTorpedo",
    "sectionType": "Projectile"
  },
  "RTorpedoE": {
    "displayName": "RTorpedoE",
    "sectionType": "Projectile"
  },
  "Sonic": {
    "displayName": "Sonic",
    "sectionType": "Unknown"
  },
  "ASWVirt": {
    "displayName": "ASWVirt",
    "sectionType": "Projectile"
  },
  "IvanBombProj": {
    "displayName": "IvanBombProj",
    "sectionType": "Unknown"
  },
  "FVIvanBombProj": {
    "displayName": "FVIvanBombProj",
    "sectionType": "Projectile"
  },
  "ArsoBombProj": {
    "displayName": "ArsoBombProj",
    "sectionType": "Unknown"
  },
  "FVArsoBombProj": {
    "displayName": "FVArsoBombProj",
    "sectionType": "Projectile"
  },
  "FVRepulsorProj": {
    "displayName": "FVRepulsorProj",
    "sectionType": "Projectile"
  },
  "PlasmaTorpedo": {
    "displayName": "PlasmaTorpedo",
    "sectionType": "Projectile"
  },
  "AlizeP": {
    "displayName": "AlizeP",
    "sectionType": "Unknown"
  },
  "NormalBomb": {
    "displayName": "NormalBomb",
    "sectionType": "Projectile"
  },
  "NormalBombE": {
    "displayName": "NormalBombE",
    "sectionType": "Projectile"
  },
  "ReconDroneP": {
    "displayName": "ReconDroneP",
    "sectionType": "Unknown"
  },
  "SeekerBombP": {
    "displayName": "SeekerBombP",
    "sectionType": "Projectile"
  },
  "ThorWaveP": {
    "displayName": "ThorWaveP",
    "sectionType": "Projectile"
  },
  "HurraP": {
    "displayName": "HurraP",
    "sectionType": "Projectile"
  },
  "BlimpBombP": {
    "displayName": "BlimpBombP",
    "sectionType": "Projectile"
  },
  "BlimpBombPE": {
    "displayName": "BlimpBombPE",
    "sectionType": "Projectile"
  },
  "BlimpBombNukeP": {
    "displayName": "BlimpBombNukeP",
    "sectionType": "Projectile"
  },
  "SmokebombsP": {
    "displayName": "SmokebombsP",
    "sectionType": "Projectile"
  },
  "CondorBlastP": {
    "displayName": "CondorBlastP",
    "sectionType": "Projectile"
  },
  "WOCP": {
    "displayName": "WOCP",
    "sectionType": "Projectile"
  },
  "InvisibleMag": {
    "displayName": "InvisibleMag",
    "sectionType": "Projectile"
  },
  "InvisibleMagShake": {
    "displayName": "InvisibleMagShake",
    "sectionType": "Projectile"
  },
  "InvisibleWind": {
    "displayName": "InvisibleWind",
    "sectionType": "Unknown"
  },
  "DepthCharge": {
    "displayName": "DepthCharge",
    "sectionType": "Projectile"
  },
  "DepthChargeE": {
    "displayName": "DepthChargeE",
    "sectionType": "Projectile"
  },
  "MammothTuskProj": {
    "displayName": "MammothTuskProj",
    "sectionType": "Projectile"
  },
  "MammothTuskProjE": {
    "displayName": "MammothTuskProjE",
    "sectionType": "Projectile"
  },
  "GrumbleRocketP": {
    "displayName": "GrumbleRocketP",
    "sectionType": "Projectile"
  },
  "AAHeatSeeker": {
    "displayName": "AAHeatSeeker",
    "sectionType": "Unknown"
  },
  "RedEye2Proj": {
    "displayName": "RedEye2Proj",
    "sectionType": "Projectile"
  },
  "RedEye2ProjE": {
    "displayName": "RedEye2ProjE",
    "sectionType": "Projectile"
  },
  "VultureNapalmP": {
    "displayName": "VultureNapalmP",
    "sectionType": "Projectile"
  },
  "VultureNapalmPE": {
    "displayName": "VultureNapalmPE",
    "sectionType": "Projectile"
  },
  "BuzzardMinesP": {
    "displayName": "BuzzardMinesP",
    "sectionType": "Projectile"
  },
  "FakeSeeker": {
    "displayName": "FakeSeeker",
    "sectionType": "Unknown"
  },
  "AAHeatSeekerB": {
    "displayName": "AAHeatSeekerB",
    "sectionType": "Projectile"
  },
  "AAHeatSeekerBE": {
    "displayName": "AAHeatSeekerBE",
    "sectionType": "Projectile"
  },
  "WallbusterP": {
    "displayName": "WallbusterP",
    "sectionType": "Projectile"
  },
  "DevourerProj": {
    "displayName": "DevourerProj",
    "sectionType": "Projectile"
  },
  "BlackoutMissileP": {
    "displayName": "BlackoutMissileP",
    "sectionType": "Projectile"
  },
  "AirToGroundMissile": {
    "displayName": "AirToGroundMissile",
    "sectionType": "Projectile"
  },
  "AirToGroundMissileE": {
    "displayName": "AirToGroundMissileE",
    "sectionType": "Projectile"
  },
  "AirToGroundMissileFox": {
    "displayName": "AirToGroundMissileFox",
    "sectionType": "Projectile"
  },
  "AirToGroundMissileFoxE": {
    "displayName": "AirToGroundMissileFoxE",
    "sectionType": "Projectile"
  },
  "FoxMissileP": {
    "displayName": "FoxMissileP",
    "sectionType": "Projectile"
  },
  "FoxMissilePE": {
    "displayName": "FoxMissilePE",
    "sectionType": "Projectile"
  },
  "WidowSignalFakeP": {
    "displayName": "WidowSignalFakeP",
    "sectionType": "Projectile"
  },
  "WidowSignal2P": {
    "displayName": "WidowSignal2P",
    "sectionType": "Projectile"
  },
  "WidowSignal3P": {
    "displayName": "WidowSignal3P",
    "sectionType": "Projectile"
  },
  "InvisibleStorm": {
    "displayName": "InvisibleStorm",
    "sectionType": "Projectile"
  },
  "StormMissileProj": {
    "displayName": "StormMissileProj",
    "sectionType": "Projectile"
  },
  "StormMissileProjE": {
    "displayName": "StormMissileProjE",
    "sectionType": "Projectile"
  },
  "InvisibleSnake": {
    "displayName": "InvisibleSnake",
    "sectionType": "Projectile"
  },
  "SnakeMissileProj": {
    "displayName": "SnakeMissileProj",
    "sectionType": "Projectile"
  },
  "SnakeMissileProjE": {
    "displayName": "SnakeMissileProjE",
    "sectionType": "Projectile"
  },
  "AirToGroundNuke": {
    "displayName": "AirToGroundNuke",
    "sectionType": "Projectile"
  },
  "PulsPr": {
    "displayName": "PulsPr",
    "sectionType": "Projectile"
  },
  "NuwaProjZ": {
    "displayName": "NuwaProjZ",
    "sectionType": "Projectile"
  },
  "ColossusBallInacc": {
    "displayName": "ColossusBallInacc",
    "sectionType": "Projectile"
  },
  "ColossusBallInaccE": {
    "displayName": "ColossusBallInaccE",
    "sectionType": "Projectile"
  },
  "CryoMissileProj": {
    "displayName": "CryoMissileProj",
    "sectionType": "Projectile"
  },
  "CryoMissileProjE": {
    "displayName": "CryoMissileProjE",
    "sectionType": "Projectile"
  },
  "ShinMissileProj": {
    "displayName": "ShinMissileProj",
    "sectionType": "Projectile"
  },
  "ShinMissileProjE": {
    "displayName": "ShinMissileProjE",
    "sectionType": "Projectile"
  },
  "PsychicDart": {
    "displayName": "PsychicDart",
    "sectionType": "Projectile"
  },
  "ZorbBall": {
    "displayName": "ZorbBall",
    "sectionType": "Projectile"
  },
  "ZorbBallN": {
    "displayName": "ZorbBallN",
    "sectionType": "Projectile"
  },
  "AlanqaAAP": {
    "displayName": "AlanqaAAP",
    "sectionType": "Projectile"
  },
  "MedusaProjectile": {
    "displayName": "MedusaProjectile",
    "sectionType": "Projectile"
  },
  "MedusaProjectileE": {
    "displayName": "MedusaProjectileE",
    "sectionType": "Projectile"
  },
  "PhalanxProjectile": {
    "displayName": "PhalanxProjectile",
    "sectionType": "Projectile"
  },
  "PhalanxProjectileE": {
    "displayName": "PhalanxProjectileE",
    "sectionType": "Projectile"
  },
  "ArmorMissileProj": {
    "displayName": "ArmorMissileProj",
    "sectionType": "Projectile"
  },
  "ArmorMissileProjE": {
    "displayName": "ArmorMissileProjE",
    "sectionType": "Projectile"
  },
  "SAMBunkerProj": {
    "displayName": "SAMBunkerProj",
    "sectionType": "Projectile"
  },
  "SAMBunkerProjE": {
    "displayName": "SAMBunkerProjE",
    "sectionType": "Projectile"
  },
  "WolfMissileProj": {
    "displayName": "WolfMissileProj",
    "sectionType": "Projectile"
  },
  "WolfMissileProjE": {
    "displayName": "WolfMissileProjE",
    "sectionType": "Projectile"
  },
  "ComaMissileProj": {
    "displayName": "ComaMissileProj",
    "sectionType": "Unknown"
  },
  "ComaMissileProjE": {
    "displayName": "ComaMissileProjE",
    "sectionType": "Unknown"
  },
  "ToxicBarrel": {
    "displayName": "ToxicBarrel",
    "sectionType": "Projectile"
  },
  "ToxicBarrelBig": {
    "displayName": "ToxicBarrelBig",
    "sectionType": "Projectile"
  },
  "MortarProj": {
    "displayName": "MortarProj",
    "sectionType": "Projectile"
  },
  "MortarProjE": {
    "displayName": "MortarProjE",
    "sectionType": "Projectile"
  },
  "FlareProj": {
    "displayName": "FlareProj",
    "sectionType": "Projectile"
  },
  "UraganPunchesP": {
    "displayName": "UraganPunchesP",
    "sectionType": "Projectile"
  },
  "UraganP": {
    "displayName": "UraganP",
    "sectionType": "Projectile"
  },
  "HarbingerFakeP": {
    "displayName": "HarbingerFakeP",
    "sectionType": "Projectile"
  },
  "HarbingerFragP": {
    "displayName": "HarbingerFragP",
    "sectionType": "Projectile"
  },
  "FTankCannonP": {
    "displayName": "FTankCannonP",
    "sectionType": "Projectile"
  },
  "SeitaadMissileFragP": {
    "displayName": "SeitaadMissileFragP",
    "sectionType": "Projectile"
  },
  "GridWeaponP": {
    "displayName": "GridWeaponP",
    "sectionType": "Projectile"
  },
  "IronDragonProj": {
    "displayName": "IronDragonProj",
    "sectionType": "Projectile"
  },
  "ArtilleryProj": {
    "displayName": "ArtilleryProj",
    "sectionType": "Projectile"
  },
  "ArtilleryProjE": {
    "displayName": "ArtilleryProjE",
    "sectionType": "Projectile"
  },
  "HowitzerProj": {
    "displayName": "HowitzerProj",
    "sectionType": "Projectile"
  },
  "HowitzerProjE": {
    "displayName": "HowitzerProjE",
    "sectionType": "Projectile"
  },
  "HowitzerProjInacc": {
    "displayName": "HowitzerProjInacc",
    "sectionType": "Projectile"
  },
  "HowitzerProjInaccE": {
    "displayName": "HowitzerProjInaccE",
    "sectionType": "Projectile"
  },
  "BasiliskCannonball": {
    "displayName": "BasiliskCannonball",
    "sectionType": "Projectile"
  },
  "BasiliskCannonballE": {
    "displayName": "BasiliskCannonballE",
    "sectionType": "Projectile"
  },
  "SmokeCannonP": {
    "displayName": "SmokeCannonP",
    "sectionType": "Projectile"
  },
  "GehennaProj": {
    "displayName": "GehennaProj",
    "sectionType": "Projectile"
  },
  "GehennaGroundProj": {
    "displayName": "GehennaGroundProj",
    "sectionType": "Projectile"
  },
  "SalamanderProj": {
    "displayName": "SalamanderProj",
    "sectionType": "Projectile"
  },
  "SalamanderProjAA": {
    "displayName": "SalamanderProjAA",
    "sectionType": "Projectile"
  },
  "SiegfriedBall": {
    "displayName": "SiegfriedBall",
    "sectionType": "Projectile"
  },
  "CenturionCannonBall": {
    "displayName": "CenturionCannonBall",
    "sectionType": "Projectile"
  },
  "FlakProj": {
    "displayName": "FlakProj",
    "sectionType": "Projectile"
  },
  "FakeFlakProj": {
    "displayName": "FakeFlakProj",
    "sectionType": "Unknown"
  },
  "ScavengerMachineGunP": {
    "displayName": "ScavengerMachineGunP",
    "sectionType": "Projectile"
  },
  "HydraMachineGunP": {
    "displayName": "HydraMachineGunP",
    "sectionType": "Projectile"
  },
  "ColossusAAProj": {
    "displayName": "ColossusAAProj",
    "sectionType": "Projectile"
  },
  "FlakCannonProj": {
    "displayName": "FlakCannonProj",
    "sectionType": "Unknown"
  },
  "GharialPilesP": {
    "displayName": "GharialPilesP",
    "sectionType": "Projectile"
  },
  "LeviPilesP": {
    "displayName": "LeviPilesP",
    "sectionType": "Projectile"
  },
  "SweeperP": {
    "displayName": "SweeperP",
    "sectionType": "Projectile"
  },
  "BaneP": {
    "displayName": "BaneP",
    "sectionType": "Projectile"
  },
  "TeratornP": {
    "displayName": "TeratornP",
    "sectionType": "Projectile"
  },
  "MantaP": {
    "displayName": "MantaP",
    "sectionType": "Unknown"
  },
  "OPCoilBoltP": {
    "displayName": "OPCoilBoltP",
    "sectionType": "Projectile"
  },
  "Electricmouse": {
    "displayName": "Electricmouse",
    "sectionType": "Projectile"
  },
  "Electricbounce": {
    "displayName": "Electricbounce",
    "sectionType": "Projectile"
  },
  "NotbounceEMP": {
    "displayName": "NotbounceEMP",
    "sectionType": "Projectile"
  },
  "ElectricbounceEMP": {
    "displayName": "ElectricbounceEMP",
    "sectionType": "Projectile"
  },
  "RaccoonEMPP": {
    "displayName": "RaccoonEMPP",
    "sectionType": "Projectile"
  },
  "VolkovBombP": {
    "displayName": "VolkovBombP",
    "sectionType": "Projectile"
  },
  "OverchargeP": {
    "displayName": "OverchargeP",
    "sectionType": "Projectile"
  },
  "DroppingP": {
    "displayName": "DroppingP",
    "sectionType": "Projectile"
  },
  "Cyborgbounce": {
    "displayName": "Cyborgbounce",
    "sectionType": "Projectile"
  },
  "Cyborgbounce2": {
    "displayName": "Cyborgbounce2",
    "sectionType": "Projectile"
  },
  "Cyborgbounce3": {
    "displayName": "Cyborgbounce3",
    "sectionType": "Projectile"
  },
  "CyborgbounceE": {
    "displayName": "CyborgbounceE",
    "sectionType": "Projectile"
  },
  "Cyborgbounce2E": {
    "displayName": "Cyborgbounce2E",
    "sectionType": "Projectile"
  },
  "Cyborgbounce3E": {
    "displayName": "Cyborgbounce3E",
    "sectionType": "Projectile"
  },
  "CyborgbounceB": {
    "displayName": "CyborgbounceB",
    "sectionType": "Projectile"
  },
  "CyborgbounceB2": {
    "displayName": "CyborgbounceB2",
    "sectionType": "Projectile"
  },
  "CyborgbounceB3": {
    "displayName": "CyborgbounceB3",
    "sectionType": "Projectile"
  },
  "EnforcerProj": {
    "displayName": "EnforcerProj",
    "sectionType": "Projectile"
  },
  "EnforcerProjE": {
    "displayName": "EnforcerProjE",
    "sectionType": "Projectile"
  },
  "DolphinProj": {
    "displayName": "DolphinProj",
    "sectionType": "Projectile"
  },
  "DolphinProjE": {
    "displayName": "DolphinProjE",
    "sectionType": "Projectile"
  },
  "LargeCometP": {
    "displayName": "LargeCometP",
    "sectionType": "Projectile"
  },
  "SuperCometP": {
    "displayName": "SuperCometP",
    "sectionType": "Projectile"
  },
  "ElitePrismP": {
    "displayName": "ElitePrismP",
    "sectionType": "Projectile"
  },
  "SuperSmallCometP": {
    "displayName": "SuperSmallCometP",
    "sectionType": "Projectile"
  },
  "PainTractorBeamP": {
    "displayName": "PainTractorBeamP",
    "sectionType": "Unknown"
  },
  "Nanofiber1P": {
    "displayName": "Nanofiber1P",
    "sectionType": "Projectile"
  },
  "Nanofiber2P": {
    "displayName": "Nanofiber2P",
    "sectionType": "Projectile"
  },
  "Nanofiber3P": {
    "displayName": "Nanofiber3P",
    "sectionType": "Projectile"
  },
  "Nanofiber4P": {
    "displayName": "Nanofiber4P",
    "sectionType": "Projectile"
  },
  "Nanofiber5P": {
    "displayName": "Nanofiber5P",
    "sectionType": "Projectile"
  },
  "Nanofiber6P": {
    "displayName": "Nanofiber6P",
    "sectionType": "Projectile"
  },
  "Nanofiber7P": {
    "displayName": "Nanofiber7P",
    "sectionType": "Projectile"
  },
  "BasswaveP": {
    "displayName": "BasswaveP",
    "sectionType": "Projectile"
  },
  "MercuryP": {
    "displayName": "MercuryP",
    "sectionType": "Projectile"
  },
  "BackwarpP1": {
    "displayName": "BackwarpP1",
    "sectionType": "Projectile"
  },
  "BackwarpP2": {
    "displayName": "BackwarpP2",
    "sectionType": "Projectile"
  },
  "BackwarpP3": {
    "displayName": "BackwarpP3",
    "sectionType": "Projectile"
  },
  "BackwarpP4": {
    "displayName": "BackwarpP4",
    "sectionType": "Projectile"
  },
  "BackwarpP5": {
    "displayName": "BackwarpP5",
    "sectionType": "Projectile"
  },
  "GeneburstP": {
    "displayName": "GeneburstP",
    "sectionType": "Projectile"
  },
  "VentrexP": {
    "displayName": "VentrexP",
    "sectionType": "Projectile"
  },
  "VentrexScavP": {
    "displayName": "VentrexScavP",
    "sectionType": "Projectile"
  },
  "SmallCometP": {
    "displayName": "SmallCometP",
    "sectionType": "Projectile"
  },
  "SmallTeslaP": {
    "displayName": "SmallTeslaP",
    "sectionType": "Projectile"
  },
  "CeasefireWH": {
    "displayName": "CeasefireWH",
    "sectionType": "Warhead"
  },
  "CeasekillWH": {
    "displayName": "CeasekillWH",
    "sectionType": "Warhead"
  },
  "SuperIronWeaponWH": {
    "displayName": "SuperIronWeaponWH",
    "sectionType": "Warhead"
  },
  "TrueSuperIronWeaponWH": {
    "displayName": "TrueSuperIronWeaponWH",
    "sectionType": "Warhead"
  },
  "BlueJammer": {
    "displayName": "BlueJammer",
    "sectionType": "Warhead"
  },
  "CyanCryo": {
    "displayName": "CyanCryo",
    "sectionType": "Warhead"
  },
  "FakeArrowWH": {
    "displayName": "FakeArrowWH",
    "sectionType": "Warhead"
  },
  "ExtendLifeWH": {
    "displayName": "ExtendLifeWH",
    "sectionType": "Warhead"
  },
  "OneMoreSecond": {
    "displayName": "OneMoreSecond",
    "sectionType": "Warhead"
  },
  "StructureBuffLargeWH": {
    "displayName": "StructureBuffLargeWH",
    "sectionType": "Warhead"
  },
  "FauxDomIntroWH": {
    "displayName": "FauxDomIntroWH",
    "sectionType": "Warhead"
  },
  "FauxDomSoundWH": {
    "displayName": "FauxDomSoundWH",
    "sectionType": "Warhead"
  },
  "FauxDomAttachWH": {
    "displayName": "FauxDomAttachWH",
    "sectionType": "Warhead"
  },
  "FauxDomStrikeWH": {
    "displayName": "FauxDomStrikeWH",
    "sectionType": "Warhead"
  },
  "HummSA": {
    "displayName": "HummSA",
    "sectionType": "Warhead"
  },
  "HummSAE": {
    "displayName": "HummSAE",
    "sectionType": "Warhead"
  },
  "SA": {
    "displayName": "SA",
    "sectionType": "Warhead"
  },
  "SAE": {
    "displayName": "SAE",
    "sectionType": "Warhead"
  },
  "CamoSA": {
    "displayName": "CamoSA",
    "sectionType": "Warhead"
  },
  "CamoSAE": {
    "displayName": "CamoSAE",
    "sectionType": "Warhead"
  },
  "BuzzardWH": {
    "displayName": "BuzzardWH",
    "sectionType": "Warhead"
  },
  "DKnightSAWH": {
    "displayName": "DKnightSAWH",
    "sectionType": "Warhead"
  },
  "KnightSA": {
    "displayName": "KnightSA",
    "sectionType": "Warhead"
  },
  "KnightSAE": {
    "displayName": "KnightSAE",
    "sectionType": "Warhead"
  },
  "KnightSAB": {
    "displayName": "KnightSAB",
    "sectionType": "Warhead"
  },
  "KnightSABE": {
    "displayName": "KnightSABE",
    "sectionType": "Warhead"
  },
  "RiotGunWH": {
    "displayName": "RiotGunWH",
    "sectionType": "Warhead"
  },
  "CivilianSA": {
    "displayName": "CivilianSA",
    "sectionType": "Warhead"
  },
  "GattWH": {
    "displayName": "GattWH",
    "sectionType": "Warhead"
  },
  "GattWHE": {
    "displayName": "GattWHE",
    "sectionType": "Warhead"
  },
  "GattAAWH": {
    "displayName": "GattAAWH",
    "sectionType": "Warhead"
  },
  "GattAAWHE": {
    "displayName": "GattAAWHE",
    "sectionType": "Warhead"
  },
  "HARVWH": {
    "displayName": "HARVWH",
    "sectionType": "Warhead"
  },
  "HARVWHE": {
    "displayName": "HARVWHE",
    "sectionType": "Warhead"
  },
  "SSA": {
    "displayName": "SSA",
    "sectionType": "Warhead"
  },
  "SSAE": {
    "displayName": "SSAE",
    "sectionType": "Warhead"
  },
  "PsychicSSA": {
    "displayName": "PsychicSSA",
    "sectionType": "Warhead"
  },
  "PsychicSSAE": {
    "displayName": "PsychicSSAE",
    "sectionType": "Warhead"
  },
  "HydraSSA": {
    "displayName": "HydraSSA",
    "sectionType": "Warhead"
  },
  "HydraSSAE": {
    "displayName": "HydraSSAE",
    "sectionType": "Warhead"
  },
  "ScavSSA": {
    "displayName": "ScavSSA",
    "sectionType": "Warhead"
  },
  "ScavSSAE": {
    "displayName": "ScavSSAE",
    "sectionType": "Warhead"
  },
  "SSANoBuilding": {
    "displayName": "SSANoBuilding",
    "sectionType": "Warhead"
  },
  "JumpjetSSA": {
    "displayName": "JumpjetSSA",
    "sectionType": "Warhead"
  },
  "JumpjetSSAE": {
    "displayName": "JumpjetSSAE",
    "sectionType": "Warhead"
  },
  "FortressSSA": {
    "displayName": "FortressSSA",
    "sectionType": "Warhead"
  },
  "FortressSSAE": {
    "displayName": "FortressSSAE",
    "sectionType": "Warhead"
  },
  "VultureSA": {
    "displayName": "VultureSA",
    "sectionType": "Warhead"
  },
  "VultureSAE": {
    "displayName": "VultureSAE",
    "sectionType": "Warhead"
  },
  "WolfhoundSA": {
    "displayName": "WolfhoundSA",
    "sectionType": "Warhead"
  },
  "WolfhoundSAE": {
    "displayName": "WolfhoundSAE",
    "sectionType": "Warhead"
  },
  "SSAB": {
    "displayName": "SSAB",
    "sectionType": "Warhead"
  },
  "SSABE": {
    "displayName": "SSABE",
    "sectionType": "Warhead"
  },
  "HollowPointSEAL": {
    "displayName": "HollowPointSEAL",
    "sectionType": "Warhead"
  },
  "HollowPointSEALE": {
    "displayName": "HollowPointSEALE",
    "sectionType": "Warhead"
  },
  "HollowPointCRSEALWH": {
    "displayName": "HollowPointCRSEALWH",
    "sectionType": "Warhead"
  },
  "HollowPointCRSEALWHE": {
    "displayName": "HollowPointCRSEALWHE",
    "sectionType": "Warhead"
  },
  "HollowPoint2": {
    "displayName": "HollowPoint2",
    "sectionType": "Warhead"
  },
  "HollowPoint4": {
    "displayName": "HollowPoint4",
    "sectionType": "Warhead"
  },
  "HollowPoint4E": {
    "displayName": "HollowPoint4E",
    "sectionType": "Warhead"
  },
  "BORISWH": {
    "displayName": "BORISWH",
    "sectionType": "Warhead"
  },
  "BORISWHE": {
    "displayName": "BORISWHE",
    "sectionType": "Warhead"
  },
  "HollowPoint": {
    "displayName": "HollowPoint",
    "sectionType": "Warhead"
  },
  "HollowPointE": {
    "displayName": "HollowPointE",
    "sectionType": "Warhead"
  },
  "SANoBuilding": {
    "displayName": "SANoBuilding",
    "sectionType": "Unknown"
  },
  "LibraLightWH": {
    "displayName": "LibraLightWH",
    "sectionType": "Warhead"
  },
  "GreatTempestAnimWH": {
    "displayName": "GreatTempestAnimWH",
    "sectionType": "Warhead"
  },
  "GreatTempestAnim2WH": {
    "displayName": "GreatTempestAnim2WH",
    "sectionType": "Warhead"
  },
  "GreatTempestBlastWH": {
    "displayName": "GreatTempestBlastWH",
    "sectionType": "Warhead"
  },
  "GreatTempestRockWH": {
    "displayName": "GreatTempestRockWH",
    "sectionType": "Warhead"
  },
  "FirestormTempestWH": {
    "displayName": "FirestormTempestWH",
    "sectionType": "Warhead"
  },
  "MadbombWH": {
    "displayName": "MadbombWH",
    "sectionType": "Warhead"
  },
  "WallbusterWH": {
    "displayName": "WallbusterWH",
    "sectionType": "Warhead"
  },
  "ASWLaunchWH": {
    "displayName": "ASWLaunchWH",
    "sectionType": "Warhead"
  },
  "Special2": {
    "displayName": "Special2",
    "sectionType": "Warhead"
  },
  "Special3": {
    "displayName": "Special3",
    "sectionType": "Warhead"
  },
  "Special4": {
    "displayName": "Special4",
    "sectionType": "Warhead"
  },
  "Cuttering": {
    "displayName": "Cuttering",
    "sectionType": "Warhead"
  },
  "CutteringB": {
    "displayName": "CutteringB",
    "sectionType": "Warhead"
  },
  "CutteringC": {
    "displayName": "CutteringC",
    "sectionType": "Warhead"
  },
  "MegaslashWH": {
    "displayName": "MegaslashWH",
    "sectionType": "Warhead"
  },
  "TankSnapshot": {
    "displayName": "TankSnapshot",
    "sectionType": "Warhead"
  },
  "StealthScannerWH": {
    "displayName": "StealthScannerWH",
    "sectionType": "Warhead"
  },
  "SpotLightWH": {
    "displayName": "SpotLightWH",
    "sectionType": "Warhead"
  },
  "RepulsorWH": {
    "displayName": "RepulsorWH",
    "sectionType": "Warhead"
  },
  "RepulsorEffectWH": {
    "displayName": "RepulsorEffectWH",
    "sectionType": "Warhead"
  },
  "LibraWH": {
    "displayName": "LibraWH",
    "sectionType": "Warhead"
  },
  "LibraWHE": {
    "displayName": "LibraWHE",
    "sectionType": "Warhead"
  },
  "AntiGravityWH": {
    "displayName": "AntiGravityWH",
    "sectionType": "Warhead"
  },
  "GravitronFieldWH": {
    "displayName": "GravitronFieldWH",
    "sectionType": "Warhead"
  },
  "GravitronAnimWH": {
    "displayName": "GravitronAnimWH",
    "sectionType": "Warhead"
  },
  "AthenaWHSmall": {
    "displayName": "AthenaWHSmall",
    "sectionType": "Warhead"
  },
  "TargetPainterWH": {
    "displayName": "TargetPainterWH",
    "sectionType": "Warhead"
  },
  "BulldogPainterWH": {
    "displayName": "BulldogPainterWH",
    "sectionType": "Warhead"
  },
  "QuakeWeaponWH": {
    "displayName": "QuakeWeaponWH",
    "sectionType": "Warhead"
  },
  "QuakeWeaponWHE": {
    "displayName": "QuakeWeaponWHE",
    "sectionType": "Warhead"
  },
  "StalkerWH": {
    "displayName": "StalkerWH",
    "sectionType": "Warhead"
  },
  "StalkerWHE": {
    "displayName": "StalkerWHE",
    "sectionType": "Warhead"
  },
  "StalkerDrainWH": {
    "displayName": "StalkerDrainWH",
    "sectionType": "Warhead"
  },
  "StalkerDrainWHAnim": {
    "displayName": "StalkerDrainWHAnim",
    "sectionType": "Warhead"
  },
  "GotterBombWH": {
    "displayName": "GotterBombWH",
    "sectionType": "Warhead"
  },
  "GotterBombWHE": {
    "displayName": "GotterBombWHE",
    "sectionType": "Warhead"
  },
  "StratoWH": {
    "displayName": "StratoWH",
    "sectionType": "Warhead"
  },
  "CruiserWH": {
    "displayName": "CruiserWH",
    "sectionType": "Warhead"
  },
  "ParasitePro": {
    "displayName": "ParasitePro",
    "sectionType": "Warhead"
  },
  "ElephantWH": {
    "displayName": "ElephantWH",
    "sectionType": "Warhead"
  },
  "MODeathWH": {
    "displayName": "MODeathWH",
    "sectionType": "Warhead"
  },
  "ColossusWH": {
    "displayName": "ColossusWH",
    "sectionType": "Warhead"
  },
  "BeetleRollWH": {
    "displayName": "BeetleRollWH",
    "sectionType": "Warhead"
  },
  "DeathFlashWH": {
    "displayName": "DeathFlashWH",
    "sectionType": "Warhead"
  },
  "CavalierTargetWH": {
    "displayName": "CavalierTargetWH",
    "sectionType": "Warhead"
  },
  "ChronoWarpWH": {
    "displayName": "ChronoWarpWH",
    "sectionType": "Warhead"
  },
  "ChronoBeam": {
    "displayName": "ChronoBeam",
    "sectionType": "Warhead"
  },
  "ChronoBlasterWH": {
    "displayName": "ChronoBlasterWH",
    "sectionType": "Warhead"
  },
  "SiegfriedWH": {
    "displayName": "SiegfriedWH",
    "sectionType": "Warhead"
  },
  "SiegfriedWH2": {
    "displayName": "SiegfriedWH2",
    "sectionType": "Warhead"
  },
  "ChronoFreezeWH": {
    "displayName": "ChronoFreezeWH",
    "sectionType": "Warhead"
  },
  "MothraWH": {
    "displayName": "MothraWH",
    "sectionType": "Warhead"
  },
  "SquidHE": {
    "displayName": "SquidHE",
    "sectionType": "Warhead"
  },
  "IceCloudWH": {
    "displayName": "IceCloudWH",
    "sectionType": "Warhead"
  },
  "SonicRayWH": {
    "displayName": "SonicRayWH",
    "sectionType": "Warhead"
  },
  "DSonicRayWH": {
    "displayName": "DSonicRayWH",
    "sectionType": "Warhead"
  },
  "IceBeamWH": {
    "displayName": "IceBeamWH",
    "sectionType": "Warhead"
  },
  "IceBeamNerfWH": {
    "displayName": "IceBeamNerfWH",
    "sectionType": "Warhead"
  },
  "BlizzardBeamWH": {
    "displayName": "BlizzardBeamWH",
    "sectionType": "Warhead"
  },
  "BlizzardNerfWH": {
    "displayName": "BlizzardNerfWH",
    "sectionType": "Warhead"
  },
  "BlizzardAAWH": {
    "displayName": "BlizzardAAWH",
    "sectionType": "Warhead"
  },
  "HyperionWH": {
    "displayName": "HyperionWH",
    "sectionType": "Warhead"
  },
  "ScavengerCryoWH": {
    "displayName": "ScavengerCryoWH",
    "sectionType": "Warhead"
  },
  "VentrexWH": {
    "displayName": "VentrexWH",
    "sectionType": "Warhead"
  },
  "SalamanderFieldWH": {
    "displayName": "SalamanderFieldWH",
    "sectionType": "Warhead"
  },
  "ChaosTouchWH": {
    "displayName": "ChaosTouchWH",
    "sectionType": "Warhead"
  },
  "ChaosTouchEffectWH": {
    "displayName": "ChaosTouchEffectWH",
    "sectionType": "Warhead"
  },
  "ConfuseWH": {
    "displayName": "ConfuseWH",
    "sectionType": "Warhead"
  },
  "ConfuseRifleWH": {
    "displayName": "ConfuseRifleWH",
    "sectionType": "Warhead"
  },
  "MantaConfuseRifleWH": {
    "displayName": "MantaConfuseRifleWH",
    "sectionType": "Warhead"
  },
  "SalamanderBeamWH": {
    "displayName": "SalamanderBeamWH",
    "sectionType": "Warhead"
  },
  "ConfusionWH": {
    "displayName": "ConfusionWH",
    "sectionType": "Warhead"
  },
  "SharkSplash": {
    "displayName": "SharkSplash",
    "sectionType": "Warhead"
  },
  "SharkSplashWave": {
    "displayName": "SharkSplashWave",
    "sectionType": "Warhead"
  },
  "SharkSplashWave5": {
    "displayName": "SharkSplashWave5",
    "sectionType": "Warhead"
  },
  "MADMineStartWH": {
    "displayName": "MADMineStartWH",
    "sectionType": "Warhead"
  },
  "MADAIWH": {
    "displayName": "MADAIWH",
    "sectionType": "Warhead"
  },
  "MadEMPWH": {
    "displayName": "MadEMPWH",
    "sectionType": "Warhead"
  },
  "MadWH": {
    "displayName": "MadWH",
    "sectionType": "Warhead"
  },
  "MadMineWH": {
    "displayName": "MadMineWH",
    "sectionType": "Warhead"
  },
  "Mad2WH": {
    "displayName": "Mad2WH",
    "sectionType": "Warhead"
  },
  "MadMine2WH": {
    "displayName": "MadMine2WH",
    "sectionType": "Warhead"
  },
  "WOLFWH": {
    "displayName": "WOLFWH",
    "sectionType": "Warhead"
  },
  "AlanqaAAWH": {
    "displayName": "AlanqaAAWH",
    "sectionType": "Warhead"
  },
  "RoboLaserWH": {
    "displayName": "RoboLaserWH",
    "sectionType": "Warhead"
  },
  "RoboLaserWHE": {
    "displayName": "RoboLaserWHE",
    "sectionType": "Warhead"
  },
  "SunburstLaserWH": {
    "displayName": "SunburstLaserWH",
    "sectionType": "Warhead"
  },
  "TanyaLaserWH": {
    "displayName": "TanyaLaserWH",
    "sectionType": "Warhead"
  },
  "FVTanyaLaserWH": {
    "displayName": "FVTanyaLaserWH",
    "sectionType": "Warhead"
  },
  "AeroblazeWH": {
    "displayName": "AeroblazeWH",
    "sectionType": "Warhead"
  },
  "AeroblazeSniperWH": {
    "displayName": "AeroblazeSniperWH",
    "sectionType": "Warhead"
  },
  "AbramsLaserWH": {
    "displayName": "AbramsLaserWH",
    "sectionType": "Warhead"
  },
  "ScavengerLaserWH": {
    "displayName": "ScavengerLaserWH",
    "sectionType": "Warhead"
  },
  "FutureAP": {
    "displayName": "FutureAP",
    "sectionType": "Warhead"
  },
  "StormGunWH": {
    "displayName": "StormGunWH",
    "sectionType": "Warhead"
  },
  "ComancheWH": {
    "displayName": "ComancheWH",
    "sectionType": "Warhead"
  },
  "Comanche2WH": {
    "displayName": "Comanche2WH",
    "sectionType": "Warhead"
  },
  "CenturionCannonWH": {
    "displayName": "CenturionCannonWH",
    "sectionType": "Warhead"
  },
  "ArchelonWH": {
    "displayName": "ArchelonWH",
    "sectionType": "Warhead"
  },
  "DevourerWH": {
    "displayName": "DevourerWH",
    "sectionType": "Warhead"
  },
  "HuntressWH": {
    "displayName": "HuntressWH",
    "sectionType": "Warhead"
  },
  "MegashieldWH": {
    "displayName": "MegashieldWH",
    "sectionType": "Warhead"
  },
  "PiranhaWH": {
    "displayName": "PiranhaWH",
    "sectionType": "Warhead"
  },
  "ARROWWH": {
    "displayName": "ARROWWH",
    "sectionType": "Warhead"
  },
  "ScavengerMedusaWH": {
    "displayName": "ScavengerMedusaWH",
    "sectionType": "Warhead"
  },
  "GehennaWH": {
    "displayName": "GehennaWH",
    "sectionType": "Warhead"
  },
  "SalamanderWH": {
    "displayName": "SalamanderWH",
    "sectionType": "Warhead"
  },
  "TimeFreezeWH": {
    "displayName": "TimeFreezeWH",
    "sectionType": "Warhead"
  },
  "TemporalShieldWH": {
    "displayName": "TemporalShieldWH",
    "sectionType": "Warhead"
  },
  "MineBombEMPWH": {
    "displayName": "MineBombEMPWH",
    "sectionType": "Warhead"
  },
  "EMPuls": {
    "displayName": "EMPuls",
    "sectionType": "Warhead"
  },
  "EMPBeamWH": {
    "displayName": "EMPBeamWH",
    "sectionType": "Warhead"
  },
  "ElectricTankEMP": {
    "displayName": "ElectricTankEMP",
    "sectionType": "Warhead"
  },
  "ScourgeEMPWH": {
    "displayName": "ScourgeEMPWH",
    "sectionType": "Warhead"
  },
  "SeitaadEMPWH": {
    "displayName": "SeitaadEMPWH",
    "sectionType": "Warhead"
  },
  "EMPulsSuper": {
    "displayName": "EMPulsSuper",
    "sectionType": "Warhead"
  },
  "EMPulsSuperB": {
    "displayName": "EMPulsSuperB",
    "sectionType": "Warhead"
  },
  "EMPYunru": {
    "displayName": "EMPYunru",
    "sectionType": "Warhead"
  },
  "LionheartEMPWH": {
    "displayName": "LionheartEMPWH",
    "sectionType": "Warhead"
  },
  "RaccoonWH": {
    "displayName": "RaccoonWH",
    "sectionType": "Warhead"
  },
  "RaccoonBWH": {
    "displayName": "RaccoonBWH",
    "sectionType": "Warhead"
  },
  "BlackoutMissileWH": {
    "displayName": "BlackoutMissileWH",
    "sectionType": "Warhead"
  },
  "BlackoutBWH": {
    "displayName": "BlackoutBWH",
    "sectionType": "Warhead"
  },
  "RamHackArenaWH": {
    "displayName": "RamHackArenaWH",
    "sectionType": "Warhead"
  },
  "RamHackArenaBWH": {
    "displayName": "RamHackArenaBWH",
    "sectionType": "Warhead"
  },
  "ShadrayWaveWH": {
    "displayName": "ShadrayWaveWH",
    "sectionType": "Warhead"
  },
  "ShadrayWaveAAWH": {
    "displayName": "ShadrayWaveAAWH",
    "sectionType": "Warhead"
  },
  "FakeShadWH": {
    "displayName": "FakeShadWH",
    "sectionType": "Warhead"
  },
  "CondorWH": {
    "displayName": "CondorWH",
    "sectionType": "Warhead"
  },
  "JackalWarhead": {
    "displayName": "JackalWarhead",
    "sectionType": "Warhead"
  },
  "EmitterWarhead": {
    "displayName": "EmitterWarhead",
    "sectionType": "Warhead"
  },
  "DebrisHE": {
    "displayName": "DebrisHE",
    "sectionType": "Warhead"
  },
  "TankOGas": {
    "displayName": "TankOGas",
    "sectionType": "Warhead"
  },
  "EngineerWH": {
    "displayName": "EngineerWH",
    "sectionType": "Warhead"
  },
  "ShovelSA": {
    "displayName": "ShovelSA",
    "sectionType": "Warhead"
  },
  "NautFlame": {
    "displayName": "NautFlame",
    "sectionType": "Warhead"
  },
  "SAFlame": {
    "displayName": "SAFlame",
    "sectionType": "Warhead"
  },
  "SAFlameBlue": {
    "displayName": "SAFlameBlue",
    "sectionType": "Warhead"
  },
  "SeawolfHE": {
    "displayName": "SeawolfHE",
    "sectionType": "Warhead"
  },
  "KnightBetaSA": {
    "displayName": "KnightBetaSA",
    "sectionType": "Warhead"
  },
  "GharialBetaWH": {
    "displayName": "GharialBetaWH",
    "sectionType": "Warhead"
  },
  "GyroWH": {
    "displayName": "GyroWH",
    "sectionType": "Warhead"
  },
  "GyroAAWH": {
    "displayName": "GyroAAWH",
    "sectionType": "Warhead"
  },
  "DummyWH": {
    "displayName": "DummyWH",
    "sectionType": "Warhead"
  },
  "NotAnEiffelWH": {
    "displayName": "NotAnEiffelWH",
    "sectionType": "Warhead"
  },
  "TankScannerWH": {
    "displayName": "TankScannerWH",
    "sectionType": "Warhead"
  },
  "RoadrunnerChokeWH": {
    "displayName": "RoadrunnerChokeWH",
    "sectionType": "Warhead"
  },
  "StrikerGunRunWH": {
    "displayName": "StrikerGunRunWH",
    "sectionType": "Warhead"
  },
  "StingerSprayWH": {
    "displayName": "StingerSprayWH",
    "sectionType": "Warhead"
  },
  "ThorSSA": {
    "displayName": "ThorSSA",
    "sectionType": "Warhead"
  },
  "ThorSSAE": {
    "displayName": "ThorSSAE",
    "sectionType": "Warhead"
  },
  "SSABFlame": {
    "displayName": "SSABFlame",
    "sectionType": "Warhead"
  },
  "SSABFlameBlue": {
    "displayName": "SSABFlameBlue",
    "sectionType": "Warhead"
  },
  "GrumbleWH": {
    "displayName": "GrumbleWH",
    "sectionType": "Warhead"
  },
  "PhalanxWH": {
    "displayName": "PhalanxWH",
    "sectionType": "Warhead"
  },
  "CenturionMissilesWH": {
    "displayName": "CenturionMissilesWH",
    "sectionType": "Warhead"
  },
  "Meteorite": {
    "displayName": "Meteorite",
    "sectionType": "Warhead"
  },
  "HE": {
    "displayName": "HE",
    "sectionType": "Warhead"
  },
  "RhadHE": {
    "displayName": "RhadHE",
    "sectionType": "Warhead"
  },
  "SpeederHE": {
    "displayName": "SpeederHE",
    "sectionType": "Warhead"
  },
  "SpeederToxicHE": {
    "displayName": "SpeederToxicHE",
    "sectionType": "Warhead"
  },
  "IFVWH": {
    "displayName": "IFVWH",
    "sectionType": "Warhead"
  },
  "VoyagerWH": {
    "displayName": "VoyagerWH",
    "sectionType": "Warhead"
  },
  "MTWH": {
    "displayName": "MTWH",
    "sectionType": "Warhead"
  },
  "ApocMissileWH": {
    "displayName": "ApocMissileWH",
    "sectionType": "Warhead"
  },
  "HydraMissileWH": {
    "displayName": "HydraMissileWH",
    "sectionType": "Warhead"
  },
  "V3WH": {
    "displayName": "V3WH",
    "sectionType": "Warhead"
  },
  "V3EWH": {
    "displayName": "V3EWH",
    "sectionType": "Warhead"
  },
  "DMISLWH": {
    "displayName": "DMISLWH",
    "sectionType": "Warhead"
  },
  "DMISLEWH": {
    "displayName": "DMISLEWH",
    "sectionType": "Warhead"
  },
  "CMISLWH": {
    "displayName": "CMISLWH",
    "sectionType": "Warhead"
  },
  "CMISLEWH": {
    "displayName": "CMISLEWH",
    "sectionType": "Warhead"
  },
  "MiniNukeRadWH": {
    "displayName": "MiniNukeRadWH",
    "sectionType": "Warhead"
  },
  "SwarmBombWH": {
    "displayName": "SwarmBombWH",
    "sectionType": "Warhead"
  },
  "SwarmBombEWH": {
    "displayName": "SwarmBombEWH",
    "sectionType": "Warhead"
  },
  "BlimpHE": {
    "displayName": "BlimpHE",
    "sectionType": "Warhead"
  },
  "BlimpHEE": {
    "displayName": "BlimpHEE",
    "sectionType": "Warhead"
  },
  "ARTYHE": {
    "displayName": "ARTYHE",
    "sectionType": "Warhead"
  },
  "ARTYHE2": {
    "displayName": "ARTYHE2",
    "sectionType": "Warhead"
  },
  "IonWH": {
    "displayName": "IonWH",
    "sectionType": "Warhead"
  },
  "ZTargetKill": {
    "displayName": "ZTargetKill",
    "sectionType": "Warhead"
  },
  "SirenKillWH": {
    "displayName": "SirenKillWH",
    "sectionType": "Warhead"
  },
  "VisionKillWH": {
    "displayName": "VisionKillWH",
    "sectionType": "Warhead"
  },
  "FakeKillSelfWH": {
    "displayName": "FakeKillSelfWH",
    "sectionType": "Warhead"
  },
  "JammerKillWH": {
    "displayName": "JammerKillWH",
    "sectionType": "Warhead"
  },
  "FuryKillWH": {
    "displayName": "FuryKillWH",
    "sectionType": "Warhead"
  },
  "VenomKillWH": {
    "displayName": "VenomKillWH",
    "sectionType": "Warhead"
  },
  "DiverKillWH": {
    "displayName": "DiverKillWH",
    "sectionType": "Warhead"
  },
  "WasteKillWH": {
    "displayName": "WasteKillWH",
    "sectionType": "Warhead"
  },
  "ScorchKillWH": {
    "displayName": "ScorchKillWH",
    "sectionType": "Warhead"
  },
  "MadKillWH": {
    "displayName": "MadKillWH",
    "sectionType": "Warhead"
  },
  "MagKillWH": {
    "displayName": "MagKillWH",
    "sectionType": "Warhead"
  },
  "AddonKillWH": {
    "displayName": "AddonKillWH",
    "sectionType": "Warhead"
  },
  "FUSIKILL": {
    "displayName": "FUSIKILL",
    "sectionType": "Warhead"
  },
  "HowitzerWH": {
    "displayName": "HowitzerWH",
    "sectionType": "Warhead"
  },
  "HowitzerBeaconWH": {
    "displayName": "HowitzerBeaconWH",
    "sectionType": "Warhead"
  },
  "AirhackAnimWH": {
    "displayName": "AirhackAnimWH",
    "sectionType": "Warhead"
  },
  "ColossusAAWH": {
    "displayName": "ColossusAAWH",
    "sectionType": "Warhead"
  },
  "ColossusAnimWH": {
    "displayName": "ColossusAnimWH",
    "sectionType": "Warhead"
  },
  "BasiliskWH": {
    "displayName": "BasiliskWH",
    "sectionType": "Warhead"
  },
  "BasiliskWHE": {
    "displayName": "BasiliskWHE",
    "sectionType": "Warhead"
  },
  "TyrantWH": {
    "displayName": "TyrantWH",
    "sectionType": "Warhead"
  },
  "RazgarWH": {
    "displayName": "RazgarWH",
    "sectionType": "Warhead"
  },
  "PsychicDartsWH": {
    "displayName": "PsychicDartsWH",
    "sectionType": "Warhead"
  },
  "SwordfishWH": {
    "displayName": "SwordfishWH",
    "sectionType": "Warhead"
  },
  "LancerWH": {
    "displayName": "LancerWH",
    "sectionType": "Warhead"
  },
  "Lancer2WH": {
    "displayName": "Lancer2WH",
    "sectionType": "Warhead"
  },
  "LancerOTWH": {
    "displayName": "LancerOTWH",
    "sectionType": "Warhead"
  },
  "DLancerWH": {
    "displayName": "DLancerWH",
    "sectionType": "Warhead"
  },
  "DLancer2WH": {
    "displayName": "DLancer2WH",
    "sectionType": "Warhead"
  },
  "DLancerOTWH": {
    "displayName": "DLancerOTWH",
    "sectionType": "Warhead"
  },
  "RamWeldWH": {
    "displayName": "RamWeldWH",
    "sectionType": "Warhead"
  },
  "NeonWeldWH": {
    "displayName": "NeonWeldWH",
    "sectionType": "Warhead"
  },
  "SeekerWH": {
    "displayName": "SeekerWH",
    "sectionType": "Warhead"
  },
  "SeekerBombWH": {
    "displayName": "SeekerBombWH",
    "sectionType": "Warhead"
  },
  "DSeekerBombWH": {
    "displayName": "DSeekerBombWH",
    "sectionType": "Warhead"
  },
  "MeteorImpactWH": {
    "displayName": "MeteorImpactWH",
    "sectionType": "Warhead"
  },
  "AP": {
    "displayName": "AP",
    "sectionType": "Warhead"
  },
  "RHINAPE": {
    "displayName": "RHINAPE",
    "sectionType": "Warhead"
  },
  "TurretAP": {
    "displayName": "TurretAP",
    "sectionType": "Warhead"
  },
  "TurretAPE": {
    "displayName": "TurretAPE",
    "sectionType": "Warhead"
  },
  "FortressAP": {
    "displayName": "FortressAP",
    "sectionType": "Warhead"
  },
  "ScavAP": {
    "displayName": "ScavAP",
    "sectionType": "Warhead"
  },
  "AbramsCannonWH": {
    "displayName": "AbramsCannonWH",
    "sectionType": "Warhead"
  },
  "JAGDWH": {
    "displayName": "JAGDWH",
    "sectionType": "Warhead"
  },
  "JAGDWHE": {
    "displayName": "JAGDWHE",
    "sectionType": "Warhead"
  },
  "JAGDMissileWH": {
    "displayName": "JAGDMissileWH",
    "sectionType": "Warhead"
  },
  "CataAP": {
    "displayName": "CataAP",
    "sectionType": "Warhead"
  },
  "CataAPE": {
    "displayName": "CataAPE",
    "sectionType": "Warhead"
  },
  "TeslaAP": {
    "displayName": "TeslaAP",
    "sectionType": "Warhead"
  },
  "TeslaAPE": {
    "displayName": "TeslaAPE",
    "sectionType": "Warhead"
  },
  "ApocalypseWH": {
    "displayName": "ApocalypseWH",
    "sectionType": "Warhead"
  },
  "ApocalypseWHE": {
    "displayName": "ApocalypseWHE",
    "sectionType": "Warhead"
  },
  "Eureka1WH": {
    "displayName": "Eureka1WH",
    "sectionType": "Warhead"
  },
  "Eureka2WH": {
    "displayName": "Eureka2WH",
    "sectionType": "Warhead"
  },
  "GharialPilesWH": {
    "displayName": "GharialPilesWH",
    "sectionType": "Warhead"
  },
  "ARMORAP": {
    "displayName": "ARMORAP",
    "sectionType": "Warhead"
  },
  "ASWSplash": {
    "displayName": "ASWSplash",
    "sectionType": "Warhead"
  },
  "RoboSplash": {
    "displayName": "RoboSplash",
    "sectionType": "Warhead"
  },
  "APSplash": {
    "displayName": "APSplash",
    "sectionType": "Warhead"
  },
  "SuperSubAP": {
    "displayName": "SuperSubAP",
    "sectionType": "Warhead"
  },
  "APSplashNaut": {
    "displayName": "APSplashNaut",
    "sectionType": "Warhead"
  },
  "CannonBunkerWH": {
    "displayName": "CannonBunkerWH",
    "sectionType": "Warhead"
  },
  "CannonBunkerWHE": {
    "displayName": "CannonBunkerWHE",
    "sectionType": "Warhead"
  },
  "GUARDWH": {
    "displayName": "GUARDWH",
    "sectionType": "Warhead"
  },
  "TRexWH": {
    "displayName": "TRexWH",
    "sectionType": "Warhead"
  },
  "TRexInfWH": {
    "displayName": "TRexInfWH",
    "sectionType": "Warhead"
  },
  "FakeC4WH": {
    "displayName": "FakeC4WH",
    "sectionType": "Warhead"
  },
  "VirusGas": {
    "displayName": "VirusGas",
    "sectionType": "Warhead"
  },
  "PromeNanoWH": {
    "displayName": "PromeNanoWH",
    "sectionType": "Warhead"
  },
  "HECannonWH": {
    "displayName": "HECannonWH",
    "sectionType": "Warhead"
  },
  "BuratinoWH": {
    "displayName": "BuratinoWH",
    "sectionType": "Warhead"
  },
  "QuadMortarWH": {
    "displayName": "QuadMortarWH",
    "sectionType": "Warhead"
  },
  "ScorchbombWH": {
    "displayName": "ScorchbombWH",
    "sectionType": "Warhead"
  },
  "ScorchbombDWH": {
    "displayName": "ScorchbombDWH",
    "sectionType": "Warhead"
  },
  "Scorchbomb2WH": {
    "displayName": "Scorchbomb2WH",
    "sectionType": "Warhead"
  },
  "ScorchbombFragWH": {
    "displayName": "ScorchbombFragWH",
    "sectionType": "Warhead"
  },
  "VultureBombsWH": {
    "displayName": "VultureBombsWH",
    "sectionType": "Warhead"
  },
  "VultureBombsWHE": {
    "displayName": "VultureBombsWHE",
    "sectionType": "Warhead"
  },
  "FirestormWH": {
    "displayName": "FirestormWH",
    "sectionType": "Warhead"
  },
  "PyroWH": {
    "displayName": "PyroWH",
    "sectionType": "Warhead"
  },
  "PyroWHE": {
    "displayName": "PyroWHE",
    "sectionType": "Warhead"
  },
  "BorilloWH": {
    "displayName": "BorilloWH",
    "sectionType": "Warhead"
  },
  "BorilloWHE": {
    "displayName": "BorilloWHE",
    "sectionType": "Warhead"
  },
  "TurretFireWH": {
    "displayName": "TurretFireWH",
    "sectionType": "Warhead"
  },
  "TurretFireWHE": {
    "displayName": "TurretFireWHE",
    "sectionType": "Warhead"
  },
  "TurretAnimFireWH": {
    "displayName": "TurretAnimFireWH",
    "sectionType": "Warhead"
  },
  "WhiteFlameWH": {
    "displayName": "WhiteFlameWH",
    "sectionType": "Warhead"
  },
  "WhiteFlameWHE": {
    "displayName": "WhiteFlameWHE",
    "sectionType": "Warhead"
  },
  "BlueFire": {
    "displayName": "BlueFire",
    "sectionType": "Warhead"
  },
  "Fire": {
    "displayName": "Fire",
    "sectionType": "Warhead"
  },
  "Fire2": {
    "displayName": "Fire2",
    "sectionType": "Warhead"
  },
  "FireStreamWH": {
    "displayName": "FireStreamWH",
    "sectionType": "Warhead"
  },
  "RuptureWH": {
    "displayName": "RuptureWH",
    "sectionType": "Warhead"
  },
  "SuperRuptureWH": {
    "displayName": "SuperRuptureWH",
    "sectionType": "Warhead"
  },
  "ChronoImprisonWH": {
    "displayName": "ChronoImprisonWH",
    "sectionType": "Warhead"
  },
  "StunGunWH": {
    "displayName": "StunGunWH",
    "sectionType": "Warhead"
  },
  "GrinderWH": {
    "displayName": "GrinderWH",
    "sectionType": "Warhead"
  },
  "GrinderRigWH": {
    "displayName": "GrinderRigWH",
    "sectionType": "Warhead"
  },
  "HollowPointAnimal": {
    "displayName": "HollowPointAnimal",
    "sectionType": "Warhead"
  },
  "UnderBladeWH": {
    "displayName": "UnderBladeWH",
    "sectionType": "Warhead"
  },
  "VirusWH": {
    "displayName": "VirusWH",
    "sectionType": "Warhead"
  },
  "VirusWHE": {
    "displayName": "VirusWHE",
    "sectionType": "Warhead"
  },
  "VirusAttach": {
    "displayName": "VirusAttach",
    "sectionType": "Warhead"
  },
  "FinAutoSniperGunWH": {
    "displayName": "FinAutoSniperGunWH",
    "sectionType": "Warhead"
  },
  "Super": {
    "displayName": "Super",
    "sectionType": "Warhead"
  },
  "SuperSeal": {
    "displayName": "SuperSeal",
    "sectionType": "Warhead"
  },
  "SuperSpecial": {
    "displayName": "SuperSpecial",
    "sectionType": "Warhead"
  },
  "Crush": {
    "displayName": "Crush",
    "sectionType": "Warhead"
  },
  "SiblingFinHeal": {
    "displayName": "SiblingFinHeal",
    "sectionType": "Warhead"
  },
  "SiblingAlizeHeal": {
    "displayName": "SiblingAlizeHeal",
    "sectionType": "Warhead"
  },
  "OrganicAnim": {
    "displayName": "OrganicAnim",
    "sectionType": "Warhead"
  },
  "HuntressHealWH": {
    "displayName": "HuntressHealWH",
    "sectionType": "Warhead"
  },
  "MantisLifeWH": {
    "displayName": "MantisLifeWH",
    "sectionType": "Warhead"
  },
  "ThorHTLWH": {
    "displayName": "ThorHTLWH",
    "sectionType": "Warhead"
  },
  "JudgementWH": {
    "displayName": "JudgementWH",
    "sectionType": "Warhead"
  },
  "NanochargeWH": {
    "displayName": "NanochargeWH",
    "sectionType": "Warhead"
  },
  "GodsbaneMissileWH": {
    "displayName": "GodsbaneMissileWH",
    "sectionType": "Warhead"
  },
  "GodsbaneFragWH": {
    "displayName": "GodsbaneFragWH",
    "sectionType": "Warhead"
  },
  "SeitaadMissileWH": {
    "displayName": "SeitaadMissileWH",
    "sectionType": "Warhead"
  },
  "SeitaadMissileFragWH": {
    "displayName": "SeitaadMissileFragWH",
    "sectionType": "Warhead"
  },
  "OxidizerTargetWH": {
    "displayName": "OxidizerTargetWH",
    "sectionType": "Warhead"
  },
  "TyrantTargetWH": {
    "displayName": "TyrantTargetWH",
    "sectionType": "Warhead"
  },
  "CorossionBWH": {
    "displayName": "CorossionBWH",
    "sectionType": "Warhead"
  },
  "RoadrunnerNerfWH": {
    "displayName": "RoadrunnerNerfWH",
    "sectionType": "Warhead"
  },
  "HyperionFlashWH": {
    "displayName": "HyperionFlashWH",
    "sectionType": "Warhead"
  },
  "Cryobeam1WH": {
    "displayName": "Cryobeam1WH",
    "sectionType": "Warhead"
  },
  "Cryobeam2WH": {
    "displayName": "Cryobeam2WH",
    "sectionType": "Warhead"
  },
  "Cryobeam3WH": {
    "displayName": "Cryobeam3WH",
    "sectionType": "Warhead"
  },
  "Cryobeam4WH": {
    "displayName": "Cryobeam4WH",
    "sectionType": "Warhead"
  },
  "CryobeamIAnimAWH": {
    "displayName": "CryobeamIAnimAWH",
    "sectionType": "Warhead"
  },
  "Cryobeam5WH": {
    "displayName": "Cryobeam5WH",
    "sectionType": "Warhead"
  },
  "CryobeamIVAnimAWH": {
    "displayName": "CryobeamIVAnimAWH",
    "sectionType": "Warhead"
  },
  "Cryobeam6WH": {
    "displayName": "Cryobeam6WH",
    "sectionType": "Warhead"
  },
  "Cryobeam6AnimAWH": {
    "displayName": "Cryobeam6AnimAWH",
    "sectionType": "Warhead"
  },
  "Cryobeam6AnimBWH": {
    "displayName": "Cryobeam6AnimBWH",
    "sectionType": "Warhead"
  },
  "Cryobeam6AnimCWH": {
    "displayName": "Cryobeam6AnimCWH",
    "sectionType": "Warhead"
  },
  "CryoshotSuperWH": {
    "displayName": "CryoshotSuperWH",
    "sectionType": "Warhead"
  },
  "CryospearSuperWH": {
    "displayName": "CryospearSuperWH",
    "sectionType": "Warhead"
  },
  "SuppressorPartWH": {
    "displayName": "SuppressorPartWH",
    "sectionType": "Warhead"
  },
  "SuppressorWH": {
    "displayName": "SuppressorWH",
    "sectionType": "Warhead"
  },
  "WarpnodeWH": {
    "displayName": "WarpnodeWH",
    "sectionType": "Warhead"
  },
  "RedSuppress": {
    "displayName": "RedSuppress",
    "sectionType": "Warhead"
  },
  "BondBreakerWH": {
    "displayName": "BondBreakerWH",
    "sectionType": "Warhead"
  },
  "BondEruptionWH": {
    "displayName": "BondEruptionWH",
    "sectionType": "Warhead"
  },
  "BondEruption2WH": {
    "displayName": "BondEruption2WH",
    "sectionType": "Warhead"
  },
  "KineticBarrierWH": {
    "displayName": "KineticBarrierWH",
    "sectionType": "Warhead"
  },
  "CyclopsBuffWH": {
    "displayName": "CyclopsBuffWH",
    "sectionType": "Warhead"
  },
  "OverchargeWH": {
    "displayName": "OverchargeWH",
    "sectionType": "Warhead"
  },
  "PerunChargeWH": {
    "displayName": "PerunChargeWH",
    "sectionType": "Warhead"
  },
  "UnderminerWH": {
    "displayName": "UnderminerWH",
    "sectionType": "Warhead"
  },
  "UCUnderminerWH": {
    "displayName": "UCUnderminerWH",
    "sectionType": "Warhead"
  },
  "BrightFlashWH": {
    "displayName": "BrightFlashWH",
    "sectionType": "Warhead"
  },
  "SuperFlashWH": {
    "displayName": "SuperFlashWH",
    "sectionType": "Warhead"
  },
  "CryobaseWH": {
    "displayName": "CryobaseWH",
    "sectionType": "Warhead"
  },
  "IronBlastFlashWH": {
    "displayName": "IronBlastFlashWH",
    "sectionType": "Warhead"
  },
  "IronDeviceFlashWH": {
    "displayName": "IronDeviceFlashWH",
    "sectionType": "Warhead"
  },
  "IronOldFlashWH": {
    "displayName": "IronOldFlashWH",
    "sectionType": "Warhead"
  },
  "BoidmachineFlashWH": {
    "displayName": "BoidmachineFlashWH",
    "sectionType": "Warhead"
  },
  "ShadrayFlashWH": {
    "displayName": "ShadrayFlashWH",
    "sectionType": "Warhead"
  },
  "DSpiderWebWH": {
    "displayName": "DSpiderWebWH",
    "sectionType": "Warhead"
  },
  "SpiderWebWH": {
    "displayName": "SpiderWebWH",
    "sectionType": "Warhead"
  },
  "StunGridWH": {
    "displayName": "StunGridWH",
    "sectionType": "Warhead"
  },
  "BuzzardMinesStunWH": {
    "displayName": "BuzzardMinesStunWH",
    "sectionType": "Warhead"
  },
  "RageInductorWH": {
    "displayName": "RageInductorWH",
    "sectionType": "Warhead"
  },
  "GlacialScreenWH": {
    "displayName": "GlacialScreenWH",
    "sectionType": "Warhead"
  },
  "IrradiateBetaWH": {
    "displayName": "IrradiateBetaWH",
    "sectionType": "Warhead"
  },
  "IrradiateWH": {
    "displayName": "IrradiateWH",
    "sectionType": "Warhead"
  },
  "MaintenanceWH": {
    "displayName": "MaintenanceWH",
    "sectionType": "Warhead"
  },
  "CraneWeaponWH": {
    "displayName": "CraneWeaponWH",
    "sectionType": "Warhead"
  },
  "IronGuardWH": {
    "displayName": "IronGuardWH",
    "sectionType": "Warhead"
  },
  "MaintAnimWH": {
    "displayName": "MaintAnimWH",
    "sectionType": "Warhead"
  },
  "CraneAnimWH": {
    "displayName": "CraneAnimWH",
    "sectionType": "Warhead"
  },
  "IllusionWH": {
    "displayName": "IllusionWH",
    "sectionType": "Warhead"
  },
  "StealthGeneratorWH": {
    "displayName": "StealthGeneratorWH",
    "sectionType": "Warhead"
  },
  "StealthHazequadWH": {
    "displayName": "StealthHazequadWH",
    "sectionType": "Warhead"
  },
  "SodarBoostRealWH": {
    "displayName": "SodarBoostRealWH",
    "sectionType": "Warhead"
  },
  "MegaarenaRealWH": {
    "displayName": "MegaarenaRealWH",
    "sectionType": "Warhead"
  },
  "LightningRodWH": {
    "displayName": "LightningRodWH",
    "sectionType": "Warhead"
  },
  "TargetAllCaster": {
    "displayName": "TargetAllCaster",
    "sectionType": "Warhead"
  },
  "NuclearPathWH": {
    "displayName": "NuclearPathWH",
    "sectionType": "Warhead"
  },
  "ChronoboostWH": {
    "displayName": "ChronoboostWH",
    "sectionType": "Warhead"
  },
  "SpinGeneratorWH": {
    "displayName": "SpinGeneratorWH",
    "sectionType": "Warhead"
  },
  "GSpinGeneratorWH": {
    "displayName": "GSpinGeneratorWH",
    "sectionType": "Warhead"
  },
  "HypergateWH": {
    "displayName": "HypergateWH",
    "sectionType": "Warhead"
  },
  "DefenseBuffWH": {
    "displayName": "DefenseBuffWH",
    "sectionType": "Warhead"
  },
  "TankBunkerBuffWH": {
    "displayName": "TankBunkerBuffWH",
    "sectionType": "Warhead"
  },
  "StructureBuffWH": {
    "displayName": "StructureBuffWH",
    "sectionType": "Warhead"
  },
  "ShieldGeneratorWH": {
    "displayName": "ShieldGeneratorWH",
    "sectionType": "Warhead"
  },
  "TimeWarp1WH": {
    "displayName": "TimeWarp1WH",
    "sectionType": "Warhead"
  },
  "TimeWarp2WH": {
    "displayName": "TimeWarp2WH",
    "sectionType": "Warhead"
  },
  "Organic": {
    "displayName": "Organic",
    "sectionType": "Warhead"
  },
  "RegenWH": {
    "displayName": "RegenWH",
    "sectionType": "Warhead"
  },
  "WonderWH": {
    "displayName": "WonderWH",
    "sectionType": "Warhead"
  },
  "RegenHealWH": {
    "displayName": "RegenHealWH",
    "sectionType": "Warhead"
  },
  "HealthyWH": {
    "displayName": "HealthyWH",
    "sectionType": "Warhead"
  },
  "ComancheHealWH": {
    "displayName": "ComancheHealWH",
    "sectionType": "Warhead"
  },
  "RepairMechanical": {
    "displayName": "RepairMechanical",
    "sectionType": "Warhead"
  },
  "RepairMechanicalNMIN": {
    "displayName": "RepairMechanicalNMIN",
    "sectionType": "Warhead"
  },
  "RepairMechanicalReju": {
    "displayName": "RepairMechanicalReju",
    "sectionType": "Warhead"
  },
  "Mechanical": {
    "displayName": "Mechanical",
    "sectionType": "Warhead"
  },
  "MechanicalNegative": {
    "displayName": "MechanicalNegative",
    "sectionType": "Warhead"
  },
  "MechanicalRig": {
    "displayName": "MechanicalRig",
    "sectionType": "Warhead"
  },
  "BackwarpWH": {
    "displayName": "BackwarpWH",
    "sectionType": "Warhead"
  },
  "MastodonHeal": {
    "displayName": "MastodonHeal",
    "sectionType": "Warhead"
  },
  "ExtendLifeHeal": {
    "displayName": "ExtendLifeHeal",
    "sectionType": "Warhead"
  },
  "Controller": {
    "displayName": "Controller",
    "sectionType": "Warhead"
  },
  "ControllerSeizer": {
    "displayName": "ControllerSeizer",
    "sectionType": "Warhead"
  },
  "ControllerSpecial": {
    "displayName": "ControllerSpecial",
    "sectionType": "Warhead"
  },
  "ControllerBuilding": {
    "displayName": "ControllerBuilding",
    "sectionType": "Warhead"
  },
  "ControllerBeacon": {
    "displayName": "ControllerBeacon",
    "sectionType": "Warhead"
  },
  "Parasite": {
    "displayName": "Parasite",
    "sectionType": "Warhead"
  },
  "HollowPointDrone": {
    "displayName": "HollowPointDrone",
    "sectionType": "Warhead"
  },
  "LibraDustWH": {
    "displayName": "LibraDustWH",
    "sectionType": "Warhead"
  },
  "PsiPulse": {
    "displayName": "PsiPulse",
    "sectionType": "Warhead"
  },
  "SuperPsiPulse": {
    "displayName": "SuperPsiPulse",
    "sectionType": "Warhead"
  },
  "IvanBomb": {
    "displayName": "IvanBomb",
    "sectionType": "Warhead"
  },
  "FVIvanBomb": {
    "displayName": "FVIvanBomb",
    "sectionType": "Warhead"
  },
  "FlintBomb": {
    "displayName": "FlintBomb",
    "sectionType": "Warhead"
  },
  "BridgeKillerWH": {
    "displayName": "BridgeKillerWH",
    "sectionType": "Warhead"
  },
  "ArsonistPlaceWH": {
    "displayName": "ArsonistPlaceWH",
    "sectionType": "Warhead"
  },
  "FVArsonistPlaceWH": {
    "displayName": "FVArsonistPlaceWH",
    "sectionType": "Warhead"
  },
  "RepulsorPlaceWH": {
    "displayName": "RepulsorPlaceWH",
    "sectionType": "Warhead"
  },
  "FVRepulsorPlaceWH": {
    "displayName": "FVRepulsorPlaceWH",
    "sectionType": "Warhead"
  },
  "TanyaC4WH": {
    "displayName": "TanyaC4WH",
    "sectionType": "Warhead"
  },
  "SealC4WH": {
    "displayName": "SealC4WH",
    "sectionType": "Warhead"
  },
  "SpecialC4WH": {
    "displayName": "SpecialC4WH",
    "sectionType": "Warhead"
  },
  "IvanWH": {
    "displayName": "IvanWH",
    "sectionType": "Warhead"
  },
  "IvanWHE": {
    "displayName": "IvanWHE",
    "sectionType": "Warhead"
  },
  "IvanDeathWH": {
    "displayName": "IvanDeathWH",
    "sectionType": "Warhead"
  },
  "TerrorBombWH": {
    "displayName": "TerrorBombWH",
    "sectionType": "Warhead"
  },
  "FVTerrorBombWH": {
    "displayName": "FVTerrorBombWH",
    "sectionType": "Warhead"
  },
  "FuryWH": {
    "displayName": "FuryWH",
    "sectionType": "Warhead"
  },
  "ArsonistWH": {
    "displayName": "ArsonistWH",
    "sectionType": "Warhead"
  },
  "HurricaneSpawnWH": {
    "displayName": "HurricaneSpawnWH",
    "sectionType": "Warhead"
  },
  "BuzzardMinesWH": {
    "displayName": "BuzzardMinesWH",
    "sectionType": "Warhead"
  },
  "Gas": {
    "displayName": "Gas",
    "sectionType": "Warhead"
  },
  "SmokebombsWH": {
    "displayName": "SmokebombsWH",
    "sectionType": "Warhead"
  },
  "DustbombsWH": {
    "displayName": "DustbombsWH",
    "sectionType": "Warhead"
  },
  "SmokeCannonWH": {
    "displayName": "SmokeCannonWH",
    "sectionType": "Unknown"
  },
  "SmokebombsSingleWH": {
    "displayName": "SmokebombsSingleWH",
    "sectionType": "Warhead"
  },
  "AirhackWH": {
    "displayName": "AirhackWH",
    "sectionType": "Warhead"
  },
  "GroundhackWH": {
    "displayName": "GroundhackWH",
    "sectionType": "Warhead"
  },
  "BridgeBoom": {
    "displayName": "BridgeBoom",
    "sectionType": "Warhead"
  },
  "IvanFire": {
    "displayName": "IvanFire",
    "sectionType": "Warhead"
  },
  "ArsoFire": {
    "displayName": "ArsoFire",
    "sectionType": "Warhead"
  },
  "ScorchFire": {
    "displayName": "ScorchFire",
    "sectionType": "Warhead"
  },
  "HurricaneWH": {
    "displayName": "HurricaneWH",
    "sectionType": "Warhead"
  },
  "HurrRockWH": {
    "displayName": "HurrRockWH",
    "sectionType": "Warhead"
  },
  "DeathWH": {
    "displayName": "DeathWH",
    "sectionType": "Warhead"
  },
  "InfantryDeathWH": {
    "displayName": "InfantryDeathWH",
    "sectionType": "Warhead"
  },
  "UnitDeathWH": {
    "displayName": "UnitDeathWH",
    "sectionType": "Warhead"
  },
  "AircraftDeathWH": {
    "displayName": "AircraftDeathWH",
    "sectionType": "Warhead"
  },
  "BlimpHEEffect": {
    "displayName": "BlimpHEEffect",
    "sectionType": "Warhead"
  },
  "IrkallaEffect": {
    "displayName": "IrkallaEffect",
    "sectionType": "Warhead"
  },
  "StardustHEEffect": {
    "displayName": "StardustHEEffect",
    "sectionType": "Warhead"
  },
  "RoadrunnerDeathWH": {
    "displayName": "RoadrunnerDeathWH",
    "sectionType": "Warhead"
  },
  "MegalodonDeathWH": {
    "displayName": "MegalodonDeathWH",
    "sectionType": "Warhead"
  },
  "UraganDeathWH": {
    "displayName": "UraganDeathWH",
    "sectionType": "Warhead"
  },
  "MantisDeathWH": {
    "displayName": "MantisDeathWH",
    "sectionType": "Warhead"
  },
  "ScavengerDeathWH": {
    "displayName": "ScavengerDeathWH",
    "sectionType": "Warhead"
  },
  "ToxicMolesWH": {
    "displayName": "ToxicMolesWH",
    "sectionType": "Warhead"
  },
  "RocksExplosionWH": {
    "displayName": "RocksExplosionWH",
    "sectionType": "Warhead"
  },
  "OilExplosionWH": {
    "displayName": "OilExplosionWH",
    "sectionType": "Warhead"
  },
  "OilDerrickExplosionWH": {
    "displayName": "OilDerrickExplosionWH",
    "sectionType": "Warhead"
  },
  "StealthExplosionWH": {
    "displayName": "StealthExplosionWH",
    "sectionType": "Warhead"
  },
  "MineBombWH": {
    "displayName": "MineBombWH",
    "sectionType": "Warhead"
  },
  "CryomineBombWH": {
    "displayName": "CryomineBombWH",
    "sectionType": "Warhead"
  },
  "CryomineFreezeWH": {
    "displayName": "CryomineFreezeWH",
    "sectionType": "Warhead"
  },
  "DuplicantWH": {
    "displayName": "DuplicantWH",
    "sectionType": "Warhead"
  },
  "FVDuplicantWH": {
    "displayName": "FVDuplicantWH",
    "sectionType": "Warhead"
  },
  "RiotSuppressWH": {
    "displayName": "RiotSuppressWH",
    "sectionType": "Warhead"
  },
  "RiotGrenadeWH": {
    "displayName": "RiotGrenadeWH",
    "sectionType": "Warhead"
  },
  "RiotGrenadeGarrisonWH": {
    "displayName": "RiotGrenadeGarrisonWH",
    "sectionType": "Warhead"
  },
  "SpiderBombWH": {
    "displayName": "SpiderBombWH",
    "sectionType": "Warhead"
  },
  "FVSpiderBombWH": {
    "displayName": "FVSpiderBombWH",
    "sectionType": "Warhead"
  },
  "KillDriverWH": {
    "displayName": "KillDriverWH",
    "sectionType": "Warhead"
  },
  "KillDriverAIWH": {
    "displayName": "KillDriverAIWH",
    "sectionType": "Warhead"
  },
  "KillDriverFixWH": {
    "displayName": "KillDriverFixWH",
    "sectionType": "Warhead"
  },
  "AirstrikeFlare": {
    "displayName": "AirstrikeFlare",
    "sectionType": "Warhead"
  },
  "AirstrikeFlareAI": {
    "displayName": "AirstrikeFlareAI",
    "sectionType": "Warhead"
  },
  "KillEngiWH": {
    "displayName": "KillEngiWH",
    "sectionType": "Warhead"
  },
  "ScourgeWH": {
    "displayName": "ScourgeWH",
    "sectionType": "Warhead"
  },
  "ScourgeWHE": {
    "displayName": "ScourgeWHE",
    "sectionType": "Warhead"
  },
  "PlagueWH": {
    "displayName": "PlagueWH",
    "sectionType": "Warhead"
  },
  "TriggerShakerWH": {
    "displayName": "TriggerShakerWH",
    "sectionType": "Warhead"
  },
  "NUKE": {
    "displayName": "NUKE",
    "sectionType": "Warhead"
  },
  "NUKESmall": {
    "displayName": "NUKESmall",
    "sectionType": "Warhead"
  },
  "NuclearReactorDeathWH": {
    "displayName": "NuclearReactorDeathWH",
    "sectionType": "Warhead"
  },
  "MIDASDeathWH": {
    "displayName": "MIDASDeathWH",
    "sectionType": "Warhead"
  },
  "SeismicDeathWH": {
    "displayName": "SeismicDeathWH",
    "sectionType": "Warhead"
  },
  "IonStormWH": {
    "displayName": "IonStormWH",
    "sectionType": "Warhead"
  },
  "AssasinWH": {
    "displayName": "AssasinWH",
    "sectionType": "Warhead"
  },
  "MutationClairFixWH": {
    "displayName": "MutationClairFixWH",
    "sectionType": "Warhead"
  },
  "GenomineWH": {
    "displayName": "GenomineWH",
    "sectionType": "Warhead"
  },
  "EvolverRunWH": {
    "displayName": "EvolverRunWH",
    "sectionType": "Warhead"
  },
  "Mutate": {
    "displayName": "Mutate",
    "sectionType": "Warhead"
  },
  "MutateExplosion": {
    "displayName": "MutateExplosion",
    "sectionType": "Warhead"
  },
  "GeneburstWH": {
    "displayName": "GeneburstWH",
    "sectionType": "Warhead"
  },
  "GeneticGasWH": {
    "displayName": "GeneticGasWH",
    "sectionType": "Warhead"
  },
  "Nanofiber1WH": {
    "displayName": "Nanofiber1WH",
    "sectionType": "Warhead"
  },
  "Nanofiber2WH": {
    "displayName": "Nanofiber2WH",
    "sectionType": "Warhead"
  },
  "Nanofiber3WH": {
    "displayName": "Nanofiber3WH",
    "sectionType": "Warhead"
  },
  "Nanofiber4WH": {
    "displayName": "Nanofiber4WH",
    "sectionType": "Warhead"
  },
  "Nanofiber5WH": {
    "displayName": "Nanofiber5WH",
    "sectionType": "Warhead"
  },
  "Nanofiber6WH": {
    "displayName": "Nanofiber6WH",
    "sectionType": "Warhead"
  },
  "Nanofiber7WH": {
    "displayName": "Nanofiber7WH",
    "sectionType": "Warhead"
  },
  "NukeMaker": {
    "displayName": "NukeMaker",
    "sectionType": "Warhead"
  },
  "BoidMaker": {
    "displayName": "BoidMaker",
    "sectionType": "Warhead"
  },
  "NavalMineWH": {
    "displayName": "NavalMineWH",
    "sectionType": "Warhead"
  },
  "CRNUKEWH": {
    "displayName": "CRNUKEWH",
    "sectionType": "Warhead"
  },
  "TechMissileWH": {
    "displayName": "TechMissileWH",
    "sectionType": "Warhead"
  },
  "HunterSpikesWH": {
    "displayName": "HunterSpikesWH",
    "sectionType": "Warhead"
  },
  "TarchiaCannonWH": {
    "displayName": "TarchiaCannonWH",
    "sectionType": "Warhead"
  },
  "SpikesWH": {
    "displayName": "SpikesWH",
    "sectionType": "Warhead"
  },
  "DemobombWH": {
    "displayName": "DemobombWH",
    "sectionType": "Warhead"
  },
  "DemobombEWH": {
    "displayName": "DemobombEWH",
    "sectionType": "Warhead"
  },
  "InfAreaRemoverWH": {
    "displayName": "InfAreaRemoverWH",
    "sectionType": "Warhead"
  },
  "AirAreaRemoverWH": {
    "displayName": "AirAreaRemoverWH",
    "sectionType": "Warhead"
  },
  "NavyAreaRemoverWH": {
    "displayName": "NavyAreaRemoverWH",
    "sectionType": "Warhead"
  },
  "HalfLifeWH": {
    "displayName": "HalfLifeWH",
    "sectionType": "Warhead"
  },
  "SunburstBombWH": {
    "displayName": "SunburstBombWH",
    "sectionType": "Warhead"
  },
  "MagneticStop": {
    "displayName": "MagneticStop",
    "sectionType": "Warhead"
  },
  "MagneticStopE": {
    "displayName": "MagneticStopE",
    "sectionType": "Warhead"
  },
  "MagneticHold": {
    "displayName": "MagneticHold",
    "sectionType": "Warhead"
  },
  "MagnetShiftWH": {
    "displayName": "MagnetShiftWH",
    "sectionType": "Warhead"
  },
  "MagnetShift2WH": {
    "displayName": "MagnetShift2WH",
    "sectionType": "Warhead"
  },
  "Battering": {
    "displayName": "Battering",
    "sectionType": "Warhead"
  },
  "Smashing": {
    "displayName": "Smashing",
    "sectionType": "Warhead"
  },
  "BulletBattering": {
    "displayName": "BulletBattering",
    "sectionType": "Warhead"
  },
  "WastelotWH": {
    "displayName": "WastelotWH",
    "sectionType": "Warhead"
  },
  "ReaperWH": {
    "displayName": "ReaperWH",
    "sectionType": "Warhead"
  },
  "ReaperDeathWH": {
    "displayName": "ReaperDeathWH",
    "sectionType": "Warhead"
  },
  "RadBeamWarhead": {
    "displayName": "RadBeamWarhead",
    "sectionType": "Warhead"
  },
  "KrukovRadBeamWH": {
    "displayName": "KrukovRadBeamWH",
    "sectionType": "Warhead"
  },
  "ScavengerRadBeamWH": {
    "displayName": "ScavengerRadBeamWH",
    "sectionType": "Warhead"
  },
  "EradiationWH": {
    "displayName": "EradiationWH",
    "sectionType": "Warhead"
  },
  "RadSmallWarhead": {
    "displayName": "RadSmallWarhead",
    "sectionType": "Warhead"
  },
  "RadBigWarhead": {
    "displayName": "RadBigWarhead",
    "sectionType": "Warhead"
  },
  "RadEruptionWarhead": {
    "displayName": "RadEruptionWarhead",
    "sectionType": "Warhead"
  },
  "RadEradicationWH": {
    "displayName": "RadEradicationWH",
    "sectionType": "Warhead"
  },
  "RadSite": {
    "displayName": "RadSite",
    "sectionType": "Warhead"
  },
  "DisruptorFieldWH": {
    "displayName": "DisruptorFieldWH",
    "sectionType": "Warhead"
  },
  "UraniumWH": {
    "displayName": "UraniumWH",
    "sectionType": "Warhead"
  },
  "UraniumWH2": {
    "displayName": "UraniumWH2",
    "sectionType": "Warhead"
  },
  "NuwaDeathWH": {
    "displayName": "NuwaDeathWH",
    "sectionType": "Warhead"
  },
  "CyComWH": {
    "displayName": "CyComWH",
    "sectionType": "Warhead"
  },
  "CyComWHE": {
    "displayName": "CyComWHE",
    "sectionType": "Warhead"
  },
  "AlizeGunWH": {
    "displayName": "AlizeGunWH",
    "sectionType": "Warhead"
  },
  "GharialWH": {
    "displayName": "GharialWH",
    "sectionType": "Warhead"
  },
  "KingsGunWH": {
    "displayName": "KingsGunWH",
    "sectionType": "Warhead"
  },
  "PrismWarhead": {
    "displayName": "PrismWarhead",
    "sectionType": "Warhead"
  },
  "ParadoxPrismWH": {
    "displayName": "ParadoxPrismWH",
    "sectionType": "Warhead"
  },
  "CometWH": {
    "displayName": "CometWH",
    "sectionType": "Warhead"
  },
  "CometFragmentWH": {
    "displayName": "CometFragmentWH",
    "sectionType": "Warhead"
  },
  "EnforcerWH": {
    "displayName": "EnforcerWH",
    "sectionType": "Warhead"
  },
  "DolphinWH": {
    "displayName": "DolphinWH",
    "sectionType": "Warhead"
  },
  "WidowSignalWH": {
    "displayName": "WidowSignalWH",
    "sectionType": "Warhead"
  },
  "WidowSignalNerfWH": {
    "displayName": "WidowSignalNerfWH",
    "sectionType": "Warhead"
  },
  "WidowSignalFakeWH": {
    "displayName": "WidowSignalFakeWH",
    "sectionType": "Warhead"
  },
  "WidowSignalAlphaFakeWH": {
    "displayName": "WidowSignalAlphaFakeWH",
    "sectionType": "Warhead"
  },
  "DummyWarhead": {
    "displayName": "DummyWarhead",
    "sectionType": "Warhead"
  },
  "InfernoRailgunWH": {
    "displayName": "InfernoRailgunWH",
    "sectionType": "Warhead"
  },
  "InfernoRailgunWHBlue": {
    "displayName": "InfernoRailgunWHBlue",
    "sectionType": "Warhead"
  },
  "MarauderRailgunWH": {
    "displayName": "MarauderRailgunWH",
    "sectionType": "Warhead"
  },
  "SpecialRadWH": {
    "displayName": "SpecialRadWH",
    "sectionType": "Warhead"
  },
  "WarRigDrillsWH": {
    "displayName": "WarRigDrillsWH",
    "sectionType": "Warhead"
  },
  "ElectricTower": {
    "displayName": "ElectricTower",
    "sectionType": "Warhead"
  },
  "ElectricTank": {
    "displayName": "ElectricTank",
    "sectionType": "Warhead"
  },
  "ElectricCoil": {
    "displayName": "ElectricCoil",
    "sectionType": "Warhead"
  },
  "ElectricSuper": {
    "displayName": "ElectricSuper",
    "sectionType": "Warhead"
  },
  "WormqueenBoltWH": {
    "displayName": "WormqueenBoltWH",
    "sectionType": "Warhead"
  },
  "ShockTrooper": {
    "displayName": "ShockTrooper",
    "sectionType": "Warhead"
  },
  "Electric": {
    "displayName": "Electric",
    "sectionType": "Warhead"
  },
  "ShockCyborg": {
    "displayName": "ShockCyborg",
    "sectionType": "Warhead"
  },
  "ShockCyborgFV": {
    "displayName": "ShockCyborgFV",
    "sectionType": "Warhead"
  },
  "ShockCyborgB": {
    "displayName": "ShockCyborgB",
    "sectionType": "Warhead"
  },
  "DeathBoltWH": {
    "displayName": "DeathBoltWH",
    "sectionType": "Warhead"
  },
  "VolkovBombWH": {
    "displayName": "VolkovBombWH",
    "sectionType": "Warhead"
  },
  "VolkovBombWHB": {
    "displayName": "VolkovBombWHB",
    "sectionType": "Warhead"
  },
  "ElectricAssault": {
    "displayName": "ElectricAssault",
    "sectionType": "Warhead"
  },
  "BombDisarm": {
    "displayName": "BombDisarm",
    "sectionType": "Warhead"
  },
  "IonCannonWH": {
    "displayName": "IonCannonWH",
    "sectionType": "Warhead"
  },
  "VeinholeWH": {
    "displayName": "VeinholeWH",
    "sectionType": "Warhead"
  },
  "MedusaWH": {
    "displayName": "MedusaWH",
    "sectionType": "Warhead"
  },
  "ParadoxMedusaWH": {
    "displayName": "ParadoxMedusaWH",
    "sectionType": "Warhead"
  },
  "PatriotWH": {
    "displayName": "PatriotWH",
    "sectionType": "Warhead"
  },
  "SAMBunkerWH": {
    "displayName": "SAMBunkerWH",
    "sectionType": "Warhead"
  },
  "HornetAP": {
    "displayName": "HornetAP",
    "sectionType": "Warhead"
  },
  "StormAP": {
    "displayName": "StormAP",
    "sectionType": "Warhead"
  },
  "StormAPB": {
    "displayName": "StormAPB",
    "sectionType": "Warhead"
  },
  "ORCAAP": {
    "displayName": "ORCAAP",
    "sectionType": "Warhead"
  },
  "MaverickNerfWH": {
    "displayName": "MaverickNerfWH",
    "sectionType": "Warhead"
  },
  "ORCAAPB": {
    "displayName": "ORCAAPB",
    "sectionType": "Warhead"
  },
  "BEAGAP": {
    "displayName": "BEAGAP",
    "sectionType": "Warhead"
  },
  "FoxSplitAP": {
    "displayName": "FoxSplitAP",
    "sectionType": "Warhead"
  },
  "FoxBurnAP": {
    "displayName": "FoxBurnAP",
    "sectionType": "Warhead"
  },
  "FoxBurnAPE": {
    "displayName": "FoxBurnAPE",
    "sectionType": "Warhead"
  },
  "GehennaGroundWH": {
    "displayName": "GehennaGroundWH",
    "sectionType": "Warhead"
  },
  "SlickWH": {
    "displayName": "SlickWH",
    "sectionType": "Warhead"
  },
  "MIGWH": {
    "displayName": "MIGWH",
    "sectionType": "Warhead"
  },
  "Snapshot": {
    "displayName": "Snapshot",
    "sectionType": "Warhead"
  },
  "AntaresWH": {
    "displayName": "AntaresWH",
    "sectionType": "Warhead"
  },
  "AntaresWHBlue": {
    "displayName": "AntaresWHBlue",
    "sectionType": "Warhead"
  },
  "HammerWH": {
    "displayName": "HammerWH",
    "sectionType": "Warhead"
  },
  "GrandCannonWH": {
    "displayName": "GrandCannonWH",
    "sectionType": "Warhead"
  },
  "GrandCannonWHB": {
    "displayName": "GrandCannonWHB",
    "sectionType": "Warhead"
  },
  "NeutralizerWeldWH": {
    "displayName": "NeutralizerWeldWH",
    "sectionType": "Warhead"
  },
  "RuinerRayWH": {
    "displayName": "RuinerRayWH",
    "sectionType": "Warhead"
  },
  "RuinerEffectWH": {
    "displayName": "RuinerEffectWH",
    "sectionType": "Warhead"
  },
  "RaccoonTankWH": {
    "displayName": "RaccoonTankWH",
    "sectionType": "Warhead"
  },
  "OrcinusWaveWH": {
    "displayName": "OrcinusWaveWH",
    "sectionType": "Warhead"
  },
  "ShutDownFactoriesWH": {
    "displayName": "ShutDownFactoriesWH",
    "sectionType": "Warhead"
  },
  "FlakGuyATWH": {
    "displayName": "FlakGuyATWH",
    "sectionType": "Warhead"
  },
  "FlakCannonWH": {
    "displayName": "FlakCannonWH",
    "sectionType": "Warhead"
  },
  "FlakTrackWH": {
    "displayName": "FlakTrackWH",
    "sectionType": "Warhead"
  },
  "FlakSeawolfWH": {
    "displayName": "FlakSeawolfWH",
    "sectionType": "Warhead"
  },
  "FlakGuyAAWH": {
    "displayName": "FlakGuyAAWH",
    "sectionType": "Warhead"
  },
  "FVFlakGuyAAWH": {
    "displayName": "FVFlakGuyAAWH",
    "sectionType": "Warhead"
  },
  "SentinelWH": {
    "displayName": "SentinelWH",
    "sectionType": "Warhead"
  },
  "DiskDrainWH": {
    "displayName": "DiskDrainWH",
    "sectionType": "Warhead"
  },
  "ShadowPulse": {
    "displayName": "ShadowPulse",
    "sectionType": "Warhead"
  },
  "DiskLaserWH": {
    "displayName": "DiskLaserWH",
    "sectionType": "Warhead"
  },
  "BustLaserWH": {
    "displayName": "BustLaserWH",
    "sectionType": "Warhead"
  },
  "MonolithLaserWH": {
    "displayName": "MonolithLaserWH",
    "sectionType": "Warhead"
  },
  "GotterWH": {
    "displayName": "GotterWH",
    "sectionType": "Warhead"
  },
  "MegalaserWH": {
    "displayName": "MegalaserWH",
    "sectionType": "Warhead"
  },
  "MegalaserWHE": {
    "displayName": "MegalaserWHE",
    "sectionType": "Warhead"
  },
  "MegalaserAAWH": {
    "displayName": "MegalaserAAWH",
    "sectionType": "Warhead"
  },
  "MegalaserAAEWH": {
    "displayName": "MegalaserAAEWH",
    "sectionType": "Warhead"
  },
  "TankKillerWH": {
    "displayName": "TankKillerWH",
    "sectionType": "Warhead"
  },
  "TankKillerWHE": {
    "displayName": "TankKillerWHE",
    "sectionType": "Warhead"
  },
  "LUNARWH": {
    "displayName": "LUNARWH",
    "sectionType": "Warhead"
  },
  "MirageWH": {
    "displayName": "MirageWH",
    "sectionType": "Warhead"
  },
  "MirageWHE": {
    "displayName": "MirageWHE",
    "sectionType": "Warhead"
  },
  "MagneShakeWH": {
    "displayName": "MagneShakeWH",
    "sectionType": "Warhead"
  },
  "CyborgGrenadeWH": {
    "displayName": "CyborgGrenadeWH",
    "sectionType": "Warhead"
  },
  "KrukovSwordWH": {
    "displayName": "KrukovSwordWH",
    "sectionType": "Warhead"
  },
  "DominatorParticlesWH": {
    "displayName": "DominatorParticlesWH",
    "sectionType": "Warhead"
  },
  "DominatorWH": {
    "displayName": "DominatorWH",
    "sectionType": "Warhead"
  },
  "AthenaStrikeWH": {
    "displayName": "AthenaStrikeWH",
    "sectionType": "Warhead"
  },
  "AthenaLaserWH": {
    "displayName": "AthenaLaserWH",
    "sectionType": "Warhead"
  },
  "MercuryStrikeWH": {
    "displayName": "MercuryStrikeWH",
    "sectionType": "Warhead"
  },
  "MercuryLaserWH": {
    "displayName": "MercuryLaserWH",
    "sectionType": "Warhead"
  },
  "LeviWH": {
    "displayName": "LeviWH",
    "sectionType": "Warhead"
  },
  "TarchiaWH": {
    "displayName": "TarchiaWH",
    "sectionType": "Warhead"
  },
  "TarchiaOldWH": {
    "displayName": "TarchiaOldWH",
    "sectionType": "Warhead"
  },
  "Uragan1WH": {
    "displayName": "Uragan1WH",
    "sectionType": "Warhead"
  },
  "Uragan2WH": {
    "displayName": "Uragan2WH",
    "sectionType": "Warhead"
  },
  "DiverbeeWH": {
    "displayName": "DiverbeeWH",
    "sectionType": "Warhead"
  },
  "DiverbeeOldWH": {
    "displayName": "DiverbeeOldWH",
    "sectionType": "Warhead"
  },
  "AvalonWH": {
    "displayName": "AvalonWH",
    "sectionType": "Warhead"
  },
  "PrometheusWH": {
    "displayName": "PrometheusWH",
    "sectionType": "Warhead"
  },
  "RailguneerWH": {
    "displayName": "RailguneerWH",
    "sectionType": "Warhead"
  },
  "RailguneerOTWH": {
    "displayName": "RailguneerOTWH",
    "sectionType": "Warhead"
  },
  "RailgunTowerWH": {
    "displayName": "RailgunTowerWH",
    "sectionType": "Warhead"
  },
  "IronDragonWarhead": {
    "displayName": "IronDragonWarhead",
    "sectionType": "Warhead"
  },
  "IronDragonDeathWH": {
    "displayName": "IronDragonDeathWH",
    "sectionType": "Warhead"
  },
  "IronDragonResidue": {
    "displayName": "IronDragonResidue",
    "sectionType": "Warhead"
  },
  "IronCrateWH": {
    "displayName": "IronCrateWH",
    "sectionType": "Warhead"
  },
  "IronCurtain": {
    "displayName": "IronCurtain",
    "sectionType": "Warhead"
  },
  "OldIronCurtain": {
    "displayName": "OldIronCurtain",
    "sectionType": "Warhead"
  },
  "IronOrcinusFlashWH": {
    "displayName": "IronOrcinusFlashWH",
    "sectionType": "Warhead"
  },
  "IronCaster": {
    "displayName": "IronCaster",
    "sectionType": "Warhead"
  },
  "LionheartWH": {
    "displayName": "LionheartWH",
    "sectionType": "Warhead"
  },
  "HarbingerDummyWH": {
    "displayName": "HarbingerDummyWH",
    "sectionType": "Warhead"
  },
  "HarbingerWH": {
    "displayName": "HarbingerWH",
    "sectionType": "Warhead"
  },
  "FTankCannonWH": {
    "displayName": "FTankCannonWH",
    "sectionType": "Warhead"
  },
  "HarbingerOldWH": {
    "displayName": "HarbingerOldWH",
    "sectionType": "Warhead"
  },
  "BoidBlitzWH": {
    "displayName": "BoidBlitzWH",
    "sectionType": "Warhead"
  },
  "ConfuseFlareWH": {
    "displayName": "ConfuseFlareWH",
    "sectionType": "Warhead"
  },
  "ConfuseFlareFragWH": {
    "displayName": "ConfuseFlareFragWH",
    "sectionType": "Warhead"
  },
  "TeralaserWH": {
    "displayName": "TeralaserWH",
    "sectionType": "Warhead"
  },
  "TeratornWH": {
    "displayName": "TeratornWH",
    "sectionType": "Warhead"
  },
  "ShrikeWH": {
    "displayName": "ShrikeWH",
    "sectionType": "Warhead"
  },
  "MantaWH": {
    "displayName": "MantaWH",
    "sectionType": "Warhead"
  },
  "GiantsbaneWH": {
    "displayName": "GiantsbaneWH",
    "sectionType": "Warhead"
  },
  "PhantasmWH": {
    "displayName": "PhantasmWH",
    "sectionType": "Warhead"
  },
  "SweeperWH": {
    "displayName": "SweeperWH",
    "sectionType": "Warhead"
  },
  "ChargeWH": {
    "displayName": "ChargeWH",
    "sectionType": "Warhead"
  },
  "ChargeWH2": {
    "displayName": "ChargeWH2",
    "sectionType": "Warhead"
  },
  "TarchiaTargetWH": {
    "displayName": "TarchiaTargetWH",
    "sectionType": "Warhead"
  },
  "AvalonChargeWH": {
    "displayName": "AvalonChargeWH",
    "sectionType": "Warhead"
  },
  "ZorbWH": {
    "displayName": "ZorbWH",
    "sectionType": "Warhead"
  },
  "ZorbAnimWH": {
    "displayName": "ZorbAnimWH",
    "sectionType": "Warhead"
  },
  "LocomotorBeam": {
    "displayName": "LocomotorBeam",
    "sectionType": "Warhead"
  },
  "PromCharWH": {
    "displayName": "PromCharWH",
    "sectionType": "Warhead"
  },
  "SuperGehennaWH": {
    "displayName": "SuperGehennaWH",
    "sectionType": "Warhead"
  },
  "SingleBulletSys": {
    "displayName": "SingleBulletSys",
    "sectionType": "ParticleSystem"
  },
  "SingleBulletRedSys": {
    "displayName": "SingleBulletRedSys",
    "sectionType": "ParticleSystem"
  },
  "SingleBulletGoldSys": {
    "displayName": "SingleBulletGoldSys",
    "sectionType": "ParticleSystem"
  },
  "TealBulletSys": {
    "displayName": "TealBulletSys",
    "sectionType": "ParticleSystem"
  },
  "GyroBulletSys": {
    "displayName": "GyroBulletSys",
    "sectionType": "ParticleSystem"
  },
  "SpeederShotSys": {
    "displayName": "SpeederShotSys",
    "sectionType": "ParticleSystem"
  },
  "StalkerShotSys": {
    "displayName": "StalkerShotSys",
    "sectionType": "ParticleSystem"
  },
  "RuinerSys": {
    "displayName": "RuinerSys",
    "sectionType": "ParticleSystem"
  },
  "NeonwaspSys": {
    "displayName": "NeonwaspSys",
    "sectionType": "ParticleSystem"
  },
  "PlasmaRailgunSys": {
    "displayName": "PlasmaRailgunSys",
    "sectionType": "ParticleSystem"
  },
  "MastodonRailgunSys": {
    "displayName": "MastodonRailgunSys",
    "sectionType": "ParticleSystem"
  },
  "PromeLightSys": {
    "displayName": "PromeLightSys",
    "sectionType": "ParticleSystem"
  },
  "DredLightSys": {
    "displayName": "DredLightSys",
    "sectionType": "ParticleSystem"
  },
  "GanzirLightSys": {
    "displayName": "GanzirLightSys",
    "sectionType": "ParticleSystem"
  },
  "SmallLightSys": {
    "displayName": "SmallLightSys",
    "sectionType": "ParticleSystem"
  },
  "RegenSys": {
    "displayName": "RegenSys",
    "sectionType": "ParticleSystem"
  },
  "WonderSys": {
    "displayName": "WonderSys",
    "sectionType": "ParticleSystem"
  },
  "ChaosTouchSys": {
    "displayName": "ChaosTouchSys",
    "sectionType": "ParticleSystem"
  },
  "RageSys": {
    "displayName": "RageSys",
    "sectionType": "ParticleSystem"
  },
  "BarrierSys": {
    "displayName": "BarrierSys",
    "sectionType": "ParticleSystem"
  },
  "AetherLightSys": {
    "displayName": "AetherLightSys",
    "sectionType": "ParticleSystem"
  },
  "DarkLightSys": {
    "displayName": "DarkLightSys",
    "sectionType": "ParticleSystem"
  },
  "PowerLightSys": {
    "displayName": "PowerLightSys",
    "sectionType": "ParticleSystem"
  },
  "PowerLightSmallSys": {
    "displayName": "PowerLightSmallSys",
    "sectionType": "ParticleSystem"
  },
  "CataLightSys": {
    "displayName": "CataLightSys",
    "sectionType": "ParticleSystem"
  },
  "AvalonRailgunSys": {
    "displayName": "AvalonRailgunSys",
    "sectionType": "ParticleSystem"
  },
  "ShatterSys": {
    "displayName": "ShatterSys",
    "sectionType": "ParticleSystem"
  },
  "AlphaLightSys": {
    "displayName": "AlphaLightSys",
    "sectionType": "ParticleSystem"
  },
  "SpotLightSys": {
    "displayName": "SpotLightSys",
    "sectionType": "ParticleSystem"
  },
  "NeutronRifleSys": {
    "displayName": "NeutronRifleSys",
    "sectionType": "ParticleSystem"
  },
  "NeutronRifleSysE": {
    "displayName": "NeutronRifleSysE",
    "sectionType": "ParticleSystem"
  },
  "NeutronBlasterSys": {
    "displayName": "NeutronBlasterSys",
    "sectionType": "ParticleSystem"
  },
  "NeutronBlasterSysE": {
    "displayName": "NeutronBlasterSysE",
    "sectionType": "ParticleSystem"
  },
  "NeutronCannonSys": {
    "displayName": "NeutronCannonSys",
    "sectionType": "ParticleSystem"
  },
  "NeutronCannonSysE": {
    "displayName": "NeutronCannonSysE",
    "sectionType": "ParticleSystem"
  },
  "ChronoPrisonSys": {
    "displayName": "ChronoPrisonSys",
    "sectionType": "ParticleSystem"
  },
  "SonicZapSys": {
    "displayName": "SonicZapSys",
    "sectionType": "ParticleSystem"
  },
  "SmallRailgunSys": {
    "displayName": "SmallRailgunSys",
    "sectionType": "ParticleSystem"
  },
  "AlizeBeamSys": {
    "displayName": "AlizeBeamSys",
    "sectionType": "ParticleSystem"
  },
  "MegaRadSys": {
    "displayName": "MegaRadSys",
    "sectionType": "ParticleSystem"
  },
  "RahnBeamSys": {
    "displayName": "RahnBeamSys",
    "sectionType": "ParticleSystem"
  },
  "RahnBeamSysE": {
    "displayName": "RahnBeamSysE",
    "sectionType": "ParticleSystem"
  },
  "LightBeamSys": {
    "displayName": "LightBeamSys",
    "sectionType": "ParticleSystem"
  },
  "LightBeamSysE": {
    "displayName": "LightBeamSysE",
    "sectionType": "ParticleSystem"
  },
  "AntaresSys": {
    "displayName": "AntaresSys",
    "sectionType": "ParticleSystem"
  },
  "AntaresSysBlue": {
    "displayName": "AntaresSysBlue",
    "sectionType": "ParticleSystem"
  },
  "MiniAntaresSys": {
    "displayName": "MiniAntaresSys",
    "sectionType": "ParticleSystem"
  },
  "MiniAntaresSysBlue": {
    "displayName": "MiniAntaresSysBlue",
    "sectionType": "ParticleSystem"
  },
  "MarauderSys": {
    "displayName": "MarauderSys",
    "sectionType": "ParticleSystem"
  },
  "VatGasSys": {
    "displayName": "VatGasSys",
    "sectionType": "ParticleSystem"
  },
  "YellowSmallSys": {
    "displayName": "YellowSmallSys",
    "sectionType": "ParticleSystem"
  },
  "LargeRailgunSys": {
    "displayName": "LargeRailgunSys",
    "sectionType": "ParticleSystem"
  },
  "WeldingSys": {
    "displayName": "WeldingSys",
    "sectionType": "ParticleSystem"
  },
  "SparkSys": {
    "displayName": "SparkSys",
    "sectionType": "ParticleSystem"
  },
  "FirestormSparkSys": {
    "displayName": "FirestormSparkSys",
    "sectionType": "ParticleSystem"
  },
  "GasCloudSys": {
    "displayName": "GasCloudSys",
    "sectionType": "ParticleSystem"
  },
  "PsychCloudSys": {
    "displayName": "PsychCloudSys",
    "sectionType": "ParticleSystem"
  },
  "BigGreySmokeSys": {
    "displayName": "BigGreySmokeSys",
    "sectionType": "ParticleSystem"
  },
  "BoidSmokeSys": {
    "displayName": "BoidSmokeSys",
    "sectionType": "ParticleSystem"
  },
  "SmokeFireSys": {
    "displayName": "SmokeFireSys",
    "sectionType": "ParticleSystem"
  },
  "OrangeSmokeSys": {
    "displayName": "OrangeSmokeSys",
    "sectionType": "ParticleSystem"
  },
  "GreenSmokeSys": {
    "displayName": "GreenSmokeSys",
    "sectionType": "ParticleSystem"
  },
  "DummySys": {
    "displayName": "DummySys",
    "sectionType": "ParticleSystem"
  },
  "SmallGreySSys": {
    "displayName": "SmallGreySSys",
    "sectionType": "ParticleSystem"
  },
  "SmallIceSSys": {
    "displayName": "SmallIceSSys",
    "sectionType": "ParticleSystem"
  },
  "TestSmokeSys": {
    "displayName": "TestSmokeSys",
    "sectionType": "ParticleSystem"
  },
  "FoehnRepairSys": {
    "displayName": "FoehnRepairSys",
    "sectionType": "ParticleSystem"
  },
  "DebrisSmokeSys": {
    "displayName": "DebrisSmokeSys",
    "sectionType": "ParticleSystem"
  },
  "LGSparkSys": {
    "displayName": "LGSparkSys",
    "sectionType": "ParticleSystem"
  },
  "DominatorSys": {
    "displayName": "DominatorSys",
    "sectionType": "ParticleSystem"
  },
  "SuperNapalmCloudSys": {
    "displayName": "SuperNapalmCloudSys",
    "sectionType": "ParticleSystem"
  },
  "NapalmCloudSys": {
    "displayName": "NapalmCloudSys",
    "sectionType": "ParticleSystem"
  },
  "ScorchCloudSys": {
    "displayName": "ScorchCloudSys",
    "sectionType": "ParticleSystem"
  },
  "VultureCloudSys": {
    "displayName": "VultureCloudSys",
    "sectionType": "ParticleSystem"
  },
  "FoxtrotCloudSys": {
    "displayName": "FoxtrotCloudSys",
    "sectionType": "ParticleSystem"
  },
  "TargetLaserSys": {
    "displayName": "TargetLaserSys",
    "sectionType": "ParticleSystem"
  },
  "TargetLaserSysRed": {
    "displayName": "TargetLaserSysRed",
    "sectionType": "ParticleSystem"
  },
  "TargetLaserSysBlue": {
    "displayName": "TargetLaserSysBlue",
    "sectionType": "ParticleSystem"
  },
  "FireStreamSys": {
    "displayName": "FireStreamSys",
    "sectionType": "ParticleSystem"
  },
  "SingleBulletPart": {
    "displayName": "SingleBulletPart",
    "sectionType": "Particle"
  },
  "SingleBulletRedPart": {
    "displayName": "SingleBulletRedPart",
    "sectionType": "Particle"
  },
  "SingleBulletGoldPart": {
    "displayName": "SingleBulletGoldPart",
    "sectionType": "Particle"
  },
  "TealBulletPart": {
    "displayName": "TealBulletPart",
    "sectionType": "Particle"
  },
  "GyroBulletPart": {
    "displayName": "GyroBulletPart",
    "sectionType": "Particle"
  },
  "SmokeFirePart": {
    "displayName": "SmokeFirePart",
    "sectionType": "Particle"
  },
  "SpeederShotPart": {
    "displayName": "SpeederShotPart",
    "sectionType": "Particle"
  },
  "StalkerShotPart": {
    "displayName": "StalkerShotPart",
    "sectionType": "Particle"
  },
  "PromeLightPart": {
    "displayName": "PromeLightPart",
    "sectionType": "Particle"
  },
  "DredLightPart": {
    "displayName": "DredLightPart",
    "sectionType": "Particle"
  },
  "SmallLightPart": {
    "displayName": "SmallLightPart",
    "sectionType": "Particle"
  },
  "DefaultPart": {
    "displayName": "DefaultPart",
    "sectionType": "Particle"
  },
  "DarkLightPart": {
    "displayName": "DarkLightPart",
    "sectionType": "Particle"
  },
  "SpotLightParticle": {
    "displayName": "SpotLightParticle",
    "sectionType": "Particle"
  },
  "LightBeamPart": {
    "displayName": "LightBeamPart",
    "sectionType": "Particle"
  },
  "MiniAntaresPart": {
    "displayName": "MiniAntaresPart",
    "sectionType": "Particle"
  },
  "MiniAntaresPartBlue": {
    "displayName": "MiniAntaresPartBlue",
    "sectionType": "Particle"
  },
  "AntaresPart": {
    "displayName": "AntaresPart",
    "sectionType": "Particle"
  },
  "AntaresPartBlue": {
    "displayName": "AntaresPartBlue",
    "sectionType": "Particle"
  },
  "MarauderPart": {
    "displayName": "MarauderPart",
    "sectionType": "Particle"
  },
  "AlphaLightPart": {
    "displayName": "AlphaLightPart",
    "sectionType": "Particle"
  },
  "RuinerPart": {
    "displayName": "RuinerPart",
    "sectionType": "Particle"
  },
  "NeonwaspPart": {
    "displayName": "NeonwaspPart",
    "sectionType": "Particle"
  },
  "PlasmaRailgunPart": {
    "displayName": "PlasmaRailgunPart",
    "sectionType": "Particle"
  },
  "AvalonRailgunPart": {
    "displayName": "AvalonRailgunPart",
    "sectionType": "Particle"
  },
  "SensorPart": {
    "displayName": "SensorPart",
    "sectionType": "Particle"
  },
  "ShatterPart": {
    "displayName": "ShatterPart",
    "sectionType": "Particle"
  },
  "ShatterPart2": {
    "displayName": "ShatterPart2",
    "sectionType": "Particle"
  },
  "ShatterPart3": {
    "displayName": "ShatterPart3",
    "sectionType": "Particle"
  },
  "ShatterPart4": {
    "displayName": "ShatterPart4",
    "sectionType": "Particle"
  },
  "DominatorPart": {
    "displayName": "DominatorPart",
    "sectionType": "Particle"
  },
  "FireStream": {
    "displayName": "FireStream",
    "sectionType": "Particle"
  },
  "ScorchCloudPart": {
    "displayName": "ScorchCloudPart",
    "sectionType": "Particle"
  },
  "NapalmCloudPart": {
    "displayName": "NapalmCloudPart",
    "sectionType": "Particle"
  },
  "SuperNapalmCloudPart": {
    "displayName": "SuperNapalmCloudPart",
    "sectionType": "Particle"
  },
  "NeutronRiflePart": {
    "displayName": "NeutronRiflePart",
    "sectionType": "Particle"
  },
  "NeutronBlasterPart": {
    "displayName": "NeutronBlasterPart",
    "sectionType": "Particle"
  },
  "NeutronCannonPart": {
    "displayName": "NeutronCannonPart",
    "sectionType": "Particle"
  },
  "ChronoPrisonPart": {
    "displayName": "ChronoPrisonPart",
    "sectionType": "Particle"
  },
  "FireSparkPart1": {
    "displayName": "FireSparkPart1",
    "sectionType": "Particle"
  },
  "FireSparkPart2": {
    "displayName": "FireSparkPart2",
    "sectionType": "Particle"
  },
  "PlasmaSparkPart": {
    "displayName": "PlasmaSparkPart",
    "sectionType": "Particle"
  },
  "SyncSparkPart": {
    "displayName": "SyncSparkPart",
    "sectionType": "Particle"
  },
  "SmokeSparkPart1": {
    "displayName": "SmokeSparkPart1",
    "sectionType": "Particle"
  },
  "SmokeSparkPart2": {
    "displayName": "SmokeSparkPart2",
    "sectionType": "Particle"
  },
  "SonicZapPart": {
    "displayName": "SonicZapPart",
    "sectionType": "Particle"
  },
  "IceCloud1": {
    "displayName": "IceCloud1",
    "sectionType": "Particle"
  },
  "IceCloudD1": {
    "displayName": "IceCloudD1",
    "sectionType": "Particle"
  },
  "IceCloud2": {
    "displayName": "IceCloud2",
    "sectionType": "Particle"
  },
  "IceCloudD2": {
    "displayName": "IceCloudD2",
    "sectionType": "Particle"
  },
  "IceCloud3": {
    "displayName": "IceCloud3",
    "sectionType": "Particle"
  },
  "IceCloudD3": {
    "displayName": "IceCloudD3",
    "sectionType": "Particle"
  },
  "WeldingSpark": {
    "displayName": "WeldingSpark",
    "sectionType": "Particle"
  },
  "Spark": {
    "displayName": "Spark",
    "sectionType": "Particle"
  },
  "FirestormSpark": {
    "displayName": "FirestormSpark",
    "sectionType": "Particle"
  },
  "GasCloudM1": {
    "displayName": "GasCloudM1",
    "sectionType": "Particle"
  },
  "GasCloudM2": {
    "displayName": "GasCloudM2",
    "sectionType": "Particle"
  },
  "GasCloud1": {
    "displayName": "GasCloud1",
    "sectionType": "Particle"
  },
  "GasCloud2": {
    "displayName": "GasCloud2",
    "sectionType": "Particle"
  },
  "GasCloudD1": {
    "displayName": "GasCloudD1",
    "sectionType": "Particle"
  },
  "GasCloudD2": {
    "displayName": "GasCloudD2",
    "sectionType": "Particle"
  },
  "VirusCloud1": {
    "displayName": "VirusCloud1",
    "sectionType": "Particle"
  },
  "VirusCloudD1": {
    "displayName": "VirusCloudD1",
    "sectionType": "Particle"
  },
  "VirusCloud2": {
    "displayName": "VirusCloud2",
    "sectionType": "Particle"
  },
  "VirusCloudD2": {
    "displayName": "VirusCloudD2",
    "sectionType": "Particle"
  },
  "VirusCloud1B": {
    "displayName": "VirusCloud1B",
    "sectionType": "Particle"
  },
  "VirusCloudD1B": {
    "displayName": "VirusCloudD1B",
    "sectionType": "Particle"
  },
  "LargeGreySmoke": {
    "displayName": "LargeGreySmoke",
    "sectionType": "Particle"
  },
  "LargeBoidSmoke": {
    "displayName": "LargeBoidSmoke",
    "sectionType": "Particle"
  },
  "SmallGreySmoke": {
    "displayName": "SmallGreySmoke",
    "sectionType": "Particle"
  },
  "SmallIceSmoke": {
    "displayName": "SmallIceSmoke",
    "sectionType": "Particle"
  },
  "TestSmoke": {
    "displayName": "TestSmoke",
    "sectionType": "Particle"
  },
  "FoehnRepairPart": {
    "displayName": "FoehnRepairPart",
    "sectionType": "Particle"
  },
  "AlizeBeamPart": {
    "displayName": "AlizeBeamPart",
    "sectionType": "Particle"
  },
  "MegaRadPart": {
    "displayName": "MegaRadPart",
    "sectionType": "Particle"
  },
  "RahnBeamPart": {
    "displayName": "RahnBeamPart",
    "sectionType": "Particle"
  },
  "RahnBeamPartE": {
    "displayName": "RahnBeamPartE",
    "sectionType": "Particle"
  },
  "YellowSmallPart": {
    "displayName": "YellowSmallPart",
    "sectionType": "Particle"
  },
  "VatGasPart": {
    "displayName": "VatGasPart",
    "sectionType": "Particle"
  },
  "OrangeSmokePart": {
    "displayName": "OrangeSmokePart",
    "sectionType": "Particle"
  },
  "GreenSmokePart": {
    "displayName": "GreenSmokePart",
    "sectionType": "Particle"
  },
  "DummyPart": {
    "displayName": "DummyPart",
    "sectionType": "Particle"
  },
  "SmallRailgunPart": {
    "displayName": "SmallRailgunPart",
    "sectionType": "Particle"
  },
  "LargeRailgunPart": {
    "displayName": "LargeRailgunPart",
    "sectionType": "Particle"
  },
  "LargeSpark": {
    "displayName": "LargeSpark",
    "sectionType": "Particle"
  },
  "NukeSpecial": {
    "displayName": "战术核弹攻击",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Nuke",
    "name": "Tactical Nuke"
  },
  "TechMissileSpecial": {
    "displayName": "导弹攻击",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:TechMissile",
    "name": "Missile Strike"
  },
  "IronCurtainSpecial": {
    "displayName": "无敌",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Iron",
    "name": "Invulnerability"
  },
  "BlasticadeSpecial": {
    "displayName": "爆裂屏障",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Blast",
    "name": "Blasticade"
  },
  "PsychicFlashSpecial": {
    "displayName": "心灵之火",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:PsychicFlash",
    "name": "Psychic Flash"
  },
  "ForceShieldSpecial": {
    "displayName": "力场护盾",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:ForceShield",
    "name": "Force Shield"
  },
  "LightningStormSpecial": {
    "displayName": "闪电风暴",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Storm",
    "name": "Lightning Storm"
  },
  "IonStormSpecial": {
    "displayName": "Ion Storm",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:UltimaWeapon",
    "name": "Ion Storm"
  },
  "GreatTempestSpecial": {
    "displayName": "顶点暴风",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GREATTEMPEST",
    "name": "Great Tempest"
  },
  "ChronoSphereSpecial": {
    "displayName": "超时空传送",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Chrono",
    "name": "Chronoshift Pre"
  },
  "ChronoWarpSpecial": {
    "displayName": "超时空传送 II型",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Chrono2",
    "name": "Chronoshift Post"
  },
  "ChronoliftSpecial": {
    "displayName": "超时空起重机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Chronolift",
    "name": "Chronolift"
  },
  "PostliftSpecial": {
    "displayName": "超时空传送 II型",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Chrono2",
    "name": "Chronolift Post"
  },
  "SonarPulseSpecial": {
    "displayName": "声呐脉冲",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:SonarPulse",
    "name": "Sonar Pulse"
  },
  "RepairDroneSpecial": {
    "displayName": "维修无人机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:SDRN",
    "name": "Repair Drone"
  },
  "RepairDronesSpecial": {
    "displayName": "双子维修机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:SDRNS",
    "name": "Repair Drones"
  },
  "VisionSpecial": {
    "displayName": "心灵视界",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:VISION",
    "name": "Vision"
  },
  "SignalJammerSpecial": {
    "displayName": "信号干扰",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:SIGJAM",
    "name": "Signal Jammer"
  },
  "NavalMineSpecial": {
    "displayName": "水雷",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:CANMIN",
    "name": "Naval Mine"
  },
  "MagnetShiftSpecial": {
    "displayName": "磁力射线",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Magnet",
    "name": "Magnetic Beam"
  },
  "GoldenWindSpecial": {
    "displayName": "黄金之风",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GoldenWind",
    "name": "Golden Wind"
  },
  "RavenSpecial": {
    "displayName": "侦察乌鸦",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:RAVENS",
    "name": "Scout Raven"
  },
  "RuinerSpecial": {
    "displayName": "压制飞碟",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:RUINER",
    "name": "Ruiner"
  },
  "ZephyrBeaconSpecial": {
    "displayName": "西风定位机器人",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GAZEPH",
    "name": "Zephyrobot"
  },
  "MotorAmbushSpecial": {
    "displayName": "火炮机车突袭",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:MotorAmbush",
    "name": "Motor Ambush"
  },
  "LibraCloneSpecial": {
    "displayName": "天秤复制人",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:LIBRACLONES",
    "name": "Libra Clones"
  },
  "WarpMinersSpecial": {
    "displayName": "极限采矿车",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:UMIN",
    "name": "Ultra Miner"
  },
  "ToxicStrikeSpecial": {
    "displayName": "剧毒空袭",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:ToxicStrike",
    "name": "Toxic Strike"
  },
  "TickTrapSpecial": {
    "displayName": "毒爆虱陷阱",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:TICKTRAP",
    "name": "Bloatick Trap"
  },
  "HijackersSpecial": {
    "displayName": "空降劫持者",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Hijackers",
    "name": "Hijackers"
  },
  "RisenMonolithSpecial": {
    "displayName": "速成方尖碑",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:RISEN",
    "name": "Risen Monolith"
  },
  "DisruptorSpecial": {
    "displayName": "裂解防空塔",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:NADIST",
    "name": "Disruptor"
  },
  "FlameTowerSpecial": {
    "displayName": "烈焰炮塔",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:NAFLMT",
    "name": "Flame Tower"
  },
  "LightningRodSpecial": {
    "displayName": "引雷针",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GAROD",
    "name": "Lightning Rod"
  },
  "MegaarenaSpecial": {
    "displayName": "巨齿鲨竞技场",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:MEGAARENA",
    "name": "Megaarena"
  },
  "SpinbladeSpecial": {
    "displayName": "加速旋塔",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:FASPIN",
    "name": "Spinblade"
  },
  "HunterSeekerSpecial": {
    "displayName": "猎杀机器人（最多5架）",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:HunterSeeker",
    "name": "Hunter-Seeker"
  },
  "GlacialScreenSpecial": {
    "displayName": "寒冰屏障",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GlacialScreen",
    "name": "Glacial Screen"
  },
  "KingsnakesSpecial": {
    "displayName": "王蛇战机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Kingsnakes",
    "name": "Kingsnakes"
  },
  "PaladinAidSpecial": {
    "displayName": "圣骑士增援",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:PaladinAid",
    "name": "Paladin Aid"
  },
  "EliteReservesSpecial": {
    "displayName": "精英预备队",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:EliteReserves",
    "name": "Elite Reserves"
  },
  "DrakuvSpecial": {
    "displayName": "德拉库夫机动监狱",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:RAVA",
    "name": "Drakuv Prison Vehicle"
  },
  "InstantShelterSpecial": {
    "displayName": "应急碉堡",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GABUNK",
    "name": "Instant Shelter"
  },
  "QuickFortSpecial": {
    "displayName": "速成坦克碉堡",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:NATBUNKER",
    "name": "Quick Fort"
  },
  "SmokebombsSpecial": {
    "displayName": "烟雾弹空袭",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Smokebombs",
    "name": "Smoke Bombs"
  },
  "RadAttackSpecial": {
    "displayName": "辐射空袭",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:RadAttack",
    "name": "Rad Attack"
  },
  "PackAttackSpecial": {
    "displayName": "辐射四联空袭",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:PackAttack",
    "name": "Pack Attack"
  },
  "HarbingerSpecial": {
    "displayName": "先锋炮艇机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Harbinger",
    "name": "Harbinger"
  },
  "BlackWidowSpecial": {
    "displayName": "黑寡妇干扰机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:WIDOW",
    "name": "Black Widow"
  },
  "BlackWidowAlphaSpecial": {
    "displayName": "黑寡妇干扰机阿尔法",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:WIDOWA",
    "name": "Black Widow Alpha"
  },
  "WallbusterSpecial": {
    "displayName": "壁垒杀手导弹",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Wallbuster",
    "name": "Wallbuster"
  },
  "DevourerSpecial": {
    "displayName": "吞并",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Devourer",
    "name": "Devourer"
  },
  "BlackoutMissileSpecial": {
    "displayName": "断路导弹",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:BlackoutMissile",
    "name": "Blackout Missile"
  },
  "IrradiateBetaSpecial": {
    "displayName": "放射性装甲贝塔",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:IrradiateBeta",
    "name": "Irradiation Beta"
  },
  "IrradiateSpecial": {
    "displayName": "放射性装甲伽马",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:IrradiateGamma",
    "name": "Irradiation Gamma"
  },
  "NuclearPathSpecial": {
    "displayName": "核能奔涌",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:NuclearPath",
    "name": "Nuclear Path"
  },
  "EMPulsSpecial": {
    "displayName": "电磁脉冲",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:EMPuls",
    "name": "EM Pulse"
  },
  "ChaosTouchSpecial": {
    "displayName": "迷幻之触",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:ChaosTouch",
    "name": "Chaos Touch"
  },
  "MercurySpecial": {
    "displayName": "墨丘利激光打击",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:MERCURYSTRIKE",
    "name": "Mercury Strike"
  },
  "BoidBlitzSpecial": {
    "displayName": "造物惩击",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:BoidBlitz",
    "name": "Boid Blitz"
  },
  "MADMineSpecial": {
    "displayName": "M.A.D.地雷",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:MadMine",
    "name": "M.A.D. Mine"
  },
  "TargetPainterSpecial": {
    "displayName": "目标锁定",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:TargetPainter",
    "name": "Target Painter"
  },
  "BackwarpSpecial": {
    "displayName": "回溯",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Backwarp",
    "name": "Backwarp"
  },
  "ChronoboostSpecial": {
    "displayName": "超时空加速",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Chronoboost",
    "name": "Chronoboost"
  },
  "RageInductorSpecial": {
    "displayName": "狂暴",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Rage",
    "name": "Rage"
  },
  "IllusionSpecial": {
    "displayName": "暗影环绕",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:ShadowRing",
    "name": "Shadow Ring"
  },
  "NanochargeSpecial": {
    "displayName": "纳米回复场",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Nanocharge",
    "name": "Nanocharge"
  },
  "TimeFreezeSpecial": {
    "displayName": "时间静止",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:TimeFreeze",
    "name": "The World"
  },
  "GearChangeSpecial": {
    "displayName": "工厂停产维护\n资金增加$3000",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GearChange",
    "name": "Gear Change"
  },
  "MaintenanceSpecial": {
    "displayName": "建筑维护",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Maint",
    "name": "Maintenance"
  },
  "KineticBarrierSpecial": {
    "displayName": "动能屏障",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:KineticBarrier",
    "name": "Kinetic Barrier"
  },
  "RegenDrugsSpecial": {
    "displayName": "恢复剂",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:RegenDrugs",
    "name": "Regen Drugs"
  },
  "WonderDrugsSpecial": {
    "displayName": "治疗剂",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:WonderDrugs",
    "name": "Wonder Drugs"
  },
  "OverchargeSpecial": {
    "displayName": "磁能过载",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Overcharge",
    "name": "Overcharge"
  },
  "CryoshotSpecial": {
    "displayName": "冰锥",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Cryoshot",
    "name": "Cryoshot"
  },
  "CryospearSpecial": {
    "displayName": "冰枪",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Cryospear",
    "name": "Cryospear"
  },
  "MutationSpecial": {
    "displayName": "基因震爆",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Mutation",
    "name": "Geneburst"
  },
  "NanofiberSyncSpecial": {
    "displayName": "纳米纤维同步",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Nanofiber",
    "name": "Nanofiber Sync"
  },
  "DecoyTeamSpecial": {
    "displayName": "诱饵小队",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:DecoyTeam",
    "name": "Decoy Team"
  },
  "DecoySquadronSpecial": {
    "displayName": "诱饵中队",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:DecoySquadron",
    "name": "Decoy Squadron"
  },
  "ReconSortieSpecial": {
    "displayName": "侦察扫描",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:ReconSortie",
    "name": "Recon Sortie"
  },
  "TankDropSpecial": {
    "displayName": "空降坦克",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:TankDrop",
    "name": "Tank Drop"
  },
  "SweeperDropSpecial": {
    "displayName": "空降扫荡者无人机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:SweeperDrop",
    "name": "Sweeper Drop"
  },
  "TerrorDropSpecial": {
    "displayName": "恐怖机器人降临",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:TerrorDrop",
    "name": "Terror Drop"
  },
  "KnightfallSpecial": {
    "displayName": "天降神兵",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Knightfall",
    "name": "Knightfall"
  },
  "ParaDropSpecial": {
    "displayName": "伞兵",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Para3",
    "name": "Paradrop"
  },
  "AmericanParaDropSpecial": {
    "displayName": "空降部队",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:APara",
    "name": "Airborne"
  },
  "BloodhoundsSpecial": {
    "displayName": "空降猎犬小队",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Bloodhounds",
    "name": "Bloodhounds"
  },
  "PsychicDominatorSpecial": {
    "displayName": "心灵支配",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:PSYD",
    "name": "Domination"
  },
  "FakeDominatorSpecial": {
    "displayName": "心灵支配",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:PSYD",
    "name": "Fake Domination"
  },
  "SpyPlaneSpecial": {
    "displayName": "侦察机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:SpyP",
    "name": "Spy Plane"
  },
  "SpySatSpecial": {
    "displayName": "侦察卫星",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:SPYSAT",
    "name": "Satellite Scan"
  },
  "OldIronCurtainSpecial": {
    "displayName": "无敌",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Iron",
    "name": "Old Invulnerability"
  },
  "FauxDominatorSpecial": {
    "displayName": "心灵支配",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:PSYD",
    "name": "Faux Domination"
  },
  "CSphereCloneSpecial": {
    "displayName": "Mission Special",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "CWarpCloneSpecial": {
    "displayName": "Mission Special",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "LSCloneSpecial": {
    "displayName": "Mission Special",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "NukeCloneSpecial": {
    "displayName": "Mission Special",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "StratoSpecial": {
    "displayName": "Stratofortress",
    "sectionType": "SuperWeapon",
    "name": "Stratofortress"
  },
  "ReproCashFix": {
    "displayName": "Reprocessor AI Fix",
    "sectionType": "SuperWeapon",
    "name": "Reprocessor AI Fix"
  },
  "EliteReservesMessage": {
    "displayName": "Elite Reserves Text",
    "sectionType": "SuperWeapon",
    "name": "Elite Reserves Text"
  },
  "FakeChemplugSpawn": {
    "displayName": "Fake Chemplug Spawn",
    "sectionType": "SuperWeapon",
    "name": "Fake Chemplug Spawn"
  },
  "ArsenalMedicSpawn": {
    "displayName": "Arsenal Medic Spawn",
    "sectionType": "SuperWeapon",
    "name": "Arsenal Medic Spawn"
  },
  "TickTrapSpawn": {
    "displayName": "Bloatick Tunnel Spawn",
    "sectionType": "SuperWeapon",
    "name": "Bloatick Tunnel Spawn"
  },
  "EMPMineSpawn": {
    "displayName": "EMP地雷",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:NATRAP",
    "name": "EMP Mine Spawn"
  },
  "GenomineSpawn": {
    "displayName": "基因地雷",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:YAVNMM",
    "name": "Genomine Spawn"
  },
  "CryomineSpawn": {
    "displayName": "冷冻地雷",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:GACRYO",
    "name": "Cryomine Spawn"
  },
  "StasisGridSpawn": {
    "displayName": "静滞网格",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:FAFILD",
    "name": "Stasis Grid Spawn"
  },
  "ConfusionGridSpawn": {
    "displayName": "迷幻网格",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:FACONF",
    "name": "Confsion Grid Spawn"
  },
  "CrateDropSpecial": {
    "displayName": "Crate Drop",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:CrateDrop",
    "name": "Crate Drop"
  },
  "KnightfallSpawn": {
    "displayName": "天降神兵",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:Knightfall",
    "name": "Knightfall Spawn"
  },
  "SuperFlashSpawn": {
    "displayName": "Super Flash",
    "sectionType": "SuperWeapon",
    "name": "Super Flash"
  },
  "CraneSpecial": {
    "displayName": "维修起重机",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:NADRON",
    "name": "Repair Crane Effect"
  },
  "IronGuardSpecial": {
    "displayName": "钢铁守卫",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:NAIRDM",
    "name": "Iron Guard Effect"
  },
  "PsychicBeaconSpecial": {
    "displayName": "距离心灵信标准备完成时间：",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:PSYBREADY",
    "name": "Psychic Beacon"
  },
  "ReinfoPadSpecial": {
    "displayName": "增援空降",
    "sectionType": "SuperWeapon",
    "uiName": "NAME:ReinfoPad",
    "name": "Reinforcement"
  },
  "JudgementSpecial": {
    "displayName": "Judgement",
    "sectionType": "SuperWeapon",
    "name": "Judgement"
  },
  "CeasefireSpecial": {
    "displayName": "CeasefireSpecial",
    "sectionType": "SuperWeapon"
  },
  "CeasefireSpawn": {
    "displayName": "CeasefireSpawn",
    "sectionType": "SuperWeapon"
  },
  "Team1Special": {
    "displayName": "Team1Special",
    "sectionType": "SuperWeapon"
  },
  "Team2Special": {
    "displayName": "Team2Special",
    "sectionType": "SuperWeapon"
  },
  "Team3Special": {
    "displayName": "Team3Special",
    "sectionType": "SuperWeapon"
  },
  "Team4Special": {
    "displayName": "Team4Special",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn1": {
    "displayName": "DropPodSpawn1",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn2": {
    "displayName": "DropPodSpawn2",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn3": {
    "displayName": "DropPodSpawn3",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn4": {
    "displayName": "DropPodSpawn4",
    "sectionType": "SuperWeapon"
  },
  "Deploy1Special": {
    "displayName": "Deploy1Special",
    "sectionType": "SuperWeapon"
  },
  "Deploy2Special": {
    "displayName": "Deploy2Special",
    "sectionType": "SuperWeapon"
  },
  "Deploy3Special": {
    "displayName": "Deploy3Special",
    "sectionType": "SuperWeapon"
  },
  "Deploy4Special": {
    "displayName": "Deploy4Special",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial1": {
    "displayName": "WarheadSpecial1",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial2": {
    "displayName": "WarheadSpecial2",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial3": {
    "displayName": "WarheadSpecial3",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial4": {
    "displayName": "WarheadSpecial4",
    "sectionType": "SuperWeapon"
  },
  "BOXES01": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES02": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES03": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES04": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES05": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES06": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES07": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES08": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES09": {
    "displayName": "Boxes",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "ICE01": {
    "displayName": "Ice Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE02": {
    "displayName": "Ice Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE03": {
    "displayName": "Ice Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE04": {
    "displayName": "Ice Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE05": {
    "displayName": "Ice Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "X": {
    "displayName": "Clear Rock A",
    "sectionType": "Unknown",
    "name": "Clear Rock A"
  },
  "TREE01": {
    "displayName": "Urban Tree",
    "sectionType": "Terrain",
    "name": "Urban Tree"
  },
  "TREE02": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE03": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE04": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE05": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE06": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE07": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE08": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE09": {
    "displayName": "Urban Tree",
    "sectionType": "Terrain",
    "name": "Urban Tree"
  },
  "TREE10": {
    "displayName": "Urban Tree",
    "sectionType": "Terrain",
    "name": "Urban Tree"
  },
  "TREE11": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE12": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE13": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE14": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE15": {
    "displayName": "Green Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE16": {
    "displayName": "Bush",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE17": {
    "displayName": "Bush",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE18": {
    "displayName": "Bush",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE19": {
    "displayName": "Bush",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE20": {
    "displayName": "Palm Tree",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE21": {
    "displayName": "Palm Tree",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE22": {
    "displayName": "Palm Tree",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE23": {
    "displayName": "Palm Tree",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE24": {
    "displayName": "Palm Tree",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE25": {
    "displayName": "Spruce Tree",
    "sectionType": "Terrain",
    "name": "Spruce Tree"
  },
  "TREE26": {
    "displayName": "Spruce Tree",
    "sectionType": "Terrain",
    "name": "Spruce Tree"
  },
  "TREE27": {
    "displayName": "Spruce Tree",
    "sectionType": "Terrain",
    "name": "Spruce Tree"
  },
  "TREE28": {
    "displayName": "Cactus",
    "sectionType": "Terrain",
    "name": "Cactus"
  },
  "TREE29": {
    "displayName": "Cactus",
    "sectionType": "Terrain",
    "name": "Cactus"
  },
  "TREE30": {
    "displayName": "Cactus",
    "sectionType": "Terrain",
    "name": "Cactus"
  },
  "TREE31": {
    "displayName": "Big Palm",
    "sectionType": "Terrain",
    "name": "Big Palm"
  },
  "TREE32": {
    "displayName": "Big Palm",
    "sectionType": "Terrain",
    "name": "Big Palm"
  },
  "TREE33": {
    "displayName": "Big Palm",
    "sectionType": "Terrain",
    "name": "Big Palm"
  },
  "TREE34": {
    "displayName": "Dead Tree",
    "sectionType": "Terrain",
    "name": "Dead Tree"
  },
  "TREE35": {
    "displayName": "Dead Tree",
    "sectionType": "Terrain",
    "name": "Dead Tree"
  },
  "TREE36": {
    "displayName": "Dead Tree",
    "sectionType": "Terrain",
    "name": "Dead Tree"
  },
  "TREEJP02": {
    "displayName": "Flower Tree",
    "sectionType": "Terrain",
    "name": "Flower Tree"
  },
  "TREEJP04": {
    "displayName": "Flower Tree",
    "sectionType": "Terrain",
    "name": "Flower Tree"
  },
  "TREEN21": {
    "displayName": "Neon Tree",
    "sectionType": "Terrain",
    "name": "Neon Tree"
  },
  "TREEN22": {
    "displayName": "Neon Tree",
    "sectionType": "Terrain",
    "name": "Neon Tree"
  },
  "TREEN23": {
    "displayName": "Neon Tree",
    "sectionType": "Terrain",
    "name": "Neon Tree"
  },
  "TREEB01": {
    "displayName": "Cylinder",
    "sectionType": "Terrain",
    "name": "Cylinder"
  },
  "TREEB02": {
    "displayName": "Cylinder",
    "sectionType": "Terrain",
    "name": "Cylinder"
  },
  "TREEH01": {
    "displayName": "Hedge",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH02": {
    "displayName": "Hedge",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH03": {
    "displayName": "Hedge",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH04": {
    "displayName": "Hedge",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH05": {
    "displayName": "Hedge",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH06": {
    "displayName": "Hedge",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREE37": {
    "displayName": "White Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE38": {
    "displayName": "White Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE39": {
    "displayName": "White Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE40": {
    "displayName": "White Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE41": {
    "displayName": "White Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE42": {
    "displayName": "White Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE43": {
    "displayName": "Dark Tree",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE44": {
    "displayName": "Dark Tree",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE45": {
    "displayName": "Dark Tree",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE46": {
    "displayName": "Dark Tree",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE47": {
    "displayName": "Cherry Tree",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE48": {
    "displayName": "Cherry Tree",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE49": {
    "displayName": "Cherry Tree",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE50": {
    "displayName": "Cherry Tree",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE51": {
    "displayName": "Cherry Tree",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE52": {
    "displayName": "Ramp Shrub",
    "sectionType": "Terrain",
    "name": "Ramp Shrub"
  },
  "TREE53": {
    "displayName": "Ramp Shrub",
    "sectionType": "Terrain",
    "name": "Ramp Shrub"
  },
  "TNLEND01": {
    "displayName": "Tunnel Wall Fill A",
    "sectionType": "Terrain",
    "name": "Tunnel Wall Fill A"
  },
  "TNLEND02": {
    "displayName": "Tunnel Wall Fill B",
    "sectionType": "Terrain",
    "name": "Tunnel Wall Fill B"
  },
  "LT_GEN01": {
    "displayName": "Lightpost A",
    "sectionType": "Terrain",
    "name": "Lightpost A"
  },
  "LT_GEN02": {
    "displayName": "Lightpost B",
    "sectionType": "Terrain",
    "name": "Lightpost B"
  },
  "LT_GEN03": {
    "displayName": "Lightpost C",
    "sectionType": "Terrain",
    "name": "Lightpost C"
  },
  "LT_GEN04": {
    "displayName": "Lightpost D",
    "sectionType": "Terrain",
    "name": "Lightpost D"
  },
  "LT_SGN01": {
    "displayName": "Lightpost Signed A",
    "sectionType": "Terrain",
    "name": "Lightpost Signed A"
  },
  "LT_SGN02": {
    "displayName": "Lightpost Signed B",
    "sectionType": "Terrain",
    "name": "Lightpost Signed B"
  },
  "LT_SGN03": {
    "displayName": "Lightpost Signed C",
    "sectionType": "Terrain",
    "name": "Lightpost Signed C"
  },
  "LT_SGN04": {
    "displayName": "Lightpost Signed D",
    "sectionType": "Terrain",
    "name": "Lightpost Signed D"
  },
  "LT_EUR01": {
    "displayName": "Lightpost Euro A",
    "sectionType": "Terrain",
    "name": "Lightpost Euro A"
  },
  "LT_EUR02": {
    "displayName": "Lightpost Euro B",
    "sectionType": "Terrain",
    "name": "Lightpost Euro B"
  },
  "POLE01": {
    "displayName": "Utility Pole A",
    "sectionType": "Terrain",
    "name": "Utility Pole A"
  },
  "POLE02": {
    "displayName": "Utility Pole B",
    "sectionType": "Terrain",
    "name": "Utility Pole B"
  },
  "SIGN01": {
    "displayName": "Street Sign A",
    "sectionType": "Terrain",
    "name": "Street Sign A"
  },
  "SIGN02": {
    "displayName": "Street Sign B",
    "sectionType": "Terrain",
    "name": "Street Sign B"
  },
  "SIGN03": {
    "displayName": "Street Sign C",
    "sectionType": "Terrain",
    "name": "Street Sign C"
  },
  "SIGN04": {
    "displayName": "Street Sign D",
    "sectionType": "Terrain",
    "name": "Street Sign D"
  },
  "SIGN05": {
    "displayName": "Street Sign E",
    "sectionType": "Terrain",
    "name": "Street Sign E"
  },
  "SIGN06": {
    "displayName": "Street Sign F",
    "sectionType": "Terrain",
    "name": "Street Sign F"
  },
  "TRFF01": {
    "displayName": "Traffic Light A",
    "sectionType": "Terrain",
    "name": "Traffic Light A"
  },
  "TRFF02": {
    "displayName": "Traffic Light B",
    "sectionType": "Terrain",
    "name": "Traffic Light B"
  },
  "TRFF03": {
    "displayName": "Traffic Light C",
    "sectionType": "Terrain",
    "name": "Traffic Light C"
  },
  "TRFF04": {
    "displayName": "Traffic Light D",
    "sectionType": "Terrain",
    "name": "Traffic Light D"
  },
  "SPKR01": {
    "displayName": "Drive-In Speaker",
    "sectionType": "Terrain",
    "name": "Drive-In Speaker"
  },
  "TIBTRE01": {
    "displayName": "Tiberium Tree",
    "sectionType": "Terrain",
    "name": "Tiberium Tree"
  },
  "TIBTRE02": {
    "displayName": "Tiberium Tree",
    "sectionType": "Terrain",
    "name": "Tiberium Tree"
  },
  "TIBTRE03": {
    "displayName": "Tiberium Tree",
    "sectionType": "Terrain",
    "name": "Tiberium Tree"
  },
  "VEINTREE": {
    "displayName": "Veinhole Tree",
    "sectionType": "Terrain",
    "name": "Veinhole Tree"
  },
  "HDSTN01": {
    "displayName": "Alrington Stones",
    "sectionType": "Terrain",
    "name": "Alrington Stones"
  },
  "TIB01": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB02": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB03": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB04": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB05": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB06": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB07": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB08": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB09": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB10": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB11": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB12": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB13": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB14": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB15": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB16": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB17": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB18": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB19": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB20": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_01": {
    "displayName": "Tiberium (Blue)",
    "sectionType": "Overlay",
    "name": "Tiberium (Blue)"
  },
  "TIB2_02": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_03": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_04": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_05": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_06": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_07": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_08": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_09": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_10": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_11": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_12": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_13": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_14": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_15": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_16": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_17": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_18": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_19": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_20": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_01": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_02": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_03": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_04": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_05": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_06": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_07": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_08": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_09": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_10": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_11": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_12": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_13": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_14": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_15": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_16": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_17": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_18": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_19": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_20": {
    "displayName": "Tiberium",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "VEINHOLE": {
    "displayName": "Veinhole Monster",
    "sectionType": "Unknown",
    "name": "Veinhole Monster"
  },
  "VEINHOLEDUMMY": {
    "displayName": "Veinhole Monster Dummy",
    "sectionType": "Overlay",
    "name": "Veinhole Monster Dummy"
  },
  "RUBBLE_OVERLAY": {
    "displayName": "System Overlay (Do Not Use)",
    "sectionType": "Overlay",
    "name": "System Overlay (Do Not Use)"
  },
  "FENCE01": {
    "displayName": "Track Cross N-S/E-W",
    "sectionType": "Overlay",
    "name": "Track Cross N-S/E-W"
  },
  "FENCE02": {
    "displayName": "Track Cross NE-SW/NW-SE",
    "sectionType": "Overlay",
    "name": "Track Cross NE-SW/NW-SE"
  },
  "FENCE03": {
    "displayName": "Track End N",
    "sectionType": "Overlay",
    "name": "Track End N"
  },
  "FENCE04": {
    "displayName": "Track End NE",
    "sectionType": "Overlay",
    "name": "Track End NE"
  },
  "FENCE05": {
    "displayName": "Track End E",
    "sectionType": "Overlay",
    "name": "Track End E"
  },
  "FENCE06": {
    "displayName": "Track End SE",
    "sectionType": "Overlay",
    "name": "Track End SE"
  },
  "FENCE07": {
    "displayName": "Track End S",
    "sectionType": "Overlay",
    "name": "Track End S"
  },
  "FENCE08": {
    "displayName": "Track End SW",
    "sectionType": "Overlay",
    "name": "Track End SW"
  },
  "FENCE09": {
    "displayName": "Track End W",
    "sectionType": "Overlay",
    "name": "Track End W"
  },
  "FENCE10": {
    "displayName": "Track End NW",
    "sectionType": "Overlay",
    "name": "Track End NW"
  },
  "FENCE12": {
    "displayName": "Fence12 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence12 DEMO HACK"
  },
  "FENCE13": {
    "displayName": "Fence13 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence13 DEMO HACK"
  },
  "FENCE14": {
    "displayName": "Fence14 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence14 DEMO HACK"
  },
  "FENCE15": {
    "displayName": "Fence15 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence15 DEMO HACK"
  },
  "FENCE16": {
    "displayName": "Fence16 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence16 DEMO HACK"
  },
  "FENCE17": {
    "displayName": "Fence17 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence17 DEMO HACK"
  },
  "FENCE18": {
    "displayName": "Fence18 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence18 DEMO HACK"
  },
  "FENCE19": {
    "displayName": "Fence19 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence19 DEMO HACK"
  },
  "FENCE20": {
    "displayName": "Fence20 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence20 DEMO HACK"
  },
  "FENCE21": {
    "displayName": "Fence21 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence21 DEMO HACK"
  },
  "FENCE22": {
    "displayName": "Fence22 DEMO HACK",
    "sectionType": "Overlay",
    "name": "Fence22 DEMO HACK"
  },
  "SROCK01": {
    "displayName": "Sand Rock A",
    "sectionType": "Overlay",
    "name": "Sand Rock A"
  },
  "SROCK02": {
    "displayName": "Sand Rock B",
    "sectionType": "Overlay",
    "name": "Sand Rock B"
  },
  "SROCK03": {
    "displayName": "Sand Rock C",
    "sectionType": "Overlay",
    "name": "Sand Rock C"
  },
  "SROCK04": {
    "displayName": "Sand Rock D",
    "sectionType": "Overlay",
    "name": "Sand Rock D"
  },
  "SROCK05": {
    "displayName": "Sand Rock E",
    "sectionType": "Overlay",
    "name": "Sand Rock E"
  },
  "TROCK01": {
    "displayName": "Clear Rock A",
    "sectionType": "Overlay",
    "name": "Clear Rock A"
  },
  "TROCK02": {
    "displayName": "Clear Rock B",
    "sectionType": "Overlay",
    "name": "Clear Rock B"
  },
  "TROCK03": {
    "displayName": "Clear Rock C",
    "sectionType": "Overlay",
    "name": "Clear Rock C"
  },
  "TROCK04": {
    "displayName": "Clear Rock D",
    "sectionType": "Overlay",
    "name": "Clear Rock D"
  },
  "TROCK05": {
    "displayName": "Clear Rock E",
    "sectionType": "Overlay",
    "name": "Clear Rock E"
  },
  "LUNRK1": {
    "displayName": "Large Rock A",
    "sectionType": "Overlay",
    "name": "Large Rock A"
  },
  "LUNRK2": {
    "displayName": "Large Rock B",
    "sectionType": "Overlay",
    "name": "Large Rock B"
  },
  "LUNRK3": {
    "displayName": "Large Rock C",
    "sectionType": "Overlay",
    "name": "Large Rock C"
  },
  "LUNRK4": {
    "displayName": "Large Rock D",
    "sectionType": "Overlay",
    "name": "Large Rock D"
  },
  "LUNRK5": {
    "displayName": "Large Rock E",
    "sectionType": "Overlay",
    "name": "Large Rock E"
  },
  "LUNRK6": {
    "displayName": "Large Rock F",
    "sectionType": "Overlay",
    "name": "Large Rock F"
  },
  "CBOX1": {
    "displayName": "Pavement Cliff Box",
    "sectionType": "Overlay",
    "name": "Pavement Cliff Box"
  },
  "CBLACK": {
    "displayName": "A Black Tile A",
    "sectionType": "Overlay",
    "name": "A Black Tile A"
  },
  "CBLACK02": {
    "displayName": "A Black Tile B",
    "sectionType": "Overlay",
    "name": "A Black Tile B"
  },
  "GEM01": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM02": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM03": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM04": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM05": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM06": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM07": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM08": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM09": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM10": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM11": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM12": {
    "displayName": "Gems",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "TRACKS01": {
    "displayName": "Track N/S",
    "sectionType": "Overlay",
    "name": "Track N/S"
  },
  "TRACKS02": {
    "displayName": "Track E/W",
    "sectionType": "Overlay",
    "name": "Track E/W"
  },
  "TRACKS03": {
    "displayName": "Track NE/SW",
    "sectionType": "Overlay",
    "name": "Track NE/SW"
  },
  "TRACKS04": {
    "displayName": "Track NW/SE",
    "sectionType": "Overlay",
    "name": "Track NW/SE"
  },
  "TRACKS05": {
    "displayName": "Track Turn N>NE",
    "sectionType": "Overlay",
    "name": "Track Turn N>NE"
  },
  "TRACKS06": {
    "displayName": "Track Turn N>NW",
    "sectionType": "Overlay",
    "name": "Track Turn N>NW"
  },
  "TRACKS07": {
    "displayName": "Track Turn S>SE",
    "sectionType": "Overlay",
    "name": "Track Turn S>SE"
  },
  "TRACKS08": {
    "displayName": "Track Turn S>SW",
    "sectionType": "Overlay",
    "name": "Track Turn S>SW"
  },
  "TRACKS09": {
    "displayName": "Track Turn E>NE",
    "sectionType": "Overlay",
    "name": "Track Turn E>NE"
  },
  "TRACKS10": {
    "displayName": "Track Turn E>SE",
    "sectionType": "Overlay",
    "name": "Track Turn E>SE"
  },
  "TRACKS11": {
    "displayName": "Track Turn W>NW",
    "sectionType": "Overlay",
    "name": "Track Turn W>NW"
  },
  "TRACKS12": {
    "displayName": "Track Turn W>SW",
    "sectionType": "Overlay",
    "name": "Track Turn W>SW"
  },
  "TRACKS13": {
    "displayName": "Track Fork N",
    "sectionType": "Overlay",
    "name": "Track Fork N"
  },
  "TRACKS14": {
    "displayName": "Track Fork NE",
    "sectionType": "Overlay",
    "name": "Track Fork NE"
  },
  "TRACKS15": {
    "displayName": "Track Fork E",
    "sectionType": "Overlay",
    "name": "Track Fork E"
  },
  "TRACKS16": {
    "displayName": "Track Fork SE",
    "sectionType": "Overlay",
    "name": "Track Fork SE"
  },
  "TRACKTUNNEL01": {
    "displayName": "Track Fork S",
    "sectionType": "Overlay",
    "name": "Track Fork S"
  },
  "TRACKTUNNEL02": {
    "displayName": "Track Fork SW",
    "sectionType": "Overlay",
    "name": "Track Fork SW"
  },
  "TRACKTUNNEL03": {
    "displayName": "Track Fork W",
    "sectionType": "Overlay",
    "name": "Track Fork W"
  },
  "TRACKTUNNEL04": {
    "displayName": "Track Fork NW",
    "sectionType": "Overlay",
    "name": "Track Fork NW"
  },
  "LOBRDG01": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG02": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG03": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG04": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG05": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG06": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG07": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG08": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG09": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG10": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG11": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG12": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG13": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG14": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG15": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG16": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG17": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG18": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG19": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG20": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG21": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG22": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG23": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG24": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG25": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG26": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG27": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG28": {
    "displayName": "Low Bridge",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDGE1": {
    "displayName": "Low Bridge End A",
    "sectionType": "Overlay",
    "name": "Low Bridge End A"
  },
  "LOBRDGE2": {
    "displayName": "Low Bridge End B",
    "sectionType": "Overlay",
    "name": "Low Bridge End B"
  },
  "LOBRDGE3": {
    "displayName": "Low Bridge End C",
    "sectionType": "Overlay",
    "name": "Low Bridge End C"
  },
  "LOBRDGE4": {
    "displayName": "Low Bridge End D",
    "sectionType": "Overlay",
    "name": "Low Bridge End D"
  },
  "LOBRDB01": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB02": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB03": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB04": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB05": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB06": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB07": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB08": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB09": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB10": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB11": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB12": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB13": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB14": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB15": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB16": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB17": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB18": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB19": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB20": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB21": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB22": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB23": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB24": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB25": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB26": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB27": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB28": {
    "displayName": "Concrete Low Bridge",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDGB1": {
    "displayName": "Concrete Low Bridge End 1",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 1"
  },
  "LOBRDGB2": {
    "displayName": "Concrete Low Bridge End 2",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 2"
  },
  "LOBRDGB3": {
    "displayName": "Concrete Low Bridge End 3",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 3"
  },
  "LOBRDGB4": {
    "displayName": "Concrete Low Bridge End 4",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 4"
  },
  "RAILBRDG1": {
    "displayName": "Railroad Bridge 1",
    "sectionType": "Overlay",
    "name": "Railroad Bridge 1"
  },
  "RAILBRDG2": {
    "displayName": "Railroad Bridge 2",
    "sectionType": "Overlay",
    "name": "Railroad Bridge 2"
  },
  "BRIDGE1": {
    "displayName": "Bridge 1",
    "sectionType": "Overlay",
    "name": "Bridge 1"
  },
  "BRIDGE2": {
    "displayName": "Bridge 2",
    "sectionType": "Overlay",
    "name": "Bridge 2"
  },
  "BRIDGEB1": {
    "displayName": "Wood Bridge 1",
    "sectionType": "Overlay",
    "name": "Wood Bridge 1"
  },
  "BRIDGEB2": {
    "displayName": "Wood Bridge 2",
    "sectionType": "Overlay",
    "name": "Wood Bridge 2"
  },
  "CRATE": {
    "displayName": "Goodie Crate",
    "sectionType": "Overlay",
    "name": "Goodie Crate"
  },
  "WCRATE": {
    "displayName": "Water Crate",
    "sectionType": "Overlay",
    "name": "Water Crate"
  },
  "CRAT02": {
    "displayName": "Crate",
    "sectionType": "Unknown",
    "name": "Crate"
  },
  "CRAT03": {
    "displayName": "Crate",
    "sectionType": "Unknown",
    "name": "Crate"
  },
  "CRAT04": {
    "displayName": "Crate",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "CRAT0A": {
    "displayName": "Crate",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "CRAT0B": {
    "displayName": "Crate",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "CRAT0C": {
    "displayName": "Crate",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "DRUM02": {
    "displayName": "Drum",
    "sectionType": "Unknown",
    "name": "Drum"
  },
  "PALET01": {
    "displayName": "Block Base",
    "sectionType": "Overlay",
    "name": "Block Base"
  },
  "PALET02": {
    "displayName": "Palette",
    "sectionType": "Overlay",
    "name": "Palette"
  },
  "PALET03": {
    "displayName": "Palette",
    "sectionType": "Overlay",
    "name": "Palette"
  },
  "PALET04": {
    "displayName": "Block Base and Movement",
    "sectionType": "Overlay",
    "name": "Block Base and Movement"
  },
  "CRATER01": {
    "displayName": "CRATER01",
    "sectionType": "Unknown"
  },
  "CRATER02": {
    "displayName": "CRATER02",
    "sectionType": "Unknown"
  },
  "CRATER03": {
    "displayName": "CRATER03",
    "sectionType": "Unknown"
  },
  "CRATER04": {
    "displayName": "CRATER04",
    "sectionType": "Unknown"
  },
  "CRATER05": {
    "displayName": "CRATER05",
    "sectionType": "Unknown"
  },
  "CRATER06": {
    "displayName": "CRATER06",
    "sectionType": "Unknown"
  },
  "CRATER07": {
    "displayName": "CRATER07",
    "sectionType": "Unknown"
  },
  "CRATER08": {
    "displayName": "CRATER08",
    "sectionType": "Unknown"
  },
  "CRATER09": {
    "displayName": "CRATER09",
    "sectionType": "Unknown"
  },
  "CRATER10": {
    "displayName": "CRATER10",
    "sectionType": "Unknown"
  },
  "CRATER11": {
    "displayName": "CRATER11",
    "sectionType": "Unknown"
  },
  "CRATER12": {
    "displayName": "CRATER12",
    "sectionType": "Unknown"
  },
  "BURNT01": {
    "displayName": "BURNT01",
    "sectionType": "Unknown"
  },
  "BURNT02": {
    "displayName": "BURNT02",
    "sectionType": "Unknown"
  },
  "BURNT03": {
    "displayName": "BURNT03",
    "sectionType": "Unknown"
  },
  "BURNT04": {
    "displayName": "BURNT04",
    "sectionType": "Unknown"
  },
  "BURNT05": {
    "displayName": "BURNT05",
    "sectionType": "Unknown"
  },
  "BURNT06": {
    "displayName": "BURNT06",
    "sectionType": "Unknown"
  },
  "BURNT07": {
    "displayName": "BURNT07",
    "sectionType": "Unknown"
  },
  "BURNT08": {
    "displayName": "BURNT08",
    "sectionType": "Unknown"
  },
  "BURNT09": {
    "displayName": "BURNT09",
    "sectionType": "Unknown"
  },
  "BURNT10": {
    "displayName": "BURNT10",
    "sectionType": "Unknown"
  },
  "BURNT11": {
    "displayName": "BURNT11",
    "sectionType": "Unknown"
  },
  "BURNT12": {
    "displayName": "BURNT12",
    "sectionType": "Unknown"
  },
  "CR1": {
    "displayName": "CR1",
    "sectionType": "Unknown"
  },
  "CR2": {
    "displayName": "CR2",
    "sectionType": "Unknown"
  },
  "CR3": {
    "displayName": "CR3",
    "sectionType": "Unknown"
  },
  "CR4": {
    "displayName": "CR4",
    "sectionType": "Unknown"
  },
  "CR5": {
    "displayName": "CR5",
    "sectionType": "Unknown"
  },
  "CR6": {
    "displayName": "CR6",
    "sectionType": "Unknown"
  },
  "BURN01": {
    "displayName": "BURN01",
    "sectionType": "Unknown"
  },
  "BURN02": {
    "displayName": "BURN02",
    "sectionType": "Unknown"
  },
  "BURN03": {
    "displayName": "BURN03",
    "sectionType": "Unknown"
  },
  "BURN04": {
    "displayName": "BURN04",
    "sectionType": "Unknown"
  },
  "BURN05": {
    "displayName": "BURN05",
    "sectionType": "Unknown"
  },
  "BURN06": {
    "displayName": "BURN06",
    "sectionType": "Unknown"
  },
  "BURN07": {
    "displayName": "BURN07",
    "sectionType": "Unknown"
  },
  "BURN08": {
    "displayName": "BURN08",
    "sectionType": "Unknown"
  },
  "BURN09": {
    "displayName": "BURN09",
    "sectionType": "Unknown"
  },
  "BURN10": {
    "displayName": "BURN10",
    "sectionType": "Unknown"
  },
  "BURN11": {
    "displayName": "BURN11",
    "sectionType": "Unknown"
  },
  "BURN12": {
    "displayName": "BURN12",
    "sectionType": "Unknown"
  },
  "BURN13": {
    "displayName": "BURN13",
    "sectionType": "Unknown"
  },
  "BURN14": {
    "displayName": "BURN14",
    "sectionType": "Unknown"
  },
  "BURN15": {
    "displayName": "BURN15",
    "sectionType": "Unknown"
  },
  "BURN16": {
    "displayName": "BURN16",
    "sectionType": "Unknown"
  },
  "Clear": {
    "displayName": "Clear",
    "sectionType": "Unknown"
  },
  "Rough": {
    "displayName": "Rough",
    "sectionType": "Unknown"
  },
  "Road": {
    "displayName": "Road",
    "sectionType": "Unknown"
  },
  "Water": {
    "displayName": "Water",
    "sectionType": "Unknown"
  },
  "Rock": {
    "displayName": "Rock",
    "sectionType": "Unknown"
  },
  "Wall": {
    "displayName": "Wall",
    "sectionType": "Unknown"
  },
  "Tiberium": {
    "displayName": "Tiberium",
    "sectionType": "Unknown"
  },
  "Beach": {
    "displayName": "Beach",
    "sectionType": "Unknown"
  },
  "Ice": {
    "displayName": "Ice",
    "sectionType": "Unknown"
  },
  "Tunnel": {
    "displayName": "Tunnel",
    "sectionType": "Unknown"
  },
  "Railroad": {
    "displayName": "Railroad",
    "sectionType": "Unknown"
  },
  "Weeds": {
    "displayName": "Weeds",
    "sectionType": "Unknown"
  },
  "Cliff": {
    "displayName": "Cliff",
    "sectionType": "Unknown"
  },
  "Tiberiums": {
    "displayName": "Tiberiums",
    "sectionType": "Unknown"
  },
  "Riparius": {
    "displayName": "Gold",
    "sectionType": "Unknown",
    "name": "Gold"
  },
  "Cruentus": {
    "displayName": "Gems",
    "sectionType": "Unknown",
    "name": "Gems"
  },
  "Vinifera": {
    "displayName": "Gold",
    "sectionType": "Unknown",
    "name": "Gold"
  },
  "Aboreus": {
    "displayName": "Gold",
    "sectionType": "Unknown",
    "name": "Gold"
  },
  "Ambush": {
    "displayName": "Ambush",
    "sectionType": "Unknown"
  },
  "Area Guard": {
    "displayName": "Area Guard",
    "sectionType": "Unknown"
  },
  "Attack": {
    "displayName": "Attack",
    "sectionType": "Unknown"
  },
  "Capture": {
    "displayName": "Capture",
    "sectionType": "Unknown"
  },
  "Construction": {
    "displayName": "Construction",
    "sectionType": "Unknown"
  },
  "Eaten": {
    "displayName": "Eaten",
    "sectionType": "Unknown"
  },
  "Enter": {
    "displayName": "Enter",
    "sectionType": "Unknown"
  },
  "Guard": {
    "displayName": "Guard",
    "sectionType": "Unknown"
  },
  "Harmless": {
    "displayName": "Harmless",
    "sectionType": "Unknown"
  },
  "Harvest": {
    "displayName": "Harvest",
    "sectionType": "Unknown"
  },
  "Hunt": {
    "displayName": "Hunt",
    "sectionType": "Unknown"
  },
  "Missile": {
    "displayName": "Missile",
    "sectionType": "Unknown"
  },
  "Move": {
    "displayName": "Move",
    "sectionType": "Unknown"
  },
  "Open": {
    "displayName": "Open",
    "sectionType": "Unknown"
  },
  "Patrol": {
    "displayName": "Patrol",
    "sectionType": "Unknown"
  },
  "QMove": {
    "displayName": "QMove",
    "sectionType": "Unknown"
  },
  "Repair": {
    "displayName": "Repair",
    "sectionType": "Unknown"
  },
  "Rescue": {
    "displayName": "Rescue",
    "sectionType": "Unknown"
  },
  "Retreat": {
    "displayName": "Retreat",
    "sectionType": "Unknown"
  },
  "Return": {
    "displayName": "Return",
    "sectionType": "Unknown"
  },
  "Sabotage": {
    "displayName": "Sabotage",
    "sectionType": "Unknown"
  },
  "Selling": {
    "displayName": "Selling",
    "sectionType": "Unknown"
  },
  "Sleep": {
    "displayName": "Sleep",
    "sectionType": "Unknown"
  },
  "Sticky": {
    "displayName": "Sticky",
    "sectionType": "Unknown"
  },
  "Stop": {
    "displayName": "Stop",
    "sectionType": "Unknown"
  },
  "Unload": {
    "displayName": "Unload",
    "sectionType": "Unknown"
  },
  "PIECE": {
    "displayName": "Scrap Metal Debris",
    "sectionType": "Unknown",
    "name": "Scrap Metal Debris"
  },
  "TIRE": {
    "displayName": "Flying Tire",
    "sectionType": "Unknown",
    "name": "Flying Tire"
  },
  "GASTANK": {
    "displayName": "Flying Gas Tank",
    "sectionType": "Unknown",
    "name": "Flying Gas Tank"
  },
  "MOLES": {
    "displayName": "Flying Toxic Bomb",
    "sectionType": "Unknown",
    "name": "Flying Toxic Bomb"
  },
  "SPIKES": {
    "displayName": "Cryo Spikes",
    "sectionType": "Unknown",
    "name": "Cryo Spikes"
  },
  "SCRCHB": {
    "displayName": "Scorch Bombs",
    "sectionType": "Unknown",
    "name": "Scorch Bombs"
  },
  "CNTRHEAD": {
    "displayName": "Centurion Head",
    "sectionType": "Unknown",
    "name": "Centurion Head"
  },
  "SONICTURRET": {
    "displayName": "Sonic Tank Turret",
    "sectionType": "Unknown",
    "name": "Sonic Tank Turret"
  },
  "4TNKTURRET": {
    "displayName": "Mammoth Tank Turret",
    "sectionType": "Unknown",
    "name": "Mammoth Tank Turret"
  },
  "CRYSTAL01": {
    "displayName": "Tiberium Shard A",
    "sectionType": "Unknown",
    "name": "Tiberium Shard A"
  },
  "CRYSTAL02": {
    "displayName": "Tiberium Crystal B",
    "sectionType": "Unknown",
    "name": "Tiberium Crystal B"
  },
  "METEOR01": {
    "displayName": "Meteorite A",
    "sectionType": "Unknown",
    "name": "Meteorite A"
  },
  "METEOR02": {
    "displayName": "Meteorite B",
    "sectionType": "Unknown",
    "name": "Meteorite B"
  },
  "PEBBLE": {
    "displayName": "Tiberium Shard",
    "sectionType": "Unknown",
    "name": "Tiberium Shard"
  },
  "VariableNames": {
    "displayName": "VariableNames",
    "sectionType": "Unknown"
  }
};

export function normalizeStringLabel(label: string): string {
  return label.trim().replace(/^name\s*:\s*/i, 'NAME:').toUpperCase();
}

export function resolveStringLabel(
  label: string | undefined | null,
  stringMap: Record<string, string> = MO_NAME_STRINGS_ZH_CN
): string | undefined {
  if (!label) return undefined;
  return stringMap[normalizeStringLabel(label)];
}

export function getLastEntryValue(
  section: BasicIniSection,
  key: string
): string | undefined {
  const lowerKey = key.toLowerCase();
  for (let i = section.entries.length - 1; i >= 0; i -= 1) {
    const entry = section.entries[i];
    if (entry.key.toLowerCase() === lowerKey) return entry.value;
  }
  return undefined;
}

/**
 * Resolve a section display name by reading UIName first, then Name, then Section ID.
 * Use this when the user is viewing a parsed rulesmo.ini section.
 */
export function resolveDisplayName(
  section: BasicIniSection,
  stringMap: Record<string, string> = MO_NAME_STRINGS_ZH_CN
): ResolvedDisplayName {
  const uiName = getLastEntryValue(section, 'UIName');
  const rawName = getLastEntryValue(section, 'Name');

  const displayName = resolveStringLabel(uiName, stringMap);
  if (displayName) {
    return { displayName, uiName, rawName, resolvedBy: 'uiName' };
  }

  if (rawName) {
    return { displayName: rawName, uiName, rawName, resolvedBy: 'name' };
  }

  return { displayName: section.name, uiName, rawName, resolvedBy: 'section' };
}

/**
 * Resolve by Section ID using the built-in metadata table.
 * Use this for fast search/list display before opening a parsed section.
 */
export function resolveDisplayNameBySectionId(
  sectionId: string,
  fallbackName?: string
): ResolvedDisplayName {
  const entry = MO_DISPLAY_NAMES_ZH_CN[sectionId];
  if (entry) {
    return {
      displayName: entry.displayName,
      uiName: entry.uiName,
      rawName: entry.name,
      resolvedBy: entry.uiName ? 'uiName' : entry.name ? 'name' : 'section',
    };
  }

  if (fallbackName) {
    return { displayName: fallbackName, rawName: fallbackName, resolvedBy: 'name' };
  }

  return { displayName: sectionId, resolvedBy: 'section' };
}

export function getDisplaySearchText(sectionId: string): string {
  const entry = MO_DISPLAY_NAMES_ZH_CN[sectionId];
  if (!entry) return sectionId;
  return [sectionId, entry.displayName, entry.uiName, entry.name, entry.sectionType]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}
