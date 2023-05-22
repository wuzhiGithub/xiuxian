import { _decorator, Component, Node, random,Animation, Label, RichText, find, ProgressBar, tween, UITransform, Prefab, Button,instantiate, ScrollView,EventHandler, Sprite, loader, resources, assert, SpriteFrame, Slider, math } from 'cc';
const { ccclass, property } = _decorator;

import { ITEM } from './Item';
import { ITEM_KIND } from './myConst';
import { CHANCE } from './Chance';
import { EXP } from './Exp';
import { RESULT } from './Result';

const COLOR_LEVEL = {
    [1]: "green",
    [2]: "#3792F9",
    [3]: "#bf34ef",
    [4]: "#efb134",
    [5]: "red",
}

const CHANCE_RANGE = {
    [0]:{
        min:10001,
        max:8,
    },
    [1]:{
        min:10001,
        max:8,
    },
    [2]:{
        min:10001,
        max:8,
    },
    [3]:{
        min:10001,
        max:8,
    },

    [4]:{
        min:20001,
        max:8,
    },
    [5]:{
        min:20001,
        max:8,
    },
    [6]:{
        min:20001,
        max:8,
    },

    [7]:{
        min:30001,
        max:8,
    },
    [8]:{
        min:30001,
        max:8,
    },
    [9]:{
        min:30001,
        max:8,
    },
}



const COST_BIGUAN = {
    [0]: {
        cost: 0,
        rate: 1,
    },
    [1]: {
        cost: 2,
        rate: 2,
    },
    [2]: {
        cost: 5,
        rate: 3,
    },
    [3]: {
        cost: 15,
        rate: 5,
    },
}

const BASE_COST = {
    [0]: 10,

    [1]: 20,
    [2]: 20,
    [3]: 20,

    [4]: 50,
    [5]: 50,
    [6]: 50,

    [7]: 100,
    [8]: 100,
    [9]: 100, 

    [10]: 200,
    [11]: 200,
    [12]: 200, 

    [13]: 500,
    [14]: 500,
    [15]: 500,

    [16]: 1000,
    [17]: 1000,
    [18]: 1000,

    [19]: 2000,
    [20]: 2000,
    [21]: 2000,

    [22]: 5000,
    [23]: 5000,
    [24]: 5000,


}

