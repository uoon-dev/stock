<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav nav">
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        <ul class="nav navber-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown" 
              :class="{open: isDropdownOpen}"
              @click="isDropdownOpen = !isDropdownOpen">
            <a 
                class="dropdown-toggle" 
                href="#" 
                data-toggle="dropdown" 
                role="button"
                aria-haspopup="true" 
                aria-expanded="false">
              Save & Load <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="saveData">Save Data</a></li>
              <li><a class="dropdown-item" href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        console.log(data);
        
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>