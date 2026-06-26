/**
 * MO Rulesmith Chinese localization data.
 *
 * Put this file in `src/data/moLocalization.zhCN.ts`, then import the maps
 * and helper functions wherever object display names are needed.
 *
 * Notes:
 * - `MO_NAME_STRINGS_ZH_CN` contains official string-table style labels.
 * - `MO_DISPLAY_NAMES_ZH_CN` also includes inferred Chinese aliases for
 *   internal rules-only sections such as weapons, warheads and projectiles.
 * - These names are only for UI readability. Do not write them back to rulesmo.ini.
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
 * Section ID -> display metadata.
 * Includes both CSF-backed names and inferred Chinese aliases for internal rules sections.
 */
export const MO_DISPLAY_NAMES_ZH_CN: Record<string, MoDisplayNameEntry> = {
  "General": {
    "displayName": "心灵终结 3.3.6 官方规则文件",
    "sectionType": "Unknown",
    "uiName": "NAME:General",
    "name": "Mental Omega 3.3.6 --- Official Rules of Engagement"
  },
  "JumpjetControls": {
    "displayName": "飞行兵控制",
    "sectionType": "Unknown"
  },
  "SpecialWeapons": {
    "displayName": "特殊武器设置",
    "sectionType": "Unknown"
  },
  "GenericPrerequisites": {
    "displayName": "通用前置条件",
    "sectionType": "Unknown"
  },
  "AudioVisual": {
    "displayName": "音效与视觉设置",
    "sectionType": "Unknown"
  },
  "CrateRules": {
    "displayName": "随机箱规则",
    "sectionType": "Unknown"
  },
  "Powerups": {
    "displayName": "随机箱奖励",
    "sectionType": "Unknown"
  },
  "CombatDamage": {
    "displayName": "战斗伤害设置",
    "sectionType": "Unknown"
  },
  "Radiation": {
    "displayName": "辐射设置",
    "sectionType": "Unknown"
  },
  "ElevationModel": {
    "displayName": "高地模型",
    "sectionType": "Unknown"
  },
  "WallModel": {
    "displayName": "围墙模型",
    "sectionType": "Unknown"
  },
  "GlobalControls": {
    "displayName": "全局控制",
    "sectionType": "Unknown"
  },
  "MultiplayerDialogSettings": {
    "displayName": "多人游戏默认设置",
    "sectionType": "Unknown"
  },
  "Maximums": {
    "displayName": "最大值设置",
    "sectionType": "Unknown"
  },
  "AI": {
    "displayName": "AI 设置",
    "sectionType": "Unknown"
  },
  "IQ": {
    "displayName": "玩家/AI 智能等级",
    "sectionType": "Unknown"
  },
  "Easy": {
    "displayName": "简单难度",
    "sectionType": "Unknown"
  },
  "Normal": {
    "displayName": "正常难度",
    "sectionType": "Unknown"
  },
  "Difficult": {
    "displayName": "困难难度",
    "sectionType": "Unknown"
  },
  "MouseCursors": {
    "displayName": "鼠标光标",
    "sectionType": "Unknown"
  },
  "Colors": {
    "displayName": "颜色设置",
    "sectionType": "Unknown"
  },
  "ColorAdd": {
    "displayName": "颜色叠加",
    "sectionType": "Unknown"
  },
  "TunnelTypes": {
    "displayName": "隧道类型",
    "sectionType": "Unknown"
  },
  "FatalTunnel": {
    "displayName": "致命隧道",
    "sectionType": "Unknown"
  },
  "BasicTunnel": {
    "displayName": "基础隧道",
    "sectionType": "Unknown"
  },
  "ArmorTypes": {
    "displayName": "护甲类型",
    "sectionType": "Unknown"
  },
  "InfantryTypes": {
    "displayName": "步兵类型列表",
    "sectionType": "Unknown"
  },
  "VehicleTypes": {
    "displayName": "载具类型列表",
    "sectionType": "Unknown"
  },
  "AircraftTypes": {
    "displayName": "飞机类型列表",
    "sectionType": "Unknown"
  },
  "BuildingTypes": {
    "displayName": "建筑类型列表",
    "sectionType": "Unknown"
  },
  "TerrainTypes": {
    "displayName": "地形类型列表",
    "sectionType": "Unknown"
  },
  "SmudgeTypes": {
    "displayName": "地表痕迹类型列表",
    "sectionType": "Unknown"
  },
  "OverlayTypes": {
    "displayName": "覆盖物类型列表",
    "sectionType": "Unknown"
  },
  "Animations": {
    "displayName": "动画列表",
    "sectionType": "Unknown"
  },
  "VoxelAnims": {
    "displayName": "体素碎片动画列表",
    "sectionType": "Unknown"
  },
  "Particles": {
    "displayName": "粒子列表",
    "sectionType": "Unknown"
  },
  "ParticleSystems": {
    "displayName": "粒子系统列表",
    "sectionType": "Unknown"
  },
  "SuperWeaponTypes": {
    "displayName": "超级武器类型列表",
    "sectionType": "Unknown"
  },
  "Warheads": {
    "displayName": "弹头列表",
    "sectionType": "Unknown"
  },
  "WeaponTypes": {
    "displayName": "武器类型列表",
    "sectionType": "Unknown"
  },
  "Projectiles": {
    "displayName": "抛射体列表",
    "sectionType": "Unknown"
  },
  "Sides": {
    "displayName": "阵营列表",
    "sectionType": "Unknown"
  },
  "GDI": {
    "displayName": "盟军阵营",
    "sectionType": "Unknown"
  },
  "Nod": {
    "displayName": "苏军阵营",
    "sectionType": "Unknown"
  },
  "ThirdSide": {
    "displayName": "厄普西隆阵营",
    "sectionType": "Unknown"
  },
  "FourthSide": {
    "displayName": "焚风阵营",
    "sectionType": "Unknown"
  },
  "Civilian": {
    "displayName": "平民阵营",
    "sectionType": "Unknown"
  },
  "Mutant": {
    "displayName": "变异阵营",
    "sectionType": "Unknown"
  },
  "Countries": {
    "displayName": "国家列表",
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
    "displayName": "附加逻辑 - 猎杀者追踪器",
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
    "displayName": "附加逻辑 - 磁力光束",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Magnetic Beam"
  },
  "MAGNET_2": {
    "displayName": "附加逻辑 - 鹦鹉螺光束",
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
    "displayName": "附加逻辑 - 独眼巨人近战",
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
    "displayName": "附加逻辑 - 火蜥蜴混乱 1",
    "sectionType": "Vehicle",
    "uiName": "NAME:EMPTY",
    "name": "Addon - Salamander Confusion 1"
  },
  "SALA_2": {
    "displayName": "附加逻辑 - 火蜥蜴混乱 2",
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
    "displayName": "虚拟基地单位",
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
    "displayName": "地图虚拟单位 1",
    "sectionType": "Vehicle",
    "name": "Map Dummy 1"
  },
  "MDUMMY2": {
    "displayName": "地图虚拟单位 2",
    "sectionType": "Vehicle",
    "name": "Map Dummy 2"
  },
  "MDUMMY3": {
    "displayName": "地图虚拟单位 3",
    "sectionType": "Vehicle",
    "name": "Map Dummy 3"
  },
  "CDUMMY": {
    "displayName": "箱子投放（生成器）",
    "sectionType": "Vehicle",
    "name": "Crate Drop (Spawner)"
  },
  "GCHF": {
    "displayName": "齿轮切换（生成器）",
    "sectionType": "Vehicle",
    "name": "Gear Change (Spawner)"
  },
  "NCHF": {
    "displayName": "纳米充能（生成器）",
    "sectionType": "Vehicle",
    "name": "Nanocharge (Spawner)"
  },
  "BOIDF": {
    "displayName": "任务标记（生成器）",
    "sectionType": "Vehicle",
    "name": "Mission Marker (Spawner)"
  },
  "ICE1": {
    "displayName": "南极浮冰",
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
    "displayName": "心灵炸弹",
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
    "displayName": "普通虚拟建筑（请勿使用）",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Normal (Do Not Use)"
  },
  "AILOCK": {
    "displayName": "AI 锁定器（请勿使用）",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "AI Locker (Do Not Use)"
  },
  "NOTHING": {
    "displayName": "无意义虚拟建筑（请勿使用）",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Insignificant (Do Not Use)"
  },
  "F_ERESB": {
    "displayName": "伪精英预备队（请勿使用）",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Fake Elite Reserves (Do Not Use)"
  },
  "F_KSNAK": {
    "displayName": "王蛇传送",
    "sectionType": "Vehicle",
    "name": "Kingsnake Warp"
  },
  "CASHTAKE": {
    "displayName": "虚拟资金扣除",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Cash Take"
  },
  "CASHGIVE": {
    "displayName": "虚拟资金给予",
    "sectionType": "Building",
    "uiName": "NAME:DUMMYDUMMY",
    "name": "Dummy Cash Give"
  },
  "CASHROUD": {
    "displayName": "地图黑幕发生器",
    "sectionType": "Building",
    "uiName": "NAME:CASHROUD",
    "name": "Map Shroud Generator"
  },
  "GAWEAPC": {
    "displayName": "盟军战车工厂占位",
    "sectionType": "Unknown"
  },
  "NAWEAPC": {
    "displayName": "苏军战车工厂占位",
    "sectionType": "Unknown"
  },
  "YAWEAPC": {
    "displayName": "厄普西隆战车工厂占位",
    "sectionType": "Unknown"
  },
  "FAWEAPC": {
    "displayName": "焚风战车工厂占位",
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
    "displayName": "视野逻辑（请勿使用）",
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
    "displayName": "信号干扰器（请勿使用）",
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
    "displayName": "大型辐射场",
    "sectionType": "Building",
    "name": "Radiation Field Large"
  },
  "RADFLD2": {
    "displayName": "小型辐射场",
    "sectionType": "Building",
    "name": "Radiation Field Small"
  },
  "CACRCK": {
    "displayName": "可摧毁岩石基底",
    "sectionType": "Overlay",
    "name": "Destructible Rocks Base"
  },
  "CARCK01": {
    "displayName": "可摧毁岩石 A",
    "sectionType": "Building",
    "name": "Destructible Rocks A"
  },
  "CARCK02": {
    "displayName": "可摧毁岩石 B",
    "sectionType": "Building",
    "name": "Destructible Rocks B"
  },
  "CARCK03": {
    "displayName": "可摧毁岩石 C",
    "sectionType": "Building",
    "name": "Destructible Rocks C"
  },
  "CARCK04": {
    "displayName": "可摧毁岩石 D",
    "sectionType": "Building",
    "name": "Destructible Rocks D"
  },
  "CARCK05": {
    "displayName": "可摧毁岩石 E",
    "sectionType": "Building",
    "name": "Destructible Rocks E"
  },
  "CARCK06": {
    "displayName": "可摧毁岩石 F",
    "sectionType": "Building",
    "name": "Destructible Rocks F"
  },
  "INORANLAMP": {
    "displayName": "隐形橙色光源柱",
    "sectionType": "Building",
    "name": "Invisible Orange Light Post"
  },
  "INGRNLMP": {
    "displayName": "隐形绿色光源柱",
    "sectionType": "Building",
    "name": "Invisible Green Light Post"
  },
  "INREDLMP": {
    "displayName": "隐形红色光源柱",
    "sectionType": "Building",
    "name": "Invisible Red Light Post"
  },
  "INBLULMP": {
    "displayName": "隐形蓝色光源柱",
    "sectionType": "Building",
    "name": "Invisible Blue Light Post"
  },
  "INGALITE": {
    "displayName": "隐形白色光源柱",
    "sectionType": "Building",
    "name": "Invisible White Light Post"
  },
  "INYELWLAMP": {
    "displayName": "隐形黄色光源柱",
    "sectionType": "Building",
    "name": "Invisible Yellow Light Post"
  },
  "INPURPLAMP": {
    "displayName": "隐形紫色光源柱",
    "sectionType": "Building",
    "name": "Invisible Purple Light Post"
  },
  "INTEALLAMP": {
    "displayName": "隐形青色光源柱",
    "sectionType": "Building",
    "name": "Invisible Teal Light Post"
  },
  "INMAGNLAMP": {
    "displayName": "隐形品红光源柱",
    "sectionType": "Building",
    "name": "Invisible Magenta Light Post"
  },
  "INBLCKLAMP": {
    "displayName": "隐形黑色光源柱",
    "sectionType": "Building",
    "name": "Invisible Black Light Post"
  },
  "INAQUALAMP": {
    "displayName": "隐形水蓝光源柱",
    "sectionType": "Building",
    "name": "Invisible Aqua Light Post"
  },
  "INPINKLAMP": {
    "displayName": "隐形粉色光源柱",
    "sectionType": "Building",
    "name": "Invisible Pink Light Post"
  },
  "TEMMORLAMP": {
    "displayName": "温带早晨光源柱",
    "sectionType": "Building",
    "name": "Temperate Morning Light Post"
  },
  "TEMDAYLAMP": {
    "displayName": "温带白天光源柱",
    "sectionType": "Building",
    "name": "Temperate Day Light Post"
  },
  "TEMDUSLAMP": {
    "displayName": "温带黄昏光源柱",
    "sectionType": "Building",
    "name": "Temperate Dusk Light Post"
  },
  "TEMNITLAMP": {
    "displayName": "温带夜晚光源柱",
    "sectionType": "Building",
    "name": "Temperate Night Light Post"
  },
  "SNOMORLAMP": {
    "displayName": "雪地早晨光源柱",
    "sectionType": "Building",
    "name": "Snow Morning Light Post"
  },
  "SNODAYLAMP": {
    "displayName": "雪地白天光源柱",
    "sectionType": "Building",
    "name": "Snow Day Light Post"
  },
  "SNODUSLAMP": {
    "displayName": "雪地黄昏光源柱",
    "sectionType": "Building",
    "name": "Snow Dusk Light Post"
  },
  "SNONITLAMP": {
    "displayName": "雪地夜晚光源柱",
    "sectionType": "Building",
    "name": "Snow Night Light Post"
  },
  "NEGBLUE": {
    "displayName": "色调黄色光源柱",
    "sectionType": "Building",
    "name": "Tint Yellow Light Post"
  },
  "NEGRED": {
    "displayName": "色调青色光源柱",
    "sectionType": "Building",
    "name": "Tint Teal Light Post"
  },
  "NEGGREEN": {
    "displayName": "色调紫色光源柱",
    "sectionType": "Building",
    "name": "Tint Purple Light Post"
  },
  "NEGLAMP": {
    "displayName": "负片白色光源柱",
    "sectionType": "Building",
    "name": "Negative White Light Post"
  },
  "NEGBLACK": {
    "displayName": "绝对黑色光源柱",
    "sectionType": "Building",
    "name": "Absolute Black Light Post"
  },
  "REDTLAMP": {
    "displayName": "色调红色光源柱",
    "sectionType": "Building",
    "name": "Tint Red Light Post"
  },
  "GREENTLAMP": {
    "displayName": "色调绿色光源柱",
    "sectionType": "Building",
    "name": "Tint Green Light Post"
  },
  "TSTLAMP": {
    "displayName": "透明光源圆形A",
    "sectionType": "Building",
    "name": "Alpha Light Circle A"
  },
  "TSTLAMPB": {
    "displayName": "透明光源圆形B",
    "sectionType": "Building",
    "name": "Alpha Light Circle B"
  },
  "TSTLAMPC": {
    "displayName": "透明光源方形A",
    "sectionType": "Building",
    "name": "Alpha Light Square A"
  },
  "TSTLAMPD": {
    "displayName": "透明光源方形B",
    "sectionType": "Building",
    "name": "Alpha Light Square B"
  },
  "XLAMP": {
    "displayName": "负片透明光源圆形",
    "sectionType": "Building",
    "name": "Negative Alpha Light Circle"
  },
  "XLAMPB": {
    "displayName": "负片透明光源方形",
    "sectionType": "Building",
    "name": "Negative Alpha Light Square"
  },
  "GALITE": {
    "displayName": "光源柱（请勿使用）",
    "sectionType": "Building",
    "name": "Light Post (Do Not Use)"
  },
  "REDLAMP": {
    "displayName": "红色光源柱（请勿使用）",
    "sectionType": "Building",
    "name": "Red Light Post (Do Not Use)"
  },
  "GRENLAMP": {
    "displayName": "绿色光源柱（请勿使用）",
    "sectionType": "Building",
    "name": "Green Light Post (Do Not Use)"
  },
  "BLUELAMP": {
    "displayName": "蓝色光源柱（请勿使用）",
    "sectionType": "Building",
    "name": "Blue Light Post (Do Not Use)"
  },
  "YELWLAMP": {
    "displayName": "黄色光源柱（请勿使用）",
    "sectionType": "Building",
    "name": "Yellow Light Post (Do Not Use)"
  },
  "PURPLAMP": {
    "displayName": "紫色光源柱（请勿使用）",
    "sectionType": "Building",
    "name": "Purple Light Post (Do Not Use)"
  },
  "CAOILDOM": {
    "displayName": "油井/赏金可占领建筑",
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
    "displayName": "占位Radar",
    "sectionType": "Unknown",
    "name": "Placeholder Radar"
  },
  "CACEAS": {
    "displayName": "停火生成建筑（请勿使用）",
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
    "displayName": "自定义装饰物 A",
    "sectionType": "Building",
    "name": "Custom Prop A"
  },
  "CACRSS2": {
    "displayName": "自定义装饰物 B",
    "sectionType": "Building",
    "name": "Custom Prop B"
  },
  "CACRSS3": {
    "displayName": "自定义装饰物 C",
    "sectionType": "Building",
    "name": "Custom Prop C"
  },
  "CACRSS4": {
    "displayName": "自定义装饰物 D",
    "sectionType": "Building",
    "name": "Custom Prop D"
  },
  "CACRSSX": {
    "displayName": "自定义装饰物 X",
    "sectionType": "Building",
    "name": "Custom Prop X"
  },
  "CACRSSY": {
    "displayName": "自定义装饰物 Y",
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
    "displayName": "克里姆林宫城墙大型塔楼",
    "sectionType": "Building",
    "name": "Kremlin Wall Large Tower"
  },
  "CARUS02B": {
    "displayName": "克里姆林宫城墙小型塔楼",
    "sectionType": "Building",
    "name": "Kremlin Wall Small Tower"
  },
  "CARUS02C": {
    "displayName": "克里姆林宫北侧城墙",
    "sectionType": "Building",
    "name": "Kremlin Wall North"
  },
  "CARUS02D": {
    "displayName": "克里姆林宫东侧城墙",
    "sectionType": "Building",
    "name": "Kremlin Wall East"
  },
  "CARUS02E": {
    "displayName": "克里姆林宫南侧城墙",
    "sectionType": "Building",
    "name": "Kremlin Wall South"
  },
  "CARUS02F": {
    "displayName": "克里姆林宫西侧城墙",
    "sectionType": "Building",
    "name": "Kremlin Wall West"
  },
  "CARUS02G": {
    "displayName": "克里姆林宫城墙钟楼",
    "sectionType": "Building",
    "name": "Kremlin Wall Clock Tower"
  },
  "CARUS02H": {
    "displayName": "克里姆林宫城墙转角",
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
    "displayName": "古姆百货转角",
    "sectionType": "Building",
    "name": "GUM Corner"
  },
  "CARUS09": {
    "displayName": "古姆百货中段",
    "sectionType": "Building",
    "name": "GUM Middle"
  },
  "CARUS10": {
    "displayName": "古姆百货墙NS",
    "sectionType": "Building",
    "name": "GUM Wall NS"
  },
  "CARUS11": {
    "displayName": "古姆百货墙EW",
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
    "displayName": "强化墙转角",
    "sectionType": "Building",
    "name": "Reinforced Wall Corner"
  },
  "FARWALB": {
    "displayName": "强化墙NS",
    "sectionType": "Building",
    "name": "Reinforced Wall NS"
  },
  "FARWALC": {
    "displayName": "强化墙EW",
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
    "displayName": "交通光源A",
    "sectionType": "Building",
    "name": "Traffic Light A"
  },
  "CASTRT02": {
    "displayName": "交通光源B",
    "sectionType": "Building",
    "name": "Traffic Light B"
  },
  "CASTRT03": {
    "displayName": "交通光源C",
    "sectionType": "Building",
    "name": "Traffic Light C"
  },
  "CASTRT04": {
    "displayName": "交通光源 D",
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
    "displayName": "辐射SignA",
    "sectionType": "Building",
    "name": "Radiation Sign A"
  },
  "CARSIN02": {
    "displayName": "辐射SignB",
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
    "displayName": "停火武器",
    "sectionType": "Weapon"
  },
  "SpecialC4": {
    "displayName": "特殊 C4",
    "sectionType": "Weapon"
  },
  "SuperIronWeapon": {
    "displayName": "超级铁幕武器",
    "sectionType": "Weapon"
  },
  "TrueSuperIronWeapon": {
    "displayName": "真实超级铁幕武器",
    "sectionType": "Weapon"
  },
  "FauxDomAttach": {
    "displayName": "虚假心灵支配附着",
    "sectionType": "Weapon"
  },
  "FauxDomIntro": {
    "displayName": "虚假心灵支配入场",
    "sectionType": "Weapon"
  },
  "FauxDomSound": {
    "displayName": "虚假心灵支配音效",
    "sectionType": "Weapon"
  },
  "FauxDomStrike": {
    "displayName": "虚假心灵支配打击",
    "sectionType": "Weapon"
  },
  "SuperSuppress": {
    "displayName": "超级压制",
    "sectionType": "Weapon"
  },
  "SuppressReal": {
    "displayName": "压制实体",
    "sectionType": "Weapon"
  },
  "SuperJammer": {
    "displayName": "超级干扰器",
    "sectionType": "Weapon"
  },
  "JammerReal": {
    "displayName": "干扰器实体",
    "sectionType": "Weapon"
  },
  "SuperCryo": {
    "displayName": "超级冷冻",
    "sectionType": "Weapon"
  },
  "CryoReal": {
    "displayName": "冷冻实体",
    "sectionType": "Weapon"
  },
  "GreenArrow": {
    "displayName": "绿色箭头",
    "sectionType": "Weapon"
  },
  "FakeArrow": {
    "displayName": "假箭头",
    "sectionType": "Weapon"
  },
  "NotAStrategyLarge": {
    "displayName": "非战略大型占位武器",
    "sectionType": "Weapon"
  },
  "ExtendLife": {
    "displayName": "延长生命",
    "sectionType": "Weapon"
  },
  "WesternReporter": {
    "displayName": "西方记者武器",
    "sectionType": "Weapon"
  },
  "StructureBuffLarge": {
    "displayName": "建筑增益大型",
    "sectionType": "Weapon"
  },
  "GreatTempestRock": {
    "displayName": "大型暴风岩石",
    "sectionType": "Weapon"
  },
  "NavalMineBomb": {
    "displayName": "海军地雷炸弹",
    "sectionType": "Weapon"
  },
  "MineBomb": {
    "displayName": "地雷炸弹",
    "sectionType": "Weapon"
  },
  "MineBombEMP": {
    "displayName": "地雷炸弹电磁脉冲",
    "sectionType": "Weapon"
  },
  "CryomineBomb": {
    "displayName": "冷冻地雷炸弹",
    "sectionType": "Weapon"
  },
  "CryomineFreeze": {
    "displayName": "冷冻地雷冻结",
    "sectionType": "Weapon"
  },
  "GenomineBomb": {
    "displayName": "基因地雷炸弹",
    "sectionType": "Weapon"
  },
  "MadMineStart": {
    "displayName": "MAD 地雷启动",
    "sectionType": "Weapon"
  },
  "MadMine": {
    "displayName": "MAD 地雷",
    "sectionType": "Weapon"
  },
  "MadMineFrag": {
    "displayName": "MAD 地雷破片",
    "sectionType": "Weapon"
  },
  "MadBlastStartAI": {
    "displayName": "MAD 爆破 AI 启动",
    "sectionType": "Weapon"
  },
  "MadBlastStart": {
    "displayName": "MAD 爆破启动",
    "sectionType": "Weapon"
  },
  "MadBlast": {
    "displayName": "MAD 爆破",
    "sectionType": "Weapon"
  },
  "MadBlastFrag": {
    "displayName": "MAD 爆破破片",
    "sectionType": "Weapon"
  },
  "EurekaBlast": {
    "displayName": "尤里卡爆破",
    "sectionType": "Weapon"
  },
  "FVEurekaBlast": {
    "displayName": "斯特瑞克步兵战车尤里卡爆破",
    "sectionType": "Weapon"
  },
  "EurekaBlastFrag": {
    "displayName": "尤里卡爆破破片",
    "sectionType": "Weapon"
  },
  "Megaslash": {
    "displayName": "巨型斩击",
    "sectionType": "Weapon"
  },
  "MegaslashE": {
    "displayName": "巨型斩击精英",
    "sectionType": "Weapon"
  },
  "MegaslashWindAnim": {
    "displayName": "巨型斩击风动画",
    "sectionType": "Weapon"
  },
  "MegaslashWindAnimE": {
    "displayName": "巨型斩击风精英动画",
    "sectionType": "Weapon"
  },
  "MegaslashDamage": {
    "displayName": "巨型斩击伤害",
    "sectionType": "Weapon"
  },
  "MegaslashDamageE": {
    "displayName": "巨型斩击伤害精英",
    "sectionType": "Weapon"
  },
  "MegalodonDeath": {
    "displayName": "巨齿鲨死亡",
    "sectionType": "Weapon"
  },
  "LionheartBomb": {
    "displayName": "狮心炸弹",
    "sectionType": "Weapon"
  },
  "LionheartEMP": {
    "displayName": "狮心电磁脉冲",
    "sectionType": "Weapon"
  },
  "StrikerGunRun": {
    "displayName": "打击者扫射",
    "sectionType": "Weapon"
  },
  "EvolverRun": {
    "displayName": "进化者突击",
    "sectionType": "Weapon"
  },
  "StratoRun": {
    "displayName": "同温层突击",
    "sectionType": "Weapon"
  },
  "ShadowPower": {
    "displayName": "暗影电力",
    "sectionType": "Weapon"
  },
  "ShadowPowerE": {
    "displayName": "暗影电力精英",
    "sectionType": "Weapon"
  },
  "StealthScanner": {
    "displayName": "隐形扫描器",
    "sectionType": "Weapon"
  },
  "PiranhaMissile": {
    "displayName": "食人鱼导弹",
    "sectionType": "Weapon"
  },
  "PiranhaMissileE": {
    "displayName": "食人鱼导弹精英",
    "sectionType": "Weapon"
  },
  "Plasma": {
    "displayName": "等离子",
    "sectionType": "Weapon"
  },
  "PlasmaE": {
    "displayName": "等离子精英",
    "sectionType": "Weapon"
  },
  "StunGrid": {
    "displayName": "眩晕网格",
    "sectionType": "Weapon"
  },
  "ConfusionField": {
    "displayName": "混乱力场",
    "sectionType": "Weapon"
  },
  "StalkerGrenade": {
    "displayName": "潜行者榴弹",
    "sectionType": "Weapon"
  },
  "StalkerGrenadeE": {
    "displayName": "潜行者榴弹精英",
    "sectionType": "Weapon"
  },
  "DrainGrenade": {
    "displayName": "吸取榴弹",
    "sectionType": "Weapon"
  },
  "FVStalkerGrenade": {
    "displayName": "斯特瑞克步兵战车潜行者榴弹",
    "sectionType": "Weapon"
  },
  "FVStalkerGrenadeE": {
    "displayName": "斯特瑞克步兵战车潜行者榴弹精英",
    "sectionType": "Weapon"
  },
  "GiantsbaneMissile": {
    "displayName": "巨人克星导弹",
    "sectionType": "Weapon"
  },
  "FVGiantsbaneMissile": {
    "displayName": "斯特瑞克步兵战车巨人克星导弹",
    "sectionType": "Weapon"
  },
  "StalkerWeb": {
    "displayName": "潜行者蛛网",
    "sectionType": "Weapon"
  },
  "ClairWeb": {
    "displayName": "千里眼蛛网",
    "sectionType": "Weapon"
  },
  "ClairIFVWeb": {
    "displayName": "千里眼步兵战车蛛网",
    "sectionType": "Weapon"
  },
  "DClairWeb": {
    "displayName": "衍生千里眼蛛网",
    "sectionType": "Weapon"
  },
  "CruiserCannonA": {
    "displayName": "巡洋舰加农炮A",
    "sectionType": "Weapon"
  },
  "CruiserCannonAE": {
    "displayName": "巡洋舰加农炮AE",
    "sectionType": "Weapon"
  },
  "CruiserCannonB": {
    "displayName": "巡洋舰加农炮B",
    "sectionType": "Weapon"
  },
  "CruiserCannonBE": {
    "displayName": "巡洋舰加农炮BE",
    "sectionType": "Weapon"
  },
  "ElephantStrike": {
    "displayName": "大象打击",
    "sectionType": "Weapon"
  },
  "MODeathWeapon": {
    "displayName": "MO 死亡武器",
    "sectionType": "Weapon"
  },
  "BeetleBite": {
    "displayName": "巨型甲虫撕咬",
    "sectionType": "Weapon"
  },
  "BeetleRam": {
    "displayName": "巨型甲虫冲撞",
    "sectionType": "Weapon"
  },
  "NeutronRifle": {
    "displayName": "中子步枪",
    "sectionType": "Weapon"
  },
  "NeutronRifleE": {
    "displayName": "中子步枪精英",
    "sectionType": "Weapon"
  },
  "NeutronRifle2": {
    "displayName": "中子步枪 2",
    "sectionType": "Weapon"
  },
  "NeutronRifle2E": {
    "displayName": "中子步枪 2精英",
    "sectionType": "Weapon"
  },
  "CRNeutronRifle": {
    "displayName": "驻军中子步枪",
    "sectionType": "Weapon"
  },
  "CRNeutronRifleE": {
    "displayName": "驻军精英中子步枪",
    "sectionType": "Weapon"
  },
  "NeutronBlaster": {
    "displayName": "中子爆能枪",
    "sectionType": "Weapon"
  },
  "NeutronBlasterE": {
    "displayName": "中子精英爆能枪",
    "sectionType": "Weapon"
  },
  "NeutronCannon": {
    "displayName": "中子加农炮",
    "sectionType": "Weapon"
  },
  "NeutronCannonE": {
    "displayName": "中子加农炮精英",
    "sectionType": "Weapon"
  },
  "ChronoImprison": {
    "displayName": "超时空禁锢",
    "sectionType": "Weapon"
  },
  "BlizzardNerf": {
    "displayName": "暴风雪削弱武器",
    "sectionType": "Weapon"
  },
  "BlizzardBeam": {
    "displayName": "暴风雪光束",
    "sectionType": "Weapon"
  },
  "BlizzardBeamE": {
    "displayName": "暴风雪精英光束",
    "sectionType": "Weapon"
  },
  "BlizzardAA": {
    "displayName": "暴风雪对空武器",
    "sectionType": "Weapon"
  },
  "BlizzardAAE": {
    "displayName": "暴风雪精英对空武器",
    "sectionType": "Weapon"
  },
  "FakeHyperion": {
    "displayName": "伪装亥伯龙",
    "sectionType": "Weapon"
  },
  "HyperionBlast": {
    "displayName": "亥伯龙爆破",
    "sectionType": "Weapon"
  },
  "HyperionBlastE": {
    "displayName": "亥伯龙精英爆破",
    "sectionType": "Weapon"
  },
  "HyperionFlash": {
    "displayName": "亥伯龙闪光武器",
    "sectionType": "Weapon"
  },
  "BondBreaker": {
    "displayName": "键结破坏者武器",
    "sectionType": "Weapon"
  },
  "FVBondBreaker": {
    "displayName": "斯特瑞克步兵战车键结破坏者",
    "sectionType": "Weapon"
  },
  "BondEruption": {
    "displayName": "键结喷发武器",
    "sectionType": "Weapon"
  },
  "FVBondEruption": {
    "displayName": "斯特瑞克步兵战车键结喷发",
    "sectionType": "Weapon"
  },
  "FVBondEruption2": {
    "displayName": "斯特瑞克步兵战车键结喷发 2",
    "sectionType": "Weapon"
  },
  "OxidizerTarget": {
    "displayName": "氧化者目标",
    "sectionType": "Weapon"
  },
  "OxidizerFake": {
    "displayName": "氧化者伪装",
    "sectionType": "Weapon"
  },
  "DolphinGun": {
    "displayName": "海豚机枪",
    "sectionType": "Weapon"
  },
  "DolphinGunE": {
    "displayName": "海豚机枪精英",
    "sectionType": "Weapon"
  },
  "DolphinGunFragment": {
    "displayName": "海豚机枪破片",
    "sectionType": "Weapon"
  },
  "EnforcerGun": {
    "displayName": "执法者机枪",
    "sectionType": "Weapon"
  },
  "EnforcerGunE": {
    "displayName": "执法者精英机枪",
    "sectionType": "Weapon"
  },
  "EnforcerGun2": {
    "displayName": "执法者机枪 2",
    "sectionType": "Weapon"
  },
  "EnforcerGun2E": {
    "displayName": "执法者精英机枪 2",
    "sectionType": "Weapon"
  },
  "CREnforcerGun": {
    "displayName": "驻军执法者机枪",
    "sectionType": "Weapon"
  },
  "CREnforcerGunE": {
    "displayName": "驻军执法者精英机枪",
    "sectionType": "Weapon"
  },
  "EnforcerGunFragment": {
    "displayName": "执法者机枪破片",
    "sectionType": "Weapon"
  },
  "BoidBlitzUp": {
    "displayName": "机械造物闪击上升",
    "sectionType": "Weapon"
  },
  "BoidBlitzSuper": {
    "displayName": "机械造物超级闪击",
    "sectionType": "Weapon"
  },
  "Longbow": {
    "displayName": "长弓",
    "sectionType": "Weapon"
  },
  "LongbowE": {
    "displayName": "长弓精英",
    "sectionType": "Weapon"
  },
  "LongbowAA": {
    "displayName": "长弓对空",
    "sectionType": "Weapon"
  },
  "LongbowAAE": {
    "displayName": "长弓精英对空武器",
    "sectionType": "Weapon"
  },
  "FVLongbow": {
    "displayName": "斯特瑞克步兵战车长弓",
    "sectionType": "Weapon"
  },
  "UCLongbow": {
    "displayName": "驻军长弓",
    "sectionType": "Weapon"
  },
  "UCLongbowE": {
    "displayName": "驻军长弓精英",
    "sectionType": "Weapon"
  },
  "DefaultDeathWeapon": {
    "displayName": "默认死亡武器",
    "sectionType": "Weapon"
  },
  "AircraftDeathWeapon": {
    "displayName": "飞机死亡武器",
    "sectionType": "Weapon"
  },
  "InfantryDeathWeapon": {
    "displayName": "步兵死亡武器",
    "sectionType": "Weapon"
  },
  "UnitDeathWeapon": {
    "displayName": "单位死亡武器",
    "sectionType": "Weapon"
  },
  "OilExplosion": {
    "displayName": "油井爆炸",
    "sectionType": "Weapon"
  },
  "BarrelExplosion": {
    "displayName": "油桶爆炸",
    "sectionType": "Weapon"
  },
  "RocksExplosion": {
    "displayName": "岩石爆炸",
    "sectionType": "Weapon"
  },
  "StealthExplosion": {
    "displayName": "隐形爆炸",
    "sectionType": "Weapon"
  },
  "KillEngineers": {
    "displayName": "击杀工程师",
    "sectionType": "Weapon"
  },
  "SpiderBomb": {
    "displayName": "蜘蛛炸弹",
    "sectionType": "Weapon"
  },
  "FVSpiderBomb": {
    "displayName": "斯特瑞克步兵战车蜘蛛炸弹",
    "sectionType": "Weapon"
  },
  "DuplicantAttack": {
    "displayName": "复制人攻击",
    "sectionType": "Weapon"
  },
  "FVDuplicantAttack": {
    "displayName": "斯特瑞克步兵战车复制人攻击",
    "sectionType": "Weapon"
  },
  "BlimpBomb": {
    "displayName": "飞艇炸弹",
    "sectionType": "Weapon"
  },
  "BlimpBombE": {
    "displayName": "飞艇精英炸弹",
    "sectionType": "Weapon"
  },
  "BlimpBombEffect": {
    "displayName": "飞艇炸弹效果",
    "sectionType": "Weapon"
  },
  "BlimpBombNuke": {
    "displayName": "飞艇战术核弹",
    "sectionType": "Weapon"
  },
  "StardustBombEffect": {
    "displayName": "悖论引擎炸弹效果",
    "sectionType": "Weapon"
  },
  "IrkallaDeath": {
    "displayName": "伊尔卡拉死亡武器",
    "sectionType": "Weapon"
  },
  "WastelotAttack": {
    "displayName": "废土机攻击",
    "sectionType": "Weapon"
  },
  "WastelotDeath": {
    "displayName": "废土机死亡武器",
    "sectionType": "Weapon"
  },
  "Dustbombs": {
    "displayName": "尘爆弹",
    "sectionType": "Weapon"
  },
  "Smokebombs": {
    "displayName": "烟雾弹空袭",
    "sectionType": "Weapon"
  },
  "Vulcan": {
    "displayName": "火神炮",
    "sectionType": "Weapon"
  },
  "VulcanE": {
    "displayName": "精英火神炮",
    "sectionType": "Weapon"
  },
  "Vulcan2": {
    "displayName": "火神炮 2",
    "sectionType": "Weapon"
  },
  "Vulcan2E": {
    "displayName": "精英火神炮 2",
    "sectionType": "Weapon"
  },
  "CamoVulcan2": {
    "displayName": "伪装火神炮 2",
    "sectionType": "Weapon"
  },
  "CamoVulcan2E": {
    "displayName": "伪装精英火神炮 2",
    "sectionType": "Weapon"
  },
  "SharkTorpedo": {
    "displayName": "鲨鱼鱼雷",
    "sectionType": "Weapon"
  },
  "SharkWave": {
    "displayName": "鲨鱼波",
    "sectionType": "Weapon"
  },
  "SharkWave2": {
    "displayName": "鲨鱼波 2",
    "sectionType": "Weapon"
  },
  "SharkWave3": {
    "displayName": "鲨鱼波 3",
    "sectionType": "Weapon"
  },
  "SharkWave4": {
    "displayName": "鲨鱼波 4",
    "sectionType": "Weapon"
  },
  "SharkWave5": {
    "displayName": "鲨鱼波 5",
    "sectionType": "Weapon"
  },
  "NautilusTorpedo": {
    "displayName": "鹦鹉螺鱼雷",
    "sectionType": "Weapon"
  },
  "NautilusTorpedoE": {
    "displayName": "鹦鹉螺鱼雷精英",
    "sectionType": "Weapon"
  },
  "MagnetShift2": {
    "displayName": "磁力转移 2",
    "sectionType": "Weapon"
  },
  "SubTorpedo": {
    "displayName": "台风攻击潜艇鱼雷",
    "sectionType": "Weapon"
  },
  "SubTorpedoE": {
    "displayName": "台风攻击潜艇鱼雷精英",
    "sectionType": "Weapon"
  },
  "SuperSubTorpedo": {
    "displayName": "超级台风攻击潜艇鱼雷",
    "sectionType": "Weapon"
  },
  "SuperSubTorpedoE": {
    "displayName": "超级台风攻击潜艇鱼雷精英",
    "sectionType": "Weapon"
  },
  "SAMBunkerWeapon": {
    "displayName": "防空碉堡武器",
    "sectionType": "Weapon"
  },
  "SAMBunkerWeaponE": {
    "displayName": "防空碉堡精英武器",
    "sectionType": "Weapon"
  },
  "SAMBunkerFake": {
    "displayName": "防空碉堡伪装",
    "sectionType": "Weapon"
  },
  "FakeEye": {
    "displayName": "伪装之眼",
    "sectionType": "Weapon"
  },
  "RedEye2": {
    "displayName": "红眼 2",
    "sectionType": "Weapon"
  },
  "RedEye2E": {
    "displayName": "精英红眼 2",
    "sectionType": "Weapon"
  },
  "TechRedEye2": {
    "displayName": "科技红眼 2",
    "sectionType": "Weapon"
  },
  "TechRedEye2E": {
    "displayName": "科技精英红眼 2",
    "sectionType": "Weapon"
  },
  "HoverMissile": {
    "displayName": "悬浮导弹",
    "sectionType": "Weapon"
  },
  "HoverMissileE": {
    "displayName": "悬浮精英导弹",
    "sectionType": "Weapon"
  },
  "AmphMissile": {
    "displayName": "两栖导弹",
    "sectionType": "Weapon"
  },
  "AmphMissileE": {
    "displayName": "两栖精英导弹",
    "sectionType": "Weapon"
  },
  "KingsGun": {
    "displayName": "天神机枪",
    "sectionType": "Weapon"
  },
  "FVKingsGun": {
    "displayName": "斯特瑞克步兵战车天神机枪",
    "sectionType": "Weapon"
  },
  "GharialCannon": {
    "displayName": "长吻鳄加农炮",
    "sectionType": "Weapon"
  },
  "GharialPiles": {
    "displayName": "长吻鳄桩刺",
    "sectionType": "Weapon"
  },
  "GharialBetaCannon": {
    "displayName": "长吻鳄 Beta 加农炮",
    "sectionType": "Weapon"
  },
  "UraganPunches": {
    "displayName": "乌拉甘连拳",
    "sectionType": "Weapon"
  },
  "UraganFragment": {
    "displayName": "乌拉甘破片",
    "sectionType": "Weapon"
  },
  "UraganDeath": {
    "displayName": "乌拉甘死亡",
    "sectionType": "Weapon"
  },
  "LeviathanDroneBomb": {
    "displayName": "利维坦无人机炸弹",
    "sectionType": "Weapon"
  },
  "MissileLauncher": {
    "displayName": "导弹发射器",
    "sectionType": "Weapon"
  },
  "MissileLauncherE": {
    "displayName": "精英导弹发射器",
    "sectionType": "Weapon"
  },
  "UCMissileLauncher": {
    "displayName": "驻军导弹发射器",
    "sectionType": "Weapon"
  },
  "UCMissileLauncherE": {
    "displayName": "驻军精英导弹发射器",
    "sectionType": "Weapon"
  },
  "MissileLauncherDep": {
    "displayName": "部署态导弹发射器",
    "sectionType": "Weapon"
  },
  "MissileLauncherDepE": {
    "displayName": "部署态精英导弹发射器",
    "sectionType": "Weapon"
  },
  "CRMissileLauncher": {
    "displayName": "驻军导弹发射器",
    "sectionType": "Weapon"
  },
  "CRMissileLauncherE": {
    "displayName": "驻军精英导弹发射器",
    "sectionType": "Weapon"
  },
  "ParadoxPrism": {
    "displayName": "悖论光棱",
    "sectionType": "Weapon"
  },
  "ParadoxMedusa": {
    "displayName": "悖论美杜莎",
    "sectionType": "Weapon"
  },
  "Phalanx": {
    "displayName": "方阵武器",
    "sectionType": "Weapon"
  },
  "PhalanxE": {
    "displayName": "精英方阵武器",
    "sectionType": "Weapon"
  },
  "Medusa": {
    "displayName": "美杜莎武器",
    "sectionType": "Weapon"
  },
  "MedusaE": {
    "displayName": "精英美杜莎武器",
    "sectionType": "Weapon"
  },
  "ArmorMissileStrike": {
    "displayName": "装甲导弹打击",
    "sectionType": "Weapon"
  },
  "ArmorMissileStrikeE": {
    "displayName": "精英装甲导弹打击",
    "sectionType": "Weapon"
  },
  "IceBeam": {
    "displayName": "冰光束",
    "sectionType": "Weapon"
  },
  "IceBeamE": {
    "displayName": "冰光束精英",
    "sectionType": "Weapon"
  },
  "IceBeamNerf": {
    "displayName": "冰冻光束削弱武器",
    "sectionType": "Weapon"
  },
  "HMGWeapon": {
    "displayName": "重机枪武器",
    "sectionType": "Weapon"
  },
  "HMGWeaponE": {
    "displayName": "精英重机枪武器",
    "sectionType": "Weapon"
  },
  "PhantasmMissiles": {
    "displayName": "幻象导弹",
    "sectionType": "Weapon"
  },
  "GodsbaneMissile": {
    "displayName": "弑神者导弹",
    "sectionType": "Weapon"
  },
  "FVGodsbaneMissile": {
    "displayName": "斯特瑞克步兵战车弑神者导弹",
    "sectionType": "Weapon"
  },
  "GodsbaneFrag": {
    "displayName": "弑神者破片",
    "sectionType": "Weapon"
  },
  "FuryMissile": {
    "displayName": "狂怒导弹",
    "sectionType": "Weapon"
  },
  "DiverbeeAttack": {
    "displayName": "潜蜂攻击",
    "sectionType": "Weapon"
  },
  "SweeperMissile": {
    "displayName": "清道夫导弹",
    "sectionType": "Weapon"
  },
  "AGGattling": {
    "displayName": "对地盖特机炮",
    "sectionType": "Weapon"
  },
  "AGGattling2": {
    "displayName": "对地盖特ling 2",
    "sectionType": "Weapon"
  },
  "AGGattling3": {
    "displayName": "对地盖特ling 3",
    "sectionType": "Weapon"
  },
  "AGGattlingE": {
    "displayName": "对地盖特ling精英",
    "sectionType": "Weapon"
  },
  "AGGattling2E": {
    "displayName": "对地盖特ling 2精英",
    "sectionType": "Weapon"
  },
  "AGGattling3E": {
    "displayName": "对地盖特ling 3精英",
    "sectionType": "Weapon"
  },
  "AAGattling": {
    "displayName": "对空盖特机炮",
    "sectionType": "Weapon"
  },
  "AAGattling2": {
    "displayName": "对空盖特ling 2",
    "sectionType": "Weapon"
  },
  "AAGattling3": {
    "displayName": "对空盖特ling 3",
    "sectionType": "Weapon"
  },
  "AAGattlingE": {
    "displayName": "对空盖特ling精英",
    "sectionType": "Weapon"
  },
  "AAGattling2E": {
    "displayName": "对空盖特ling 2精英",
    "sectionType": "Weapon"
  },
  "AAGattling3E": {
    "displayName": "对空盖特ling 3精英",
    "sectionType": "Weapon"
  },
  "AAGattCann": {
    "displayName": "对空盖特机炮",
    "sectionType": "Weapon"
  },
  "AAGattCann2": {
    "displayName": "对空盖特机炮 2",
    "sectionType": "Weapon"
  },
  "AAGattCann3": {
    "displayName": "对空盖特机炮 3",
    "sectionType": "Weapon"
  },
  "AAGattCannE": {
    "displayName": "对空盖特机炮精英",
    "sectionType": "Weapon"
  },
  "AAGattCann2E": {
    "displayName": "对空盖特机炮 2精英",
    "sectionType": "Weapon"
  },
  "AAGattCann3E": {
    "displayName": "对空盖特机炮 3精英",
    "sectionType": "Weapon"
  },
  "Sapper": {
    "displayName": "爆破工兵逻辑",
    "sectionType": "Unknown"
  },
  "M1Carbine": {
    "displayName": "M1 卡宾枪",
    "sectionType": "Weapon"
  },
  "M1CarbineE": {
    "displayName": "精英 M1 卡宾枪",
    "sectionType": "Weapon"
  },
  "UCM1Carbine": {
    "displayName": "驻军 M1 卡宾枪",
    "sectionType": "Weapon"
  },
  "UCM1CarbineE": {
    "displayName": "驻军精英 M1 卡宾枪",
    "sectionType": "Weapon"
  },
  "PsychicJab": {
    "displayName": "心灵刺击",
    "sectionType": "Weapon"
  },
  "PsychicJabE": {
    "displayName": "精英心灵刺击",
    "sectionType": "Weapon"
  },
  "CRPsychicJab": {
    "displayName": "驻军心灵刺击",
    "sectionType": "Weapon"
  },
  "CRPsychicJabE": {
    "displayName": "驻军精英心灵刺击",
    "sectionType": "Weapon"
  },
  "UCPsychicJab": {
    "displayName": "驻军心灵刺击",
    "sectionType": "Weapon"
  },
  "UCPsychicJabE": {
    "displayName": "驻军精英心灵刺击",
    "sectionType": "Weapon"
  },
  "M60": {
    "displayName": "M60 机枪",
    "sectionType": "Weapon"
  },
  "M60E": {
    "displayName": "精英 M60 机枪",
    "sectionType": "Weapon"
  },
  "CRM60": {
    "displayName": "驻军 M60 机枪",
    "sectionType": "Weapon"
  },
  "CRM60E": {
    "displayName": "驻军精英 M60 机枪",
    "sectionType": "Weapon"
  },
  "CRM60T": {
    "displayName": "驻军M 60T武器",
    "sectionType": "Weapon"
  },
  "CRM60TE": {
    "displayName": "驻军M60TE武器",
    "sectionType": "Weapon"
  },
  "Para": {
    "displayName": "美国",
    "sectionType": "Weapon"
  },
  "ParaE": {
    "displayName": "美国精英",
    "sectionType": "Weapon"
  },
  "UCPara": {
    "displayName": "驻军美国",
    "sectionType": "Weapon"
  },
  "UCParaE": {
    "displayName": "驻军美国精英",
    "sectionType": "Weapon"
  },
  "KnightGun": {
    "displayName": "骑士机枪",
    "sectionType": "Weapon"
  },
  "KnightGunE": {
    "displayName": "骑士机枪精英",
    "sectionType": "Weapon"
  },
  "FVKnightGun": {
    "displayName": "斯特瑞克步兵战车骑士机枪",
    "sectionType": "Weapon"
  },
  "FVKnightGunE": {
    "displayName": "斯特瑞克步兵战车骑士机枪精英",
    "sectionType": "Weapon"
  },
  "UCKnightGun": {
    "displayName": "驻军骑士机枪",
    "sectionType": "Weapon"
  },
  "UCKnightGunE": {
    "displayName": "驻军骑士机枪精英",
    "sectionType": "Weapon"
  },
  "KnightGunAA": {
    "displayName": "骑士机枪对空",
    "sectionType": "Weapon"
  },
  "KnightGunAAE": {
    "displayName": "骑士精英对空机枪",
    "sectionType": "Weapon"
  },
  "DKnightGun": {
    "displayName": "衍生骑士机枪",
    "sectionType": "Weapon"
  },
  "DKnightGunAA": {
    "displayName": "衍生骑士对空机枪",
    "sectionType": "Weapon"
  },
  "20mmRapid": {
    "displayName": "20mm 速射炮",
    "sectionType": "Weapon"
  },
  "20mmRapidE": {
    "displayName": "精英 20mm 速射炮",
    "sectionType": "Weapon"
  },
  "FortressGun": {
    "displayName": "堡垒机枪",
    "sectionType": "Weapon"
  },
  "FortressGunE": {
    "displayName": "堡垒机枪精英",
    "sectionType": "Weapon"
  },
  "FortressMissile": {
    "displayName": "堡垒导弹",
    "sectionType": "Weapon"
  },
  "FortressMissileE": {
    "displayName": "堡垒导弹精英",
    "sectionType": "Weapon"
  },
  "GyroGun": {
    "displayName": "旋翼飞行兵机枪",
    "sectionType": "Weapon"
  },
  "GyroGunE": {
    "displayName": "旋翼飞行兵机枪精英",
    "sectionType": "Weapon"
  },
  "GyroAAGun": {
    "displayName": "旋翼飞行兵对空机枪",
    "sectionType": "Weapon"
  },
  "20mm": {
    "displayName": "20mm 机炮",
    "sectionType": "Weapon"
  },
  "20mmE": {
    "displayName": "精英 20mm 机炮",
    "sectionType": "Weapon"
  },
  "ThorHeavyGun": {
    "displayName": "雷神重机枪",
    "sectionType": "Weapon"
  },
  "ThorHeavyGunE": {
    "displayName": "雷神精英重机枪",
    "sectionType": "Weapon"
  },
  "HoldTheLine": {
    "displayName": "坚守阵线武器",
    "sectionType": "Weapon"
  },
  "CraneWeapon": {
    "displayName": "起重机武器",
    "sectionType": "Weapon"
  },
  "IronGuardWeapon": {
    "displayName": "铁卫武器",
    "sectionType": "Weapon"
  },
  "Nanofiber1Weapon": {
    "displayName": "纳米纤维同步 1武器",
    "sectionType": "Weapon"
  },
  "Nanofiber2Weapon": {
    "displayName": "纳米纤维同步 2武器",
    "sectionType": "Weapon"
  },
  "Nanofiber3Weapon": {
    "displayName": "纳米纤维同步 3武器",
    "sectionType": "Weapon"
  },
  "Nanofiber4Weapon": {
    "displayName": "纳米纤维同步 4武器",
    "sectionType": "Weapon"
  },
  "Nanofiber5Weapon": {
    "displayName": "纳米纤维同步 5武器",
    "sectionType": "Weapon"
  },
  "Nanofiber6Weapon": {
    "displayName": "纳米纤维同步 6武器",
    "sectionType": "Weapon"
  },
  "Nanofiber7Weapon": {
    "displayName": "纳米纤维同步 7武器",
    "sectionType": "Weapon"
  },
  "ShutDownFake": {
    "displayName": "停机伪装",
    "sectionType": "Weapon"
  },
  "ShutDownFactories": {
    "displayName": "停机工厂武器",
    "sectionType": "Weapon"
  },
  "JudgementWeapon": {
    "displayName": "审判武器",
    "sectionType": "Weapon"
  },
  "TemporalShield": {
    "displayName": "时间护盾",
    "sectionType": "Weapon"
  },
  "TimeFreezeWeapon": {
    "displayName": "时间冻结武器",
    "sectionType": "Weapon"
  },
  "Nanocharge": {
    "displayName": "纳米充能",
    "sectionType": "Weapon"
  },
  "AlanqaAA": {
    "displayName": "安卡对空武器",
    "sectionType": "Weapon"
  },
  "HurricaneSpawn": {
    "displayName": "飓风生成",
    "sectionType": "Weapon"
  },
  "BuzzardGun": {
    "displayName": "秃鹰机枪",
    "sectionType": "Weapon"
  },
  "BuzzardMines": {
    "displayName": "秃鹰地雷",
    "sectionType": "Weapon"
  },
  "BuzzardMinesStun": {
    "displayName": "秃鹰眩晕地雷",
    "sectionType": "Weapon"
  },
  "CondorBlast": {
    "displayName": "神鹰爆破",
    "sectionType": "Weapon"
  },
  "CondorGun": {
    "displayName": "神鹰机枪",
    "sectionType": "Weapon"
  },
  "SeekerLauncher": {
    "displayName": "追踪者发射器",
    "sectionType": "Weapon"
  },
  "SeekerBomb": {
    "displayName": "追踪者炸弹",
    "sectionType": "Weapon"
  },
  "DSeekerBomb": {
    "displayName": "衍生追踪者炸弹",
    "sectionType": "Weapon"
  },
  "NestFake": {
    "displayName": "Nest伪装",
    "sectionType": "Weapon"
  },
  "NestLauncher": {
    "displayName": "Nest发射器武器",
    "sectionType": "Weapon"
  },
  "SentinelFake": {
    "displayName": "Sentinel伪装",
    "sectionType": "Weapon"
  },
  "SentinelAA": {
    "displayName": "Sentinel对空",
    "sectionType": "Weapon"
  },
  "SentinelAAE": {
    "displayName": "Sentinel精英对空武器",
    "sectionType": "Weapon"
  },
  "MP5": {
    "displayName": "MP 5武器",
    "sectionType": "Weapon"
  },
  "MP5E": {
    "displayName": "MP 5精英",
    "sectionType": "Weapon"
  },
  "CRMP5": {
    "displayName": "驻军MP 5武器",
    "sectionType": "Weapon"
  },
  "CRMP5E": {
    "displayName": "驻军MP 5精英",
    "sectionType": "Weapon"
  },
  "SealC4": {
    "displayName": "海豹突击队C4",
    "sectionType": "Weapon"
  },
  "TanyaLaser": {
    "displayName": "谭雅激光",
    "sectionType": "Weapon"
  },
  "TanyaLaserE": {
    "displayName": "谭雅激光精英",
    "sectionType": "Weapon"
  },
  "FVTanyaLaser": {
    "displayName": "斯特瑞克步兵战车谭雅激光",
    "sectionType": "Weapon"
  },
  "FVTanyaLaserE": {
    "displayName": "斯特瑞克步兵战车谭雅激光精英",
    "sectionType": "Weapon"
  },
  "TanyaC4": {
    "displayName": "谭雅C4",
    "sectionType": "Weapon"
  },
  "StunGun": {
    "displayName": "眩晕机枪",
    "sectionType": "Weapon"
  },
  "MobileGrinder": {
    "displayName": "Mobile粉碎回收厂",
    "sectionType": "Weapon"
  },
  "SuperSniper": {
    "displayName": "超级狙击枪",
    "sectionType": "Weapon"
  },
  "SuperSniperE": {
    "displayName": "超级狙击枪精英",
    "sectionType": "Weapon"
  },
  "SuperSniperKill": {
    "displayName": "超级狙击枪击杀",
    "sectionType": "Weapon"
  },
  "FVSuperSniper": {
    "displayName": "斯特瑞克步兵战车超级狙击枪",
    "sectionType": "Weapon"
  },
  "Flare": {
    "displayName": "信号弹",
    "sectionType": "Weapon"
  },
  "SuperSniperAI": {
    "displayName": "超级狙击枪AI",
    "sectionType": "Weapon"
  },
  "SuperSniperAIE": {
    "displayName": "超级狙击枪AIE",
    "sectionType": "Weapon"
  },
  "FlareAI": {
    "displayName": "信号弹AI",
    "sectionType": "Weapon"
  },
  "ReznovSniper": {
    "displayName": "雷泽诺夫狙击枪",
    "sectionType": "Weapon"
  },
  "ReznovSniperE": {
    "displayName": "雷泽诺夫狙击枪精英",
    "sectionType": "Weapon"
  },
  "AKM": {
    "displayName": "AKM武器",
    "sectionType": "Weapon"
  },
  "AKME": {
    "displayName": "AKME武器",
    "sectionType": "Weapon"
  },
  "AWP": {
    "displayName": "AWP武器",
    "sectionType": "Weapon"
  },
  "AWPE": {
    "displayName": "AWPE武器",
    "sectionType": "Weapon"
  },
  "AWP2": {
    "displayName": "AWP 2武器",
    "sectionType": "Weapon"
  },
  "AWP2E": {
    "displayName": "AWP 2精英",
    "sectionType": "Weapon"
  },
  "CRAWP": {
    "displayName": "驻军AWP武器",
    "sectionType": "Weapon"
  },
  "CRAWPE": {
    "displayName": "驻军AWPE武器",
    "sectionType": "Weapon"
  },
  "Virusgun": {
    "displayName": "Virusgun武器",
    "sectionType": "Weapon"
  },
  "VirusgunE": {
    "displayName": "Virusgun精英",
    "sectionType": "Weapon"
  },
  "FVVirusgun": {
    "displayName": "斯特瑞克步兵战车Virusgun",
    "sectionType": "Weapon"
  },
  "AlizeGun": {
    "displayName": "Alize机枪",
    "sectionType": "Weapon"
  },
  "FVAlizeGun": {
    "displayName": "斯特瑞克步兵战车Alize机枪",
    "sectionType": "Weapon"
  },
  "FinAutoSniperGun": {
    "displayName": "菲因自动狙击枪机枪",
    "sectionType": "Weapon"
  },
  "FVFinAutoSniperGun": {
    "displayName": "斯特瑞克步兵战车菲因自动狙击枪机枪",
    "sectionType": "Weapon"
  },
  "RaccoonEMP": {
    "displayName": "Raccoon电磁脉冲",
    "sectionType": "Weapon"
  },
  "RaccoonDefense": {
    "displayName": "Raccoon防御",
    "sectionType": "Weapon"
  },
  "RaccoonBeam": {
    "displayName": "Raccoon光束",
    "sectionType": "Weapon"
  },
  "OrcinusWave": {
    "displayName": "逆戟鲸波",
    "sectionType": "Weapon"
  },
  "OrcinusWaveReal": {
    "displayName": "逆戟鲸波实体",
    "sectionType": "Weapon"
  },
  "VultureCannon": {
    "displayName": "秃鹫加农炮",
    "sectionType": "Weapon"
  },
  "VultureCannonE": {
    "displayName": "秃鹫加农炮精英",
    "sectionType": "Weapon"
  },
  "VultureBombs": {
    "displayName": "秃鹫炸弹",
    "sectionType": "Weapon"
  },
  "VultureBombsE": {
    "displayName": "秃鹫炸弹精英",
    "sectionType": "Weapon"
  },
  "VultureBombsAI": {
    "displayName": "秃鹫炸弹AI",
    "sectionType": "Weapon"
  },
  "VultureBombsAIE": {
    "displayName": "秃鹫炸弹AIE",
    "sectionType": "Weapon"
  },
  "VultureAnimFire": {
    "displayName": "秃鹫动画火焰",
    "sectionType": "Weapon"
  },
  "StealthMissile": {
    "displayName": "隐形导弹",
    "sectionType": "Weapon"
  },
  "StealthMissileE": {
    "displayName": "隐形导弹精英",
    "sectionType": "Weapon"
  },
  "TimeWarp1": {
    "displayName": "时间传送 1",
    "sectionType": "Weapon"
  },
  "TimeWarp2": {
    "displayName": "时间传送 2",
    "sectionType": "Weapon"
  },
  "HarbingerCannon": {
    "displayName": "先驱者加农炮",
    "sectionType": "Weapon"
  },
  "HarbingerCannonFrag": {
    "displayName": "先驱者加农炮破片",
    "sectionType": "Weapon"
  },
  "WidowSignal": {
    "displayName": "寡妇信号",
    "sectionType": "Weapon"
  },
  "WidowAlphaSignal": {
    "displayName": "寡妇透明信号",
    "sectionType": "Weapon"
  },
  "WidowSignal2": {
    "displayName": "寡妇信号 2",
    "sectionType": "Weapon"
  },
  "WidowSignal3": {
    "displayName": "寡妇信号 3",
    "sectionType": "Weapon"
  },
  "Maverick": {
    "displayName": "Maverick武器",
    "sectionType": "Weapon"
  },
  "MaverickE": {
    "displayName": "Maverick精英",
    "sectionType": "Weapon"
  },
  "MaverickB": {
    "displayName": "MaverickB武器",
    "sectionType": "Weapon"
  },
  "MaverickBE": {
    "displayName": "MaverickBE武器",
    "sectionType": "Weapon"
  },
  "MaverickNerf": {
    "displayName": "Maverick削弱武器",
    "sectionType": "Weapon"
  },
  "FoxMissile": {
    "displayName": "狐步舞者战机导弹",
    "sectionType": "Weapon"
  },
  "FoxMissileE": {
    "displayName": "狐步舞者战机导弹精英",
    "sectionType": "Weapon"
  },
  "FoxMissileSplit": {
    "displayName": "狐步舞者战机导弹分裂",
    "sectionType": "Weapon"
  },
  "FoxMissileSplitE": {
    "displayName": "狐步舞者战机导弹分裂精英",
    "sectionType": "Weapon"
  },
  "StormMissile": {
    "displayName": "风暴导弹",
    "sectionType": "Weapon"
  },
  "StormMissileE": {
    "displayName": "风暴导弹精英",
    "sectionType": "Weapon"
  },
  "StormGun": {
    "displayName": "风暴机枪",
    "sectionType": "Weapon"
  },
  "StormGunE": {
    "displayName": "风暴机枪精英",
    "sectionType": "Weapon"
  },
  "SnakeMissile": {
    "displayName": "王蛇战机导弹",
    "sectionType": "Weapon"
  },
  "SnakeMissileE": {
    "displayName": "王蛇战机导弹精英",
    "sectionType": "Weapon"
  },
  "SnakeGun": {
    "displayName": "王蛇战机机枪",
    "sectionType": "Weapon"
  },
  "SnakeGunE": {
    "displayName": "王蛇战机机枪精英",
    "sectionType": "Weapon"
  },
  "Maverick2": {
    "displayName": "Maverick 2武器",
    "sectionType": "Weapon"
  },
  "Maverick2E": {
    "displayName": "Maverick 2精英",
    "sectionType": "Weapon"
  },
  "Maverick3": {
    "displayName": "Maverick 3武器",
    "sectionType": "Weapon"
  },
  "Maverick3E": {
    "displayName": "Maverick 3精英",
    "sectionType": "Weapon"
  },
  "ParaDropWeapon": {
    "displayName": "美国投放武器",
    "sectionType": "Weapon"
  },
  "SpyCameraWeapon": {
    "displayName": "间谍Camera武器",
    "sectionType": "Weapon"
  },
  "ReconBomb": {
    "displayName": "扫描无人机炸弹",
    "sectionType": "Weapon"
  },
  "HornetBomb": {
    "displayName": "黄蜂无人机炸弹",
    "sectionType": "Weapon"
  },
  "HornetBombE": {
    "displayName": "黄蜂无人机炸弹精英",
    "sectionType": "Weapon"
  },
  "HornetCollision": {
    "displayName": "黄蜂无人机Collision",
    "sectionType": "Weapon"
  },
  "ASWBomb": {
    "displayName": "鱼鹰无人机炸弹",
    "sectionType": "Weapon"
  },
  "ASWBombE": {
    "displayName": "鱼鹰无人机炸弹精英",
    "sectionType": "Weapon"
  },
  "ASWCollision": {
    "displayName": "鱼鹰无人机Collision",
    "sectionType": "Weapon"
  },
  "HumveeGun": {
    "displayName": "Humvee机枪",
    "sectionType": "Weapon"
  },
  "HumveeGunE": {
    "displayName": "Humvee机枪精英",
    "sectionType": "Weapon"
  },
  "RangerGun": {
    "displayName": "巡逻车机枪",
    "sectionType": "Weapon"
  },
  "RangerGunE": {
    "displayName": "巡逻车机枪精英",
    "sectionType": "Weapon"
  },
  "SpotLight": {
    "displayName": "Spot光源",
    "sectionType": "Weapon"
  },
  "SensorSpotLight": {
    "displayName": "SensorSpot光源",
    "sectionType": "Weapon"
  },
  "105mm": {
    "displayName": "105mm武器",
    "sectionType": "Weapon"
  },
  "105mmE": {
    "displayName": "105mm精英",
    "sectionType": "Weapon"
  },
  "BulldogPainter": {
    "displayName": "BulldogPainter武器",
    "sectionType": "Weapon"
  },
  "105mmR": {
    "displayName": "105mm R武器",
    "sectionType": "Weapon"
  },
  "105mmRE": {
    "displayName": "105mmRE武器",
    "sectionType": "Weapon"
  },
  "105mmR2": {
    "displayName": "105mm R2武器",
    "sectionType": "Weapon"
  },
  "105mmR2E": {
    "displayName": "105mm R2精英",
    "sectionType": "Weapon"
  },
  "CavalierTarget": {
    "displayName": "Cavalier目标",
    "sectionType": "Weapon"
  },
  "TankKiller": {
    "displayName": "TankKiller武器",
    "sectionType": "Weapon"
  },
  "TankKillerE": {
    "displayName": "TankKiller精英",
    "sectionType": "Weapon"
  },
  "HydraCannon": {
    "displayName": "九头蛇加农炮",
    "sectionType": "Weapon"
  },
  "HydraCannonE": {
    "displayName": "九头蛇加农炮精英",
    "sectionType": "Weapon"
  },
  "HydraStrike": {
    "displayName": "九头蛇打击",
    "sectionType": "Weapon"
  },
  "ScourgeGuns": {
    "displayName": "Scourge机枪s武器",
    "sectionType": "Weapon"
  },
  "ScourgeGunsE": {
    "displayName": "Scourge机枪s精英",
    "sectionType": "Weapon"
  },
  "FVDoubleCannon": {
    "displayName": "斯特瑞克步兵战车Double加农炮",
    "sectionType": "Weapon"
  },
  "FVDoubleCannonE": {
    "displayName": "斯特瑞克步兵战车Double加农炮精英",
    "sectionType": "Weapon"
  },
  "ScourgeTrans": {
    "displayName": "ScourgeTrans武器",
    "sectionType": "Weapon"
  },
  "ScourgeTransE": {
    "displayName": "ScourgeTrans精英",
    "sectionType": "Weapon"
  },
  "ScourgeEMP": {
    "displayName": "Scourge电磁脉冲",
    "sectionType": "Weapon"
  },
  "JagdPanther": {
    "displayName": "Jagd圣骑士猎杀坦克",
    "sectionType": "Weapon"
  },
  "JagdPantherE": {
    "displayName": "Jagd圣骑士猎杀坦克精英",
    "sectionType": "Weapon"
  },
  "JagdMissile": {
    "displayName": "Jagd导弹",
    "sectionType": "Weapon"
  },
  "JagdMissileE": {
    "displayName": "Jagd导弹精英",
    "sectionType": "Weapon"
  },
  "RhadGun": {
    "displayName": "拉什迪机枪",
    "sectionType": "Weapon"
  },
  "TurretGun": {
    "displayName": "Turret机枪",
    "sectionType": "Weapon"
  },
  "TurretGunE": {
    "displayName": "Turret机枪精英",
    "sectionType": "Weapon"
  },
  "TechTurretGun": {
    "displayName": "TechTurret机枪",
    "sectionType": "Weapon"
  },
  "TechTurretGunE": {
    "displayName": "TechTurret机枪精英",
    "sectionType": "Weapon"
  },
  "Hover105mm": {
    "displayName": "悬浮105mm武器",
    "sectionType": "Weapon"
  },
  "Hover105mmE": {
    "displayName": "悬浮105mm精英",
    "sectionType": "Weapon"
  },
  "ShinBeams": {
    "displayName": "Shin光束s武器",
    "sectionType": "Weapon"
  },
  "ShinBeamsE": {
    "displayName": "Shin光束s精英",
    "sectionType": "Weapon"
  },
  "ShinMissiles": {
    "displayName": "Shin导弹武器",
    "sectionType": "Weapon"
  },
  "ShinMissilesE": {
    "displayName": "Shin导弹精英",
    "sectionType": "Weapon"
  },
  "ShinCannons": {
    "displayName": "Shin加农炮s武器",
    "sectionType": "Weapon"
  },
  "ShinCannonsE": {
    "displayName": "Shin加农炮s精英",
    "sectionType": "Weapon"
  },
  "145mm": {
    "displayName": "145mm武器",
    "sectionType": "Weapon"
  },
  "145mmE": {
    "displayName": "145mm精英",
    "sectionType": "Weapon"
  },
  "AbramsLaser": {
    "displayName": "Abrams激光",
    "sectionType": "Weapon"
  },
  "AbramsLaserE": {
    "displayName": "Abrams激光精英",
    "sectionType": "Weapon"
  },
  "CatastropheGren": {
    "displayName": "CatastropheGren武器",
    "sectionType": "Weapon"
  },
  "CatastropheGrenE": {
    "displayName": "CatastropheGren精英",
    "sectionType": "Weapon"
  },
  "MammothTusk": {
    "displayName": "猛犸獠牙",
    "sectionType": "Weapon"
  },
  "MammothTuskE": {
    "displayName": "猛犸獠牙精英",
    "sectionType": "Weapon"
  },
  "120mmx": {
    "displayName": "120mmx武器",
    "sectionType": "Weapon"
  },
  "120mmxE": {
    "displayName": "120mmx精英",
    "sectionType": "Weapon"
  },
  "ApocMissile": {
    "displayName": "天启导弹",
    "sectionType": "Weapon"
  },
  "ApocMissileE": {
    "displayName": "天启导弹精英",
    "sectionType": "Weapon"
  },
  "ApocStrike": {
    "displayName": "天启打击",
    "sectionType": "Weapon"
  },
  "ApocStrikeE": {
    "displayName": "天启打击精英",
    "sectionType": "Weapon"
  },
  "UraniumCannon": {
    "displayName": "Uranium加农炮",
    "sectionType": "Weapon"
  },
  "UraniumCannonE": {
    "displayName": "Uranium加农炮精英",
    "sectionType": "Weapon"
  },
  "NuwaDeathWeapon": {
    "displayName": "Nuwa死亡武器",
    "sectionType": "Weapon"
  },
  "ToxicPills": {
    "displayName": "毒素Pills",
    "sectionType": "Weapon"
  },
  "ScavengerDeath": {
    "displayName": "拾荒者死亡",
    "sectionType": "Weapon"
  },
  "AcidSpray": {
    "displayName": "AcidSpray武器",
    "sectionType": "Weapon"
  },
  "AcidSprayE": {
    "displayName": "AcidSpray精英",
    "sectionType": "Weapon"
  },
  "GeneticGas": {
    "displayName": "基因Gas",
    "sectionType": "Weapon"
  },
  "CannonBunkerWeapon": {
    "displayName": "加农炮Bunker武器",
    "sectionType": "Weapon"
  },
  "CannonBunkerWeaponE": {
    "displayName": "加农炮Bunker精英武器",
    "sectionType": "Weapon"
  },
  "120mm": {
    "displayName": "120mm武器",
    "sectionType": "Weapon"
  },
  "120mmE": {
    "displayName": "120mm精英",
    "sectionType": "Weapon"
  },
  "Super120mm": {
    "displayName": "超级120mm",
    "sectionType": "Weapon"
  },
  "Super120mmE": {
    "displayName": "超级120mm精英",
    "sectionType": "Weapon"
  },
  "GehennaBlaster": {
    "displayName": "Gehenna爆能枪武器",
    "sectionType": "Weapon"
  },
  "GehennaBlasterGround": {
    "displayName": "Gehenna爆能枪Ground武器",
    "sectionType": "Weapon"
  },
  "MothraFollow": {
    "displayName": "侦察乌鸦Follow",
    "sectionType": "Weapon"
  },
  "ColossusCannon": {
    "displayName": "Colossus加农炮",
    "sectionType": "Weapon"
  },
  "ColossusCannonE": {
    "displayName": "Colossus加农炮精英",
    "sectionType": "Weapon"
  },
  "ColossusAA": {
    "displayName": "Colossus对空",
    "sectionType": "Weapon"
  },
  "ColossusAAFake": {
    "displayName": "Colossus对空伪装",
    "sectionType": "Weapon"
  },
  "BasiliskCannon": {
    "displayName": "Basilisk加农炮",
    "sectionType": "Weapon"
  },
  "BasiliskCannonE": {
    "displayName": "Basilisk加农炮精英",
    "sectionType": "Weapon"
  },
  "120mmTiger": {
    "displayName": "120mm老虎",
    "sectionType": "Weapon"
  },
  "120mmTigerE": {
    "displayName": "120mm老虎精英",
    "sectionType": "Weapon"
  },
  "120mmHeavy": {
    "displayName": "120mm重型武器",
    "sectionType": "Weapon"
  },
  "120mmHeavyE": {
    "displayName": "120mm重型精英",
    "sectionType": "Weapon"
  },
  "120mmMammoth": {
    "displayName": "120mm猛犸",
    "sectionType": "Weapon"
  },
  "120mmMammothE": {
    "displayName": "120mm猛犸精英",
    "sectionType": "Weapon"
  },
  "MammothMissile": {
    "displayName": "猛犸导弹",
    "sectionType": "Weapon"
  },
  "MammothMissileE": {
    "displayName": "猛犸导弹精英",
    "sectionType": "Weapon"
  },
  "120mmJaguar": {
    "displayName": "120mmJaguar武器",
    "sectionType": "Weapon"
  },
  "120mmJaguarE": {
    "displayName": "120mmJaguar精英",
    "sectionType": "Weapon"
  },
  "Flamethrower": {
    "displayName": "Flamethrower武器",
    "sectionType": "Weapon"
  },
  "FlamethrowerE": {
    "displayName": "Flamethrower精英",
    "sectionType": "Weapon"
  },
  "Flamethrower2": {
    "displayName": "Flamethrower 2武器",
    "sectionType": "Weapon"
  },
  "Flamethrower2E": {
    "displayName": "Flamethrower 2精英",
    "sectionType": "Weapon"
  },
  "FVFlamethrower": {
    "displayName": "斯特瑞克步兵战车Flamethrower",
    "sectionType": "Weapon"
  },
  "FVFlamethrowerE": {
    "displayName": "斯特瑞克步兵战车Flamethrower精英",
    "sectionType": "Weapon"
  },
  "BorilloFlamethrower": {
    "displayName": "BorilloFlamethrower武器",
    "sectionType": "Weapon"
  },
  "BorilloFlamethrowerE": {
    "displayName": "BorilloFlamethrower精英",
    "sectionType": "Weapon"
  },
  "ArmadilloFlamethrower": {
    "displayName": "ArmadilloFlamethrower武器",
    "sectionType": "Weapon"
  },
  "ArmadilloFlamethrowerE": {
    "displayName": "ArmadilloFlamethrower精英",
    "sectionType": "Weapon"
  },
  "TurretFlamethrower": {
    "displayName": "TurretFlamethrower武器",
    "sectionType": "Weapon"
  },
  "TurretFlamethrowerE": {
    "displayName": "TurretFlamethrower精英",
    "sectionType": "Weapon"
  },
  "OldFlamethrower": {
    "displayName": "OldFlamethrower武器",
    "sectionType": "Weapon"
  },
  "TurretAnimFire": {
    "displayName": "Turret动画火焰",
    "sectionType": "Weapon"
  },
  "MantisGun": {
    "displayName": "Mantis机枪",
    "sectionType": "Weapon"
  },
  "MantisGunE": {
    "displayName": "Mantis机枪精英",
    "sectionType": "Weapon"
  },
  "MantisDeathWeapon": {
    "displayName": "Mantis死亡武器",
    "sectionType": "Weapon"
  },
  "ATGUN": {
    "displayName": "ATGUN武器",
    "sectionType": "Weapon"
  },
  "ATGUNE": {
    "displayName": "ATGUNE武器",
    "sectionType": "Weapon"
  },
  "OpusGun": {
    "displayName": "Opus机枪",
    "sectionType": "Weapon"
  },
  "OpusGunE": {
    "displayName": "Opus机枪精英",
    "sectionType": "Weapon"
  },
  "OpusGunX": {
    "displayName": "Opus机枪 X",
    "sectionType": "Weapon"
  },
  "OpusGunXE": {
    "displayName": "Opus机枪XE",
    "sectionType": "Weapon"
  },
  "OpusGunY": {
    "displayName": "Opus机枪 Y",
    "sectionType": "Weapon"
  },
  "OpusGunYE": {
    "displayName": "Opus机枪YE",
    "sectionType": "Weapon"
  },
  "OpusGunZ": {
    "displayName": "Opus机枪 Z",
    "sectionType": "Weapon"
  },
  "OpusGunZE": {
    "displayName": "Opus机枪ZE",
    "sectionType": "Weapon"
  },
  "Robogun": {
    "displayName": "Robogun武器",
    "sectionType": "Weapon"
  },
  "RobogunE": {
    "displayName": "Robogun精英",
    "sectionType": "Weapon"
  },
  "RobogunW": {
    "displayName": "Robogun W武器",
    "sectionType": "Weapon"
  },
  "RobogunWE": {
    "displayName": "RobogunWE武器",
    "sectionType": "Weapon"
  },
  "Robotorpedo": {
    "displayName": "Robotorpedo武器",
    "sectionType": "Weapon"
  },
  "RobotorpedoE": {
    "displayName": "Robotorpedo精英",
    "sectionType": "Weapon"
  },
  "SunburstLaser": {
    "displayName": "Sunburst激光",
    "sectionType": "Weapon"
  },
  "SunburstBomb": {
    "displayName": "Sunburst炸弹",
    "sectionType": "Weapon"
  },
  "SeekerFake": {
    "displayName": "追踪者伪装",
    "sectionType": "Weapon"
  },
  "CatapultWeapon": {
    "displayName": "Catapult武器",
    "sectionType": "Weapon"
  },
  "CatapultWeaponE": {
    "displayName": "Catapult精英武器",
    "sectionType": "Weapon"
  },
  "CorossionB": {
    "displayName": "CorossionB武器",
    "sectionType": "Weapon"
  },
  "QuadMortar": {
    "displayName": "迷雾机动车Mortar",
    "sectionType": "Weapon"
  },
  "QuadMortarE": {
    "displayName": "迷雾机动车Mortar精英",
    "sectionType": "Weapon"
  },
  "QuadMortar2": {
    "displayName": "迷雾机动车Mortar 2",
    "sectionType": "Weapon"
  },
  "QuadMortar2E": {
    "displayName": "迷雾机动车Mortar 2精英",
    "sectionType": "Weapon"
  },
  "FVQuadMortar": {
    "displayName": "斯特瑞克步兵战车迷雾机动车Mortar",
    "sectionType": "Weapon"
  },
  "FVQuadMortarE": {
    "displayName": "斯特瑞克步兵战车迷雾机动车Mortar精英",
    "sectionType": "Weapon"
  },
  "IronDragonBalls": {
    "displayName": "无敌DragonBalls",
    "sectionType": "Weapon"
  },
  "IronDragonDeath": {
    "displayName": "无敌Dragon死亡",
    "sectionType": "Weapon"
  },
  "IronCrate": {
    "displayName": "无敌箱子",
    "sectionType": "Weapon"
  },
  "DominatorParticles": {
    "displayName": "心灵支配inatorParticles武器",
    "sectionType": "Weapon"
  },
  "BrightFlash": {
    "displayName": "BrightFlash武器",
    "sectionType": "Weapon"
  },
  "Cryobase": {
    "displayName": "Cryobase武器",
    "sectionType": "Weapon"
  },
  "IronBlastFlash": {
    "displayName": "无敌爆破Flash",
    "sectionType": "Weapon"
  },
  "IronOldFlash": {
    "displayName": "无敌OldFlash",
    "sectionType": "Weapon"
  },
  "IronDeviceFlash": {
    "displayName": "无敌DeviceFlash",
    "sectionType": "Weapon"
  },
  "IronOrcinusFlash": {
    "displayName": "无敌逆戟鲸Flash",
    "sectionType": "Weapon"
  },
  "BoidmachineFlash": {
    "displayName": "BoidmachineFlash武器",
    "sectionType": "Weapon"
  },
  "ArtyCannon": {
    "displayName": "远程火炮加农炮",
    "sectionType": "Weapon"
  },
  "ArtyCannonE": {
    "displayName": "远程火炮加农炮精英",
    "sectionType": "Weapon"
  },
  "Howitzer": {
    "displayName": "Howitzer武器",
    "sectionType": "Weapon"
  },
  "HowitzerE": {
    "displayName": "Howitzer精英",
    "sectionType": "Weapon"
  },
  "HowitzerBeacon": {
    "displayName": "HowitzerBeacon武器",
    "sectionType": "Weapon"
  },
  "HowitzerBeaconE": {
    "displayName": "HowitzerBeacon精英",
    "sectionType": "Weapon"
  },
  "155mm": {
    "displayName": "155mm武器",
    "sectionType": "Weapon"
  },
  "155mmE": {
    "displayName": "155mm精英",
    "sectionType": "Weapon"
  },
  "155mmPart": {
    "displayName": "155mmPart武器",
    "sectionType": "Weapon"
  },
  "ASWLauncher": {
    "displayName": "鱼鹰无人机发射器",
    "sectionType": "Weapon"
  },
  "SmokeCannon": {
    "displayName": "Smoke加农炮",
    "sectionType": "Weapon"
  },
  "V3Launcher": {
    "displayName": "V3发射器武器",
    "sectionType": "Weapon"
  },
  "LeviLauncher": {
    "displayName": "利维坦无人机母舰发射器",
    "sectionType": "Weapon"
  },
  "PsyBomLauncher": {
    "displayName": "PsyBom发射器武器",
    "sectionType": "Weapon"
  },
  "CruiseLauncher": {
    "displayName": "Cruise发射器武器",
    "sectionType": "Weapon"
  },
  "DredLauncher": {
    "displayName": "无畏级导弹舰发射器",
    "sectionType": "Weapon"
  },
  "MiniNukeRad": {
    "displayName": "Mini战术核弹攻击辐射",
    "sectionType": "Weapon"
  },
  "TopolLauncher": {
    "displayName": "Topol发射器武器",
    "sectionType": "Weapon"
  },
  "DroneJump": {
    "displayName": "DroneJump武器",
    "sectionType": "Weapon"
  },
  "DroneScratch": {
    "displayName": "DroneScratch武器",
    "sectionType": "Weapon"
  },
  "DogBite": {
    "displayName": "苏联军犬撕咬",
    "sectionType": "Weapon"
  },
  "SpookBite": {
    "displayName": "精怪撕咬",
    "sectionType": "Weapon"
  },
  "AlligatorBite": {
    "displayName": "鳄鱼撕咬",
    "sectionType": "Weapon"
  },
  "BearBite": {
    "displayName": "Bear撕咬",
    "sectionType": "Weapon"
  },
  "ChimpBite": {
    "displayName": "Chimp撕咬",
    "sectionType": "Weapon"
  },
  "TRexBite": {
    "displayName": "TRex撕咬",
    "sectionType": "Weapon"
  },
  "TRexInfBite": {
    "displayName": "TRexInf撕咬",
    "sectionType": "Weapon"
  },
  "RoboTeeth": {
    "displayName": "机器人坦克Teeth",
    "sectionType": "Weapon"
  },
  "RoboTeethE": {
    "displayName": "机器人坦克Teeth精英",
    "sectionType": "Weapon"
  },
  "SHOVEL": {
    "displayName": "SHOVEL武器",
    "sectionType": "Weapon"
  },
  "VirtualScanner": {
    "displayName": "Virtual扫描器",
    "sectionType": "Weapon"
  },
  "EngineerScanner": {
    "displayName": "盟军工程师扫描器",
    "sectionType": "Weapon"
  },
  "TankScanner": {
    "displayName": "Tank扫描器",
    "sectionType": "Weapon"
  },
  "RoadrunnerChoke": {
    "displayName": "RoadrunnerChoke武器",
    "sectionType": "Weapon"
  },
  "RoadrunnerNerf": {
    "displayName": "Roadrunner削弱武器",
    "sectionType": "Weapon"
  },
  "RoadrunnerDeath": {
    "displayName": "Roadrunner死亡",
    "sectionType": "Weapon"
  },
  "NotADeployer": {
    "displayName": "不ADeployer",
    "sectionType": "Weapon"
  },
  "NotAWeapon": {
    "displayName": "非武器占位项",
    "sectionType": "Weapon"
  },
  "NotAStrategy": {
    "displayName": "不AStrategy",
    "sectionType": "Weapon"
  },
  "NotASpin": {
    "displayName": "不A旋转",
    "sectionType": "Weapon"
  },
  "NotANull": {
    "displayName": "非空占位项",
    "sectionType": "Unknown"
  },
  "NotANanocoat": {
    "displayName": "不ANanocoat",
    "sectionType": "Weapon"
  },
  "NotAShield": {
    "displayName": "不A护盾",
    "sectionType": "Weapon"
  },
  "NotAnEnergy": {
    "displayName": "不AnEnergy",
    "sectionType": "Weapon"
  },
  "NotAnEiffel": {
    "displayName": "不AnEiffel",
    "sectionType": "Weapon"
  },
  "ReallyNotAWeapon": {
    "displayName": "非武器占位项",
    "sectionType": "Unknown"
  },
  "NotAStealth": {
    "displayName": "不A隐形",
    "sectionType": "Weapon"
  },
  "NotAQuad": {
    "displayName": "不A迷雾机动车",
    "sectionType": "Weapon"
  },
  "NotARad": {
    "displayName": "不A辐射",
    "sectionType": "Weapon"
  },
  "NotAMega": {
    "displayName": "不A巨齿鲨机甲",
    "sectionType": "Weapon"
  },
  "NotASodar": {
    "displayName": "不A声呐",
    "sectionType": "Weapon"
  },
  "NotAnOrcinus": {
    "displayName": "不An逆戟鲸",
    "sectionType": "Weapon"
  },
  "NotARod": {
    "displayName": "不A避雷针",
    "sectionType": "Weapon"
  },
  "NotAnInhibitor": {
    "displayName": "不AnInhibitor",
    "sectionType": "Weapon"
  },
  "NotAWarp": {
    "displayName": "不A传送",
    "sectionType": "Weapon"
  },
  "NotAKnightfall": {
    "displayName": "不A天降神兵",
    "sectionType": "Weapon"
  },
  "NotACrane": {
    "displayName": "非起重机占位项",
    "sectionType": "Unknown"
  },
  "GeneburstWeapon": {
    "displayName": "Geneburst武器",
    "sectionType": "Weapon"
  },
  "NuclearPathWeapon": {
    "displayName": "NuclearPath武器",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon1": {
    "displayName": "回溯武器 1",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon2": {
    "displayName": "回溯武器 2",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon3": {
    "displayName": "回溯武器 3",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon4": {
    "displayName": "回溯武器 4",
    "sectionType": "Weapon"
  },
  "BackwarpWeapon5": {
    "displayName": "回溯武器 5",
    "sectionType": "Weapon"
  },
  "DisruptorField": {
    "displayName": "Disruptor力场",
    "sectionType": "Weapon"
  },
  "DisruptorFieldReal": {
    "displayName": "Disruptor力场实体",
    "sectionType": "Weapon"
  },
  "StealthGenerator": {
    "displayName": "隐形发生器",
    "sectionType": "Weapon"
  },
  "StealthGeneratorAI": {
    "displayName": "隐形发生器AI",
    "sectionType": "Weapon"
  },
  "StealthGeneratorReal": {
    "displayName": "隐形发生器实体",
    "sectionType": "Weapon"
  },
  "HazequadGenerator": {
    "displayName": "迷雾四旋翼发生器",
    "sectionType": "Weapon"
  },
  "HazequadGeneratorReal": {
    "displayName": "迷雾四旋翼发生器实体",
    "sectionType": "Weapon"
  },
  "SodarBoost": {
    "displayName": "声呐强化",
    "sectionType": "Weapon"
  },
  "SodarBoostReal": {
    "displayName": "声呐强化实体",
    "sectionType": "Weapon"
  },
  "Megaarena": {
    "displayName": "巨齿鲨竞技场",
    "sectionType": "Weapon"
  },
  "MegaarenaReal": {
    "displayName": "巨齿鲨竞技场实体",
    "sectionType": "Weapon"
  },
  "LightningRod": {
    "displayName": "闪电避雷针",
    "sectionType": "Weapon"
  },
  "LightningRodReal": {
    "displayName": "闪电避雷针实体",
    "sectionType": "Weapon"
  },
  "TankBunkerBuffReal": {
    "displayName": "TankBunker增益实体",
    "sectionType": "Weapon"
  },
  "DefenseBuff": {
    "displayName": "防御增益",
    "sectionType": "Weapon"
  },
  "DefenseBuffReal": {
    "displayName": "防御增益实体",
    "sectionType": "Weapon"
  },
  "Hypergate": {
    "displayName": "超门",
    "sectionType": "Weapon"
  },
  "HypergateReal": {
    "displayName": "超门实体",
    "sectionType": "Weapon"
  },
  "ShieldGenerator": {
    "displayName": "护盾发生器",
    "sectionType": "Weapon"
  },
  "ShieldGeneratorReal": {
    "displayName": "护盾发生器实体",
    "sectionType": "Weapon"
  },
  "StructureBuff": {
    "displayName": "建筑增益",
    "sectionType": "Weapon"
  },
  "StructureBuffReal": {
    "displayName": "建筑增益实体",
    "sectionType": "Weapon"
  },
  "SpinGenerator": {
    "displayName": "旋转发生器",
    "sectionType": "Weapon"
  },
  "SpinGeneratorReal": {
    "displayName": "旋转发生器实体",
    "sectionType": "Weapon"
  },
  "GSpinGenerator": {
    "displayName": "G旋转发生器",
    "sectionType": "Weapon"
  },
  "GSpinGeneratorReal": {
    "displayName": "G旋转发生器实体",
    "sectionType": "Weapon"
  },
  "GSpinGeneratorReal2": {
    "displayName": "G旋转发生器实体 2",
    "sectionType": "Weapon"
  },
  "SquidPunch": {
    "displayName": "乌贼冲击",
    "sectionType": "Weapon"
  },
  "SquidPunchE": {
    "displayName": "乌贼冲击精英",
    "sectionType": "Weapon"
  },
  "HornetLauncher": {
    "displayName": "黄蜂无人机发射器",
    "sectionType": "Weapon"
  },
  "SnakeLauncher": {
    "displayName": "王蛇战机发射器",
    "sectionType": "Weapon"
  },
  "GehennaLauncher": {
    "displayName": "Gehenna发射器武器",
    "sectionType": "Weapon"
  },
  "SuperGehennaLauncher": {
    "displayName": "超级Gehenna发射器",
    "sectionType": "Weapon"
  },
  "VentrexLauncher": {
    "displayName": "冰雹轰炸机发射器",
    "sectionType": "Weapon"
  },
  "JackalZap": {
    "displayName": "豺狼突击载具Zap",
    "sectionType": "Weapon"
  },
  "JackalZapE": {
    "displayName": "豺狼突击载具Zap精英",
    "sectionType": "Weapon"
  },
  "EmitterZap": {
    "displayName": "EmitterZap武器",
    "sectionType": "Weapon"
  },
  "EmitterZapE": {
    "displayName": "EmitterZap精英",
    "sectionType": "Weapon"
  },
  "RepairBullet": {
    "displayName": "维修子弹",
    "sectionType": "Weapon"
  },
  "DroneRepairBullet": {
    "displayName": "Drone维修子弹",
    "sectionType": "Weapon"
  },
  "MiteRepairBullet": {
    "displayName": "Mite维修子弹",
    "sectionType": "Weapon"
  },
  "RejuvenationBullet": {
    "displayName": "Rejuvenation子弹",
    "sectionType": "Weapon"
  },
  "Heal": {
    "displayName": "治疗",
    "sectionType": "Weapon"
  },
  "Heal2": {
    "displayName": "治疗 2",
    "sectionType": "Weapon"
  },
  "HealBullet": {
    "displayName": "治疗子弹",
    "sectionType": "Weapon"
  },
  "Punch": {
    "displayName": "冲击",
    "sectionType": "Weapon"
  },
  "Smash": {
    "displayName": "重击",
    "sectionType": "Weapon"
  },
  "FVTankCannon": {
    "displayName": "斯特瑞克步兵战车Tank加农炮",
    "sectionType": "Weapon"
  },
  "FVTankCannonE": {
    "displayName": "斯特瑞克步兵战车Tank加农炮精英",
    "sectionType": "Weapon"
  },
  "BulletPunch": {
    "displayName": "子弹冲击",
    "sectionType": "Unknown"
  },
  "SuperSmash": {
    "displayName": "超级重击",
    "sectionType": "Unknown"
  },
  "Mummypunch": {
    "displayName": "Mummypunch武器",
    "sectionType": "Weapon"
  },
  "Mummysmash": {
    "displayName": "Mummysmash武器",
    "sectionType": "Weapon"
  },
  "EMPBeam": {
    "displayName": "电磁脉冲光束",
    "sectionType": "Weapon"
  },
  "BikeBeamWeapon": {
    "displayName": "伊文摩托兵光束武器",
    "sectionType": "Weapon"
  },
  "MobileIronCurtain": {
    "displayName": "Mobile无敌Curtain",
    "sectionType": "Weapon"
  },
  "RadBeamWeapon": {
    "displayName": "辐射光束武器",
    "sectionType": "Weapon"
  },
  "RadBeamWeaponE": {
    "displayName": "辐射光束精英武器",
    "sectionType": "Weapon"
  },
  "CRRadBeamWeapon": {
    "displayName": "驻军辐射光束武器",
    "sectionType": "Weapon"
  },
  "CRRadBeamWeaponE": {
    "displayName": "驻军辐射光束精英武器",
    "sectionType": "Weapon"
  },
  "RadEruptionWeapon": {
    "displayName": "辐射Eruption武器",
    "sectionType": "Weapon"
  },
  "RadEruptionWeaponE": {
    "displayName": "辐射Eruption精英武器",
    "sectionType": "Weapon"
  },
  "RadEradWeapon": {
    "displayName": "辐射Erad武器",
    "sectionType": "Weapon"
  },
  "RadEradWeaponE": {
    "displayName": "辐射Erad精英武器",
    "sectionType": "Weapon"
  },
  "RadEradicationWeapon": {
    "displayName": "辐射Eradication武器",
    "sectionType": "Weapon"
  },
  "RadEradicationWeaponE": {
    "displayName": "辐射Eradication精英武器",
    "sectionType": "Weapon"
  },
  "KrukovRadBeam": {
    "displayName": "库可夫辐射光束",
    "sectionType": "Weapon"
  },
  "KrukovSword": {
    "displayName": "库可夫剑",
    "sectionType": "Weapon"
  },
  "KrukovSwordFrag": {
    "displayName": "库可夫剑破片",
    "sectionType": "Weapon"
  },
  "PrometheusBetaCharge": {
    "displayName": "PrometheusBetaCharge武器",
    "sectionType": "Weapon"
  },
  "PrometheusBetaCharge2": {
    "displayName": "PrometheusBetaCharge 2武器",
    "sectionType": "Weapon"
  },
  "PrometheusBetaBlast": {
    "displayName": "PrometheusBeta爆破",
    "sectionType": "Weapon"
  },
  "ReaperCannon": {
    "displayName": "Reaper加农炮",
    "sectionType": "Weapon"
  },
  "ReaperDeathWeapon": {
    "displayName": "Reaper死亡武器",
    "sectionType": "Weapon"
  },
  "SpecialRad": {
    "displayName": "特殊辐射",
    "sectionType": "Weapon"
  },
  "GrumbleFake": {
    "displayName": "轰鸣防空导弹伪装",
    "sectionType": "Weapon"
  },
  "GrumbleRocket": {
    "displayName": "轰鸣防空导弹火箭",
    "sectionType": "Weapon"
  },
  "BlackoutMissileWeapon": {
    "displayName": "Blackout导弹武器",
    "sectionType": "Weapon"
  },
  "BlackoutB": {
    "displayName": "BlackoutB武器",
    "sectionType": "Weapon"
  },
  "Wallbuster": {
    "displayName": "破墙者",
    "sectionType": "Weapon"
  },
  "AtomheartDeath": {
    "displayName": "Atomheart死亡",
    "sectionType": "Weapon"
  },
  "YunruEMP": {
    "displayName": "芸如电磁脉冲",
    "sectionType": "Weapon"
  },
  "FVYunruEMP": {
    "displayName": "斯特瑞克步兵战车芸如电磁脉冲",
    "sectionType": "Weapon"
  },
  "EarthBreaker": {
    "displayName": "EarthBreaker武器",
    "sectionType": "Weapon"
  },
  "EarthBreakerE": {
    "displayName": "EarthBreaker精英",
    "sectionType": "Weapon"
  },
  "UnderBlade": {
    "displayName": "马尔翁刀刃",
    "sectionType": "Weapon"
  },
  "FVUnderBlade": {
    "displayName": "斯特瑞克步兵战车马尔翁刀刃",
    "sectionType": "Weapon"
  },
  "Undermine": {
    "displayName": "Undermine武器",
    "sectionType": "Weapon"
  },
  "UCUndermine": {
    "displayName": "驻军Undermine",
    "sectionType": "Weapon"
  },
  "MagnetShift": {
    "displayName": "磁力射线Shift",
    "sectionType": "Weapon"
  },
  "BeamUnitScanner": {
    "displayName": "光束单位扫描器",
    "sectionType": "Weapon"
  },
  "FakeDarts": {
    "displayName": "伪装Darts",
    "sectionType": "Weapon"
  },
  "FVFakeDarts": {
    "displayName": "斯特瑞克步兵战车伪装Darts",
    "sectionType": "Weapon"
  },
  "PsychicDarts": {
    "displayName": "心灵Darts",
    "sectionType": "Weapon"
  },
  "FVPsychicDarts": {
    "displayName": "斯特瑞克步兵战车心灵Darts",
    "sectionType": "Weapon"
  },
  "AntiGravity": {
    "displayName": "AntiGravity武器",
    "sectionType": "Weapon"
  },
  "AntiGravityE": {
    "displayName": "AntiGravity精英",
    "sectionType": "Weapon"
  },
  "ZorbAttack": {
    "displayName": "佐布攻击",
    "sectionType": "Weapon"
  },
  "FVZorbAttack": {
    "displayName": "斯特瑞克步兵战车佐布攻击",
    "sectionType": "Weapon"
  },
  "ZorbLongAttack": {
    "displayName": "佐布Long攻击",
    "sectionType": "Weapon"
  },
  "ZorbTractorWind": {
    "displayName": "佐布清道夫坦克风",
    "sectionType": "Weapon"
  },
  "FVZorbTractorWind": {
    "displayName": "斯特瑞克步兵战车佐布清道夫坦克风",
    "sectionType": "Weapon"
  },
  "YuriMonolithShot": {
    "displayName": "心灵军团MonolithShot",
    "sectionType": "Weapon"
  },
  "YuriMonolithShotE": {
    "displayName": "心灵军团MonolithShot精英",
    "sectionType": "Weapon"
  },
  "YuriBustShot": {
    "displayName": "心灵军团BustShot",
    "sectionType": "Weapon"
  },
  "YuriBustShotE": {
    "displayName": "心灵军团BustShot精英",
    "sectionType": "Weapon"
  },
  "MarauderRailgun": {
    "displayName": "MarauderRailgun武器",
    "sectionType": "Weapon"
  },
  "MarauderRailgunE": {
    "displayName": "MarauderRailgun精英",
    "sectionType": "Weapon"
  },
  "InfernoRailgun": {
    "displayName": "InfernoRailgun武器",
    "sectionType": "Weapon"
  },
  "InfernoRailgunE": {
    "displayName": "InfernoRailgun精英",
    "sectionType": "Weapon"
  },
  "InfernoRailgunBlue": {
    "displayName": "InfernoRailgun蓝色",
    "sectionType": "Weapon"
  },
  "InfernoRailgunBlueE": {
    "displayName": "InfernoRailgun蓝色精英",
    "sectionType": "Weapon"
  },
  "AntaresBeam": {
    "displayName": "Antares光束",
    "sectionType": "Weapon"
  },
  "AntaresBeamE": {
    "displayName": "Antares光束精英",
    "sectionType": "Weapon"
  },
  "AntaresBeamBlue": {
    "displayName": "Antares光束蓝色",
    "sectionType": "Weapon"
  },
  "AntaresBeamBlueE": {
    "displayName": "Antares光束蓝色精英",
    "sectionType": "Weapon"
  },
  "MiniAntaresBeam": {
    "displayName": "MiniAntares光束",
    "sectionType": "Weapon"
  },
  "MiniAntaresBeamE": {
    "displayName": "MiniAntares光束精英",
    "sectionType": "Weapon"
  },
  "MayanPrism": {
    "displayName": "玛雅金字塔光棱",
    "sectionType": "Weapon"
  },
  "ElectricBolt": {
    "displayName": "Electric电弧",
    "sectionType": "Weapon"
  },
  "ElectricBoltE": {
    "displayName": "Electric电弧精英",
    "sectionType": "Weapon"
  },
  "CRElectricBolt": {
    "displayName": "驻军Electric电弧",
    "sectionType": "Weapon"
  },
  "CRElectricBoltE": {
    "displayName": "驻军Electric电弧精英",
    "sectionType": "Weapon"
  },
  "AssaultBolt": {
    "displayName": "Assault电弧",
    "sectionType": "Weapon"
  },
  "TeslaFragment": {
    "displayName": "磁暴破片",
    "sectionType": "Weapon"
  },
  "ShockBolt": {
    "displayName": "闪流步兵电弧",
    "sectionType": "Weapon"
  },
  "ShockBoltE": {
    "displayName": "闪流步兵电弧精英",
    "sectionType": "Weapon"
  },
  "TeslaLittleFragment": {
    "displayName": "磁暴Little破片",
    "sectionType": "Weapon"
  },
  "SpaceComBeam": {
    "displayName": "SpaceCom光束",
    "sectionType": "Weapon"
  },
  "SpaceComEMP": {
    "displayName": "SpaceCom电磁脉冲",
    "sectionType": "Weapon"
  },
  "VolkovBomb": {
    "displayName": "沃尔科夫炸弹",
    "sectionType": "Weapon"
  },
  "VolkovBombE": {
    "displayName": "沃尔科夫炸弹精英",
    "sectionType": "Weapon"
  },
  "VolkovBolt": {
    "displayName": "沃尔科夫电弧",
    "sectionType": "Weapon"
  },
  "VolkovBoltE": {
    "displayName": "沃尔科夫电弧精英",
    "sectionType": "Weapon"
  },
  "FVVolkovBolt": {
    "displayName": "斯特瑞克步兵战车沃尔科夫电弧",
    "sectionType": "Weapon"
  },
  "FVVolkovBoltE": {
    "displayName": "斯特瑞克步兵战车沃尔科夫电弧精英",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment": {
    "displayName": "沃尔科夫电弧破片",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment2": {
    "displayName": "沃尔科夫电弧破片 2",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment3": {
    "displayName": "沃尔科夫电弧破片 3",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragmentE": {
    "displayName": "沃尔科夫电弧破片精英",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment2E": {
    "displayName": "沃尔科夫电弧破片 2精英",
    "sectionType": "Weapon"
  },
  "VolkovBoltFragment3E": {
    "displayName": "沃尔科夫电弧破片 3精英",
    "sectionType": "Weapon"
  },
  "VolkovBombBlue": {
    "displayName": "沃尔科夫炸弹蓝色",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlue": {
    "displayName": "沃尔科夫电弧蓝色",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlueFragment": {
    "displayName": "沃尔科夫电弧蓝色破片",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlueFragment2": {
    "displayName": "沃尔科夫电弧蓝色破片 2",
    "sectionType": "Weapon"
  },
  "VolkovBoltBlueFragment3": {
    "displayName": "沃尔科夫电弧蓝色破片 3",
    "sectionType": "Weapon"
  },
  "SammyGun": {
    "displayName": "Sammy机枪",
    "sectionType": "Weapon"
  },
  "SammyGunE": {
    "displayName": "Sammy机枪精英",
    "sectionType": "Weapon"
  },
  "FlintPistola": {
    "displayName": "FlintPistola武器",
    "sectionType": "Weapon"
  },
  "FlintPistolaE": {
    "displayName": "FlintPistola精英",
    "sectionType": "Weapon"
  },
  "FlintDynamite": {
    "displayName": "FlintDynamite武器",
    "sectionType": "Weapon"
  },
  "TERMIGUN": {
    "displayName": "TERMIGUN武器",
    "sectionType": "Weapon"
  },
  "TERMIGUNE": {
    "displayName": "TERMIGUNE武器",
    "sectionType": "Weapon"
  },
  "CyborgGrenade": {
    "displayName": "Cyborg榴弹",
    "sectionType": "Weapon"
  },
  "CyborgGrenadeE": {
    "displayName": "Cyborg榴弹精英",
    "sectionType": "Weapon"
  },
  "TankEMP": {
    "displayName": "Tank电磁脉冲",
    "sectionType": "Weapon"
  },
  "TankBolt": {
    "displayName": "Tank电弧",
    "sectionType": "Weapon"
  },
  "TankBoltE": {
    "displayName": "Tank电弧精英",
    "sectionType": "Weapon"
  },
  "PerunBolt": {
    "displayName": "佩龙旗舰电弧",
    "sectionType": "Weapon"
  },
  "PerunBoltE": {
    "displayName": "佩龙旗舰电弧精英",
    "sectionType": "Weapon"
  },
  "PerunCharge": {
    "displayName": "佩龙旗舰Charge",
    "sectionType": "Weapon"
  },
  "Overcharge": {
    "displayName": "超载",
    "sectionType": "Weapon"
  },
  "GravitronField": {
    "displayName": "Gravitron力场",
    "sectionType": "Weapon"
  },
  "GravitronAnim": {
    "displayName": "Gravitron动画",
    "sectionType": "Weapon"
  },
  "RuinerRay": {
    "displayName": "压制飞碟Ray",
    "sectionType": "Weapon"
  },
  "RuinerEffect": {
    "displayName": "压制飞碟效果",
    "sectionType": "Weapon"
  },
  "MobileGrinderRig": {
    "displayName": "Mobile粉碎回收厂Rig",
    "sectionType": "Weapon"
  },
  "WarRigDrills": {
    "displayName": "WarRigDrills武器",
    "sectionType": "Weapon"
  },
  "WarRigRay": {
    "displayName": "WarRigRay武器",
    "sectionType": "Weapon"
  },
  "SonicRay": {
    "displayName": "声波Ray",
    "sectionType": "Weapon"
  },
  "DSonicRay": {
    "displayName": "D声波Ray",
    "sectionType": "Weapon"
  },
  "WolfCannon": {
    "displayName": "猎狼犬直升机加农炮",
    "sectionType": "Weapon"
  },
  "WolfCannonE": {
    "displayName": "猎狼犬直升机加农炮精英",
    "sectionType": "Weapon"
  },
  "WolfStrike": {
    "displayName": "猎狼犬直升机打击",
    "sectionType": "Weapon"
  },
  "WolfStrikeE": {
    "displayName": "猎狼犬直升机打击精英",
    "sectionType": "Weapon"
  },
  "ConfuseRifle": {
    "displayName": "混乱步枪",
    "sectionType": "Weapon"
  },
  "ConfuseRifleAA": {
    "displayName": "混乱步枪对空",
    "sectionType": "Weapon"
  },
  "FVConfuseRifle": {
    "displayName": "斯特瑞克步兵战车混乱步枪",
    "sectionType": "Weapon"
  },
  "ChaosTouchEffect": {
    "displayName": "混乱Touch效果",
    "sectionType": "Weapon"
  },
  "ConfuseRay": {
    "displayName": "混乱Ray",
    "sectionType": "Weapon"
  },
  "ConfuseFlare": {
    "displayName": "混乱信号弹",
    "sectionType": "Weapon"
  },
  "ConfuseFlareFrag": {
    "displayName": "混乱信号弹破片",
    "sectionType": "Weapon"
  },
  "ShadrayWave": {
    "displayName": "Shadray波",
    "sectionType": "Weapon"
  },
  "ShadrayWaveE": {
    "displayName": "Shadray波精英",
    "sectionType": "Weapon"
  },
  "ShadrayWaveAA": {
    "displayName": "Shadray波对空",
    "sectionType": "Weapon"
  },
  "ShadrayWaveAAE": {
    "displayName": "Shadray波精英对空",
    "sectionType": "Weapon"
  },
  "ShadrayFlash": {
    "displayName": "ShadrayFlash武器",
    "sectionType": "Weapon"
  },
  "SeitaadEMPCannon": {
    "displayName": "塞泰龙弩炮电磁脉冲加农炮",
    "sectionType": "Weapon"
  },
  "SeitaadMissile": {
    "displayName": "塞泰龙弩炮导弹",
    "sectionType": "Weapon"
  },
  "SeitaadMissileFrag": {
    "displayName": "塞泰龙弩炮导弹破片",
    "sectionType": "Weapon"
  },
  "Devourer": {
    "displayName": "吞并",
    "sectionType": "Weapon"
  },
  "ArchelonAttack": {
    "displayName": "冥卫攻击",
    "sectionType": "Weapon"
  },
  "HuntressAttack": {
    "displayName": "女猎手攻击",
    "sectionType": "Weapon"
  },
  "FVHuntressAttack": {
    "displayName": "斯特瑞克步兵战车女猎手攻击",
    "sectionType": "Weapon"
  },
  "BuratinoStrike": {
    "displayName": "Buratino打击",
    "sectionType": "Weapon"
  },
  "BuratinoStrikeE": {
    "displayName": "Buratino打击精英",
    "sectionType": "Weapon"
  },
  "BuratinoStrikeSpread": {
    "displayName": "Buratino打击Spread",
    "sectionType": "Weapon"
  },
  "BuratinoStrikeSpreadE": {
    "displayName": "Buratino打击Spread精英",
    "sectionType": "Weapon"
  },
  "SpeederStrike": {
    "displayName": "Speeder打击",
    "sectionType": "Weapon"
  },
  "SpeederStrikeE": {
    "displayName": "Speeder打击精英",
    "sectionType": "Weapon"
  },
  "SpeederStrikeB": {
    "displayName": "Speeder打击B",
    "sectionType": "Weapon"
  },
  "SpeederStrikeBE": {
    "displayName": "Speeder打击BE",
    "sectionType": "Weapon"
  },
  "HybridBolt": {
    "displayName": "Hybrid电弧",
    "sectionType": "Weapon"
  },
  "HybridBoltE": {
    "displayName": "Hybrid电弧精英",
    "sectionType": "Weapon"
  },
  "HybridBoltSupport": {
    "displayName": "Hybrid电弧Support",
    "sectionType": "Weapon"
  },
  "CoilBolt": {
    "displayName": "Coil电弧",
    "sectionType": "Weapon"
  },
  "CoilBoltE": {
    "displayName": "Coil电弧精英",
    "sectionType": "Weapon"
  },
  "OPCoilBolt": {
    "displayName": "OPCoil电弧",
    "sectionType": "Weapon"
  },
  "OPCoilBoltE": {
    "displayName": "OPCoil电弧精英",
    "sectionType": "Weapon"
  },
  "OldCoilBolt": {
    "displayName": "OldCoil电弧",
    "sectionType": "Weapon"
  },
  "EiffelBolt": {
    "displayName": "Eiffel电弧",
    "sectionType": "Weapon"
  },
  "DefuseKit": {
    "displayName": "DefuseKit武器",
    "sectionType": "Weapon"
  },
  "TriggerShaker": {
    "displayName": "TriggerShaker武器",
    "sectionType": "Weapon"
  },
  "NukePayload": {
    "displayName": "战术核弹攻击Payload",
    "sectionType": "Weapon"
  },
  "NuclearReactorDeath": {
    "displayName": "NuclearReactor死亡",
    "sectionType": "Weapon"
  },
  "MIDASDeath": {
    "displayName": "MIDAS死亡",
    "sectionType": "Weapon"
  },
  "SeismicDeath": {
    "displayName": "Seismic死亡",
    "sectionType": "Weapon"
  },
  "NukeCarrier": {
    "displayName": "战术核弹攻击航母",
    "sectionType": "Weapon"
  },
  "MissileCarrier": {
    "displayName": "导弹航母",
    "sectionType": "Weapon"
  },
  "FlashCarrier": {
    "displayName": "Flash航母",
    "sectionType": "Weapon"
  },
  "FlashPayload": {
    "displayName": "FlashPayload武器",
    "sectionType": "Weapon"
  },
  "MissilePayload": {
    "displayName": "导弹Payload",
    "sectionType": "Weapon"
  },
  "EMPPayload": {
    "displayName": "电磁脉冲Payload",
    "sectionType": "Weapon"
  },
  "EMPPayloadB": {
    "displayName": "电磁脉冲PayloadB",
    "sectionType": "Weapon"
  },
  "Pistola": {
    "displayName": "Pistola武器",
    "sectionType": "Weapon"
  },
  "TechPistola": {
    "displayName": "TechPistola武器",
    "sectionType": "Weapon"
  },
  "RiotGun": {
    "displayName": "防暴机枪",
    "sectionType": "Weapon"
  },
  "RiotSuppress": {
    "displayName": "防暴压制",
    "sectionType": "Weapon"
  },
  "RiotGrenade": {
    "displayName": "防暴榴弹",
    "sectionType": "Weapon"
  },
  "RiotGrenadeGarrison": {
    "displayName": "防暴榴弹Garrison",
    "sectionType": "Weapon"
  },
  "FVRiotGrenade": {
    "displayName": "斯特瑞克步兵战车防暴榴弹",
    "sectionType": "Weapon"
  },
  "Cryobeam1": {
    "displayName": "冷冻光束 1",
    "sectionType": "Weapon"
  },
  "Cryobeam2": {
    "displayName": "冷冻光束 2",
    "sectionType": "Weapon"
  },
  "Cryobeam3": {
    "displayName": "冷冻光束 3",
    "sectionType": "Weapon"
  },
  "Cryobeam4": {
    "displayName": "冷冻光束 4",
    "sectionType": "Weapon"
  },
  "CryobeamIAnimA": {
    "displayName": "冷冻光束I动画A",
    "sectionType": "Weapon"
  },
  "Cryobeam5": {
    "displayName": "冷冻光束 5",
    "sectionType": "Weapon"
  },
  "CryobeamIVAnimA": {
    "displayName": "冷冻光束IV动画A",
    "sectionType": "Weapon"
  },
  "Cryobeam6": {
    "displayName": "冷冻光束 6",
    "sectionType": "Weapon"
  },
  "Cryobeam6AnimA": {
    "displayName": "冷冻光束6动画A",
    "sectionType": "Weapon"
  },
  "Cryobeam6AnimB": {
    "displayName": "冷冻光束6动画B",
    "sectionType": "Weapon"
  },
  "Cryobeam6AnimC": {
    "displayName": "冷冻光束6动画C",
    "sectionType": "Weapon"
  },
  "Cryobeam1AI": {
    "displayName": "冷冻光束1AI",
    "sectionType": "Weapon"
  },
  "Cryobeam2AI": {
    "displayName": "冷冻光束2AI",
    "sectionType": "Weapon"
  },
  "Cryobeam3AI": {
    "displayName": "冷冻光束3AI",
    "sectionType": "Weapon"
  },
  "Cryobeam4AI": {
    "displayName": "冷冻光束4AI",
    "sectionType": "Weapon"
  },
  "Cryobeam5AI": {
    "displayName": "冷冻光束5AI",
    "sectionType": "Weapon"
  },
  "Cryobeam6AI": {
    "displayName": "冷冻光束6AI",
    "sectionType": "Weapon"
  },
  "WarpnodeBomb": {
    "displayName": "Warpnode炸弹",
    "sectionType": "Weapon"
  },
  "UltraMinerBomb": {
    "displayName": "Ultra地雷r炸弹",
    "sectionType": "Weapon"
  },
  "SuppressorPart": {
    "displayName": "SuppressorPart武器",
    "sectionType": "Weapon"
  },
  "SuppressorBomb": {
    "displayName": "Suppressor炸弹",
    "sectionType": "Weapon"
  },
  "FVSuppressorBomb": {
    "displayName": "斯特瑞克步兵战车Suppressor炸弹",
    "sectionType": "Weapon"
  },
  "SuppressorBombIn": {
    "displayName": "Suppressor炸弹In",
    "sectionType": "Weapon"
  },
  "HoverGrenade": {
    "displayName": "悬浮榴弹",
    "sectionType": "Weapon"
  },
  "HoverGrenadeE": {
    "displayName": "悬浮榴弹精英",
    "sectionType": "Weapon"
  },
  "FVHoverGrenade": {
    "displayName": "斯特瑞克步兵战车悬浮榴弹",
    "sectionType": "Weapon"
  },
  "FVHoverGrenadeE": {
    "displayName": "斯特瑞克步兵战车悬浮榴弹精英",
    "sectionType": "Weapon"
  },
  "MutationRailgun": {
    "displayName": "基因震爆Railgun",
    "sectionType": "Weapon"
  },
  "MutationRailgunE": {
    "displayName": "基因震爆Railgun精英",
    "sectionType": "Weapon"
  },
  "MutationClairFix": {
    "displayName": "基因震爆千里眼Fix",
    "sectionType": "Weapon"
  },
  "FVMutationRailgun": {
    "displayName": "斯特瑞克步兵战车基因震爆Railgun",
    "sectionType": "Weapon"
  },
  "FVMutationRailgunE": {
    "displayName": "斯特瑞克步兵战车基因震爆Railgun精英",
    "sectionType": "Weapon"
  },
  "MindControl": {
    "displayName": "心灵Control",
    "sectionType": "Weapon"
  },
  "MindControlE": {
    "displayName": "心灵Control精英",
    "sectionType": "Weapon"
  },
  "DybbukMindControl": {
    "displayName": "恶灵心控",
    "sectionType": "Weapon"
  },
  "DybbukMindControlE": {
    "displayName": "恶灵心控精英",
    "sectionType": "Unknown"
  },
  "SuperMindControl": {
    "displayName": "超级心灵Control",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTank": {
    "displayName": "Multiple心灵ControlTank",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTankE": {
    "displayName": "Multiple心灵ControlTank精英",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTower": {
    "displayName": "Multiple心灵Control塔",
    "sectionType": "Weapon"
  },
  "MultipleMindControlTowE": {
    "displayName": "Multiple心灵Control拖车精英",
    "sectionType": "Weapon"
  },
  "PsiWave": {
    "displayName": "Psi波",
    "sectionType": "Weapon"
  },
  "SuperPsiWave": {
    "displayName": "超级Psi波",
    "sectionType": "Weapon"
  },
  "CRMindBlast": {
    "displayName": "驻军心灵爆破",
    "sectionType": "Weapon"
  },
  "CRSuperMindBlast": {
    "displayName": "驻军超级心灵爆破",
    "sectionType": "Weapon"
  },
  "RepulsorWeapon": {
    "displayName": "Repulsor武器",
    "sectionType": "Weapon"
  },
  "RepulsorEffect": {
    "displayName": "Repulsor效果武器",
    "sectionType": "Weapon"
  },
  "FVRepulsorWeapon": {
    "displayName": "斯特瑞克步兵战车Repulsor武器",
    "sectionType": "Weapon"
  },
  "ArsonistWeapon": {
    "displayName": "Arsonist武器",
    "sectionType": "Weapon"
  },
  "FVArsonistWeapon": {
    "displayName": "斯特瑞克步兵战车Arsonist武器",
    "sectionType": "Weapon"
  },
  "JaguarPilotBomb": {
    "displayName": "JaguarPilot炸弹",
    "sectionType": "Weapon"
  },
  "FVPilotBomb": {
    "displayName": "斯特瑞克步兵战车Pilot炸弹",
    "sectionType": "Weapon"
  },
  "IvanBomber": {
    "displayName": "疯狂伊文炸弹er",
    "sectionType": "Weapon"
  },
  "IvanBomberE": {
    "displayName": "疯狂伊文炸弹er精英",
    "sectionType": "Weapon"
  },
  "FVIvanBomber": {
    "displayName": "斯特瑞克步兵战车疯狂伊文炸弹er",
    "sectionType": "Weapon"
  },
  "FVIvanBomberE": {
    "displayName": "斯特瑞克步兵战车疯狂伊文炸弹er精英",
    "sectionType": "Weapon"
  },
  "IvanDeath": {
    "displayName": "疯狂伊文死亡",
    "sectionType": "Weapon"
  },
  "SaboteurBomb": {
    "displayName": "Saboteur炸弹",
    "sectionType": "Weapon"
  },
  "SaboteurDummy": {
    "displayName": "Saboteur虚拟",
    "sectionType": "Weapon"
  },
  "BridgeKiller": {
    "displayName": "BridgeKiller武器",
    "sectionType": "Weapon"
  },
  "BridgeKillerClair": {
    "displayName": "BridgeKiller千里眼",
    "sectionType": "Weapon"
  },
  "MakeupKit": {
    "displayName": "MakeupKit武器",
    "sectionType": "Weapon"
  },
  "MirageGun": {
    "displayName": "幻影机枪",
    "sectionType": "Weapon"
  },
  "MirageGunE": {
    "displayName": "幻影机枪精英",
    "sectionType": "Weapon"
  },
  "TankMakeupKit": {
    "displayName": "TankMakeupKit武器",
    "sectionType": "Weapon"
  },
  "SiegfriedCannon": {
    "displayName": "齐格弗里德加农炮",
    "sectionType": "Weapon"
  },
  "SiegfriedCannonE": {
    "displayName": "齐格弗里德加农炮精英",
    "sectionType": "Weapon"
  },
  "ChronoFreeze": {
    "displayName": "超时空冻结",
    "sectionType": "Weapon"
  },
  "ChronoFreezeE": {
    "displayName": "超时空冻结精英",
    "sectionType": "Weapon"
  },
  "HammerWeapon": {
    "displayName": "Hammer武器",
    "sectionType": "Weapon"
  },
  "ArtilleryBunkerWeapon": {
    "displayName": "ArtilleryBunker武器",
    "sectionType": "Weapon"
  },
  "ArtilleryBunkerWeaponE": {
    "displayName": "ArtilleryBunker精英武器",
    "sectionType": "Weapon"
  },
  "NeonwaspCutter": {
    "displayName": "NeonwaspCutter武器",
    "sectionType": "Weapon"
  },
  "RamWeldCutter": {
    "displayName": "冲撞WeldCutter",
    "sectionType": "Weapon"
  },
  "RamHackArena": {
    "displayName": "入侵冲撞竞技场",
    "sectionType": "Weapon"
  },
  "RamHackArenaB": {
    "displayName": "入侵冲撞竞技场B",
    "sectionType": "Weapon"
  },
  "NeutralizerCutter": {
    "displayName": "NeutralizerCutter武器",
    "sectionType": "Weapon"
  },
  "GrandCannonWeapon": {
    "displayName": "Grand加农炮武器",
    "sectionType": "Weapon"
  },
  "GrandCannonWeaponE": {
    "displayName": "Grand加农炮精英武器",
    "sectionType": "Weapon"
  },
  "GrandCannonPart": {
    "displayName": "Grand加农炮Part",
    "sectionType": "Weapon"
  },
  "CenturionCannon": {
    "displayName": "百夫长加农炮",
    "sectionType": "Weapon"
  },
  "CenturionCannonE": {
    "displayName": "百夫长精英加农炮",
    "sectionType": "Weapon"
  },
  "CenturionMissiles": {
    "displayName": "百夫长导弹",
    "sectionType": "Weapon"
  },
  "CenturionMissilesE": {
    "displayName": "百夫长精英导弹",
    "sectionType": "Weapon"
  },
  "FlakFake": {
    "displayName": "Flak伪装",
    "sectionType": "Weapon"
  },
  "FlakWeapon": {
    "displayName": "Flak武器",
    "sectionType": "Weapon"
  },
  "FlakGuyGun": {
    "displayName": "FlakGuy机枪",
    "sectionType": "Weapon"
  },
  "FlakGuyGunE": {
    "displayName": "FlakGuy机枪精英",
    "sectionType": "Weapon"
  },
  "UCFlakGuyGun": {
    "displayName": "驻军FlakGuy机枪",
    "sectionType": "Weapon"
  },
  "FlakGuyAAGun": {
    "displayName": "FlakGuy对空机枪",
    "sectionType": "Weapon"
  },
  "FVFlakGuyAAGun": {
    "displayName": "斯特瑞克步兵战车FlakGuy对空机枪",
    "sectionType": "Weapon"
  },
  "HalftrackGun": {
    "displayName": "Halftrack机枪",
    "sectionType": "Weapon"
  },
  "HalftrackGunE": {
    "displayName": "Halftrack机枪精英",
    "sectionType": "Weapon"
  },
  "HalftrackGunX": {
    "displayName": "Halftrack机枪 X",
    "sectionType": "Weapon"
  },
  "HalftrackGunXE": {
    "displayName": "Halftrack机枪XE",
    "sectionType": "Weapon"
  },
  "FlakTrackAAGun": {
    "displayName": "FlakTrack对空机枪",
    "sectionType": "Weapon"
  },
  "ZubrFake": {
    "displayName": "野牛伪装",
    "sectionType": "Weapon"
  },
  "ZubrGun": {
    "displayName": "野牛机枪",
    "sectionType": "Weapon"
  },
  "SeawolfCannon": {
    "displayName": "海狼加农炮",
    "sectionType": "Weapon"
  },
  "SeawolfCannonE": {
    "displayName": "海狼加农炮精英",
    "sectionType": "Weapon"
  },
  "SeawolfAAGun": {
    "displayName": "海狼对空机枪",
    "sectionType": "Weapon"
  },
  "Lunarblaster": {
    "displayName": "Lunarblaster武器",
    "sectionType": "Weapon"
  },
  "DiskLaser": {
    "displayName": "入侵飞碟激光",
    "sectionType": "Weapon"
  },
  "DiskLaserE": {
    "displayName": "入侵飞碟激光精英",
    "sectionType": "Weapon"
  },
  "DiskDrain": {
    "displayName": "入侵飞碟吸取",
    "sectionType": "Weapon"
  },
  "SalamanderBow": {
    "displayName": "火蜥蜴Bow",
    "sectionType": "Weapon"
  },
  "SalamanderBowAA": {
    "displayName": "火蜥蜴Bow对空",
    "sectionType": "Weapon"
  },
  "SalamanderBeam": {
    "displayName": "火蜥蜴光束",
    "sectionType": "Weapon"
  },
  "SalamanderBeamAA": {
    "displayName": "火蜥蜴光束对空",
    "sectionType": "Weapon"
  },
  "SalamanderField": {
    "displayName": "火蜥蜴力场",
    "sectionType": "Weapon"
  },
  "Megalaser": {
    "displayName": "Megalaser武器",
    "sectionType": "Weapon"
  },
  "MegalaserE": {
    "displayName": "Megalaser精英",
    "sectionType": "Weapon"
  },
  "MegalaserAA": {
    "displayName": "Megalaser对空",
    "sectionType": "Weapon"
  },
  "MegalaserAAE": {
    "displayName": "Megalaser精英对空武器",
    "sectionType": "Weapon"
  },
  "GotterLaser": {
    "displayName": "哥特激光",
    "sectionType": "Weapon"
  },
  "GotterLaserE": {
    "displayName": "哥特激光精英",
    "sectionType": "Weapon"
  },
  "GotterBow": {
    "displayName": "哥特Bow",
    "sectionType": "Weapon"
  },
  "GotterBowE": {
    "displayName": "哥特Bow精英",
    "sectionType": "Weapon"
  },
  "WormqueenBolt": {
    "displayName": "Wormqueen电弧",
    "sectionType": "Weapon"
  },
  "DeathBolt": {
    "displayName": "死亡电弧",
    "sectionType": "Weapon"
  },
  "DeathBoltAA": {
    "displayName": "死亡电弧对空",
    "sectionType": "Weapon"
  },
  "DeathBoltFragment": {
    "displayName": "死亡电弧破片",
    "sectionType": "Weapon"
  },
  "DeathFlash": {
    "displayName": "死亡Flash",
    "sectionType": "Weapon"
  },
  "TarchiaTarget": {
    "displayName": "多智龙火炮目标",
    "sectionType": "Weapon"
  },
  "TarchiaCannon": {
    "displayName": "多智龙火炮加农炮",
    "sectionType": "Weapon"
  },
  "TarchiaCannonOld": {
    "displayName": "多智龙火炮加农炮Old",
    "sectionType": "Weapon"
  },
  "PrometheusCharge": {
    "displayName": "PrometheusCharge武器",
    "sectionType": "Weapon"
  },
  "PrometheusCharge2": {
    "displayName": "PrometheusCharge 2武器",
    "sectionType": "Weapon"
  },
  "PrometheusBlast": {
    "displayName": "Prometheus爆破",
    "sectionType": "Weapon"
  },
  "RailguneerBlast": {
    "displayName": "Railguneer爆破",
    "sectionType": "Weapon"
  },
  "RailguneerBlast2": {
    "displayName": "Railguneer爆破 2",
    "sectionType": "Weapon"
  },
  "FVRailguneerBlast": {
    "displayName": "斯特瑞克步兵战车Railguneer爆破",
    "sectionType": "Weapon"
  },
  "RailgunTowerBlast": {
    "displayName": "Railgun塔爆破",
    "sectionType": "Weapon"
  },
  "RoachBlast": {
    "displayName": "Roach爆破",
    "sectionType": "Weapon"
  },
  "RoachBlastE": {
    "displayName": "Roach爆破精英",
    "sectionType": "Weapon"
  },
  "DracoCannon": {
    "displayName": "飞蜥弹射坦克加农炮",
    "sectionType": "Weapon"
  },
  "DracoCannonE": {
    "displayName": "飞蜥弹射坦克加农炮精英",
    "sectionType": "Weapon"
  },
  "DracoCannonDrone": {
    "displayName": "飞蜥弹射坦克加农炮Drone",
    "sectionType": "Weapon"
  },
  "DracoCannonDroneE": {
    "displayName": "飞蜥弹射坦克加农炮Drone精英",
    "sectionType": "Weapon"
  },
  "TeratornLaser": {
    "displayName": "Teratorn激光",
    "sectionType": "Weapon"
  },
  "TeratornFake": {
    "displayName": "Teratorn伪装",
    "sectionType": "Weapon"
  },
  "TeratornRocket": {
    "displayName": "Teratorn火箭",
    "sectionType": "Weapon"
  },
  "MantaFake": {
    "displayName": "魔鬼鱼无人防空舰伪装",
    "sectionType": "Weapon"
  },
  "MantaRocket": {
    "displayName": "魔鬼鱼无人防空舰火箭",
    "sectionType": "Weapon"
  },
  "MantaConfuseRay": {
    "displayName": "魔鬼鱼无人防空舰混乱Ray",
    "sectionType": "Weapon"
  },
  "FlyingDroneRocket": {
    "displayName": "FlyingDrone火箭",
    "sectionType": "Weapon"
  },
  "CyclopsCannon": {
    "displayName": "独眼巨人加农炮",
    "sectionType": "Weapon"
  },
  "CyclopsCannonE": {
    "displayName": "独眼巨人加农炮精英",
    "sectionType": "Weapon"
  },
  "CyclopsBuff": {
    "displayName": "独眼巨人增益",
    "sectionType": "Weapon"
  },
  "AvalonCharge": {
    "displayName": "AvalonCharge武器",
    "sectionType": "Weapon"
  },
  "AvalonCharge2": {
    "displayName": "AvalonCharge 2武器",
    "sectionType": "Weapon"
  },
  "AvalonBlast": {
    "displayName": "Avalon爆破",
    "sectionType": "Weapon"
  },
  "MercuryOverdrive": {
    "displayName": "墨丘利卫星系统终端Overdrive",
    "sectionType": "Weapon"
  },
  "MercuryLaser": {
    "displayName": "墨丘利卫星系统终端激光",
    "sectionType": "Weapon"
  },
  "AthenaStrike": {
    "displayName": "Athena打击",
    "sectionType": "Weapon"
  },
  "AthenaStrikeE": {
    "displayName": "Athena打击精英",
    "sectionType": "Weapon"
  },
  "AthenaLaser": {
    "displayName": "Athena激光",
    "sectionType": "Weapon"
  },
  "VentrexBeam": {
    "displayName": "冰雹轰炸机光束",
    "sectionType": "Weapon"
  },
  "VentrexBeamE": {
    "displayName": "冰雹轰炸机光束精英",
    "sectionType": "Weapon"
  },
  "Comet": {
    "displayName": "Comet武器",
    "sectionType": "Weapon"
  },
  "CometFragment": {
    "displayName": "Comet破片",
    "sectionType": "Weapon"
  },
  "SuperComet": {
    "displayName": "超级Comet",
    "sectionType": "Weapon"
  },
  "SuperCometFragment": {
    "displayName": "超级Comet破片",
    "sectionType": "Weapon"
  },
  "SuperCometFragmentB": {
    "displayName": "超级Comet破片B",
    "sectionType": "Weapon"
  },
  "PrismShot": {
    "displayName": "光棱Shot",
    "sectionType": "Weapon"
  },
  "PrismShotE": {
    "displayName": "光棱Shot精英",
    "sectionType": "Weapon"
  },
  "PrismShotFragment": {
    "displayName": "光棱Shot破片",
    "sectionType": "Weapon"
  },
  "PrismShotSupport": {
    "displayName": "光棱ShotSupport",
    "sectionType": "Weapon"
  },
  "FTShot": {
    "displayName": "FTShot武器",
    "sectionType": "Weapon"
  },
  "RuptureBeam": {
    "displayName": "Rupture光束",
    "sectionType": "Weapon"
  },
  "ScavengerTankCannon": {
    "displayName": "拾荒者Tank加农炮",
    "sectionType": "Weapon"
  },
  "ScavengerTankCannonE": {
    "displayName": "拾荒者Tank加农炮精英",
    "sectionType": "Weapon"
  },
  "ScavengerMachineGun": {
    "displayName": "拾荒者Machine机枪",
    "sectionType": "Weapon"
  },
  "ScavengerMachineGunE": {
    "displayName": "拾荒者Machine机枪精英",
    "sectionType": "Weapon"
  },
  "ScavengerTankKiller": {
    "displayName": "拾荒者TankKiller",
    "sectionType": "Weapon"
  },
  "ScavengerTankKillerE": {
    "displayName": "拾荒者TankKiller精英",
    "sectionType": "Weapon"
  },
  "ScavengerHECannon": {
    "displayName": "拾荒者高爆加农炮",
    "sectionType": "Weapon"
  },
  "ScavengerLaser": {
    "displayName": "拾荒者激光",
    "sectionType": "Weapon"
  },
  "ScavengerLaserE": {
    "displayName": "拾荒者激光精英",
    "sectionType": "Weapon"
  },
  "ScavengerSuperlaser": {
    "displayName": "拾荒者Superlaser",
    "sectionType": "Weapon"
  },
  "ScavengerSuperlaserE": {
    "displayName": "拾荒者Superlaser精英",
    "sectionType": "Weapon"
  },
  "ScavengerHail": {
    "displayName": "拾荒者Hail",
    "sectionType": "Weapon"
  },
  "ScavengerVenom": {
    "displayName": "拾荒者毒液",
    "sectionType": "Weapon"
  },
  "ScavengerRailgun": {
    "displayName": "拾荒者Railgun",
    "sectionType": "Weapon"
  },
  "ScavengerComet": {
    "displayName": "拾荒者Comet",
    "sectionType": "Weapon"
  },
  "ScavengerCometE": {
    "displayName": "拾荒者Comet精英",
    "sectionType": "Weapon"
  },
  "ScavengerTeslaBolt": {
    "displayName": "拾荒者磁暴电弧",
    "sectionType": "Weapon"
  },
  "ScavengerTeslaBoltE": {
    "displayName": "拾荒者精英磁暴电弧",
    "sectionType": "Weapon"
  },
  "ScavengerMedusa": {
    "displayName": "拾荒者Medusa",
    "sectionType": "Weapon"
  },
  "ScavengerConfuseRay": {
    "displayName": "拾荒者混乱Ray",
    "sectionType": "Weapon"
  },
  "ScavengerRadBeam": {
    "displayName": "拾荒者辐射光束",
    "sectionType": "Weapon"
  },
  "ScavengerJammer": {
    "displayName": "拾荒者干扰器",
    "sectionType": "Weapon"
  },
  "ScavengerNeutron": {
    "displayName": "拾荒者中子",
    "sectionType": "Weapon"
  },
  "ScavengerGoldRock": {
    "displayName": "拾荒者Gold岩石",
    "sectionType": "Weapon"
  },
  "ScavengerTarcCannon": {
    "displayName": "拾荒者Tarc加农炮",
    "sectionType": "Weapon"
  },
  "ScavengerCryo": {
    "displayName": "拾荒者冷冻",
    "sectionType": "Weapon"
  },
  "ScavengerCryoE": {
    "displayName": "拾荒者冷冻精英",
    "sectionType": "Weapon"
  },
  "SuperRuptureBeam": {
    "displayName": "超级Rupture光束",
    "sectionType": "Weapon"
  },
  "MagneticBeam": {
    "displayName": "Magnetic光束",
    "sectionType": "Weapon"
  },
  "MagneticBeamE": {
    "displayName": "Magnetic光束精英",
    "sectionType": "Weapon"
  },
  "MagneticPart": {
    "displayName": "MagneticPart武器",
    "sectionType": "Weapon"
  },
  "MagneShake": {
    "displayName": "MagneShake武器",
    "sectionType": "Weapon"
  },
  "MagneShakeE": {
    "displayName": "MagneShake精英",
    "sectionType": "Weapon"
  },
  "LancerAirslash": {
    "displayName": "枪骑兵Airslash",
    "sectionType": "Weapon"
  },
  "LancerAirslash2": {
    "displayName": "枪骑兵Airslash 2",
    "sectionType": "Weapon"
  },
  "FVLancerAirslash": {
    "displayName": "斯特瑞克步兵战车枪骑兵Airslash",
    "sectionType": "Weapon"
  },
  "UCLancerAirslash": {
    "displayName": "驻军枪骑兵Airslash",
    "sectionType": "Weapon"
  },
  "LancerFrag": {
    "displayName": "枪骑兵破片",
    "sectionType": "Weapon"
  },
  "DLancerAirslash": {
    "displayName": "D枪骑兵Airslash",
    "sectionType": "Weapon"
  },
  "DLancerAirslash2": {
    "displayName": "D枪骑兵Airslash 2",
    "sectionType": "Weapon"
  },
  "DLancerFrag": {
    "displayName": "D枪骑兵破片",
    "sectionType": "Weapon"
  },
  "SwordfishAirslash": {
    "displayName": "剑鱼Airslash",
    "sectionType": "Weapon"
  },
  "SwordfishFrag": {
    "displayName": "剑鱼破片",
    "sectionType": "Weapon"
  },
  "InfAreaRemover": {
    "displayName": "InfAreaRemover武器",
    "sectionType": "Weapon"
  },
  "AirAreaRemover": {
    "displayName": "AirAreaRemover武器",
    "sectionType": "Weapon"
  },
  "NavyAreaRemover": {
    "displayName": "NavyAreaRemover武器",
    "sectionType": "Weapon"
  },
  "HalfLifeWeapon": {
    "displayName": "Half生命武器",
    "sectionType": "Weapon"
  },
  "Demobomb": {
    "displayName": "Demobomb武器",
    "sectionType": "Weapon"
  },
  "DemobombE": {
    "displayName": "Demobomb精英",
    "sectionType": "Weapon"
  },
  "Madbomb": {
    "displayName": "Madbomb武器",
    "sectionType": "Weapon"
  },
  "Scorchbomb": {
    "displayName": "Scorchbomb武器",
    "sectionType": "Weapon"
  },
  "ScorchbombE": {
    "displayName": "Scorchbomb精英",
    "sectionType": "Weapon"
  },
  "Scorchbomb2": {
    "displayName": "Scorchbomb 2武器",
    "sectionType": "Weapon"
  },
  "Scorchbomb2E": {
    "displayName": "Scorchbomb 2精英",
    "sectionType": "Weapon"
  },
  "ScorchbombFrag": {
    "displayName": "Scorchbomb破片",
    "sectionType": "Weapon"
  },
  "ScorchbombD": {
    "displayName": "Scorchbomb D武器",
    "sectionType": "Weapon"
  },
  "Nukebomb": {
    "displayName": "核弹",
    "sectionType": "Unknown"
  },
  "FTankLaser": {
    "displayName": "FTank激光",
    "sectionType": "Weapon"
  },
  "FTankLaserE": {
    "displayName": "FTank激光精英",
    "sectionType": "Weapon"
  },
  "FTankPiles": {
    "displayName": "FTankPiles武器",
    "sectionType": "Weapon"
  },
  "FTankCannon": {
    "displayName": "FTank加农炮",
    "sectionType": "Weapon"
  },
  "ComancheLaser": {
    "displayName": "Comanche激光",
    "sectionType": "Weapon"
  },
  "ComancheLaserE": {
    "displayName": "Comanche激光精英",
    "sectionType": "Weapon"
  },
  "ComancheStrike": {
    "displayName": "Comanche打击",
    "sectionType": "Weapon"
  },
  "ComancheStrikeE": {
    "displayName": "Comanche打击精英",
    "sectionType": "Weapon"
  },
  "ComancheHeal": {
    "displayName": "Comanche治疗",
    "sectionType": "Weapon"
  },
  "LongbowStrike": {
    "displayName": "长弓打击",
    "sectionType": "Weapon"
  },
  "LongbowStrikeE": {
    "displayName": "长弓打击精英",
    "sectionType": "Weapon"
  },
  "AeroblazeFake": {
    "displayName": "Aeroblaze伪装",
    "sectionType": "Weapon"
  },
  "AeroblazeLaser": {
    "displayName": "Aeroblaze激光",
    "sectionType": "Weapon"
  },
  "AeroblazeLaserE": {
    "displayName": "Aeroblaze激光精英",
    "sectionType": "Weapon"
  },
  "AeroblazeSniper": {
    "displayName": "Aeroblaze狙击枪",
    "sectionType": "Weapon"
  },
  "AeroblazeSniperE": {
    "displayName": "Aeroblaze狙击枪精英",
    "sectionType": "Weapon"
  },
  "WarRigProj": {
    "displayName": "WarRig抛射体",
    "sectionType": "Projectile"
  },
  "TimeWarpP1": {
    "displayName": "时间传送抛射体 1",
    "sectionType": "Projectile"
  },
  "TimeWarpP2": {
    "displayName": "时间传送抛射体 2",
    "sectionType": "Projectile"
  },
  "SharkWaveP": {
    "displayName": "鲨鱼波抛射体",
    "sectionType": "Projectile"
  },
  "SharkWaveP2": {
    "displayName": "鲨鱼波抛射体 2",
    "sectionType": "Projectile"
  },
  "SharkWaveP3": {
    "displayName": "鲨鱼波抛射体 3",
    "sectionType": "Projectile"
  },
  "SharkWaveP4": {
    "displayName": "鲨鱼波抛射体 4",
    "sectionType": "Projectile"
  },
  "SharkWaveP5": {
    "displayName": "鲨鱼波抛射体 5",
    "sectionType": "Projectile"
  },
  "SuperIronWeaponP": {
    "displayName": "超级无敌武器抛射体",
    "sectionType": "Unknown"
  },
  "SuperSuppressP": {
    "displayName": "超级压制抛射体",
    "sectionType": "Projectile"
  },
  "SuperJammerP": {
    "displayName": "超级干扰器抛射体",
    "sectionType": "Projectile"
  },
  "SuperCryoP": {
    "displayName": "超级冷冻抛射体",
    "sectionType": "Projectile"
  },
  "GreenArrowP": {
    "displayName": "绿色Arrow抛射体",
    "sectionType": "Projectile"
  },
  "ExtendLifeP": {
    "displayName": "延长生命抛射体",
    "sectionType": "Projectile"
  },
  "StructureBuffLargeP": {
    "displayName": "建筑增益大型抛射体",
    "sectionType": "Projectile"
  },
  "EurekaBlastFragP": {
    "displayName": "尤里卡爆破破片抛射体",
    "sectionType": "Projectile"
  },
  "MadBlastFragP": {
    "displayName": "MAD 爆破破片抛射体",
    "sectionType": "Projectile"
  },
  "MadMineFragP": {
    "displayName": "MAD 地雷破片抛射体",
    "sectionType": "Projectile"
  },
  "ConfuseFlareFragP": {
    "displayName": "混乱信号弹破片抛射体",
    "sectionType": "Projectile"
  },
  "EurekaBlastP": {
    "displayName": "尤里卡爆破抛射体",
    "sectionType": "Projectile"
  },
  "KrukovSwordP": {
    "displayName": "库可夫剑抛射体",
    "sectionType": "Projectile"
  },
  "KrukovSwordFragP": {
    "displayName": "库可夫剑破片抛射体",
    "sectionType": "Projectile"
  },
  "MadBlastStartAIP": {
    "displayName": "MAD 爆破启动AIP",
    "sectionType": "Projectile"
  },
  "MadBlastStartP": {
    "displayName": "MAD 爆破启动抛射体",
    "sectionType": "Projectile"
  },
  "MadMineStartP": {
    "displayName": "MAD 地雷启动抛射体",
    "sectionType": "Projectile"
  },
  "MadMineP": {
    "displayName": "MAD 地雷抛射体",
    "sectionType": "Projectile"
  },
  "DefenseBuffP": {
    "displayName": "防御增益抛射体",
    "sectionType": "Projectile"
  },
  "HypergateP": {
    "displayName": "超门抛射体",
    "sectionType": "Projectile"
  },
  "StructureBuffP": {
    "displayName": "建筑增益抛射体",
    "sectionType": "Projectile"
  },
  "ShieldGeneratorP": {
    "displayName": "护盾发生器抛射体",
    "sectionType": "Projectile"
  },
  "ShutDownFakeP": {
    "displayName": "ShutDown伪装抛射体",
    "sectionType": "Projectile"
  },
  "RamHackArenaP": {
    "displayName": "入侵冲撞竞技场抛射体",
    "sectionType": "Projectile"
  },
  "MegaarenaP": {
    "displayName": "巨齿鲨竞技场抛射体",
    "sectionType": "Projectile"
  },
  "OrcinusWaveP": {
    "displayName": "逆戟鲸波抛射体",
    "sectionType": "Projectile"
  },
  "SodarBoostP": {
    "displayName": "声呐强化抛射体",
    "sectionType": "Projectile"
  },
  "DisruptorFieldP": {
    "displayName": "Disruptor力场抛射体",
    "sectionType": "Projectile"
  },
  "StealthGeneratorP": {
    "displayName": "隐形发生器抛射体",
    "sectionType": "Projectile"
  },
  "HazequadGeneratorP": {
    "displayName": "迷雾四旋翼发生器抛射体",
    "sectionType": "Projectile"
  },
  "SpinGeneratorP": {
    "displayName": "旋转发生器抛射体",
    "sectionType": "Projectile"
  },
  "GSpinGeneratorP": {
    "displayName": "G旋转发生器抛射体",
    "sectionType": "Projectile"
  },
  "GSpinGeneratorRealP": {
    "displayName": "G旋转发生器实体抛射体",
    "sectionType": "Projectile"
  },
  "LightningRodP": {
    "displayName": "闪电避雷针抛射体",
    "sectionType": "Projectile"
  },
  "MadBlastP": {
    "displayName": "MAD 爆破抛射体",
    "sectionType": "Projectile"
  },
  "ScorchStartP": {
    "displayName": "灼烧启动抛射体",
    "sectionType": "Projectile"
  },
  "ScorchStartPE": {
    "displayName": "灼烧启动PE",
    "sectionType": "Projectile"
  },
  "ScorchP": {
    "displayName": "灼烧抛射体",
    "sectionType": "Projectile"
  },
  "HuntressProj": {
    "displayName": "女猎手抛射体",
    "sectionType": "Projectile"
  },
  "ArchelonProj": {
    "displayName": "冥卫抛射体",
    "sectionType": "Projectile"
  },
  "UCLancerProj": {
    "displayName": "驻军枪骑兵抛射体",
    "sectionType": "Unknown"
  },
  "LancerProj": {
    "displayName": "枪骑兵抛射体",
    "sectionType": "Projectile"
  },
  "DLancerProj": {
    "displayName": "D枪骑兵抛射体",
    "sectionType": "Projectile"
  },
  "SwordfishProj": {
    "displayName": "剑鱼抛射体",
    "sectionType": "Projectile"
  },
  "LancerProj2": {
    "displayName": "枪骑兵抛射体 2",
    "sectionType": "Unknown"
  },
  "LancerFragProj2": {
    "displayName": "枪骑兵破片抛射体 2",
    "sectionType": "Unknown"
  },
  "LancerFragProj": {
    "displayName": "枪骑兵破片抛射体",
    "sectionType": "Projectile"
  },
  "SeawolfProj": {
    "displayName": "海狼抛射体",
    "sectionType": "Projectile"
  },
  "GharialProj": {
    "displayName": "长吻鳄抛射体",
    "sectionType": "Projectile"
  },
  "LionheartP": {
    "displayName": "狮心抛射体",
    "sectionType": "Projectile"
  },
  "VenomP": {
    "displayName": "毒液抛射体",
    "sectionType": "Projectile"
  },
  "StratoP": {
    "displayName": "同温层抛射体",
    "sectionType": "Projectile"
  },
  "RiotGunP": {
    "displayName": "防暴机枪抛射体",
    "sectionType": "Projectile"
  },
  "RiotGrenadeP": {
    "displayName": "防暴榴弹抛射体",
    "sectionType": "Projectile"
  },
  "GotterDart": {
    "displayName": "哥特飞镖",
    "sectionType": "Projectile"
  },
  "StalkerProj": {
    "displayName": "潜行者抛射体",
    "sectionType": "Projectile"
  },
  "StalkerDrainProj": {
    "displayName": "潜行者吸取抛射体",
    "sectionType": "Projectile"
  },
  "CataProj": {
    "displayName": "灾厄坦克抛射体",
    "sectionType": "Projectile"
  },
  "Cannon3": {
    "displayName": "加农炮 3",
    "sectionType": "Projectile"
  },
  "Cannon3E": {
    "displayName": "加农炮 3精英",
    "sectionType": "Projectile"
  },
  "ToxicPill": {
    "displayName": "毒素药丸",
    "sectionType": "Projectile"
  },
  "ChaosPill": {
    "displayName": "混乱药丸",
    "sectionType": "Unknown"
  },
  "AcidProj": {
    "displayName": "Acid抛射体",
    "sectionType": "Projectile"
  },
  "PyroProj": {
    "displayName": "Pyro抛射体",
    "sectionType": "Projectile"
  },
  "PyroProjE": {
    "displayName": "Pyro精英抛射体",
    "sectionType": "Projectile"
  },
  "FlameProj": {
    "displayName": "火焰抛射体",
    "sectionType": "Projectile"
  },
  "FlameProjE": {
    "displayName": "火焰精英抛射体",
    "sectionType": "Projectile"
  },
  "InvisibleInaccAA": {
    "displayName": "隐形Inacc对空",
    "sectionType": "Projectile"
  },
  "GyroProj": {
    "displayName": "旋翼飞行兵抛射体",
    "sectionType": "Projectile"
  },
  "GyroProjE": {
    "displayName": "旋翼飞行兵精英抛射体",
    "sectionType": "Projectile"
  },
  "AeroFake": {
    "displayName": "天火防空坦克伪装",
    "sectionType": "Projectile"
  },
  "AeroProj": {
    "displayName": "天火防空坦克抛射体",
    "sectionType": "Projectile"
  },
  "FortMisl": {
    "displayName": "FortMisl抛射体",
    "sectionType": "Projectile"
  },
  "FortMislE": {
    "displayName": "FortMisl精英",
    "sectionType": "Projectile"
  },
  "ZubrProj": {
    "displayName": "野牛抛射体",
    "sectionType": "Unknown"
  },
  "ZubrProjE": {
    "displayName": "野牛精英抛射体",
    "sectionType": "Unknown"
  },
  "FlakTProj": {
    "displayName": "Flak T抛射体",
    "sectionType": "Projectile"
  },
  "BuratinoRocket": {
    "displayName": "Buratino火箭",
    "sectionType": "Projectile"
  },
  "BuratinoRocketSpread": {
    "displayName": "Buratino火箭Spread",
    "sectionType": "Projectile"
  },
  "BuratinoRocketE": {
    "displayName": "Buratino火箭精英",
    "sectionType": "Projectile"
  },
  "BuratinoRocketSpreadE": {
    "displayName": "Buratino火箭Spread精英",
    "sectionType": "Projectile"
  },
  "MP5Proj": {
    "displayName": "MP 5抛射体",
    "sectionType": "Projectile"
  },
  "ConfuseProjAcc": {
    "displayName": "混乱抛射体Acc",
    "sectionType": "Unknown"
  },
  "ConfuseProj": {
    "displayName": "混乱抛射体",
    "sectionType": "Projectile"
  },
  "ComaStrike": {
    "displayName": "战鹰直升机打击",
    "sectionType": "Projectile"
  },
  "ComaStrikeE": {
    "displayName": "战鹰直升机打击精英",
    "sectionType": "Projectile"
  },
  "MTStrike": {
    "displayName": "MT打击",
    "sectionType": "Projectile"
  },
  "MTStrikeE": {
    "displayName": "MT打击精英",
    "sectionType": "Projectile"
  },
  "JagdStrike": {
    "displayName": "Jagd打击",
    "sectionType": "Projectile"
  },
  "JagdStrikeE": {
    "displayName": "Jagd打击精英",
    "sectionType": "Projectile"
  },
  "ReaperProj": {
    "displayName": "Reaper抛射体",
    "sectionType": "Projectile"
  },
  "SpeederProj": {
    "displayName": "Speeder抛射体",
    "sectionType": "Projectile"
  },
  "SpeederProjE": {
    "displayName": "Speeder精英抛射体",
    "sectionType": "Projectile"
  },
  "SpeederProjB": {
    "displayName": "Speeder抛射体B",
    "sectionType": "Projectile"
  },
  "SpeederProjBE": {
    "displayName": "Speeder抛射体BE",
    "sectionType": "Projectile"
  },
  "HarpoonProj": {
    "displayName": "鱼叉抛射体",
    "sectionType": "Unknown"
  },
  "StealthMissileProj": {
    "displayName": "隐形导弹抛射体",
    "sectionType": "Projectile"
  },
  "StealthMissileProjE": {
    "displayName": "隐形导弹精英抛射体",
    "sectionType": "Projectile"
  },
  "Invisible": {
    "displayName": "隐形",
    "sectionType": "Projectile"
  },
  "InvisibleQuetz": {
    "displayName": "隐形羽蛇",
    "sectionType": "Projectile"
  },
  "InvisibleLaser": {
    "displayName": "隐形激光",
    "sectionType": "Projectile"
  },
  "Invisible3": {
    "displayName": "隐形 3",
    "sectionType": "Projectile"
  },
  "BuzzardProj": {
    "displayName": "秃鹰抛射体",
    "sectionType": "Projectile"
  },
  "ThorProjZ": {
    "displayName": "雷神抛射体 Z",
    "sectionType": "Unknown"
  },
  "ThorProj": {
    "displayName": "雷神抛射体",
    "sectionType": "Projectile"
  },
  "StrikerGunRunP": {
    "displayName": "打击者扫射抛射体",
    "sectionType": "Projectile"
  },
  "Invisible4": {
    "displayName": "隐形 4",
    "sectionType": "Projectile"
  },
  "InvisibleVertical": {
    "displayName": "隐形Vertical",
    "sectionType": "Projectile"
  },
  "SuperSniperP": {
    "displayName": "超级狙击枪抛射体",
    "sectionType": "Projectile"
  },
  "MineBombP": {
    "displayName": "地雷炸弹抛射体",
    "sectionType": "Projectile"
  },
  "CryomineBombP": {
    "displayName": "Cryomine炸弹抛射体",
    "sectionType": "Projectile"
  },
  "GenomineBombP": {
    "displayName": "基因地雷炸弹抛射体",
    "sectionType": "Projectile"
  },
  "BladeInvisible": {
    "displayName": "刀刃隐形",
    "sectionType": "Projectile"
  },
  "BladeInvisibleE": {
    "displayName": "刀刃隐形精英",
    "sectionType": "Projectile"
  },
  "BladeInvisible2": {
    "displayName": "刀刃隐形 2",
    "sectionType": "Projectile"
  },
  "BladeInvisible2E": {
    "displayName": "刀刃隐形 2精英",
    "sectionType": "Projectile"
  },
  "InvisibleEMP": {
    "displayName": "隐形电磁脉冲",
    "sectionType": "Projectile"
  },
  "InvisibleWork": {
    "displayName": "隐形Work",
    "sectionType": "Projectile"
  },
  "InvisibleMerc": {
    "displayName": "隐形Merc",
    "sectionType": "Projectile"
  },
  "RoadrunnerNerfP": {
    "displayName": "Roadrunner削弱抛射体",
    "sectionType": "Projectile"
  },
  "InvisibleSentry": {
    "displayName": "隐形Sentry",
    "sectionType": "Projectile"
  },
  "InvisibleLow": {
    "displayName": "隐形Low",
    "sectionType": "Projectile"
  },
  "InvisibleLowBrute": {
    "displayName": "隐形Low狂兽人",
    "sectionType": "Projectile"
  },
  "InvisibleLowChaos": {
    "displayName": "隐形Low混乱",
    "sectionType": "Projectile"
  },
  "InvisibleMedium": {
    "displayName": "隐形Medium",
    "sectionType": "Projectile"
  },
  "InvisibleHigh": {
    "displayName": "隐形High",
    "sectionType": "Projectile"
  },
  "MutationRailgunP": {
    "displayName": "基因震爆Railgun抛射体",
    "sectionType": "Projectile"
  },
  "InvisibleElectric": {
    "displayName": "隐形Electric",
    "sectionType": "Projectile"
  },
  "InvisibleCryo": {
    "displayName": "隐形冷冻",
    "sectionType": "Projectile"
  },
  "FVBondP": {
    "displayName": "斯特瑞克步兵战车Bond抛射体",
    "sectionType": "Projectile"
  },
  "IceBeamP": {
    "displayName": "冰光束抛射体",
    "sectionType": "Projectile"
  },
  "BlizzardP": {
    "displayName": "Blizzard抛射体",
    "sectionType": "Projectile"
  },
  "ScavengerCryoP": {
    "displayName": "拾荒者冷冻抛射体",
    "sectionType": "Projectile"
  },
  "CryobeamIP": {
    "displayName": "冷冻光束IP",
    "sectionType": "Projectile"
  },
  "CryobeamIPAI": {
    "displayName": "冷冻光束IPAI",
    "sectionType": "Projectile"
  },
  "CryobeamIPAnimA": {
    "displayName": "冷冻光束IP动画A",
    "sectionType": "Projectile"
  },
  "CryobeamIVP": {
    "displayName": "冷冻光束IVP",
    "sectionType": "Projectile"
  },
  "CryobeamIVPAI": {
    "displayName": "冷冻光束IVPAI",
    "sectionType": "Projectile"
  },
  "CryobeamIVPAnimA": {
    "displayName": "冷冻光束IVP动画A",
    "sectionType": "Projectile"
  },
  "Cryobeam6P": {
    "displayName": "冷冻光束 6抛射体",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAI": {
    "displayName": "冷冻光束6PAI",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAnimA": {
    "displayName": "冷冻光束6抛射体动画A",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAnimB": {
    "displayName": "冷冻光束6抛射体动画B",
    "sectionType": "Projectile"
  },
  "Cryobeam6PAnimC": {
    "displayName": "冷冻光束6抛射体动画C",
    "sectionType": "Projectile"
  },
  "ArtCannonBall": {
    "displayName": "Art加农炮Ball",
    "sectionType": "Projectile"
  },
  "TarchiaCannonBall": {
    "displayName": "多智龙火炮加农炮Ball",
    "sectionType": "Projectile"
  },
  "GrandCannonBall": {
    "displayName": "Grand加农炮Ball",
    "sectionType": "Projectile"
  },
  "GrandCannonBallE": {
    "displayName": "Grand加农炮Ball精英",
    "sectionType": "Projectile"
  },
  "GrandCannonShrapnel": {
    "displayName": "Grand加农炮Shrapnel",
    "sectionType": "Projectile"
  },
  "Ballistic": {
    "displayName": "Ballistic抛射体",
    "sectionType": "Projectile"
  },
  "BallisticInacc": {
    "displayName": "BallisticInacc抛射体",
    "sectionType": "Projectile"
  },
  "BallisticShrapnel": {
    "displayName": "BallisticShrapnel抛射体",
    "sectionType": "Projectile"
  },
  "TarchiaProj": {
    "displayName": "多智龙火炮抛射体",
    "sectionType": "Projectile"
  },
  "TarchiaProjFake": {
    "displayName": "多智龙火炮抛射体伪装",
    "sectionType": "Projectile"
  },
  "AntiGravityProj": {
    "displayName": "AntiGravity抛射体",
    "sectionType": "Projectile"
  },
  "InvisibleShadray": {
    "displayName": "隐形Shadray",
    "sectionType": "Projectile"
  },
  "InvisibleShadrayAA": {
    "displayName": "隐形Shadray对空",
    "sectionType": "Projectile"
  },
  "InvisibleAll": {
    "displayName": "隐形鳄鱼",
    "sectionType": "Projectile"
  },
  "InvisibleAA": {
    "displayName": "隐形对空",
    "sectionType": "Projectile"
  },
  "PsychicControl": {
    "displayName": "心灵Control",
    "sectionType": "Projectile"
  },
  "DybbukControl": {
    "displayName": "恶灵Control",
    "sectionType": "Projectile"
  },
  "Psychic": {
    "displayName": "心灵",
    "sectionType": "Projectile"
  },
  "QuadShell": {
    "displayName": "迷雾机动车炮弹",
    "sectionType": "Projectile"
  },
  "AresCannonProj": {
    "displayName": "Ares加农炮抛射体",
    "sectionType": "Projectile"
  },
  "DeathBoltP": {
    "displayName": "死亡电弧抛射体",
    "sectionType": "Projectile"
  },
  "Null": {
    "displayName": "空抛射体",
    "sectionType": "Unknown"
  },
  "CyCannon": {
    "displayName": "Cy加农炮",
    "sectionType": "Projectile"
  },
  "WarpnodeBombP": {
    "displayName": "Warpnode炸弹抛射体",
    "sectionType": "Projectile"
  },
  "SuppressorBombP": {
    "displayName": "Suppressor炸弹抛射体",
    "sectionType": "Projectile"
  },
  "DuneGrenade": {
    "displayName": "沙丘骑兵榴弹",
    "sectionType": "Projectile"
  },
  "NuwaProj": {
    "displayName": "Nuwa抛射体",
    "sectionType": "Projectile"
  },
  "CannonScourge": {
    "displayName": "加农炮Scourge",
    "sectionType": "Projectile"
  },
  "CannonInviso": {
    "displayName": "加农炮Inviso",
    "sectionType": "Projectile"
  },
  "CannonDraco": {
    "displayName": "加农炮飞蜥弹射坦克",
    "sectionType": "Projectile"
  },
  "CannonAbrams": {
    "displayName": "加农炮Abrams",
    "sectionType": "Projectile"
  },
  "CannonCavalier": {
    "displayName": "加农炮Cavalier",
    "sectionType": "Projectile"
  },
  "Grenade": {
    "displayName": "榴弹",
    "sectionType": "Unknown"
  },
  "BoidSuperUp": {
    "displayName": "机械造物超级Up",
    "sectionType": "Projectile"
  },
  "BoidSuperDown": {
    "displayName": "机械造物超级Down",
    "sectionType": "Projectile"
  },
  "GodsbaneP": {
    "displayName": "Godsbane抛射体",
    "sectionType": "Projectile"
  },
  "GodsbaneFragP": {
    "displayName": "Godsbane破片抛射体",
    "sectionType": "Projectile"
  },
  "ScavMedusaP": {
    "displayName": "拾荒者Medusa抛射体",
    "sectionType": "Projectile"
  },
  "UCLongbowProj": {
    "displayName": "驻军长弓抛射体",
    "sectionType": "Unknown"
  },
  "UCLongbowProjE": {
    "displayName": "驻军长弓精英抛射体",
    "sectionType": "Unknown"
  },
  "SeitaadEMPCannonProj": {
    "displayName": "塞泰龙弩炮电磁脉冲加农炮抛射体",
    "sectionType": "Projectile"
  },
  "SeitaadMissileP": {
    "displayName": "塞泰龙弩炮导弹抛射体",
    "sectionType": "Projectile"
  },
  "LongbowProj": {
    "displayName": "长弓抛射体",
    "sectionType": "Projectile"
  },
  "LongbowProjE": {
    "displayName": "长弓精英抛射体",
    "sectionType": "Projectile"
  },
  "SeekerInviso": {
    "displayName": "追踪者Inviso",
    "sectionType": "Unknown"
  },
  "PiranhaProj": {
    "displayName": "食人鱼抛射体",
    "sectionType": "Projectile"
  },
  "PiranhaProjE": {
    "displayName": "食人鱼精英抛射体",
    "sectionType": "Projectile"
  },
  "JUMP": {
    "displayName": "JUMP抛射体",
    "sectionType": "Projectile"
  },
  "FuryP": {
    "displayName": "Fury抛射体",
    "sectionType": "Projectile"
  },
  "DiverbeeP": {
    "displayName": "Diverbee抛射体",
    "sectionType": "Projectile"
  },
  "WastelotP": {
    "displayName": "Wastelot抛射体",
    "sectionType": "Projectile"
  },
  "CHITZJUMP": {
    "displayName": "CHITZJUMP抛射体",
    "sectionType": "Projectile"
  },
  "KRUKJUMP": {
    "displayName": "库可夫跳跃",
    "sectionType": "Unknown"
  },
  "SQDJUMP": {
    "displayName": "乌贼跳跃",
    "sectionType": "Unknown"
  },
  "GiantNukeUp": {
    "displayName": "Giant战术核弹攻击Up",
    "sectionType": "Projectile"
  },
  "GiantNukeDown": {
    "displayName": "Giant战术核弹攻击Down",
    "sectionType": "Projectile"
  },
  "SmallNukeUp": {
    "displayName": "小型战术核弹攻击Up",
    "sectionType": "Projectile"
  },
  "SmallNukeDown": {
    "displayName": "小型战术核弹攻击Down",
    "sectionType": "Projectile"
  },
  "HeatSeeker": {
    "displayName": "Heat追踪者",
    "sectionType": "Unknown"
  },
  "SHTorpedo": {
    "displayName": "SH鱼雷",
    "sectionType": "Projectile"
  },
  "Torpedo": {
    "displayName": "鱼雷",
    "sectionType": "Projectile"
  },
  "TorpedoE": {
    "displayName": "鱼雷精英",
    "sectionType": "Projectile"
  },
  "TorpedoX": {
    "displayName": "鱼雷 X",
    "sectionType": "Projectile"
  },
  "TorpedoXE": {
    "displayName": "鱼雷XE",
    "sectionType": "Projectile"
  },
  "NautTorpedo": {
    "displayName": "鹦鹉螺磁力潜艇鱼雷",
    "sectionType": "Projectile"
  },
  "NautTorpedoE": {
    "displayName": "鹦鹉螺磁力潜艇鱼雷精英",
    "sectionType": "Projectile"
  },
  "RTorpedo": {
    "displayName": "R鱼雷",
    "sectionType": "Projectile"
  },
  "RTorpedoE": {
    "displayName": "R鱼雷精英",
    "sectionType": "Projectile"
  },
  "Sonic": {
    "displayName": "声波",
    "sectionType": "Unknown"
  },
  "ASWVirt": {
    "displayName": "鱼鹰无人机Virt",
    "sectionType": "Projectile"
  },
  "IvanBombProj": {
    "displayName": "疯狂伊文炸弹抛射体",
    "sectionType": "Unknown"
  },
  "FVIvanBombProj": {
    "displayName": "斯特瑞克步兵战车疯狂伊文炸弹抛射体",
    "sectionType": "Projectile"
  },
  "ArsoBombProj": {
    "displayName": "纵火狂炸弹抛射体",
    "sectionType": "Unknown"
  },
  "FVArsoBombProj": {
    "displayName": "斯特瑞克步兵战车纵火狂炸弹抛射体",
    "sectionType": "Projectile"
  },
  "FVRepulsorProj": {
    "displayName": "斯特瑞克步兵战车Repulsor抛射体",
    "sectionType": "Projectile"
  },
  "PlasmaTorpedo": {
    "displayName": "等离子鱼雷",
    "sectionType": "Projectile"
  },
  "AlizeP": {
    "displayName": "Alize抛射体",
    "sectionType": "Unknown"
  },
  "NormalBomb": {
    "displayName": "普通炸弹",
    "sectionType": "Projectile"
  },
  "NormalBombE": {
    "displayName": "普通炸弹精英",
    "sectionType": "Projectile"
  },
  "ReconDroneP": {
    "displayName": "扫描无人机Drone抛射体",
    "sectionType": "Unknown"
  },
  "SeekerBombP": {
    "displayName": "追踪者炸弹抛射体",
    "sectionType": "Projectile"
  },
  "ThorWaveP": {
    "displayName": "雷神波抛射体",
    "sectionType": "Projectile"
  },
  "HurraP": {
    "displayName": "Hurra抛射体",
    "sectionType": "Projectile"
  },
  "BlimpBombP": {
    "displayName": "飞艇炸弹抛射体",
    "sectionType": "Projectile"
  },
  "BlimpBombPE": {
    "displayName": "飞艇炸弹PE",
    "sectionType": "Projectile"
  },
  "BlimpBombNukeP": {
    "displayName": "飞艇炸弹战术核弹攻击抛射体",
    "sectionType": "Projectile"
  },
  "SmokebombsP": {
    "displayName": "烟雾弹空袭抛射体",
    "sectionType": "Projectile"
  },
  "CondorBlastP": {
    "displayName": "Condor爆破抛射体",
    "sectionType": "Projectile"
  },
  "WOCP": {
    "displayName": "WOCP抛射体",
    "sectionType": "Projectile"
  },
  "InvisibleMag": {
    "displayName": "隐形Mag",
    "sectionType": "Projectile"
  },
  "InvisibleMagShake": {
    "displayName": "隐形MagShake",
    "sectionType": "Projectile"
  },
  "InvisibleWind": {
    "displayName": "隐形风",
    "sectionType": "Unknown"
  },
  "DepthCharge": {
    "displayName": "DepthCharge抛射体",
    "sectionType": "Projectile"
  },
  "DepthChargeE": {
    "displayName": "DepthCharge精英",
    "sectionType": "Projectile"
  },
  "MammothTuskProj": {
    "displayName": "猛犸獠牙抛射体",
    "sectionType": "Projectile"
  },
  "MammothTuskProjE": {
    "displayName": "猛犸獠牙精英抛射体",
    "sectionType": "Projectile"
  },
  "GrumbleRocketP": {
    "displayName": "轰鸣防空导弹火箭抛射体",
    "sectionType": "Projectile"
  },
  "AAHeatSeeker": {
    "displayName": "对空Heat追踪者",
    "sectionType": "Unknown"
  },
  "RedEye2Proj": {
    "displayName": "红色Eye 2抛射体",
    "sectionType": "Projectile"
  },
  "RedEye2ProjE": {
    "displayName": "红色Eye 2精英抛射体",
    "sectionType": "Projectile"
  },
  "VultureNapalmP": {
    "displayName": "秃鹫凝固汽油抛射体",
    "sectionType": "Projectile"
  },
  "VultureNapalmPE": {
    "displayName": "秃鹫凝固汽油PE",
    "sectionType": "Projectile"
  },
  "BuzzardMinesP": {
    "displayName": "秃鹰地雷抛射体",
    "sectionType": "Projectile"
  },
  "FakeSeeker": {
    "displayName": "伪装追踪者",
    "sectionType": "Unknown"
  },
  "AAHeatSeekerB": {
    "displayName": "对空Heat追踪者B",
    "sectionType": "Projectile"
  },
  "AAHeatSeekerBE": {
    "displayName": "对空Heat追踪者BE",
    "sectionType": "Projectile"
  },
  "WallbusterP": {
    "displayName": "破墙者抛射体",
    "sectionType": "Projectile"
  },
  "DevourerProj": {
    "displayName": "吞并抛射体",
    "sectionType": "Projectile"
  },
  "BlackoutMissileP": {
    "displayName": "Blackout导弹抛射体",
    "sectionType": "Projectile"
  },
  "AirToGroundMissile": {
    "displayName": "AirToGround导弹",
    "sectionType": "Projectile"
  },
  "AirToGroundMissileE": {
    "displayName": "AirToGround导弹精英",
    "sectionType": "Projectile"
  },
  "AirToGroundMissileFox": {
    "displayName": "AirToGround导弹狐步舞者战机",
    "sectionType": "Projectile"
  },
  "AirToGroundMissileFoxE": {
    "displayName": "AirToGround导弹狐步舞者战机精英",
    "sectionType": "Projectile"
  },
  "FoxMissileP": {
    "displayName": "狐步舞者战机导弹抛射体",
    "sectionType": "Projectile"
  },
  "FoxMissilePE": {
    "displayName": "狐步舞者战机导弹PE",
    "sectionType": "Projectile"
  },
  "WidowSignalFakeP": {
    "displayName": "寡妇信号伪装抛射体",
    "sectionType": "Projectile"
  },
  "WidowSignal2P": {
    "displayName": "寡妇信号 2抛射体",
    "sectionType": "Projectile"
  },
  "WidowSignal3P": {
    "displayName": "寡妇信号 3抛射体",
    "sectionType": "Projectile"
  },
  "InvisibleStorm": {
    "displayName": "隐形风暴",
    "sectionType": "Projectile"
  },
  "StormMissileProj": {
    "displayName": "风暴导弹抛射体",
    "sectionType": "Projectile"
  },
  "StormMissileProjE": {
    "displayName": "风暴导弹精英抛射体",
    "sectionType": "Projectile"
  },
  "InvisibleSnake": {
    "displayName": "隐形王蛇战机",
    "sectionType": "Projectile"
  },
  "SnakeMissileProj": {
    "displayName": "王蛇战机导弹抛射体",
    "sectionType": "Projectile"
  },
  "SnakeMissileProjE": {
    "displayName": "王蛇战机导弹精英抛射体",
    "sectionType": "Projectile"
  },
  "AirToGroundNuke": {
    "displayName": "AirToGround战术核弹攻击",
    "sectionType": "Projectile"
  },
  "PulsPr": {
    "displayName": "PulsPr抛射体",
    "sectionType": "Projectile"
  },
  "NuwaProjZ": {
    "displayName": "Nuwa抛射体 Z",
    "sectionType": "Projectile"
  },
  "ColossusBallInacc": {
    "displayName": "ColossusBallInacc抛射体",
    "sectionType": "Projectile"
  },
  "ColossusBallInaccE": {
    "displayName": "ColossusBallInacc精英",
    "sectionType": "Projectile"
  },
  "CryoMissileProj": {
    "displayName": "冷冻导弹抛射体",
    "sectionType": "Projectile"
  },
  "CryoMissileProjE": {
    "displayName": "冷冻导弹精英抛射体",
    "sectionType": "Projectile"
  },
  "ShinMissileProj": {
    "displayName": "Shin导弹抛射体",
    "sectionType": "Projectile"
  },
  "ShinMissileProjE": {
    "displayName": "Shin导弹精英抛射体",
    "sectionType": "Projectile"
  },
  "PsychicDart": {
    "displayName": "心灵飞镖",
    "sectionType": "Projectile"
  },
  "ZorbBall": {
    "displayName": "佐布Ball",
    "sectionType": "Projectile"
  },
  "ZorbBallN": {
    "displayName": "佐布Ball N",
    "sectionType": "Projectile"
  },
  "AlanqaAAP": {
    "displayName": "Alanqa对空P抛射体",
    "sectionType": "Projectile"
  },
  "MedusaProjectile": {
    "displayName": "Medusa抛射体",
    "sectionType": "Projectile"
  },
  "MedusaProjectileE": {
    "displayName": "Medusa精英抛射体",
    "sectionType": "Projectile"
  },
  "PhalanxProjectile": {
    "displayName": "Phalanx抛射体",
    "sectionType": "Projectile"
  },
  "PhalanxProjectileE": {
    "displayName": "Phalanx精英抛射体",
    "sectionType": "Projectile"
  },
  "ArmorMissileProj": {
    "displayName": "Armor导弹抛射体",
    "sectionType": "Projectile"
  },
  "ArmorMissileProjE": {
    "displayName": "Armor导弹精英抛射体",
    "sectionType": "Projectile"
  },
  "SAMBunkerProj": {
    "displayName": "SAMBunker抛射体",
    "sectionType": "Projectile"
  },
  "SAMBunkerProjE": {
    "displayName": "SAMBunker精英抛射体",
    "sectionType": "Projectile"
  },
  "WolfMissileProj": {
    "displayName": "猎狼犬直升机导弹抛射体",
    "sectionType": "Projectile"
  },
  "WolfMissileProjE": {
    "displayName": "猎狼犬直升机导弹精英抛射体",
    "sectionType": "Projectile"
  },
  "ComaMissileProj": {
    "displayName": "战鹰直升机导弹抛射体",
    "sectionType": "Unknown"
  },
  "ComaMissileProjE": {
    "displayName": "战鹰直升机导弹精英抛射体",
    "sectionType": "Unknown"
  },
  "ToxicBarrel": {
    "displayName": "毒素Barrel",
    "sectionType": "Projectile"
  },
  "ToxicBarrelBig": {
    "displayName": "毒素BarrelBig",
    "sectionType": "Projectile"
  },
  "MortarProj": {
    "displayName": "Mortar抛射体",
    "sectionType": "Projectile"
  },
  "MortarProjE": {
    "displayName": "Mortar精英抛射体",
    "sectionType": "Projectile"
  },
  "FlareProj": {
    "displayName": "信号弹抛射体",
    "sectionType": "Projectile"
  },
  "UraganPunchesP": {
    "displayName": "乌拉甘Punches抛射体",
    "sectionType": "Projectile"
  },
  "UraganP": {
    "displayName": "乌拉甘抛射体",
    "sectionType": "Projectile"
  },
  "HarbingerFakeP": {
    "displayName": "先驱者伪装抛射体",
    "sectionType": "Projectile"
  },
  "HarbingerFragP": {
    "displayName": "先驱者破片抛射体",
    "sectionType": "Projectile"
  },
  "FTankCannonP": {
    "displayName": "FTank加农炮抛射体",
    "sectionType": "Projectile"
  },
  "SeitaadMissileFragP": {
    "displayName": "塞泰龙弩炮导弹破片抛射体",
    "sectionType": "Projectile"
  },
  "GridWeaponP": {
    "displayName": "网格武器抛射体",
    "sectionType": "Projectile"
  },
  "IronDragonProj": {
    "displayName": "无敌Dragon抛射体",
    "sectionType": "Projectile"
  },
  "ArtilleryProj": {
    "displayName": "Artillery抛射体",
    "sectionType": "Projectile"
  },
  "ArtilleryProjE": {
    "displayName": "Artillery精英抛射体",
    "sectionType": "Projectile"
  },
  "HowitzerProj": {
    "displayName": "Howitzer抛射体",
    "sectionType": "Projectile"
  },
  "HowitzerProjE": {
    "displayName": "Howitzer精英抛射体",
    "sectionType": "Projectile"
  },
  "HowitzerProjInacc": {
    "displayName": "Howitzer抛射体Inacc",
    "sectionType": "Projectile"
  },
  "HowitzerProjInaccE": {
    "displayName": "Howitzer抛射体Inacc精英",
    "sectionType": "Projectile"
  },
  "BasiliskCannonball": {
    "displayName": "Basilisk加农炮ball抛射体",
    "sectionType": "Projectile"
  },
  "BasiliskCannonballE": {
    "displayName": "Basilisk加农炮ball精英",
    "sectionType": "Projectile"
  },
  "SmokeCannonP": {
    "displayName": "Smoke加农炮抛射体",
    "sectionType": "Projectile"
  },
  "GehennaProj": {
    "displayName": "Gehenna抛射体",
    "sectionType": "Projectile"
  },
  "GehennaGroundProj": {
    "displayName": "GehennaGround抛射体",
    "sectionType": "Projectile"
  },
  "SalamanderProj": {
    "displayName": "火蜥蜴抛射体",
    "sectionType": "Projectile"
  },
  "SalamanderProjAA": {
    "displayName": "火蜥蜴抛射体对空",
    "sectionType": "Projectile"
  },
  "SiegfriedBall": {
    "displayName": "齐格弗里德Ball",
    "sectionType": "Projectile"
  },
  "CenturionCannonBall": {
    "displayName": "百夫长加农炮炮弹",
    "sectionType": "Projectile"
  },
  "FlakProj": {
    "displayName": "Flak抛射体",
    "sectionType": "Projectile"
  },
  "FakeFlakProj": {
    "displayName": "伪装Flak抛射体",
    "sectionType": "Unknown"
  },
  "ScavengerMachineGunP": {
    "displayName": "拾荒者Machine机枪抛射体",
    "sectionType": "Projectile"
  },
  "HydraMachineGunP": {
    "displayName": "九头蛇Machine机枪抛射体",
    "sectionType": "Projectile"
  },
  "ColossusAAProj": {
    "displayName": "Colossus对空抛射体",
    "sectionType": "Projectile"
  },
  "FlakCannonProj": {
    "displayName": "Flak加农炮抛射体",
    "sectionType": "Unknown"
  },
  "GharialPilesP": {
    "displayName": "长吻鳄Piles抛射体",
    "sectionType": "Projectile"
  },
  "LeviPilesP": {
    "displayName": "利维坦无人机母舰Piles抛射体",
    "sectionType": "Projectile"
  },
  "SweeperP": {
    "displayName": "Sweeper抛射体",
    "sectionType": "Projectile"
  },
  "BaneP": {
    "displayName": "克星抛射体",
    "sectionType": "Projectile"
  },
  "TeratornP": {
    "displayName": "Teratorn抛射体",
    "sectionType": "Projectile"
  },
  "MantaP": {
    "displayName": "魔鬼鱼无人防空舰抛射体",
    "sectionType": "Unknown"
  },
  "OPCoilBoltP": {
    "displayName": "OPCoil电弧抛射体",
    "sectionType": "Projectile"
  },
  "Electricmouse": {
    "displayName": "Electricmouse抛射体",
    "sectionType": "Projectile"
  },
  "Electricbounce": {
    "displayName": "Electricbounce抛射体",
    "sectionType": "Projectile"
  },
  "NotbounceEMP": {
    "displayName": "Notbounce电磁脉冲",
    "sectionType": "Projectile"
  },
  "ElectricbounceEMP": {
    "displayName": "Electricbounce电磁脉冲",
    "sectionType": "Projectile"
  },
  "RaccoonEMPP": {
    "displayName": "RaccoonEMPP抛射体",
    "sectionType": "Projectile"
  },
  "VolkovBombP": {
    "displayName": "沃尔科夫炸弹抛射体",
    "sectionType": "Projectile"
  },
  "OverchargeP": {
    "displayName": "超载抛射体",
    "sectionType": "Projectile"
  },
  "DroppingP": {
    "displayName": "Dropping抛射体",
    "sectionType": "Projectile"
  },
  "Cyborgbounce": {
    "displayName": "Cyborgbounce抛射体",
    "sectionType": "Projectile"
  },
  "Cyborgbounce2": {
    "displayName": "Cyborgbounce 2抛射体",
    "sectionType": "Projectile"
  },
  "Cyborgbounce3": {
    "displayName": "Cyborgbounce 3抛射体",
    "sectionType": "Projectile"
  },
  "CyborgbounceE": {
    "displayName": "Cyborgbounce精英",
    "sectionType": "Projectile"
  },
  "Cyborgbounce2E": {
    "displayName": "Cyborgbounce 2精英",
    "sectionType": "Projectile"
  },
  "Cyborgbounce3E": {
    "displayName": "Cyborgbounce 3精英",
    "sectionType": "Projectile"
  },
  "CyborgbounceB": {
    "displayName": "CyborgbounceB抛射体",
    "sectionType": "Projectile"
  },
  "CyborgbounceB2": {
    "displayName": "CyborgbounceB 2抛射体",
    "sectionType": "Projectile"
  },
  "CyborgbounceB3": {
    "displayName": "CyborgbounceB 3抛射体",
    "sectionType": "Projectile"
  },
  "EnforcerProj": {
    "displayName": "Enforcer抛射体",
    "sectionType": "Projectile"
  },
  "EnforcerProjE": {
    "displayName": "Enforcer精英抛射体",
    "sectionType": "Projectile"
  },
  "DolphinProj": {
    "displayName": "海豚抛射体",
    "sectionType": "Projectile"
  },
  "DolphinProjE": {
    "displayName": "海豚精英抛射体",
    "sectionType": "Projectile"
  },
  "LargeCometP": {
    "displayName": "大型Comet抛射体",
    "sectionType": "Projectile"
  },
  "SuperCometP": {
    "displayName": "超级Comet抛射体",
    "sectionType": "Projectile"
  },
  "ElitePrismP": {
    "displayName": "精英光棱抛射体",
    "sectionType": "Projectile"
  },
  "SuperSmallCometP": {
    "displayName": "超级小型Comet抛射体",
    "sectionType": "Projectile"
  },
  "PainTractorBeamP": {
    "displayName": "Pain清道夫坦克光束抛射体",
    "sectionType": "Unknown"
  },
  "Nanofiber1P": {
    "displayName": "纳米纤维同步 1抛射体",
    "sectionType": "Projectile"
  },
  "Nanofiber2P": {
    "displayName": "纳米纤维同步 2抛射体",
    "sectionType": "Projectile"
  },
  "Nanofiber3P": {
    "displayName": "纳米纤维同步 3抛射体",
    "sectionType": "Projectile"
  },
  "Nanofiber4P": {
    "displayName": "纳米纤维同步 4抛射体",
    "sectionType": "Projectile"
  },
  "Nanofiber5P": {
    "displayName": "纳米纤维同步 5抛射体",
    "sectionType": "Projectile"
  },
  "Nanofiber6P": {
    "displayName": "纳米纤维同步 6抛射体",
    "sectionType": "Projectile"
  },
  "Nanofiber7P": {
    "displayName": "纳米纤维同步 7抛射体",
    "sectionType": "Projectile"
  },
  "BasswaveP": {
    "displayName": "Basswave抛射体",
    "sectionType": "Projectile"
  },
  "MercuryP": {
    "displayName": "墨丘利卫星系统终端抛射体",
    "sectionType": "Projectile"
  },
  "BackwarpP1": {
    "displayName": "回溯抛射体 1",
    "sectionType": "Projectile"
  },
  "BackwarpP2": {
    "displayName": "回溯抛射体 2",
    "sectionType": "Projectile"
  },
  "BackwarpP3": {
    "displayName": "回溯抛射体 3",
    "sectionType": "Projectile"
  },
  "BackwarpP4": {
    "displayName": "回溯抛射体 4",
    "sectionType": "Projectile"
  },
  "BackwarpP5": {
    "displayName": "回溯抛射体 5",
    "sectionType": "Projectile"
  },
  "GeneburstP": {
    "displayName": "Geneburst抛射体",
    "sectionType": "Projectile"
  },
  "VentrexP": {
    "displayName": "冰雹轰炸机抛射体",
    "sectionType": "Projectile"
  },
  "VentrexScavP": {
    "displayName": "冰雹轰炸机拾荒者抛射体",
    "sectionType": "Projectile"
  },
  "SmallCometP": {
    "displayName": "小型Comet抛射体",
    "sectionType": "Projectile"
  },
  "SmallTeslaP": {
    "displayName": "小型磁暴抛射体",
    "sectionType": "Projectile"
  },
  "CeasefireWH": {
    "displayName": "停火弹头",
    "sectionType": "Warhead"
  },
  "CeasekillWH": {
    "displayName": "停火击杀弹头",
    "sectionType": "Warhead"
  },
  "SuperIronWeaponWH": {
    "displayName": "超级无敌武器弹头",
    "sectionType": "Warhead"
  },
  "TrueSuperIronWeaponWH": {
    "displayName": "真实超级无敌武器弹头",
    "sectionType": "Warhead"
  },
  "BlueJammer": {
    "displayName": "蓝色干扰器",
    "sectionType": "Warhead"
  },
  "CyanCryo": {
    "displayName": "Cyan冷冻",
    "sectionType": "Warhead"
  },
  "FakeArrowWH": {
    "displayName": "伪装Arrow弹头",
    "sectionType": "Warhead"
  },
  "ExtendLifeWH": {
    "displayName": "延长生命弹头",
    "sectionType": "Warhead"
  },
  "OneMoreSecond": {
    "displayName": "额外一秒",
    "sectionType": "Warhead"
  },
  "StructureBuffLargeWH": {
    "displayName": "建筑增益大型弹头",
    "sectionType": "Warhead"
  },
  "FauxDomIntroWH": {
    "displayName": "虚假心灵支配入场弹头",
    "sectionType": "Warhead"
  },
  "FauxDomSoundWH": {
    "displayName": "虚假心灵支配音效弹头",
    "sectionType": "Warhead"
  },
  "FauxDomAttachWH": {
    "displayName": "虚假心灵支配附着弹头",
    "sectionType": "Warhead"
  },
  "FauxDomStrikeWH": {
    "displayName": "虚假心灵支配打击弹头",
    "sectionType": "Warhead"
  },
  "HummSA": {
    "displayName": "悍马苏联特工",
    "sectionType": "Warhead"
  },
  "HummSAE": {
    "displayName": "悍马SAE",
    "sectionType": "Warhead"
  },
  "SA": {
    "displayName": "苏联特工",
    "sectionType": "Warhead"
  },
  "SAE": {
    "displayName": "SAE弹头",
    "sectionType": "Warhead"
  },
  "CamoSA": {
    "displayName": "Camo苏联特工",
    "sectionType": "Warhead"
  },
  "CamoSAE": {
    "displayName": "CamoSAE弹头",
    "sectionType": "Warhead"
  },
  "BuzzardWH": {
    "displayName": "秃鹰弹头",
    "sectionType": "Warhead"
  },
  "DKnightSAWH": {
    "displayName": "D骑士SAWH",
    "sectionType": "Warhead"
  },
  "KnightSA": {
    "displayName": "骑士苏联特工",
    "sectionType": "Warhead"
  },
  "KnightSAE": {
    "displayName": "骑士SAE",
    "sectionType": "Warhead"
  },
  "KnightSAB": {
    "displayName": "骑士SAB",
    "sectionType": "Warhead"
  },
  "KnightSABE": {
    "displayName": "骑士SABE",
    "sectionType": "Warhead"
  },
  "RiotGunWH": {
    "displayName": "防暴机枪弹头",
    "sectionType": "Warhead"
  },
  "CivilianSA": {
    "displayName": "平民苏联特工",
    "sectionType": "Warhead"
  },
  "GattWH": {
    "displayName": "盖特弹头",
    "sectionType": "Warhead"
  },
  "GattWHE": {
    "displayName": "盖特精英弹头",
    "sectionType": "Warhead"
  },
  "GattAAWH": {
    "displayName": "盖特对空WH弹头",
    "sectionType": "Warhead"
  },
  "GattAAWHE": {
    "displayName": "盖特对空WHE弹头",
    "sectionType": "Warhead"
  },
  "HARVWH": {
    "displayName": "HARVWH弹头",
    "sectionType": "Warhead"
  },
  "HARVWHE": {
    "displayName": "HARVWHE弹头",
    "sectionType": "Warhead"
  },
  "SSA": {
    "displayName": "特种轻武器弹头",
    "sectionType": "Warhead"
  },
  "SSAE": {
    "displayName": "SSAE弹头",
    "sectionType": "Warhead"
  },
  "PsychicSSA": {
    "displayName": "心灵特种轻武器弹头",
    "sectionType": "Warhead"
  },
  "PsychicSSAE": {
    "displayName": "心灵SSAE",
    "sectionType": "Warhead"
  },
  "HydraSSA": {
    "displayName": "九头蛇特种轻武器弹头",
    "sectionType": "Warhead"
  },
  "HydraSSAE": {
    "displayName": "九头蛇SSAE",
    "sectionType": "Warhead"
  },
  "ScavSSA": {
    "displayName": "拾荒者特种轻武器弹头",
    "sectionType": "Warhead"
  },
  "ScavSSAE": {
    "displayName": "拾荒者SSAE",
    "sectionType": "Warhead"
  },
  "SSANoBuilding": {
    "displayName": "特种轻武器弹头不对建筑",
    "sectionType": "Warhead"
  },
  "JumpjetSSA": {
    "displayName": "飞行兵特种轻武器弹头",
    "sectionType": "Warhead"
  },
  "JumpjetSSAE": {
    "displayName": "飞行兵SSAE",
    "sectionType": "Warhead"
  },
  "FortressSSA": {
    "displayName": "堡垒特种轻武器弹头",
    "sectionType": "Warhead"
  },
  "FortressSSAE": {
    "displayName": "堡垒SSAE",
    "sectionType": "Warhead"
  },
  "VultureSA": {
    "displayName": "秃鹫苏联特工",
    "sectionType": "Warhead"
  },
  "VultureSAE": {
    "displayName": "秃鹫SAE",
    "sectionType": "Warhead"
  },
  "WolfhoundSA": {
    "displayName": "猎狼犬苏联特工",
    "sectionType": "Warhead"
  },
  "WolfhoundSAE": {
    "displayName": "猎狼犬SAE",
    "sectionType": "Warhead"
  },
  "SSAB": {
    "displayName": "SSAB弹头",
    "sectionType": "Warhead"
  },
  "SSABE": {
    "displayName": "SSABE弹头",
    "sectionType": "Warhead"
  },
  "HollowPointSEAL": {
    "displayName": "空尖弹海豹突击队",
    "sectionType": "Warhead"
  },
  "HollowPointSEALE": {
    "displayName": "空尖弹SEALE",
    "sectionType": "Warhead"
  },
  "HollowPointCRSEALWH": {
    "displayName": "空尖弹驻军SEALWH",
    "sectionType": "Warhead"
  },
  "HollowPointCRSEALWHE": {
    "displayName": "空尖弹驻军SEALWHE",
    "sectionType": "Warhead"
  },
  "HollowPoint2": {
    "displayName": "空尖弹 2",
    "sectionType": "Warhead"
  },
  "HollowPoint4": {
    "displayName": "空尖弹 4",
    "sectionType": "Warhead"
  },
  "HollowPoint4E": {
    "displayName": "空尖弹 4精英",
    "sectionType": "Warhead"
  },
  "BORISWH": {
    "displayName": "BORISWH弹头",
    "sectionType": "Warhead"
  },
  "BORISWHE": {
    "displayName": "BORISWHE弹头",
    "sectionType": "Warhead"
  },
  "HollowPoint": {
    "displayName": "空尖弹",
    "sectionType": "Warhead"
  },
  "HollowPointE": {
    "displayName": "空尖弹精英",
    "sectionType": "Warhead"
  },
  "SANoBuilding": {
    "displayName": "苏联特工不对建筑",
    "sectionType": "Unknown"
  },
  "LibraLightWH": {
    "displayName": "天秤光源弹头",
    "sectionType": "Warhead"
  },
  "GreatTempestAnimWH": {
    "displayName": "大型暴风动画弹头",
    "sectionType": "Warhead"
  },
  "GreatTempestAnim2WH": {
    "displayName": "大型暴风动画 2弹头",
    "sectionType": "Warhead"
  },
  "GreatTempestBlastWH": {
    "displayName": "大型暴风爆破弹头",
    "sectionType": "Warhead"
  },
  "GreatTempestRockWH": {
    "displayName": "大型暴风岩石弹头",
    "sectionType": "Warhead"
  },
  "FirestormTempestWH": {
    "displayName": "火风暴暴风弹头",
    "sectionType": "Warhead"
  },
  "MadbombWH": {
    "displayName": "Madbomb弹头",
    "sectionType": "Warhead"
  },
  "WallbusterWH": {
    "displayName": "破墙者弹头",
    "sectionType": "Warhead"
  },
  "ASWLaunchWH": {
    "displayName": "鱼鹰无人机Launch弹头",
    "sectionType": "Warhead"
  },
  "Special2": {
    "displayName": "特殊弹头 2",
    "sectionType": "Warhead"
  },
  "Special3": {
    "displayName": "特殊弹头 3",
    "sectionType": "Warhead"
  },
  "Special4": {
    "displayName": "特殊弹头 4",
    "sectionType": "Warhead"
  },
  "Cuttering": {
    "displayName": "Cuttering弹头",
    "sectionType": "Warhead"
  },
  "CutteringB": {
    "displayName": "CutteringB弹头",
    "sectionType": "Warhead"
  },
  "CutteringC": {
    "displayName": "CutteringC弹头",
    "sectionType": "Warhead"
  },
  "MegaslashWH": {
    "displayName": "巨型斩击弹头",
    "sectionType": "Warhead"
  },
  "TankSnapshot": {
    "displayName": "TankSnapshot弹头",
    "sectionType": "Warhead"
  },
  "StealthScannerWH": {
    "displayName": "隐形扫描器弹头",
    "sectionType": "Warhead"
  },
  "SpotLightWH": {
    "displayName": "Spot光源弹头",
    "sectionType": "Warhead"
  },
  "RepulsorWH": {
    "displayName": "Repulsor弹头",
    "sectionType": "Warhead"
  },
  "RepulsorEffectWH": {
    "displayName": "Repulsor效果弹头",
    "sectionType": "Warhead"
  },
  "LibraWH": {
    "displayName": "天秤弹头",
    "sectionType": "Warhead"
  },
  "LibraWHE": {
    "displayName": "天秤精英弹头",
    "sectionType": "Warhead"
  },
  "AntiGravityWH": {
    "displayName": "AntiGravity弹头",
    "sectionType": "Warhead"
  },
  "GravitronFieldWH": {
    "displayName": "Gravitron力场弹头",
    "sectionType": "Warhead"
  },
  "GravitronAnimWH": {
    "displayName": "Gravitron动画弹头",
    "sectionType": "Warhead"
  },
  "AthenaWHSmall": {
    "displayName": "Athena弹头小型",
    "sectionType": "Warhead"
  },
  "TargetPainterWH": {
    "displayName": "目标Painter弹头",
    "sectionType": "Warhead"
  },
  "BulldogPainterWH": {
    "displayName": "BulldogPainter弹头",
    "sectionType": "Warhead"
  },
  "QuakeWeaponWH": {
    "displayName": "Quake武器弹头",
    "sectionType": "Warhead"
  },
  "QuakeWeaponWHE": {
    "displayName": "Quake武器精英弹头",
    "sectionType": "Warhead"
  },
  "StalkerWH": {
    "displayName": "潜行者弹头",
    "sectionType": "Warhead"
  },
  "StalkerWHE": {
    "displayName": "潜行者精英弹头",
    "sectionType": "Warhead"
  },
  "StalkerDrainWH": {
    "displayName": "潜行者吸取弹头",
    "sectionType": "Warhead"
  },
  "StalkerDrainWHAnim": {
    "displayName": "潜行者吸取弹头动画",
    "sectionType": "Warhead"
  },
  "GotterBombWH": {
    "displayName": "哥特炸弹弹头",
    "sectionType": "Warhead"
  },
  "GotterBombWHE": {
    "displayName": "哥特炸弹精英弹头",
    "sectionType": "Warhead"
  },
  "StratoWH": {
    "displayName": "同温层弹头",
    "sectionType": "Warhead"
  },
  "CruiserWH": {
    "displayName": "巡洋舰弹头",
    "sectionType": "Warhead"
  },
  "ParasitePro": {
    "displayName": "ParasitePro弹头",
    "sectionType": "Warhead"
  },
  "ElephantWH": {
    "displayName": "大象弹头",
    "sectionType": "Warhead"
  },
  "MODeathWH": {
    "displayName": "MO死亡弹头",
    "sectionType": "Warhead"
  },
  "ColossusWH": {
    "displayName": "Colossus弹头",
    "sectionType": "Warhead"
  },
  "BeetleRollWH": {
    "displayName": "巨型甲虫Roll弹头",
    "sectionType": "Warhead"
  },
  "DeathFlashWH": {
    "displayName": "死亡Flash弹头",
    "sectionType": "Warhead"
  },
  "CavalierTargetWH": {
    "displayName": "Cavalier目标弹头",
    "sectionType": "Warhead"
  },
  "ChronoWarpWH": {
    "displayName": "超时空传送弹头",
    "sectionType": "Warhead"
  },
  "ChronoBeam": {
    "displayName": "超时空光束",
    "sectionType": "Warhead"
  },
  "ChronoBlasterWH": {
    "displayName": "超时空爆能枪弹头",
    "sectionType": "Warhead"
  },
  "SiegfriedWH": {
    "displayName": "齐格弗里德弹头",
    "sectionType": "Warhead"
  },
  "SiegfriedWH2": {
    "displayName": "齐格弗里德弹头 2",
    "sectionType": "Warhead"
  },
  "ChronoFreezeWH": {
    "displayName": "超时空冻结弹头",
    "sectionType": "Warhead"
  },
  "MothraWH": {
    "displayName": "侦察乌鸦弹头",
    "sectionType": "Warhead"
  },
  "SquidHE": {
    "displayName": "乌贼高爆",
    "sectionType": "Warhead"
  },
  "IceCloudWH": {
    "displayName": "冰Cloud弹头",
    "sectionType": "Warhead"
  },
  "SonicRayWH": {
    "displayName": "声波Ray弹头",
    "sectionType": "Warhead"
  },
  "DSonicRayWH": {
    "displayName": "D声波Ray弹头",
    "sectionType": "Warhead"
  },
  "IceBeamWH": {
    "displayName": "冰光束弹头",
    "sectionType": "Warhead"
  },
  "IceBeamNerfWH": {
    "displayName": "冰光束削弱弹头",
    "sectionType": "Warhead"
  },
  "BlizzardBeamWH": {
    "displayName": "Blizzard光束弹头",
    "sectionType": "Warhead"
  },
  "BlizzardNerfWH": {
    "displayName": "Blizzard削弱弹头",
    "sectionType": "Warhead"
  },
  "BlizzardAAWH": {
    "displayName": "Blizzard对空WH弹头",
    "sectionType": "Warhead"
  },
  "HyperionWH": {
    "displayName": "Hyperion弹头",
    "sectionType": "Warhead"
  },
  "ScavengerCryoWH": {
    "displayName": "拾荒者冷冻弹头",
    "sectionType": "Warhead"
  },
  "VentrexWH": {
    "displayName": "冰雹轰炸机弹头",
    "sectionType": "Warhead"
  },
  "SalamanderFieldWH": {
    "displayName": "火蜥蜴力场弹头",
    "sectionType": "Warhead"
  },
  "ChaosTouchWH": {
    "displayName": "混乱Touch弹头",
    "sectionType": "Warhead"
  },
  "ChaosTouchEffectWH": {
    "displayName": "混乱Touch效果弹头",
    "sectionType": "Warhead"
  },
  "ConfuseWH": {
    "displayName": "混乱弹头",
    "sectionType": "Warhead"
  },
  "ConfuseRifleWH": {
    "displayName": "混乱步枪弹头",
    "sectionType": "Warhead"
  },
  "MantaConfuseRifleWH": {
    "displayName": "魔鬼鱼无人防空舰混乱步枪弹头",
    "sectionType": "Warhead"
  },
  "SalamanderBeamWH": {
    "displayName": "火蜥蜴光束弹头",
    "sectionType": "Warhead"
  },
  "ConfusionWH": {
    "displayName": "混乱弹头",
    "sectionType": "Warhead"
  },
  "SharkSplash": {
    "displayName": "鲨鱼Splash",
    "sectionType": "Warhead"
  },
  "SharkSplashWave": {
    "displayName": "鲨鱼Splash波",
    "sectionType": "Warhead"
  },
  "SharkSplashWave5": {
    "displayName": "鲨鱼Splash波 5",
    "sectionType": "Warhead"
  },
  "MADMineStartWH": {
    "displayName": "M.A.D.M.A.N.\n-部署自爆-地雷启动弹头",
    "sectionType": "Warhead"
  },
  "MADAIWH": {
    "displayName": "MADAIWH弹头",
    "sectionType": "Warhead"
  },
  "MadEMPWH": {
    "displayName": "MADEMPWH弹头",
    "sectionType": "Warhead"
  },
  "MadWH": {
    "displayName": "MAD弹头",
    "sectionType": "Warhead"
  },
  "MadMineWH": {
    "displayName": "MAD 地雷弹头",
    "sectionType": "Warhead"
  },
  "Mad2WH": {
    "displayName": "MAD 2弹头",
    "sectionType": "Warhead"
  },
  "MadMine2WH": {
    "displayName": "MAD 地雷 2弹头",
    "sectionType": "Warhead"
  },
  "WOLFWH": {
    "displayName": "WOLFWH弹头",
    "sectionType": "Warhead"
  },
  "AlanqaAAWH": {
    "displayName": "Alanqa对空WH弹头",
    "sectionType": "Warhead"
  },
  "RoboLaserWH": {
    "displayName": "机器人坦克激光弹头",
    "sectionType": "Warhead"
  },
  "RoboLaserWHE": {
    "displayName": "机器人坦克激光精英弹头",
    "sectionType": "Warhead"
  },
  "SunburstLaserWH": {
    "displayName": "Sunburst激光弹头",
    "sectionType": "Warhead"
  },
  "TanyaLaserWH": {
    "displayName": "谭雅激光弹头",
    "sectionType": "Warhead"
  },
  "FVTanyaLaserWH": {
    "displayName": "斯特瑞克步兵战车谭雅激光弹头",
    "sectionType": "Warhead"
  },
  "AeroblazeWH": {
    "displayName": "Aeroblaze弹头",
    "sectionType": "Warhead"
  },
  "AeroblazeSniperWH": {
    "displayName": "Aeroblaze狙击枪弹头",
    "sectionType": "Warhead"
  },
  "AbramsLaserWH": {
    "displayName": "Abrams激光弹头",
    "sectionType": "Warhead"
  },
  "ScavengerLaserWH": {
    "displayName": "拾荒者激光弹头",
    "sectionType": "Warhead"
  },
  "FutureAP": {
    "displayName": "Future穿甲",
    "sectionType": "Warhead"
  },
  "StormGunWH": {
    "displayName": "风暴机枪弹头",
    "sectionType": "Warhead"
  },
  "ComancheWH": {
    "displayName": "Comanche弹头",
    "sectionType": "Warhead"
  },
  "Comanche2WH": {
    "displayName": "Comanche 2弹头",
    "sectionType": "Warhead"
  },
  "CenturionCannonWH": {
    "displayName": "百夫长加农炮弹头",
    "sectionType": "Warhead"
  },
  "ArchelonWH": {
    "displayName": "冥卫弹头",
    "sectionType": "Warhead"
  },
  "DevourerWH": {
    "displayName": "吞并弹头",
    "sectionType": "Warhead"
  },
  "HuntressWH": {
    "displayName": "女猎手弹头",
    "sectionType": "Warhead"
  },
  "MegashieldWH": {
    "displayName": "Megashield弹头",
    "sectionType": "Warhead"
  },
  "PiranhaWH": {
    "displayName": "食人鱼弹头",
    "sectionType": "Warhead"
  },
  "ARROWWH": {
    "displayName": "ARROWWH弹头",
    "sectionType": "Warhead"
  },
  "ScavengerMedusaWH": {
    "displayName": "拾荒者Medusa弹头",
    "sectionType": "Warhead"
  },
  "GehennaWH": {
    "displayName": "Gehenna弹头",
    "sectionType": "Warhead"
  },
  "SalamanderWH": {
    "displayName": "火蜥蜴弹头",
    "sectionType": "Warhead"
  },
  "TimeFreezeWH": {
    "displayName": "时间冻结弹头",
    "sectionType": "Warhead"
  },
  "TemporalShieldWH": {
    "displayName": "时间护盾弹头",
    "sectionType": "Warhead"
  },
  "MineBombEMPWH": {
    "displayName": "地雷炸弹EMPWH",
    "sectionType": "Warhead"
  },
  "EMPuls": {
    "displayName": "EMPuls弹头",
    "sectionType": "Warhead"
  },
  "EMPBeamWH": {
    "displayName": "电磁脉冲光束弹头",
    "sectionType": "Warhead"
  },
  "ElectricTankEMP": {
    "displayName": "ElectricTank电磁脉冲",
    "sectionType": "Warhead"
  },
  "ScourgeEMPWH": {
    "displayName": "ScourgeEMPWH弹头",
    "sectionType": "Warhead"
  },
  "SeitaadEMPWH": {
    "displayName": "塞泰龙弩炮EMPWH",
    "sectionType": "Warhead"
  },
  "EMPulsSuper": {
    "displayName": "EMPuls超级",
    "sectionType": "Warhead"
  },
  "EMPulsSuperB": {
    "displayName": "EMPuls超级B",
    "sectionType": "Warhead"
  },
  "EMPYunru": {
    "displayName": "电磁脉冲芸如",
    "sectionType": "Warhead"
  },
  "LionheartEMPWH": {
    "displayName": "狮心EMPWH",
    "sectionType": "Warhead"
  },
  "RaccoonWH": {
    "displayName": "Raccoon弹头",
    "sectionType": "Warhead"
  },
  "RaccoonBWH": {
    "displayName": "RaccoonBWH弹头",
    "sectionType": "Warhead"
  },
  "BlackoutMissileWH": {
    "displayName": "Blackout导弹弹头",
    "sectionType": "Warhead"
  },
  "BlackoutBWH": {
    "displayName": "BlackoutBWH弹头",
    "sectionType": "Warhead"
  },
  "RamHackArenaWH": {
    "displayName": "入侵冲撞竞技场弹头",
    "sectionType": "Warhead"
  },
  "RamHackArenaBWH": {
    "displayName": "入侵冲撞竞技场BWH",
    "sectionType": "Warhead"
  },
  "ShadrayWaveWH": {
    "displayName": "Shadray波弹头",
    "sectionType": "Warhead"
  },
  "ShadrayWaveAAWH": {
    "displayName": "Shadray波对空WH",
    "sectionType": "Warhead"
  },
  "FakeShadWH": {
    "displayName": "伪装千里马运输直升机弹头",
    "sectionType": "Warhead"
  },
  "CondorWH": {
    "displayName": "Condor弹头",
    "sectionType": "Warhead"
  },
  "JackalWarhead": {
    "displayName": "豺狼突击载具弹头",
    "sectionType": "Warhead"
  },
  "EmitterWarhead": {
    "displayName": "Emitter弹头",
    "sectionType": "Warhead"
  },
  "DebrisHE": {
    "displayName": "原材料高爆",
    "sectionType": "Warhead"
  },
  "TankOGas": {
    "displayName": "TankOGas弹头",
    "sectionType": "Warhead"
  },
  "EngineerWH": {
    "displayName": "盟军工程师弹头",
    "sectionType": "Warhead"
  },
  "ShovelSA": {
    "displayName": "Shovel苏联特工",
    "sectionType": "Warhead"
  },
  "NautFlame": {
    "displayName": "鹦鹉螺磁力潜艇火焰",
    "sectionType": "Warhead"
  },
  "SAFlame": {
    "displayName": "苏联特工火焰",
    "sectionType": "Warhead"
  },
  "SAFlameBlue": {
    "displayName": "苏联特工火焰蓝色",
    "sectionType": "Warhead"
  },
  "SeawolfHE": {
    "displayName": "海狼高爆",
    "sectionType": "Warhead"
  },
  "KnightBetaSA": {
    "displayName": "骑士Beta苏联特工",
    "sectionType": "Warhead"
  },
  "GharialBetaWH": {
    "displayName": "长吻鳄Beta弹头",
    "sectionType": "Warhead"
  },
  "GyroWH": {
    "displayName": "旋翼飞行兵弹头",
    "sectionType": "Warhead"
  },
  "GyroAAWH": {
    "displayName": "旋翼飞行兵对空WH",
    "sectionType": "Warhead"
  },
  "DummyWH": {
    "displayName": "虚拟弹头",
    "sectionType": "Warhead"
  },
  "NotAnEiffelWH": {
    "displayName": "不AnEiffel弹头",
    "sectionType": "Warhead"
  },
  "TankScannerWH": {
    "displayName": "Tank扫描器弹头",
    "sectionType": "Warhead"
  },
  "RoadrunnerChokeWH": {
    "displayName": "RoadrunnerChoke弹头",
    "sectionType": "Warhead"
  },
  "StrikerGunRunWH": {
    "displayName": "打击者扫射弹头",
    "sectionType": "Warhead"
  },
  "StingerSprayWH": {
    "displayName": "毒刺无人载具Spray弹头",
    "sectionType": "Warhead"
  },
  "ThorSSA": {
    "displayName": "雷神特种轻武器弹头",
    "sectionType": "Warhead"
  },
  "ThorSSAE": {
    "displayName": "雷神SSAE",
    "sectionType": "Warhead"
  },
  "SSABFlame": {
    "displayName": "SSAB火焰",
    "sectionType": "Warhead"
  },
  "SSABFlameBlue": {
    "displayName": "SSAB火焰蓝色",
    "sectionType": "Warhead"
  },
  "GrumbleWH": {
    "displayName": "轰鸣防空导弹弹头",
    "sectionType": "Warhead"
  },
  "PhalanxWH": {
    "displayName": "Phalanx弹头",
    "sectionType": "Warhead"
  },
  "CenturionMissilesWH": {
    "displayName": "百夫长导弹弹头",
    "sectionType": "Warhead"
  },
  "Meteorite": {
    "displayName": "Meteorite弹头",
    "sectionType": "Warhead"
  },
  "HE": {
    "displayName": "高爆",
    "sectionType": "Warhead"
  },
  "RhadHE": {
    "displayName": "拉什迪高爆",
    "sectionType": "Warhead"
  },
  "SpeederHE": {
    "displayName": "Speeder高爆",
    "sectionType": "Warhead"
  },
  "SpeederToxicHE": {
    "displayName": "Speeder毒素高爆",
    "sectionType": "Warhead"
  },
  "IFVWH": {
    "displayName": "步兵战车WH弹头",
    "sectionType": "Warhead"
  },
  "VoyagerWH": {
    "displayName": "Voyager弹头",
    "sectionType": "Warhead"
  },
  "MTWH": {
    "displayName": "MTWH弹头",
    "sectionType": "Warhead"
  },
  "ApocMissileWH": {
    "displayName": "天启导弹弹头",
    "sectionType": "Warhead"
  },
  "HydraMissileWH": {
    "displayName": "九头蛇导弹弹头",
    "sectionType": "Warhead"
  },
  "V3WH": {
    "displayName": " V3弹头",
    "sectionType": "Warhead"
  },
  "V3EWH": {
    "displayName": "V3EWH弹头",
    "sectionType": "Warhead"
  },
  "DMISLWH": {
    "displayName": "DMISLWH弹头",
    "sectionType": "Warhead"
  },
  "DMISLEWH": {
    "displayName": "DMISLEWH弹头",
    "sectionType": "Warhead"
  },
  "CMISLWH": {
    "displayName": "CMISLWH弹头",
    "sectionType": "Warhead"
  },
  "CMISLEWH": {
    "displayName": "CMISLEWH弹头",
    "sectionType": "Warhead"
  },
  "MiniNukeRadWH": {
    "displayName": "Mini战术核弹攻击辐射弹头",
    "sectionType": "Warhead"
  },
  "SwarmBombWH": {
    "displayName": "Swarm炸弹弹头",
    "sectionType": "Warhead"
  },
  "SwarmBombEWH": {
    "displayName": "Swarm炸弹EWH",
    "sectionType": "Warhead"
  },
  "BlimpHE": {
    "displayName": "飞艇高爆",
    "sectionType": "Warhead"
  },
  "BlimpHEE": {
    "displayName": "飞艇HEE弹头",
    "sectionType": "Warhead"
  },
  "ARTYHE": {
    "displayName": "ARTYHE弹头",
    "sectionType": "Warhead"
  },
  "ARTYHE2": {
    "displayName": "ARTYHE 2弹头",
    "sectionType": "Warhead"
  },
  "IonWH": {
    "displayName": "离子炮弹头",
    "sectionType": "Warhead"
  },
  "ZTargetKill": {
    "displayName": "Z目标击杀",
    "sectionType": "Warhead"
  },
  "SirenKillWH": {
    "displayName": "塞壬护卫舰击杀弹头",
    "sectionType": "Warhead"
  },
  "VisionKillWH": {
    "displayName": "心灵视界击杀弹头",
    "sectionType": "Warhead"
  },
  "FakeKillSelfWH": {
    "displayName": "伪装击杀Self弹头",
    "sectionType": "Warhead"
  },
  "JammerKillWH": {
    "displayName": "干扰器击杀弹头",
    "sectionType": "Warhead"
  },
  "FuryKillWH": {
    "displayName": "Fury击杀弹头",
    "sectionType": "Warhead"
  },
  "VenomKillWH": {
    "displayName": "毒液击杀弹头",
    "sectionType": "Warhead"
  },
  "DiverKillWH": {
    "displayName": "爆裂蜂击杀弹头",
    "sectionType": "Warhead"
  },
  "WasteKillWH": {
    "displayName": "辐射自爆机击杀弹头",
    "sectionType": "Warhead"
  },
  "ScorchKillWH": {
    "displayName": "灼烧击杀弹头",
    "sectionType": "Warhead"
  },
  "MadKillWH": {
    "displayName": "MAD击杀弹头",
    "sectionType": "Warhead"
  },
  "MagKillWH": {
    "displayName": "Mag击杀弹头",
    "sectionType": "Warhead"
  },
  "AddonKillWH": {
    "displayName": "附加逻辑击杀弹头",
    "sectionType": "Warhead"
  },
  "FUSIKILL": {
    "displayName": "FUSIKILL弹头",
    "sectionType": "Warhead"
  },
  "HowitzerWH": {
    "displayName": "Howitzer弹头",
    "sectionType": "Warhead"
  },
  "HowitzerBeaconWH": {
    "displayName": "HowitzerBeacon弹头",
    "sectionType": "Warhead"
  },
  "AirhackAnimWH": {
    "displayName": "Airhack动画弹头",
    "sectionType": "Warhead"
  },
  "ColossusAAWH": {
    "displayName": "Colossus对空WH弹头",
    "sectionType": "Warhead"
  },
  "ColossusAnimWH": {
    "displayName": "Colossus动画弹头",
    "sectionType": "Warhead"
  },
  "BasiliskWH": {
    "displayName": "Basilisk弹头",
    "sectionType": "Warhead"
  },
  "BasiliskWHE": {
    "displayName": "Basilisk精英弹头",
    "sectionType": "Warhead"
  },
  "TyrantWH": {
    "displayName": "Tyrant弹头",
    "sectionType": "Warhead"
  },
  "RazgarWH": {
    "displayName": "Razgar弹头",
    "sectionType": "Warhead"
  },
  "PsychicDartsWH": {
    "displayName": "心灵Darts弹头",
    "sectionType": "Warhead"
  },
  "SwordfishWH": {
    "displayName": "剑鱼弹头",
    "sectionType": "Warhead"
  },
  "LancerWH": {
    "displayName": "枪骑兵弹头",
    "sectionType": "Warhead"
  },
  "Lancer2WH": {
    "displayName": "枪骑兵 2弹头",
    "sectionType": "Warhead"
  },
  "LancerOTWH": {
    "displayName": "枪骑兵OTWH",
    "sectionType": "Warhead"
  },
  "DLancerWH": {
    "displayName": "D枪骑兵弹头",
    "sectionType": "Warhead"
  },
  "DLancer2WH": {
    "displayName": "D枪骑兵 2弹头",
    "sectionType": "Warhead"
  },
  "DLancerOTWH": {
    "displayName": "D枪骑兵OTWH",
    "sectionType": "Warhead"
  },
  "RamWeldWH": {
    "displayName": "冲撞Weld弹头",
    "sectionType": "Warhead"
  },
  "NeonWeldWH": {
    "displayName": "NeonWeld弹头",
    "sectionType": "Warhead"
  },
  "SeekerWH": {
    "displayName": "追踪者弹头",
    "sectionType": "Warhead"
  },
  "SeekerBombWH": {
    "displayName": "追踪者炸弹弹头",
    "sectionType": "Warhead"
  },
  "DSeekerBombWH": {
    "displayName": "D追踪者炸弹弹头",
    "sectionType": "Warhead"
  },
  "MeteorImpactWH": {
    "displayName": "Meteor冲击弹头",
    "sectionType": "Warhead"
  },
  "AP": {
    "displayName": "穿甲",
    "sectionType": "Warhead"
  },
  "RHINAPE": {
    "displayName": "RHINAPE弹头",
    "sectionType": "Warhead"
  },
  "TurretAP": {
    "displayName": "Turret穿甲",
    "sectionType": "Warhead"
  },
  "TurretAPE": {
    "displayName": "TurretAPE弹头",
    "sectionType": "Warhead"
  },
  "FortressAP": {
    "displayName": "堡垒穿甲",
    "sectionType": "Warhead"
  },
  "ScavAP": {
    "displayName": "拾荒者穿甲",
    "sectionType": "Warhead"
  },
  "AbramsCannonWH": {
    "displayName": "Abrams加农炮弹头",
    "sectionType": "Warhead"
  },
  "JAGDWH": {
    "displayName": "J对地DWH弹头",
    "sectionType": "Warhead"
  },
  "JAGDWHE": {
    "displayName": "J对地DWHE弹头",
    "sectionType": "Warhead"
  },
  "JAGDMissileWH": {
    "displayName": "J对地D导弹弹头",
    "sectionType": "Warhead"
  },
  "CataAP": {
    "displayName": "灾厄坦克穿甲",
    "sectionType": "Warhead"
  },
  "CataAPE": {
    "displayName": "灾厄坦克APE",
    "sectionType": "Warhead"
  },
  "TeslaAP": {
    "displayName": "磁暴穿甲",
    "sectionType": "Warhead"
  },
  "TeslaAPE": {
    "displayName": "磁暴APE",
    "sectionType": "Warhead"
  },
  "ApocalypseWH": {
    "displayName": "天启弹头",
    "sectionType": "Warhead"
  },
  "ApocalypseWHE": {
    "displayName": "天启精英弹头",
    "sectionType": "Warhead"
  },
  "Eureka1WH": {
    "displayName": "尤里卡 1弹头",
    "sectionType": "Warhead"
  },
  "Eureka2WH": {
    "displayName": "尤里卡 2弹头",
    "sectionType": "Warhead"
  },
  "GharialPilesWH": {
    "displayName": "长吻鳄Piles弹头",
    "sectionType": "Warhead"
  },
  "ARMORAP": {
    "displayName": "ARMORAP弹头",
    "sectionType": "Warhead"
  },
  "ASWSplash": {
    "displayName": "鱼鹰无人机Splash",
    "sectionType": "Warhead"
  },
  "RoboSplash": {
    "displayName": "机器人坦克Splash",
    "sectionType": "Warhead"
  },
  "APSplash": {
    "displayName": "穿甲Splash",
    "sectionType": "Warhead"
  },
  "SuperSubAP": {
    "displayName": "超级台风攻击潜艇穿甲",
    "sectionType": "Warhead"
  },
  "APSplashNaut": {
    "displayName": "穿甲Splash鹦鹉螺磁力潜艇",
    "sectionType": "Warhead"
  },
  "CannonBunkerWH": {
    "displayName": "加农炮Bunker弹头",
    "sectionType": "Warhead"
  },
  "CannonBunkerWHE": {
    "displayName": "加农炮Bunker精英弹头",
    "sectionType": "Warhead"
  },
  "GUARDWH": {
    "displayName": "GUARDWH弹头",
    "sectionType": "Warhead"
  },
  "TRexWH": {
    "displayName": "TRex弹头",
    "sectionType": "Warhead"
  },
  "TRexInfWH": {
    "displayName": "TRexInf弹头",
    "sectionType": "Warhead"
  },
  "FakeC4WH": {
    "displayName": "伪装C4弹头",
    "sectionType": "Warhead"
  },
  "VirusGas": {
    "displayName": "病毒Gas",
    "sectionType": "Warhead"
  },
  "PromeNanoWH": {
    "displayName": "普罗米修斯纳米弹头",
    "sectionType": "Warhead"
  },
  "HECannonWH": {
    "displayName": "高爆加农炮弹头",
    "sectionType": "Warhead"
  },
  "BuratinoWH": {
    "displayName": "Buratino弹头",
    "sectionType": "Warhead"
  },
  "QuadMortarWH": {
    "displayName": "迷雾机动车Mortar弹头",
    "sectionType": "Warhead"
  },
  "ScorchbombWH": {
    "displayName": "Scorchbomb弹头",
    "sectionType": "Warhead"
  },
  "ScorchbombDWH": {
    "displayName": "ScorchbombDWH弹头",
    "sectionType": "Warhead"
  },
  "Scorchbomb2WH": {
    "displayName": "Scorchbomb 2弹头",
    "sectionType": "Warhead"
  },
  "ScorchbombFragWH": {
    "displayName": "Scorchbomb破片弹头",
    "sectionType": "Warhead"
  },
  "VultureBombsWH": {
    "displayName": "秃鹫炸弹弹头",
    "sectionType": "Warhead"
  },
  "VultureBombsWHE": {
    "displayName": "秃鹫炸弹精英弹头",
    "sectionType": "Warhead"
  },
  "FirestormWH": {
    "displayName": "火风暴弹头",
    "sectionType": "Warhead"
  },
  "PyroWH": {
    "displayName": "Pyro弹头",
    "sectionType": "Warhead"
  },
  "PyroWHE": {
    "displayName": "Pyro精英弹头",
    "sectionType": "Warhead"
  },
  "BorilloWH": {
    "displayName": "Borillo弹头",
    "sectionType": "Warhead"
  },
  "BorilloWHE": {
    "displayName": "Borillo精英弹头",
    "sectionType": "Warhead"
  },
  "TurretFireWH": {
    "displayName": "Turret火焰弹头",
    "sectionType": "Warhead"
  },
  "TurretFireWHE": {
    "displayName": "Turret火焰精英弹头",
    "sectionType": "Warhead"
  },
  "TurretAnimFireWH": {
    "displayName": "Turret动画火焰弹头",
    "sectionType": "Warhead"
  },
  "WhiteFlameWH": {
    "displayName": "白色火焰弹头",
    "sectionType": "Warhead"
  },
  "WhiteFlameWHE": {
    "displayName": "白色火焰精英弹头",
    "sectionType": "Warhead"
  },
  "BlueFire": {
    "displayName": "蓝色火焰",
    "sectionType": "Warhead"
  },
  "Fire": {
    "displayName": "火焰",
    "sectionType": "Warhead"
  },
  "Fire2": {
    "displayName": "火焰 2",
    "sectionType": "Warhead"
  },
  "FireStreamWH": {
    "displayName": "火焰Stream弹头",
    "sectionType": "Warhead"
  },
  "RuptureWH": {
    "displayName": "Rupture弹头",
    "sectionType": "Warhead"
  },
  "SuperRuptureWH": {
    "displayName": "超级Rupture弹头",
    "sectionType": "Warhead"
  },
  "ChronoImprisonWH": {
    "displayName": "超时空禁锢弹头",
    "sectionType": "Warhead"
  },
  "StunGunWH": {
    "displayName": "眩晕机枪弹头",
    "sectionType": "Warhead"
  },
  "GrinderWH": {
    "displayName": "粉碎回收厂弹头",
    "sectionType": "Warhead"
  },
  "GrinderRigWH": {
    "displayName": "粉碎回收厂Rig弹头",
    "sectionType": "Warhead"
  },
  "HollowPointAnimal": {
    "displayName": "空尖弹Animal",
    "sectionType": "Warhead"
  },
  "UnderBladeWH": {
    "displayName": "马尔翁刀刃弹头",
    "sectionType": "Warhead"
  },
  "VirusWH": {
    "displayName": "病毒弹头",
    "sectionType": "Warhead"
  },
  "VirusWHE": {
    "displayName": "病毒精英弹头",
    "sectionType": "Warhead"
  },
  "VirusAttach": {
    "displayName": "病毒附着",
    "sectionType": "Warhead"
  },
  "FinAutoSniperGunWH": {
    "displayName": "菲因自动狙击枪机枪弹头",
    "sectionType": "Warhead"
  },
  "Super": {
    "displayName": "超级",
    "sectionType": "Warhead"
  },
  "SuperSeal": {
    "displayName": "超级海豹突击队",
    "sectionType": "Warhead"
  },
  "SuperSpecial": {
    "displayName": "超级特殊",
    "sectionType": "Warhead"
  },
  "Crush": {
    "displayName": "Crush弹头",
    "sectionType": "Warhead"
  },
  "SiblingFinHeal": {
    "displayName": "Sibling菲因治疗",
    "sectionType": "Warhead"
  },
  "SiblingAlizeHeal": {
    "displayName": "SiblingAlize治疗",
    "sectionType": "Warhead"
  },
  "OrganicAnim": {
    "displayName": "Organic动画",
    "sectionType": "Warhead"
  },
  "HuntressHealWH": {
    "displayName": "女猎手治疗弹头",
    "sectionType": "Warhead"
  },
  "MantisLifeWH": {
    "displayName": "Mantis生命弹头",
    "sectionType": "Warhead"
  },
  "ThorHTLWH": {
    "displayName": "雷神HTLWH",
    "sectionType": "Warhead"
  },
  "JudgementWH": {
    "displayName": "审判弹头",
    "sectionType": "Warhead"
  },
  "NanochargeWH": {
    "displayName": "纳米充能弹头",
    "sectionType": "Warhead"
  },
  "GodsbaneMissileWH": {
    "displayName": "Godsbane导弹弹头",
    "sectionType": "Warhead"
  },
  "GodsbaneFragWH": {
    "displayName": "Godsbane破片弹头",
    "sectionType": "Warhead"
  },
  "SeitaadMissileWH": {
    "displayName": "塞泰龙弩炮导弹弹头",
    "sectionType": "Warhead"
  },
  "SeitaadMissileFragWH": {
    "displayName": "塞泰龙弩炮导弹破片弹头",
    "sectionType": "Warhead"
  },
  "OxidizerTargetWH": {
    "displayName": "Oxidizer目标弹头",
    "sectionType": "Warhead"
  },
  "TyrantTargetWH": {
    "displayName": "Tyrant目标弹头",
    "sectionType": "Warhead"
  },
  "CorossionBWH": {
    "displayName": "CorossionBWH弹头",
    "sectionType": "Warhead"
  },
  "RoadrunnerNerfWH": {
    "displayName": "Roadrunner削弱弹头",
    "sectionType": "Warhead"
  },
  "HyperionFlashWH": {
    "displayName": "HyperionFlash弹头",
    "sectionType": "Warhead"
  },
  "Cryobeam1WH": {
    "displayName": "冷冻光束 1弹头",
    "sectionType": "Warhead"
  },
  "Cryobeam2WH": {
    "displayName": "冷冻光束 2弹头",
    "sectionType": "Warhead"
  },
  "Cryobeam3WH": {
    "displayName": "冷冻光束 3弹头",
    "sectionType": "Warhead"
  },
  "Cryobeam4WH": {
    "displayName": "冷冻光束 4弹头",
    "sectionType": "Warhead"
  },
  "CryobeamIAnimAWH": {
    "displayName": "冷冻光束I动画AWH",
    "sectionType": "Warhead"
  },
  "Cryobeam5WH": {
    "displayName": "冷冻光束 5弹头",
    "sectionType": "Warhead"
  },
  "CryobeamIVAnimAWH": {
    "displayName": "冷冻光束IV动画AWH",
    "sectionType": "Warhead"
  },
  "Cryobeam6WH": {
    "displayName": "冷冻光束 6弹头",
    "sectionType": "Warhead"
  },
  "Cryobeam6AnimAWH": {
    "displayName": "冷冻光束6动画AWH",
    "sectionType": "Warhead"
  },
  "Cryobeam6AnimBWH": {
    "displayName": "冷冻光束6动画BWH",
    "sectionType": "Warhead"
  },
  "Cryobeam6AnimCWH": {
    "displayName": "冷冻光束6动画CWH",
    "sectionType": "Warhead"
  },
  "CryoshotSuperWH": {
    "displayName": "冰锥超级弹头",
    "sectionType": "Warhead"
  },
  "CryospearSuperWH": {
    "displayName": "冰枪超级弹头",
    "sectionType": "Warhead"
  },
  "SuppressorPartWH": {
    "displayName": "SuppressorPart弹头",
    "sectionType": "Warhead"
  },
  "SuppressorWH": {
    "displayName": "Suppressor弹头",
    "sectionType": "Warhead"
  },
  "WarpnodeWH": {
    "displayName": "Warpnode弹头",
    "sectionType": "Warhead"
  },
  "RedSuppress": {
    "displayName": "红色压制",
    "sectionType": "Warhead"
  },
  "BondBreakerWH": {
    "displayName": "BondBreaker弹头",
    "sectionType": "Warhead"
  },
  "BondEruptionWH": {
    "displayName": "BondEruption弹头",
    "sectionType": "Warhead"
  },
  "BondEruption2WH": {
    "displayName": "BondEruption 2弹头",
    "sectionType": "Warhead"
  },
  "KineticBarrierWH": {
    "displayName": "Kinetic屏障弹头",
    "sectionType": "Warhead"
  },
  "CyclopsBuffWH": {
    "displayName": "独眼巨人增益弹头",
    "sectionType": "Warhead"
  },
  "OverchargeWH": {
    "displayName": "超载弹头",
    "sectionType": "Warhead"
  },
  "PerunChargeWH": {
    "displayName": "佩龙旗舰Charge弹头",
    "sectionType": "Warhead"
  },
  "UnderminerWH": {
    "displayName": "Underminer弹头",
    "sectionType": "Warhead"
  },
  "UCUnderminerWH": {
    "displayName": "驻军Underminer弹头",
    "sectionType": "Warhead"
  },
  "BrightFlashWH": {
    "displayName": "BrightFlash弹头",
    "sectionType": "Warhead"
  },
  "SuperFlashWH": {
    "displayName": "超级Flash弹头",
    "sectionType": "Warhead"
  },
  "CryobaseWH": {
    "displayName": "Cryobase弹头",
    "sectionType": "Warhead"
  },
  "IronBlastFlashWH": {
    "displayName": "无敌爆破Flash弹头",
    "sectionType": "Warhead"
  },
  "IronDeviceFlashWH": {
    "displayName": "无敌DeviceFlash弹头",
    "sectionType": "Warhead"
  },
  "IronOldFlashWH": {
    "displayName": "无敌OldFlash弹头",
    "sectionType": "Warhead"
  },
  "BoidmachineFlashWH": {
    "displayName": "BoidmachineFlash弹头",
    "sectionType": "Warhead"
  },
  "ShadrayFlashWH": {
    "displayName": "ShadrayFlash弹头",
    "sectionType": "Warhead"
  },
  "DSpiderWebWH": {
    "displayName": "D蜘蛛蛛网弹头",
    "sectionType": "Warhead"
  },
  "SpiderWebWH": {
    "displayName": "蜘蛛蛛网弹头",
    "sectionType": "Warhead"
  },
  "StunGridWH": {
    "displayName": "眩晕网格弹头",
    "sectionType": "Warhead"
  },
  "BuzzardMinesStunWH": {
    "displayName": "秃鹰地雷眩晕弹头",
    "sectionType": "Warhead"
  },
  "RageInductorWH": {
    "displayName": "狂怒Inductor弹头",
    "sectionType": "Warhead"
  },
  "GlacialScreenWH": {
    "displayName": "冰川Screen弹头",
    "sectionType": "Warhead"
  },
  "IrradiateBetaWH": {
    "displayName": "IrradiateBeta弹头",
    "sectionType": "Warhead"
  },
  "IrradiateWH": {
    "displayName": "Irradiate弹头",
    "sectionType": "Warhead"
  },
  "MaintenanceWH": {
    "displayName": "Maintenance弹头",
    "sectionType": "Warhead"
  },
  "CraneWeaponWH": {
    "displayName": "Crane武器弹头",
    "sectionType": "Warhead"
  },
  "IronGuardWH": {
    "displayName": "无敌守卫弹头",
    "sectionType": "Warhead"
  },
  "MaintAnimWH": {
    "displayName": "建筑维护动画弹头",
    "sectionType": "Warhead"
  },
  "CraneAnimWH": {
    "displayName": "Crane动画弹头",
    "sectionType": "Warhead"
  },
  "IllusionWH": {
    "displayName": "Illusion弹头",
    "sectionType": "Warhead"
  },
  "StealthGeneratorWH": {
    "displayName": "隐形发生器弹头",
    "sectionType": "Warhead"
  },
  "StealthHazequadWH": {
    "displayName": "隐形迷雾四旋翼弹头",
    "sectionType": "Warhead"
  },
  "SodarBoostRealWH": {
    "displayName": "声呐强化实体弹头",
    "sectionType": "Warhead"
  },
  "MegaarenaRealWH": {
    "displayName": "巨齿鲨竞技场实体弹头",
    "sectionType": "Warhead"
  },
  "LightningRodWH": {
    "displayName": "闪电避雷针弹头",
    "sectionType": "Warhead"
  },
  "TargetAllCaster": {
    "displayName": "目标鳄鱼Caster",
    "sectionType": "Warhead"
  },
  "NuclearPathWH": {
    "displayName": "NuclearPath弹头",
    "sectionType": "Warhead"
  },
  "ChronoboostWH": {
    "displayName": "超时空加速弹头",
    "sectionType": "Warhead"
  },
  "SpinGeneratorWH": {
    "displayName": "旋转发生器弹头",
    "sectionType": "Warhead"
  },
  "GSpinGeneratorWH": {
    "displayName": "G旋转发生器弹头",
    "sectionType": "Warhead"
  },
  "HypergateWH": {
    "displayName": "超门弹头",
    "sectionType": "Warhead"
  },
  "DefenseBuffWH": {
    "displayName": "防御增益弹头",
    "sectionType": "Warhead"
  },
  "TankBunkerBuffWH": {
    "displayName": "TankBunker增益弹头",
    "sectionType": "Warhead"
  },
  "StructureBuffWH": {
    "displayName": "建筑增益弹头",
    "sectionType": "Warhead"
  },
  "ShieldGeneratorWH": {
    "displayName": "护盾发生器弹头",
    "sectionType": "Warhead"
  },
  "TimeWarp1WH": {
    "displayName": "时间传送 1弹头",
    "sectionType": "Warhead"
  },
  "TimeWarp2WH": {
    "displayName": "时间传送 2弹头",
    "sectionType": "Warhead"
  },
  "Organic": {
    "displayName": "Organic弹头",
    "sectionType": "Warhead"
  },
  "RegenWH": {
    "displayName": "Regen弹头",
    "sectionType": "Warhead"
  },
  "WonderWH": {
    "displayName": "Wonder弹头",
    "sectionType": "Warhead"
  },
  "RegenHealWH": {
    "displayName": "Regen治疗弹头",
    "sectionType": "Warhead"
  },
  "HealthyWH": {
    "displayName": "Healthy弹头",
    "sectionType": "Warhead"
  },
  "ComancheHealWH": {
    "displayName": "Comanche治疗弹头",
    "sectionType": "Warhead"
  },
  "RepairMechanical": {
    "displayName": "维修Mechanical",
    "sectionType": "Warhead"
  },
  "RepairMechanicalNMIN": {
    "displayName": "维修Mechanical矿甲虫",
    "sectionType": "Warhead"
  },
  "RepairMechanicalReju": {
    "displayName": "维修Mechanical空中维修机",
    "sectionType": "Warhead"
  },
  "Mechanical": {
    "displayName": "Mechanical弹头",
    "sectionType": "Warhead"
  },
  "MechanicalNegative": {
    "displayName": "Mechanical负片",
    "sectionType": "Warhead"
  },
  "MechanicalRig": {
    "displayName": "MechanicalRig弹头",
    "sectionType": "Warhead"
  },
  "BackwarpWH": {
    "displayName": "回溯弹头",
    "sectionType": "Warhead"
  },
  "MastodonHeal": {
    "displayName": "Mastodon治疗",
    "sectionType": "Warhead"
  },
  "ExtendLifeHeal": {
    "displayName": "延长生命治疗",
    "sectionType": "Warhead"
  },
  "Controller": {
    "displayName": "Controller弹头",
    "sectionType": "Warhead"
  },
  "ControllerSeizer": {
    "displayName": "Controller恶灵摄魂师",
    "sectionType": "Warhead"
  },
  "ControllerSpecial": {
    "displayName": "Controller特殊",
    "sectionType": "Warhead"
  },
  "ControllerBuilding": {
    "displayName": "Controller建筑",
    "sectionType": "Warhead"
  },
  "ControllerBeacon": {
    "displayName": "ControllerBeacon弹头",
    "sectionType": "Warhead"
  },
  "Parasite": {
    "displayName": "Parasite弹头",
    "sectionType": "Warhead"
  },
  "HollowPointDrone": {
    "displayName": "空尖弹Drone",
    "sectionType": "Warhead"
  },
  "LibraDustWH": {
    "displayName": "天秤尘旋风支援机弹头",
    "sectionType": "Warhead"
  },
  "PsiPulse": {
    "displayName": "PsiPulse弹头",
    "sectionType": "Warhead"
  },
  "SuperPsiPulse": {
    "displayName": "超级PsiPulse",
    "sectionType": "Warhead"
  },
  "IvanBomb": {
    "displayName": "疯狂伊文炸弹",
    "sectionType": "Warhead"
  },
  "FVIvanBomb": {
    "displayName": "斯特瑞克步兵战车疯狂伊文炸弹",
    "sectionType": "Warhead"
  },
  "FlintBomb": {
    "displayName": "Flint炸弹",
    "sectionType": "Warhead"
  },
  "BridgeKillerWH": {
    "displayName": "BridgeKiller弹头",
    "sectionType": "Warhead"
  },
  "ArsonistPlaceWH": {
    "displayName": "ArsonistPlace弹头",
    "sectionType": "Warhead"
  },
  "FVArsonistPlaceWH": {
    "displayName": "斯特瑞克步兵战车ArsonistPlace弹头",
    "sectionType": "Warhead"
  },
  "RepulsorPlaceWH": {
    "displayName": "RepulsorPlace弹头",
    "sectionType": "Warhead"
  },
  "FVRepulsorPlaceWH": {
    "displayName": "斯特瑞克步兵战车RepulsorPlace弹头",
    "sectionType": "Warhead"
  },
  "TanyaC4WH": {
    "displayName": "谭雅C4弹头",
    "sectionType": "Warhead"
  },
  "SealC4WH": {
    "displayName": "海豹突击队C4弹头",
    "sectionType": "Warhead"
  },
  "SpecialC4WH": {
    "displayName": "特殊 C4 弹头",
    "sectionType": "Warhead"
  },
  "IvanWH": {
    "displayName": "疯狂伊文弹头",
    "sectionType": "Warhead"
  },
  "IvanWHE": {
    "displayName": "疯狂伊文精英弹头",
    "sectionType": "Warhead"
  },
  "IvanDeathWH": {
    "displayName": "疯狂伊文死亡弹头",
    "sectionType": "Warhead"
  },
  "TerrorBombWH": {
    "displayName": "拉丁同盟炸弹弹头",
    "sectionType": "Warhead"
  },
  "FVTerrorBombWH": {
    "displayName": "斯特瑞克步兵战车拉丁同盟炸弹弹头",
    "sectionType": "Warhead"
  },
  "FuryWH": {
    "displayName": "Fury弹头",
    "sectionType": "Warhead"
  },
  "ArsonistWH": {
    "displayName": "Arsonist弹头",
    "sectionType": "Warhead"
  },
  "HurricaneSpawnWH": {
    "displayName": "飓风生成弹头",
    "sectionType": "Warhead"
  },
  "BuzzardMinesWH": {
    "displayName": "秃鹰地雷弹头",
    "sectionType": "Warhead"
  },
  "Gas": {
    "displayName": "Gas弹头",
    "sectionType": "Warhead"
  },
  "SmokebombsWH": {
    "displayName": "烟雾弹空袭弹头",
    "sectionType": "Warhead"
  },
  "DustbombsWH": {
    "displayName": "Dustbombs弹头",
    "sectionType": "Warhead"
  },
  "SmokeCannonWH": {
    "displayName": "Smoke加农炮弹头",
    "sectionType": "Unknown"
  },
  "SmokebombsSingleWH": {
    "displayName": "烟雾弹空袭Single弹头",
    "sectionType": "Warhead"
  },
  "AirhackWH": {
    "displayName": "Airhack弹头",
    "sectionType": "Warhead"
  },
  "GroundhackWH": {
    "displayName": "Groundhack弹头",
    "sectionType": "Warhead"
  },
  "BridgeBoom": {
    "displayName": "BridgeBoom弹头",
    "sectionType": "Warhead"
  },
  "IvanFire": {
    "displayName": "疯狂伊文火焰",
    "sectionType": "Warhead"
  },
  "ArsoFire": {
    "displayName": "纵火狂火焰",
    "sectionType": "Warhead"
  },
  "ScorchFire": {
    "displayName": "灼烧火焰",
    "sectionType": "Warhead"
  },
  "HurricaneWH": {
    "displayName": "飓风弹头",
    "sectionType": "Warhead"
  },
  "HurrRockWH": {
    "displayName": "长生鸟空中哨站岩石弹头",
    "sectionType": "Warhead"
  },
  "DeathWH": {
    "displayName": "死亡弹头",
    "sectionType": "Warhead"
  },
  "InfantryDeathWH": {
    "displayName": "步兵死亡弹头",
    "sectionType": "Warhead"
  },
  "UnitDeathWH": {
    "displayName": "单位死亡弹头",
    "sectionType": "Warhead"
  },
  "AircraftDeathWH": {
    "displayName": "飞机死亡弹头",
    "sectionType": "Warhead"
  },
  "BlimpHEEffect": {
    "displayName": "飞艇高爆效果",
    "sectionType": "Warhead"
  },
  "IrkallaEffect": {
    "displayName": "Irkalla效果弹头",
    "sectionType": "Warhead"
  },
  "StardustHEEffect": {
    "displayName": "悖论引擎高爆效果",
    "sectionType": "Warhead"
  },
  "RoadrunnerDeathWH": {
    "displayName": "Roadrunner死亡弹头",
    "sectionType": "Warhead"
  },
  "MegalodonDeathWH": {
    "displayName": "巨齿鲨死亡弹头",
    "sectionType": "Warhead"
  },
  "UraganDeathWH": {
    "displayName": "乌拉甘死亡弹头",
    "sectionType": "Warhead"
  },
  "MantisDeathWH": {
    "displayName": "Mantis死亡弹头",
    "sectionType": "Warhead"
  },
  "ScavengerDeathWH": {
    "displayName": "拾荒者死亡弹头",
    "sectionType": "Warhead"
  },
  "ToxicMolesWH": {
    "displayName": "毒素Moles弹头",
    "sectionType": "Warhead"
  },
  "RocksExplosionWH": {
    "displayName": "岩石爆炸弹头",
    "sectionType": "Warhead"
  },
  "OilExplosionWH": {
    "displayName": "油井爆炸弹头",
    "sectionType": "Warhead"
  },
  "OilDerrickExplosionWH": {
    "displayName": "油井Derrick爆炸弹头",
    "sectionType": "Warhead"
  },
  "StealthExplosionWH": {
    "displayName": "隐形爆炸弹头",
    "sectionType": "Warhead"
  },
  "MineBombWH": {
    "displayName": "地雷炸弹弹头",
    "sectionType": "Warhead"
  },
  "CryomineBombWH": {
    "displayName": "Cryomine炸弹弹头",
    "sectionType": "Warhead"
  },
  "CryomineFreezeWH": {
    "displayName": "Cryomine冻结弹头",
    "sectionType": "Warhead"
  },
  "DuplicantWH": {
    "displayName": "复制人弹头",
    "sectionType": "Warhead"
  },
  "FVDuplicantWH": {
    "displayName": "斯特瑞克步兵战车复制人弹头",
    "sectionType": "Warhead"
  },
  "RiotSuppressWH": {
    "displayName": "防暴压制弹头",
    "sectionType": "Warhead"
  },
  "RiotGrenadeWH": {
    "displayName": "防暴榴弹弹头",
    "sectionType": "Warhead"
  },
  "RiotGrenadeGarrisonWH": {
    "displayName": "防暴榴弹Garrison弹头",
    "sectionType": "Warhead"
  },
  "SpiderBombWH": {
    "displayName": "蜘蛛炸弹弹头",
    "sectionType": "Warhead"
  },
  "FVSpiderBombWH": {
    "displayName": "斯特瑞克步兵战车蜘蛛炸弹弹头",
    "sectionType": "Warhead"
  },
  "KillDriverWH": {
    "displayName": "击杀Driver弹头",
    "sectionType": "Warhead"
  },
  "KillDriverAIWH": {
    "displayName": "击杀DriverAIWH",
    "sectionType": "Warhead"
  },
  "KillDriverFixWH": {
    "displayName": "击杀DriverFix弹头",
    "sectionType": "Warhead"
  },
  "AirstrikeFlare": {
    "displayName": "Airstrike信号弹",
    "sectionType": "Warhead"
  },
  "AirstrikeFlareAI": {
    "displayName": "Airstrike信号弹AI",
    "sectionType": "Warhead"
  },
  "KillEngiWH": {
    "displayName": "击杀Engi弹头",
    "sectionType": "Warhead"
  },
  "ScourgeWH": {
    "displayName": "Scourge弹头",
    "sectionType": "Warhead"
  },
  "ScourgeWHE": {
    "displayName": "Scourge精英弹头",
    "sectionType": "Warhead"
  },
  "PlagueWH": {
    "displayName": "Plague弹头",
    "sectionType": "Warhead"
  },
  "TriggerShakerWH": {
    "displayName": "TriggerShaker弹头",
    "sectionType": "Warhead"
  },
  "NUKE": {
    "displayName": "战术核弹攻击",
    "sectionType": "Warhead"
  },
  "NUKESmall": {
    "displayName": "战术核弹攻击小型",
    "sectionType": "Warhead"
  },
  "NuclearReactorDeathWH": {
    "displayName": "NuclearReactor死亡弹头",
    "sectionType": "Warhead"
  },
  "MIDASDeathWH": {
    "displayName": "MIDAS死亡弹头",
    "sectionType": "Warhead"
  },
  "SeismicDeathWH": {
    "displayName": "Seismic死亡弹头",
    "sectionType": "Warhead"
  },
  "IonStormWH": {
    "displayName": "离子炮风暴弹头",
    "sectionType": "Warhead"
  },
  "AssasinWH": {
    "displayName": "Assasin弹头",
    "sectionType": "Warhead"
  },
  "MutationClairFixWH": {
    "displayName": "基因震爆千里眼Fix弹头",
    "sectionType": "Warhead"
  },
  "GenomineWH": {
    "displayName": "基因地雷弹头",
    "sectionType": "Warhead"
  },
  "EvolverRunWH": {
    "displayName": "进化者突击弹头",
    "sectionType": "Warhead"
  },
  "Mutate": {
    "displayName": "突变",
    "sectionType": "Warhead"
  },
  "MutateExplosion": {
    "displayName": "突变爆炸",
    "sectionType": "Warhead"
  },
  "GeneburstWH": {
    "displayName": "Geneburst弹头",
    "sectionType": "Warhead"
  },
  "GeneticGasWH": {
    "displayName": "基因Gas弹头",
    "sectionType": "Warhead"
  },
  "Nanofiber1WH": {
    "displayName": "纳米纤维同步 1弹头",
    "sectionType": "Warhead"
  },
  "Nanofiber2WH": {
    "displayName": "纳米纤维同步 2弹头",
    "sectionType": "Warhead"
  },
  "Nanofiber3WH": {
    "displayName": "纳米纤维同步 3弹头",
    "sectionType": "Warhead"
  },
  "Nanofiber4WH": {
    "displayName": "纳米纤维同步 4弹头",
    "sectionType": "Warhead"
  },
  "Nanofiber5WH": {
    "displayName": "纳米纤维同步 5弹头",
    "sectionType": "Warhead"
  },
  "Nanofiber6WH": {
    "displayName": "纳米纤维同步 6弹头",
    "sectionType": "Warhead"
  },
  "Nanofiber7WH": {
    "displayName": "纳米纤维同步 7弹头",
    "sectionType": "Warhead"
  },
  "NukeMaker": {
    "displayName": "战术核弹攻击Maker",
    "sectionType": "Warhead"
  },
  "BoidMaker": {
    "displayName": "机械造物Maker",
    "sectionType": "Warhead"
  },
  "NavalMineWH": {
    "displayName": "Naval地雷弹头",
    "sectionType": "Warhead"
  },
  "CRNUKEWH": {
    "displayName": "驻军NUKEWH弹头",
    "sectionType": "Warhead"
  },
  "TechMissileWH": {
    "displayName": "Tech导弹弹头",
    "sectionType": "Warhead"
  },
  "HunterSpikesWH": {
    "displayName": "猎杀者Spikes弹头",
    "sectionType": "Warhead"
  },
  "TarchiaCannonWH": {
    "displayName": "多智龙火炮加农炮弹头",
    "sectionType": "Warhead"
  },
  "SpikesWH": {
    "displayName": "Spikes弹头",
    "sectionType": "Warhead"
  },
  "DemobombWH": {
    "displayName": "Demobomb弹头",
    "sectionType": "Warhead"
  },
  "DemobombEWH": {
    "displayName": "DemobombEWH弹头",
    "sectionType": "Warhead"
  },
  "InfAreaRemoverWH": {
    "displayName": "InfAreaRemover弹头",
    "sectionType": "Warhead"
  },
  "AirAreaRemoverWH": {
    "displayName": "AirAreaRemover弹头",
    "sectionType": "Warhead"
  },
  "NavyAreaRemoverWH": {
    "displayName": "NavyAreaRemover弹头",
    "sectionType": "Warhead"
  },
  "HalfLifeWH": {
    "displayName": "Half生命弹头",
    "sectionType": "Warhead"
  },
  "SunburstBombWH": {
    "displayName": "Sunburst炸弹弹头",
    "sectionType": "Warhead"
  },
  "MagneticStop": {
    "displayName": "MagneticStop弹头",
    "sectionType": "Warhead"
  },
  "MagneticStopE": {
    "displayName": "MagneticStop精英",
    "sectionType": "Warhead"
  },
  "MagneticHold": {
    "displayName": "MagneticHold弹头",
    "sectionType": "Warhead"
  },
  "MagnetShiftWH": {
    "displayName": "磁力射线Shift弹头",
    "sectionType": "Warhead"
  },
  "MagnetShift2WH": {
    "displayName": "磁力射线Shift 2弹头",
    "sectionType": "Warhead"
  },
  "Battering": {
    "displayName": "Battering弹头",
    "sectionType": "Warhead"
  },
  "Smashing": {
    "displayName": "Smashing弹头",
    "sectionType": "Warhead"
  },
  "BulletBattering": {
    "displayName": "子弹Battering",
    "sectionType": "Warhead"
  },
  "WastelotWH": {
    "displayName": "Wastelot弹头",
    "sectionType": "Warhead"
  },
  "ReaperWH": {
    "displayName": "Reaper弹头",
    "sectionType": "Warhead"
  },
  "ReaperDeathWH": {
    "displayName": "Reaper死亡弹头",
    "sectionType": "Warhead"
  },
  "RadBeamWarhead": {
    "displayName": "辐射光束弹头",
    "sectionType": "Warhead"
  },
  "KrukovRadBeamWH": {
    "displayName": "库可夫辐射光束弹头",
    "sectionType": "Warhead"
  },
  "ScavengerRadBeamWH": {
    "displayName": "拾荒者辐射光束弹头",
    "sectionType": "Warhead"
  },
  "EradiationWH": {
    "displayName": "Eradiation弹头",
    "sectionType": "Warhead"
  },
  "RadSmallWarhead": {
    "displayName": "辐射小型弹头",
    "sectionType": "Warhead"
  },
  "RadBigWarhead": {
    "displayName": "辐射Big弹头",
    "sectionType": "Warhead"
  },
  "RadEruptionWarhead": {
    "displayName": "辐射Eruption弹头",
    "sectionType": "Warhead"
  },
  "RadEradicationWH": {
    "displayName": "辐射Eradication弹头",
    "sectionType": "Warhead"
  },
  "RadSite": {
    "displayName": "辐射Site",
    "sectionType": "Warhead"
  },
  "DisruptorFieldWH": {
    "displayName": "Disruptor力场弹头",
    "sectionType": "Warhead"
  },
  "UraniumWH": {
    "displayName": "Uranium弹头",
    "sectionType": "Warhead"
  },
  "UraniumWH2": {
    "displayName": "Uranium弹头 2",
    "sectionType": "Warhead"
  },
  "NuwaDeathWH": {
    "displayName": "Nuwa死亡弹头",
    "sectionType": "Warhead"
  },
  "CyComWH": {
    "displayName": "CyCom弹头",
    "sectionType": "Warhead"
  },
  "CyComWHE": {
    "displayName": "CyCom精英弹头",
    "sectionType": "Warhead"
  },
  "AlizeGunWH": {
    "displayName": "Alize机枪弹头",
    "sectionType": "Warhead"
  },
  "GharialWH": {
    "displayName": "长吻鳄弹头",
    "sectionType": "Warhead"
  },
  "KingsGunWH": {
    "displayName": "天神机枪弹头",
    "sectionType": "Warhead"
  },
  "PrismWarhead": {
    "displayName": "光棱弹头",
    "sectionType": "Warhead"
  },
  "ParadoxPrismWH": {
    "displayName": "Paradox光棱弹头",
    "sectionType": "Warhead"
  },
  "CometWH": {
    "displayName": "Comet弹头",
    "sectionType": "Warhead"
  },
  "CometFragmentWH": {
    "displayName": "Comet破片弹头",
    "sectionType": "Warhead"
  },
  "EnforcerWH": {
    "displayName": "Enforcer弹头",
    "sectionType": "Warhead"
  },
  "DolphinWH": {
    "displayName": "海豚弹头",
    "sectionType": "Warhead"
  },
  "WidowSignalWH": {
    "displayName": "寡妇信号弹头",
    "sectionType": "Warhead"
  },
  "WidowSignalNerfWH": {
    "displayName": "寡妇信号削弱弹头",
    "sectionType": "Warhead"
  },
  "WidowSignalFakeWH": {
    "displayName": "寡妇信号伪装弹头",
    "sectionType": "Warhead"
  },
  "WidowSignalAlphaFakeWH": {
    "displayName": "寡妇信号透明伪装弹头",
    "sectionType": "Warhead"
  },
  "DummyWarhead": {
    "displayName": "虚拟弹头",
    "sectionType": "Warhead"
  },
  "InfernoRailgunWH": {
    "displayName": "InfernoRailgun弹头",
    "sectionType": "Warhead"
  },
  "InfernoRailgunWHBlue": {
    "displayName": "InfernoRailgun弹头蓝色",
    "sectionType": "Warhead"
  },
  "MarauderRailgunWH": {
    "displayName": "MarauderRailgun弹头",
    "sectionType": "Warhead"
  },
  "SpecialRadWH": {
    "displayName": "特殊辐射弹头",
    "sectionType": "Warhead"
  },
  "WarRigDrillsWH": {
    "displayName": "WarRigDrills弹头",
    "sectionType": "Warhead"
  },
  "ElectricTower": {
    "displayName": "Electric塔",
    "sectionType": "Warhead"
  },
  "ElectricTank": {
    "displayName": "ElectricTank弹头",
    "sectionType": "Warhead"
  },
  "ElectricCoil": {
    "displayName": "ElectricCoil弹头",
    "sectionType": "Warhead"
  },
  "ElectricSuper": {
    "displayName": "Electric超级",
    "sectionType": "Warhead"
  },
  "WormqueenBoltWH": {
    "displayName": "Wormqueen电弧弹头",
    "sectionType": "Warhead"
  },
  "ShockTrooper": {
    "displayName": "闪流步兵Trooper",
    "sectionType": "Warhead"
  },
  "Electric": {
    "displayName": "Electric弹头",
    "sectionType": "Warhead"
  },
  "ShockCyborg": {
    "displayName": "闪流步兵Cyborg",
    "sectionType": "Warhead"
  },
  "ShockCyborgFV": {
    "displayName": "闪流步兵Cyborg斯特瑞克步兵战车",
    "sectionType": "Warhead"
  },
  "ShockCyborgB": {
    "displayName": "闪流步兵CyborgB",
    "sectionType": "Warhead"
  },
  "DeathBoltWH": {
    "displayName": "死亡电弧弹头",
    "sectionType": "Warhead"
  },
  "VolkovBombWH": {
    "displayName": "沃尔科夫炸弹弹头",
    "sectionType": "Warhead"
  },
  "VolkovBombWHB": {
    "displayName": "沃尔科夫炸弹WHB",
    "sectionType": "Warhead"
  },
  "ElectricAssault": {
    "displayName": "ElectricAssault弹头",
    "sectionType": "Warhead"
  },
  "BombDisarm": {
    "displayName": "炸弹Disarm",
    "sectionType": "Warhead"
  },
  "IonCannonWH": {
    "displayName": "离子炮加农炮弹头",
    "sectionType": "Warhead"
  },
  "VeinholeWH": {
    "displayName": "Veinhole弹头",
    "sectionType": "Warhead"
  },
  "MedusaWH": {
    "displayName": "Medusa弹头",
    "sectionType": "Warhead"
  },
  "ParadoxMedusaWH": {
    "displayName": "ParadoxMedusa弹头",
    "sectionType": "Warhead"
  },
  "PatriotWH": {
    "displayName": "Patriot弹头",
    "sectionType": "Warhead"
  },
  "SAMBunkerWH": {
    "displayName": "SAMBunker弹头",
    "sectionType": "Warhead"
  },
  "HornetAP": {
    "displayName": "黄蜂无人机穿甲",
    "sectionType": "Warhead"
  },
  "StormAP": {
    "displayName": "风暴穿甲",
    "sectionType": "Warhead"
  },
  "StormAPB": {
    "displayName": "风暴APB",
    "sectionType": "Warhead"
  },
  "ORCAAP": {
    "displayName": "ORC对空P弹头",
    "sectionType": "Warhead"
  },
  "MaverickNerfWH": {
    "displayName": "Maverick削弱弹头",
    "sectionType": "Warhead"
  },
  "ORCAAPB": {
    "displayName": "ORC对空PB弹头",
    "sectionType": "Warhead"
  },
  "BEAGAP": {
    "displayName": "BE对地AP弹头",
    "sectionType": "Warhead"
  },
  "FoxSplitAP": {
    "displayName": "狐步舞者战机分裂穿甲",
    "sectionType": "Warhead"
  },
  "FoxBurnAP": {
    "displayName": "狐步舞者战机燃烧穿甲",
    "sectionType": "Warhead"
  },
  "FoxBurnAPE": {
    "displayName": "狐步舞者战机燃烧APE",
    "sectionType": "Warhead"
  },
  "GehennaGroundWH": {
    "displayName": "GehennaGround弹头",
    "sectionType": "Warhead"
  },
  "SlickWH": {
    "displayName": "Slick弹头",
    "sectionType": "Warhead"
  },
  "MIGWH": {
    "displayName": "MIGWH弹头",
    "sectionType": "Warhead"
  },
  "Snapshot": {
    "displayName": "Snapshot弹头",
    "sectionType": "Warhead"
  },
  "AntaresWH": {
    "displayName": "Antares弹头",
    "sectionType": "Warhead"
  },
  "AntaresWHBlue": {
    "displayName": "Antares弹头蓝色",
    "sectionType": "Warhead"
  },
  "HammerWH": {
    "displayName": "Hammer弹头",
    "sectionType": "Warhead"
  },
  "GrandCannonWH": {
    "displayName": "Grand加农炮弹头",
    "sectionType": "Warhead"
  },
  "GrandCannonWHB": {
    "displayName": "Grand加农炮WHB",
    "sectionType": "Warhead"
  },
  "NeutralizerWeldWH": {
    "displayName": "NeutralizerWeld弹头",
    "sectionType": "Warhead"
  },
  "RuinerRayWH": {
    "displayName": "压制飞碟Ray弹头",
    "sectionType": "Warhead"
  },
  "RuinerEffectWH": {
    "displayName": "压制飞碟效果弹头",
    "sectionType": "Warhead"
  },
  "RaccoonTankWH": {
    "displayName": "RaccoonTank弹头",
    "sectionType": "Warhead"
  },
  "OrcinusWaveWH": {
    "displayName": "逆戟鲸波弹头",
    "sectionType": "Warhead"
  },
  "ShutDownFactoriesWH": {
    "displayName": "ShutDown工厂弹头",
    "sectionType": "Warhead"
  },
  "FlakGuyATWH": {
    "displayName": "FlakGuyATWH弹头",
    "sectionType": "Warhead"
  },
  "FlakCannonWH": {
    "displayName": "Flak加农炮弹头",
    "sectionType": "Warhead"
  },
  "FlakTrackWH": {
    "displayName": "FlakTrack弹头",
    "sectionType": "Warhead"
  },
  "FlakSeawolfWH": {
    "displayName": "Flak海狼弹头",
    "sectionType": "Warhead"
  },
  "FlakGuyAAWH": {
    "displayName": "FlakGuy对空WH弹头",
    "sectionType": "Warhead"
  },
  "FVFlakGuyAAWH": {
    "displayName": "斯特瑞克步兵战车FlakGuy对空WH",
    "sectionType": "Warhead"
  },
  "SentinelWH": {
    "displayName": "Sentinel弹头",
    "sectionType": "Warhead"
  },
  "DiskDrainWH": {
    "displayName": "入侵飞碟吸取弹头",
    "sectionType": "Warhead"
  },
  "ShadowPulse": {
    "displayName": "暗影Pulse",
    "sectionType": "Warhead"
  },
  "DiskLaserWH": {
    "displayName": "入侵飞碟激光弹头",
    "sectionType": "Warhead"
  },
  "BustLaserWH": {
    "displayName": "Bust激光弹头",
    "sectionType": "Warhead"
  },
  "MonolithLaserWH": {
    "displayName": "Monolith激光弹头",
    "sectionType": "Warhead"
  },
  "GotterWH": {
    "displayName": "哥特弹头",
    "sectionType": "Warhead"
  },
  "MegalaserWH": {
    "displayName": "Megalaser弹头",
    "sectionType": "Warhead"
  },
  "MegalaserWHE": {
    "displayName": "Megalaser精英弹头",
    "sectionType": "Warhead"
  },
  "MegalaserAAWH": {
    "displayName": "Megalaser对空WH弹头",
    "sectionType": "Warhead"
  },
  "MegalaserAAEWH": {
    "displayName": "Megalaser精英对空WH弹头",
    "sectionType": "Warhead"
  },
  "TankKillerWH": {
    "displayName": "TankKiller弹头",
    "sectionType": "Warhead"
  },
  "TankKillerWHE": {
    "displayName": "TankKiller精英弹头",
    "sectionType": "Warhead"
  },
  "LUNARWH": {
    "displayName": "LUNARWH弹头",
    "sectionType": "Warhead"
  },
  "MirageWH": {
    "displayName": "幻影弹头",
    "sectionType": "Warhead"
  },
  "MirageWHE": {
    "displayName": "幻影精英弹头",
    "sectionType": "Warhead"
  },
  "MagneShakeWH": {
    "displayName": "MagneShake弹头",
    "sectionType": "Warhead"
  },
  "CyborgGrenadeWH": {
    "displayName": "Cyborg榴弹弹头",
    "sectionType": "Warhead"
  },
  "KrukovSwordWH": {
    "displayName": "库可夫剑弹头",
    "sectionType": "Warhead"
  },
  "DominatorParticlesWH": {
    "displayName": "心灵支配inatorParticles弹头",
    "sectionType": "Warhead"
  },
  "DominatorWH": {
    "displayName": "心灵支配inator弹头",
    "sectionType": "Warhead"
  },
  "AthenaStrikeWH": {
    "displayName": "Athena打击弹头",
    "sectionType": "Warhead"
  },
  "AthenaLaserWH": {
    "displayName": "Athena激光弹头",
    "sectionType": "Warhead"
  },
  "MercuryStrikeWH": {
    "displayName": "墨丘利卫星系统终端打击弹头",
    "sectionType": "Warhead"
  },
  "MercuryLaserWH": {
    "displayName": "墨丘利卫星系统终端激光弹头",
    "sectionType": "Warhead"
  },
  "LeviWH": {
    "displayName": "利维坦无人机母舰弹头",
    "sectionType": "Warhead"
  },
  "TarchiaWH": {
    "displayName": "多智龙火炮弹头",
    "sectionType": "Warhead"
  },
  "TarchiaOldWH": {
    "displayName": "多智龙火炮Old弹头",
    "sectionType": "Warhead"
  },
  "Uragan1WH": {
    "displayName": "乌拉甘 1弹头",
    "sectionType": "Warhead"
  },
  "Uragan2WH": {
    "displayName": "乌拉甘 2弹头",
    "sectionType": "Warhead"
  },
  "DiverbeeWH": {
    "displayName": "Diverbee弹头",
    "sectionType": "Warhead"
  },
  "DiverbeeOldWH": {
    "displayName": "DiverbeeOld弹头",
    "sectionType": "Warhead"
  },
  "AvalonWH": {
    "displayName": "Avalon弹头",
    "sectionType": "Warhead"
  },
  "PrometheusWH": {
    "displayName": "Prometheus弹头",
    "sectionType": "Warhead"
  },
  "RailguneerWH": {
    "displayName": "Railguneer弹头",
    "sectionType": "Warhead"
  },
  "RailguneerOTWH": {
    "displayName": "RailguneerOTWH弹头",
    "sectionType": "Warhead"
  },
  "RailgunTowerWH": {
    "displayName": "Railgun塔弹头",
    "sectionType": "Warhead"
  },
  "IronDragonWarhead": {
    "displayName": "无敌Dragon弹头",
    "sectionType": "Warhead"
  },
  "IronDragonDeathWH": {
    "displayName": "无敌Dragon死亡弹头",
    "sectionType": "Warhead"
  },
  "IronDragonResidue": {
    "displayName": "无敌DragonResidue",
    "sectionType": "Warhead"
  },
  "IronCrateWH": {
    "displayName": "无敌箱子弹头",
    "sectionType": "Warhead"
  },
  "IronCurtain": {
    "displayName": "无敌Curtain",
    "sectionType": "Warhead"
  },
  "OldIronCurtain": {
    "displayName": "Old无敌Curtain",
    "sectionType": "Warhead"
  },
  "IronOrcinusFlashWH": {
    "displayName": "无敌逆戟鲸Flash弹头",
    "sectionType": "Warhead"
  },
  "IronCaster": {
    "displayName": "无敌Caster",
    "sectionType": "Warhead"
  },
  "LionheartWH": {
    "displayName": "狮心弹头",
    "sectionType": "Warhead"
  },
  "HarbingerDummyWH": {
    "displayName": "先驱者虚拟弹头",
    "sectionType": "Warhead"
  },
  "HarbingerWH": {
    "displayName": "先驱者弹头",
    "sectionType": "Warhead"
  },
  "FTankCannonWH": {
    "displayName": "FTank加农炮弹头",
    "sectionType": "Warhead"
  },
  "HarbingerOldWH": {
    "displayName": "先驱者Old弹头",
    "sectionType": "Warhead"
  },
  "BoidBlitzWH": {
    "displayName": "机械造物Blitz弹头",
    "sectionType": "Warhead"
  },
  "ConfuseFlareWH": {
    "displayName": "混乱信号弹弹头",
    "sectionType": "Warhead"
  },
  "ConfuseFlareFragWH": {
    "displayName": "混乱信号弹破片弹头",
    "sectionType": "Warhead"
  },
  "TeralaserWH": {
    "displayName": "Teralaser弹头",
    "sectionType": "Warhead"
  },
  "TeratornWH": {
    "displayName": "Teratorn弹头",
    "sectionType": "Warhead"
  },
  "ShrikeWH": {
    "displayName": "伯劳鸟弹头",
    "sectionType": "Warhead"
  },
  "MantaWH": {
    "displayName": "魔鬼鱼无人防空舰弹头",
    "sectionType": "Warhead"
  },
  "GiantsbaneWH": {
    "displayName": "巨人克星弹头",
    "sectionType": "Warhead"
  },
  "PhantasmWH": {
    "displayName": "Phantasm弹头",
    "sectionType": "Warhead"
  },
  "SweeperWH": {
    "displayName": "Sweeper弹头",
    "sectionType": "Warhead"
  },
  "ChargeWH": {
    "displayName": "Charge弹头",
    "sectionType": "Warhead"
  },
  "ChargeWH2": {
    "displayName": "Charge弹头 2",
    "sectionType": "Warhead"
  },
  "TarchiaTargetWH": {
    "displayName": "多智龙火炮目标弹头",
    "sectionType": "Warhead"
  },
  "AvalonChargeWH": {
    "displayName": "AvalonCharge弹头",
    "sectionType": "Warhead"
  },
  "ZorbWH": {
    "displayName": "佐布弹头",
    "sectionType": "Warhead"
  },
  "ZorbAnimWH": {
    "displayName": "佐布动画弹头",
    "sectionType": "Warhead"
  },
  "LocomotorBeam": {
    "displayName": "Locomotor光束",
    "sectionType": "Warhead"
  },
  "PromCharWH": {
    "displayName": "PromChar弹头",
    "sectionType": "Warhead"
  },
  "SuperGehennaWH": {
    "displayName": "超级Gehenna弹头",
    "sectionType": "Warhead"
  },
  "SingleBulletSys": {
    "displayName": "Single子弹Sys",
    "sectionType": "ParticleSystem"
  },
  "SingleBulletRedSys": {
    "displayName": "Single子弹红色Sys",
    "sectionType": "ParticleSystem"
  },
  "SingleBulletGoldSys": {
    "displayName": "Single子弹GoldSys",
    "sectionType": "ParticleSystem"
  },
  "TealBulletSys": {
    "displayName": "青色子弹Sys",
    "sectionType": "ParticleSystem"
  },
  "GyroBulletSys": {
    "displayName": "旋翼飞行兵子弹Sys",
    "sectionType": "ParticleSystem"
  },
  "SpeederShotSys": {
    "displayName": "SpeederShotSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "StalkerShotSys": {
    "displayName": "潜行者ShotSys",
    "sectionType": "ParticleSystem"
  },
  "RuinerSys": {
    "displayName": "压制飞碟Sys",
    "sectionType": "ParticleSystem"
  },
  "NeonwaspSys": {
    "displayName": "NeonwaspSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "PlasmaRailgunSys": {
    "displayName": "等离子RailgunSys",
    "sectionType": "ParticleSystem"
  },
  "MastodonRailgunSys": {
    "displayName": "MastodonRailgunSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "PromeLightSys": {
    "displayName": "普罗米修斯光源Sys",
    "sectionType": "ParticleSystem"
  },
  "DredLightSys": {
    "displayName": "无畏级导弹舰光源Sys",
    "sectionType": "ParticleSystem"
  },
  "GanzirLightSys": {
    "displayName": "Ganzir光源Sys",
    "sectionType": "ParticleSystem"
  },
  "SmallLightSys": {
    "displayName": "小型光源Sys",
    "sectionType": "ParticleSystem"
  },
  "RegenSys": {
    "displayName": "RegenSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "WonderSys": {
    "displayName": "WonderSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "ChaosTouchSys": {
    "displayName": "混乱TouchSys",
    "sectionType": "ParticleSystem"
  },
  "RageSys": {
    "displayName": "狂怒Sys",
    "sectionType": "ParticleSystem"
  },
  "BarrierSys": {
    "displayName": "屏障Sys",
    "sectionType": "ParticleSystem"
  },
  "AetherLightSys": {
    "displayName": "以太之光光源Sys",
    "sectionType": "ParticleSystem"
  },
  "DarkLightSys": {
    "displayName": "Dark光源Sys",
    "sectionType": "ParticleSystem"
  },
  "PowerLightSys": {
    "displayName": "电力光源Sys",
    "sectionType": "ParticleSystem"
  },
  "PowerLightSmallSys": {
    "displayName": "电力光源小型Sys",
    "sectionType": "ParticleSystem"
  },
  "CataLightSys": {
    "displayName": "灾厄坦克光源Sys",
    "sectionType": "ParticleSystem"
  },
  "AvalonRailgunSys": {
    "displayName": "AvalonRailgunSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "ShatterSys": {
    "displayName": "ShatterSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "AlphaLightSys": {
    "displayName": "透明光源Sys",
    "sectionType": "ParticleSystem"
  },
  "SpotLightSys": {
    "displayName": "Spot光源Sys",
    "sectionType": "ParticleSystem"
  },
  "NeutronRifleSys": {
    "displayName": "中子步枪Sys",
    "sectionType": "ParticleSystem"
  },
  "NeutronRifleSysE": {
    "displayName": "中子步枪Sys精英",
    "sectionType": "ParticleSystem"
  },
  "NeutronBlasterSys": {
    "displayName": "中子爆能枪Sys",
    "sectionType": "ParticleSystem"
  },
  "NeutronBlasterSysE": {
    "displayName": "中子爆能枪Sys精英",
    "sectionType": "ParticleSystem"
  },
  "NeutronCannonSys": {
    "displayName": "中子加农炮Sys",
    "sectionType": "ParticleSystem"
  },
  "NeutronCannonSysE": {
    "displayName": "中子加农炮Sys精英",
    "sectionType": "ParticleSystem"
  },
  "ChronoPrisonSys": {
    "displayName": "超时空PrisonSys",
    "sectionType": "ParticleSystem"
  },
  "SonicZapSys": {
    "displayName": "声波ZapSys",
    "sectionType": "ParticleSystem"
  },
  "SmallRailgunSys": {
    "displayName": "小型RailgunSys",
    "sectionType": "ParticleSystem"
  },
  "AlizeBeamSys": {
    "displayName": "Alize光束Sys",
    "sectionType": "ParticleSystem"
  },
  "MegaRadSys": {
    "displayName": "巨齿鲨机甲辐射Sys",
    "sectionType": "ParticleSystem"
  },
  "RahnBeamSys": {
    "displayName": "拉恩光束Sys",
    "sectionType": "ParticleSystem"
  },
  "RahnBeamSysE": {
    "displayName": "拉恩光束Sys精英",
    "sectionType": "ParticleSystem"
  },
  "LightBeamSys": {
    "displayName": "光源光束Sys",
    "sectionType": "ParticleSystem"
  },
  "LightBeamSysE": {
    "displayName": "光源光束Sys精英",
    "sectionType": "ParticleSystem"
  },
  "AntaresSys": {
    "displayName": "AntaresSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "AntaresSysBlue": {
    "displayName": "AntaresSys蓝色",
    "sectionType": "ParticleSystem"
  },
  "MiniAntaresSys": {
    "displayName": "MiniAntaresSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "MiniAntaresSysBlue": {
    "displayName": "MiniAntaresSys蓝色",
    "sectionType": "ParticleSystem"
  },
  "MarauderSys": {
    "displayName": "MarauderSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "VatGasSys": {
    "displayName": "VatGasSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "YellowSmallSys": {
    "displayName": "黄色小型Sys",
    "sectionType": "ParticleSystem"
  },
  "LargeRailgunSys": {
    "displayName": "大型RailgunSys",
    "sectionType": "ParticleSystem"
  },
  "WeldingSys": {
    "displayName": "WeldingSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "SparkSys": {
    "displayName": "SparkSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "FirestormSparkSys": {
    "displayName": "火风暴SparkSys",
    "sectionType": "ParticleSystem"
  },
  "GasCloudSys": {
    "displayName": "GasCloudSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "PsychCloudSys": {
    "displayName": "PsychCloudSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "BigGreySmokeSys": {
    "displayName": "BigGreySmokeSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "BoidSmokeSys": {
    "displayName": "机械造物SmokeSys",
    "sectionType": "ParticleSystem"
  },
  "SmokeFireSys": {
    "displayName": "Smoke火焰Sys",
    "sectionType": "ParticleSystem"
  },
  "OrangeSmokeSys": {
    "displayName": "橙色SmokeSys",
    "sectionType": "ParticleSystem"
  },
  "GreenSmokeSys": {
    "displayName": "绿色SmokeSys",
    "sectionType": "ParticleSystem"
  },
  "DummySys": {
    "displayName": "虚拟Sys",
    "sectionType": "ParticleSystem"
  },
  "SmallGreySSys": {
    "displayName": "小型GreySSys",
    "sectionType": "ParticleSystem"
  },
  "SmallIceSSys": {
    "displayName": "小型冰SSys",
    "sectionType": "ParticleSystem"
  },
  "TestSmokeSys": {
    "displayName": "TestSmokeSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "FoehnRepairSys": {
    "displayName": "Foehn维修Sys",
    "sectionType": "ParticleSystem"
  },
  "DebrisSmokeSys": {
    "displayName": "原材料SmokeSys",
    "sectionType": "ParticleSystem"
  },
  "LGSparkSys": {
    "displayName": "LGSparkSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "DominatorSys": {
    "displayName": "心灵支配inatorSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "SuperNapalmCloudSys": {
    "displayName": "超级凝固汽油CloudSys",
    "sectionType": "ParticleSystem"
  },
  "NapalmCloudSys": {
    "displayName": "凝固汽油CloudSys",
    "sectionType": "ParticleSystem"
  },
  "ScorchCloudSys": {
    "displayName": "灼烧CloudSys",
    "sectionType": "ParticleSystem"
  },
  "VultureCloudSys": {
    "displayName": "秃鹫CloudSys",
    "sectionType": "ParticleSystem"
  },
  "FoxtrotCloudSys": {
    "displayName": "FoxtrotCloudSys粒子系统",
    "sectionType": "ParticleSystem"
  },
  "TargetLaserSys": {
    "displayName": "目标激光Sys",
    "sectionType": "ParticleSystem"
  },
  "TargetLaserSysRed": {
    "displayName": "目标激光Sys红色",
    "sectionType": "ParticleSystem"
  },
  "TargetLaserSysBlue": {
    "displayName": "目标激光Sys蓝色",
    "sectionType": "ParticleSystem"
  },
  "FireStreamSys": {
    "displayName": "火焰StreamSys",
    "sectionType": "ParticleSystem"
  },
  "SingleBulletPart": {
    "displayName": "Single子弹Part",
    "sectionType": "Particle"
  },
  "SingleBulletRedPart": {
    "displayName": "Single子弹红色Part",
    "sectionType": "Particle"
  },
  "SingleBulletGoldPart": {
    "displayName": "Single子弹GoldPart",
    "sectionType": "Particle"
  },
  "TealBulletPart": {
    "displayName": "青色子弹Part",
    "sectionType": "Particle"
  },
  "GyroBulletPart": {
    "displayName": "旋翼飞行兵子弹Part",
    "sectionType": "Particle"
  },
  "SmokeFirePart": {
    "displayName": "Smoke火焰Part",
    "sectionType": "Particle"
  },
  "SpeederShotPart": {
    "displayName": "SpeederShotPart粒子",
    "sectionType": "Particle"
  },
  "StalkerShotPart": {
    "displayName": "潜行者ShotPart",
    "sectionType": "Particle"
  },
  "PromeLightPart": {
    "displayName": "普罗米修斯光源Part",
    "sectionType": "Particle"
  },
  "DredLightPart": {
    "displayName": "无畏级导弹舰光源Part",
    "sectionType": "Particle"
  },
  "SmallLightPart": {
    "displayName": "小型光源Part",
    "sectionType": "Particle"
  },
  "DefaultPart": {
    "displayName": "默认Part粒子",
    "sectionType": "Particle"
  },
  "DarkLightPart": {
    "displayName": "Dark光源Part",
    "sectionType": "Particle"
  },
  "SpotLightParticle": {
    "displayName": "Spot光源粒子",
    "sectionType": "Particle"
  },
  "LightBeamPart": {
    "displayName": "光源光束Part",
    "sectionType": "Particle"
  },
  "MiniAntaresPart": {
    "displayName": "MiniAntaresPart粒子",
    "sectionType": "Particle"
  },
  "MiniAntaresPartBlue": {
    "displayName": "MiniAntaresPart蓝色",
    "sectionType": "Particle"
  },
  "AntaresPart": {
    "displayName": "AntaresPart粒子",
    "sectionType": "Particle"
  },
  "AntaresPartBlue": {
    "displayName": "AntaresPart蓝色",
    "sectionType": "Particle"
  },
  "MarauderPart": {
    "displayName": "MarauderPart粒子",
    "sectionType": "Particle"
  },
  "AlphaLightPart": {
    "displayName": "透明光源Part",
    "sectionType": "Particle"
  },
  "RuinerPart": {
    "displayName": "压制飞碟Part",
    "sectionType": "Particle"
  },
  "NeonwaspPart": {
    "displayName": "NeonwaspPart粒子",
    "sectionType": "Particle"
  },
  "PlasmaRailgunPart": {
    "displayName": "等离子RailgunPart",
    "sectionType": "Particle"
  },
  "AvalonRailgunPart": {
    "displayName": "AvalonRailgunPart粒子",
    "sectionType": "Particle"
  },
  "SensorPart": {
    "displayName": "SensorPart粒子",
    "sectionType": "Particle"
  },
  "ShatterPart": {
    "displayName": "ShatterPart粒子",
    "sectionType": "Particle"
  },
  "ShatterPart2": {
    "displayName": "ShatterPart 2粒子",
    "sectionType": "Particle"
  },
  "ShatterPart3": {
    "displayName": "ShatterPart 3粒子",
    "sectionType": "Particle"
  },
  "ShatterPart4": {
    "displayName": "ShatterPart 4粒子",
    "sectionType": "Particle"
  },
  "DominatorPart": {
    "displayName": "心灵支配inatorPart粒子",
    "sectionType": "Particle"
  },
  "FireStream": {
    "displayName": "火焰Stream",
    "sectionType": "Particle"
  },
  "ScorchCloudPart": {
    "displayName": "灼烧CloudPart",
    "sectionType": "Particle"
  },
  "NapalmCloudPart": {
    "displayName": "凝固汽油CloudPart",
    "sectionType": "Particle"
  },
  "SuperNapalmCloudPart": {
    "displayName": "超级凝固汽油CloudPart",
    "sectionType": "Particle"
  },
  "NeutronRiflePart": {
    "displayName": "中子步枪Part",
    "sectionType": "Particle"
  },
  "NeutronBlasterPart": {
    "displayName": "中子爆能枪Part",
    "sectionType": "Particle"
  },
  "NeutronCannonPart": {
    "displayName": "中子加农炮Part",
    "sectionType": "Particle"
  },
  "ChronoPrisonPart": {
    "displayName": "超时空PrisonPart",
    "sectionType": "Particle"
  },
  "FireSparkPart1": {
    "displayName": "火焰SparkPart 1",
    "sectionType": "Particle"
  },
  "FireSparkPart2": {
    "displayName": "火焰SparkPart 2",
    "sectionType": "Particle"
  },
  "PlasmaSparkPart": {
    "displayName": "等离子SparkPart",
    "sectionType": "Particle"
  },
  "SyncSparkPart": {
    "displayName": "同步者SparkPart",
    "sectionType": "Particle"
  },
  "SmokeSparkPart1": {
    "displayName": "SmokeSparkPart 1粒子",
    "sectionType": "Particle"
  },
  "SmokeSparkPart2": {
    "displayName": "SmokeSparkPart 2粒子",
    "sectionType": "Particle"
  },
  "SonicZapPart": {
    "displayName": "声波ZapPart",
    "sectionType": "Particle"
  },
  "IceCloud1": {
    "displayName": "冰Cloud 1",
    "sectionType": "Particle"
  },
  "IceCloudD1": {
    "displayName": "冰Cloud D1",
    "sectionType": "Particle"
  },
  "IceCloud2": {
    "displayName": "冰Cloud 2",
    "sectionType": "Particle"
  },
  "IceCloudD2": {
    "displayName": "冰Cloud D2",
    "sectionType": "Particle"
  },
  "IceCloud3": {
    "displayName": "冰Cloud 3",
    "sectionType": "Particle"
  },
  "IceCloudD3": {
    "displayName": "冰Cloud D3",
    "sectionType": "Particle"
  },
  "WeldingSpark": {
    "displayName": "WeldingSpark粒子",
    "sectionType": "Particle"
  },
  "Spark": {
    "displayName": "Spark粒子",
    "sectionType": "Particle"
  },
  "FirestormSpark": {
    "displayName": "火风暴Spark",
    "sectionType": "Particle"
  },
  "GasCloudM1": {
    "displayName": "GasCloud M1粒子",
    "sectionType": "Particle"
  },
  "GasCloudM2": {
    "displayName": "GasCloud M2粒子",
    "sectionType": "Particle"
  },
  "GasCloud1": {
    "displayName": "GasCloud 1粒子",
    "sectionType": "Particle"
  },
  "GasCloud2": {
    "displayName": "GasCloud 2粒子",
    "sectionType": "Particle"
  },
  "GasCloudD1": {
    "displayName": "GasCloud D1粒子",
    "sectionType": "Particle"
  },
  "GasCloudD2": {
    "displayName": "GasCloud D2粒子",
    "sectionType": "Particle"
  },
  "VirusCloud1": {
    "displayName": "病毒Cloud 1",
    "sectionType": "Particle"
  },
  "VirusCloudD1": {
    "displayName": "病毒Cloud D1",
    "sectionType": "Particle"
  },
  "VirusCloud2": {
    "displayName": "病毒Cloud 2",
    "sectionType": "Particle"
  },
  "VirusCloudD2": {
    "displayName": "病毒Cloud D2",
    "sectionType": "Particle"
  },
  "VirusCloud1B": {
    "displayName": "病毒Cloud1B",
    "sectionType": "Particle"
  },
  "VirusCloudD1B": {
    "displayName": "病毒CloudD1B",
    "sectionType": "Particle"
  },
  "LargeGreySmoke": {
    "displayName": "大型GreySmoke",
    "sectionType": "Particle"
  },
  "LargeBoidSmoke": {
    "displayName": "大型机械造物Smoke",
    "sectionType": "Particle"
  },
  "SmallGreySmoke": {
    "displayName": "小型GreySmoke",
    "sectionType": "Particle"
  },
  "SmallIceSmoke": {
    "displayName": "小型冰Smoke",
    "sectionType": "Particle"
  },
  "TestSmoke": {
    "displayName": "TestSmoke粒子",
    "sectionType": "Particle"
  },
  "FoehnRepairPart": {
    "displayName": "Foehn维修Part",
    "sectionType": "Particle"
  },
  "AlizeBeamPart": {
    "displayName": "Alize光束Part",
    "sectionType": "Particle"
  },
  "MegaRadPart": {
    "displayName": "巨齿鲨机甲辐射Part",
    "sectionType": "Particle"
  },
  "RahnBeamPart": {
    "displayName": "拉恩光束Part",
    "sectionType": "Particle"
  },
  "RahnBeamPartE": {
    "displayName": "拉恩光束Part精英",
    "sectionType": "Particle"
  },
  "YellowSmallPart": {
    "displayName": "黄色小型Part",
    "sectionType": "Particle"
  },
  "VatGasPart": {
    "displayName": "VatGasPart粒子",
    "sectionType": "Particle"
  },
  "OrangeSmokePart": {
    "displayName": "橙色SmokePart",
    "sectionType": "Particle"
  },
  "GreenSmokePart": {
    "displayName": "绿色SmokePart",
    "sectionType": "Particle"
  },
  "DummyPart": {
    "displayName": "虚拟Part",
    "sectionType": "Particle"
  },
  "SmallRailgunPart": {
    "displayName": "小型RailgunPart",
    "sectionType": "Particle"
  },
  "LargeRailgunPart": {
    "displayName": "大型RailgunPart",
    "sectionType": "Particle"
  },
  "LargeSpark": {
    "displayName": "大型Spark",
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
    "displayName": "离子风暴超武",
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
    "displayName": "任务特殊",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "CWarpCloneSpecial": {
    "displayName": "任务特殊",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "LSCloneSpecial": {
    "displayName": "任务特殊",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "NukeCloneSpecial": {
    "displayName": "任务特殊",
    "sectionType": "SuperWeapon",
    "name": "Mission Special"
  },
  "StratoSpecial": {
    "displayName": "同温层特殊",
    "sectionType": "SuperWeapon",
    "name": "Stratofortress"
  },
  "ReproCashFix": {
    "displayName": "Repro资金Fix",
    "sectionType": "SuperWeapon",
    "name": "Reprocessor AI Fix"
  },
  "EliteReservesMessage": {
    "displayName": "精英ReservesText",
    "sectionType": "SuperWeapon",
    "name": "Elite Reserves Text"
  },
  "FakeChemplugSpawn": {
    "displayName": "伪装Chemplug生成",
    "sectionType": "SuperWeapon",
    "name": "Fake Chemplug Spawn"
  },
  "ArsenalMedicSpawn": {
    "displayName": "ArsenalMedic生成",
    "sectionType": "SuperWeapon",
    "name": "Arsenal Medic Spawn"
  },
  "TickTrapSpawn": {
    "displayName": "BloatickTunnel生成",
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
    "displayName": "箱子投放超武",
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
    "displayName": "超级Flash",
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
    "displayName": "审判",
    "sectionType": "SuperWeapon",
    "name": "Judgement"
  },
  "CeasefireSpecial": {
    "displayName": "停火特殊",
    "sectionType": "SuperWeapon"
  },
  "CeasefireSpawn": {
    "displayName": "停火生成",
    "sectionType": "SuperWeapon"
  },
  "Team1Special": {
    "displayName": "Team1特殊",
    "sectionType": "SuperWeapon"
  },
  "Team2Special": {
    "displayName": "Team2特殊",
    "sectionType": "SuperWeapon"
  },
  "Team3Special": {
    "displayName": "Team3特殊",
    "sectionType": "SuperWeapon"
  },
  "Team4Special": {
    "displayName": "Team4特殊",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn1": {
    "displayName": "投放Pod生成 1",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn2": {
    "displayName": "投放Pod生成 2",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn3": {
    "displayName": "投放Pod生成 3",
    "sectionType": "SuperWeapon"
  },
  "DropPodSpawn4": {
    "displayName": "投放Pod生成 4",
    "sectionType": "SuperWeapon"
  },
  "Deploy1Special": {
    "displayName": "部署1特殊",
    "sectionType": "SuperWeapon"
  },
  "Deploy2Special": {
    "displayName": "部署2特殊",
    "sectionType": "SuperWeapon"
  },
  "Deploy3Special": {
    "displayName": "部署3特殊",
    "sectionType": "SuperWeapon"
  },
  "Deploy4Special": {
    "displayName": "部署4特殊",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial1": {
    "displayName": "弹头特殊 1",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial2": {
    "displayName": "弹头特殊 2",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial3": {
    "displayName": "弹头特殊 3",
    "sectionType": "SuperWeapon"
  },
  "WarheadSpecial4": {
    "displayName": "弹头特殊 4",
    "sectionType": "SuperWeapon"
  },
  "BOXES01": {
    "displayName": "BOXES 01地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES02": {
    "displayName": "BOXES 02地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES03": {
    "displayName": "BOXES 03地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES04": {
    "displayName": "BOXES 04地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES05": {
    "displayName": "BOXES 05地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES06": {
    "displayName": "BOXES 06地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES07": {
    "displayName": "BOXES 07地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES08": {
    "displayName": "BOXES 08地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "BOXES09": {
    "displayName": "BOXES 09地形",
    "sectionType": "Terrain",
    "name": "Boxes"
  },
  "ICE01": {
    "displayName": "冰Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE02": {
    "displayName": "冰Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE03": {
    "displayName": "冰Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE04": {
    "displayName": "冰Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "ICE05": {
    "displayName": "冰Floe",
    "sectionType": "Terrain",
    "name": "Ice Floe"
  },
  "X": {
    "displayName": "Clear岩石A",
    "sectionType": "Unknown",
    "name": "Clear Rock A"
  },
  "TREE01": {
    "displayName": "都市Tree",
    "sectionType": "Terrain",
    "name": "Urban Tree"
  },
  "TREE02": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE03": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE04": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE05": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE06": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE07": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE08": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE09": {
    "displayName": "都市Tree",
    "sectionType": "Terrain",
    "name": "Urban Tree"
  },
  "TREE10": {
    "displayName": "都市Tree",
    "sectionType": "Terrain",
    "name": "Urban Tree"
  },
  "TREE11": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE12": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE13": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE14": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE15": {
    "displayName": "绿色Tree",
    "sectionType": "Terrain",
    "name": "Green Tree"
  },
  "TREE16": {
    "displayName": "TREE 16地形",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE17": {
    "displayName": "TREE 17地形",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE18": {
    "displayName": "TREE 18地形",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE19": {
    "displayName": "TREE 19地形",
    "sectionType": "Terrain",
    "name": "Bush"
  },
  "TREE20": {
    "displayName": "TREE 20地形",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE21": {
    "displayName": "TREE 21地形",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE22": {
    "displayName": "TREE 22地形",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE23": {
    "displayName": "TREE 23地形",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE24": {
    "displayName": "TREE 24地形",
    "sectionType": "Terrain",
    "name": "Palm Tree"
  },
  "TREE25": {
    "displayName": "TREE 25地形",
    "sectionType": "Terrain",
    "name": "Spruce Tree"
  },
  "TREE26": {
    "displayName": "TREE 26地形",
    "sectionType": "Terrain",
    "name": "Spruce Tree"
  },
  "TREE27": {
    "displayName": "TREE 27地形",
    "sectionType": "Terrain",
    "name": "Spruce Tree"
  },
  "TREE28": {
    "displayName": "TREE 28地形",
    "sectionType": "Terrain",
    "name": "Cactus"
  },
  "TREE29": {
    "displayName": "TREE 29地形",
    "sectionType": "Terrain",
    "name": "Cactus"
  },
  "TREE30": {
    "displayName": "TREE 30地形",
    "sectionType": "Terrain",
    "name": "Cactus"
  },
  "TREE31": {
    "displayName": "TREE 31地形",
    "sectionType": "Terrain",
    "name": "Big Palm"
  },
  "TREE32": {
    "displayName": "TREE 32地形",
    "sectionType": "Terrain",
    "name": "Big Palm"
  },
  "TREE33": {
    "displayName": "TREE 33地形",
    "sectionType": "Terrain",
    "name": "Big Palm"
  },
  "TREE34": {
    "displayName": "TREE 34地形",
    "sectionType": "Terrain",
    "name": "Dead Tree"
  },
  "TREE35": {
    "displayName": "TREE 35地形",
    "sectionType": "Terrain",
    "name": "Dead Tree"
  },
  "TREE36": {
    "displayName": "TREE 36地形",
    "sectionType": "Terrain",
    "name": "Dead Tree"
  },
  "TREEJP02": {
    "displayName": "TREEJP 02地形",
    "sectionType": "Terrain",
    "name": "Flower Tree"
  },
  "TREEJP04": {
    "displayName": "TREEJP 04地形",
    "sectionType": "Terrain",
    "name": "Flower Tree"
  },
  "TREEN21": {
    "displayName": "TREEN 21地形",
    "sectionType": "Terrain",
    "name": "Neon Tree"
  },
  "TREEN22": {
    "displayName": "TREEN 22地形",
    "sectionType": "Terrain",
    "name": "Neon Tree"
  },
  "TREEN23": {
    "displayName": "TREEN 23地形",
    "sectionType": "Terrain",
    "name": "Neon Tree"
  },
  "TREEB01": {
    "displayName": "TREEB 01地形",
    "sectionType": "Terrain",
    "name": "Cylinder"
  },
  "TREEB02": {
    "displayName": "TREEB 02地形",
    "sectionType": "Terrain",
    "name": "Cylinder"
  },
  "TREEH01": {
    "displayName": "TREEH 01地形",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH02": {
    "displayName": "TREEH 02地形",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH03": {
    "displayName": "TREEH 03地形",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH04": {
    "displayName": "TREEH 04地形",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH05": {
    "displayName": "TREEH 05地形",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREEH06": {
    "displayName": "TREEH 06地形",
    "sectionType": "Terrain",
    "name": "Hedge"
  },
  "TREE37": {
    "displayName": "白色Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE38": {
    "displayName": "白色Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE39": {
    "displayName": "白色Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE40": {
    "displayName": "白色Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE41": {
    "displayName": "白色Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE42": {
    "displayName": "白色Tree",
    "sectionType": "Terrain",
    "name": "White Tree"
  },
  "TREE43": {
    "displayName": "TREE 43地形",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE44": {
    "displayName": "TREE 44地形",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE45": {
    "displayName": "TREE 45地形",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE46": {
    "displayName": "TREE 46地形",
    "sectionType": "Terrain",
    "name": "Dark Tree"
  },
  "TREE47": {
    "displayName": "TREE 47地形",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE48": {
    "displayName": "TREE 48地形",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE49": {
    "displayName": "TREE 49地形",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE50": {
    "displayName": "TREE 50地形",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE51": {
    "displayName": "TREE 51地形",
    "sectionType": "Terrain",
    "name": "Cherry Tree"
  },
  "TREE52": {
    "displayName": "TREE 52地形",
    "sectionType": "Terrain",
    "name": "Ramp Shrub"
  },
  "TREE53": {
    "displayName": "TREE 53地形",
    "sectionType": "Terrain",
    "name": "Ramp Shrub"
  },
  "TNLEND01": {
    "displayName": "Tunnel墙FillA",
    "sectionType": "Terrain",
    "name": "Tunnel Wall Fill A"
  },
  "TNLEND02": {
    "displayName": "Tunnel墙FillB",
    "sectionType": "Terrain",
    "name": "Tunnel Wall Fill B"
  },
  "LT_GEN01": {
    "displayName": "LTGEN 01地形",
    "sectionType": "Terrain",
    "name": "Lightpost A"
  },
  "LT_GEN02": {
    "displayName": "LTGEN 02地形",
    "sectionType": "Terrain",
    "name": "Lightpost B"
  },
  "LT_GEN03": {
    "displayName": "LTGEN 03地形",
    "sectionType": "Terrain",
    "name": "Lightpost C"
  },
  "LT_GEN04": {
    "displayName": "LTGEN 04地形",
    "sectionType": "Terrain",
    "name": "Lightpost D"
  },
  "LT_SGN01": {
    "displayName": "LTSGN 01地形",
    "sectionType": "Terrain",
    "name": "Lightpost Signed A"
  },
  "LT_SGN02": {
    "displayName": "LTSGN 02地形",
    "sectionType": "Terrain",
    "name": "Lightpost Signed B"
  },
  "LT_SGN03": {
    "displayName": "LTSGN 03地形",
    "sectionType": "Terrain",
    "name": "Lightpost Signed C"
  },
  "LT_SGN04": {
    "displayName": "LTSGN 04地形",
    "sectionType": "Terrain",
    "name": "Lightpost Signed D"
  },
  "LT_EUR01": {
    "displayName": "LTEUR 01地形",
    "sectionType": "Terrain",
    "name": "Lightpost Euro A"
  },
  "LT_EUR02": {
    "displayName": "LTEUR 02地形",
    "sectionType": "Terrain",
    "name": "Lightpost Euro B"
  },
  "POLE01": {
    "displayName": "POLE 01地形",
    "sectionType": "Terrain",
    "name": "Utility Pole A"
  },
  "POLE02": {
    "displayName": "POLE 02地形",
    "sectionType": "Terrain",
    "name": "Utility Pole B"
  },
  "SIGN01": {
    "displayName": "SIGN 01地形",
    "sectionType": "Terrain",
    "name": "Street Sign A"
  },
  "SIGN02": {
    "displayName": "SIGN 02地形",
    "sectionType": "Terrain",
    "name": "Street Sign B"
  },
  "SIGN03": {
    "displayName": "SIGN 03地形",
    "sectionType": "Terrain",
    "name": "Street Sign C"
  },
  "SIGN04": {
    "displayName": "SIGN 04地形",
    "sectionType": "Terrain",
    "name": "Street Sign D"
  },
  "SIGN05": {
    "displayName": "StreetSign精英",
    "sectionType": "Terrain",
    "name": "Street Sign E"
  },
  "SIGN06": {
    "displayName": "SIGN 06地形",
    "sectionType": "Terrain",
    "name": "Street Sign F"
  },
  "TRFF01": {
    "displayName": "交通光源A",
    "sectionType": "Terrain",
    "name": "Traffic Light A"
  },
  "TRFF02": {
    "displayName": "交通光源B",
    "sectionType": "Terrain",
    "name": "Traffic Light B"
  },
  "TRFF03": {
    "displayName": "交通光源C",
    "sectionType": "Terrain",
    "name": "Traffic Light C"
  },
  "TRFF04": {
    "displayName": "交通光源 D",
    "sectionType": "Terrain",
    "name": "Traffic Light D"
  },
  "SPKR01": {
    "displayName": "SPKR 01地形",
    "sectionType": "Terrain",
    "name": "Drive-In Speaker"
  },
  "TIBTRE01": {
    "displayName": "TIBTRE 01地形",
    "sectionType": "Terrain",
    "name": "Tiberium Tree"
  },
  "TIBTRE02": {
    "displayName": "TIBTRE 02地形",
    "sectionType": "Terrain",
    "name": "Tiberium Tree"
  },
  "TIBTRE03": {
    "displayName": "TIBTRE 03地形",
    "sectionType": "Terrain",
    "name": "Tiberium Tree"
  },
  "VEINTREE": {
    "displayName": "VEINTREE地形",
    "sectionType": "Terrain",
    "name": "Veinhole Tree"
  },
  "HDSTN01": {
    "displayName": "HDSTN 01地形",
    "sectionType": "Terrain",
    "name": "Alrington Stones"
  },
  "TIB01": {
    "displayName": "TIB 01覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB02": {
    "displayName": "TIB 02覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB03": {
    "displayName": "TIB 03覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB04": {
    "displayName": "TIB 04覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB05": {
    "displayName": "TIB 05覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB06": {
    "displayName": "TIB 06覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB07": {
    "displayName": "TIB 07覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB08": {
    "displayName": "TIB 08覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB09": {
    "displayName": "TIB 09覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB10": {
    "displayName": "TIB 10覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB11": {
    "displayName": "TIB 11覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB12": {
    "displayName": "TIB 12覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB13": {
    "displayName": "TIB 13覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB14": {
    "displayName": "TIB 14覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB15": {
    "displayName": "TIB 15覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB16": {
    "displayName": "TIB 16覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB17": {
    "displayName": "TIB 17覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB18": {
    "displayName": "TIB 18覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB19": {
    "displayName": "TIB 19覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB20": {
    "displayName": "TIB 20覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_01": {
    "displayName": "Tiberium蓝色",
    "sectionType": "Overlay",
    "name": "Tiberium (Blue)"
  },
  "TIB2_02": {
    "displayName": "TIB 202覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_03": {
    "displayName": "TIB 203覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_04": {
    "displayName": "TIB 204覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_05": {
    "displayName": "TIB 205覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_06": {
    "displayName": "TIB 206覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_07": {
    "displayName": "TIB 207覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_08": {
    "displayName": "TIB 208覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_09": {
    "displayName": "TIB 209覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_10": {
    "displayName": "TIB 210覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_11": {
    "displayName": "TIB 211覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_12": {
    "displayName": "TIB 212覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_13": {
    "displayName": "TIB 213覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_14": {
    "displayName": "TIB 214覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_15": {
    "displayName": "TIB 215覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_16": {
    "displayName": "TIB 216覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_17": {
    "displayName": "TIB 217覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_18": {
    "displayName": "TIB 218覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_19": {
    "displayName": "TIB 219覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB2_20": {
    "displayName": "TIB 220覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_01": {
    "displayName": "TIB 301覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_02": {
    "displayName": "TIB 302覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_03": {
    "displayName": "TIB 303覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_04": {
    "displayName": "TIB 304覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_05": {
    "displayName": "TIB 305覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_06": {
    "displayName": "TIB 306覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_07": {
    "displayName": "TIB 307覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_08": {
    "displayName": "TIB 308覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_09": {
    "displayName": "TIB 309覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_10": {
    "displayName": "TIB 310覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_11": {
    "displayName": "TIB 311覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_12": {
    "displayName": "TIB 312覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_13": {
    "displayName": "TIB 313覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_14": {
    "displayName": "TIB 314覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_15": {
    "displayName": "TIB 315覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_16": {
    "displayName": "TIB 316覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_17": {
    "displayName": "TIB 317覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_18": {
    "displayName": "TIB 318覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_19": {
    "displayName": "TIB 319覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "TIB3_20": {
    "displayName": "TIB 320覆盖物",
    "sectionType": "Overlay",
    "name": "Tiberium"
  },
  "VEINHOLE": {
    "displayName": "藤蔓洞怪物",
    "sectionType": "Unknown",
    "name": "Veinhole Monster"
  },
  "VEINHOLEDUMMY": {
    "displayName": "VeinholeMonster虚拟",
    "sectionType": "Overlay",
    "name": "Veinhole Monster Dummy"
  },
  "RUBBLE_OVERLAY": {
    "displayName": "System覆盖物（请勿使用）",
    "sectionType": "Overlay",
    "name": "System Overlay (Do Not Use)"
  },
  "FENCE01": {
    "displayName": "TrackCrossNS精英 W",
    "sectionType": "Overlay",
    "name": "Track Cross N-S/E-W"
  },
  "FENCE02": {
    "displayName": "栅栏 02",
    "sectionType": "Overlay",
    "name": "Track Cross NE-SW/NW-SE"
  },
  "FENCE03": {
    "displayName": "栅栏 03",
    "sectionType": "Overlay",
    "name": "Track End N"
  },
  "FENCE04": {
    "displayName": "栅栏 04",
    "sectionType": "Overlay",
    "name": "Track End NE"
  },
  "FENCE05": {
    "displayName": "TrackEnd精英",
    "sectionType": "Overlay",
    "name": "Track End E"
  },
  "FENCE06": {
    "displayName": "栅栏 06",
    "sectionType": "Overlay",
    "name": "Track End SE"
  },
  "FENCE07": {
    "displayName": "栅栏 07",
    "sectionType": "Overlay",
    "name": "Track End S"
  },
  "FENCE08": {
    "displayName": "栅栏 08",
    "sectionType": "Overlay",
    "name": "Track End SW"
  },
  "FENCE09": {
    "displayName": "栅栏 09",
    "sectionType": "Overlay",
    "name": "Track End W"
  },
  "FENCE10": {
    "displayName": "栅栏 10",
    "sectionType": "Overlay",
    "name": "Track End NW"
  },
  "FENCE12": {
    "displayName": "栅栏12DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence12 DEMO HACK"
  },
  "FENCE13": {
    "displayName": "栅栏13DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence13 DEMO HACK"
  },
  "FENCE14": {
    "displayName": "栅栏14DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence14 DEMO HACK"
  },
  "FENCE15": {
    "displayName": "栅栏15DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence15 DEMO HACK"
  },
  "FENCE16": {
    "displayName": "栅栏16DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence16 DEMO HACK"
  },
  "FENCE17": {
    "displayName": "栅栏17DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence17 DEMO HACK"
  },
  "FENCE18": {
    "displayName": "栅栏18DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence18 DEMO HACK"
  },
  "FENCE19": {
    "displayName": "栅栏19DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence19 DEMO HACK"
  },
  "FENCE20": {
    "displayName": "栅栏20DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence20 DEMO HACK"
  },
  "FENCE21": {
    "displayName": "栅栏21DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence21 DEMO HACK"
  },
  "FENCE22": {
    "displayName": "栅栏22DEMOHACK",
    "sectionType": "Overlay",
    "name": "Fence22 DEMO HACK"
  },
  "SROCK01": {
    "displayName": "Sand岩石A",
    "sectionType": "Overlay",
    "name": "Sand Rock A"
  },
  "SROCK02": {
    "displayName": "Sand岩石B",
    "sectionType": "Overlay",
    "name": "Sand Rock B"
  },
  "SROCK03": {
    "displayName": "Sand岩石C",
    "sectionType": "Overlay",
    "name": "Sand Rock C"
  },
  "SROCK04": {
    "displayName": "Sand岩石 D",
    "sectionType": "Overlay",
    "name": "Sand Rock D"
  },
  "SROCK05": {
    "displayName": "Sand岩石精英",
    "sectionType": "Overlay",
    "name": "Sand Rock E"
  },
  "TROCK01": {
    "displayName": "Clear岩石A",
    "sectionType": "Overlay",
    "name": "Clear Rock A"
  },
  "TROCK02": {
    "displayName": "Clear岩石B",
    "sectionType": "Overlay",
    "name": "Clear Rock B"
  },
  "TROCK03": {
    "displayName": "Clear岩石C",
    "sectionType": "Overlay",
    "name": "Clear Rock C"
  },
  "TROCK04": {
    "displayName": "Clear岩石 D",
    "sectionType": "Overlay",
    "name": "Clear Rock D"
  },
  "TROCK05": {
    "displayName": "Clear岩石精英",
    "sectionType": "Overlay",
    "name": "Clear Rock E"
  },
  "LUNRK1": {
    "displayName": "大型岩石A",
    "sectionType": "Overlay",
    "name": "Large Rock A"
  },
  "LUNRK2": {
    "displayName": "大型岩石B",
    "sectionType": "Overlay",
    "name": "Large Rock B"
  },
  "LUNRK3": {
    "displayName": "大型岩石C",
    "sectionType": "Overlay",
    "name": "Large Rock C"
  },
  "LUNRK4": {
    "displayName": "大型岩石 D",
    "sectionType": "Overlay",
    "name": "Large Rock D"
  },
  "LUNRK5": {
    "displayName": "大型岩石精英",
    "sectionType": "Overlay",
    "name": "Large Rock E"
  },
  "LUNRK6": {
    "displayName": "大型岩石 F",
    "sectionType": "Overlay",
    "name": "Large Rock F"
  },
  "CBOX1": {
    "displayName": "CBOX 1覆盖物",
    "sectionType": "Overlay",
    "name": "Pavement Cliff Box"
  },
  "CBLACK": {
    "displayName": "A黑色TileA",
    "sectionType": "Overlay",
    "name": "A Black Tile A"
  },
  "CBLACK02": {
    "displayName": "A黑色TileB",
    "sectionType": "Overlay",
    "name": "A Black Tile B"
  },
  "GEM01": {
    "displayName": "GEM 01覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM02": {
    "displayName": "GEM 02覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM03": {
    "displayName": "GEM 03覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM04": {
    "displayName": "GEM 04覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM05": {
    "displayName": "GEM 05覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM06": {
    "displayName": "GEM 06覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM07": {
    "displayName": "GEM 07覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM08": {
    "displayName": "GEM 08覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM09": {
    "displayName": "GEM 09覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM10": {
    "displayName": "GEM 10覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM11": {
    "displayName": "GEM 11覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "GEM12": {
    "displayName": "GEM 12覆盖物",
    "sectionType": "Overlay",
    "name": "Gems"
  },
  "TRACKS01": {
    "displayName": "TRACKS 01覆盖物",
    "sectionType": "Overlay",
    "name": "Track N/S"
  },
  "TRACKS02": {
    "displayName": "Track精英 W",
    "sectionType": "Overlay",
    "name": "Track E/W"
  },
  "TRACKS03": {
    "displayName": "TRACKS 03覆盖物",
    "sectionType": "Overlay",
    "name": "Track NE/SW"
  },
  "TRACKS04": {
    "displayName": "TRACKS 04覆盖物",
    "sectionType": "Overlay",
    "name": "Track NW/SE"
  },
  "TRACKS05": {
    "displayName": "TRACKS 05覆盖物",
    "sectionType": "Overlay",
    "name": "Track Turn N>NE"
  },
  "TRACKS06": {
    "displayName": "TRACKS 06覆盖物",
    "sectionType": "Overlay",
    "name": "Track Turn N>NW"
  },
  "TRACKS07": {
    "displayName": "TRACKS 07覆盖物",
    "sectionType": "Overlay",
    "name": "Track Turn S>SE"
  },
  "TRACKS08": {
    "displayName": "TRACKS 08覆盖物",
    "sectionType": "Overlay",
    "name": "Track Turn S>SW"
  },
  "TRACKS09": {
    "displayName": "TrackTurn精英NE",
    "sectionType": "Overlay",
    "name": "Track Turn E>NE"
  },
  "TRACKS10": {
    "displayName": "TrackTurn精英SE",
    "sectionType": "Overlay",
    "name": "Track Turn E>SE"
  },
  "TRACKS11": {
    "displayName": "TRACKS 11覆盖物",
    "sectionType": "Overlay",
    "name": "Track Turn W>NW"
  },
  "TRACKS12": {
    "displayName": "TRACKS 12覆盖物",
    "sectionType": "Overlay",
    "name": "Track Turn W>SW"
  },
  "TRACKS13": {
    "displayName": "TRACKS 13覆盖物",
    "sectionType": "Overlay",
    "name": "Track Fork N"
  },
  "TRACKS14": {
    "displayName": "TRACKS 14覆盖物",
    "sectionType": "Overlay",
    "name": "Track Fork NE"
  },
  "TRACKS15": {
    "displayName": "TrackFork精英",
    "sectionType": "Overlay",
    "name": "Track Fork E"
  },
  "TRACKS16": {
    "displayName": "TRACKS 16覆盖物",
    "sectionType": "Overlay",
    "name": "Track Fork SE"
  },
  "TRACKTUNNEL01": {
    "displayName": "TRACKTUNNEL 01覆盖物",
    "sectionType": "Overlay",
    "name": "Track Fork S"
  },
  "TRACKTUNNEL02": {
    "displayName": "TRACKTUNNEL 02覆盖物",
    "sectionType": "Overlay",
    "name": "Track Fork SW"
  },
  "TRACKTUNNEL03": {
    "displayName": "TRACKTUNNEL 03覆盖物",
    "sectionType": "Overlay",
    "name": "Track Fork W"
  },
  "TRACKTUNNEL04": {
    "displayName": "TRACKTUNNEL 04覆盖物",
    "sectionType": "Overlay",
    "name": "Track Fork NW"
  },
  "LOBRDG01": {
    "displayName": "LOBRDG 01覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG02": {
    "displayName": "LOBRDG 02覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG03": {
    "displayName": "LOBRDG 03覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG04": {
    "displayName": "LOBRDG 04覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG05": {
    "displayName": "LOBRDG 05覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG06": {
    "displayName": "LOBRDG 06覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG07": {
    "displayName": "LOBRDG 07覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG08": {
    "displayName": "LOBRDG 08覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG09": {
    "displayName": "LOBRDG 09覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG10": {
    "displayName": "LOBRDG 10覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG11": {
    "displayName": "LOBRDG 11覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG12": {
    "displayName": "LOBRDG 12覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG13": {
    "displayName": "LOBRDG 13覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG14": {
    "displayName": "LOBRDG 14覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG15": {
    "displayName": "LOBRDG 15覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG16": {
    "displayName": "LOBRDG 16覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG17": {
    "displayName": "LOBRDG 17覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG18": {
    "displayName": "LOBRDG 18覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG19": {
    "displayName": "LOBRDG 19覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG20": {
    "displayName": "LOBRDG 20覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG21": {
    "displayName": "LOBRDG 21覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG22": {
    "displayName": "LOBRDG 22覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG23": {
    "displayName": "LOBRDG 23覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG24": {
    "displayName": "LOBRDG 24覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG25": {
    "displayName": "LOBRDG 25覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG26": {
    "displayName": "LOBRDG 26覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG27": {
    "displayName": "LOBRDG 27覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDG28": {
    "displayName": "LOBRDG 28覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge"
  },
  "LOBRDGE1": {
    "displayName": "LOBRDGE 1覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge End A"
  },
  "LOBRDGE2": {
    "displayName": "LOBRDGE 2覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge End B"
  },
  "LOBRDGE3": {
    "displayName": "LOBRDGE 3覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge End C"
  },
  "LOBRDGE4": {
    "displayName": "LOBRDGE 4覆盖物",
    "sectionType": "Overlay",
    "name": "Low Bridge End D"
  },
  "LOBRDB01": {
    "displayName": "LOBRDB 01覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB02": {
    "displayName": "LOBRDB 02覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB03": {
    "displayName": "LOBRDB 03覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB04": {
    "displayName": "LOBRDB 04覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB05": {
    "displayName": "LOBRDB 05覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB06": {
    "displayName": "LOBRDB 06覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB07": {
    "displayName": "LOBRDB 07覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB08": {
    "displayName": "LOBRDB 08覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB09": {
    "displayName": "LOBRDB 09覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB10": {
    "displayName": "LOBRDB 10覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB11": {
    "displayName": "LOBRDB 11覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB12": {
    "displayName": "LOBRDB 12覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB13": {
    "displayName": "LOBRDB 13覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB14": {
    "displayName": "LOBRDB 14覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB15": {
    "displayName": "LOBRDB 15覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB16": {
    "displayName": "LOBRDB 16覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB17": {
    "displayName": "LOBRDB 17覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB18": {
    "displayName": "LOBRDB 18覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB19": {
    "displayName": "LOBRDB 19覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB20": {
    "displayName": "LOBRDB 20覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB21": {
    "displayName": "LOBRDB 21覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB22": {
    "displayName": "LOBRDB 22覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB23": {
    "displayName": "LOBRDB 23覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB24": {
    "displayName": "LOBRDB 24覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB25": {
    "displayName": "LOBRDB 25覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB26": {
    "displayName": "LOBRDB 26覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB27": {
    "displayName": "LOBRDB 27覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDB28": {
    "displayName": "LOBRDB 28覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge"
  },
  "LOBRDGB1": {
    "displayName": "LOBRDGB 1覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 1"
  },
  "LOBRDGB2": {
    "displayName": "LOBRDGB 2覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 2"
  },
  "LOBRDGB3": {
    "displayName": "LOBRDGB 3覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 3"
  },
  "LOBRDGB4": {
    "displayName": "LOBRDGB 4覆盖物",
    "sectionType": "Overlay",
    "name": "Concrete Low Bridge End 4"
  },
  "RAILBRDG1": {
    "displayName": "RAILBRDG 1覆盖物",
    "sectionType": "Overlay",
    "name": "Railroad Bridge 1"
  },
  "RAILBRDG2": {
    "displayName": "RAILBRDG 2覆盖物",
    "sectionType": "Overlay",
    "name": "Railroad Bridge 2"
  },
  "BRIDGE1": {
    "displayName": "BRIDGE 1覆盖物",
    "sectionType": "Overlay",
    "name": "Bridge 1"
  },
  "BRIDGE2": {
    "displayName": "BRIDGE 2覆盖物",
    "sectionType": "Overlay",
    "name": "Bridge 2"
  },
  "BRIDGEB1": {
    "displayName": "BRIDGEB 1覆盖物",
    "sectionType": "Overlay",
    "name": "Wood Bridge 1"
  },
  "BRIDGEB2": {
    "displayName": "BRIDGEB 2覆盖物",
    "sectionType": "Overlay",
    "name": "Wood Bridge 2"
  },
  "CRATE": {
    "displayName": "Goodie箱子",
    "sectionType": "Overlay",
    "name": "Goodie Crate"
  },
  "WCRATE": {
    "displayName": "Water箱子",
    "sectionType": "Overlay",
    "name": "Water Crate"
  },
  "CRAT02": {
    "displayName": "箱子",
    "sectionType": "Unknown",
    "name": "Crate"
  },
  "CRAT03": {
    "displayName": "箱子",
    "sectionType": "Unknown",
    "name": "Crate"
  },
  "CRAT04": {
    "displayName": "箱子",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "CRAT0A": {
    "displayName": "箱子",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "CRAT0B": {
    "displayName": "箱子",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "CRAT0C": {
    "displayName": "箱子",
    "sectionType": "Overlay",
    "name": "Crate"
  },
  "DRUM02": {
    "displayName": "油桶 02",
    "sectionType": "Unknown",
    "name": "Drum"
  },
  "PALET01": {
    "displayName": "Block基地",
    "sectionType": "Overlay",
    "name": "Block Base"
  },
  "PALET02": {
    "displayName": "PALET 02覆盖物",
    "sectionType": "Overlay",
    "name": "Palette"
  },
  "PALET03": {
    "displayName": "PALET 03覆盖物",
    "sectionType": "Overlay",
    "name": "Palette"
  },
  "PALET04": {
    "displayName": "Block基地andMovement",
    "sectionType": "Overlay",
    "name": "Block Base and Movement"
  },
  "CRATER01": {
    "displayName": "弹坑 01",
    "sectionType": "Unknown"
  },
  "CRATER02": {
    "displayName": "弹坑 02",
    "sectionType": "Unknown"
  },
  "CRATER03": {
    "displayName": "弹坑 03",
    "sectionType": "Unknown"
  },
  "CRATER04": {
    "displayName": "弹坑 04",
    "sectionType": "Unknown"
  },
  "CRATER05": {
    "displayName": "弹坑 05",
    "sectionType": "Unknown"
  },
  "CRATER06": {
    "displayName": "弹坑 06",
    "sectionType": "Unknown"
  },
  "CRATER07": {
    "displayName": "弹坑 07",
    "sectionType": "Unknown"
  },
  "CRATER08": {
    "displayName": "弹坑 08",
    "sectionType": "Unknown"
  },
  "CRATER09": {
    "displayName": "弹坑 09",
    "sectionType": "Unknown"
  },
  "CRATER10": {
    "displayName": "弹坑 10",
    "sectionType": "Unknown"
  },
  "CRATER11": {
    "displayName": "弹坑 11",
    "sectionType": "Unknown"
  },
  "CRATER12": {
    "displayName": "弹坑 12",
    "sectionType": "Unknown"
  },
  "BURNT01": {
    "displayName": "烧焦痕迹 01",
    "sectionType": "Unknown"
  },
  "BURNT02": {
    "displayName": "烧焦痕迹 02",
    "sectionType": "Unknown"
  },
  "BURNT03": {
    "displayName": "烧焦痕迹 03",
    "sectionType": "Unknown"
  },
  "BURNT04": {
    "displayName": "烧焦痕迹 04",
    "sectionType": "Unknown"
  },
  "BURNT05": {
    "displayName": "烧焦痕迹 05",
    "sectionType": "Unknown"
  },
  "BURNT06": {
    "displayName": "烧焦痕迹 06",
    "sectionType": "Unknown"
  },
  "BURNT07": {
    "displayName": "烧焦痕迹 07",
    "sectionType": "Unknown"
  },
  "BURNT08": {
    "displayName": "烧焦痕迹 08",
    "sectionType": "Unknown"
  },
  "BURNT09": {
    "displayName": "烧焦痕迹 09",
    "sectionType": "Unknown"
  },
  "BURNT10": {
    "displayName": "烧焦痕迹 10",
    "sectionType": "Unknown"
  },
  "BURNT11": {
    "displayName": "烧焦痕迹 11",
    "sectionType": "Unknown"
  },
  "BURNT12": {
    "displayName": "烧焦痕迹 12",
    "sectionType": "Unknown"
  },
  "CR1": {
    "displayName": "弹坑 1",
    "sectionType": "Unknown"
  },
  "CR2": {
    "displayName": "弹坑 2",
    "sectionType": "Unknown"
  },
  "CR3": {
    "displayName": "弹坑 3",
    "sectionType": "Unknown"
  },
  "CR4": {
    "displayName": "弹坑 4",
    "sectionType": "Unknown"
  },
  "CR5": {
    "displayName": "弹坑 5",
    "sectionType": "Unknown"
  },
  "CR6": {
    "displayName": "弹坑 6",
    "sectionType": "Unknown"
  },
  "BURN01": {
    "displayName": "燃烧痕迹 01",
    "sectionType": "Unknown"
  },
  "BURN02": {
    "displayName": "燃烧痕迹 02",
    "sectionType": "Unknown"
  },
  "BURN03": {
    "displayName": "燃烧痕迹 03",
    "sectionType": "Unknown"
  },
  "BURN04": {
    "displayName": "燃烧痕迹 04",
    "sectionType": "Unknown"
  },
  "BURN05": {
    "displayName": "燃烧痕迹 05",
    "sectionType": "Unknown"
  },
  "BURN06": {
    "displayName": "燃烧痕迹 06",
    "sectionType": "Unknown"
  },
  "BURN07": {
    "displayName": "燃烧痕迹 07",
    "sectionType": "Unknown"
  },
  "BURN08": {
    "displayName": "燃烧痕迹 08",
    "sectionType": "Unknown"
  },
  "BURN09": {
    "displayName": "燃烧痕迹 09",
    "sectionType": "Unknown"
  },
  "BURN10": {
    "displayName": "燃烧痕迹 10",
    "sectionType": "Unknown"
  },
  "BURN11": {
    "displayName": "燃烧痕迹 11",
    "sectionType": "Unknown"
  },
  "BURN12": {
    "displayName": "燃烧痕迹 12",
    "sectionType": "Unknown"
  },
  "BURN13": {
    "displayName": "燃烧痕迹 13",
    "sectionType": "Unknown"
  },
  "BURN14": {
    "displayName": "燃烧痕迹 14",
    "sectionType": "Unknown"
  },
  "BURN15": {
    "displayName": "燃烧痕迹 15",
    "sectionType": "Unknown"
  },
  "BURN16": {
    "displayName": "燃烧痕迹 16",
    "sectionType": "Unknown"
  },
  "Clear": {
    "displayName": "空地",
    "sectionType": "Unknown"
  },
  "Rough": {
    "displayName": "崎岖地",
    "sectionType": "Unknown"
  },
  "Road": {
    "displayName": "道路",
    "sectionType": "Unknown"
  },
  "Water": {
    "displayName": "水域",
    "sectionType": "Unknown"
  },
  "Rock": {
    "displayName": "岩石",
    "sectionType": "Unknown"
  },
  "Wall": {
    "displayName": "墙",
    "sectionType": "Unknown"
  },
  "Tiberium": {
    "displayName": "矿石",
    "sectionType": "Unknown"
  },
  "Beach": {
    "displayName": "海滩",
    "sectionType": "Unknown"
  },
  "Ice": {
    "displayName": "冰",
    "sectionType": "Unknown"
  },
  "Tunnel": {
    "displayName": "隧道",
    "sectionType": "Unknown"
  },
  "Railroad": {
    "displayName": "铁路",
    "sectionType": "Unknown"
  },
  "Weeds": {
    "displayName": "杂草",
    "sectionType": "Unknown"
  },
  "Cliff": {
    "displayName": "悬崖",
    "sectionType": "Unknown"
  },
  "Tiberiums": {
    "displayName": "矿石类型",
    "sectionType": "Unknown"
  },
  "Riparius": {
    "displayName": "金矿",
    "sectionType": "Unknown",
    "name": "Gold"
  },
  "Cruentus": {
    "displayName": "宝石矿",
    "sectionType": "Unknown",
    "name": "Gems"
  },
  "Vinifera": {
    "displayName": "金矿",
    "sectionType": "Unknown",
    "name": "Gold"
  },
  "Aboreus": {
    "displayName": "金矿",
    "sectionType": "Unknown",
    "name": "Gold"
  },
  "Ambush": {
    "displayName": "伏击",
    "sectionType": "Unknown"
  },
  "Area Guard": {
    "displayName": "区域警戒",
    "sectionType": "Unknown"
  },
  "Attack": {
    "displayName": "攻击",
    "sectionType": "Unknown"
  },
  "Capture": {
    "displayName": "占领",
    "sectionType": "Unknown"
  },
  "Construction": {
    "displayName": "建造",
    "sectionType": "Unknown"
  },
  "Eaten": {
    "displayName": "被吞食",
    "sectionType": "Unknown"
  },
  "Enter": {
    "displayName": "进入",
    "sectionType": "Unknown"
  },
  "Guard": {
    "displayName": "警戒",
    "sectionType": "Unknown"
  },
  "Harmless": {
    "displayName": "无害",
    "sectionType": "Unknown"
  },
  "Harvest": {
    "displayName": "采矿",
    "sectionType": "Unknown"
  },
  "Hunt": {
    "displayName": "猎杀",
    "sectionType": "Unknown"
  },
  "Missile": {
    "displayName": "导弹",
    "sectionType": "Unknown"
  },
  "Move": {
    "displayName": "移动",
    "sectionType": "Unknown"
  },
  "Open": {
    "displayName": "打开",
    "sectionType": "Unknown"
  },
  "Patrol": {
    "displayName": "巡逻",
    "sectionType": "Unknown"
  },
  "QMove": {
    "displayName": "队列移动",
    "sectionType": "Unknown"
  },
  "Repair": {
    "displayName": "维修",
    "sectionType": "Unknown"
  },
  "Rescue": {
    "displayName": "救援",
    "sectionType": "Unknown"
  },
  "Retreat": {
    "displayName": "撤退",
    "sectionType": "Unknown"
  },
  "Return": {
    "displayName": "返回",
    "sectionType": "Unknown"
  },
  "Sabotage": {
    "displayName": "破坏",
    "sectionType": "Unknown"
  },
  "Selling": {
    "displayName": "出售",
    "sectionType": "Unknown"
  },
  "Sleep": {
    "displayName": "休眠",
    "sectionType": "Unknown"
  },
  "Sticky": {
    "displayName": "粘附",
    "sectionType": "Unknown"
  },
  "Stop": {
    "displayName": "停止",
    "sectionType": "Unknown"
  },
  "Unload": {
    "displayName": "卸载",
    "sectionType": "Unknown"
  },
  "PIECE": {
    "displayName": "ScrapMetal原材料",
    "sectionType": "Unknown",
    "name": "Scrap Metal Debris"
  },
  "TIRE": {
    "displayName": "飞行轮胎",
    "sectionType": "Unknown",
    "name": "Flying Tire"
  },
  "GASTANK": {
    "displayName": "飞行油罐",
    "sectionType": "Unknown",
    "name": "Flying Gas Tank"
  },
  "MOLES": {
    "displayName": "Flying毒素炸弹",
    "sectionType": "Unknown",
    "name": "Flying Toxic Bomb"
  },
  "SPIKES": {
    "displayName": "冷冻Spikes",
    "sectionType": "Unknown",
    "name": "Cryo Spikes"
  },
  "SCRCHB": {
    "displayName": "灼烧炸弹",
    "sectionType": "Unknown",
    "name": "Scorch Bombs"
  },
  "CNTRHEAD": {
    "displayName": "百夫长Head",
    "sectionType": "Unknown",
    "name": "Centurion Head"
  },
  "SONICTURRET": {
    "displayName": "声波TankTurret",
    "sectionType": "Unknown",
    "name": "Sonic Tank Turret"
  },
  "4TNKTURRET": {
    "displayName": "猛犸TankTurret",
    "sectionType": "Unknown",
    "name": "Mammoth Tank Turret"
  },
  "CRYSTAL01": {
    "displayName": "矿石碎片 A",
    "sectionType": "Unknown",
    "name": "Tiberium Shard A"
  },
  "CRYSTAL02": {
    "displayName": "矿石水晶 B",
    "sectionType": "Unknown",
    "name": "Tiberium Crystal B"
  },
  "METEOR01": {
    "displayName": "陨石 A",
    "sectionType": "Unknown",
    "name": "Meteorite A"
  },
  "METEOR02": {
    "displayName": "陨石 B",
    "sectionType": "Unknown",
    "name": "Meteorite B"
  },
  "PEBBLE": {
    "displayName": "矿石碎片",
    "sectionType": "Unknown",
    "name": "Tiberium Shard"
  },
  "VariableNames": {
    "displayName": "变量名列表",
    "sectionType": "Unknown"
  }
};

function normalizeStringLabel(label?: string): string | undefined {
  if (!label) return undefined;
  const trimmed = label.trim();
  if (!trimmed) return undefined;
  const match = trimmed.match(/^NAME\s*:\s*(.+)$/i);
  if (match) return `NAME:${match[1].trim().toUpperCase()}`;
  return trimmed.toUpperCase();
}

function getLastEntryValue(section: BasicIniSection, key: string): string | undefined {
  const wanted = key.toLowerCase();
  for (let i = section.entries.length - 1; i >= 0; i -= 1) {
    const entry = section.entries[i];
    if (entry.key.toLowerCase() === wanted) return entry.value;
  }
  return undefined;
}

export function resolveStringLabel(
  label?: string,
  stringMap: Record<string, string> = MO_NAME_STRINGS_ZH_CN
): string | undefined {
  const normalized = normalizeStringLabel(label);
  if (!normalized) return undefined;
  return stringMap[normalized] ?? stringMap[label ?? ''];
}

/**
 * Resolve a section display name by reading UIName first, then the built-in
 * section alias table, then Name, then Section ID.
 *
 * The built-in section alias table includes inferred Chinese names for internal
 * rules-only sections such as weapons, warheads and projectiles that do not
 * exist in the CSF string table.
 */
export function resolveDisplayName(
  section: BasicIniSection,
  stringMap: Record<string, string> = MO_NAME_STRINGS_ZH_CN
): ResolvedDisplayName {
  const uiName = getLastEntryValue(section, 'UIName');
  const rawName = getLastEntryValue(section, 'Name');

  const uiDisplayName = resolveStringLabel(uiName, stringMap);
  if (uiDisplayName) {
    return { displayName: uiDisplayName, uiName, rawName, resolvedBy: 'uiName' };
  }

  const builtInEntry = MO_DISPLAY_NAMES_ZH_CN[section.name];
  if (builtInEntry?.displayName) {
    return {
      displayName: builtInEntry.displayName,
      uiName,
      rawName,
      resolvedBy: builtInEntry.uiName ? 'uiName' : builtInEntry.name ? 'name' : 'section',
    };
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
