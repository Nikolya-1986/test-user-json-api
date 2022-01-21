import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-user-json-api';
}

// {
//   "results":[
//       {
//           "id": 1,
//           "gender":"male",
//           "status": "married",
//           "name": {
//               "title":"Mr",
//               "first":"Stephen",
//               "last":"May"
//           },
//           "location": { 
//               "city":"Laytown-Bettystown-Mornington",
//               "country":"Ireland",
//               "postcode":40302,
//               "coordinates": {
//                   "latitude":"17.5676",
//                   "longitude":"-12.2013"
//               }
//           },
//           "email":"stephen.may@example.com",
//           "language": ["English", "Spanish"],
//           "available": true,
//           "website": "http://ertfdsve.com",
//           "login": {
//               "uuid":"e9084865-bfcf-42da-9e68-b22048cc2336",
//               "username":"happyleopard772",
//               "password":"tarpon"
//           },
//           "dob": {
//               "date":"1997-05-06T22:14:49.869Z",
//               "age":24
//           },
//           "registered": {
//               "date":"2004-08-31T23:25:00.959Z",
//               "age":17
//           }, 
//           "phone":"021-577-1124",
//           "picture": [
//                   {
//                       "src": "https://randomuser.me/api/portraits/men/4.jpg"
//                   },
//                   {
//                       "src": "https://randomuser.me/api/portraits/med/men/4.jpg"
//                   },
//                   {
//                       "src": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
//                   }
//           ],
//           "nat":"IE"
//       },
      
//       {
//           "id": 2,
//           "gender":"female",
//           "status": "divorced",
//           "name": {
//               "title":"Ms",
//               "first":"Marianne",
//               "last":"Claire"
//           },
//           "location":{
//               "city":"Carleton",
//               "country":"Canada",
//               "postcode":45646,
//               "coordinates":{
//                   "latitude":"-49.0408",
//                   "longitude":"-22.3120"
//               }
//           },
//           "email":"marianne.claire@example.com",
//           "language": ["English", "Italian"],
//           "available": true,
//           "website": "http://ertfdsve.com",
//           "login":{
//               "uuid":"ce292fb9-6b11-42fc-bd1f-b205ef7367ad",
//               "username":"sadpeacock534",
//               "password":"wolverine"
//           },
//           "dob":{
//               "date":"1998-06-17T16:33:36.322Z",
//               "age":23
//           },
//           "registered":{
//               "date":"2017-07-27T00:25:58.185Z",
//               "age":4
//           },
//           "phone":"643-180-9717",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/95.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/95.jpg"                },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/95.jpg"
//               }
//           ],
//           "nat":"CA"
//       },
      
//       {
//           "id": 3,
//           "gender":"male",
//           "status": "single",
//           "name":{
//               "title":"Mr",
//               "first":"آرسین",
//               "last":"موسوی"
//           },
//           "location":{
//               "city":"مشهد",
//               "country":"Iran",
//               "postcode":90704,
//               "coordinates":{
//                   "latitude":"85.4918",
//                   "longitude":"73.6634"
//               }
//           },
//           "email":"arsyn.mwswy@example.com",
//           "language": ["Hebrew", "Italian"],
//           "available": false,
//           "website": "http://ertfdsve.com",
//           "login":{
//               "uuid":"c7befa65-2d1f-4b2c-91d2-1966b1820a5a",
//               "username":"organickoala659",
//               "password":"andre"
//           },
//           "dob":{
//               "date":"2003-06-12T13:35:31.130Z",
//               "age":18
//           },
//           "registered":{
//               "date":"2012-11-20T01:55:43.489Z",
//               "age":9
//           },
//           "phone":"066-45841454",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/men/42.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/men/42.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
//               }
//           ],
//           "nat":"IR"
//       },
      
//       {
//           "id": 4,
//           "gender":"female",
//           "status": "married",
//           "name":{
//               "title":"Ms",
//               "first":"Serenity",
//               "last":"Cole"
//           },
//           "location":{
//               "city":"Gladstone",
//               "country":"Australia",
//               "postcode":7402,
//               "coordinates":{
//                   "latitude":"35.7472",
//                   "longitude":"-8.4574"
//               }
//           },
//           "email":"serenity.cole@example.com",
//           "language": ["Spanish", "French", "English"],
//           "available": true,
//           "website": "http://sdfsdfre.com",
//           "login":{
//               "uuid":"1a4bebae-c220-4730-b197-9c96a979d727",
//               "username":"brownbutterfly168",
//               "password":"kristi"
//           },
//           "dob":{
//               "date":"1993-03-16T01:09:46.708Z",
//               "age":28
//           },
//           "registered":{
//               "date":"2007-09-28T19:45:22.153Z",
//               "age":14
//           },
//           "phone":"07-7164-7941",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/59.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/59.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
//               }
//           ],
//           "nat":"AU"
//       },
      
