<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-panel-heading">
        <h3 class="panel-title">
          NAME
          <small>(Price: PRICE)</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  >
        </div>
        <div class="pull-right">
          <button
                  class="btn btn-success"
                  >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  a {
    color: black;
  }
  .panel-panel-heading {
    background: rgba(150,255,150);
    padding: 10px 0 10px 10px;
  }
</style>

