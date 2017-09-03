function music(artist){
  var playlist = [
    ["Bazooka","Losh ili dobyr","Horata govorqt","Ideal petroff"],
    ["Cqla nosht","Gaz do dupka","Za kef","Well paid"],
    ["Cherno","Chalga","Shlager","Random song"]
  ];
  var result = [],index,row;
  if(artist == "Krisko"){
    row = 0;
  }
  if(artist == "100kila"){
    row = 1;
  }
  if(artist == "random"){
    row = 2;
  }
  for(let index = 0; index < playlist[row].length; index++){
    result[index] = function(){
      console.log("Now playing: " + playlist[row][index] + " by " + artist);
    }
  }
  return result;
}
var dj = music("Krisko");
dj[2]();
dj[0]();
dj[1]();
var secDj = music("100kila");
secDj[0]();
