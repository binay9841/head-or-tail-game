const username_submit = (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;

  if(username.length < 5){
    alert("Username must be at least 5 character long")
    return;
  }

  //Success
  // alert("You are ready!")

  document.getElementById("user").innerHTML = username;

  //hide username div
  document.getElementById("username_div").style.display = "none";
  //show game div
  document.getElementById("game_div").style.display = "block";
};

const start_game = (side)=> {
  
  document.getElementById("result").style.display = "none";
  //shoowing flipping div

  document.getElementById("flipping").style.display =  "block";


  setTimeout(()=>{
    get_result(side);
    document.getElementById("flipping").style.display =  "none";
    document.getElementById("result").style.display = "block";
  },2000)


}

const get_result = (side) => {
  const coin_side = Math.floor(Math.random() * (2 - 1 +1) + 1);

  let flipped_side= "";

  if(coin_side === 1) {
    flipped_side = "Head";
  } else {
    flipped_side = "Tail";
  }

  document.getElementById("result").innerHTML ="Coin was flipped and result was: <h1>"+ flipped_side + "</h1>";
  
  if(coin_side === 1) {
    //head

    if(side === "head"){
      won();
    }else{
      lost();
    }

  }else{
    //tail
    if(side === "tail"){
      won();
    }else{
      lost();
    }
  }
};

const won = ()=> {
  setTimeout(()=>{
    alert("You won!")
  },1000)
}

const lost = ()=> {
  setTimeout(()=>{
    alert("You lost!")
  },1000)
}