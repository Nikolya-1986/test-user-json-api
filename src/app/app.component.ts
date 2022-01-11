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
//               "street": {
//                   "number":5498,
//                   "name":"Grove Road"
//               },
//               "city":"Laytown-Bettystown-Mornington",
//               "state":"Kilkenny",
//               "country":"Ireland",
//               "postcode":40302,
//               "coordinates": {
//                   "latitude":"17.5676",
//                   "longitude":"-12.2013"
//               },
//               "timezone": {
//                   "offset":"-12:00",
//                   "description":"Eniwetok, Kwajalein"
//               }
//           },
//           "email":"stephen.may@example.com",
//           "language": ["English", "Spanish"],
//           "available": true,
//           "login": {
//               "uuid":"e9084865-bfcf-42da-9e68-b22048cc2336",
//               "username":"happyleopard772",
//               "password":"tarpon",
//               "salt":"S7V0k1NZ",
//               "md5":"386c0e593c287095bd38a812a2d3eba7",
//               "sha1":"f91bf5bff4be6f2ce1c8dab63136537ab1f8d868",
//               "sha256":"3064a1df2c30f661af94582dbc8cb3f2fea1cb4b5322275db667a3391bd92e17"
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
//           "cell":"081-248-8151",
//           "picture": [
//               {
//                   "src": "https://randomuser.me/api/portraits/men/4.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/med/men/4.jpg"
//               },
//               {
//                   "src": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
//               }
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
//               "street":{
//                   "number":9636,
//                   "name":"Pine Rd"
//               },
//               "city":"Carleton",
//               "state":"Alberta",
//               "country":"Canada",
//               "postcode":"N1B 6J6",
//               "coordinates":{
//                   "latitude":"-49.0408",
//                   "longitude":"-22.3120"
//               },
//               "timezone":{
//                   "offset":"-10:00",
//                   "description":"Hawaii"
//               }
//           },
//           "email":"marianne.claire@example.com",
//           "language": ["English", "Italian"],
//           "available": true,
//           "login":{
//               "uuid":"ce292fb9-6b11-42fc-bd1f-b205ef7367ad",
//               "username":"sadpeacock534",
//               "password":"wolverine",
//               "salt":"49CnABO2",
//               "md5":"add8000a66cd149a95aecfff70223e06",
//               "sha1":"0d0868748f29ea3eece3ac72e3799e5ebc70142f",
//               "sha256":"063fb66daf93c1a4c091293c46ddd93d50e188d40157622a092df6c685096f30"
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
//           "cell":"118-115-3471",
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
//               "street":{
//                   "number":6990,
//                   "name":"پارک لاله"
//               },
//               "city":"مشهد",
//               "state":"مرکزی",
//               "country":"Iran",
//               "postcode":90704,
//               "coordinates":{
//                   "latitude":"85.4918",
//                   "longitude":"73.6634"
//               },
//               "timezone":{
//                   "offset":"-5:00",
//                   "description":"Eastern Time (US & Canada), Bogota, Lima"
//               }
//           },
//           "email":"arsyn.mwswy@example.com",
//           "language": ["Hebrew", "Italian"],
//           "available": false,
//           "login":{
//               "uuid":"c7befa65-2d1f-4b2c-91d2-1966b1820a5a",
//               "username":"organickoala659",
//               "password":"andre",
//               "salt":"VklbCodE",
//               "md5":"d30145f32687e42c29d87c25331e8b1f",
//               "sha1":"02ee196452d403fda01e09b8096af04008f207a8",
//               "sha256":"ebc4676d266064355ceea64475ec74a046f253eabe3acf09c0d245fb5a44eece"
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
//           "cell":"0943-534-7017",
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
//               "street":{
//                   "number":6818,
//                   "name":"Blossom Hill Rd"
//               },
//               "city":"Gladstone",
//               "state":"Australian Capital Territory",
//               "country":"Australia",
//               "postcode":7402,
//               "coordinates":{
//                   "latitude":"35.7472",
//                   "longitude":"-8.4574"
//               },
//               "timezone":{
//                   "offset":"+3:30",
//                   "description":"Tehran"
//               }
//           },
//           "email":"serenity.cole@example.com",
//           "language": ["Spanish", "French", "English"],
//           "available": true,
//           "login":{
//               "uuid":"1a4bebae-c220-4730-b197-9c96a979d727",
//               "username":"brownbutterfly168",
//               "password":"kristi",
//               "salt":"oMFJzEw1",
//               "md5":"2e07a6aa1ab64c4ab8f5ba48c5523b5e",
//               "sha1":"e9ca485d218bcbd8c38346ff3d73f953628e5cca",
//               "sha256":"43a8716e4ac9ee2bc378c47ba007b47962782c426002a595a47b79180620b2bd"
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
//           "cell":"0484-790-512",
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
//               "street":{
//                   "number":9900,
//                   "name":"Østre vei"
//               },
//               "city":"Lyngseidet",
//               "state":"Finnmark - Finnmárku",
//               "country":"Norway",
//               "postcode":"1284",
//               "coordinates":{
//                   "latitude":"7.0445",
//                   "longitude":"-20.7307"
//               },
//               "timezone":{
//                   "offset":"+9:30",
//                   "description":"Adelaide, Darwin"
//               }
//           },
//           "email":"angelina.finnoy@example.com",
//           "language": ["Spanish", "French"],
//           "available": false,
//           "login":{
//               "uuid":"65867b03-c0bd-42f9-a061-33989675d831",
//               "username":"ticklishelephant976",
//               "password":"salem",
//               "salt":"DEcDemom",
//               "md5":"5658a1f8a0140402d7c8dd8f1aaf4f2d",
//               "sha1":"39137d96664d38a6c5c48fc098df6f2d2d9d78f6",
//               "sha256":"732f16836dcf1f1853a3791d04f3dd7f914710e02b4d710115504ddb8591df93"
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
//           "cell":"94194311",
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
//               "street":{
//                   "number":1812,
//                   "name":"Snebærvej"
//               },
//               "city":"Sundby",
//               "state":"Sjælland",
//               "country":"Denmark",
//               "postcode":79369,
//               "coordinates":{
//                   "latitude":"-31.5501",
//                   "longitude":"-128.5512"
//               },
//               "timezone":{
//                   "offset":"-5:00",
//                   "description":"Eastern Time (US & Canada), Bogota, Lima"
//               }
//           },
//           "email":"valdemar.olsen@example.com",
//           "language": ["Portuguese", "Spanish", "English"],
//           "available": false,
//           "login":{
//               "uuid":"ea42cddc-c75e-480d-b83c-102261f5c7cc",
//               "username":"brownrabbit199",
//               "password":"lizard",
//               "salt":"VDv6GaY8",
//               "md5":"b090188b633dd8f840191cf05de61e67",
//               "sha1":"9d5ac235950fe5e75356eca3461d75650cc933eb",
//               "sha256":"862622d1e48dc5480676f7aabd23f4a918070f837123b89d1991219ded73f65b"
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
//           "cell":"30557031",
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
//               "street":{
//                   "number":5456,
//                   "name":"Hereford Street"
//               },
//               "city":"Whangarei",
//               "state":"Gisborne",
//               "country":"New Zealand",
//               "postcode":12135,
//               "coordinates":{
//                   "latitude":"64.5253",
//                   "longitude":"23.3834"
//               },
//               "timezone":{
//                   "offset":"-12:00",
//                   "description":"Eniwetok, Kwajalein"
//               }
//           },
//           "email":"pippa.green@example.com",
//           "language": ["English", "Italian"],
//           "available": true,
//           "login":{
//               "uuid":"c38085f3-03f9-4767-88c2-c15507cb0b37",
//               "username":"blackrabbit163",
//               "password":"sahara",
//               "salt":"n8JDyCFF",
//               "md5":"74f0227bd30f416e7461680464a01273",
//               "sha1":"0d803a09d2ec3d35d9f63037098916bb29dcb242",
//               "sha256":"90dccc3c056c7e52b9c91d3e884418154e82c67bbe546f512cb3060520bc73d8"
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
//           "cell":"(527)-340-5969",
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
//               "street":{
//                   "number":8727,
//                   "name":"Rua Bela Vista"
//               },
//               "city":"Lages",
//               "state":"Alagoas",
//               "country":"Brazil",
//               "postcode":94035,
//               "coordinates":{
//                   "latitude":"-77.7540",
//                   "longitude":"44.9635"
//               },"timezone":{
//                   "offset":"-9:00",
//                   "description":"Alaska"
//               }
//           },
//           "email":"beritiana.nogueira@example.com",
//           "language": ["English", "French"],
//           "available": false,
//           "login":{
//               "uuid":"1ac1d270-e94a-45bd-85a4-5b19ea1323c8",
//               "username":"crazyfrog729",
//               "password":"passport",
//               "salt":"JrNvS1sv",
//               "md5":"1e929928b180f8c4b458c8eedcb0ff3c",
//               "sha1":"3d83f02a33cca38c16de93115e5baceaf113bed7",
//               "sha256":"2d382c03b23260c1c4f1ffa4f822212ba73e1f82d9c0ff946e67317a3f6c9810"
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
//           "cell":"(02) 4337-6635",
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
//               "street":{
//                   "number":8984,
//                   "name":"Queen St"
//               },
//               "city":"Trout Lake",
//               "state":"Newfoundland and Labrador",
//               "country":"Canada",
//               "postcode":"O5N 1X0",
//               "coordinates":{
//                   "latitude":"-62.9076",
//                   "longitude":"116.7479"
//               },
//               "timezone":{
//                   "offset":"-10:00",
//                   "description":"Hawaii"
//               }
//           },
//           "email":"jeanne.pelletier@example.com",
//           "language": ["Hebrew", "English"],
//           "available": false,
//           "login":{
//               "uuid":"9c81ece4-a4cf-4632-b899-596c521fb6ea",
//               "username":"organicfrog651",
//               "password":"megan1",
//               "salt":"qX8znj7F",
//               "md5":"05b1dc690f6b19edf607b51ef90cf4c4",
//               "sha1":"78d8e40c0797bafa2412fd0f663b8fe72bbd6742",
//               "sha256":"ac2d8125c4e73720f80e1b05a2fe78e3267503922d21c6c3cb1cfd0c63a69b74"
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
//           "cell":"277-907-6376",
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
//               "street":{
//                   "number":9789,
//                   "name":"Burgemeester Vissersstraat"
//               },
//               "city":"Numansdorp",
//               "state":"Friesland",
//               "country":"Netherlands",
//               "postcode":69460,
//               "coordinates":{
//                   "latitude":"38.2366",
//                   "longitude":"-160.8498"
//               },
//               "timezone":{
//                   "offset":"+3:30",
//                   "description":"Tehran"
//               }
//           },
//           "email":"alain.nieuwland@example.com",
//           "language": ["Spanish", "Portuguese"],
//           "available": true,
//           "login":{
//               "uuid":"089f493a-e6de-4130-9809-8c0efde5a963",
//               "username":"beautifulmouse564",
//               "password":"kodiak",
//               "salt":"5A25emdf",
//               "md5":"63ccbeb6ea3d2076993a8ea28fbbd908",
//               "sha1":"4ad2b095741280a727d56697dac341f802883493",
//               "sha256":"9ea347a5fa74bfca63502770ab6e29234adac7aac15afda8333f56853cae017e"
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
//           "cell":"(275)-425-3458",
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
//               "street":{
//                   "number":6325,
//                   "name":"Reijolankatu"
//               },
//               "city":"Pelkosenniemi",
//               "state":"Central Ostrobothnia",
//               "country":"Finland",
//               "postcode":98995,
//               "coordinates":{
//                   "latitude":"-8.7795",
//                   "longitude":"157.7161"
//               },"timezone":{
//                   "offset":"-12:00",
//                   "description":"Eniwetok, Kwajalein"
//               }
//           },
//           "email":"emilia.ahola@example.com",
//           "language": ["Spanish", "Italian"],
//           "available": false,
//           "login":{
//               "uuid":"30a0ab91-fe2f-4625-a278-51bfe5e133f5",
//               "username":"orangefrog202",
//               "password":"jackjack",
//               "salt":"4i9Ahwij",
//               "md5":"2d3140106efaf8310039d8f280339034",
//               "sha1":"781948bbda31f06ac91000f291210afefbfe62a3",
//               "sha256":"0334f279741381c54bc9f9df32ba62812cfdab8d78e337f021616743d736c6a4"
//           },"dob":{
//               "date":"1984-06-06T06:08:51.588Z",
//               "age":37
//           },"registered":{
//               "date":"2019-09-17T14:33:05.745Z",
//               "age":2
//           },
//           "phone":"04-902-293",
//           "cell":"040-655-54-90",
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
//               "street":{
//                   "number":4696,
//                   "name":"Jan Pietersz. Coenstraat"
//               },
//               "city":"Nij Altoenae",
//               "state":"Drenthe",
//               "country":"Netherlands",
//               "postcode":33460,
//               "coordinates":{
//                   "latitude":"42.7942",
//                   "longitude":"-128.9090"
//               },
//               "timezone":{
//                   "offset":"+11:00",
//                   "description":"Magadan, Solomon Islands, New Caledonia"
//               }
//           },
//           "email":"anh.scholtz@example.com",
//           "language": ["Portuguese", "Italian", "English"],
//           "available": false,
//           "login":{
//               "uuid":"09f7d904-ef97-4dc3-91dd-4acb11e82a04",
//               "username":"ticklishsnake337",
//               "password":"aardvark",
//               "salt":"58LEYVoe",
//               "md5":"24593afb563df8b64a5efb0bb3c51ccf",
//               "sha1":"8bf6038a10b17a501ec1143b6c11cbbf7874e98e",
//               "sha256":"79e41a2c9d868cee6970c4af99f51f6942521b443c135703675f1df60abd6514"
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
//           "cell":"(734)-918-8119",
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
//               "street":{
//                   "number":5046,
//                   "name":"1e Glanshof"
//               },
//               "city":"Rhoon",
//               "state":"Friesland",
//               "country":"Netherlands",
//               "postcode":23307,
//               "coordinates":{
//                   "latitude":"42.7123",
//                   "longitude":"164.2425"
//               },
//               "timezone":{
//                   "offset":"-5:00",
//                   "description":"Eastern Time (US & Canada), Bogota, Lima"
//               }
//           },
//           "email":"samah.lommers@example.com",
//           "language": ["English", "French"],
//           "available": false,
//           "login":{
//               "uuid":"d72380b3-29f3-41ab-bbbe-0a59dec7bbfa",
//               "username":"tinybird680",
//               "password":"ramrod",
//               "salt":"J9nhQURU",
//               "md5":"05a0650ebc7476936999232f400458a9",
//               "sha1":"c53e5cdb8c6fe11c35591880a6b888a3de939096",
//               "sha256":"667a4d6fba5edd188989bacd0a9f1204e3437afb56005038ff65747832d0b267"
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
//           "cell":"(440)-080-0811",
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
//               "street":{
//                   "number":6612,
//                   "name":"Lone Wolf Trail"
//               },
//               "city":"Shepparton",
//               "state":"Queensland",
//               "country":"Australia",
//               "postcode":1440,
//               "coordinates":{
//                   "latitude":"-85.6094",
//                   "longitude":"9.9960"
//               },
//               "timezone":{
//                   "offset":"+2:00",
//                   "description":"Kaliningrad, South Africa"
//               }
//           },
//           "email":"harper.bailey@example.com",
//           "language": ["Hebrew", "French"],
//           "available": false,
//           "login":{
//               "uuid":"6038a7b7-be09-4220-834e-4d85312f349d",
//               "username":"tinyelephant879",
//               "password":"dadada",
//               "salt":"6aLjiarn",
//               "md5":"4d5942719132780bfb2b3e4683bed59a",
//               "sha1":"6fd60c49db74d219f6d4101a113e5b811e0e36b5",
//               "sha256":"19fe542bc0035f7b69cd510fe4b6baef670ad3833325ca2107d7a568b67454ae"
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
//           "cell":"0441-150-761",
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
//               "street":{
//                   "number":1794,
//                   "name":"Place Paul-Duquaire"
//               },
//               "city":"Ursy",
//               "state":"Appenzell Ausserrhoden",
//               "country":"Switzerland",
//               "postcode":6596,
//               "coordinates":{
//                   "latitude":"-51.9895",
//                   "longitude":"-81.6855"
//               },
//               "timezone":{
//                   "offset":"+11:00",
//                   "description":"Magadan, Solomon Islands, New Caledonia"
//               }
//           },
//           "email":"kay.masson@example.com",
//           "language": ["Spanish", "French"],
//           "available": false,
//           "login":{
//               "uuid":"8af24e0b-2afb-4801-9551-375694875725",
//               "username":"greencat290",
//               "password":"freedom1",
//               "salt":"iP0SIagf",
//               "md5":"82b8e2903e2190b79f50bbaf9eb1a41f",
//               "sha1":"45251681cf32d3c6810cf69f64c7d04b01257c5e",
//               "sha256":"2b06461cbd1d0aedc326174c4615033ad45f40b0946b3167d39c9b01b283bb83"
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
//           "cell":"075 667 75 73",
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
//               "street":{
//                   "number":7526,
//                   "name":"W Sherman Dr"
//               },
//               "city":"Adelaide",
//               "state":"South Australia",
//               "country":"Australia",
//               "postcode":5239,
//               "coordinates":{
//                   "latitude":"-86.8900",
//                   "longitude":"55.0804"
//               },
//               "timezone":{
//                   "offset":"-5:00",
//                   "description":"Eastern Time (US & Canada), Bogota, Lima"
//               }
//           },
//           "email":"margie.bates@example.com",
//           "language": ["English", "Portuguese"],
//           "available": true,
//           "login":{
//               "uuid":"a054ce09-d2dd-442c-8133-955fec230ef8",
//               "username":"bluelion424",
//               "password":"celtics",
//               "salt":"k22slXre",
//               "md5":"5c6a317161ef3d9801f00fcbce648cba",
//               "sha1":"6fd985bae03eaf3e47b60e486e519d7523e968f0",
//               "sha256":"7c2c78cd9dc50083285983418cb4f2a6f31af1e79d857b57a58fa68cba7185e7"
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
//           "cell":"0472-569-268",
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
