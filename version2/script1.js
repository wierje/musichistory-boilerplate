var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var insert = function (songs) {
  songs.push ("Desire Wire by Cindy Bullens on the album Desire Wire");
}
var removeChar = [];

for (i = 0; i < songs.length; i++);

removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, "-"))
  console.log(i);

var finalArray = [];
finalArray.push(removeChar[i])
for (i = 0; i < songs.length; i++)
  querySelector('songBox').innerHTML=i;



// songs[songs.length] = "Desire Wire by Cindy Bullens on the album Desire Wire";