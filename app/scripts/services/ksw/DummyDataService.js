"use strict";
(function(){
    angular.module('application')
        .factory("DummyDataService",function(){
           var peoplePickerResults = [
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "5448a17f24d7ab020000007d",
                   "id": "5448a17f24d7ab020000007d",
                   "title": "Syed Sirazus Salehein",
                   "email": "salehein@gmail.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAACZhI3OiY3gQHzPe100ue4owF%2bYDgc5xrFza6MElehuztTf01GF1%2bLMLj3xme2OU31VTAiT5RzCNGoYrihEtQpRi6ETsBHPb5uJsRSBuFJkL4MQd9ZwugDl1IusNEcV%2fmA%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/78A216E6-57F1-46A8-915C-A388F21F5536/skype_propic.JPG",
                   "smallpicture": "api/personalProfilePic/78A216E6-57F1-46A8-915C-A388F21F5536/skype_propic.JPG",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "545ae7cf33882c0200000030",
                   "id": "545ae7cf33882c0200000030",
                   "title": "Kevin Howard",
                   "email": "howardk602@gmail.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAAAZNxP3SjZIz2uZrW%2b0IzsiQnnr4FnoL7j9a8nFcMvXIdWpNXzCVqn4a%2bNx97JNERq7ad3ewvHTUNbnx%2fk3j41zY3udycAaVBoHg4Ce0WmvlLchWsYlGdl7w9A1so0nObU%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/defaultImages/image/people.png",
                   "smallpicture": "api/defaultImages/image/people.png",
                   "connTypes": [
                       "personal"
                   ],
                   "connType": "personal",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "545aebb533882c020000003b",
                   "id": "545aebb533882c020000003b",
                   "title": "Mohammad Faisal",
                   "email": "molmol@sisigma.com",
                   "clientURI": "APA91bGlVeVCkj22MAIxJqeFB4KXBZa56HdsCwelBeqxPCwO5P8ICB3Cl4W0luf4P73OZYGHOa0dA5MuNLEuLoV87mjKqcfMY19RnBLmFcyOMJA-tqridFdq9B4GXyMcjdBcnInyznx-HUjstrLAVio84IWFfPqp1Q",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/A14FCE1B-87DE-4E40-8E3B-3F9729A46999/mohammad faisal.jpg",
                   "smallpicture": "api/personalProfilePic/A14FCE1B-87DE-4E40-8E3B-3F9729A46999/mohammad faisal.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "545eecc7881be0020000005e",
                   "id": "545eecc7881be0020000005e",
                   "title": "Krishna Kumar",
                   "email": "kkpjofan@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADWpCF3tPdRSP7gHfDfQBj4NoteTrpPg4bgQx9y7jaLxGNKiPkWwCaRVKF1AEyuwUySqZ7TvueVVsJoJr1hco4noFHr%2bFlsIdvkaldjhiqf9bGI7AtRwL2AcACW0Hmw3Gw%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/defaultImages/image/people.png",
                   "smallpicture": "api/defaultImages/image/people.png",
                   "connTypes": [
                       "personal"
                   ],
                   "connType": "personal",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "545f0bdb2c4753020000004a",
                   "id": "545f0bdb2c4753020000004a",
                   "title": "Samantha  Christian",
                   "email": "wereallovatics@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAABq58TFza0Ii9H7oCmQphywviwqQfu5ivFyCJnSNaWKI4MSSwF6bi1AKodhKnhuP0VeEpomcnovxYn21M5CYLDqvlUJ4GYJGjtRA6oVK7hoO1aW3MruX6PFPu%2b9utuXY10%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/0C7A6B80-CB25-49F4-A483-4B79AF59513E/horse00.png",
                   "smallpicture": "api/personalProfilePic/0C7A6B80-CB25-49F4-A483-4B79AF59513E/horse00.png",
                   "connTypes": [
                       "personal"
                   ],
                   "connType": "personal",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54744db6ec35d70200000135",
                   "id": "54744db6ec35d70200000135",
                   "title": "Wahid Choudhury",
                   "email": "wahidbhogle@sisigma.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAABBj%2baigzQ8B3UkI7RA%2fIrqzEeIJ5I%2fl%2f67b804Dd54gsn%2fRe1J9aWsw%2bLG7K44W9o%2bDU5HQN6RPNcY0HlCZRWhUkHt%2bqZ5XSPHNAYq1%2bJUHxVlTORsS%2b85mKb2d%2f2du70%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/8457027F-F42C-43C8-AAA2-41E57374C8D3/wahid.jpg",
                   "smallpicture": "api/personalProfilePic/8457027F-F42C-43C8-AAA2-41E57374C8D3/wahid.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54744f2dec35d70200000147",
                   "id": "54744f2dec35d70200000147",
                   "title": "Tariqual Hassan",
                   "email": "tariqual@sisigma.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAABs5bapAqrmYW%2fL5%2fnk%2bRZ8qnELxiOAP4J3XtghiSHFpSlX72CMdHwDjvY5%2bw3lA0mTWtG4R0k4GNd3VkS4iJ0fd%2fhD2hyTU7RYv0Q2jZwlnk5GDAwJ5qI2ZHO%2buouYK0U%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/0F74688B-74D5-4BC6-A80F-790D3AB95E6D/10687271_10153030654813322_6185288705012261104_o.jpg",
                   "smallpicture": "api/personalProfilePic/0F74688B-74D5-4BC6-A80F-790D3AB95E6D/10687271_10153030654813322_6185288705012261104_o.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547450ebec35d70200000157",
                   "id": "547450ebec35d70200000157",
                   "title": "Sharif Khan",
                   "email": "sharif@sisigma.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAABJnnwctPDS6xfEbVch9blTzQ6sKVuX0jizgN9FMx778hp6MWkN1K4BqA3vrbbbk%2bLFzN2wjamwVTxBTmBx03LecojXUmts2rdjTdTsM6wF2TnLd12FSJl5XsZfHOo5YFA%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/8874DCB1-F1FF-4163-BD6B-BA43CD8A616D/piccc.jpg",
                   "smallpicture": "api/personalProfilePic/8874DCB1-F1FF-4163-BD6B-BA43CD8A616D/piccc.jpg",
                   "connTypes": [
                       "personal"
                   ],
                   "connType": "personal",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547c178157673e020000006e",
                   "id": "547c178157673e020000006e",
                   "title": "Ibrahim Islam",
                   "email": "ibrahim.islam@live.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAAD0pVL4LXFBMuY1vMrP72vblO8gqlY%2fOr5btliIoadkAlH29yD%2b2sglv8mP%2btVwucs7DDEr6sAdwcs9tCyzPho5tFcgMEdAU6NkYcP%2f1LW7KdRDLsTp3DyWGMtaS5afLC0%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/9F64E3B9-9315-43B3-8BBD-9F380C0A80F9/148.256x256.png",
                   "smallpicture": "api/personalProfilePic/9F64E3B9-9315-43B3-8BBD-9F380C0A80F9/148.256x256.png",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547c1e1957673e0200000090",
                   "id": "547c1e1957673e0200000090",
                   "title": "Faisal Amin",
                   "email": "faisal.amin@bs-23.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAAD5T96%2fELXsc%2fDjtr2cclK8Rs31x1iq3vJcnhbaIwV6V6JlQ%2bfsr%2bb1EySgGyPdcptMfyDtAm7JMGxoSbod1wmqCbk3dIyjs8%2fzTqAhoW%2fMsXUdEi00AESeYoaHxlq%2bmRg%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/A7CA0243-266A-446B-9610-DA538F68E1F4/palash___2_square.jpg",
                   "smallpicture": "api/personalProfilePic/A7CA0243-266A-446B-9610-DA538F68E1F4/palash___2_square.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547ee6a1adfc8a02000000e4",
                   "id": "547ee6a1adfc8a02000000e4",
                   "title": "Zahidur Rahman",
                   "email": "zahidur59@sisigma.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAADEwfDxOFN7AFQTV1nS1lAXf4ONREnW1zt3T72Pk0nlbNBSuTScV%2fjBHT0qtOuUuaJ1D9%2fmRC87FqBC6yd4L520BGukWWw9LoVJ%2bQoIKKall0EfnBON1xe8YiIAGZvo9rM%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/F27DEA4E-09AF-44AF-A3C6-A1CB6F41A4DF/rveahcw3.jpg",
                   "smallpicture": "api/personalProfilePic/F27DEA4E-09AF-44AF-A3C6-A1CB6F41A4DF/rveahcw3.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54aceac8a74cc202000000a2",
                   "id": "54aceac8a74cc202000000a2",
                   "title": "Demi Christian",
                   "email": "demithemoonwalker@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAABrn%2f%2f88s9G8v1qauCdfDrWdwT15QLCze5ObDbhiuBByCG3dD6E0eQEZw%2bnIddmF0%2fFgh6FtDynnl2mRvGDvrUs42rhqmKIMlGIiw3no2kzW%2fC%2fiY1FuUWjm1uIxsbDu5U%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/A6A75E93-1B36-4AA8-8423-1B52609CF772/lady4.jpg",
                   "smallpicture": "api/personalProfilePic/A6A75E93-1B36-4AA8-8423-1B52609CF772/lady4.jpg",
                   "connTypes": [
                       "personal"
                   ],
                   "connType": "personal",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54ae1f0ec8a65f020000003c",
                   "id": "54ae1f0ec8a65f020000003c",
                   "title": "Jeremiah Barker",
                   "email": "heyitsjeremiah0@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADtGSZMH1es%2foZ3MagbTIE2JTunipY%2fO%2fJhLxzXUXeC%2b8aEJNP4qEJzNWZOnFYPJIr7tM2Jr5cxj6ebaNLpgcoyoZmFwF%2brcVo%2fAQ9sz9ofg%2frozSihhlGwzVsU61MDppI%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/5894F141-26B3-4AF2-9341-56E4F8612EA6/es-conservative-haircut-men.jpg",
                   "smallpicture": "api/personalProfilePic/5894F141-26B3-4AF2-9341-56E4F8612EA6/es-conservative-haircut-men.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54ae1f37c8a65f020000003e",
                   "id": "54ae1f37c8a65f020000003e",
                   "title": "Michael Goldman",
                   "email": "michael.goldman00@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADtGSZMH1es%2foZ3MagbTIE2JTunipY%2fO%2fJhLxzXUXeC%2b8aEJNP4qEJzNWZOnFYPJIr7tM2Jr5cxj6ebaNLpgcoyoZmFwF%2brcVo%2fAQ9sz9ofg%2frozSihhlGwzVsU61MDppI%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/CFA43248-DE59-4625-BC85-5BDF6E34D191/Best-Mens-Hairstyles-for-Thick-Hair.jpg",
                   "smallpicture": "api/personalProfilePic/CFA43248-DE59-4625-BC85-5BDF6E34D191/Best-Mens-Hairstyles-for-Thick-Hair.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54ae1f9bc8a65f0200000044",
                   "id": "54ae1f9bc8a65f0200000044",
                   "title": "Connor Atwood",
                   "email": "connoratwood001@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADtGSZMH1es%2foZ3MagbTIE2JTunipY%2fO%2fJhLxzXUXeC%2b8aEJNP4qEJzNWZOnFYPJIr7tM2Jr5cxj6ebaNLpgcoyoZmFwF%2brcVo%2fAQ9sz9ofg%2frozSihhlGwzVsU61MDppI%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/15485DCA-D9B7-47C0-9DB0-DE7B140B6BF6/Business-men-hairstyle.jpg",
                   "smallpicture": "api/personalProfilePic/15485DCA-D9B7-47C0-9DB0-DE7B140B6BF6/Business-men-hairstyle.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54ae1fcec8a65f0200000046",
                   "id": "54ae1fcec8a65f0200000046",
                   "title": "Christian Martin",
                   "email": "christianmartin215@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAAJktGWGhDvK8zajXVgzDVbjR%2bxQ5V3hF36%2bLz2cknDoMfDGhnxuvF%2fVaaUxORCXvFxr4NvZ9A64WGR87CI6iSM4BkkqN6TMqF7jIGBkCOfsHSgOvbJHyacNeUdDtzI4Hc%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/38A5BC75-B5BC-4859-9E88-45D8C99034DA/2013-Spring-and-Summer-Haircuts-and-Hairstyles-For-Men-82.jpg",
                   "smallpicture": "api/personalProfilePic/38A5BC75-B5BC-4859-9E88-45D8C99034DA/2013-Spring-and-Summer-Haircuts-and-Hairstyles-For-Men-82.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54ae1fe5c8a65f0200000047",
                   "id": "54ae1fe5c8a65f0200000047",
                   "title": "Enrique Costa",
                   "email": "enriquecosta951@gmail.com",
                   "clientURI": "1651946445CF0BCAAF10EB4F22A12408ECA0BC64FCFEAF3481138AFD911F495C",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/7A23CD47-F1F1-4D83-844B-160217FA6D22/ryan-Business-Hairstyles-Men.jpg",
                   "smallpicture": "api/personalProfilePic/7A23CD47-F1F1-4D83-844B-160217FA6D22/ryan-Business-Hairstyles-Men.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54b2252ffc5570020000013d",
                   "id": "54b2252ffc5570020000013d",
                   "title": "John Smith",
                   "email": "johnthemoonwalker01@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADtGSZMH1es%2foZ3MagbTIE2JTunipY%2fO%2fJhLxzXUXeC%2b8aEJNP4qEJzNWZOnFYPJIr7tM2Jr5cxj6ebaNLpgcoyoZmFwF%2brcVo%2fAQ9sz9ofg%2frozSihhlGwzVsU61MDppI%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/ABAF50BE-7232-4BCB-8424-E73B3241939F/preppyhair.jpg",
                   "smallpicture": "api/personalProfilePic/ABAF50BE-7232-4BCB-8424-E73B3241939F/preppyhair.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54b264fbfc55700200000305",
                   "id": "54b264fbfc55700200000305",
                   "title": "Mosfiqur Rahman",
                   "email": "mosfiqur.rahman@kaz.com.bd",
                   "clientURI": "abcd",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/1E754210-3C8D-40F5-813E-70C958DE11B4/Mosfiqur Rahman.jpg",
                   "smallpicture": "api/personalProfilePic/1E754210-3C8D-40F5-813E-70C958DE11B4/Mosfiqur Rahman.jpg",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": false,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54db0897c92ceb03000000ed",
                   "id": "54db0897c92ceb03000000ed",
                   "title": "Atish Dipongkor",
                   "email": "atish@bs-23.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAADc2QZVsmY7jEwTv2Lll4yuC0TnDe%2b5ZFoT12Or%2fFtohsHawQqaj3KANHH188O8i3ya5bNOG98rQJaf4u651E1boD8LnB6gCNg7ASX%2fEOcFTePMflnJwv36ODX172LmXus%3d",
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Account",
                   "text": "Scrum Master",
                   "picture": "api/personalProfilePic/E50A5347-999C-4E02-B52E-04CBA7805036/Indian Visa Photo.jpg",
                   "smallpicture": "api/personalProfilePic/E50A5347-999C-4E02-B52E-04CBA7805036/Indian Visa Photo.jpg",
                   "connTypes": [
                       "connection",
                       "Employee"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "online": true,
                   "entityType": "Person"
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "544b1986529171020000003a",
                   "id": "544b1986529171020000003a",
                   "title": "MNGMT",
                   "companyName": "MNGMT",
                   "groupName": "MNGMT",
                   "profileDesc": "description",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAA1SC5P27iZ1CNpz7e%2besXINRO%2bXhEgqUf%2bHFLiZU1TqwMXFU9j7LhwZn6RTEn0F7%2fySwVfCxg8dOzqujcs%2bDR%2ftn8uJTlfSuoV4E60%2fw1m8whdh1HfeJ%2bbS%2bKTmBIW9nM%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "MNGMT"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "MNGMT"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "MNGMT"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": "description"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": "MNGMT description"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": "MNGMT description"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/544b1986529171020000003a/mngmtlogo.png",
                   "smallpicture": "api/corporateProfilePic/544b1986529171020000003a/mngmtlogo.png",
                   "connTypes": [
                       "employee",
                       "admin"
                   ],
                   "connType": "employee",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "544b1986529171020000003c",
                           "joinDate": "2014-10-25T03:31:18.885Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "544b19865291710200000045",
                       "sharedSpace": "544b19865291710200000046"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "544b1a3a529171020000004a",
                   "id": "544b1a3a529171020000004a",
                   "title": "PKG",
                   "companyName": "PKG",
                   "groupName": "PKG",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAA1SC5P27iZ1CNpz7e%2besXINRO%2bXhEgqUf%2bHFLiZU1TqwMXFU9j7LhwZn6RTEn0F7%2fySwVfCxg8dOzqujcs%2bDR%2ftn8uJTlfSuoV4E60%2fw1m8whdh1HfeJ%2bbS%2bKTmBIW9nM%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "PKG"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "PKG"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "PKG"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/544b1a3a529171020000004a/pkglogo.png",
                   "smallpicture": "api/corporateProfilePic/544b1a3a529171020000004a/pkglogo.png",
                   "connTypes": [
                       "admin",
                       "employee"
                   ],
                   "connType": "admin",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "544b1a3a529171020000004c",
                           "joinDate": "2014-10-25T03:34:18.751Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "544b1a3a5291710200000055",
                       "sharedSpace": "544b1a3a5291710200000056"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "544b1bb3529171020000005c",
                   "id": "544b1bb3529171020000005c",
                   "title": "LCM",
                   "companyName": "LCM",
                   "groupName": "LCM",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAA1SC5P27iZ1CNpz7e%2besXINRO%2bXhEgqUf%2bHFLiZU1TqwMXFU9j7LhwZn6RTEn0F7%2fySwVfCxg8dOzqujcs%2bDR%2ftn8uJTlfSuoV4E60%2fw1m8whdh1HfeJ%2bbS%2bKTmBIW9nM%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "LCM"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "LCM"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "LCM"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/544b1bb3529171020000005c/CheetahLCMLogo.png",
                   "smallpicture": "api/corporateProfilePic/544b1bb3529171020000005c/CheetahLCMLogo.png",
                   "connTypes": [
                       "employee",
                       "admin"
                   ],
                   "connType": "employee",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "544b1bb3529171020000005e",
                           "joinDate": "2014-10-25T03:40:35.413Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "544b1bb35291710200000067",
                       "sharedSpace": "544b1bb35291710200000068"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "544b1c91529171020000006c",
                   "id": "544b1c91529171020000006c",
                   "title": "PROD",
                   "companyName": "PROD",
                   "groupName": "PROD",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAA1SC5P27iZ1CNpz7e%2besXINRO%2bXhEgqUf%2bHFLiZU1TqwMXFU9j7LhwZn6RTEn0F7%2fySwVfCxg8dOzqujcs%2bDR%2ftn8uJTlfSuoV4E60%2fw1m8whdh1HfeJ%2bbS%2bKTmBIW9nM%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "PROD"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "PROD"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "PROD"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/544b1c91529171020000006c/prdLogo.png",
                   "smallpicture": "api/corporateProfilePic/544b1c91529171020000006c/prdLogo.png",
                   "connTypes": [
                       "admin",
                       "employee"
                   ],
                   "connType": "admin",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "544b1c91529171020000006e",
                           "joinDate": "2014-10-25T03:44:17.536Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "544b1c915291710200000077",
                       "sharedSpace": "544b1c915291710200000078"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "544b1d15529171020000007c",
                   "id": "544b1d15529171020000007c",
                   "title": "TEST",
                   "companyName": "TEST",
                   "groupName": "TEST",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAA1SC5P27iZ1CNpz7e%2besXINRO%2bXhEgqUf%2bHFLiZU1TqwMXFU9j7LhwZn6RTEn0F7%2fySwVfCxg8dOzqujcs%2bDR%2ftn8uJTlfSuoV4E60%2fw1m8whdh1HfeJ%2bbS%2bKTmBIW9nM%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "TEST"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "TEST"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "TEST"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/544b1d15529171020000007c/testLogo.png",
                   "smallpicture": "api/corporateProfilePic/544b1d15529171020000007c/testLogo.png",
                   "connTypes": [
                       "admin",
                       "employee"
                   ],
                   "connType": "admin",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "544b1d15529171020000007e",
                           "joinDate": "2014-10-25T03:46:29.356Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "544b1d155291710200000087",
                       "sharedSpace": "544b1d155291710200000088"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "544b1d89529171020000008c",
                   "id": "544b1d89529171020000008c",
                   "title": "VALID",
                   "companyName": "VALID",
                   "groupName": "VALID",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAA1SC5P27iZ1CNpz7e%2besXINRO%2bXhEgqUf%2bHFLiZU1TqwMXFU9j7LhwZn6RTEn0F7%2fySwVfCxg8dOzqujcs%2bDR%2ftn8uJTlfSuoV4E60%2fw1m8whdh1HfeJ%2bbS%2bKTmBIW9nM%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "VALID"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "VALID"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "VALID"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       },
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "VALIDATION"
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "VALIDATION"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "VALIDATION"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/544b1d89529171020000008c/validlogo.png",
                   "smallpicture": "api/corporateProfilePic/544b1d89529171020000008c/validlogo.png",
                   "connTypes": [
                       "employee",
                       "admin"
                   ],
                   "connType": "employee",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "544b1d89529171020000008e",
                           "joinDate": "2014-10-25T03:48:25.209Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "544b1d895291710200000097",
                       "sharedSpace": "544b1d895291710200000098"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "544b1e37529171020000009c",
                   "id": "544b1e37529171020000009c",
                   "title": "QUAL",
                   "companyName": "QUAL",
                   "groupName": "QUAL",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAA1SC5P27iZ1CNpz7e%2besXINRO%2bXhEgqUf%2bHFLiZU1TqwMXFU9j7LhwZn6RTEn0F7%2fySwVfCxg8dOzqujcs%2bDR%2ftn8uJTlfSuoV4E60%2fw1m8whdh1HfeJ%2bbS%2bKTmBIW9nM%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "QUAL"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "QUAL"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "QUAL"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/544b1e37529171020000009c/Quallogo.png",
                   "smallpicture": "api/corporateProfilePic/544b1e37529171020000009c/Quallogo.png",
                   "connTypes": [
                       "admin",
                       "employee"
                   ],
                   "connType": "admin",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "544b1e37529171020000009e",
                           "joinDate": "2014-10-25T03:51:19.245Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "544b1e3752917102000000a7",
                       "sharedSpace": "544b1e3752917102000000a8"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54585c4ee268b802000000fa",
                   "id": "54585c4ee268b802000000fa",
                   "title": "CLC",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAALpep4NAPLWavHtGB0nu5jmfTO39L0kBOI19DSIZfRXJvdG%2fSfDgF2CKJyIKgLSA2hcdsQxxzAoTbR5HCY%2fxUcTS8O5ojFlk0Mxa%2f0GiFked%2fhc2W5I4H0K1TxyA20dXQ%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "CLC"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "HammerCLC"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/54585c4ee268b802000000fa/LCMLogo.png",
                   "smallpicture": "api/corporateProfilePic/54585c4ee268b802000000fa/LCMLogo.png",
                   "connTypes": [
                       "employee",
                       "admin"
                   ],
                   "connType": "employee",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "54585c4ee268b802000000fc",
                           "joinDate": "2014-11-04T04:55:42.814Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "54585c4ee268b80200000105",
                       "sharedSpace": "54585c4ee268b80200000106"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "5459aabf9492a602000000dc",
                   "id": "5459aabf9492a602000000dc",
                   "title": "NPI",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAACGhUasaLU%2fxbNA5vDVx8zmtn4D5MwgjcbzOfcickpXCopKfkGA5VfW4kW31eAPNYIEtShfvi86UTPLIyJs1dX4HpX3DWxDUvIV%2btMItOyzGhxzcmKKn4LAMnG09%2f3K6pU%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "NPI"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "HammerNPI"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/5459aabf9492a602000000dc/NPILogo.png",
                   "smallpicture": "api/corporateProfilePic/5459aabf9492a602000000dc/NPILogo.png",
                   "connTypes": [
                       "admin",
                       "employee"
                   ],
                   "connType": "admin",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "5459aabf9492a602000000de",
                           "joinDate": "2014-11-05T04:42:39.823Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "5459aabf9492a602000000e7",
                       "sharedSpace": "5459aabf9492a602000000e8"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "5459aae59492a602000000ee",
                   "id": "5459aae59492a602000000ee",
                   "title": "OpsM",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAACGhUasaLU%2fxbNA5vDVx8zmtn4D5MwgjcbzOfcickpXCopKfkGA5VfW4kW31eAPNYIEtShfvi86UTPLIyJs1dX4HpX3DWxDUvIV%2btMItOyzGhxzcmKKn4LAMnG09%2f3K6pU%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "OpsM"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "HammerOpsM"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/5459aae59492a602000000ee/OpsMLogo.png",
                   "smallpicture": "api/corporateProfilePic/5459aae59492a602000000ee/OpsMLogo.png",
                   "connTypes": [
                       "employee",
                       "admin"
                   ],
                   "connType": "employee",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "5459aae59492a602000000f0",
                           "joinDate": "2014-11-05T04:43:17.756Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "5459aae59492a602000000f9",
                       "sharedSpace": "5459aae59492a602000000fa"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "5459ab039492a602000000ff",
                   "id": "5459ab039492a602000000ff",
                   "title": "Dev",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAACGhUasaLU%2fxbNA5vDVx8zmtn4D5MwgjcbzOfcickpXCopKfkGA5VfW4kW31eAPNYIEtShfvi86UTPLIyJs1dX4HpX3DWxDUvIV%2btMItOyzGhxzcmKKn4LAMnG09%2f3K6pU%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "Dev"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "HammerDev"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/5459ab039492a602000000ff/DevLogo.png",
                   "smallpicture": "api/corporateProfilePic/5459ab039492a602000000ff/DevLogo.png",
                   "connTypes": [
                       "employee",
                       "admin"
                   ],
                   "connType": "employee",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "5459ab039492a60200000101",
                           "joinDate": "2014-11-05T04:43:47.013Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "5459ab039492a6020000010a",
                       "sharedSpace": "5459ab039492a6020000010b"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "5459ab139492a60200000110",
                   "id": "5459ab139492a60200000110",
                   "title": "Ops",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAACGhUasaLU%2fxbNA5vDVx8zmtn4D5MwgjcbzOfcickpXCopKfkGA5VfW4kW31eAPNYIEtShfvi86UTPLIyJs1dX4HpX3DWxDUvIV%2btMItOyzGhxzcmKKn4LAMnG09%2f3K6pU%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "Ops"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "HammerOps"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/5459ab139492a60200000110/OpsLogo.png",
                   "smallpicture": "api/corporateProfilePic/5459ab139492a60200000110/OpsLogo.png",
                   "connTypes": [
                       "admin",
                       "employee"
                   ],
                   "connType": "admin",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "5459ab139492a60200000112",
                           "joinDate": "2014-11-05T04:44:03.968Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "5459ab139492a6020000011b",
                       "sharedSpace": "5459ab139492a6020000011c"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "545aef3433882c0200000064",
                   "id": "545aef3433882c0200000064",
                   "title": "KnotSuite Platform Group",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "molmol@sisigma.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADsDPplIcu1eALnPO3NyxWeWOcyO%2bRa7OtdVOnoMGdcHkYFpIW8i8fgijeuBWCc9%2b9duAUjUF2Ire0cCG%2fYkMdXy9HzSZr57m9mET67XmQX4b7RmXrJD%2f8CoXvAq1647kc%3d",
                   "adminId": "545aebb533882c020000003b",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KnotSuite Platform Group"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "molmol@sisigma.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/545aef3433882c0200000064/platformlogo.png",
                   "smallpicture": "api/corporateProfilePic/545aef3433882c0200000064/platformlogo.png",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "545aebb533882c020000003b",
                           "_id": "545aef3433882c0200000066",
                           "joinDate": "2014-11-06T03:47:00.324Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "545aef3433882c020000006f",
                       "sharedSpace": "545aef3433882c0200000070"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "545aef4f33882c0200000076",
                   "id": "545aef4f33882c0200000076",
                   "title": "KnotSuite Apps Group",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "molmol@sisigma.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADsDPplIcu1eALnPO3NyxWeWOcyO%2bRa7OtdVOnoMGdcHkYFpIW8i8fgijeuBWCc9%2b9duAUjUF2Ire0cCG%2fYkMdXy9HzSZr57m9mET67XmQX4b7RmXrJD%2f8CoXvAq1647kc%3d",
                   "adminId": "545aebb533882c020000003b",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KnotSuite Apps Group"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "molmol@sisigma.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/545aef4f33882c0200000076/knotappslogo.png",
                   "smallpicture": "api/corporateProfilePic/545aef4f33882c0200000076/knotappslogo.png",
                   "connTypes": [
                       "Manager"
                   ],
                   "connType": "Manager",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "545aebb533882c020000003b",
                           "_id": "545aef4f33882c0200000078",
                           "joinDate": "2014-11-06T03:47:27.911Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "545aef4f33882c0200000081",
                       "sharedSpace": "545aef4f33882c0200000082"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "545aef6933882c0200000086",
                   "id": "545aef6933882c0200000086",
                   "title": "KnotSuite Mobile Group",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "molmol@sisigma.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAADsDPplIcu1eALnPO3NyxWeWOcyO%2bRa7OtdVOnoMGdcHkYFpIW8i8fgijeuBWCc9%2b9duAUjUF2Ire0cCG%2fYkMdXy9HzSZr57m9mET67XmQX4b7RmXrJD%2f8CoXvAq1647kc%3d",
                   "adminId": "545aebb533882c020000003b",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KnotSuite Mobile Group"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "molmol@sisigma.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/545aef6933882c0200000086/mobilelogo.png",
                   "smallpicture": "api/corporateProfilePic/545aef6933882c0200000086/mobilelogo.png",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "545aebb533882c020000003b",
                           "_id": "545aef6933882c0200000088",
                           "joinDate": "2014-11-06T03:47:53.040Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "545aef6933882c0200000091",
                       "sharedSpace": "545aef6933882c0200000092"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547a8872a044760200000040",
                   "id": "547a8872a044760200000040",
                   "title": "KnotSuite Product Steering Group",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "molmol@sisigma.com",
                   "clientURI": "https://dev-frontserver.herokuapp.com/",
                   "adminId": "545aebb533882c020000003b",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KnotSuite Product Steering Group"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "molmol@sisigma.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/547a8872a044760200000040/steeringlogo.png",
                   "smallpicture": "api/corporateProfilePic/547a8872a044760200000040/steeringlogo.png",
                   "connTypes": [
                       "product manager"
                   ],
                   "connType": "product manager",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "545aebb533882c020000003b",
                           "_id": "547a8872a044760200000042",
                           "joinDate": "2014-11-30T03:01:06.154Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "547a8872a04476020000004b",
                       "sharedSpace": "547a8872a04476020000004c"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547a888aa044760200000050",
                   "id": "547a888aa044760200000050",
                   "title": "KnotSuite Design Team",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "molmol@sisigma.com",
                   "clientURI": "https://dev-frontserver.herokuapp.com/",
                   "adminId": "545aebb533882c020000003b",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KnotSuite Design Team"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "molmol@sisigma.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/547a888aa044760200000050/designlogo.png",
                   "smallpicture": "api/corporateProfilePic/547a888aa044760200000050/designlogo.png",
                   "connTypes": [
                       "Manager"
                   ],
                   "connType": "Manager",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "545aebb533882c020000003b",
                           "_id": "547a888aa044760200000052",
                           "joinDate": "2014-11-30T03:01:30.605Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "547a888aa04476020000005b",
                       "sharedSpace": "547a888aa04476020000005c"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547a88cba044760200000060",
                   "id": "547a88cba044760200000060",
                   "title": "KnotSuite Performance and Security Group",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "molmol@sisigma.com",
                   "clientURI": "https://dev-frontserver.herokuapp.com/",
                   "adminId": "545aebb533882c020000003b",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KnotSuite Performance and Security Group"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "molmol@sisigma.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/547a88cba044760200000060/securitylogo.png",
                   "smallpicture": "api/corporateProfilePic/547a88cba044760200000060/securitylogo.png",
                   "connTypes": [
                       "product coordinator"
                   ],
                   "connType": "product coordinator",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "545aebb533882c020000003b",
                           "_id": "547a88cba044760200000062",
                           "joinDate": "2014-11-30T03:02:35.312Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "547a88cba04476020000006b",
                       "sharedSpace": "547a88cba04476020000006c"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "547df4444aa1270200000035",
                   "id": "547df4444aa1270200000035",
                   "title": "KnotSuite BS Steering Group",
                   "companyName": "",
                   "groupName": "",
                   "profileDesc": "",
                   "email": "molmol@sisigma.com",
                   "clientURI": "https://bn1.notify.windows.com/?token=AwYAAAAo6V0FTmlr7Fg8exQ0dgiE6%2bp5%2bqYB1%2fYvbOXF44CfwNDRjnFLhszGJDlQ%2faC4KyqutGsz1%2bJ7LdOe9fmZgvTVg5BVGTumRQLxjt5HlyyaJ9%2b4PH1sSCleQIdkfGvPYps%3d",
                   "adminId": "545aebb533882c020000003b",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KnotSuite BS Steering Group"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "molmol@sisigma.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/corporateProfilePic/547df4444aa1270200000035/bsmanagementlogo.png",
                   "smallpicture": "api/corporateProfilePic/547df4444aa1270200000035/bsmanagementlogo.png",
                   "connTypes": [
                       "employee"
                   ],
                   "connType": "employee",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "545aebb533882c020000003b",
                           "_id": "547df4444aa1270200000037",
                           "joinDate": "2014-12-02T17:17:56.390Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "547df4444aa1270200000040",
                       "sharedSpace": "547df4444aa1270200000041"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54cf89fd79ee0f03000000bf",
                   "id": "54cf89fd79ee0f03000000bf",
                   "title": "IliasSpace",
                   "companyName": "IliasSpaceCompany",
                   "groupName": "IliasSpaceGroup",
                   "profileDesc": "",
                   "email": "brian.tobey123@gmail.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAACja8jlidlqS0s97pOayq1%2bYZl%2bCMzyqnFlxLUfj%2fdc2a1hC%2bj6fazKEtWSE2qpLGR0ezm96IFbyroF%2bgrXVg4Mn6xPp%2bEBe%2fup5LuHp%2b8R7KAcdZqbWyxhHskvYPiDsbU%3d",
                   "adminId": "544b11bf5291710200000030",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "IliasSpaceCompany"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "IliasSpace"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "IliasSpaceGroup"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "brian.tobey123@gmail.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/defaultImages/image/org.png",
                   "smallpicture": "api/defaultImages/image/org.png",
                   "connTypes": [
                       "admin",
                       "employee"
                   ],
                   "connType": "admin",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": true,
                   "admins": [
                       {
                           "id": "544b11bf5291710200000030",
                           "_id": "54cf89fd79ee0f03000000c1",
                           "joinDate": "2015-02-02T14:30:21.569Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "54cf89fe79ee0f03000000cc",
                       "sharedSpace": "54cf89fe79ee0f03000000cd"
                   }
               },
               {
                   "accountId": "544b11bf5291710200000030",
                   "_id": "54db097ec92ceb03000000f7",
                   "id": "54db097ec92ceb03000000f7",
                   "title": "KSW",
                   "companyName": "KnotSuite",
                   "groupName": "KnotSuiteWeb",
                   "profileDesc": "",
                   "email": "illias@brainstation-23.com",
                   "clientURI": "https://sin.notify.windows.com/?token=AwYAAADR1Y%2fLJwAL9JAm8Okcwo1D6dXZpuaV53aK0Jx%2bjLgwjO1MD83QO%2fEyvEfA5vLjJKicszvlHSqTAG1HyVyA3NiJYu6gvt7ExiRCT96oB5CH1JeWQEkjNcF4ZYefnIBYXIM%3d",
                   "adminId": "54db04d1c92ceb03000000da",
                   "makeEmployee": false,
                   "allowFullEnv": false,
                   "allowPin": false,
                   "awardApproval": 1,
                   "awardRules": {
                       "thumbsUpAward": true,
                       "peerAwardAnyEmployee": true,
                       "excelAwardAdminOnly": true,
                       "xferAwards": true
                   },
                   "topStoryRules": {
                       "allowStoryCollectionFromGroupsWithRels": false,
                       "allowStoryCollectionFromAllDomainGroups": false,
                       "topStoryFromGroupsWithRels": false,
                       "topStoryFromAllAllowedOrgs": false
                   },
                   "sharedSpaceRules": {
                       "accessSharedSpace": true,
                       "showSharedSpaceTags": true
                   },
                   "attributesPredefined": [
                       {
                           "attributeId": "53997942671c0d6b6d4498ab",
                           "attributeValue": "KnotSuite"
                       },
                       {
                           "attributeId": "53997950671c0d6b6d4498ac",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997959671c0d6b6d4498ad",
                           "attributeValue": "KSW"
                       },
                       {
                           "attributeId": "53997966671c0d6b6d4498ae",
                           "attributeValue": "KnotSuiteWeb"
                       },
                       {
                           "attributeId": "53997a19671c0d6b6d4498af",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997a30671c0d6b6d4498b0",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53997aba671c0d6b6d4498b1",
                           "attributeValue": ""
                       },
                       {
                           "attributeId": "53b11775671c0d6b6d4498b4",
                           "attributeValue": "illias@brainstation-23.com"
                       }
                   ],
                   "tags": [],
                   "attributes": [],
                   "relations": [],
                   "key": "Organization",
                   "text": "Scrum Master",
                   "picture": "api/defaultImages/image/org.png",
                   "smallpicture": "api/defaultImages/image/org.png",
                   "connTypes": [
                       "connection"
                   ],
                   "connType": "connection",
                   "isWatched": false,
                   "entityType": "Organization",
                   "isAdmin": false,
                   "admins": [
                       {
                           "id": "54db04d1c92ceb03000000da",
                           "_id": "54db097ec92ceb03000000f8",
                           "joinDate": "2015-02-11T07:49:18.891Z"
                       }
                   ],
                   "predefinedSpaces": {
                       "publicSpace": "54db097fc92ceb0300000102",
                       "sharedSpace": "54db097fc92ceb0300000103"
                   }
               }
           ];

            var nominatedAwards = [
                {
                    "awardTrackId": "54f4474a809cd70300000058",
                    "awardId": "54f4474a809cd70300000057",
                    "title": "Good Job!",
                    "description": "For doing a good job.",
                    "image": "api/signals/1421670010180/getAttachment/Award_goodjob.png",
                    "pledgeCount": 3,
                    "initialPledgeRequired": 5,
                    "canPledge": false,
                    "status": "nominated"
                },
                {
                    "awardTrackId": "54c2a6c8ab29490300000085",
                    "awardId": "54c2a6c8ab29490300000084",
                    "title": "Excellent",
                    "description": "For doing an excellent job!",
                    "image": "api/signals/1421669908455/getAttachment/Award_excellent.png",
                    "pledgeCount": 4,
                    "initialPledgeRequired": 5,
                    "canPledge": false,
                    "status": "nominated"
                },
                {
                    "awardTrackId": "54f574499626f00300000085",
                    "awardId": "54f574499626f00300000084",
                    "title": "Speed Demon",
                    "description": "For beating a deadline way before time.",
                    "image": "api/signals/1421670423567/getAttachment/Award_speeddemon.png",
                    "pledgeCount": 5,
                    "initialPledgeRequired": 5,
                    "canPledge": true,
                    "status": "nominated"
                },
                {
                    "awardTrackId": "54f574659626f00300000089",
                    "awardId": "54f574659626f00300000088",
                    "title": "Test",
                    "description": "Award",
                    "image": "api/defaultImages/image/award.png",
                    "pledgeCount": 2,
                    "initialPledgeRequired": 2,
                    "canPledge": true,
                    "status": "nominated"
                }
            ];

            var awards = [
                {
                    "awardTrackId": "54f574659626f00300000089",
                    "awardId": "54f574659626f00300000088",
                    "title": "Test",
                    "description": "Award",
                    "image": "api/defaultImages/image/award.png",
                    "pledgeCount": 0,
                    "initialPledgeRequired": 2,
                    "canPledge": false,
                    "status": "awarded"
                }
            ]

            var prodUrl = 'https://prod-frontserver.herokuapp.com/';

            var awardList = [
                {
                    "title": "Test",
                    "description": "Award",
                    "imageUri": "api/defaultImages/image/award.png",
                    "_id": "54bf4fec6a4bb00300000194",
                    "__v": 0,
                    "initialPledgeRequired": 2,
                    "awardScope": null,
                    "tags": []
                },
                {
                    "title": "King Fisher Sky Award",
                    "description": "sky Rule Award for Kingfisher",
                    "imageUri": "api/signals/1421666835824/getAttachment/download.jpg",
                    "_id": "54bcea17a2650b0300000042",
                    "__v": 0,
                    "initialPledgeRequired": 0,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#kingfisher"
                        }
                    ]
                },
                {
                    "title": "Excellent",
                    "description": "For doing an excellent job!",
                    "imageUri": "api/signals/1421669908455/getAttachment/Award_excellent.png",
                    "_id": "54bcf619a2650b030000008e",
                    "__v": 0,
                    "initialPledgeRequired": 5,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#general"
                        }
                    ]
                },
                {
                    "title": "Job Well Done!",
                    "description": "For a well done job.",
                    "imageUri": "api/signals/1421669963327/getAttachment/Award_jobwelldone.png",
                    "_id": "54bcf650a2650b0300000091",
                    "__v": 0,
                    "initialPledgeRequired": 5,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#general"
                        }
                    ]
                },
                {
                    "title": "Good Job!",
                    "description": "For doing a good job.",
                    "imageUri": "api/signals/1421670010180/getAttachment/Award_goodjob.png",
                    "_id": "54bcf67fa2650b0300000096",
                    "__v": 0,
                    "initialPledgeRequired": 5,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#general"
                        }
                    ]
                },
                {
                    "title": "Great job!",
                    "description": "For doing a great job!",
                    "imageUri": "api/signals/1421670264732/getAttachment/Award_greatjob.png",
                    "_id": "54bcf77ea2650b030000009b",
                    "__v": 0,
                    "initialPledgeRequired": 5,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#general"
                        }
                    ]
                },
                {
                    "title": "Speed Demon",
                    "description": "For beating a deadline way before time.",
                    "imageUri": "api/signals/1421670423567/getAttachment/Award_speeddemon.png",
                    "_id": "54bcf829a2650b030000009e",
                    "__v": 0,
                    "initialPledgeRequired": 5,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#general"
                        }
                    ]
                },
                {
                    "title": "Money Maker",
                    "description": "For discovering unnecessary expanses and figuring out alternative cheaper solutions.",
                    "imageUri": "api/signals/1421670633852/getAttachment/Award_moneymaker.png",
                    "_id": "54bcf8efa2650b03000000a1",
                    "__v": 0,
                    "initialPledgeRequired": 5,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#admin"
                        },
                        {
                            "tagName": "#HR"
                        },
                        {
                            "tagName": "#techSupport"
                        }
                    ]
                },
                {
                    "title": "New",
                    "description": "Award",
                    "imageUri": "api/defaultImages/image/award.png",
                    "_id": "54c62de632487e0300000203",
                    "__v": 0,
                    "initialPledgeRequired": 2,
                    "awardScope": null,
                    "tags": [
                        {
                            "tagName": "#1"
                        }
                    ]}];

            var getAwardById = function(awardId){
                var award = _.find(awardList,{_id:awardId},'_id');
                award.imageUri = prodUrl+award.imageUri;
                return award;
            }

            var getAwardList = function(){
                var tempAwardList ={
                    "#UNTAGGED":[]
                };
                var temp = angular.copy(awardList);
                angular.forEach(temp,function(award){
                    award.imageUri = prodUrl+award.imageUri;
                       if(award.tags.length>0){
                           angular.forEach(award.tags,function(tag){
                               if(!tempAwardList.hasOwnProperty(tag.tagName)){
                                   tempAwardList[tag.tagName] = [];
                               }
                                  tempAwardList[tag.tagName].push(award);

                           });
                       }else{
                           if(!tempAwardList.hasOwnProperty("#UNTAGGED")){
                               tempAwardList["#UNTAGGED"] = [];
                           }
                           tempAwardList["#UNTAGGED"].push(award);
                       }
                });
                return tempAwardList;
            }

            return{
                getConnection :function(){
                    var tempResult = angular.copy(peoplePickerResults);
                    for(var i = 0 ; i<tempResult.length;i++){
                        tempResult[i].smallpicture = prodUrl + tempResult[i].smallpicture;
                    }
                    return tempResult;
                },
                getAward: function(){
                    var tempAward = angular.copy(awards);
                    angular.forEach(tempAward,function(award){
                       award.image = prodUrl +  award.image;
                    });
                    return tempAward;
                },
                getNominatedAward: function(){
                    var tempNominatedAward = angular.copy(nominatedAwards);
                    angular.forEach(tempNominatedAward,function(award){
                        award.image = prodUrl +  award.image;
                    });
                    return tempNominatedAward;
                },
                getAwardList:getAwardList,
                getAwardById:getAwardById
            }
        });
})();