//       {
//           "id": 5,
//           "gender":"female",
//           "status": "divorced",
//           "name":{
//               "title":"Ms",
//               "first":"Angelina",
//               "last":"Finnøy"
//           },
//           "location":{
//               "city":"Lyngseidet",
//               "country":"Norway",
//               "postcode":"1284",
//               "coordinates":{
//                   "latitude":"7.0445",
//                   "longitude":"-20.7307"
//               }
//           },
//           "email":"angelina.finnoy@example.com",
//           "language": ["Spanish", "French"],
//           "available": false,
//           "website": "http://ertbcxvfdsve.com",
//           "login":{
//               "uuid":"65867b03-c0bd-42f9-a061-33989675d831",
//               "username":"ticklishelephant976",
//               "password":"salem"
//           },
//           "dob":{
//               "date":"1986-09-07T08:35:39.070Z",
//               "age":35
//           },
//           "registered":{
//               "date":"2002-12-16T15:11:37.407Z",
//               "age":19
//           },
//           "phone":"31456026",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/14.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/14.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
//               }
//           ],
//           "nat":"NO"
//       },

//       {
//           "id": 6,
//           "gender":"male",
//           "status": "married",
//           "name":{
//               "title":"Mr",
//               "first":"Valdemar",
//               "last":"Olsen"
//           },
//           "location":{
//               "city":"Sundby",
//               "country":"Denmark",
//               "postcode":79369,
//               "coordinates":{
//                   "latitude":"-31.5501",
//                   "longitude":"-128.5512"
//               }
//           },
//           "email":"valdemar.olsen@example.com",
//           "language": ["Portuguese", "Spanish", "English"],
//           "available": false,
//           "website": "http://ghjfh.com",
//           "login":{
//               "uuid":"ea42cddc-c75e-480d-b83c-102261f5c7cc",
//               "username":"brownrabbit199",
//               "password":"lizard"
//           },
//           "dob":{
//               "date":"1995-09-11T17:21:16.817Z",
//               "age":26
//           },
//           "registered":{
//               "date":"2004-08-02T18:07:52.236Z",
//               "age":17
//           },
//           "phone":"41938477",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/men/14.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/men/14.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
//               }
//           ],
//           "nat":"DK"
//       },

//       {
//           "id": 7,
//           "gender":"female",
//           "status": "single",
//           "name":{
//               "title":"Mrs",
//               "first":"Pippa",
//               "last":"Green"
//           },
//           "location":{
//               "city":"Whangarei",
//               "country":"New Zealand",
//               "postcode":12135,
//               "coordinates":{
//                   "latitude":"64.5253",
//                   "longitude":"23.3834"
//               }
//           },
//           "email":"pippa.green@example.com",
//           "language": ["English", "Italian"],
//           "available": true,
//           "website": "http://sdfgsdfg.com",
//           "login":{
//               "uuid":"c38085f3-03f9-4767-88c2-c15507cb0b37",
//               "username":"blackrabbit163",
//               "password":"sahara"
//           },
//           "dob":{
//               "date":"1981-10-03T21:32:04.725Z",
//               "age":40
//           },
//           "registered":{
//               "date":"2008-03-26T18:35:13.741Z",
//               "age":13
//           },
//           "phone":"(477)-072-4725",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/0.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/0.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
//               }
//           ],
//           "nat":"NZ"
//       },

//       {
//           "id": 8,
//           "gender":"female",
//           "status": "married",
//           "name":{
//               "title":"Ms",
//               "first":"Beritiana",
//               "last":"Nogueira"
//           },
//           "location":{
//               "city":"Lages",
//               "country":"Brazil",
//               "postcode":94035,
//               "coordinates":{
//                   "latitude":"-77.7540",
//                   "longitude":"44.9635"
//               }
//           },
//           "email":"beritiana.nogueira@example.com",
//           "language": ["English", "French"],
//           "available": false,
//           "website": "http://pokjlkjlkj.com",
//           "login":{
//               "uuid":"1ac1d270-e94a-45bd-85a4-5b19ea1323c8",
//               "username":"crazyfrog729",
//               "password":"passport"
//           },
//           "dob":{
//               "date":"2000-04-18T17:52:07.406Z",
//               "age":21
//           },
//           "registered":{
//               "date":"2002-06-23T14:48:14.285Z",
//               "age":9
//           },
//           "phone":"(60) 2127-5232",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/84.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/84.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
//               }
//           ],
//           "nat":"BR"
//       },

