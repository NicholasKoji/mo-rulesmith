import type { FieldDoc, FieldRisk } from './types'

type FieldDocRow = [
  key: string,
  zhName: string,
  category: string,
  description: string,
  valueDirection: string,
  observedRange: string | undefined,
  suggestedChange: string | undefined,
  risk: FieldRisk,
]

const rows: FieldDocRow[] = [
  ['Strength', '血量', '单位基础', '越大越耐打。普通步兵几十到几百，普通载具几百，超级单位可上千。', '越大越强', '步兵 50-300，载具 200-1200，超级单位 1000+', '小幅提高 20%-30% 通常较温和。', 'safe'],
  ['Armor', '护甲类型', '单位基础', '影响所有弹头倍率，牵动范围很大。', '取决于弹头倍率', undefined, '改护甲类型前先检查相关 Warhead 的 Verses / Versus.xxx。', 'danger'],
  ['Cost', '造价', '单位基础', '越低越容易量产。', '越低越强', undefined, '降低 10%-20% 属于温和加强。', 'safe'],
  ['Soylent', '回收价值', '单位基础', '通常是造价的一部分。', '越高回收越赚', undefined, '建议跟随 Cost 变化。', 'safe'],
  ['TechLevel', '科技等级', '单位基础', '越高越后期，-1 通常代表不可正常建造。', '越低越早可用', '-1, 1-10', '改为可建造会影响战役和 AI。', 'caution'],
  ['Prerequisite', '建造前置', '单位基础', '决定建造所需建筑，可能影响战役脚本和 AI。', '越少越容易建造', undefined, '只在明确知道前置链时修改。', 'danger'],
  ['Owner', '可用阵营', '单位基础', '决定哪些阵营可以使用。', '阵营范围越大越泛用', undefined, '会影响遭遇战和战役限制。', 'danger'],
  ['RequiredHouses', '限定国家', '单位基础', '限定特定国家可用。', '名单越少限制越强', undefined, '谨慎修改国家限制。', 'danger'],
  ['ForbiddenHouses', '禁用国家', '单位基础', '禁止特定国家使用。', '名单越多限制越强', undefined, '谨慎修改国家限制。', 'danger'],
  ['BuildLimit', '限造数量', '单位基础', '1 表示只能造一台。', '越大越强', '1-10', '解除限造会明显改变平衡。', 'caution'],
  ['BuildTimeMultiplier', '建造时间倍率', '单位基础', '越大越慢。', '越小越强', undefined, '小幅降低即可加快出场。', 'safe'],
  ['Sight', '视野', '单位基础', '越大看得越远。', '越大越强', '4-12', '提高 1-2 点较温和。', 'safe'],
  ['Speed', '移动速度', '单位基础', '越大移动越快。', '越大越强', '1-9', '3 到 4 属于温和加强；3 到 5 会明显改变手感。', 'safe'],
  ['ROT', '车体转向', '单位基础', '越大转身越快。', '越大越灵活', '1-8', '重型单位提高 1 点通常足够。', 'safe'],
  ['TurretROT', '炮塔转向', '单位基础', '越大炮塔转得越快。', '越大越强', '1-8', '提高过多会削弱重型单位手感。', 'safe'],
  ['Size', '单位体积', '单位基础', '影响运输、碾压、寻路等。', '不是线性强弱', undefined, '可能触发路径和运输问题。', 'caution'],
  ['Passengers', '载客数', '单位基础', '可载人数。配合 OpenTopped 会显著增强。', '越大越强', '1-10', '配合开顶运输时要格外小心。', 'caution'],
  ['OpenTopped', '开顶运输', '单位基础', '乘客可向外开火。', 'yes 更强', 'yes/no', '会显著增强运输单位。', 'caution'],
  ['SelfHealing', '自愈', '单位基础', 'yes 表示单位会自动回血。', 'yes 更强', 'yes/no', '适合英雄或高级单位。', 'safe'],
  ['ImmuneToPsionics', '心灵免疫', '单位基础', '免疫心灵控制。', 'yes 更强', 'yes/no', '会改变对心控单位的克制关系。', 'caution'],
  ['EMP.Modifier', 'EMP 修正', '单位基础', 'EMP 持续时间倍率。25% 表示只吃四分之一时长。', '越低越抗 EMP', '0%-100%', '低于 50% 会明显增强。', 'caution'],
  ['Chronoshift.Allow', '允许超时空', '单位基础', '是否允许超时空传送。', 'yes 更灵活', 'yes/no', '影响特殊技能互动。', 'caution'],
  ['Crusher', '可碾压', '单位基础', '是否可以碾压。', 'yes 更强', 'yes/no', undefined, 'safe'],
  ['OmniCrusher', '高级碾压', '单位基础', '是否拥有高级碾压。', 'yes 更强', 'yes/no', '可能压过更多目标。', 'caution'],
  ['AllowedToStartInMultiplayer', '遭遇战开局单位', '单位基础', '是否能作为遭遇战开局单位。', 'yes 可开局出现', 'yes/no', undefined, 'caution'],
  ['CrateGoodie', '箱子奖励', '单位基础', '是否能从箱子开出。', 'yes 可从箱子获得', 'yes/no', undefined, 'safe'],
  ['Damage', '基础伤害', '武器', '实际伤害还要乘以弹头倍率。', '越大越强', '1-250+', '每次提高 10%-25% 更容易控制。', 'safe'],
  ['ROF', '开火间隔', '武器', '越小开火越快。小幅降低即可明显增强输出。', '越小越强', '1-180+', '180 到 150 是温和加强；180 到 90 是明显加强。', 'safe'],
  ['Range', '射程', '武器', '越大打得越远。', '越大越强', '4-16+', '提高 1-2 点通常已经很明显。', 'safe'],
  ['MinimumRange', '最小射程', '武器', '小于该距离可能无法攻击。', '越小近身死角越少', '0-6', undefined, 'caution'],
  ['Burst', '连发次数', '武器', '一轮发射次数。', '越大爆发越强', '1-8', '提高 Burst 会成倍放大输出。', 'caution'],
  ['Projectile', '抛射体', '武器', '决定弹道、追踪、是否对空对地。', '取决于目标对象', undefined, '改错会导致武器无法命中或逻辑异常。', 'danger'],
  ['Warhead', '弹头', '武器', '决定伤害倍率、溅射和特殊效果。', '取决于弹头', undefined, '改弹头会改变武器定位。', 'danger'],
  ['Report', '开火音效', '武器', '开火时播放的音效。', '无直接强弱', undefined, undefined, 'unknown'],
  ['Anim', '动画', '武器', '开火或命中特效。', '无直接强弱', undefined, undefined, 'unknown'],
  ['DecloakToFire', '开火破隐', '武器', '开火时是否解除隐形。', 'no 更强', 'yes/no', undefined, 'caution'],
  ['OmniFire', '全向开火', '武器', '是否允许全向开火。', 'yes 更强', 'yes/no', undefined, 'caution'],
  ['AreaFire', '区域攻击', '武器', '是否区域攻击。', 'yes 可能更强', 'yes/no', undefined, 'caution'],
  ['Verses', '基础护甲倍率', '弹头', '对基础护甲类型的伤害倍率列表。', '越高越克制', '0%-200%+', '建议逐项检查倍率。', 'caution'],
  ['CellSpread', '溅射范围', '弹头', '越大范围越广。', '越大越强', '0-3+', '超过 1.5 已经属于大范围。', 'safe'],
  ['PercentAtMax', '边缘伤害比例', '弹头', '溅射边缘伤害比例。越高边缘伤害越痛。', '越大越强', '0%-100%', undefined, 'safe'],
  ['AnimList', '命中特效', '弹头', '命中特效列表。', '无直接强弱', undefined, undefined, 'unknown'],
  ['InfDeath', '步兵死亡动画', '弹头', '步兵死亡动画类型。', '无直接强弱', undefined, undefined, 'unknown'],
  ['ProneDamage', '卧倒伤害倍率', '弹头', '对卧倒步兵伤害倍率。', '越大越强', undefined, undefined, 'safe'],
  ['Wall', '影响墙', '弹头', '是否影响墙。', 'yes 可破墙', 'yes/no', undefined, 'caution'],
  ['Wood', '影响木质/建筑逻辑', '弹头', '是否影响木质或相关建筑逻辑。', 'yes 影响更多目标', 'yes/no', undefined, 'caution'],
  ['AffectsAllies', '影响友军', '弹头', '是否影响友军。', 'yes 可能误伤', 'yes/no', undefined, 'caution'],
  ['AffectsOwner', '影响自己', '弹头', '是否影响拥有者。', 'yes 可能自伤', 'yes/no', undefined, 'caution'],
  ['AA', '可对空', '抛射体', '是否可对空。', 'yes 更泛用', 'yes/no', undefined, 'caution'],
  ['AG', '可对地', '抛射体', '是否可对地。', 'yes 更泛用', 'yes/no', undefined, 'caution'],
  ['Image', '图像', '抛射体', '弹体或对象图像。', '无直接强弱', undefined, '改错可能导致显示异常。', 'danger'],
  ['Acceleration', '加速度', '抛射体', '弹体加速度。', '通常越大越快', undefined, undefined, 'safe'],
  ['Arcing', '抛物线', '抛射体', '是否抛物线弹道。', '改变命中逻辑', 'yes/no', undefined, 'caution'],
  ['Inviso', '隐形弹体', '抛射体', '是否隐藏弹体。', '无直接强弱', 'yes/no', undefined, 'unknown'],
  ['SubjectToWalls', '受墙阻挡', '抛射体', '是否被墙阻挡。', 'no 更容易命中', 'yes/no', undefined, 'caution'],
  ['SubjectToCliffs', '受悬崖影响', '抛射体', '是否受悬崖影响。', 'no 更容易命中', 'yes/no', undefined, 'caution'],
  ['SubjectToElevation', '受高度差影响', '抛射体', '是否受高度差影响。', 'no 更容易命中', 'yes/no', undefined, 'caution'],
  ['Cluster', '分裂数量', '抛射体', '分裂数量。', '越大越强', undefined, undefined, 'caution'],
  ['AirburstWeapon', '空爆武器', '抛射体', '空爆后使用的武器。', '取决于引用武器', undefined, '应确认目标武器存在。', 'danger'],
  ['BuildSpeed', '全局建造速度', '全局', '全局建造速度倍率。越低建造越快。', '越低越强', undefined, '小幅降低即可影响全局节奏。', 'caution'],
  ['RepairPercent', '维修费用比例', '全局', '维修费用比例。', '越低维修越便宜', undefined, undefined, 'safe'],
  ['RepairRate', '建筑维修速度', '全局', '建筑维修速度。', '越大越快', undefined, undefined, 'safe'],
  ['RepairStep', '每次维修量', '全局', '每次维修量。', '越大越快', undefined, undefined, 'safe'],
  ['SelfHealUnitFrames', '单位自愈间隔', '全局', '单位自愈间隔。', '越小越强', undefined, undefined, 'safe'],
  ['SelfHealUnitAmount', '单位自愈量', '全局', '单位每次自愈量。', '越大越强', undefined, undefined, 'safe'],
  ['SelfHealInfantryFrames', '步兵自愈间隔', '全局', '步兵自愈间隔。', '越小越强', undefined, undefined, 'safe'],
  ['SelfHealInfantryAmount', '步兵自愈量', '全局', '步兵每次自愈量。', '越大越强', undefined, undefined, 'safe'],
  ['MultipleFactory', '多工厂加速', '全局', '多工厂生产加速倍率。', '越高越快', undefined, undefined, 'caution'],
  ['RepairSell', '自动维修', 'AI / IQ', '玩家建筑是否自动维修。0 通常可实现自动维修。', '0 更省心', '0/1', '自动维修仍然消耗资金。', 'safe'],
]

