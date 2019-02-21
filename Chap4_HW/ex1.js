function deepEqual(o1, o2){
	if(typeof o1 == "object" && o1 != null &&
       typeof o2 == "object" && o2 != null){
      let keys_o1 = Object.keys(o1);
      let keys_o2 = Object.keys(o2);
      if(keys_o1.length != keys_o2.length){
        return false;
      } else{
        for(let i = 0; i < keys_o1.length; i++){
          if(keys_o1[i] != keys_o2[i]){
            return false;
          }
          if(o1[keys_o1[i]] != o2[keys_o2[i]]){
            if(deepEqual(o1[keys_o1[i]], o2[keys_o2[i]]) == false){
              return false;
            }
          }
        }
      }
      return true;
    } else{
      return (o1 === o2);
    }
}
