<!--
<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        <label>Item Category</label>
        <input type="text" v-model.lazy="item.category"/>
        <button v-on:click.prevent="addItem">Add Item</button>
        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category:'',
          addedBy:'Thangamani'
        },
        
        
        }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category="";
          alert("I am in the DB .... :-) Item saved successfully")
          
        }
  }
}
</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>-->

<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        <label>Item Category: </label><br>
          <input type="checkbox" v-model.lazy="item.category" id="fruits" name="fruits" value="Fruits"><label for="fruits">Fruits</label><br>
          <input type="checkbox" v-model.lazy="item.category" id="vege" name="vege" value="Vegetables"><label for="vege">Vegetables</label><br>
          <input type="checkbox" v-model.lazy="item.category" id="snacks" name="snacks" value="Snacks"><label for="snacks">Snacks</label><br>
          <input type="checkbox" v-model.lazy="item.category" id="toiletries" name="toiletries" value="Toiletries"><label for="toiletries">Toiletries</label><br>
          <input type="checkbox" v-model.lazy="item.category" id="dairy" name="dairy" value="Dairy Products"><label for="dairy">Dairy Products</label><br>
          <input type="checkbox" v-model.lazy="item.category" id="poultry" name="poultry" value="Poultry"><label for="poultry">Poultry</label><br>
          <input type="checkbox" v-model.lazy="item.category" id="drinks" name="drinks" value="Drinks"><label for="drinks">Drinks</label>

        <label>Date and Time </label> 
        <input type="datetime-local" v-model.lazy="item.date" name="datetime" step="1">
        
        <label> Admin Name </label>
        <select v-model.lazy="item.admin">
          <option value = "Alexandra"> Alexandra </option>
          <option value = "Lily"> Lily </option>
          <option value = "Sean"> Sean </option>
        </select>

        <label> Storage: </label><br>
        <input type="radio" v-model.lazy="item.storage" id="chilled" name="storage" value = "Chilled">
        <label for="chilled">Chilled</label><br>
        <input type="radio" v-model.lazy="item.storage" id="room" name="storage" value="Room Temperature">
        <label for="room">Room Temperature</label><br>
        <input type="radio" v-model.lazy="item.storage" id="frozen" name="storage" value="Frozen">
        <label for="frozen">Frozen</label><br>

        <!--input type="text" v-model.lazy="item.admin"/-->
        <!--<input type="text" v-model.lazy="item.category"/>-->
        
        <p> <button v-on:click.prevent="addItem">Add Item</button> </p>
        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category:[],
          admin:'',
          date:'',
          storage:''
        },
        
        
        }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category="";
          alert("I am in the DB .... :-) Item saved successfully")
          
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"],select,input[type="datetime-local"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
input[type = "checkbox"] {
  width:5%;
}

</style>