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
        <ul class="nav navber-nav navbar-right">
          <li><a href="#">End Day</a></li>
          <li class="dropdown">
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
              <li><a class="dropdown-item" href="#">Save Data</a></li>
              <li><a class="dropdown-item" href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