//       {
//           "id": 9,
//           "gender":"female",
//           "status": "divorced",
//           "name":{
//               "title":"Mrs",
//               "first":"Jeanne",
//               "last":"Pelletier"
//           },
//           "location":{
//               "city":"Trout Lake",
//               "country":"Canada",
//               "postcode":"O5N 1X0",
//               "coordinates":{
//                   "latitude":"-62.9076",
//                   "longitude":"116.7479"
//               }
//           },
//           "email":"jeanne.pelletier@example.com",
//           "language": ["Hebrew", "English"],
//           "available": false,
//           "website": "http://qweqeq.com",
//           "login":{
//               "uuid":"9c81ece4-a4cf-4632-b899-596c521fb6ea",
//               "username":"organicfrog651",
//               "password":"megan1"
//           },
//           "dob":{
//               "date":"2000-08-06T01:48:18.006Z",
//               "age":21
//           },
//           "registered":{
//               "date":"2015-11-21T08:52:58.302Z",
//               "age":6
//           },
//           "phone":"109-748-6332",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/34.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/34.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
//               }
//           ],
//       "nat":"CA"
//       },

//       {
//           "id": 10,
//           "gender":"male",
//           "status": "married",
//           "name":{
//               "title":"Mr",
//               "first":"Alain",
//               "last":"Nieuwland"
//           },
//           "location":{
//               "city":"Numansdorp",
//               "country":"Netherlands",
//               "postcode":69460,
//               "coordinates":{
//                   "latitude":"38.2366",
//                   "longitude":"-160.8498"
//               }
//           },
//           "email":"alain.nieuwland@example.com",
//           "language": ["Spanish", "Portuguese"],
//           "available": true,
//           "website": "http://vcbxvbcb.com",
//           "login":{
//               "uuid":"089f493a-e6de-4130-9809-8c0efde5a963",
//               "username":"beautifulmouse564",
//               "password":"kodiak"
//           },
//           "dob":{
//               "date":"1986-07-25T20:50:52.882Z",
//               "age":35
//           },
//           "registered":{
//               "date":"2003-03-12T21:40:20.015Z",
//               "age":18
//           },
//           "phone":"(989)-365-4108",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/men/90.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/men/90.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
//               }
//           ],
//           "nat":"NL"
//       },

//       {
//           "id": 11,
//           "gender":"female",
//           "status": "single",
//           "name":{
//               "title":"Ms",
//               "first":"Emilia",
//               "last":"Ahola"
//           },
//           "location":{
//               "city":"Pelkosenniemi",
//               "country":"Finland",
//               "postcode":98995,
//               "coordinates":{
//                   "latitude":"-8.7795",
//                   "longitude":"157.7161"
//               }
//           },
//           "email":"emilia.ahola@example.com",
//           "language": ["Spanish", "Italian"],
//           "available": false,
//           "website": "http://ertfdsve.com",
//           "login":{
//               "uuid":"30a0ab91-fe2f-4625-a278-51bfe5e133f5",
//               "username":"orangefrog202",
//               "password":"jackjack"
//           },"dob":{
//               "date":"1984-06-06T06:08:51.588Z",
//               "age":37
//           },"registered":{
//               "date":"2019-09-17T14:33:05.745Z",
//               "age":2
//           },
//           "phone":"04-902-293",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/88.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/88.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
//               }
//           ],
//           "nat":"FI"
//       },

//       {
//           "id": 12,
//           "gender":"male",
//           "status": "married",
//           "name":{
//               "title":"Mr",
//               "first":"Anh",
//               "last":"Scholtz"
//           },
//           "location":{
//               "city":"Nij Altoenae",
//               "country":"Netherlands",
//               "postcode":33460,
//               "coordinates":{
//                   "latitude":"42.7942",
//                   "longitude":"-128.9090"
//               }
//           },
//           "email":"anh.scholtz@example.com",
//           "language": ["Portuguese", "Italian", "English"],
//           "available": false,
//           "website": "http://ertfdsve.com",
//           "login":{
//               "uuid":"09f7d904-ef97-4dc3-91dd-4acb11e82a04",
//               "username":"ticklishsnake337",
//               "password":"aardvark"
//           },
//           "dob":{
//               "date":"1979-08-28T20:22:24.675Z",
//               "age":42
//           },
//           "registered":{
//               "date":"2015-11-18T04:41:25.142Z",
//               "age":6
//           },
//           "phone":"(008)-516-0314",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/men/73.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/men/73.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
//               }
//           ],
//           "nat":"NL"
//       },

