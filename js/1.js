 function geolocate(_data)
  {
var _a,_ab=0;
_a=" IP: "+_data.ip+"<br>";
_a+=" Ip version :  "+_data.type+"<br>";
_a+=" Continent :  "+_data.continent_name+"<br>";
_a+=" Continent Code :  "+_data.continent_code+"<br>";
_a+=" Country :  "+_data.country_name+"<br>";
_a+=" Country code :  "+_data.country_code+"<br>";
_a+=" Region :  "+_data.region_name+"<br>";
_a+=" Region Code :  "+_data.region_code+"<br>";
_a+=" City :  "+_data.city+"<br>";
_a+=" Zip Code / Pin Code :  "+_data.zip+"<br>";
_a+=" Latitude :  "+_data.latitude+"<br>";
_a+=" Longitude :  "+_data.longitude+"<br>";
_a+=" Geo ID :  "+_data.location.geoname_id+"<br>";
_a+=" Capital :  "+_data.location.capital+"<br>";
for (_ab=0;_ab<_data.location.languages.length;_ab++)
{

_a+=" Language :  "+_data.location.languages[_ab].name+"<br>";
_a+=" Language Code :  "+_data.location.languages[_ab].code+"<br>";
_a+=" Language native :  "+_data.location.languages[_ab].native+"<br>";
}
_a+=" Country flag :  "+_data.location.country_flag+"<br>";
_a+=" Country Code :  "+_data.location.country_flag_emoji+"<br>";
_a+=" Country emoji : "+_data.location.country_flag_emoji_unicode+"<br>";
_a+=" Calling code :  "+_data.location.calling_code+"<br>";
_a+=" EU country :  "+_data.location.is_eu+"<br>";

document.write(_a);

b(_data);
c(_a);   

}
