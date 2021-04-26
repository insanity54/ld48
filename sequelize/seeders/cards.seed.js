
const cards = [
    {
      number: '01-112',
      rarity: 'R',
      name: '',
      type: 'event',
      cost: '0',
      source: '1',
      color: 'green',
      characteristic: null,
      ap: null,
      dp: null,
      parallel: false,
      text: '[メイン/自分]:自分のキャラ1枚は、ターン終了時に活動状態になる。ターン終了時に自分のポイント置き場にある裏向きのカード1枚を表向きにすることができる。',
      flavor: null,
      image: 'http://p-memories.com/images/product/PM_BKM/PM_BKM_01-112.jpg',
      url: 'http://p-memories.com/node/12409',
      release: '01',
      num: '112',
      fullId: 'BKM 01-112',
      createdAt: 'Sun 25 Apr 2021 06:11:41 PM PDT',
      updatedAt: 'Sun 25 Apr 2021 06:11:41 PM PDT',
    }, {
      number:"01-024",
      rarity:"U",
      name:"リク",
      type:"character",
      cost:"3",
      source:"2",
      color:"blue",
      characteristic:"人類種",
      ap:"40",
      dp:"50",
      parallel:false,
      text:"このカードは、APの値が60以上の相手のキャラに妨害されている場合、退場しない。",
      flavor:"",
      image:"http://p-memories.com/images/product/NGNL/NGNL_01-024.jpg",
      url:"http://p-memories.com/node/900433",
      release: '01',
      fullId: 'NGNL 01-024',
      createdAt: 'Sun 25 Apr 2021 06:11:41 PM PDT',
      updatedAt: 'Sun 25 Apr 2021 06:11:41 PM PDT',
    }
 ]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', cards);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cards', null, {});
  }
};