//       {
//           "id": 13,
//           "gender":"female",
//           "status": "single",
//           "name":{
//               "title":"Miss",
//               "first":"Samah",
//               "last":"Lommers"
//           },
//           "location":{
//               "city":"Rhoon",
//               "country":"Netherlands",
//               "postcode":23307,
//               "coordinates":{
//                   "latitude":"42.7123",
//                   "longitude":"164.2425"
//               }
//           },
//           "email":"samah.lommers@example.com",
//           "language": ["English", "French"],
//           "available": false,
//           "website": "http://ertrgfbnb.com",
//           "login":{
//               "uuid":"d72380b3-29f3-41ab-bbbe-0a59dec7bbfa",
//               "username":"tinybird680",
//               "password":"ramrod"
//           },
//           "dob":{
//               "date":"1987-10-30T01:13:32.595Z",
//               "age":34
//           },
//           "registered":{
//               "date":"2012-05-14T18:19:09.854Z",
//               "age":9
//           },
//           "phone":"(974)-779-6105",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/24.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/24.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
//               }
//           ],
//           "nat":"NL"
//       },

//       {
//           "id": 14,
//           "gender":"female",
//           "status": "divorced",
//           "name":{
//               "title":"Miss",
//               "first":"Harper",
//               "last":"Bailey"
//           },
//           "location":{
//               "city":"Shepparton",
//               "country":"Australia",
//               "postcode":1440,
//               "coordinates":{
//                   "latitude":"-85.6094",
//                   "longitude":"9.9960"
//               }
//           },
//           "email":"harper.bailey@example.com",
//           "language": ["Hebrew", "French"],
//           "available": false,
//           "website": "http://ewrewrwrw.com",
//           "login":{
//               "uuid":"6038a7b7-be09-4220-834e-4d85312f349d",
//               "username":"tinyelephant879",
//               "password":"dadada"
//           },
//           "dob":{
//               "date":"1985-03-05T18:45:26.225Z",
//               "age":36
//           },
//           "registered":{
//               "date":"2008-07-03T22:38:30.345Z",
//               "age":1
//           },
//           "phone":"00-1922-5841",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/20.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/20.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
//               }
//           ],
//           "nat":"AU"
//       },

//       {
//           "id": 15,
//           "gender":"male",
//           "name":{
//               "title":"Monsieur",
//               "first":"Kay",
//               "last":"Masson"
//           },
//           "location":{
//               "city":"Ursy",
//               "country":"Switzerland",
//               "postcode":6596,
//               "coordinates":{
//                   "latitude":"-51.9895",
//                   "longitude":"-81.6855"
//               }
//           },
//           "email":"kay.masson@example.com",
//           "language": ["Spanish", "French"],
//           "available": false,
//           "website": "http://ertfdsve.com",
//           "login":{
//               "uuid":"8af24e0b-2afb-4801-9551-375694875725",
//               "username":"greencat290",
//               "password":"freedom1"
//           },
//           "dob":{
//               "date":"1983-04-12T10:54:33.720Z",
//               "age":38
//           },
//           "registered":{
//               "date":"2007-11-30T13:50:07.306Z",
//               "age":14
//           },
//           "phone":"076 543 41 31",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/men/39.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/men/39.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
//               }
//           ],
//           "nat":"CH"
//       },

//       {
//           "id": 16,
//           "gender":"female",
//           "status": "single",
//           "name":{
//               "title":"Miss",
//               "first":"Margie",
//               "last":"Bates"
//           },
//           "location":{
//               "city":"Adelaide",
//               "country":"Australia",
//               "postcode":5239,
//               "coordinates":{
//                   "latitude":"-86.8900",
//                   "longitude":"55.0804"
//               }
//           },
//           "email":"margie.bates@example.com",
//           "language": ["English", "Portuguese"],
//           "available": true,
//           "website": "http://dfer.com",
//           "login":{
//               "uuid":"a054ce09-d2dd-442c-8133-955fec230ef8",
//               "username":"bluelion424",
//               "password":"celtics"
//           },
//           "dob":{
//               "date":"1992-09-01T03:00:45.915Z",
//               "age":29
//           },
//           "registered":{
//               "date":"2019-01-21T03:54:15.420Z",
//               "age":2
//           },
//           "phone":"08-1209-9512",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/women/54.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/women/54.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/women/54.jpg"
//               }
//           ],
//           "nat":"AU"
//       }
//   ]
// }