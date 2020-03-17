<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        <label>Item Category</label>
          <select v-model.lazy="item.category"> 
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Snacks">Snacks</option>
            <option value="Toiletries">Toiletries</option>
            <option value = "Dairy Products">Dairy Products</option>
            <option value = "Poultry">Poultry</option>
          </select>
        <label> Admin Name </label>
        <input type="text" v-model.lazy="item.admin"/>
        <!--<input type="text" v-model.lazy="item.category"/>-->
        <label> Date (ddmmyyyy) </label>
        <input type="text" v-model.lazy="item.date"/>
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
          category:'',
          admin:'',
          date:''
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
input[type="text"],select{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>