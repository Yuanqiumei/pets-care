const state = {
  name: ''
};

const getters = {
  getName: (state) => state.name,
  count: state => {
      return state.count;
    }
};

const mutations = {
  SET_NAME (state, platform) {
      state.name = platform;
      console.log('打印mutations里拿到的值');
      console.log(state.name);
  }
};

const actions = {
  setName ({commit}, platform) {
    localStorage.setItem("name", platform);
      console.log(platform)
      console.log('打印缓存中的名字');
      commit('SET_NAME', platform)
  }
};

export default {
state,
getters,
mutations,
actions
};

