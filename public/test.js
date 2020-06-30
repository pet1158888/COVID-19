var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

///////////////// ยอดรวม
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://covid19.th-stat.com/api/open/today", false ); // false for synchronous request
xmlHttp.send( null );

var test = xmlHttp['responseText'];
var Confirmed = JSON.parse(test);
var Confirmed = Confirmed['Confirmed'];
// console.log(Confirmed);

var NewConfirmed = JSON.parse(test);
var NewConfirmed = NewConfirmed['NewConfirmed'];
var Recovered = JSON.parse(test);
var Recovered = Recovered['Recovered'];
var NewRecovered = JSON.parse(test);
var NewRecovered = NewRecovered['NewRecovered'];
var Hospitalized = JSON.parse(test);
var Hospitalized = Hospitalized['Hospitalized'];
var NewHospitalized = JSON.parse(test);
var NewHospitalized = NewHospitalized['NewHospitalized'];
var Deaths = JSON.parse(test);
var Deaths = Deaths['Deaths'];
var NewDeaths = JSON.parse(test);
var NewDeaths = NewDeaths['NewDeaths'];
var UpdateDate = JSON.parse(test);
var UpdateDate = UpdateDate['UpdateDate'];


///////////////// รายวัน 
var timeline = new XMLHttpRequest();
timeline.open( "GET", "https://covid19.th-stat.com/api/open/timeline", false ); // false for synchronous request
timeline.send( null );

//console.log(timeline);
var timeline_pare = timeline['responseText'];
console.log(timeline_pare);

var data_covid_timeline = JSON.parse(timeline_pare);
// var data_covid_timeline = data_covid_timeline['data'];
// console.log(data_covid_timeline);
var data = data_covid_timeline['Data'];
var update_data_timeline = data_covid_timeline['UpdateDate'];
// console.log(update_data_timeline);

var total_date = [];
var total_confirmed = [];
var total_recovered = [];
var total_hospitalized = [];
var total_deaths = [];
var total_newconfirmed = [];
var total_NewRecovered = [];

for (x in data) {
    //console.log(data[x]);
    total_date.push(data[x]['Date']); 
    total_confirmed.push(data[x]['Confirmed']); 
    total_recovered.push(data[x]['Recovered']); 
    total_hospitalized.push(data[x]['Hospitalized']); 
    total_deaths.push(data[x]['Deaths']); 
    total_newconfirmed.push(data[x]['NewConfirmed']); 
    total_NewRecovered.push(data[x]['NewRecovered']); 
  }
// console.log(total_date);
//console.log(total_date.length)

//////////////////// จังหวัด 
var province = new XMLHttpRequest();
province.open( "GET", "https://covid19.th-stat.com/api/open/cases/sum", false ); // false for synchronous request
province.send( null );
// console.log(province);
var province_pare = province['responseText'];
var data_province = JSON.parse(province_pare);
var province_text = data_province['Province'];
//console.log(province_text);
var name_key = Object.keys(province_text)
var name_value  =Object.values(province_text)

var province_arr = [];
var human_val = [];
var human = [[]];
var province_x =[];
for (i = 0; i < name_key.length; i=i+10)
{
    for (y=0;y<10;y++)
    {
        province_arr.push(name_key[y]);
        human_val.push(name_value[y]); 
    }
    break
}
/////////////////// ประเทศ
var nation_text = data_province['Nation'];
var nation_key = Object.keys(nation_text)
var nation_value = Object.values(nation_text)

var nation_arr = [];
var nation_val = [];
for (a = 0; a < nation_key.length; a=a+10)
{
    for (b=0;b<10;b++)
    {
        nation_arr.push(nation_key[b]);
        nation_val.push(nation_value[b]); 
    }
    break
}


//////////////////////// เพศ

var Gender = data_province['Gender'];
var Gender_key = Object.keys(Gender);
var Gender_val = Object.values(Gender);

var gender_sum = Gender_val[0]+Gender_val[1]+Gender_val[2];
// console.log(gender_p);


// console.log(province_arr);
// console.log(human_val);
// console.log(province_x[0]);
// console.log(human[0])

