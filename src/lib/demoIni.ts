export const demoIni = `[VehicleTypes]
1=CNTR
2=HTNK

[WeaponTypes]
1=CenturionCannon

[Projectiles]
1=CenturionCannonBall

[Warheads]
1=CenturionCannonWH

[CNTR]
UIName=NAME:CNTR
Name=Centurion Siege Crawler
Strength=2250
Armor=cntr
Cost=3000
TechLevel=10
Primary=CenturionCannon
Secondary=CenturionMissiles
Speed=3
ROT=2
BuildLimit=1
Sight=8
Owner=Russians,Confederation,Africans,Arabs
Prerequisite=SOVWEAP,NATEK

[HTNK]
UIName=NAME:HTNK
Name=Rhino Heavy Tank
Strength=400
Armor=heavy
Cost=900
TechLevel=2
Primary=120mm
Speed=6
ROT=5

[CenturionCannon]
Damage=160
ROF=85
Range=7.5
Projectile=CenturionCannonBall
Warhead=CenturionCannonWH
Burst=2

[CenturionCannonBall]
Image=120MM
AA=no
AG=yes
ROT=1
Speed=40
Arcing=yes

[CenturionCannonWH]
CellSpread=1.2
PercentAtMax=0.8
Verses=100%,90%,80%,70%,60%,50%,40%,30%,20%,10%,5%
AffectsAllies=no
`
