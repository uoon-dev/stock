<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-panel-heading2">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model="quantity"
                  :class="{danger: insufficientQuantity}">
        </div>
        <div class="pull-right">
          <button
                  class="btn btn-success"
                  @click="sellStock"
                  :disabled="insufficientQuantity || (quantity <= 0)"
          >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        // mapActions에서 가져온 sellStock 함수 호출
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    }
  }  
</script>

<style>
  a {
    color: black;
  }
  .panel-panel-heading2 {
    background: rgba(50,105,150);
    padding: 10px 0 10px 10px;
  }
  .danger {
    border-color: initial !important;
    border: 1px solid red !important;
    box-shadow: initial !important;
  }
</style>

