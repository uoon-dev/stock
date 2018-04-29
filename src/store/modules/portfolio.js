const state = {
  funds: 10000,
  stocks: [],
  test: 'test'
};

const mutations = {
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    console.log(state.stocks);
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record));
    }
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio (state, getters) {
    /* 두번째 인자인 getters는 전체 store에서 가져온 getters이다.
       여기선 기존 stock 데이터와 portfolio에 저장된 데이터의 id를 비교하기 위해 쓰였다. */
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds (state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};