const docs: FieldDoc[] = rows.map(([key, zhName, category, description, valueDirection, observedRange, suggestedChange, risk]) => ({
  key,
  zhName,
  category,
  description,
  valueDirection,
  observedRange,
  suggestedChange,
  risk,
}))

const fieldDocs = new Map(docs.map((doc) => [doc.key.toLowerCase(), doc]))

export function getFieldDoc(key?: string): FieldDoc {
  if (!key) return unknownDoc('')
  const versusMatch = key.match(/^Versus\.(.+)$/i)
  if (versusMatch) {
    return {
      key,
      zhName: `对 ${versusMatch[1]} 护甲倍率`,
      category: '弹头',
      description: `决定该弹头对 ${versusMatch[1]} 护甲造成多少伤害。`,
      valueDirection: '越高越克制',
      observedRange: '0%-200%+',
      suggestedChange: '提高到 75%-100% 会明显增强对应克制。',
      risk: 'caution',
    }
  }
  return fieldDocs.get(key.toLowerCase()) ?? unknownDoc(key)
}

function unknownDoc(key: string): FieldDoc {
  return {
    key,
    zhName: key || '未知字段',
    category: '未知',
    description: '字段字典暂未收录。修改前建议查看原规则上下文和引用关系。',
    valueDirection: '未知',
    risk: 'unknown',
  }
}

export function getFieldRisk(key?: string) {
  return getFieldDoc(key).risk
}

export function getAllFieldDocs() {
  return docs
}
