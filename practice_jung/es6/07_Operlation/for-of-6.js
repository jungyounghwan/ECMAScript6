let sports = {
    soccer: '축구',
    baseball: '야구'
};
 let keyList = Object.keys(sports);
 for (var key of keyList){
     console.log(key, sports[key]);
     console.log(keyList);
 }