const MIJING = {
    [1]: {
        cost:1,
        dpsLevel:[0,2200,4300,10500],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
    [2]: {
        cost:5,
        dpsLevel:[0,5000,11500,22500],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
    [3]: {
        cost:10,
        dpsLevel:[0,20000,35000,65000],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
    [4]: {
        cost:20,
        dpsLevel:[0,50000,90000,170000],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
    [5]: {
        cost:50,
        dpsLevel:[0,90000,200000,350000],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
    [6]: {
        cost:1,
        dpsLevel:[0,300000,500000,900000],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
    [7]: {
        cost:1,
        dpsLevel:[0,1200000,1900000,3500000],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
    [8]: {
        cost:1,
        dpsLevel:[0,3400000,6000000,14000000],
        reward:{
            [1]:{
                money: 100,
                rate: [70,25,5,0]

            },
            [2]:{
                money: 200,
                rate: [50,30,15,5]
            },
            [3]:{
                money: 500,
                rate: [30,40,20,10]
            },
            [4]:{
                money: 1000,
                rate: [20,30,30,20]
            },
        }
    },
}

const BOSS = {
    [1]: {
        cost:5,
        dps:20000,
        ticket:1,
    },
    [2]: {
        cost:5,
        dps:90000,
        ticket:2,
    },
    [3]: {
        cost:5,
        dps:500000,
        ticket:5,
    },
}

const LOTTERY = [30,20,10,20,13,5,2]

const TREASURE = {
    [1]: "玉虚瓶", // 丹药加成
    [2]: "道天箓",    // 修炼速度加成
    [3]: "无量宝灯",    //战力加成
    [4]: "长生泉" ,    //寿命加成
    [5]: "灵机符",    //灵石加成
    [6]: "众妙石",    //经验加成
}


@ccclass('GameManager')
export class GameManager extends Component {

    @property({type:Node})
    public qiyuDlg:Node = null; //
    @property({type:Node})
    public resultDlg:Node = null; //
    @property({type:Node})
    public expDlg:Node = null; //
    @property({type:Node})
    public biguanDlg:Node = null; //
    @property({type:Node})
    public bossDlg:Node = null; //
    @property({type:Node})
    public mijingDlg:Node = null; //
    @property({type:Node})
    public bagDlg:Node = null; //
    @property({type:Node})
    public confirmDlg:Node = null; //
    @property({type:Node})
    public sellDlg:Node = null; //
    @property({type:Node})
    public lotteryDlg:Node = null; //

    @property({type:Prefab})
    public item:Prefab = null;
    @property({type:SpriteFrame})
    public bg_select:SpriteFrame = null;
    @property({type:SpriteFrame})
    public bg_normal:SpriteFrame = null;

    private _level:number = 1; //境界
    private _weapon: number = 0; //法宝
    private _gongfa: number = 0; //功法
    private _armor: number = 0; //防具
    
    private _health: number = 0; //寿命
    private _realSpeed: number = 0; //实际修炼速度
    private _baseSpeed: number = 0 //基础修炼速度
    private _baseCost: number = 0; //基础闭关灵石
    private _curExp: number = 0;//当前经验
    private _needExp: number = 0;//境界所需经验
    private _money: number = 0; //灵石
    private _dps:number = 0;
    private _chanceId: number = 0; //当前任务类型
    private _chooseItemId: number = 0;
    private _itemTb = new Map([]);
    private _year:number = 0; //道年
    private _biguanType:number = 0; //闭关类型
    private _biguanDay:number = 0; //闭关天数
    private _mijingType:number = 0;
    private _bossType: number = 0;
    private _func = null;
    private _sellNum:number = 0;
    private _ownNum:number = 0;
    private _ticketNum:number = 0;
    private _treasureTb = new Map([]);

    start() {
        this.hideAllDlg()
        this.initData()
    }

    initData(){
        this._level = 0; //境界
        this._weapon = 0; //法宝
        this._gongfa = 0; //功法
        this._armor = 0; //防具
        this._baseCost = 10;
        this._health = 70; //寿命
        this._realSpeed = 10; //修炼速度
        this._baseSpeed = 10; //基础修炼速度
        this._curExp = 0;//当前经验
        this._needExp = 10;//境界所需经验
        this._money = 0; //灵石
        this._chooseItemId = 0;
        this._mijingType = 0;
        this._bossType = 0;
        this._func = null;
        this._itemTb = new Map([]);
        this._sellNum = 0;
        this._ownNum = 0;
        this._ticketNum = 0;
        this._treasureTb = new Map([]);
        this.uplevel()
        this.updateHealth(0)
        this.updateCostMoneyDlg()
        this.updateXiulianRateDlg()
        this.updateBossDlg()
    }

    hideAllDlg(){
        this.qiyuDlg.active = false
        this.resultDlg.active = false
        this.bagDlg.active =false
        this.bossDlg.active = false
        this.biguanDlg.active = false
        this.mijingDlg.active = false
        this.confirmDlg.active = false
        this.sellDlg.active = false
        this.lotteryDlg.active = false
    }

    update(deltaTime: number) {
        
    }
    checkOpen(){
        return this.qiyuDlg.active || this.resultDlg.active || this.bagDlg.active || this.bossDlg.active || this.biguanDlg.active || this.mijingDlg.active || this.confirmDlg.active || this.sellDlg.active || this.lotteryDlg.active
    }

    openDlg(dlg:Node){
        dlg.active = true
        dlg.getChildByName("Bg").getComponent(Animation).play("scaleToShow")
        
    }
    hideDlg(dlg:Node){
        dlg.active = false
        dlg.getChildByName("Bg").getComponent(Animation).play("scaleToHide")
    }
    


    clickBiGuan(){
        if (this.checkOpen()){
            return
        }
        this.openDlg(this.biguanDlg)
       
    }

    clickBag(){
        if (this.checkOpen()){
            return
        }
        this.openDlg(this.bagDlg)
        this.updateBag()
        
    }
    clickQiYu(){
        if (this.checkOpen()){
            return
        }
        let min = CHANCE_RANGE[this._level].min
        let max = CHANCE_RANGE[this._level].max
        let chanceList = []
        for (let i = 0; i < max; i++){
            chanceList[i] = CHANCE[min+i].weight
        }
        let idx = this.rewardRandom(chanceList)
        this.showChance(min+idx)
        this.updateHealth(-1)//每次奇遇消耗一年寿命
    }

    clickMiJing(){
        if (this.checkOpen()){
            return
        }
        this.openDlg(this.mijingDlg)
        find("Canvas/AllDlg/MiJingDlg/Bg/Tips").active = false
    }

    clickMiJingTip(){
       find("Canvas/AllDlg/MiJingDlg/Bg/Tips").active = true
    }

    closeMiJingTip(){
        find("Canvas/AllDlg/MiJingDlg/Bg/Tips").active = false
    }

    clickBoss(){
        if (this.checkOpen()){
            return
        }
        this.openDlg(this.bossDlg)
       
    }

    clickLottery(){
        if (this.checkOpen()){
            return
        }
        this.openDlg(this.lotteryDlg)
        this.updateLotteryDlg()
        this.updateTicket(0)
    }

    addClickEvent(btn:Node, idx:number){
        let clickEventHandler = new EventHandler();
        clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "GameManager";// 这个是脚本类名
        clickEventHandler.handler = "clickItem";
        clickEventHandler.customEventData = `${idx}`;

        let button = btn.getComponent(Button);
        button.clickEvents.push(clickEventHandler);
    }

    clickItem(event: Event, idx:string){
        let sv = this.bagDlg.getChildByName("Bg").getChildByName("ScrollView").getComponent(ScrollView)
        for (let key of this._itemTb.keys()){
            if (key == Number(idx)){
                sv.content.getChildByName(`item_${key}`).getChildByName("Button").getComponent(Button).normalSprite = this.bg_select
                sv.content.getChildByName(`item_${key}`).getChildByName("Button").getComponent(Button).pressedSprite = this.bg_select
                sv.content.getChildByName(`item_${key}`).getChildByName("Button").getComponent(Button).hoverSprite = this.bg_select
            }
            else{
                sv.content.getChildByName(`item_${key}`).getChildByName("Button").getComponent(Button).normalSprite = this.bg_normal
                sv.content.getChildByName(`item_${key}`).getChildByName("Button").getComponent(Button).pressedSprite = this.bg_normal
                sv.content.getChildByName(`item_${key}`).getChildByName("Button").getComponent(Button).hoverSprite = this.bg_normal
            }
           
        }
        this._chooseItemId = Number(idx)
        
    }

    showMsg(desc:string){
        let msg = find("Canvas/AllDlg/Msg")
        msg.getComponent(Animation).play("msg")
        msg.getChildByName("RichText").getComponent(RichText).string = desc
    }

    showChance(idx:number){
        console.info("task", idx)
        this._chanceId = idx
        this.doEvent()
        

        // this.openDlg(this.qiyuDlg)
        // let titleDesc = ""
        // let leftDesc = ""
        // let rightDesc = ""

        // this.qiyuDlg.getChildByName("Bg").getChildByName("title").getComponent(RichText).string = `${titleDesc}`
        // this.qiyuDlg.getChildByName("Bg").getChildByName("choice1").getChildByName("Label").getComponent(Label).string = `${leftDesc}`
        // this.qiyuDlg.getChildByName("Bg").getChildByName("choice2").getChildByName("Label").getComponent(Label).string = `${rightDesc}`

        //this._chanceId = idx
    }

    showResult(desc:string){
        this.openDlg(this.resultDlg)
        this.resultDlg.getChildByName("Bg").getChildByName("title").getComponent(RichText).string = desc
    }
    
    closeTips(){
        this.hideDlg(this.qiyuDlg)
    }

    clickChoice1(){
        this.closeTips()
        this.doEvent()
    }
    clickChoice2(){
        this.closeTips()
    }

    clickConfirm(){
        this.hideDlg(this.resultDlg)
    }

    clickBiGuanChoice(event:Event,type:number){
        if (this._biguanDay == 0){
            this.showMsg("闭关天数为0，请重新选择")
            return
        }
        this._biguanType = type
        let desc = ""
        if (this._biguanType == 0){
            desc = `即将普通闭关${this._biguanDay}年，无需耗费灵石`
        }
        else{
            let cost = COST_BIGUAN[this._biguanType].cost * this._biguanDay * this._baseCost
            desc = `即将普通闭关${this._biguanDay}年，耗费灵石<color=green>${cost}</color>`
        }
        this.showConfirmDlg(desc, this.confirmCost)
    }

    clickLotteryChoice(event:Event,type:number){
        let needNum = 1
        if (type == 2){
            needNum = 10
        }
        if (this._ticketNum < needNum){
            this.showMsg("鸿蒙符不足")
        }
        else{
            this.startLottery(needNum)
        }
    }

    clickBossChoice(event:Event,type:number){
        let needDps = BOSS[type].dps
        if(this._dps < needDps){
            this.showMsg("当前战力过低，无法挑战")
        }
        else{
            let cost = BOSS[type].cost
            let desc = `即将开始挑战，需消耗${cost}道年`
            this._bossType = type
            this.showConfirmDlg(desc, this.confirmBoss)
        }

    }
    clickMiJingChoice(event:Event,type:number){
        if(this._level < (type-1) * 3){
            this.showMsg("当前境界过低，无法进入该秘境")
        }
        else{
            let cost = MIJING[type].cost
            let desc = `即将进入秘境，需消耗${cost}道年`
            this._mijingType = type
            this.showConfirmDlg(desc, this.confirmMiJing)
        }
    }
    rand(min:number, max:number){
        let range = max - min + 1
        let value = min + Math.floor(Math.random() * range)
        return value
    }

    rewardRandom(rewardList:any){
        let randValue = this.rand(1,100)
        let randIndex = 0
        for (let index in rewardList){
            if (randValue <= rewardList[index] ){
                randIndex = Number(index)
                break
            }
            else{
                randValue -= rewardList[index]
            }
        }
        return randIndex
    }


    startLottery(num:number){
        let resultTb = new Map([])
        for (let i = 1; i <= num ; i++){
            let result = this.rewardRandom(LOTTERY)
            if (resultTb.has(result)){
                let num = resultTb.get(result)
                resultTb.set(result, num + 1)
            }
            else{
                resultTb.set(result, 1)
            }
        }
        let rewardDesc = "福至心灵，获得"
        for (let [result, cnt] of resultTb){
            let type = Math.floor(result / 3)
            let kindLevel = result % 3 + 1
            if (type == 1){//修为丹
                let level = Math.ceil(this._level / 3)
                let itemId = 40000 + level * 1000 + kindLevel * 100
                let itemCnt = 10
                if (kindLevel == 2){
                    itemCnt = 5
                }
                else if(kindLevel == 3){
                    itemCnt = 2
                }
                this.doAddItem(itemId, itemCnt * cnt)
                rewardDesc += this.getRewardDesc(itemId, itemCnt * cnt)
            }
            else if (type == 2){//功法
                let level = Math.ceil(this._level / 3)
                let itemId = 30000 + level * 1000 + kindLevel
                this.doAddItem(itemId, cnt)
                rewardDesc += this.getRewardDesc(itemId, cnt)
            }
            else {
                let rand = this.rand(1,6)
                if (this._treasureTb.has(rand)){
                    rewardDesc += `[<color=red>${TREASURE[rand]}</color>]，由于重复获得，转化为[<color=#efb134>上品修为丹</color>]*10`
                    let level = Math.ceil(this._level / 3)
                    let itemId = 40000 + level * 1000 + 300
                    this.doAddItem(itemId,10)
                }
                else{
                    this._treasureTb.set(rand, 1)
                    rewardDesc += `[<color=red>${TREASURE[rand]}</color>]`
                    if (rand == 2){
                        this.updateXiulianRateDlg()
                    }
                    else if (rand == 3){
                        this.updateDps()
                    }
                    else if (rand == 4){
                        this.updateHealth(200)
                    }
                    this.updateLotteryDlg()
                }
                
               
            }
        }
        this.updateTicket(-num)
        this.showResult(rewardDesc)
    }

    confirmBoss(){
        let info = BOSS[this._bossType]
        let cost = info.cost
        if (this._health < cost){
            this.showMsg("寿命不足,无法进入秘境")
            return
        }
        this._ticketNum += info.ticket
        this.updateHealth(-cost)
        let desc = `挑战完成，获得<color=red>鸿蒙符</color>*${info.ticket}`
        this.closeConfirmDlg()
        this.showResult(desc)
    }

    confirmMiJing(){
        let cost = MIJING[this._mijingType].cost
        if (this._health < cost){
            this.showMsg("寿命不足,无法进入秘境")
            return
        }
        let rewardTb = MIJING[this._mijingType].reward
        let dpsTb = MIJING[this._mijingType].dpsLevel
        let rewardLv = 1
        for(let i in dpsTb){
            if (this._dps >= dpsTb[i]){
                rewardLv = Number(i)+1
            }
        }
        let itemDesc = `秘境完成，获得奖励`
        let reward = rewardTb[rewardLv]
        let type = this.rand(1,3)
        let randLevel = this.rewardRandom(reward.rate) + 1
        let itemId = type * 10000 + (this._mijingType)* 1000 + randLevel*100
        console.info(itemId)
        this.doAddItem(itemId, 1)
        let colorDesc = COLOR_LEVEL[ITEM[itemId].level]
        let valueDesc = `[<color=${colorDesc}>${ITEM[itemId].name}</color>]`
        itemDesc += valueDesc
        
        this.updateHealth(-MIJING[this._mijingType].cost)
        this.closeConfirmDlg()
        this.showResult(itemDesc)
    }

    confirmCost(){
        let needCost = COST_BIGUAN[this._biguanType].cost * this._biguanDay * this._baseCost
        if (this._money < needCost){
            this.showMsg("灵石不足，请重新选择闭关")
        }
        else{
            let addExp = this._realSpeed * this._biguanDay * COST_BIGUAN[this._biguanType].rate
            let desc = `闭关成功，经验增加${addExp}`
            if (this._treasureTb.has(6)){
                let extraExp = Math.ceil(addExp * 0.5)
                desc += `(额外加成${extraExp})`
                addExp += extraExp
            }
            this.doAddExp(addExp)
            this.updateHealth(-this._biguanDay)
            this.updateMoney(-needCost, false)
            this.showMsg(desc)
            this.closeConfirmDlg()
        }
    }

    clickConfirmDlg(){
        this._func()
    }

    showConfirmDlg(desc, func){  
        this.openDlg(this.confirmDlg)
        this.confirmDlg.getChildByName("Bg").getChildByName("title").getComponent(RichText).string = desc
        this._func = func
    }
    closeConfirmDlg(){
        this.hideDlg(this.confirmDlg)

    }

    onSliderChange(){
        let value = this.biguanDlg.getChildByName("Bg").getChildByName("Slider").getComponent(Slider).progress
        value = Math.floor(value * 10)
       
        this._biguanDay = value
        this.biguanDlg.getChildByName("Bg").getChildByName("Slider").getComponent(Slider).progress = value / 10
        this.biguanDlg.getChildByName("Bg").getChildByName("Slider").getComponent(ProgressBar).progress = value / 10
        this.biguanDlg.getChildByName("Bg").getChildByName("costDay").getComponent(Label).string = `${value}年`
        
    }

    getRewardDesc(itemId:number, cnt:number){
        let colorDesc = COLOR_LEVEL[ITEM[itemId].level]
        let valueDesc = `[<color=${colorDesc}>${ITEM[itemId].name}</color>]*${cnt} `
        return valueDesc
    }

    doEvent(){
        this.openDlg(this.resultDlg)
        let info = CHANCE[this._chanceId]
        console.info(this._chanceId, info)
        let resultInfo = RESULT[info.result]
        
        let itemDesc = ""
        let titleDesc = resultInfo.desc
        let value = resultInfo.value
        if(resultInfo.type == 1){
            itemDesc = `<color=#3792F9>${value}</color>`
            if (this._treasureTb.has(6)){
                let extraExp = Math.ceil(value*0.5)
                itemDesc +=`(额外加成${extraExp})`
                value += extraExp
            }
            this.doAddExp(value)
        }

        else if (resultInfo.type == 2)
        {
            itemDesc = `<color=#3792F9>${value}</color>`
            if (this._treasureTb.has(5)){
                let addNum = Math.ceil(value * 0.5)
                itemDesc += `(额外加成${addNum})`
            }
           this.updateMoney(value, true)
        }

        else if (resultInfo.type ==3)
        {
            
            this.doAddItem(value, 1)
            itemDesc += this.getRewardDesc(value, 1)
            
        }
    
        let desc = `${titleDesc}${itemDesc}`
        this.showResult(desc)
    }
   
    refreshExp(){
        this.expDlg.getChildByName("ProgressBar").getComponent(ProgressBar).progress = this._curExp / this._needExp
        this.expDlg.getChildByName("myExp").getComponent(Label).string = `${this._curExp}/${this._needExp}`
    }

    updateHealth(num:number){
        this._health += num
        if (this._health <= 0){
            let desc = "游戏结束"
            this.initData()
            this.showResult(desc)
            return
        }
        if (num <= 0){
            this._year -= num
            find("Canvas/Exp/YearText").getComponent(Label).string = `${this._year}道年`
        }
        let color = "white"
        if (this._health <= 30){
            color = "red"
        }
        find("Canvas/Health").getChildByName("desc").getComponent(RichText).string = `<color=${color}>${this._health}</color>`

    }

    uplevel(){
        let addHealth = 0
        while(this._curExp >= this._needExp){
            this._level += 1
            this._curExp -= this._needExp
            this._needExp = EXP[this._level].need
            addHealth += EXP[this._level].addHealth
        }
      
        let desc = EXP[this._level].desc
        this.expDlg.getChildByName("JingJie").getComponent(Label).string = `${desc}`
        this.refreshExp()
        this.updateHealth(addHealth)
        if (addHealth > 0){
            this.showMsg("境界提升，寿命增加")
        }
        this.updateDps()
        this._baseCost = BASE_COST[this._level]
        this.updateCostMoneyDlg()
        
    }
    updateBag(){
        let sv = this.bagDlg.getChildByName("Bg").getChildByName("ScrollView").getComponent(ScrollView)
        sv.content.removeAllChildren()
        for (let [key, value] of this._itemTb){
            var realItem = instantiate(this.item)
            realItem.name = `item_${key}`
            let itemName = ITEM[key].name
            let btn = realItem.getChildByName("Button")
            let colorDesc = COLOR_LEVEL[ITEM[key].level]
            btn.getChildByName("RichText").getComponent(RichText).string = `<color=${colorDesc}>${itemName}</color>`
            btn.getChildByName("Amount").getComponent(RichText).string = `x${value}`
            this.addClickEvent(btn, key)

            if (key == this._chooseItemId){
                btn.getComponent(Button).normalSprite = this.bg_select
                btn.getComponent(Button).pressedSprite = this.bg_select
                btn.getComponent(Button).hoverSprite = this.bg_select
            }
            else{
                btn.getComponent(Button).normalSprite = this.bg_normal
                btn.getComponent(Button).pressedSprite = this.bg_normal
                btn.getComponent(Button).hoverSprite = this.bg_normal
            }

            sv.content.addChild(realItem)

        }
    }
    

    doAddExp(exp:number){
        this._curExp += exp
        if (this._curExp >= this._needExp){
            this.uplevel()
        }
        else{
            this.refreshExp()
        } 
    }

    doAddItem(id:number, cnt: number){
        if (this._itemTb.has(id)){
            let num = this._itemTb.get(id)
            this._itemTb.set(id, num + cnt)
        }
        else{
            this._itemTb.set(id, cnt)
        }
    }

    useItem(){
        if (this._chooseItemId != 0){
            console.info("useItem",this._chooseItemId)
            let itemInfo = ITEM[this._chooseItemId]
            if (itemInfo.kind == ITEM_KIND.GONG_FA){
                if (this._gongfa == this._chooseItemId){
                    this.showMsg("已装备同功法")
                    return
                }
                else{
                    this.updateGongFa(itemInfo)
                    this.showMsg("装备成功")
                }
                
            }

            if (itemInfo.kind == ITEM_KIND.WEAPON){
                if (this._weapon == this._chooseItemId){
                    this.showMsg("已装备同武器")
                    return
                }
                else{
                    this.updateWeapon(itemInfo)
                    this.showMsg("装备成功")
                }
                
            }

            if (itemInfo.kind == ITEM_KIND.CLOTHE){
                if (this._armor == this._chooseItemId){
                    this.showMsg("已装备同防具")
                    return
                }
                else{
                    this.updateClothe(itemInfo)
                    this.showMsg("装备成功")
                }
                
            }

            if (itemInfo.kind == ITEM_KIND.DRUG){
                let addRate = 0
                let value = itemInfo.value
                let desc = `经验增加${itemInfo.value}`
                if (this._treasureTb.has(1)){
                    addRate +=  0.5
                }
                if (this._treasureTb.has(6)){
                    addRate +=  0.5
                }
                if (addRate > 0){
                    let addValue = Math.ceil(value * addRate)
                    value += addValue
                    desc +=  `(额外加成${addValue})`
                }
                this.doAddExp(value)
                this.showMsg(desc)
            }

            let num = this._itemTb.get(this._chooseItemId)
            if (num == 1){
                this._itemTb.delete(this._chooseItemId)
                this._chooseItemId = 0
            }
            else{
                this._itemTb.set(this._chooseItemId, num - 1)
            }
            this.updateBag()
        }
        else{
            this.showMsg("未选择物品")
        }
        

    }
    sellItem(){
        if(this._chooseItemId!=0){
            let num = this._itemTb.get(this._chooseItemId)
            let itemInfo = ITEM[this._chooseItemId]
            if (num == 1){
                this._itemTb.delete(this._chooseItemId)
                this.updateMoney(itemInfo.price, false)
                this.updateBag()
                this._chooseItemId = 0
            }
            else{
                this.showSellDlg(itemInfo, num)
            }
        }
        else{
            this.showMsg("未选择物品")
        }
        

    }
    showSellDlg(item:object,num:number){
        this.openDlg(this.sellDlg)
        this.sellDlg.getChildByName("Bg").getChildByName("ItemName").getComponent(RichText).string = `${item.name}`
        this.sellDlg.getChildByName("Bg").getChildByName("haveLabel").getComponent(Label).string = `已拥有:${num}`
        this._ownNum = num
        this.updateSellNum(this._ownNum)
    }
    updateSellNum(num:number){
        this._sellNum = num
        this.sellDlg.getChildByName("Bg").getChildByName("sellLabel").getComponent(Label).string = `${num}`
        this.sellDlg.getChildByName("Bg").getChildByName("Slider").getComponent(Slider).progress = num / this._ownNum
        this.sellDlg.getChildByName("Bg").getChildByName("Slider").getComponent(ProgressBar).progress = num / this._ownNum
    }

    clickMinSell(){
        if (this._sellNum > 0){
            this.updateSellNum(this._sellNum - 1)
        }
    }
    clickMaxSell(){
        if (this._sellNum < this._ownNum){
            this.updateSellNum(this._sellNum + 1)
        }
    }

    onSellSliderChange(){
        let value = this.sellDlg.getChildByName("Bg").getChildByName("Slider").getComponent(Slider).progress 
        value = Math.floor(value * this._ownNum)
        this.updateSellNum(value)
         
    }

    confirmSell(){
        let itemInfo = ITEM[this._chooseItemId]
        if (this._sellNum == this._ownNum){
            this._itemTb.delete(this._chooseItemId)
            this._chooseItemId = 0
        }
        else{
            this._itemTb.set(this._chooseItemId, this._ownNum - this._sellNum)
        }
        this.updateMoney(itemInfo.price * this._sellNum, false)
        this.updateBag()
       
        this.closeSellDlg()
    }
    closeSellDlg(){
        this.hideDlg(this.sellDlg)
    }
    
    closeItemBag(){
        this.hideDlg(this.bagDlg)
        this._chooseItemId = 0
    }

    closeMiJing(){
        this.hideDlg(this.mijingDlg)
    }
    closeBoss(){
        this.hideDlg(this.bossDlg)
    }
    closeBiGuan(){
        this.hideDlg(this.biguanDlg)
    }
    closeLottery(){
        this.hideDlg(this.lotteryDlg)
    }

    updateXiulianRateDlg(){
        if(this._treasureTb.has(2)){
            this._realSpeed = Math.ceil(this._realSpeed * 1.5)
        }
        this.expDlg.getChildByName("Rate").getComponent(Label).string = `${this._realSpeed}/道年`
    }

    updateBossDlg(){
        find("Canvas/AllDlg/BossDlg/Bg/choice1/Label-001").getComponent(Label).string = `战力>${BOSS[1].dps}`
        find("Canvas/AllDlg/BossDlg/Bg/choice2/Label-001").getComponent(Label).string = `战力>${BOSS[2].dps}`
        find("Canvas/AllDlg/BossDlg/Bg/choice3/Label-001").getComponent(Label).string = `战力>${BOSS[3].dps}`
    }


    updateCostMoneyDlg(){
        for(let i=1; i<4;i++){
            let cost = COST_BIGUAN[i].cost * this._baseCost
            let btnName = `choice${i}`
            let btn = this.biguanDlg.getChildByName("Bg").getChildByName(btnName)
            btn.getChildByName("Label-001").getComponent(Label).string = `${COST_BIGUAN[i].rate}倍修炼速度`
            btn.getChildByName("Label-002").getComponent(Label).string = `${cost}灵石/道年`
        }
    }
    updateLotteryDlg(){
        let Reward = find("Canvas/AllDlg/LotteryDlg/Bg/Reward/Stage")
        for (let i = 1; i<=6; i++){
            Reward.getChildByName(`Item${i}`).getChildByName("state").active = this._treasureTb.has(i)
        }

    }

    updateGongFa(info:object){
        if(this._gongfa != 0){
            this.doAddItem(this._gongfa,1)
        }
        this._gongfa = this._chooseItemId
        this._realSpeed = info.value + this._baseSpeed
        let colorDesc = COLOR_LEVEL[info.level]
        find("Canvas/GongFa/desc").getComponent(RichText).string = `<color=${colorDesc}>[${info.name}]</color>`
        this.updateXiulianRateDlg()
    }

    updateClothe(info:object){
        if(this._armor != 0){
            this.doAddItem(this._armor,1)
        }
        this._armor = this._chooseItemId
        let colorDesc = COLOR_LEVEL[info.level]
        find("Canvas/FangJu/desc").getComponent(RichText).string = `<color=${colorDesc}>[${info.name}]</color>`
        this.updateDps()
    }
    updateWeapon(info:object){
        if(this._weapon != 0){
            this.doAddItem(this._weapon,1)
        }
        this._weapon = this._chooseItemId
        let colorDesc = COLOR_LEVEL[info.level]
        find("Canvas/FaBao/desc").getComponent(RichText).string = `<color=${colorDesc}>[${info.name}]</color>`
        this.updateDps()
    }

    updateMoney(num:number, noTips:boolean){
        if (num > 0){
            let desc = `灵石增加${num}`
            if (this._treasureTb.has(5)){
                let addNum = Math.ceil(num * 0.5)
                desc += `(额外加成${addNum})`
                num += addNum
            }
            if (!noTips){
                this.showMsg(desc) 
            }
            
        }
       
        this._money += num
        find("Canvas/Money/desc").getComponent(RichText).string = `${this._money}`
    }
    updateDps(){
        let weaponDps = 0
        let armorDps = 0
        if (this._weapon != 0 ){
            weaponDps = ITEM[this._weapon].value
        }
        if (this._armor != 0 ){
            armorDps = ITEM[this._armor].value
        }
        let lvDps = EXP[this._level].dps
        this._dps = weaponDps + armorDps + lvDps
        if(this._treasureTb.has(3)){
            this._dps = this._dps * 2
        }
        find("Canvas/Dps/desc").getComponent(RichText).string = `${this._dps}`
    }

    updateTicket(num:number){
        this._ticketNum += num
        this.lotteryDlg.getChildByName("Bg").getChildByName("ticket").getChildByName("num").getComponent(Label).string = `${this._ticketNum}`
    }
    

}


